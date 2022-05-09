import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import React from "react";
import { useAuth } from "../../hooks/auth";
import LogoutIcon from "@mui/icons-material/Logout";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
interface logOutPropTypes {
  open: boolean;
  handleClose: any;
}

const LogOutDialog: React.FC<logOutPropTypes> = ({ open, handleClose }) => {
  const { handleLogout } = useAuth();
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <h2>Do you want to log out?</h2>
        </DialogTitle>
        <DialogActions>
          <Button
            variant="contained"
            style={{ marginTop: "10px", backgroundColor: "#3a0ca3" }}
            endIcon={<LogoutIcon />}
            onClick={handleLogout}
          >
            Yes
          </Button>
          <Button
            variant="contained"
            onClick={handleClose}
            endIcon={<HighlightOffIcon />}
            style={{ marginTop: "10px", backgroundColor: "#3a0ca3" }}
          >
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default LogOutDialog;
