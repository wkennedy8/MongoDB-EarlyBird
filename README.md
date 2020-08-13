## Setup

- git clone this repo
- cd into it
- `yarn install`
- `cp .env.sample .env`
- `cd client && yarn install`

### Connecting your MONGO_DB

- in the root directory, edit the .env file so that the `MONGODB_URI` is equal to your MongoDB connection string.

### Backend Instructions

- in the `db/models/user.js` file, create a schema for the User.
- in the `server/routes/users.js` file, create routes to GET all users, POST a new user, and GET 1 specific user by id.
- in the `server/app.js` file, import the userRouter and `app.use(userRouter)` in line 17.

### Frontend Instructions

- in the Home component,

  1.  When this component first mounts, fetch for all the users using axios and save them to state.
  2.  Map through all of the users in state and change the hard coded values of User Name, User Email, User Phone Number, and Favorite Quote
  3.  Each div should also have an onClick function that will route you to /user/:id route, make sure to dynamically add a user's id.

- in the AddUser component,

  1.  Fix the label and give each Form.Control the "name" of each required attribute in our User model.
  2.  Create a function that captures the input values and sets them to state.
  3.  When the form submits, write a function that will post the state variables to the body of the axios request to create a new User.
  4.  Also, after a new user is created, redirect back to the Home page.

- in the User component,

  1. Get the id of the user from the params, and save it to a variable called "id"
  2. When the component first mounts, using the id, make a call to the correct route in the backend to retrieve the user information and save it to a state variable.
  3. Render the user information.

### Available Build Commands

- `yarn dev`: Runs BOTH your Express.JS and React developer environment locally at the same time. Any logs coming from Express will be prefaced with [0], any logs from create-react-app will be prefaced with [1].
- `yarn server`: Runs JUST your Express.JS server.
- `yarn client`: Runs JUST your front-end React app.

Open http://localhost:3000 to view your local React app in the browser. The page will reload if you make edits.
