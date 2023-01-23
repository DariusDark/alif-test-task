import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import DATABASE_ICON from "../../_assets/database.svg";

const useStyles: any = makeStyles(() => ({ //TYPE
  img: { maxHeight: "80px", display: "block", margin: "0px auto"},
}));

export const NoResultTitle = () => {
  const classes = useStyles();
  return (
    <Box p="10px">
      <Box mb={1}>
        <img
          className={classes["img"]}
          src={DATABASE_ICON}
          alt="Database icon"
        />
      </Box>
      <Typography fontWeight={600} color="#6C757D" align="center" variant="h4">
        No data
      </Typography>
    </Box>
  );
};
