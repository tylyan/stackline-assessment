import Container from '@mui/material/Container';
import MainGrid from './components/MainGrid';
import Header from './components/Header';

export default function App() {
  return (
    <>
      <Header></Header>
      <Container
        disableGutters
        maxWidth="xl"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          py: { xs: 8, sm: 8 },
          gap: 2,
        }}
      >
        <MainGrid />
      </Container>
    </>
  );
}
