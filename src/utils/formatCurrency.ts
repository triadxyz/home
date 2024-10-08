export const formatCurrency = (
  number: number | undefined | null = 0,
  noCurrency?: boolean
) => {
  if (number === undefined || number === null) return;

  if (Number.isNaN(number)) {
    return "$0.00";
  }

  let replaceNumber = number.toString().replace(",", "");

  if (replaceNumber.indexOf(",") !== -1)
    replaceNumber = replaceNumber.replace(",", ".");

  const finalValue = parseFloat(replaceNumber);

  if (finalValue < 1 && finalValue !== 0) {
    return finalValue.toLocaleString("en-us", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 6,
    });
  }

  const numNew = finalValue * 100;
  const formattedValue = Math.floor(numNew) / 100;

  const styleCurrency = formattedValue.toLocaleString("en-us", {
    style: "currency",
    currency: "USD",
  });

  if (!noCurrency) return styleCurrency;

  return styleCurrency.replace("$", "");
};

export const formatBigNumber = (number: bigint | number, decimals = 6) =>
  Number(number.toString()) / 10 ** decimals;

export const formatNumberToShortScale = (
  num?: number | null,
  decimals?: number,
  currency?: boolean
) => {
  if (!num) return "0";

  const value = formatBigNumber(num, decimals);

  if (value >= 1.0e9) {
    const numFormatted = (value / 1.0e9).toFixed(2);
    return `${numFormatted.replace(/\.00$/, "")}B`;
  }

  if (value >= 1.0e6) {
    const numFormatted = (value / 1.0e6).toFixed(2);
    return `${numFormatted.replace(/\.00$/, "")}M`;
  }

  if (value >= 1.0e3) {
    const numFormatted = (value / 1.0e3).toFixed(2);
    return `${numFormatted.replace(/\.00$/, "")}K`;
  }

  if (currency) {
    return formatCurrency(value);
  }

  return value;
};

export const formatUsdc = (value: number) => {
  return `${formatCurrency(value)?.replace("$", "")} USDC`;
};

export const formatValueOfBig = (value: number = 0) => {
  return value / 10 ** 6;
};

export const formatTRD = (value: number, bigNumber: boolean = true) => {
  if (bigNumber) {
    return formatCurrency(formatValueOfBig(value || 0))
      ?.toString()
      .replace("$", "")
      .replace(".00", "");
  }

  return formatCurrency(value || 0)
    ?.toString()
    .replace("$", "")
    .replace(".00", "");
};
