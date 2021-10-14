#!/bin/bash

NONE='\033[00m'
BOLD='\x1b[1m'
ITALIC='\x1b[3m'
RED='\033[0;31m'
GREEN='\033[0;32m'

total_tests=7 # only 7 tests are currently being done, this value should be changed if tests increases

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
path_to_database_folder="$path_to_folder/database3"
path_to_log="$submission_directory/../tests/logfile.json"

check_database_folder_existence() {
    folder_count=$(ls $path_to_folder | grep "database3" -c)
    if [ $folder_count -eq 0 ]
    then
        database_folder_exists=0
        echo ""
        echo -e "${BOLD}Checking the database folder ...${NONE}"
        echo -e "${RED}Your folder should be named ${BOLD}\"database3\"${NONE} ${RED}and located in the folder with your First and Last name. (${BOLD}\"$folder_name/database\"${NONE}${RED})${NONE}"
    else
        database_folder_exists=1
    fi
}

check_file_existence() {
    if [ -z "$(ls -A $path_to_database_folder)" ]
    then
        file_exists=0
        echo ""
        echo -e "${BOLD}Checking the text file ...${NONE}"
        echo -e "${RED}1. You should create a text file."
        echo -e "2. Ensure your sql file is located in the ${BOLD}\"database3\"${NONE} ${RED}folder you have created."
        echo -e "3. Ensure your sql file contains sql queries."${NONE}
    else
        for currentFile in $path_to_database_folder/*
        do
            if [ $(file -b --mime-type "$currentFile") == "text/plain" ]
            then
                file_exists=1
                break
            else
                file_exists=0
                echo ""
                echo -e "${BOLD}Checking the sql file ...${NONE}"
                echo -e "2. Ensure your sql file is located in the ${BOLD}\"database3\"${NONE} ${RED}folder you have created."
            fi
        done
    fi
}

check_file_content1() {    
    for currentFile in $path_to_database_folder/*
    do
        if grep  "SELECT COUNT"  $currentFile  && grep "WHERE" $currentFile
        then
            content_exists=1
            break     
        else
            content_exists=0
            echo ""
            echo -e "1. Ensure your sql file contains SELECT AND WHERE queries."${NONE}
        fi
   done
}

check_file_content2() {    
    for currentFile in $path_to_database_folder/*
    do
        if grep  "FROM"  $currentFile && grep "JOIN" $currentFile
        then
            content_exists=1
            break     
        else
            content_exists=0
            echo -e "${BOLD}Checking the sql file ...${NONE}"
            echo -e "1. Ensure your sql file contains FROM AND JOIN queries."${NONE}
        fi
   done
}

check_file_content3() {    
    for currentFile in $path_to_database_folder/*
    do
        if grep  "ON"  $currentFile && grep "AND" $currentFile
        then
            content_exists=1
            break     
        else
            content_exists=0
            echo -e "${BOLD}Checking the sql file ...${NONE}"
            echo -e "1. Ensure your sql file contains ON and AND queries."${NONE}
        fi
   done
}

check_query_result1() {    
    for currentFile in $path_to_database_folder/*
    do
        if grep  "342"  $currentFile && grep "549" $currentFile
        then
            content_exists=1
            break     
        else
            content_exists=0
            echo -e "${BOLD}Checking the sql file ...${NONE}"
            echo -e "1. Ensure your sql queries gives the correct result"${NONE}
        fi
   done
}

check_query_result2() {    
    for currentFile in $path_to_database_folder/*
    do
        if grep  "218"  $currentFile && grep "9" $currentFile
        then
            content_exists=1
            break     
        else
            content_exists=0
            echo -e "${BOLD}Checking the sql file ...${NONE}"
            echo -e "1. Ensure your sql queries gives the correct result"${NONE}
        fi
   done
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

    check_database_folder_existence

    if [ $database_folder_exists -eq 1 ]
    then
        no_of_passes=$((no_of_passes+1))

        check_file_existence

        if [ $file_exists -eq 1 ]
        then
            no_of_passes=$((no_of_passes+1))
     
            check_file_content1

            if [ $content_exists -eq 1 ]
            then
                no_of_passes=$((no_of_passes+1))
                check_file_content2
            if [ $content_exists -eq 1 ]
            then
             no_of_passes=$((no_of_passes+1))
                   check_file_content3
            if [ $content_exists -eq 1 ]
            then
             no_of_passes=$((no_of_passes+1))
                     check_query_result1
            if [ $content_exists -eq 1 ]
            then
             no_of_passes=$((no_of_passes+1))
                     check_query_result2
            if [ $content_exists -eq 1 ]
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
else
    no_of_failures=$((total_tests-no_of_passes))
fi
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