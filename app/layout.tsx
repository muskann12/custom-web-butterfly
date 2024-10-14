import './globals.css';
import './style.css'; 

import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="layout">
        <Navbar />
        <main>{children}</main>

        
        <Footer />
      </body>
    </html>
  );
};

export default Layout;

