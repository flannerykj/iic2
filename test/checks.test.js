import { expect } from 'chai'
import check, {checkFunctions} from '../src/utilities/checks';

const corn = {
  id: 1,
  text: "corn",
};
const cream = {
  id: 2,
  text: "milk",
}
const seafood = {
  id: 3,
  text: "clams",
}
const tomato = {
  id: 4,
  text: "tomato",
}
const potato = {
  id: 5,
  text: "potato"
}

const other = {
  id: 6,
  text: "something unimportant"
}

const blacklist = {
  id: 7,
  text: "plums"
}


describe('xorCreamTomato Check', () => {
  it('returns true if has tomato, no cream', () => {
    const list = [tomato, potato, other];
    expect(checkFunctions.xorCreamTomato(list).value).to.equal(true);
  });
  it('returns true if has cream, no tomato', () => {
    const list = [cream, potato, other];
    expect(checkFunctions.xorCreamTomato(list).value).to.equal(true);
  });
  it('returns false if has both tomato and cream', () => {
    const list = [tomato, cream,  potato, other];
    expect(checkFunctions.xorCreamTomato(list).value).to.equal(false);
  });

});

describe('orCornSeafood Check', () => {
  it('returns true if has corn, no seafood', () => {
    const list = [tomato, potato, corn, other];
    expect(checkFunctions.orCornSeafood(list).value).to.equal(true);
  });
  it('returns true if has seafood, no corn', () => {
    const list = [tomato, seafood, potato, other];
    expect(checkFunctions.orCornSeafood(list).value).to.equal(true);
  });
  it('returns true if has corn and seafood', () => {
    const list = [tomato, seafood, potato, corn, other];
    expect(checkFunctions.orCornSeafood(list).value).to.equal(true);
  });
  it('returns false if has neither seafood nor corn', () => {
    const list = [tomato, cream, potato, other];
    expect(checkFunctions.orCornSeafood(list).value).to.equal(false);
  });
});

describe('hasPotato Check', () => {
  it('returns true if has potato', () => {
    const list = [tomato, potato, corn, other];
    expect(checkFunctions.hasPotato(list).value).to.equal(true);
  });
  it('returns false if no potato', () => {
    const list = [tomato, seafood, corn, other];
    expect(checkFunctions.hasPotato(list).value).to.equal(false);
  });
});

describe('noBlacklisted Check', () => {
  it('returns true if has no blacklisted items', () => {
    const list = [tomato, potato, corn, other];
    expect(checkFunctions.noBlacklisted(list).value).to.equal(true);
  });
  it('returns false if has blacklisted item', () => {
    const list = [tomato, seafood, corn, blacklist, other];
    expect(checkFunctions.noBlacklisted(list).value).to.equal(false);
  });
});



