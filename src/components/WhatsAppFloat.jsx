import React from "react";
import { Box, IconButton } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const WhatsAppFloat = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: { xs: 16, sm: 24 },
        right: { xs: 16, sm: 24 },
        zIndex: 9999,
      }}
    >
      <IconButton
        href="https://wa.link/8n9m3i"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          backgroundColor: "#25D366",
          color: "#fff",
          width: 60,
          height: 60,
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          "&:hover": {
            backgroundColor: "#20b858",
            transform: "scale(1.1)",
          },
          transition: "all 0.3s ease",
        }}
      >
        <WhatsAppIcon sx={{ fontSize: 32 }} />
      </IconButton>
    </Box>
  );
};

export default WhatsAppFloat;
