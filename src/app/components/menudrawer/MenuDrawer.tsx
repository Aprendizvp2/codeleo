import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import WorkIcon from "@mui/icons-material/Work";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

interface MenuDrawerProps {
  open?: boolean;
  toggleMenuDrawer?: () => void;
}

export default function MenuDrawer({
  open,
  toggleMenuDrawer,
}: MenuDrawerProps) {
  const menuItems = [
    { text: "Home", icon: <HomeIcon sx={{ color: "white" }} />, href: "#home" },
    {
      text: "Projects",
      icon: <WorkIcon sx={{ color: "white" }} />,
      href: "#projects",
    },
    {
      text: "Skills",
      icon: <CodeIcon sx={{ color: "white" }} />,
      href: "#skills",
    },
    {
      text: "Contact",
      icon: <LocalPhoneIcon sx={{ color: "white" }} />,
      href: "#contact",
    },
  ];

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={toggleMenuDrawer}
      PaperProps={{
        sx: {
          backgroundColor: "#262626",
          width: 320,
        },
      }}
    >
      <Box sx={{ height: "100%" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "8px 16px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
          }}
        >
          <IconButton onClick={toggleMenuDrawer} sx={{ color: "white" }}>
            <ArrowBackIcon />
          </IconButton>
          <Box
            sx={{
              flexGrow: 1,
              textAlign: "center",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Codeleo
          </Box>
        </Box>
        <List>
          {menuItems.map((item, index) => (
            <Box key={item.text}>
              <ListItem disablePadding>
                <ListItemButton
                  href={item.href}
                  onClick={toggleMenuDrawer}
                >
                  <ListItemIcon sx={{ minWidth: "40px" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      color: "white",
                      fontWeight: "medium",
                    }}
                  />
                </ListItemButton>
              </ListItem>
              {index < menuItems.length - 1 && (
                <Box
                  sx={{
                    height: "1px",
                    width: "100%",
                    backgroundColor: "rgba(255, 255, 255, 0.12)",
                    margin: "0 auto",
                  }}
                />
              )}
            </Box>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
