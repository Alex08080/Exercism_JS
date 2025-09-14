// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
  const res = 'NCC-';
  const minCeiled = Math.ceil(1000);
  const maxFloored = Math.floor(9999);
  return res+String(Math.floor(Math.random() * (maxFloored - minCeiled +1) + minCeiled));
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  const minCeiled = Math.ceil(41000);
  const maxFloored = Math.floor(41999);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  const clas = [ 'D', 'H', 'J', 'K', 'L', 'M', 'N', 'R', 'T', 'Y'];
  const minCeiled = Math.ceil(0);
  const maxFloored = Math.floor(9);
  return clas[Math.floor(Math.random() * (maxFloored - minCeiled+1) + minCeiled)];
  
}
