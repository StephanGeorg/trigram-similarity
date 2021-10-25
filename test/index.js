import { expect } from 'chai';

import trigramSimilarity from '../src/index';

describe('Successful returning similarities  ...', () => {
  it('Similarity between strings', (done) => {
    const similarity = trigramSimilarity('Chateau blanc', 'chateau cheval blanc');
    expect(similarity).to.be.equal(0.7368421052631579);
    done();
  });

  it('Similarity between strings"', (done) => {
    const similarity = trigramSimilarity('Glogauer str', 'Glogauer Stra');
    expect(similarity).to.be.equal(0.8);
    done();
  });

  it('Similarity between short strings"', (done) => {
    const similarity = trigramSimilarity('a1', 'a1');
    expect(similarity).to.be.equal(1);
    done();
  });

  it('Similarity w/ spaces', (done) => {
    const similarity = trigramSimilarity('Glogauer strasse', 'Glogauer Straße');
    expect(similarity).to.be.equal(0.65);
    done();
  });

  it('Similarity w/ multiple spaces', (done) => {
    const similarity = trigramSimilarity('Glogauer            strasse', 'Glogauer             Straße');
    expect(similarity).to.be.equal(0.65);
    done();
  });

  it('Similarity with umlauts', (done) => {
    const similarity = trigramSimilarity('Schönstra', 'Schoenstra');
    expect(similarity).to.be.equal(0.5);
    done();
  });

  it('Random similarity', (done) => {
    const similarity = trigramSimilarity('Október huszonharmadika utca', 'október 23 utca');
    expect(similarity).to.be.equal(0.40625);
    done();
  });

  it('Similarity of empty values', (done) => {
    const similarity = trigramSimilarity('', '');
    expect(similarity).to.be.equal(0);
    done();
  });

  it('Similarity of undefined values', (done) => {
    const similarity = trigramSimilarity(undefined, undefined);
    expect(similarity).to.be.equal(0);
    done();
  });

  it('Similarity of null values', (done) => {
    const similarity = trigramSimilarity(null, undefined);
    expect(similarity).to.be.equal(0);
    done();
  });

  it('Similarity of blank spaces', (done) => {
    const similarity = trigramSimilarity(' ', ' ');
    expect(similarity).to.be.equal(0);
    done();
  });
});
