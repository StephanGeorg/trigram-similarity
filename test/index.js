import { expect } from 'chai';

import trigramSimilarity from '../src/index';

describe('Succesful returning country codes  ...', () => {
  it('Similarity between strings', (done) => {
    const similarity = trigramSimilarity('Chateau blanc', 'chateau cheval blanc');
    expect(similarity).to.be.equal(0.7368421052631579);
    done();
  });

  it('Simlarity between strings")', (done) => {
    const similarity = trigramSimilarity('Glogauer str', 'Glogauer Stra');
    expect(similarity).to.be.equal(0.8);
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

  it('Similarity of empty strings', (done) => {
    const similarity = trigramSimilarity(' ', ' ');
    expect(similarity).to.be.equal(0);
    done();
  });
});
