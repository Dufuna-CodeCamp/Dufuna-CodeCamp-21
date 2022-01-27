# Welcome to the Dufuna-CodeCamp Programme 🚩

This repository exists for the submission of tasks by the Dufuna-CodeCamp participants from the year 2021.

## Getting Started

- Clone this repository.

- Before you start work on any task, you should do the following:
    - create a new branch
    - move to the newly created branch

- On your local copy, you'll find a `submissions` directory.
    - create a new folder in that directory
    - name the folder using the format detailed below:
        - suppose your `first name` is `Jane` and your `last name` is `Doe`, your folder will be named `janeDoe`.

- In the folder you created that is named after you, create another folder named the topic for which you want to make a submission e.g. `aboutMe`.

- In this new folder, create a new file for the solution of the tasks, e.g `aboutMe.txt`

## Setting up the project locally (One time setup) - Windows Users Only
1. Open `Command Prompt` as an administrator
2. Navigate to the project directory (`Dufuna-CodeCamp-21`)
3. Once you're in the project directory, navigate to `tests\setup\winos`. This directory contains the setup files for Windows Operating System.
4. Type the command: `nodeinstaller.bat` (This will generate a lot of output on the screen, do not worry.)
5. If you do not have Python3 installed on your system, a pop-up to install python will appear on the screen. Ensure that you click the checkbox that says `Add Python to Path`.
6. Once python is completely installed and you see any of the following text, the setup is complete. They are:
    - `node is available` OR
    - `Please restart command prompt as an administrator`
7. After installation is complete, you need to `close the current command prompt` and open another `command prompt as an administrator`.
8. On the newly opened command prompt, Navigate to the project directory (`Dufuna-CodeCamp-21`)
9. Once you're in the project directory, navigate to `tests\setup\winos`. There is one more setup file you need to run
10. Type the command: `winrunner.bat`. When this command successfully runs, you will see an output that says `Setup is Complete!`
- As an aside, ensure you have installed on your PC the latest version of Chrome.

## Setting up the project locally (One time setup) - Mac OS and Linux Users Only
1. Open your `terminal`
2. Navigate to the project directory (`Dufuna-CodeCamp-21`)
3. Once you're in the project directory, 
    - navigate to `tests/setup/macos` - for Mac OS users
    - navigate to `tests/setup/linux` - for Linux users. 
    This directories contain the setup files for either Operating Systems.
4. Type the command: `./installer.sh`. This will generate a lot of output on the screen and at some point `request for your password` enter in your system's password, and wait till installation is complete.
- As an aside, ensure you have installed on your PC the latest version of Chrome.

### Now you can continue with your tasks.

## Making a submission

If you want to make a submission for a week where the topic was `HTML`, you'll need to take the following steps:

- Open your 
    - `terminal` or `git bash` - for `linux or MacOS` users.
    - `git bash` - for `Windows` users.

- Navigate to the project folder (In this case `Dufuna-CodeCamp-21`)

- Create and move to a new branch.

- Navigate to the folder that has your name inside the `submissions` folder.

- Create a folder for the task using the topic of the week as the name. In this case, the folder will be named `html` because that's the topic for the week.

- Put the necessary files/content for the task into the newly created folder.

- Navigate to the `tests` folder in your local project

- Because we're working on the task for `HTML`, navigate to `HTML` folder inside the tests folder.

    - run the command `./test.sh`

- Follow the prompts given on the command line

- The last two steps above run some tests on your submission and provide the result of this test on your `terminal` or `git bash` as the case may be.
    - Ensure that all tests pass for you, if it doesn't, you'll be able to figure out where the mistake is from (feedback is given when the test is run).
    - Fix this mistakes in your submission files and run the test again.

- This step is optional
    - run `git status` to check the state of your working directory 

- Add new or modified files to git if needed using the `git add .` command or specifically state the file to be added using `git add <filename>` command (where `<filename>` is replaced by the name of the file)

- Commit your changes

- Push this changes to the remote repository. If your branch is perhaps named `html_task` then your git command to push would be like `git push origin html_task`.

- Go to the Github repository online and make a pull request.

## Pull Requests

- When you create a PR, you need to inform us of what you have done. e.g if Jane wants to create a PR to submit a solution for the `HTML` topic, the description would go thus;
    -  I added a index.html file that contains solution to the HTML task
    -  I updated the solution to the last task in lastTask.txt
- Your PR title must contain your program abbreviation and task number in a square bracket, and a description. It should be of the format: `[DFFE-5] Style the customer signup page`

## NOTES

- Before starting a new task, always update your `master` branch locally by pulling using `git pull origin master`

### Enjoy The Ride!!!
