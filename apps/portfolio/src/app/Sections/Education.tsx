import { Box, Card, Grid, Typography } from '@mui/material'
import { useMemo } from 'react'
import EduCard, { EduCardProps } from '../Components/EduCard'

export default function Education() {
  const education = useMemo<EduCardProps[]>(
    () => [
      {
        eduInstitution: 'ALX Africa',
        course: 'Data Science',
        imageUrl: 'IALX.webp',
        link: 'https://www.alxafrica.com/',
        dateStart: 'Oct 2023',
        dateEnd: 'Present',
      },
      {
        eduInstitution: 'Bertelsmann Udacity Scholarship',
        course: 'AI Programming with Python',
        imageUrl: 'udacity.svg',
        link: 'https://www.udacity.com/',
        dateStart: 'Mar 2023',
        dateEnd: 'Jul 2023',
      },
      {
        eduInstitution: 'AMIT',
        course: 'Software Testing',
        imageUrl: 'AMIT.svg',
        link: 'https://amit-learning.com/',
        dateStart: 'Mar 2023',
        dateEnd: 'Jul 2023',
      },
      {
        eduInstitution: 'Benha University',
        course: 'Communication & Computer Engineering',
        imageUrl: 'FENG.png',
        link: 'https://en.feng.bu.edu.eg/',
        dateStart: 'Sep 2017',
        dateEnd: 'May 2022',
      },
    ],
    []
  )

  return (
    <Box>
      <Card sx={{ borderRadius: 1, p: 1, backgroundColor: 'rgba(255, 255, 255, 0.16)' }}>
        <Typography variant="h4" p={1}>
          Education <span role="img" aria-label="books">📚</span>
        </Typography>
        <Grid container spacing={1}>
          {education.map((edu, index) => (
            <Grid size={{ xs: 12 }} key={index}>
              <EduCard {...edu} />
            </Grid>
          ))}
        </Grid>
      </Card>
    </Box>
  )
}
