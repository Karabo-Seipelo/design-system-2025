const isValidRegex = (pattern: unknown) => {
  try {
    new RegExp(pattern as string);
    return true;
  } catch {
    return false;
  }
};

export default isValidRegex;
