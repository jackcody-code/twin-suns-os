function formatCurrency(amount, { locale, currency }) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency
  }).format(amount);
}

module.exports = { formatCurrency };
