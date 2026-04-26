@echo off
setlocal
cd /d "d:\dunlutan\kejuron web"

echo ==========================================
echo    PUSH SOURCE CODE KE GITHUB
echo ==========================================

echo Menambahkan perubahan...
git add .

echo.
echo Menyimpan perubahan...
git commit -m "Update kode terbaru"

echo.
echo Mengatur remote URL ke: https://github.com/deniraja53/sdn-kejuron-informasi.git
git remote add origin https://github.com/deniraja53/sdn-kejuron-informasi.git 2>nul
git remote set-url origin https://github.com/deniraja53/sdn-kejuron-informasi.git

echo.
echo Mengatur branch ke main...
git branch -M main

echo.
echo Mendorong (push) ke GitHub...
git push -u origin main

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ERROR: Gagal melakukan push. Jika repository di GitHub sudah ada isinya, 
    echo mungkin Anda perlu memaksa push (menimpa isi).
    echo Apakah Anda ingin melakukan FORCE PUSH? (Y/N)
    set /p choice=Pilihan: 
    if /i "%choice%"=="Y" (
        git push -u origin main -f
    )
)

echo.
echo Selesai!
pause
