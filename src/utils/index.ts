export const formatNumberPtBr = (number: number) =>
  new Intl.NumberFormat("pt-BR").format(number);
