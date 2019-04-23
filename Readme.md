# Roman Numerals kata

<img src="http://kata-log.rocks/images/roman_numerals.jpg" width="300px" alt="cover"/>

kata from [kata-log.rocks](http://kata-log.rocks/roman-numerals-kata)

## Your Task
Write a method String **convert(int)** that takes a number and converts it to the according String representation.

## Examples
<code>
   1 ➔ I
   2 ➔ II
   3 ➔ III
   4 ➔ IV
   5 ➔ V
   9 ➔ IX
  21 ➔ XXI
  50 ➔ L
 100 ➔ C
 500 ➔ D
1000 ➔ M
</code>

## Hint
This kata lures a lot of people to implement features in the order of the numbers. But do not forget that it’s sometimes easier to start with a general case and add exceptions later.

# Mocha tests

## Installation

Go to the root directory (where the `package.json` is located) and run:

```bash
npm install
```

## Running tests

Run the tests once:

```bash
npm test
```

Run the test and re-run them once a file changes:

```bash
npm run test:watch
```

### What's included

* Support for ES-2015 and stage-0 using Babel presets
* [Sinon JS](http://sinonjs.org/) for all stub, spy and mocking needs
* Mocha to run tests
* [Assertions using Chai]((http://chaijs.com/api/bdd)), extended with the
  [`sinon-chai` plugin](https://github.com/domenic/sinon-chai).
  * The Expect style is used by default,
  you can change to use `Should` instead, in `test/test-setup.js`,
