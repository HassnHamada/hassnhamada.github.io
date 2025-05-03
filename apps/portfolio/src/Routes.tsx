import { createHashRouter } from 'react-router-dom'
import App from './app/app'
import { NotFoundPage } from '@hassnhamada.github.io/error-handling'

export const router = createHashRouter(
  [
    {
      path: '/',
      element: <App />,
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ],
  { basename: '/' }
)
