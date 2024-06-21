import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { LineChart } from '@mui/x-charts/LineChart';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { sortBy } from 'lodash';
import { max } from 'lodash';

function getDaysInMonth(month: number, year: number) {
  const date = new Date(year, month, 0);
  const monthName = date.toLocaleDateString('en-US', {
    month: 'short',
  });
  const daysInMonth = date.getDate();
  const days = [];
  let i = 1;
  while (days.length < daysInMonth) {
    days.push(`${monthName} ${i}`);
    i += 1;
  }
  return days;
}

export default function RetailSalesChart() {
  const sales =
    sortBy(
      useSelector((state: RootState) => state.currentProduct.product?.sales),
      ['weekEnding']
    ) ?? [];
  const dates = sales.map((sale) => sale.weekEnding);
  const yAxisMax =
    max([...sales.map((sale) => sale.retailSales), ...sales.map((sale) => sale.retailerMargin)]) ?? 1000000;

  return (
    <Card variant="outlined" sx={{ height: 400, width: '100%', boxShadow: 1 }}>
      <CardContent>
        <Typography variant="subtitle1" gutterBottom>
          Retail Sales
        </Typography>
        <LineChart
          colors={['blue', 'grey']}
          xAxis={[
            {
              scaleType: 'point',
              data: dates,
              tickInterval: (index, i) => (i + 1) % 5 === 0,
            },
          ]}
          yAxis={[{ id: 'yAxis', scaleType: 'linear', min: 0, max: yAxisMax * 1.1 }]}
          leftAxis="yAxis"
          series={[
            {
              id: 'retailSales',
              label: 'Retail Sales',
              showMark: false,
              curve: 'linear',
              stackOrder: 'ascending',
              data: sales.map((sale) => sale.retailSales),
              area: false,
              yAxisKey: 'yAxis',
            },
            {
              id: 'retailerMargin',
              label: 'Retailer Margin',
              showMark: false,
              curve: 'linear',
              area: false,
              stackOrder: 'ascending',
              data: sales.map((sale) => sale.retailerMargin),
              yAxisKey: 'yAxis',
            },
          ]}
          height={320}
          margin={{ left: 75, right: 0, top: 60, bottom: 30 }}
          grid={{ horizontal: true }}
          sx={{
            '& .MuiAreaElement-series-organic': {
              fill: "url('#organic')",
            },
            '& .MuiAreaElement-series-referral': {
              fill: "url('#referral')",
            },
          }}
          slotProps={{
            legend: {
              labelStyle: { fontSize: 14 },
              itemMarkWidth: 10,
              itemMarkHeight: 10,
              itemGap: 24,
              position: { vertical: 'top', horizontal: 'right' },
            },
          }}
        ></LineChart>
      </CardContent>
    </Card>
  );
}
