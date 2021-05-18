# trigram-similarity

The trigram-similarity module provides functions and operators for determining the similarity of alphanumeric text based on trigram matching.
This is the exact implementation of Postgres [pg_trgm](https://www.postgresql.org/docs/13/pgtrgm.html) and returns a number that indicates how 
similar the two arguments are. The range of the result is zero (indicating that the two strings are completely dissimilar) to one (indicating 
that the two strings are identical). 

If you want to learn more about the concept see [this post](https://stackoverflow.com/a/43158586/1410482).

## Installation

```
npm i trigram-similarity
```

## Usage

```javascript
import trigramSimilarity from 'trigram-similarity';
```

```javascript
const similarity = trigramSimilarity('Chateau blanc', 'chateau cheval blanc');
// 0.7368421052631579
```

