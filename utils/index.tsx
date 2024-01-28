export const mergeClasses = (...classes: string[]): string =>
  classes
    .filter(Boolean)
    .map((c) => (typeof c === "object" ? c : c))
    .join(" ");
