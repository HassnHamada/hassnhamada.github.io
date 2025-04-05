import { SearchOff } from '@mui/icons-material'
import { Box, Button, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { useTheme } from '@mui/material/styles'

export function NotFoundPage() {
  const theme = useTheme()

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center'
      }}
    >
      <Grid container spacing={3} direction="column" alignItems="center">
        <Grid>
          <SearchOff
            sx={{
              fontSize: theme.typography.h1.fontSize,
              color: theme.palette.text.secondary,
            }}
          />
        </Grid>
        <Grid>
          <Typography
            variant="h3"
            sx={{
              fontWeight: theme.typography.fontWeightBold,
              color: theme.palette.text.primary,
            }}
          >
            404 Not Found
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.secondary,
              marginTop: theme.spacing(1),
            }}
          >
            Oops! The page you're looking for doesn't exist.
          </Typography>
        </Grid>
        <Grid>
          <Button
            component={Link}
            to="/"
            variant="contained"
            color="primary"
            sx={{
              textTransform: 'none',
              padding: theme.spacing(1, 3),
            }}
          >
            Go Back Home
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}
