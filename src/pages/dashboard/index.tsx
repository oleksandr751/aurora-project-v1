import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import MiniDrawer from "../../components/drawer/DrawerTest";
import { useHttp } from "../../hooks/http.hook";
import { userIsAuthSelector } from "../../redux/user/selector";
import AuthPage from "../auth";

const Dashboard = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(userIsAuthSelector);
  const { request } = useHttp();
  const getUser = async () => {
    const response = await request("http://localhost:8000/api/getUser/");
    // const response = await fetch("http://localhost:8000/api/getUser/");
    console.log(response);
  };
  useEffect(() => {
    try {
      console.log(<AuthPage></AuthPage>);
      getUser();
    } catch (error) {}
  }, []);
  // const user = useSelector(userSelector);
  useEffect(() => {
    // dispatch({ type: types.SET_USER_DATA_START, payload: { name: "Vasyl" } });
    return () => {};
  }, [dispatch]);

  return (
    <>
      {isAuth ? (
        <MiniDrawer />
      ) : (
        <Routes>
          <Route path="*" element={<AuthPage />} />
        </Routes>
      )}
    </>
  );
};

export default Dashboard;
