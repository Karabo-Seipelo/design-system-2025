import content from "#/content.json";

const useContent = () => {
  const {
    navigation,
    pages: { home, features, pricing, about, contact },
  } = content;
  return { navigation, home, features, pricing, about, contact };
};

export default useContent;
