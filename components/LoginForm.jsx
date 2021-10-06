import React from "react";
import {Form, Button} from 'react-bootstrap'

export default function loginForm() {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control size="lg" type="string" placeholder="Username" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control size="lg" type="password" placeholder="Password" />
        </Form.Group>
        <div className="d-grid gap-2">
        <Button className="submit-login" variant="primary" size="lg" type="submit">
          Submit
        </Button>
        </div>
        <div className="d-grid gap-2">
          <div className="regist">Belum mendaftar? <a href="/">Daftar sekarang</a> </div>
        </div>
      </Form>
    </>
  );
}
