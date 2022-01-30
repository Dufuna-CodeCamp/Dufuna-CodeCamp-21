#!/bin/bash

NONE='\033[00m'
BOLD='\x1b[1m'
ITALIC='\x1b[3m'
RED='\033[0;31m'
GREEN='\033[0;32m'

total_tests=3 # only 3 tests are currently being done, this value should be changed if tests increases

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

submission_directory="$PWD/../../submissions"
path_to_folder="$submission_directory/$folder_name"
path_to_aboutMe_folder="$path_to_folder/aboutMe"
path_to_log="$submission_directory/../tests/logfile.json"

check_folder_existence() {
    folder_count=$(ls $submission_directory | grep $folder_name -c)
    if [ $folder_count -eq 0 ]
    then
        folder_exists=0
        echo ""
        echo -e "${BOLD}Checking for the top folder or directory ...${NONE}"
        echo -e "${RED}1. Your folder should be named in camel case with your First and Last name. (\"$folder_name\")"
        echo -e "2. Ensure your folder is located in the submissions directory.${NONE}"
    else
        folder_exists=1
    fi
}

check_aboutMe_folder_existence() {
    folder_count=$(ls $path_to_folder | grep "aboutMe" -c)
    if [ $folder_count -eq 0 ]
    then
        aboutMe_folder_exists=0
        echo ""
        echo -e "${BOLD}Checking the aboutMe folder ...${NONE}"
        echo -e "${RED}Your folder should be named ${BOLD}\"aboutMe\"${NONE} ${RED}and located in the folder with your First and Last name. (${BOLD}\"$folder_name/aboutMe\"${NONE}${RED})${NONE}"
    else
        aboutMe_folder_exists=1
    fi
}

check_file_existence() {
    if [ -z "$(ls -A $path_to_aboutMe_folder)" ]
    then
        file_exists=0
        echo ""
        echo -e "${BOLD}Checking the text file ...${NONE}"
        echo -e "${RED}1. You should create a text file."
        echo -e "2. Ensure your text file is located in the ${BOLD}\"aboutMe\"${NONE} ${RED}folder you have created."
        echo -e "3. Ensure your text file contains text."${NONE}
    else
        for currentFile in $path_to_aboutMe_folder/*
        do
            if [ $(file -b --mime-type "$currentFile") == "text/plain" ]
            then
                file_exists=1
                break
            else
                file_exists=0
                echo ""
                echo -e "${BOLD}Checking the text file ...${NONE}"
                echo -e "${RED}1. You should create a text file."
                echo -e "2. Ensure your text file is located in the ${BOLD}\"aboutMe\"${NONE} ${RED}folder you have created."
                echo -e "3. Ensure your text file contains text."${NONE}
            fi
        done
    fi
}

write_json_response() {
    echo "{" > $path_to_log
    echo "  \"stats\": {" >> $path_to_log
    echo "    \"tests\": $total_tests," >> $path_to_log
    echo "    \"passes\": $no_of_passes," >> $path_to_log
    echo "    \"failures\": $no_of_failures," >> $path_to_log
    echo "    \"owner\": \"$folder_name\"" >> $path_to_log
    echo "  }" >> $path_to_log
    echo "}" >> $path_to_log
}

write_output() {
    echo ""
    echo -e "${BOLD}Test Results${NONE}"
    echo -e "${ITALIC}Total number of tests:${NONE} ${BOLD}$total_tests${NONE}"
    echo -e "${GREEN}${ITALIC}Passed tests:${NONE} ${BOLD}$no_of_passes${NONE}"
    echo -e "${RED}${ITALIC}Failed tests:${NONE} ${BOLD}$no_of_failures${NONE}"
}

no_of_passes=0
no_of_failures=0

check_folder_existence

if [ $folder_exists -eq 1 ]
then
    no_of_passes=$((no_of_passes+1))
    check_aboutMe_folder_existence

    if [ $aboutMe_folder_exists -eq 1 ]
    then
        no_of_passes=$((no_of_passes+1))
        check_file_existence

        if [ $file_exists -eq 1 ]
        then
            no_of_passes=$((no_of_passes+1))
        else
            no_of_failures=$((total_tests-no_of_passes))
        fi
    else
        no_of_failures=$((total_tests-no_of_passes))
    fi
else
    no_of_failures=$((total_tests-no_of_passes))
fi

write_json_response
write_output