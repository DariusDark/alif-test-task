import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const WindowLoader = ({ loading }: { loading: boolean }) => {
  return loading ? (
    <Backdrop sx={{ zIndex: 9999 }} open={loading}>
      <CircularProgress />
    </Backdrop>
  ) : null;
};

export default WindowLoader;
