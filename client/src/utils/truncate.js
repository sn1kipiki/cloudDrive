export function truncate(text) {
  if (text.length <= 20) {
    return text;
  }
  return text.substring(0, 20) + '...';
}