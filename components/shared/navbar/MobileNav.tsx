'use client';
import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  Sheet
} from '@/components/ui/sheet';
import { MenuIcon } from 'lucide-react';

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <MenuIcon className="cursor-pointer md:hidden" />
      </SheetTrigger>
      <SheetContent side="left" className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>Are you sure absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
export default MobileNav;
