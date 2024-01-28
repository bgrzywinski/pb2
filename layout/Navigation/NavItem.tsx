import React, { FC } from "react";
import { mergeClasses } from "@/utils";
import Link from "next/link";

const NavItem: FC<{
  className?: string;
  label: string;
  to: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}> = ({ label, to, className }) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const targetElement = document.getElementById(to.substring(1));

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <li>
      <Link
        href={`${to}`}
        passHref
        onClick={handleClick}
        className={mergeClasses(
          "text-white 2xl:text-14 text-10 uppercase mr-8 hover:border-sky-300 hover:border-b-[1px] py-[3px]",
          `${className}`,
        )}
      >
        {label}
      </Link>
    </li>
  );
};

export default NavItem;
