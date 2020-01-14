# projectDH2642 BỌỌLU
Boolu is an application for looking up football leagues and matches of some of the worlds top leagues/teams.

## What we have done
The app is connected to the backend (MongoDB). Where the username, encrypted password and the users favorite team is stored.
Methods for fetching schedule, league standings and top scorers from the API. Users are able to fetch data from the API.
All screens have the necessary components, featurs and is styled for computer screens. 
A few things are implmented to improve the usability, sush as the current screen showing is highlighted in the navbar.
The screens if the user is not logged in is also handled.

## What we plan to do
Style the screens so they also are adapted for mobile sized screens.

## File Structure
All the react related code is inside a folder called client, while the backend related code is in the root of the project file.
#### Client folder (React)
Since node is used there is a package.json file.
The public folder contains the index.html file
The src folder contains the folders components, data, fonts and the files App.js, index.js. There are css files for every js file, except for the files in data.
The index.js file is where we tell our application to populate the index.html file, specifically, the "root" div.
The App.js file contains the components with the different Routes of out application.
The data folder contains our model and observer.
In the components directory, each component has their own directory containing a .js file and a .css file.

#### Backend (MongoDB)


## Getting started: 

#### Setup
1. Clone the Repository
2. npm i dependecy1 dependecy2 dependecy3 etc.. (see package.json)
3. npm i nodemon --save-dev
4. install react dependencies (cd into client and run npm i dependecy1 dependecy2 etc..)
5. npm run dev ( runs client and server with the 'cncurrently' tool)
