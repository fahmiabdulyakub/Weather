export const getTemp = (temp: number) => {
  const tempString = temp.toString();
  const fixTemp = tempString.substring(0, 5) + '°C';
  return fixTemp;
};
