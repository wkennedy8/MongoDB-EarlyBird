import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';

//TODO
// 1. Fix the label and give the Form.Control the "name" of each required attribute in our User model.
// 2. Create a function that captures the input values and sets the to state.
// 3. When the form submits, write a function that will post our state to our database to create a new User.
// 4. Also, after we post a new user, we should be routed back to the Home page.

const AddUser = ({ history }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // this function posts a new user to the database and routes us back to the Home component.
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('/api/users', formData)
      .then(() => {
        history.push('/');
      })
      .catch((error) => console.log(error));
  };
  return (
    <Container>
      <h1>Add User</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" name="firstName" onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" name="lastName" onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" name="email" onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="text" name="phone" onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Favorite Quote</Form.Label>
          <Form.Control
            type="text"
            name="favoriteQuote"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Button type="submit">Add</Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default AddUser;
