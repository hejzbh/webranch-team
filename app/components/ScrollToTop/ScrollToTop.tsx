"use client";
import React, { useEffect, useMemo, useState } from "react";
// Next
import dynamic from "next/dynamic";
// Icons
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
// Components
const Button = dynamic(() => import("@/app/components/ui/Button"));
// Interface
interface ScrollToTopProps {
  className?: string;
}
const ScrollToTop = ({ className = "" }: ScrollToTopProps) => {
  const [displayBTN, setDisplayBTN] = useState<boolean>(false);
  const heroRect: any = useMemo(() => ({ current: null }), []);

  useEffect(() => {
    // 1) Prevent
    if (typeof window === undefined) return;
    // 2) Add Event Listenre
    window.addEventListener("scroll", onPageScroll);
    // 3) Remove event listener through useEffect cleanup function
    return () => window.removeEventListener("scroll", onPageScroll);
  }, []);

  function onPageScroll() {
    // 1)
    if (!heroRect.current) {
      heroRect.current = document
        ?.getElementById("hero")
        ?.getBoundingClientRect();
    }

    // 2)
    setDisplayBTN(window.scrollY > heroRect.current.height);
  }

  if (!displayBTN) return null;

  return (
    <Button
      titleProp="Scroll To Top"
      text=""
      reversedBG
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className={`!p-3 !rounded-md !shadow-md ${className}`}
    >
      <MdOutlineKeyboardDoubleArrowUp className="text-white drop-shadow-sm text-[30px]" />
    </Button>
  );
};

export default ScrollToTop;