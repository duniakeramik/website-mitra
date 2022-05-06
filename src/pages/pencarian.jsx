import { Box } from "@mui/material";
import AppBarComp from "../components/organisms/AppBar";
import Copyright from "../components/organisms/Footer";
import TextSearch from "../components/molecules/textSearch";
import { ProductsSearch } from "../layouts/productsSearch";

function Pencarian() {
  return (
    <>
      <AppBarComp />
      <TextSearch />
      <Box
        sx={{
          p: 2,
        }}
      >
        <ProductsSearch />
      </Box>
      <Copyright />
    </>
  );
}

export default Pencarian;
