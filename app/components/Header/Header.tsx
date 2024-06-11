"use client";
import React, { useEffect, useState } from "react";
// Next
import dynamic from "next/dynamic";
// Icons
import { RxHamburgerMenu } from "react-icons/rx";
// Components
const Logo = dynamic(() => import("@/app/components/ui/Logo"));
const Button = dynamic(() => import("@/app/components/ui/Button"));
const NavLinks = dynamic(() => import("@/app/components/NavLinks"));
const SidebarLayout = dynamic(() => import("@/app/components/Sidebars"));
const MainSidebar = dynamic(
  () => import("@/app/components/Sidebars/MainSidebar")
);
// Interface
interface HeaderProps {
  className?: string;
}

const Header = ({ className = "" }: HeaderProps) => {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function onScroll() {
    setIsSticky(window.scrollY > 180);
  }

  return (
    <>
      <header
        className={` z-[100] w-full py-2 top-0 border-b-[1px] border-b-tp-border-3 ${
          isSticky ? "fixed bg-white shadow-sm stickyAnimation" : "absolute"
        } ${className}`}
      >
        {/** Header */}
        <div className="container mx-auto flex items-center justify-between">
          {/** Logo */}
          <Logo />
          {/** Nav Links */}
          <NavLinks
            direction="row"
            className="hidden lg:flex flex-1 justify-center"
          />
          {/** Burger btn */}
          <Button
            onClick={() => {
              setOpenSidebar(true);
            }}
            text=""
            className="!p-2 md:!p-4"
            titleProp="Menu"
          >
            <RxHamburgerMenu className="text-white text-[23px] md:text-[27px]" />
          </Button>
        </div>
      </header>
      {/** Sidebar */}
      <SidebarLayout isOpen={openSidebar} onClose={() => setOpenSidebar(false)}>
        <MainSidebar />
      </SidebarLayout>
    </>
  );
};

export default Header;
