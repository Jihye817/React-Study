import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#9cc5e9",
    },
  },
  components: {
    MuiTouchRipple: {
      styleOverrides: {
        ripple: {
          color: "#fff",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          background: "#9cc5e9",
          "&:hover": {
            backgroundColor: "#9cc5e9",
          },
        },
      },
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
