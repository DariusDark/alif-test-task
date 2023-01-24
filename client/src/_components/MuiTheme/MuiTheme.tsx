import { ThemeProvider, createTheme, Theme } from "@mui/material";
import { green } from "@mui/material/colors";
import { PropsWithChildren } from "react";

const MuiTheme = ({ children }: PropsWithChildren) => {
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
