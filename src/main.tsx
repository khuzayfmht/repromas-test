import Dashboard from 'pages/dashboard';
import { StudentProfile } from 'pages/student/student-profile';
import Students from 'pages/student/students';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

export const Main = () => {

  const routes = createBrowserRouter([
    {
      path: '/',
      Component: Dashboard,
    },
    {
      path: '/students',
      element: <Students />,
      children: [
        {
          path: 'profile',
          element: <StudentProfile />,
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={routes} />
  )
}
