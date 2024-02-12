import React, { FC } from "react";
import Link from "next/link";
import { mergeClasses } from "@/utils";

interface NavItemProps {
  className?: string;
  label: string;
  to: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavItem: FC<NavItemProps> = ({ label, to, className, setIsOpen }) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const targetElement = document.getElementById(to.substring(1));

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
    if (setIsOpen) {
      setIsOpen(false);
    }
  };

  return (
    <li>
      <Link
        href={`${to}`}
        passHref
        onClick={handleClick}
        className={mergeClasses(
          "text-white 2xl:text-12 text-10 uppercase mr-8 hover:border-sky-300 hover:border-b-[1px]",
          `${className}`,
        )}
      >
        {label}
      </Link>
    </li>
  );
};

export default NavItem;
