function echo<T>(arg: T): T {
  return arg
}

const result = echo('mmm');
const result2 = echo(9);

console.log('result: ', result);