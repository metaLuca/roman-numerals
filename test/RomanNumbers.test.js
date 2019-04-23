import convert from '../src/RomanNumbers';

describe('roman numbers', () => {
  it('of banana should return banana', () => {
    expect(convert('banana')).to.equal('banana');
  });
});
