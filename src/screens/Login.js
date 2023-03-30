import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
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

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const info = { email: email, password: password };
    console.log(info);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.code);
        switch (error.code) {
          case "auth/email-already-in-use":
            alertMsg("Email already in use !");
            break;
          case "auth/user-not-found":
            alertMsg("error", "User not found!");
            break;
        }
      });
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Title>Sign in</Title>
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
        <Button type="submit">Login</Button>
        <StyledParagraph>
          No account yet? <NavLink to="/signup">Sign up</NavLink>
        </StyledParagraph>
      </Form>
    </Wrapper>
  );
};

export default Login;
