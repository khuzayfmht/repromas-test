import Dashboard from 'pages/dashboard';
import { StudentProfile } from 'pages/student/student-profile';
import Students from 'pages/student/students';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

const UserAuth = ({ component }: { component: React.ReactNode }) => {
  const isUserLoggin = true;
  return isUserLoggin ? component : <Navigate to="/login" />
}

const Login = () => {
  return <h1>User Login</h1>;
};

const Course = () => {
  return <h1>This is Courses page</h1>;
};

const Student = () => {
  return <h1>This is student page</h1>;
};

export const Main = () => {
  const routes = createBrowserRouter([
    {
      path: '/',
      Component: Dashboard,
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/course',
      element: <UserAuth component={<Course />} />
    },
    {
      path: '/student',
      element: <UserAuth component={<Student />} />
    },
    {
      path: '/students',
      element: <UserAuth component={<Students />} />,
      children: [
        {
          path: 'profile',
          element: <StudentProfile />,
        },
      ],
    },
  ]);

  return (
    // <RouterProvider router={routes} />
    // ### SPA S I N G L E - P A G E - A P L I C A T I O N ###/

    <RouterProvider router={routes} />

    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/home" element={<Home />} />
    //     <Route path="/course" Component={Course} />
    //     <Route path="/student" Component={Student} />
    //   </Routes>
    // </BrowserRouter>
  );
};
