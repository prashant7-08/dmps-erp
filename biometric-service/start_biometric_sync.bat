@echo off
title Secureye S-FB3K Biometric Auto-Sync Service - Dadheech Memorial ERP
color 0A
echo =====================================================================
echo    DADHEECH MEMORIAL PUBLIC SCHOOL - SECUREYE BIOMETRIC SYNC
echo    Model: Secureye S-FB3K (Face + Fingerprint Reader)
echo =====================================================================
echo.
echo Starting live sync from Secureye S-FB3K machine over School Wi-Fi/LAN...
echo.
python "%~dp0secureye_sync.py"
pause
