
export function scaleBytesToRange(bytes, maxBytes = 10000000000) {
  if (bytes < 0) return 1; // Захист від від'ємних значень
  if (bytes > maxBytes) return 100; // Захист від значень, що перевищують maxBytes
  return Math.round((bytes / maxBytes) * 99) + 1;
}
