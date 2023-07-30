import { createTheme } from "@mui/material/styles";
import { amber } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: amber,
    secondary: {
      light: "#1a1a1a",
      main: "#0C0C0C",
    },
  },
});
