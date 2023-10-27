// Layout.js
import React from 'react';
import NavigationBar from './NavigationBar';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div>
      <NavigationBar />
      <div className="content">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
