export const createID = () => {
  const id = [];
  for (let i = 0; id.length < 16; i++) {
    const number = Math.floor(Math.random() * 10);
    if (number !== 0) id.push(number);
  }
  return parseInt(id.join(''));
};
