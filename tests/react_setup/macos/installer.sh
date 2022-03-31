#!/bin/bash

NONE='\033[00m'
BOLD='\x1b[1m'
ITALIC='\x1b[3m'
RED='\033[0;31m'
GREEN='\033[0;32m'

echo -n "Enter First Name : "
read first_name

echo -n "Enter Last Name : "
read last_name

set_folder() {
    first_name=$(echo "$first_name" | tr '[:upper:]' '[:lower:]')
    first_letter=$(echo "${last_name:0:1}" | tr '[:lower:]' '[:upper:]')
    last_substring=$(echo "${last_name:1}" | tr '[:upper:]' '[:lower:]')

    folder_name="$first_name$first_letter$last_substring"
}

set_folder


project_working_directory=$PWD/../../..
submission_directory=$project_working_directory/submissions
react_test_directory=$project_working_directory/tests/react_setup/tests/
path_to_react=$submission_directory/$folder_name/

# Change directory to submission folder
cd $path_to_react
sudo mkdir REACT
cd REACT

# React Installation
sudo npx create-react-app react-app

cd react-app

sudo chmod -R 777 $path_to_react/REACT/react-app

sudo npm i enzyme
sudo npm i @wojtekmaj/enzyme-adapter-react-17

cd src
path_to_test_folder_directory=$path_to_react/REACT/react-app/src
sudo mkdir $path_to_test_folder_directory/__tests__

down=$react_test_directory/
echo $down
queue=$path_to_test_folder_directory/__tests__/
sudo chmod 777 $queue

find "${down}" -name "*.test.js"
for a in $(find ${down}  -name  *.test.js)
do
    cp -r "${down}" "${queue}"
done

echo -e "${GREEN} React App Setup is Complete!"

