import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EmailIcon from "@mui/icons-material/Email";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import LogoutIcon from "@mui/icons-material/Logout";
import LogOutDialog from "../logout/LogOutDialog";
import { TabsData } from "./TabsData";

const LinkItemStyles = {
  "&.Mui-selected": {
    backgroundColor: "#3a0ca3",
    "&:hover": {
      background: "#4cc9f0",
    },
  },
  "&:hover": {
    background: "#4cc9f0",
  },
};
const ListOfTabs = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const location = useLocation();
  return (
    <List>
      {TabsData.map((link, idx) => (
        <Link
          key={link.id}
          to={link.to}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <ListItemButton
            selected={location.pathname === link.to}
            sx={LinkItemStyles}
          >
            <ListItemIcon>
              {link.to === "/" ? (
                <DashboardIcon
                  sx={{
                    color: location.pathname === link.to ? "white" : "#3a0ca3",
                  }}
                />
              ) : link.to === "/app/music" ? (
                <LibraryMusicIcon
                  sx={{
                    color: location.pathname === link.to ? "white" : "#3a0ca3",
                  }}
                />
              ) : link.to === "/app/posts" ? (
                <EmailIcon
                  sx={{
                    color: location.pathname === link.to ? "white" : "#3a0ca3",
                  }}
                />
              ) : link.to === "/app/support" ? (
                <SupportAgentIcon
                  sx={{
                    color: location.pathname === link.to ? "white" : "#3a0ca3",
                  }}
                />
              ) : null}
            </ListItemIcon>
            <ListItemText
              primary={link.title}
              sx={{
                color: location.pathname === link.to ? "white" : "#3a0ca3",
              }}
            />
          </ListItemButton>
        </Link>
      ))}
      <Link to="#" style={{ textDecoration: "none", color: "inherit" }}>
        <ListItemButton onClick={handleClickOpen}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary={"Log out"} />
        </ListItemButton>
      </Link>
      <LogOutDialog open={open} handleClose={handleClose}></LogOutDialog>
    </List>
  );
};

export default ListOfTabs;
