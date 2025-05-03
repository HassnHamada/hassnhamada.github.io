import { Box, Card, Grid, Typography } from '@mui/material'
import { useMemo } from 'react'
import WorkCard, { WorkCardProps } from '../Components/WorkCard'

export default function Work() {
  const works = useMemo<WorkCardProps[]>(
    () => [
      {
        workPlace: 'Mentor.AI',
        title: 'Data Scientist',
        imageUrl: 'MentorAI.ico',
        description:
          'Mentor.AI is a platform leveraging AI to provide customized roadmaps laveraging LLMs. I worked as a Data Scientist focusing on building an efficient RAG system.',
        focusPoints: [
          'Parsed and processed JSON files, ensuring data quality',
          'Implemented a Weaviate database to store and retrieve data efficiently',
          'Developed a tailored prompt for Cohere to process user queries and return the most relevant responses.',
        ],
        link: 'https://mentor-nine-dusky.vercel.app',
        tags: ['Python', 'ETL', 'LLMs', 'Weaviate', 'Database', 'Docker'],
        dateStart: 'Sep 2024',
        dateEnd: 'Oct 2024',
      },
      {
        workPlace: 'Safandi.com',
        title: 'Software Engineer',
        imageUrl: 'Safandi.png',
        description:
          'Safandi.com is a healthcare startup aiming to automate the process of detecting destructive behaviour (ex. bullying, gaslighting, etc.) between couples. I worked on the backend and data analysis of the project.',
        focusPoints: [
          'Automated data extraction from WhatsApp exports.',
          'Leveraged GPT API capabilities to conduct in-depth analysis of conversational data.',
          'Developed a robust pipeline that systematically archives emails to AWS S3, ensuring secure and organized data storage.',
          'Transformed WhatsApp chats into charts, offering a visual representation of conversational trends and themes.',
        ],
        link: 'https://safandi.com',
        tags: [
          'Python',
          'AWS',
          'GPT API',
          'Jupyter Notebook',
          'LLMs',
          'Lambda',
          'PyTorch',
          'NodeJS',
          'S3',
          'EC2',
        ],
        dateStart: 'Dec 2022',
        dateEnd: 'Jul 2023',
      },
      {
        workPlace: 'ICPC College Club',
        title: 'Trainee/Mentor',
        imageUrl: 'ICPC.svg',
        description:
          'International Collegiate Programming Contest (ICPC) is a multi-tier, team-based competition among universities from around the world. I was a member of the ICPC college club at my university.',
        focusPoints: [
          'Learned lots of advanced algorithms and data structures.',
          'Entered the ICPC qualifications three times.',
          'Mentored new members in the club.',
          'Achieved twelfth place in ECPC 2022 and twenty-sixth in ACPC 2022',
        ],
        link: 'https://icpc.global/',
        tags: [
          'ICPC',
          'College Club',
          'Competitive Programming',
          'Algorithms',
          'Data Structures',
          'Mentoring',
          'Teamwork',
        ],
        dateStart: 'Jan 2020',
        dateEnd: 'Sep 2022',
      },
    ],
    []
  )

  return (
    <Box>
      <Card
        sx={{
          borderRadius: 1,
          p: 1,
          backgroundColor: 'rgba(255, 255, 255, 0.16)',
        }}
      >
        <Typography variant="h4" p={1}>
          Work Experience{' '}
          <span role="img" aria-label="tools">
            🛠️
          </span>
        </Typography>
        <Grid container spacing={2}>
          {works.map((work, index) => (
            <Grid size={{ xs: 12 }} key={index}>
              <WorkCard {...work} />
            </Grid>
          ))}
        </Grid>
      </Card>
    </Box>
  )
}
