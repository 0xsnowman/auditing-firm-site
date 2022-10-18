export const fixedScrollBarLeftCalculate = (deviceWidth: number) => {
  if (deviceWidth > 1800) {
    return `calc(${(deviceWidth - 1350) / 2}px + 88px)`;
  } else if (deviceWidth > 1200) {
    return `calc(${(deviceWidth - 1150) / 2}px + 41px)`;
  } else if (deviceWidth > 900) {
    return `calc(${(deviceWidth - 860) / 2}px + 41px)`;
  } else if (deviceWidth > 464) {
    return 43 + 20;
  } else if (deviceWidth > 342) {
    return 43 + 20;
  }
  return 41;
};
