import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListOfTabs from "./ListOfTabs";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { userSelector } from "../../redux/user/selector";
import Loading from "../Loading";
import { Drawer, DrawerHeader, AppBar } from "./styles/styles";

const PostsPage = React.lazy(() => import("../../pages/posts"));
const NotFoundPage = React.lazy(() => import("../../pages/not_found"));
// const AuthPageLazy = React.lazy(() => import("../../pages/auth"));
const MainPage = React.lazy(() => import("../../pages/main"));
const MusicPage = React.lazy(() => import("../../pages/music"));
const SupportPage = React.lazy(() => import("../../pages/support"));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const user = useSelector(userSelector);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        width: "100%",
      }}
    >
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ display: "flex" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            TestVersion 0.1
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <Typography>{user.name}</Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <ListOfTabs />
        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <React.Suspense fallback={<Loading />}>
          <Routes>
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/app/posts" element={<PostsPage />}></Route>
            <Route path="/app/support" element={<SupportPage />}></Route>
            {/* <Route path="/app/authPage" element={<AuthPageLazy />}></Route> */}
            <Route path="/app/music" element={<MusicPage />}></Route>
            <Route path="/" element={<MainPage />}></Route>
          </Routes>
        </React.Suspense>
      </Box>
    </Box>
  );
}
