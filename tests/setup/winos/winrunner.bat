@REM This is the installer tool for Dufuna Code Reviews

@ECHO off

set project_working_directory="%~dp0..\..\..\"
set test_folder="%project_working_directory:"=%\tests"
set home_directory="%userprofile%"

cd %home_directory%

For /F "usebackq" %%v IN (`curl -sS https://chromedriver.storage.googleapis.com/LATEST_RELEASE`) DO set chrome_driver_version=%%v

set path_to_chrome_driver="%homedrive%\Program Files\nodejs"

For /F "usebackq" %%v IN (`node -v`) DO set node_version=%%v

For /F "usebackq" %%v IN (`mocha --version`) DO set mocha_version=%%v
For /F "usebackq" %%v IN (`systeminfo ^| find "x86" /c`) DO set pc_bit_size=%%v

set no_format='\033[00m'
set bold='\x1b[1m'
set underline='\033[4m'
set italic='\x1b[3m'

:: Node check & Installation
IF [%node_version%]==[] (
    @ECHO off
    IF %pc_bit_size% LSS 1 (
        curl -o node.msi https://nodejs.org/dist/v14.15.5/node-v14.15.5-x64.msi
    ) ELSE (
        curl -o node.msi https://nodejs.org/dist/v14.15.5/node-v14.15.5-x86.msi
    )
    msiexec.exe /i node.msi /qn /norestart
    del node.msi
) else (
    echo [92m node is available [0m
)

cd %test_folder%

:: selenium web-driver check & installation
FOR /F "usebackq" %%i IN (`npm ls --depth=0 ^| find "selenium-webdriver" /c`) DO set /A selenium_wc=%%i

cd %home_directory%

IF %selenium_wc% GTR 0 (
    echo [92m selenium-webdriver is available [0m
) ELSE (
    @ECHO off
    cd %test_folder%\setup\winos
    call seleniuminstaller.bat
    cd %home_directory%
)

FOR /F "usebackq" %%i IN (`dir %path_to_chrome_driver% ^| find "chromedriver.exe" /c`) DO set /A chromedriver_wc=%%i

:: chromedriver check & installation
IF %chromedriver_wc% GTR 0 (
    echo [92m chromedriver is available [0m
) ELSE (
    @ECHO off
    curl -S -o chromedriver_win32.zip https://chromedriver.storage.googleapis.com/%chrome_driver_version%/chromedriver_win32.zip
    if not EXIST %path_to_chrome_driver% mkdir %path_to_chrome_driver:"=%
    tar -zxvf chromedriver_win32.zip -C "%path_to_chrome_driver:"=%"
    del chromedriver_win32.zip
)
@ECHO off

setx MYPATH "%PATH%;%path_to_chrome_driver:"=%"

:: mocha check & installation
IF [%mocha_version%] == [] (
    @ECHO off
    cd %test_folder%\setup\winos
    call mochainstaller.bat
    call mochawesomeinstaller.bat
    call chaiinstaller.bat
    call phantomjsinstaller.bat
    call phantomcssinstaller.bat
    call casperjsinstaller.bat
    cd %home_directory%
    
    cd "%APPDATA%\npm\"
    copy /Y "%test_folder:"=%\setup\winos\file.cmd" mocha.cmd
) ELSE (
    echo [92m mocha is available [0m
)

@ECHO on
ECHO.
ECHO [92mSetup is Complete![0m

ECHO [92mPlease ensure you have installed the latest version of Chrome![0m

@ECHO off

cd "%test_folder:"=%"