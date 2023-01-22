import { ThemeProvider, createTheme } from "@mui/material";
import { green } from "@mui/material/colors";

const MuiTheme = ({ children }: any) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#5c7ca3",
      },
      secondary: {
        main: green[500],
      },
    },
  });
  
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MuiTheme;
