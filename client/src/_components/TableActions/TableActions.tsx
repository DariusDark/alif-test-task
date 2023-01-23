import { Button, Theme, Tooltip } from "@mui/material";
import { withStyles } from "@mui/styles";
import ClearIcon from "@mui/icons-material/Clear";
import { IAction } from "../../_interfaces/TableActions";

const ActionButton = withStyles((theme: Theme) => {
  return {
    root: {
      padding: 5,
      minWidth: "30px !important",
      maxWidth: 30,
      minHeight: 30,
      maxHeight: 30,
      backgroundColor: theme.palette.primary.main + " !important",
      "&:hover": {
        backgroundColor: theme.palette.primary.main + 80 + " !important",
      },
      "& *": {
        color: "#fff",
        maxWidth: 20,
      },
    },
  };
})(({ title, children, ...restProps }: any) => ( //TYPE
  <Tooltip title={title} arrow>
    <Button {...restProps}>{children}</Button>
  </Tooltip>
));

export const DeleteButton = ({ title = "Удалить", onClick }: IAction) => {
  return (
    <ActionButton title={title} onClick={onClick}>
      <ClearIcon />
    </ActionButton>
  );
};
