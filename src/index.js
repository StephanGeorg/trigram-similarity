import { trigram } from '@drorgl/n-gram';

/**
 * Two blank spaces are added at the beginning, and one at the end,
 * and single spaces are replaced by double ones.
 * @param {string} input
 * @returns {string}
 */
const convertString = (input = '') => {
  if (!input || !input.trim()) return '';
  return `  ${input
    .trim()
    .replace(/\s+/g, ' ') // replace multiple spaces w/ single spaces
    .replace(/\s/g, '  ')} ` // replace single spaces w/ double spaces
    .toLowerCase();
};

/**
 * Sorting them, and taking out repetitions (via Set)
 * @param {string} input
 * @returns {string}
 */
const generateTrigram = (input = '') => [
  ...new Set( // De-duplication
    trigram(convertString(input)) // Generating trigrams w/ prepared input
      .filter((trigramItem) => !/^[\p{Letter}\p{Mark}0-9]\s\s$/giu.test(trigramItem)),
  ),
];

/**
 * Calculate trigram similarity between 2 strings
 * @param {string} input1
 * @param {string} input2
 * @returns {number}
 */
const trigramSimilarity = (input1 = '', input2 = '') => {
  if (input1 && input1.trim() && input1 === input2) return 1;

  const trigrams1 = generateTrigram(input1);
  const trigrams2 = generateTrigram(input2);

  // Total trigrams
  const total = [...new Set([...trigrams1, ...trigrams2])];
  // Trigrams both have in common
  const common = [];
  trigrams1.forEach((trigramItem) => {
    if (trigrams2.includes(trigramItem)) common.push(trigramItem);
  });

  return (total.length === 0)
    ? 0
    : common.length / total.length;
};

export default trigramSimilarity;
module.exports = trigramSimilarity;
