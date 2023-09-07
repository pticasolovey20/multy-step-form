export const classNames = (...classes) => classes.filter(Boolean).join(" ");

export const calculatePrice = (price, coeff, period) => (period ? `$${price * coeff}/yr` : `$${price * coeff}/mo`);
