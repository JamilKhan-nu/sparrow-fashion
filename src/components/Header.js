import React from "react";
import { Box, Container, Typography, Paper } from "@mui/material";

const Header = () => {
  return (
    <Box sx={{ bgcolor: "#faaf", height: "90vh" }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "50vh",
            bgcolor: "#fff",
          }}
        >
          <Paper />
          <Typography>Subscribe to the best of Udemy</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
