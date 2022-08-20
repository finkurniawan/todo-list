export const calculate = (numbers: number[], callback: jest.Mock<any, any>) => {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  callback(total);
};

test('test calculate', () => {
  const callback = jest.fn();

  calculate([10, 10, 10], callback);
  calculate([10, 10, 10, 10, 10], callback);

  console.log(callback.mock.calls);
  expect(callback.mock.calls.length).toBe(2);
  expect(callback.mock.calls[0][0]).toBe(30);
  expect(callback.mock.calls[1][0]).toBe(50);
});
