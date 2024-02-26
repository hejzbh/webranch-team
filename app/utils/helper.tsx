export const spaceBetweenText = (text: string) => {
  const splittedText = text.split("(space)");

  if (!splittedText.length) return text;

  return splittedText.map((paragraph, i) => (
    <span key={i} className="block mt-6">
      {paragraph}
    </span>
  ));
};
