import React from "react";
import { Form } from "react-bootstrap";
const PersonalInformation = () => {
  return (
    <>
      <Form>
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label>User Type</Form.Label>
          <Form.Control as="select" custom>
            <option>----</option>
            <option>Normal</option>
            <option>Staff</option>
            <option>Associate</option>
            <option>Admin</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Salutation</Form.Label>
          <Form.Control type="text" placeholder="Enter salutation" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter first name" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Middle Name</Form.Label>
          <Form.Control type="text" placeholder="Enter middle name" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter last name" />
        </Form.Group>

        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label>Gender</Form.Label>
          <Form.Control as="select" custom>
            <option>----</option>
            <option>Male</option>
            <option>Female</option>
            <option>Rather not say</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label>Marital Status</Form.Label>
          <Form.Control as="select" custom>
            <option>----</option>
            <option>Single</option>
            <option>Married</option>
            <option>Divorced</option>
            <option>Rather not say</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Primary Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter primary email address"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Alternate Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter alternate email address"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Primary Phone Number</Form.Label>
          <Form.Control type="text" placeholder="Enter primary phone number" />
          <Form.Text className="text-muted">
            We'll never share your phone number with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Alternate Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter alternate phone number"
          />
          <Form.Text className="text-muted">
            We'll never share your phone number with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label>Nationality</Form.Label>
          <Form.Control as="select" custom>
            <option>----</option>
            <option>India</option>
            <option>USA</option>
            <option>Austra</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>PAN Number</Form.Label>
          <Form.Control type="text" placeholder="Enter PAN Number" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Aadhar Number</Form.Label>
          <Form.Control type="text" placeholder="Enter Aadhar Number" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Profile Photo</Form.Label>
          <Form.File id="custom-file" />
        </Form.Group>
      </Form>
    </>
  );
};

export default PersonalInformation;