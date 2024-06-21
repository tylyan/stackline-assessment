import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import ProductInfo from './ProductInfo';
import RetailSalesChart from './RetailSalesChart';
import SalesTable from './SalesTable';

export default function MainGrid() {
  return (
    <>
      <Grid container spacing={2} columns={12}>
        <Grid xs={12} md={4} lg={3}>
          <ProductInfo />
        </Grid>
        <Grid xs={12} md={8} lg={9}>
          <Stack spacing={2}>
            <RetailSalesChart />
            <SalesTable />
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}
