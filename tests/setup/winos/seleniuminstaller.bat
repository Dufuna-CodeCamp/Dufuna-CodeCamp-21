@ECHO off

set project_working_directory="%~dp0..\..\..\"
set test_folder="%project_working_directory:"=%\tests"

npm install --prefix %test_folder% selenium-webdriver

exit /B