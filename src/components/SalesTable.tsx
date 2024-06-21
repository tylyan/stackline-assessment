import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { sortBy } from 'lodash';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Sale } from '../model/product';

export const columns: GridColDef[] = [
  { field: 'weekEnding', headerName: 'WEEK ENDING', flex: 1 },
  { field: 'retailSales', headerName: 'RETAIL SALES', flex: 1 },
  { field: 'wholesaleSales', headerName: 'WHOLESALE SALES', flex: 1 },
  { field: 'unitsSold', headerName: 'UNITS SOLD', flex: 1 },
  { field: 'retailerMargin', headerName: 'RETAILER MARGIN', flex: 1 },
];

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export default function SalesTable() {
  const sales =
    sortBy(
      useSelector((state: RootState) => state.currentProduct.product?.sales),
      ['weekEnding']
    ) ?? ([] as Sale[]);

  return (
    <DataGrid
      sx={{ boxShadow: 1 }}
      rows={sales
        .map((sale) => ({
          ...sale,
          retailSales: formatter.format(sale.retailSales),
          wholesaleSales: formatter.format(sale.wholesaleSales),
          retailerMargin: formatter.format(sale.retailerMargin),
        }))
        .map((sale, id) => ({ id, ...sale }))}
      columns={columns}
      initialState={{
        pagination: { paginationModel: { pageSize: 10 } },
      }}
      pageSizeOptions={[10, 25, 50]}
    />
  );
}
