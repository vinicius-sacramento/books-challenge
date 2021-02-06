const breakpoints = {
  phone: 320,
  desktop: 768,
};

export const screen = Object.entries(breakpoints).reduce(
  (accumulator, [breakpoint, size]) => ({
    ...accumulator,
    [breakpoint]: `(min-width: ${size}px)`,
  }),
  {}
);
