@REM This is the installer tool for Dufuna Code Reviews

@ECHO off

set project_working_directory="%~dp0..\..\..\"
set test_folder="%project_working_directory:"=%\tests"
cd "%userprofile%"

For /F "usebackq" %%v IN (`node -v`) DO set node_version=%%v

For /F "usebackq" %%v IN (`systeminfo ^| find "x86" /c`) DO set pc_bit_size=%%v
For /F "usebackq" %%v IN (`python --version`) DO set python_version=%%v

:: Python check & Installation
IF [%python_version%]==[] (
    cd %test_folder%\setup\winos
    call pythoninstaller.bat
    del python.exe
) else (
    echo [92m python is available [0m
)

:: Node check & Installation
IF [%node_version%]==[] (
    IF %pc_bit_size% LSS 1 (
        curl -o node.msi https://nodejs.org/dist/v14.15.5/node-v14.15.5-x64.msi
    ) ELSE (
        curl -o node.msi https://nodejs.org/dist/v14.15.5/node-v14.15.5-x86.msi
    )
    msiexec.exe /i node.msi /qn /norestart
    del node.msi
    echo [92m Please restart command prompt as an administrator [0m
) else (
    echo [92m node is available [0m
)