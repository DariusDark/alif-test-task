import AppBar from "@mui/material/AppBar";
import Typograpghy from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
const Header = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typograpghy variant="h5">Notebooks and etc.</Typograpghy>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
