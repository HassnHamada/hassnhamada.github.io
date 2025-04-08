import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { Box, Button, Card, CardActions, Grid, Typography } from '@mui/material'
import { useMemo } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const links = useMemo(
    () => [
      {
        icon: <LinkedInIcon />,
        link: 'https://www.linkedin.com/in/hassn-hamada-659025188',
        text: 'LinkedIn',
        color: 'rgb(29, 122, 214)',
      },
      {
        icon: <GitHubIcon />,
        link: 'https://github.com/hassnhamada',
        text: 'GitHub',
        color: 'rgb(218, 218, 218)',
      },
    ],
    []
  )
  return (
    <Box>
      <Grid container>
        <Grid size={{ xs: 12 }} pb={2}>
          <Typography variant="h4" component="h1">
            Hello
            <span role="img" aria-label="waving hand">
              👋
            </span>
            , I'm <strong>Hassn Hamada</strong>
          </Typography>
        </Grid>
        <Grid size={{ xs: 12 }} pb={2}>
          <Typography variant="body1" fontSize={20} component="p">
            Software Engineer
            <span role="img" aria-label="man coding">
              👨‍💻
            </span>
            , Problem Solver
            <span role="img" aria-label="puzzle piece">
              🧩
            </span>
            , and an AI Enthusiast
            <span role="img" aria-label="robot">
              🤖
            </span>
          </Typography>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Card>
            <CardActions>
              {links.map((link, index) => (
                <Button
                  key={index}
                  component={Link}
                  to={link.link}
                  startIcon={link.icon}
                  variant="text"
                  sx={{ color: link.color, width: '100%', height: '100%' }}
                >
                  <Typography variant="body1" component="span">
                    {link.text}
                  </Typography>
                </Button>
              ))}
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}
