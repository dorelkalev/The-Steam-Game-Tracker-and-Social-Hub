#       Add user fields for SteamID and Username
# TODO:
#       Add separate model with relational mapping to user's steamID
#       Add fields for owned games, playtime, last played, ...
#       Make functions to make API calls to steam, receive JSON payload
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

