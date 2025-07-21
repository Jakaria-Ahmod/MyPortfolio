import React from 'react';
import Header from '../Header';
import { Outlet } from 'react-router';
import Footer from '../Footer';

const RootLayout = () => {
  return (
    <div>
      <div>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default RootLayout;
