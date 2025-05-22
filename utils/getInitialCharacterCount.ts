const getInitialCharacterCount = (value: unknown) => {
  if (typeof value === "string" || Array.isArray(value)) {
    return value.length;
  }
  return 0;
};

export default getInitialCharacterCount;
