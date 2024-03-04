"use client";

import Image from "next/image";
import NavItem from "@/layout/Navigation/NavItem";
import { navigationData } from "@/layout/Navigation/navigationData";
import useSectionObserver from "@/hooks/useSectionObserver";
import { Transition } from "@headlessui/react";
import { useState } from "react";
import { mergeClasses } from "@/utils";
import Link from "next/link";

const MobileNavigation = () => {
  const genericHamburgerLine = `h-[1px] w-7 my-[5.5px] bg-white transition ease transform duration-300`;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="flex items-center">
        <button
          className="flex flex-col items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={mergeClasses(
              genericHamburgerLine,
              isOpen
                ? "rotate-45 translate-y-3 group-hover:opacity-100"
                : " group-hover:opacity-100",
            )}
          />
          <div
            className={mergeClasses(
              genericHamburgerLine,
              isOpen ? "opacity-0" : " group-hover:opacity-100",
            )}
          />
          <div
            className={mergeClasses(
              genericHamburgerLine,
              isOpen
                ? "-rotate-45 -translate-y-3  group-hover:opacity-100"
                : "group-hover:opacity-100",
            )}
          />
        </button>
      </div>
      <div className="absolute w-[200px] top-20 left-0 mt-2">
        <Transition
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
          show={isOpen}
        >
          <div className="xl:hidden">
            <ul className="flex flex-col items-start justify-center bg-black shadow-black shadow-xl rounded-br-xl px-3 py-8 gap-6">
              {navigationData.map(({ label, to }) => (
                <NavItem
                  key={label}
                  label={label}
                  setIsOpen={setIsOpen}
                  to={to}
                  className="text-11"
                />
              ))}
            </ul>
          </div>
        </Transition>
      </div>
    </div>
  );
};

const Navigation = () => {
  const sections = ["#hero", "#offer", "#product", "#contact"];
  const [isActive] = useSectionObserver(sections);
  return (
    <nav className="h-20 fixed w-full z-40">
      <div className="w-full flex justify-evenly items-center lg:px-16 px-4 relative">
        <ul className="hidden lg:flex gap-12 mr-8 uppercase mt-10">
          {navigationData.map(({ label, to, active }) => (
            <NavItem
              key={label}
              className={isActive(active)}
              label={label}
              to={to}
            />
          ))}
        </ul>
        <div className="lg:hidden">
          <MobileNavigation />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
