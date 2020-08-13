import React from 'react';
import { Container } from 'react-bootstrap';

//TODO
// 1. When this component first mounts, let's fetch for all the users and save it to state.
// 2. Let's map through all of our users and change the hard coded values of User Name, User Email, User Phone Number, and Favorite Quote
// 3. Each div for each user should also have an onClick function that will route us to /user/:id. Add the user's id.

const Home = () => {
  return (
    <Container>
      <h1>Home Page</h1>
      {/* FIX ME */}
      <div>
        <h2>User Name</h2>
        <p>User Email</p>
        <p>User Phone Number</p>
        <p>Favorite Quote</p>
      </div>
    </Container>
  );
};

export default Home;
