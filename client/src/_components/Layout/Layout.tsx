import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Header from "../Header/Header";

const Layout = ({ children }: any) => {
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
