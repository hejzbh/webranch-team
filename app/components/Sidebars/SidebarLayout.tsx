import React, { RefObject, useEffect, useRef, useState } from "react";
// Interface
interface SidebarLayoutProps {
  className?: string;
  children: React.ReactNode; // Sidebar
  isOpen?: boolean;
  onClose: () => void;
}
const SidebarLayout = ({
  className = "",
  isOpen = false,
  onClose = () => {},
}: SidebarLayoutProps) => {
  const blackOverlayRef = useRef<RefObject<HTMLDivElement> | any>();
  const [showChildren, setShowChildren] = useState<boolean>(false);

  useEffect(() => {
    setShowChildren(false);
    blackOverlayRef?.current?.addEventListener("animationend", (e: any) => {
      setShowChildren(true);
    });
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={`fixed top-0 left-0 w-full h-full z-[100] ${className}`}>
      {/** Black overlay behind */}
      <div
        ref={blackOverlayRef}
        onClick={() => {
          setShowChildren(false);
          setTimeout(() => {
            onClose();
          }, 400);
        }}
        className="sidebar-bg-behind absolute top-0 left-0 w-full h-full z-[-1] bg-black/50"
      ></div>
      {/** */}
      <div
        className={`${
          showChildren ? "translate-x-0" : "translate-x-[150%]"
        } transition-all duration-500 bg-slate-400 p-20 absolute top-0 right-0 h-full z-[2] ease-in-out delay-100`}
      ></div>
    </div>
  );
};

export default SidebarLayout;
