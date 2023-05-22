import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer, Header } from '../components';

export const Root: FC = () => {
  return (
    <div className='mainWrapper'>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
