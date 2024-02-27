export const spaceBetweenText = (text: string) => {
  const splittedText = text.split("(space)");

  if (!splittedText.length) return text;

  return splittedText.map((paragraph, i) => (
    <span key={i} className="block mt-6">
      {paragraph}
    </span>
  ));
};

/**export const generateRandomId = () =>
  String(Math.random() * Number.POSITIVE_INFINITY);
 */
