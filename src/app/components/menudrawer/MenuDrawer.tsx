import { Button, Drawer, IconButton, Paper } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface MenuDrawerProps {
  open?: boolean;
  toggleMenuDrawer?: () => void;
}

export default function MenuDrawer({
  open,
  toggleMenuDrawer,
}: MenuDrawerProps) {
  return (
    <Drawer anchor="right" open={open} onClick={toggleMenuDrawer}>
      <Paper
        sx={{ backgroundColor: "#262626", height: "100%", borderRadius: 0 }}
      >
        <div>
          <IconButton onClick={toggleMenuDrawer}>
            <ArrowBackIcon sx={{ color: "white" }} />
          </IconButton>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: 320,
          }}
        >
          <Button
            href="#home"
            sx={{ color: "white", textTransform: "none", margin: 2 }}
          >
            Home
          </Button>
          <div style={{ height: 1, width: "100%", backgroundColor: "white" }} />
          <Button
            href="#skills"
            sx={{ color: "white", textTransform: "none", margin: 2 }}
          >
            Skills
          </Button>
          <div style={{ height: 1, width: "100%", backgroundColor: "white" }} />
          <Button
            href="#contact"
            sx={{ color: "white", textTransform: "none", margin: 2 }}
          >
            Contact
          </Button>
          <div style={{ height: 1, width: "100%", backgroundColor: "white" }} />
        </div>
      </Paper>
    </Drawer>
  );
}
