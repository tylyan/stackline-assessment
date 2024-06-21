interface Review {
  customer: string;
  review: string;
  score: number;
}

export interface Sale {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
}

export interface Product {
  brand: string;
  details: string[];
  image: string;
  retailer: string;
  reviews: Review[];
  sales: Sale[];
  subtitle: string;
  tags: string[];
  title: string;
}
