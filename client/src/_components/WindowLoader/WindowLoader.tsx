import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { IWindowLoader } from "../../_interfaces/WindowLoader";

const WindowLoader = ({ loading }: IWindowLoader) => {
  return loading ? (
    <Backdrop sx={{ zIndex: 9999 }} open={loading}>
      <CircularProgress />
    </Backdrop>
  ) : null;
};

export default WindowLoader;
