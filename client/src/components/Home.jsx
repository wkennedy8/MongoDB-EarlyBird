import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';

//TODO
// 1. When this component first mounts, let's fetch for all the users and save it to state.
// 2. Let's map through all of our users and change the hard coded values of User Name, User Email, User Phone Number, and Favorite Quote
// 3. Each div for each user should also have an onClick function that will route us to /user/:id. Add the user's id.

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('/api/users')
      .then((users) => setUsers(users.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container>
      <h1>Home Page</h1>
      {users.map((user) => {
        return (
          <div key={user._id}>
            <h2>
              {user.firstName} {user.lastName}
            </h2>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.favoriteQuote}</p>
          </div>
        );
      })}
    </Container>
  );
};

export default Home;
