import React, { ReactNode } from 'react';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Copyright from './components/Copyright';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import { ThemeProvider } from 'next-themes'

type Props = {
  children: ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 light:bg-white">
      <Navbar />
      <Menu />
      <ThemeProvider attribute="class">
                {children}
        <ThemeToggle />
        </ThemeProvider>
        <Footer />
      <Copyright />
    </div>
  );
};

export default DashboardLayout;