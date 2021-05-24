#!/bin/bash

working_directory=$(pwd -W)
if [ $? -eq 0 ]
then
    project_working_directory=$working_directory/../../
else
    project_working_directory=$PWD/../../
fi
test_folder=$project_working_directory/tests/
submission_directory="$project_working_directory/submissions"

NONE='\033[00m'
BOLD='\x1b[1m'
UNDERLINE='\033[4m'
ITALIC='\x1b[3m'

echo -n "Enter First Name : "
read first_name

echo -n "Enter Last Name : "
read last_name

echo -n "Enter HTML file name & location (e.g HTML/product.html) : "
read html_file

set_folder() {
    first_name=$(echo "$first_name" | tr '[:upper:]' '[:lower:]')
    first_letter=$(echo "${last_name:0:1}" | tr '[:lower:]' '[:upper:]')
    last_substring=$(echo "${last_name:1}" | tr '[:upper:]' '[:lower:]')

    folder_name="$first_name$first_letter$last_substring"
}

set_folder

# Run Tests

customReportDir=$test_folder
customReportFilename=logfile

echo -e "${ITALIC}visit${NONE} ${BOLD}${UNDERLINE}$test_folder/logfile.html${NONE} in your browser to see test reports"
env FILE_PATH=$submission_directory/$folder_name/$html_file mocha $PWD/html_task.js --reporter mochawesome --reporter-options reportDir=$customReportDir,reportFilename=$customReportFilename,quiet=true
