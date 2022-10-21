export const fixedScrollBarLeftCalculate = (deviceWidth: number) => {
  // if (deviceWidth >= 3200) {
  //   return `calc(${(deviceWidth - 3160) / 2}px + 41px)`;
  // } else if (deviceWidth >= 3000) {
  //   return `calc(${(deviceWidth - 2960) / 2}px + 41px)`;
  // } else if (deviceWidth >= 2560) {
  //   return `calc(${(deviceWidth - 2500) / 2}px + 41px)`;
  // } else if (deviceWidth >= 2400) {
  //   return `calc(${(deviceWidth - 2340) / 2}px + 41px)`;
  // } else if (deviceWidth >= 1800) {
  //   return `calc(${(deviceWidth - 1720) / 2}px + 41px)`;
  // } else if (deviceWidth >= 1620) {
  //   return `calc(${(deviceWidth - 1540) / 2}px + 41px)`;
  // } else if (deviceWidth >= 1500) {
  //   return `calc(${(deviceWidth - 1440) / 2}px + 41px)`;
  // } else if (deviceWidth >= 1200) {
  //   return `calc(${(deviceWidth - 1150) / 2}px + 41px)`;
  /*} else*/ if (deviceWidth >= 464) {
    return 113;
  } return 43 + 20;
};
