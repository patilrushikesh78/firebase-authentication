import React, { useState } from "react";
import { auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  Button,
  Form,
  Input,
  StyledParagraph,
  Title,
  Wrapper,
} from "../styles/styledComponet";
import { NavLink, useNavigate } from "react-router-dom";
import { alertMsg } from "../utils/utils";

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        switch (error.code) {
          case "auth/email-already-in-use":
            alertMsg("error", "Email already in use !");
            break;
        }
      });
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Title>Signup</Title>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <Button type="submit">Signup</Button>
        <StyledParagraph>
          Already have an account? <NavLink to="/login">Sign in</NavLink>
        </StyledParagraph>
      </Form>
    </Wrapper>
  );
};

export default Signup;
