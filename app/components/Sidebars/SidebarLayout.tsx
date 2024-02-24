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
  children,
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
        } transition-all duration-500 absolute top-0 right-0  max-w-[80%] ssm:max-w-[50%] md:max-w-[40%] lg:max-w-[30%] xl:max-w-[25%] h-full z-[2] ease-in-out delay-100`}
      >
        {children && children}
      </div>
    </div>
  );
};

export default SidebarLayout;
