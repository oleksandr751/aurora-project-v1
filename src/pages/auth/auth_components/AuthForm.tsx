import {
  Alert,
  Button,
  Card,
  CardHeader,
  InputAdornment,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
// import Loading from "../../../components/Loading";
// import SendIcon from "@mui/icons-material/Send";
import { AccountCircle } from "@mui/icons-material";
import KeyIcon from "@mui/icons-material/Key";
import { useAuth } from "../../../hooks/auth";
import LoginIcon from "@mui/icons-material/Login";
import { useSelector, useDispatch } from "react-redux";
import types from "../../../redux/types";

interface loginFormTypes {
  login: string;
  password: string;
  isLogin: boolean;
  isPassword: boolean;
}

const AuthForm = () => {
  const { handleLogin } = useAuth();
  const dispatch = useDispatch();
  const error = useSelector((state: any) => state.user.userError);
  const initialState = {
    login: "",
    password: "",
    isLogin: true,
    isPassword: true,
  };
  const handleChange = (e: any) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
    dispatch({ type: types.USER_ERROR, payload: { userError: false } });
  };

  const [loginForm, setLoginForm] = useState<loginFormTypes>(initialState);
  return (
    <>
      <Card
        sx={{
          width: "300px",
          height: "300px",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CardHeader title="Sign in"></CardHeader>
        <TextField
          sx={{ margin: "10px" }}
          id="outlined-required"
          label="Login"
          placeholder="Login"
          name="login"
          InputProps={{
            style: { fontSize: 14 },
            startAdornment: (
              <InputAdornment position="start" sx={{ marginRight: "10px" }}>
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          onChange={handleChange}
          value={loginForm.login}
        />
        <TextField
          sx={{ margin: "10px" }}
          placeholder="Password"
          id="outlined-password-input"
          label="Password"
          type="password"
          name="password"
          onChange={handleChange}
          InputProps={{
            style: { fontSize: 14 },
            startAdornment: (
              <InputAdornment position="start" sx={{ marginRight: "10px" }}>
                <KeyIcon />
              </InputAdornment>
            ),
          }}
          value={loginForm.password}
          autoComplete="current-password"
        />
        {error && <Alert severity="error">Wrong log in data!</Alert>}
        <Button
          onClick={() => handleLogin(loginForm.login, loginForm.password)}
          variant="contained"
          style={{ marginTop: "10px", backgroundColor: "#3a0ca3" }}
          endIcon={<LoginIcon />}
        >
          Log In
        </Button>
      </Card>
    </>
  );
};

export default AuthForm;
