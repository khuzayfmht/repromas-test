import AppLayout from 'layout/appLayout';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <>
      <AppLayout>
        <Outlet />
        <div></div>
      </AppLayout>
    </>
  );
};

export default Dashboard;
