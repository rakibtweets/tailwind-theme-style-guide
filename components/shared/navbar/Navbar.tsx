'use client';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import MobileNav from './MobileNav';

import { components } from '@/constants';
import Theme from './Theme';

const Navbar = () => {
  return (
    <>
      <header className=" mx-auto flex h-12 max-w-5xl items-center justify-between p-6  ">
        <div>
          <p>Logo</p>
        </div>
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            shadcn/ui
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Beautifully designed components built with Radix UI
                            and Tailwind CSS.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <Link
                      className={navigationMenuTriggerStyle()}
                      href="/docs"
                      title="Introduction"
                    >
                      Re-usable components built using Radix UI and Tailwind
                      CSS.
                    </Link>
                    <Link
                      className={navigationMenuTriggerStyle()}
                      href="/docs/installation"
                      title="Installation"
                    >
                      How to install dependencies and structure your app.
                    </Link>
                    <Link
                      className={navigationMenuTriggerStyle()}
                      href="/docs/primitives/typography"
                      title="Typography"
                    >
                      Styles for headings, paragraphs, lists...etc
                    </Link>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {components.map((component) => (
                      <Link
                        className={navigationMenuTriggerStyle()}
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </Link>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Documentation
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
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
