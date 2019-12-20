# projectDH2642 BỌỌLU
Boolu is an application for looking up football leagues and matches of some of the worlds top leagues/teams.

## What we have done
The app is connected to the backend (MongoDB).
Methods for fetching schedule, league standings and top scorers from the API. Users are able to fetch data from the API.
All screens have the necessary components, except for the Profile screen.

## What we plan to do
#### Layout for all screens.
#### Improve usability
Store users favorite teams in the backend.
the user should be able to select which schedule/table to show from their favorite teams. We plan to do this by having the user click on a team in the sidebar.
Highlight the current screen showing in the navbar.
Add the profile screen.
Only show the screens (except for home) if the user is logged in.

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
