@echo off
setlocal enabledelayedexpansion

REM Get today's date in YYYY.MM.DD format using PowerShell
for /f %%I in ('powershell -NoProfile -Command "Get-Date -Format \"yyyy.MM.dd\""') do set today=%%I

REM Find the highest existing tag number for today
set max_num=0
for /f "tokens=*" %%i in ('git tag -l "v%today%-*"') do (
    set tag=%%i
    REM Extract the number after the last dash
    for /f "tokens=2 delims=-" %%b in ("!tag!") do set tag_num=%%b
    if !tag_num! gtr !max_num! set max_num=!tag_num!
)

REM Increment the counter
set /a next_num=!max_num!+1

REM Create the new tag
set new_tag=v%today%-%next_num%

echo Creating version tag: %new_tag%

REM Git tag operations
git tag %new_tag%
git push origin %new_tag%

echo Pushed tag: %new_tag%
