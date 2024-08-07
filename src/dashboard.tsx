import AppLayout from 'layout/appLayout';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <>
      <AppLayout>
        <Outlet />
      </AppLayout>
    </>
  );
};

export default Dashboard;
