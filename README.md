## Player Card React app

### Project information

This app creates a React component which renders to the screen a list of players with associated data e.g. player information, player statistics, club badge, player image. Clubs are being fetch from image sprite via CSS classes with x/y coordinates. Player images are static assets with names matching the unique IDs on player data JSON. Data JSON file provides complete information to feed the component.

This app was rewritten from scratch to use minimal set up of **create-react-app**
[***Earlier version of that app***](https://github.com/maciejk77/player-card/tree/version-B)

### Instruction
- ```git clone``` the project repo
- ```yarn install``` to install all dependencies
- ```yarn start``` to kickstart FE application

### Steps completed
- used functional and class React components, lifecycle method ***componentDidMount*** as well 
- used ***create-react-app** to scaffold application
- used ***node-sass-chokidar*** to transpile Sass to CSS on build, ***watch-css*** to transpile while developing
- images fetched from assets folder using template strings 
- club badges are created from image sprite and accessible via CSS classess e.g. ```.arsenal {}```

### To do / ideas
- create seperate branches where data will be put on Express, use Redux to manage state.

### Screenshot
Left image is the requested final piece, to the right is the component recreated as requested
![Screenshot](public/screenshot.png)