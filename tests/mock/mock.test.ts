// import { calculate, calculateAndReturn } from './index';

// test.only('test calculate', () => {
//   const callback = jest.fn();

//   calculate([10, 10, 10], callback);
//   calculate([10, 10, 10, 10, 10], callback);

//   expect(callback.mock.calls.length).toBe(2);
//   expect(callback.mock.calls[0][0]).toBe(30);
//   expect(callback.mock.calls[1][0]).toBe(50);
// });

// test.only('test mock return value', () => {
//   const callback = jest.fn();
//   callback.mockReturnValue(40);
//   callback.mockReturnValue(80);

//   expect(calculateAndReturn([10, 10], callback)).toBe(40);
//   expect(calculateAndReturn([10, 10, 10, 10, 10], callback)).toBe(80);

//   //   expect(callback.mock.results[0].value).toBe(40);
//   //   expect(callback.mock.results[1].value).toBe(80);
// });

// test.only('test mock implementation', () => {
//   const callback = jest.fn();
//   callback.mockImplementation((total) => {
//     return total * 2;
//   });

//   expect(calculateAndReturn([10, 10, 10], callback)).toBe(60);
//   expect(calculateAndReturn([10, 10, 10, 10, 10], callback)).toBe(100);

//   //   expect(callback.mock.results[0].value).toBe(60);
//   //   expect(callback.mock.results[1].value).toBe(100);
// });
