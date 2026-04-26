@echo off
setlocal
cd /d "d:\dunlutan\kejuron web"

echo ==========================================
echo    CEK ERROR DAN PUSH KE GITHUB
echo ==========================================

echo [1/3] Sedang mencoba build lokal untuk mengecek error...
call npm run build

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ERROR DITEMUKAN SAAT BUILD!
    echo Silakan foto pesan error di atas dan kirimkan ke saya agar kita bisa perbaiki.
    pause
    exit /b %ERRORLEVEL%
)

echo.
echo [2/3] Build lokal berhasil! Tidak ada error di kode.
echo Menyimpan perubahan konfigurasi...
git add .
git commit -m "Update konfigurasi dan perbaiki base path"

echo.
echo [3/3] Mendorong (push) ke GitHub...
git push -u origin main

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ERROR: Gagal melakukan push.
    echo Apakah Anda ingin melakukan FORCE PUSH? (Y/N)
    set /p choice=Pilihan: 
    if /i "%choice%"=="Y" (
        git push -u origin main -f
    )
)

echo.
echo Selesai! Cek kembali tab Actions di GitHub Anda.
pause
