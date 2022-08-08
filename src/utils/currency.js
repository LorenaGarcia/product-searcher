function formatMoneyField(field) {
  const formatter = new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
  });

  return formatter.format(field);
}

export { formatMoneyField };
