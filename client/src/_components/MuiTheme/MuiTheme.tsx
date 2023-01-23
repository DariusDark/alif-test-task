import { ThemeProvider, createTheme, Theme } from "@mui/material";
import { green } from "@mui/material/colors";

const MuiTheme = ({ children }: any) => { //TYPE
  const theme: Theme = createTheme({
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
