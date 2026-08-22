@echo off
REM MaxLase local preview launcher
REM Starts a local web server in this folder and opens the site in your browser.
REM Leave the "MaxLase Local Server" window open while you're previewing —
REM closing it stops the server. Just refresh your browser after Claude syncs new files.

cd /d "%~dp0"

start "MaxLase Local Server" cmd /k python -m http.server 8000

timeout /t 2 /nobreak >nul

start "" http://localhost:8000/index.html
