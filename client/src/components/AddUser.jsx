import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

//TODO
// 1. Fix the label and give the Form.Control the "name" of each required attribute in our User model.
// 2. Create a function that captures the input values and sets the to state.
// 3. When the form submits, write a function that will post our state to our database to create a new User.
// 4. Also, after we post a new user, we should be routed back to the Home page.

const AddUser = () => {
  return (
    <Container>
      <h1>Add User</h1>
      <Form>
        <Form.Group>
          <Form.Label>FIX ME</Form.Label>
          <Form.Control type="text" name="" />
        </Form.Group>
        <Form.Group>
          <Form.Label>FIX ME</Form.Label>
          <Form.Control type="text" name="" />
        </Form.Group>
        <Form.Group>
          <Form.Label>FIX ME</Form.Label>
          <Form.Control type="text" name="" />
        </Form.Group>
        <Form.Group>
          <Form.Label>FIX ME</Form.Label>
          <Form.Control type="text" name="" />
        </Form.Group>
        <Form.Group>
          <Form.Label>FIX ME</Form.Label>
          <Form.Control type="text" name="" />
        </Form.Group>
        <Form.Group>
          <Form.Label>FIX ME</Form.Label>
          <Form.Control type="text" name="" />
        </Form.Group>
        <Form.Group>
          <Button type="submit">Add</Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default AddUser;
