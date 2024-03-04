interface NavigationData {
  label: string;
  to: string;
  active: string;
}

export const navigationData: NavigationData[] = [
  { label: "O NAS", to: "#hero", active: "hero" },
  { label: "OFERTA", to: "#offer", active: "offer" },
  { label: "REALIZACJE", to: "#product", active: "product" },
  { label: "KONTAKT", to: "#contact", active: "contact" },
];
