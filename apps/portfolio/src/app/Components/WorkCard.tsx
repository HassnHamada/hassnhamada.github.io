import { theme } from '@hassnhamada.github.io/theme'
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  SvgIcon,
  Typography,
} from '@mui/material'
import { Link } from 'react-router-dom'

export type WorkCardProps = {
  workPlace: string
  title: string
  description: string
  focusPoints: string[]
  imageUrl: string
  link: string
  tags: string[]
  dateStart: string
  dateEnd: string
}

export default function WorkCard({
  workPlace,
  title,
  description,
  focusPoints,
  imageUrl,
  link,
  tags,
  dateStart,
  dateEnd,
}: WorkCardProps) {
  return (
    <Box>
      <Card sx={{ borderRadius: 2 }}>
        <CardHeader
          title={
            <Link
              to={link}
              style={{
                textDecoration: 'none',
                color: theme.palette.text.primary,
              }}
            >
              <Typography variant="body1" component="span">
                {workPlace}
              </Typography>
            </Link>
          }
          subheader={title}
          avatar={
            <SvgIcon>
              <image href={imageUrl} width="100%" height="100%" />
            </SvgIcon>
          }
          action={
            <Chip label={`${dateStart} - ${dateEnd}`} sx={{ margin: 1 }} />
          }
        />
        <Divider />
        <CardContent>
          <Typography variant="body1" component="p" gutterBottom>
            {description}
          </Typography>
          <Box component="ul" m={0}>
            {focusPoints.map((desc, index) => (
              <Typography key={index} component="li">
                {desc}
              </Typography>
            ))}
          </Box>
        </CardContent>
        <Divider />
        <CardActions sx={{ flexWrap: 'wrap' }} onScroll={(e) => console.log(e)}>
          {tags.map((tag, index) => (
            <Chip key={index} label={tag} sx={{ margin: 1, flexShrink: 0 }} />
          ))}
        </CardActions>
      </Card>
    </Box>
  )
}
