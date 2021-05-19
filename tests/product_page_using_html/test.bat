@ECHO off

SETLOCAL

SET /P first_name="Enter First Name: "
SET /P last_name="Enter Last Name: "
SET /P html_file="Enter HTML file name & location (e.g HTML/product.html): "

SET submission_directory="%~dp0../../submissions"
SET test_folder="%submission_directory:"=%/../tests"

CALL :TrimFirstName
CALL :TrimLastName
CALL :LoCase first_name

SET first_letter=%last_name:~0,1%
SET remainder=%last_name:~1%

CALL :UpCase first_letter
CALL :LoCase remainder

SET last_name=%first_letter%%remainder%
SET folder_name=%first_name%%last_name%

SET path_to_folder="%submission_directory:"=%/%folder_name:"=%"


@REM Run Tests

SET customReportFilename=logfile

ECHO.
ECHO [92mvisit %test_folder%/logfile.html in your browser to see test reports[0m

env FILE_PATH=%path_to_folder:="%/%html_file:="% "%APPDATA:"=%\npm\mocha.cmd" "%test_folder:"=%\issue2\html_task.js" --reporter mochawesome --reporter-options reportDir=%test_folder%,reportFilename=%customReportFilename%,quiet=true

:TrimFirstName
:: trim left whitespace
FOR /F "tokens=* delims= " %%a in ("%first_name%") DO CALL SET first_name=%%a
:: trim right whitespace
FOR /F "tokens=1 delims= " %%a in ("%first_name%") DO CALL SET first_name=%%a
EXIT /B

:TrimLastName
:: trim left whitespace
FOR /F "tokens=* delims= " %%a in ("%last_name%") DO CALL SET last_name=%%a
:: trim right whitespace
FOR /F "tokens=1 delims= " %%a in ("%last_name%") DO CALL SET last_name=%%a
EXIT /B

:LoCase
:: Subroutine to convert a variable VALUE to all lower case.
:: The argument for this subroutine is the variable NAME.
FOR %%i IN ("A=a" "B=b" "C=c" "D=d" "E=e" "F=f" "G=g" "H=h" "I=i" "J=j" "K=k" "L=l" "M=m" "N=n" "O=o" "P=p" "Q=q" "R=r" "S=s" "T=t" "U=u" "V=v" "W=w" "X=x" "Y=y" "Z=z") DO CALL SET "%1=%%%1:%%~i%%"
EXIT /B

:UpCase
:: Subroutine to convert a variable VALUE to all UPPER CASE.
:: The argument for this subroutine is the variable NAME.
FOR %%i IN ("a=A" "b=B" "c=C" "d=D" "e=E" "f=F" "g=G" "h=H" "i=I" "j=J" "k=K" "l=L" "m=M" "n=N" "o=O" "p=P" "q=Q" "r=R" "s=S" "t=T" "u=U" "v=V" "w=W" "x=X" "y=Y" "z=Z") DO CALL SET "%1=%%%1:%%~i%%"
EXIT /B

ENDLOCAL