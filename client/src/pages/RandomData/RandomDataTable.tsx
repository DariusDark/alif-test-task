import {
  Box,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { observer } from "mobx-react-lite";
import { useMemo } from "react";
import { NoResultTitle } from "../../_components/NoResultTitle/NoResultTitle";
import { ITableHeadCells } from "../../_interfaces/RandomDataTable";
import RandomDataStore from "../../_store/RandomDataStore";

const useStyles: any = makeStyles(() => ({
  tableHeadCell: {
    color: "#fff !important",
    backgroundColor: "#5c7ca3 !important",
  },
}));

const tableHeadCells: ITableHeadCells[] = [
  {
    label: "ID",
  },
  {
    label: "Name",
  },
  {
    label: "Category",
  },
  {
    label: "Price",
  },
  {
    label: "Quantity",
  },
  {
    label: "Available",
  },
];

const RandomDataTable = () => {
  const {
    products: randomData,
    infiniteLoader,
    isInfiniteLoaderContainerHidden,
  } = RandomDataStore;
  const classes = useStyles();

  // const handleDelete = (id: number) => {};

  const randomDataParser = useMemo(() => {
    return randomData.map((item: any) => (
      <TableRow key={item.id}>
        <TableCell align="center">{item.id}</TableCell>
        <TableCell align="center">{item.name}</TableCell>
        <TableCell align="center">{item.category}</TableCell>
        <TableCell align="center">{item.price}</TableCell>
        <TableCell align="center">{item.quantity}</TableCell>
        <TableCell align="center">{item.available ? "Yes" : "No"}</TableCell>
      </TableRow>
    ));
  }, [randomData]);

  const tableHeadCellsParser = useMemo(() => {
    return tableHeadCells.map((tableCell, index) => (
      <TableCell
        key={index}
        align="center"
        className={classes["tableHeadCell"]}
      >
        {tableCell.label}
      </TableCell>
    ));
  }, [tableHeadCells]);

  return (
    <TableContainer component={Paper} sx={{ maxHeight: "400px" }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>{tableHeadCellsParser}</TableRow>
        </TableHead>
        <TableBody>{randomDataParser}</TableBody>
      </Table>
      <Box
        id="loaderContainer"
        className="infiniteLoaderContainer"
        sx={{
          padding: "10px 0px",
          display: isInfiniteLoaderContainerHidden ? "none" : "flex",
          justifyContent: "center",
        }}
      >
        {infiniteLoader && <CircularProgress />}
      </Box>
      {!randomData.length && <NoResultTitle />}
    </TableContainer>
  );
};

export default observer(RandomDataTable);
