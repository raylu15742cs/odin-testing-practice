import {capitalize} from './script';
import {reverse} from './script';
import {calculator}from './script'
import {caesarCipher} from './script'
import {analyzearray} from './script'

test('capitalize', () => {
  expect(capitalize('alpha')).toBe('Alpha');
});

test('reverse', () => {
  expect(reverse('alpha')).toBe('ahpla');
});

test('add', () => {
  expect(calculator('add',2,2)).toBe(4)
})

test('subtract', () => {
  expect(calculator('subtract', 2, 2)).toBe(0);
});

test('multiply', () => {
  expect(calculator('multiply', 2, 2)).toBe(4);
});
test('divide', () => {
  expect(calculator('divide', 2, 2)).toBe(1);
});

test('ceaser', () => {
  expect(caesarCipher('attack at dawn', 5)).toBe('fyyfhp fy ifbs');
})

test('analyzearray' , () => {
  expect(analyzearray([1, 8, 3, 4, 2, 6])).toEqual({
  average: 4,
  min: 1,
  max: 8,
  length: 6
});
})