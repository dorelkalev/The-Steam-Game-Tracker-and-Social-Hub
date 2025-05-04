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
#from datetime import datetime
#from models import SteamData
#from authentication import settings
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

async def steamGetAppName(appID):
    base_url = "https://store.steampowered.com"
    endpoint = f"{base_url}/api/appdetails"
    params = {
        "appids":appID
    }
    async with httpx.AsyncClient() as client:
        response = await client.get(endpoint, params=params)
        response.raise_for_status()
        return response.json()[str(appID)]["data"]["name"]




async def test():
    """
    result = await steamRequest("76561198259864303")

    print(result)
    """
    appName = await steamGetAppName(420)
    print(appName)
#asyncio.run(test())