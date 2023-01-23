import { Box, Button, Tooltip } from "@mui/material";
import { withStyles } from "@mui/styles";
import ClearIcon from "@mui/icons-material/Clear";

const ActionButton = withStyles((theme: any) => {
  return {
    root: {
      padding: 5,
      minWidth: 30,
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
})(({ title, children, ...restProps }: any) => (
  <Tooltip title={title} arrow>
    <Button {...restProps}>{children}</Button>
  </Tooltip>
));

export const DeleteButton = ({
  title = "Удалить",
  onClick,
}: {
  title?: string;
  onClick: CallableFunction;
}) => {
  return (
    <ActionButton title={title} onClick={onClick}>
      <ClearIcon />
    </ActionButton>
  );
};
