# <img alt="Join us on Slack" src="https://github.com/amalmajeed/toDoNotes/blob/main/assets/Kanban-board-1.png" width="165"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; KANBAN NOTES APP

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Version 1.0.0

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;![Contributors](https://img.shields.io/github/contributors/amalmajeed/toDoNotes?style=plastic) ![Licence](https://img.shields.io/github/license/amalmajeed/toDoNotes)

## This is an iOS application developed using react native and expo-cli for daily to do task keeping on the go.

### Description

This project was developed as a part of my coursework for CS 855: Mobile Computing Winter 2022. The aim of this project was to learn the basics of mobile development using react native and expo. This project is a Kanban board for your iOS device for ad-hoc task tracking on the go. I like to create a list of acheivables before beginning the day using post it notes and by the end of the day I finish them and the satisfaction of crossing off the work I had to do is extremely fulfilling and that is what I aimed to replicate using this application which is a Kanban board with three columns 'TO DO', 'IN PROGRESS' and 'DONE' to track the status of your daily acheivables which are rendered as color coded task cards based on their status.

#### IDE used : VS Code for Mac (https://code.visualstudio.com/download)


### Software pre-requisites

-  Node.js and node package manager for mac/windows/linux (https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
-  Expo client for mac/windows/linux (https://docs.expo.dev/workflow/expo-cli/)
-  Terminal such as Bash, CMD, Zshell or using the in-built terminal of editors such as VS Code or Sublime.

### Installation instructions

- Fork this Repository
- Clone your forked repository to your local
- Delete the 'node_modules' directory locally or remotely.
- CD to the cloned repo directory in local using the chosen terminal application all the way to inside /toDoNotes where 'package.json' is located.
- From the terminal run 'sudo npm install' or 'sudo yarn install' (recommended to use yarn) to configure the package dependencies from 'package.json' file.
- Install an expo developer client app such as 'Expo Go' on your mobile device (https://apps.apple.com/us/app/expo-go/id982107779)

### Configuration instructions

- Create an expo account (https://expo.dev/) (IGNORE if already a user)
- Login to expo account using 'expo login' command from terminal
- CD to the cloned repo directory in local using the chosen terminal application all the way to inside /toDoNotes.
- By default the app has been configured to run in tunnel mode which is faster due to encapsulation in the 'package.json' under the start section under scripts section. (Remove 'tunnel' and save the file to run normally)
- Run 'expo start' or 'expo start -c' to clear cache from previous runs.
- Open camera app to scan the generated QR code to automatically open Expo Go on your mobile device or manually open expo go and connect to the project by signing in with your expo account credentials to open the app.

### How to use video (click image)

[![Kanban Notes - How to Use](http://img.youtube.com/vi/tSJxPzLS6D4/0.jpg)](http://www.youtube.com/watch?v=tSJxPzLS6D4 "Kanban Notes App - How to use")

### Troubleshooting and tips

- If installing using npm generates package dependecy errors, delete node_modules folder and use 'sudo yarn install' instead of 'sudo npm install'
- If trying to modify code to change features, preferably use VS Code as the IDE.

### Contact

E-mail : amf856@uregina.ca / amalmajeed7@gmail.ca

# Contributors

Amal Majeed, MSc. Computer Science, University of Regina, SK, Canada.

# Copyright and License

MIT License

Copyright (c) 2022 Amal Majeed, University of Regina, SK, Canada.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
