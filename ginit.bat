@echo off
set /p remote=remote origin: 

git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin %remote%
git push -u origin main

pause