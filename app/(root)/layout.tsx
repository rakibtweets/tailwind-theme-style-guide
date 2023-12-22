import Navbar from '@/components/shared/navbar/Navbar';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  team: React.ReactNode;
}
const Layout = ({ children, team }: LayoutProps) => {
  return (
    <main className="relative bg-background ">
      <Navbar />
      <div className="flex">
        {/* LeftSidebar */}
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full max-w-5xl">
            <div className="flex items-center justify-center gap-3">
              <div>{children}</div>
              <div>{team}</div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
export default Layout;
