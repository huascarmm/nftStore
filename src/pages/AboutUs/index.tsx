import React, { ReactNode } from 'react';
import Navbar from '@/components/ui/AboutUs/Navbar';
import Header from '@/components/ui/AboutUs/Header';
import Footer from '@/components/ui/AboutUs/Footer';

interface AboutProps {
  children?: ReactNode;
  // Define aquí tus props adicionales con sus tipos
  // ejemplo: title?: string;
}

const AboutUs = ({ children }: AboutProps) => {
  return (
    <div className="container-class">
      <Navbar />

      <Header />

      <Footer />
      {children}
    </div>
  );
};

export default AboutUs;