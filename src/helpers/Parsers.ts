/**
 * Returns the text from the first paragraph of an HTML string
 */
export function getFirstParagraphText(htmlString: string) {
  const regex = /<p>(.*?)<\/p>/;
  const match = regex.exec(htmlString);
  if (match) return match[1];
  return '';
}