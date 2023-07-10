import { expect } from 'chai';
import { isSet } from '../src/index';

describe('isSet', () => {
  it('should return true if the value is set', () => {
    expect(isSet(5)).to.be.true;
    expect(isSet("hello")).to.be.true;
    expect(isSet({})).to.be.true;
    expect(isSet([])).to.be.true;
  });

  it('should return false if the value is not set', () => {
    expect(isSet(null)).to.be.false;
    expect(isSet(undefined)).to.be.false;
    expect(isSet("")).to.be.false;
    expect(isSet("null")).to.be.false;
    expect(isSet("undefined")).to.be.false;
    expect(isSet("[]")).to.be.false;
  });
});