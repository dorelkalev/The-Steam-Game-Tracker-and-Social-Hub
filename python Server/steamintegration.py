#       Add user fields for SteamID and Username
#       Add separate model with relational mapping to user's steamID
#       Add fields for owned games, playtime, last played, ...
#                 Create column in database for activating auto update from steam
#       Make functions to make API calls to steam, receive JSON payload
# TODO:
#       Parse JSON payload, fill fields based on userID

#                                  primary   required        nullable               nullable
# Schema for steamData database: | SteamID | Date | JSON payload (games playtime) | Friends |
#                                | 222     | 05   |         ...                   |  ...    |
#                                | 222     | 06   |         ...                   |  ...    |
# each update for data based on SteamID will be its own entry, tagged with date to allow comparison between entries



"""
Placeholder:

async def get_steamData_db(session: AsyncSession = Depends(get_async_session)):
    yield ----------(session, steamData)
"""
import asyncio
import httpx
import json
from datetime import datetime
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import insert, select
from models import SteamData,SteamIDs
#from models import SteamData
#from authentication import settings

steam_app_name_lookup = {}


def initializeSteamAppNameCache():
    global steam_app_name_lookup

    url = "https://api.steampowered.com/IStoreService/GetAppList/v1/"
    params = {"key": "AE88E413FD5384D1164CC3599BA1A82C"}

    response = httpx.get(url, params=params)
    response.raise_for_status()

    data = response.json()
    apps = data.get("response", {}).get("apps", [])

    # Build dict: { appid: name }
    steam_app_name_lookup = {app["appid"]: app["name"] for app in apps}
    print(steam_app_name_lookup)


class settings:
    STEAM_API_KEY="AE88E413FD5384D1164CC3599BA1A82C"

async def steamRequest(steamID):
    base_url = "https://api.steampowered.com"
    endpoint = f"{base_url}/IPlayerService/GetOwnedGames/v0001"
    params = {
        "key": settings.STEAM_API_KEY,
        "steamid": steamID
    }
    async with httpx.AsyncClient() as client:
        response = await client.get(endpoint, params=params)
        response.raise_for_status()
        return response.json()

async def steamGetAppName(appID: int) -> str:
    return steam_app_name_lookup.get(appID, f"App {appID}")

async def formatSteamDataPayload(steam_id: str):
    response = await steamRequest(steam_id)
    games = response.get("response", {}).get("games", [])

    enriched_games = []
    for game in games:
        print(game.get("appid"))
        game_data = {
            "appid": game.get("appid"),
            "name": await steamGetAppName(game.get("appid")),
            "playtime_forever": game.get("playtime_forever", 0),
            "playtime_windows": game.get("playtime_windows_forever", 0),
            "playtime_mac": game.get("playtime_mac_forever", 0),
            "playtime_linux": game.get("playtime_linux_forever", 0),
            "playtime_deck": game.get("playtime_deck_forever", 0),
            "playtime_disconnected": game.get("playtime_disconnected", 0),
            "last_played": game.get("rtime_last_played", 0)
        }
        enriched_games.append(game_data)

    payload_json = json.dumps({
        "game_count": len(enriched_games),
        "games": enriched_games
    })
    print(response)

    return {
        "steam_id": steam_id,
        "date": datetime.utcnow().isoformat(),
        "payload": payload_json,
    }



async def insertSteamDataEntry(data: dict, db: AsyncSession):
    stmt = insert(SteamData).values(
        steam_id=data["steam_id"],
        date=datetime.fromisoformat(data["date"]),
        payload=data["payload"],
    )
    await db.execute(stmt)
    await db.commit()


async def ensureSteamIDExists(steam_id: int, db: AsyncSession):
    # Check if steam_id already exists
    result = await db.execute(select(SteamIDs).where(SteamIDs.steam_id == steam_id))
    existing = result.scalar_one_or_none()

    if existing is None:
        # Not found, insert with active=False
        new_entry = SteamIDs(steam_id=steam_id, active=False)
        db.add(new_entry)
        await db.commit()



async def processSteamID(steam_id: int, db: AsyncSession):
    await ensureSteamIDExists(steam_id, db)
    payload = await formatSteamDataPayload(str(steam_id))  # formatSteamDataPayload expects a str
    await insertSteamDataEntry(payload, db)



async def test(): # testing function for development purposes
    """
    result = await steamRequest("76561198259864303")

    print(result)
    """
    appName = await steamGetAppName(420)
    print(appName)
    """
    result = formatSteamDataPayload("76561198259864303")
    print(result)
    """
