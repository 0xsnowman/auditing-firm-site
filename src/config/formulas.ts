export const fixedScrollBarLeftCalculate = (deviceWidth: number) => {
  if (deviceWidth > 3200) {
    return `calc(${(deviceWidth - 3160) / 2}px + 41px)`;
  } else if (deviceWidth > 3000) {
    return `calc(${(deviceWidth - 2960) / 2}px + 41px)`;
  } else if (deviceWidth > 2560) {
    return `calc(${(deviceWidth - 2400) / 2}px + 41px)`;
  } else if (deviceWidth > 2400) {
    return `calc(${(deviceWidth - 2300) / 2}px + 41px)`;
  } else if (deviceWidth > 1800) {
    return `calc(${(deviceWidth - 1720) / 2}px + 41px)`;
  } else if (deviceWidth > 1620) {
    return `calc(${(deviceWidth - 1540) / 2}px + 78px)`;
  } else if (deviceWidth > 1500) {
    return `calc(${(deviceWidth - 1440) / 2}px + 41px)`;
  } else if (deviceWidth > 1200) {
    return `calc(${(deviceWidth - 1150) / 2}px + 41px)`;
  } else if (deviceWidth > 900) {
    return `calc(${(deviceWidth - 860) / 2}px + 41px)`;
  } return 43 + 20;
};
