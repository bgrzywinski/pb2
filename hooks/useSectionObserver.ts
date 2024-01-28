"use client";
import { useState, useEffect } from "react";

const useSectionObserver = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id.replace("-anchor", ""));
        }
      });
    };

    const options = {
      rootMargin: "10% 0px -50% 0px",
      threshold: 0.01,
    };

    sectionIds.forEach((section) => {
      const observer = new IntersectionObserver(callback, options);
      const element = document.getElementById(section);
      if (element) observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sectionIds]);

  const isActive = (section: string) => {
    return activeSection === section ? "custom-underline " : "";
  };

  return [isActive];
};

export default useSectionObserver;
