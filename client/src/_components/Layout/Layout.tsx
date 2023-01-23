import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Header from "../Header/Header";
import { ILayout } from "../../_interfaces/Layout";

const Layout = ({ children }: ILayout) => {
  return (
    <div>
      <Box mb={10}>
        <Header />
      </Box>
      <Container maxWidth="xl">{children}</Container>
    </div>
  );
};

export default Layout;
