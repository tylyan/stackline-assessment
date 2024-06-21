import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useSelector } from 'react-redux';
import { Box, BoxProps } from '@mui/material';
import { Product } from '../model/product';
import { RootState } from '../store';

function TagLabel(props: BoxProps) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        border: '1px solid',
        borderColor: 'lightgrey',
        borderRadius: 2,
        fontSize: '0.875rem',
        ...sx,
      }}
      {...other}
    />
  );
}

function HorizontalRule() {
  return (
    <hr
      style={{
        display: 'block',
        height: '1px',
        border: 0,
        borderTop: '1px solid #eee',
        padding: 0,
      }}
    ></hr>
  );
}

export default function ProductInfo() {
  const product = useSelector((state: RootState) => state.currentProduct.product) as Product;

  return (
    <Card variant="outlined" sx={{ pb: '8px', height: '100%', boxShadow: 1 }}>
      <CardContent style={{ padding: 0 }}>
        <img
          src={product.image}
          alt="product image"
          style={{ height: '100%', width: '100%', padding: '4em', paddingBottom: '2em' }}
        ></img>
        <Typography align="center" variant="h6">
          {product.title}
        </Typography>
        <Typography
          align="center"
          style={{ color: '#bbb', fontSize: '1em', paddingLeft: '2em', paddingRight: '2em', paddingBottom: '1em' }}
        >
          {product.subtitle}
        </Typography>
        <HorizontalRule />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            paddingLeft: '2em',
            paddingRight: '2em',
          }}
        >
          {product.tags.map((tag: string, index: number) => (
            <TagLabel key={index}>{tag}</TagLabel>
          ))}
        </Box>
        <HorizontalRule />
      </CardContent>
    </Card>
  );
}
