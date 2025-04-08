import { Box, Grid } from '@mui/material'
import Header from './Sections/Header'

export function App() {
  return (
    <Box p={2}>
      <Grid
        container
        direction="column"
        alignItems="center"
        columns={{ xs: 6, md: 8, lg: 12 }}
      >
        <Grid size={{ xs: 6 }}>
          <Header />
        </Grid>
      </Grid>
    </Box>
  )
}

export default App
