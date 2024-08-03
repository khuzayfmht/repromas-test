import { FC, ReactNode } from 'react';
import './appLayout.css';

type AppLaypoutProps = {
  children?: ReactNode;
};

const AppLayout: FC<AppLaypoutProps> = ({ children }) => {
    // Business Logic
  return (
    <div className="main-container">
      <div className="side-bar">
        Menu
      </div>
      {/* Main Content: Header, Body and Footer */}
      <div className="main-content">
        <div>Header</div>
        <div>{children}</div>
        <div>footer</div>
      </div>

    </div>
  );
};

export default AppLayout;
