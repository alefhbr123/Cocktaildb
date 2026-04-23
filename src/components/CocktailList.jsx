import React from 'react';
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Stack,
  Paper,
  CircularProgress,
} from '@mui/material';
import { useCocktail } from '../contexts/CocktailContext';

const CocktailList = () => {
  const { state } = useCocktail();

  // Se estiver carregando, mostrar spinner
  if (state.loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '400px',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  // Se não há resultados para exibir
  if (state.cocktails.length === 0) {
    return (
      <Paper
        elevation={0}
        sx={{
          backgroundColor: '#f8f8f8',
          border: '1px solid #e0e0e0',
          borderRadius: '4px',
          padding: '40px 24px',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: '#666',
            fontSize: '16px',
          }}
        >
          {state.error
            ? 'Nenhum resultado encontrado. Tente outro termo de busca.'
            : 'Digite um termo e clique em "Buscar" para começar.'}
        </Typography>
      </Paper>
    );
  }

  // Renderizar lista de coquetéis
  return (
    <Box>
      <Typography
        variant="h6"
        sx={{
          marginBottom: '20px',
          color: '#222',
          fontWeight: 600,
        }}
      >
        Resultados ({state.cocktails.length})
      </Typography>

      <Grid container spacing={3}>
        {state.cocktails.map((cocktail) => (
          <Grid item xs={12} sm={6} md={4} key={cocktail.idDrink}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#fff',
                border: '1px solid #e0e0e0',
                borderRadius: '4px',
                boxShadow: 'none',
                transition: 'border-color 0.3s ease',
                '&:hover': {
                  borderColor: '#999',
                },
              }}
            >
              {/* Imagem do Coquetel */}
              {cocktail.strDrinkThumb && (
                <CardMedia
                  component="img"
                  height="250"
                  image={cocktail.strDrinkThumb}
                  alt={cocktail.strDrink}
                  sx={{
                    objectFit: 'cover',
                    backgroundColor: '#f0f0f0',
                  }}
                />
              )}

              {/* Conteúdo do Card */}
              <CardContent
                sx={{
                  flexGrow: 1,
                  padding: '16px',
                  '&:last-child': {
                    paddingBottom: '16px',
                  },
                }}
              >
                {/* Nome do Coquetel */}
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    marginBottom: '8px',
                    fontWeight: 600,
                    color: '#222',
                    fontSize: '18px',
                    lineHeight: '1.3',
                  }}
                >
                  {cocktail.strDrink}
                </Typography>

                {/* Categoria */}
                {cocktail.strCategory && (
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#666',
                      marginBottom: '12px',
                      fontSize: '14px',
                    }}
                  >
                    Categoria: <strong>{cocktail.strCategory}</strong>
                  </Typography>
                )}

                {/* Tipo de Bebida */}
                {cocktail.strAlcoholic && (
                  <Stack direction="row" spacing={1} sx={{ marginBottom: '12px' }}>
                    <Chip
                      label={cocktail.strAlcoholic}
                      size="small"
                      variant="outlined"
                      sx={{
                        borderColor: '#999',
                        color: '#333',
                        fontSize: '12px',
                        '& .MuiChip-label': {
                          padding: '4px 8px',
                        },
                      }}
                    />
                  </Stack>
                )}

                {/* Copo/Vidro */}
                {cocktail.strGlass && (
                  <Typography
                    variant="caption"
                    sx={{
                      color: '#999',
                      display: 'block',
                      fontSize: '12px',
                    }}
                  >
                    Vidro: {cocktail.strGlass}
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CocktailList;
