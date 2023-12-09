export const formatMoney = (price) => {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "VND",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
    .format(price)
    // Remove the currency symbol (₫) from the formatted string
    .replace("₫", "");
  return formattedPrice;
};
