import { theme } from '@hassnhamada.github.io/theme';
import { Box, Card, CardHeader, Chip, SvgIcon, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export type EduCardProps = {
  eduInstitution: string
  course: string
  imageUrl: string
  link: string
  dateStart: string
  dateEnd: string
}

export default function EduCard({ eduInstitution, course, imageUrl, link, dateStart, dateEnd }: EduCardProps) {
  return (
    <Box>
      <Card sx={{ borderRadius: 2 }}>
        <CardHeader
          title={
            <Link to={link} style={{ textDecoration: 'none', color: theme.palette.text.primary }}>
              <Typography variant='body1' component='span'>{eduInstitution}</Typography>
            </Link>
          }
          subheader={course}
          avatar={
            <SvgIcon>
              <image href={imageUrl} width="100%" height="100%" />
            </SvgIcon>
          }
          action={<Chip label={`${dateStart} - ${dateEnd}`} sx={{ margin: 1 }} />}
        />
      </Card>
    </Box>
  )
}
