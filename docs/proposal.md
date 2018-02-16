## Orbit - The Game

### Background and Overview

Orbit is an arcade-style horizontal sidescroller, combining the physics of the classic Asteroids game with the visual impact of `Three.js` and some new custom features.


### Functionality & MVP  

In Orbit, the following functionality should be available:

- [ ] Navigate the screen with mouse/trackpad.
- [ ] Collide with obstacles and enhancers.
- [ ] Reduce or increase HP on collisions.
- [ ] Accumulate points to increment score.
- [ ] Generatively increase game difficulty over time.

### Wireframes

This app will consist of a single screen with the game canvas and a simple footer.
The footer will contain nav links to the Github ,my LinkedIn and a mute/unmute button.  
![wireframes](https://github.com/fmbf/orbit/blob/master/asteroids_wireframe.png)

### Architecture and Technologies

This project will be implemented with the following technologies:

- Vanilla JavaScript for overall structure and game logic,
- `Three.js` for creating 3D drawings representing OOP models,
- Webpack to bundle and serve up the various scripts.

### General Task List
- [ ] write `Ship` model
- [ ] write `Asteroid` model
- [ ] write Collision / Displacement math.
- [ ] write `Coin` model
- [ ] write game logic.
- [ ] write `Game` model
- [ ] write `Index` to display game info



### Implementation Timeline
**Over the weekend**:
- [x] framed out index.html
- [x] Completed Three.js tutorial and 50% game graphic assets (ship & environment)
- [x] selected color palette & font

**Day 1**: Setup all necessary Node modules, including getting webpack up and running.  Create `webpack.config.js` as well as `package.json`.  Write a basic entry file and the bare bones of all scripts outlined above. Start logic for collisions. Goals for the day:

- [ ] Get `webpack` serving files and frame out index.html
- [ ] Start collision / displacement math
- [ ] write `Asteroid` model & graphics

**Day 2**: Dedicate this day to logic. Goals for the day:

- [ ] Wrap up collision / displacement math
- [ ] Start Game logic

**Day 3**: Create the logic backend for game. Build out modular functions for handling the different mechanics and interactions between Models. Goals for the day:

- [ ] Finish `Game` logic
- [ ] Make sure that starting, stopping, and resetting game works.


**Day 4**: Finish styling frontend details, bonus stuff. Goals for the day:

- [ ] Get collision explosion graphics working
- [ ] Have a styled `Canvas`, nice looking game info and title
- [ ] Complete any possible bonus items.


### Bonus features
- [ ] 1 - Shoot and destroy obstacles.
- [ ] 2 - Add music, hear sounds on collisions.
- [ ] 3 - Persist User Scores (ultra extra bonus).
