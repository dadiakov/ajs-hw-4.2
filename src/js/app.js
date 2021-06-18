export default function sortChars(chars) {
  return chars.sort((a, b) => b.health - a.health);
}
