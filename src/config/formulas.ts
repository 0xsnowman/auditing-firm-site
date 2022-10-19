export const fixedScrollBarLeftCalculate = (deviceWidth: number) => {
  if (deviceWidth > 2400) {
    return `calc(${(deviceWidth - 1800) / 2}px + 41px)`;
  } else if (deviceWidth > 1800) {
    return `calc(${(deviceWidth - 1450) / 2}px + 41px)`;
  } else if (deviceWidth > 1200) {
    return `calc(${(deviceWidth - 1150) / 2}px + 41px)`;
  } else if (deviceWidth > 900) {
    return `calc(${(deviceWidth - 860) / 2}px + 41px)`;
  } return 43 + 20;
};
