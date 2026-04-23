@echo off
cd /d "d:\dunlutan\kejuron web"
echo Menghubungkan ke repository GitHub...
git init
git remote remove origin >nul 2>&1
git remote add origin https://github.com/sdnkejuron/website.git

echo Mengambil update terbaru dari GitHub...
git pull origin main --rebase

echo Menambahkan perubahan lokal...
git add .
git commit -m "Update website config and files"

echo Mengunggah ke GitHub...
git push -u origin main

echo Selesai!
pause
