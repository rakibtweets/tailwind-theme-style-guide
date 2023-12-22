'use client';

import Link from 'next/link';
import MobileNav from './MobileNav';
import Theme from './Theme';

const navLinks = [
  {
    name: 'Home',
    href: '/',
    current: true
  },
  {
    name: 'About',
    href: '/about',
    current: false
  },
  {
    name: 'Contact',
    href: '/contact',
    current: false
  }
];

const Navbar = () => {
  return (
    <>
      <header className=" mx-auto flex h-12 max-w-5xl items-center justify-between p-6  ">
        <div>
          <p>Logo</p>
        </div>
        <div className="hidden md:block">
          <div className="flex gap-2">
            {navLinks.map((link) => (
              <Link
                className="hover:text-green-400"
                href={link.href}
                key={link.name}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div>
            <Theme />
          </div>

          <MobileNav />
        </div>
      </header>
    </>
  );
};
export default Navbar;
