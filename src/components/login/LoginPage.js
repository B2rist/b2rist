import React from "react";
import { signInWithGoogle } from "firebaseService";
import "./LoginPage.css";
import { Navigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import IconButton from "@mui/material/IconButton";
import { useSelector } from "react-redux";
import { selectUser } from "services/userSlice";
import FullScreenContainer from "components/fullscreen/FullScreenContainer";

const LoginPage = () => {
  const user = useSelector((state) => selectUser(state));
  const onLogin = () => signInWithGoogle();
  return (
    <FullScreenContainer>
      <div className="content">
        <div className="text">Login Form</div>
        {!user ? (
          <div className="icon-button" onClick={onLogin} role="presentation">
            <IconButton>
              <GoogleIcon />
            </IconButton>
            Google
          </div>
        ) : (
          <Navigate to="/" />
        )}
      </div>
    </FullScreenContainer>
  );
};

export default LoginPage;
