import uvicorn


if __name__ == "__main__": #  python sets __name__ to __main__ if file is run directly. Otherwise, it is the filename.
    uvicorn.run("server:server", reload=True)

