#!/bin/bash

project_working_directory=$PWD/../../..
test_folder=$project_working_directory/tests

cd ~/

set -e +x
chrome_driver_version=`curl -sS https://chromedriver.storage.googleapis.com/LATEST_RELEASE`
set +ex

path_to_driver=/usr/local/bin
node_version=$(node -v)
mocha_version=$(mocha --version)
NONE='\033[00m'
BOLD='\x1b[1m'
UNDERLINE='\033[4m'
ITALIC='\x1b[3m'

# exit if non-zero status is returned
set -e +x

# Node check & Installation

if [[ $node_version == v* ]]
then
    echo "node is available"
else
    brew install node
fi

set +ex

cd $test_folder

# Selenium web-driver check & Installation
selenium_wc=`npm ls --depth=0 | grep -c selenium-webdriver`

cd ~/

set -e +x

if [[ $selenium_wc > 0 ]]
then
    echo "selenium-webdriver is available"
else
    sudo npm install --prefix $test_folder selenium-webdriver
fi

set +ex

# Chromedriver check & Installation
chromedriver_wc=`ls /usr/local/bin/ | grep -c chromedriver`

set -e +x

if [[ $chromedriver_wc > 0 ]]
then
    echo "chromedriver is available"
else
    curl -S -o ~/chromedriver_mac64.zip https://chromedriver.storage.googleapis.com/$chrome_driver_version/chromedriver_mac64.zip
    unzip ~/chromedriver_mac64.zip -d ~/
    rm ~/chromedriver_mac64.zip

    sudo mv -f ~/chromedriver $path_to_driver/chromedriver
    sudo chown root $path_to_driver/chromedriver
    sudo chmod +x /usr/local/bin/chromedriver
    echo export PATH=\"$path_to_driver:\$PATH\" >> ~/.bash_profile
    echo export PATH=\"$path_to_driver:\$PATH\" >> ~/.zshrc
fi

# Mocha check & Installation
if [[ $mocha_version =~ ^[0-9] ]]
then
    echo "mocha is available"
else
    sudo npm install --global mocha
    sudo npm install --global mochawesome
    sudo npm install --prefix $test_folder chai
fi

sudo npm install --prefix $test_folder phantomjs
sudo npm install --prefix $test_folder phantomcss
sudo npm install --global casperjs

echo -e "${BOLD}Setup is Complete!"
echo -e "${BOLD}Please ensure you have installed the latest version of Chrome!"