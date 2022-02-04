import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";
import Modal from "react-modal";

const RecoverPass = () => {

  const Logo = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&display=swap");
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size:  2.8em;
  background-image: linear-gradient(to right, #3eaed7, #a11077);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
`;

const Title = styled.h1`
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&display=swap");
font-family: "Open Sans", sans-serif;
font-style: normal;
font-size: 1.1em;
color: #59329c;
text-transform: uppercase;
text-align: center;
`;

  return (
    <>
      <div class="form-recoverpass">
        <Logo >
          ÂnimaFlix
        </Logo>
        <Title className="mb-1">
          Recuperar Senha
        </Title>
        <Form id="form">
          <Form.Group className="mt-3">
            <Form.Label>E-mail:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              id="email"
              placeholder="Insira o e-mail"
            />
            <Form.Text className="text-muted mt-4">
              E-mail para recuperação da senha.
            </Form.Text>
          </Form.Group>
          <Button className="mt-4"
            variant="secondary"
            size="sm"
            style={{ backgroundColor: "#6610f2", width: "100%" }}
            type="submit"
          >
            Recuperar
          </Button>{" "}
        </Form>
      </div>
    </>
  );
};

export default RecoverPass;
