import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { Button, Title, Wrapper } from "../styles/styledComponet";

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user.email + " is LoggedIn");
        setUser(user);
      } else {
        setUser(undefined);
        console.log("user is logged out");
        handleLogout();
      }
    });
  });

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(undefined);
        navigate("/login");
        console.log("Signed out successfully");
      })
      .catch((error) => {});
  };

  return (
    <Wrapper>
      {user && (
        <>
          <Title>{user.email} is Logged in</Title>
          <Button type="submit" onClick={handleLogout}>
            Logout
          </Button>
        </>
      )}
    </Wrapper>
  );
};

export default Home;
