function search(keyWord, elements) {
  const searchResult = elements.filter((element) => {
    return element.title.toLowerCase().includes(keyWord.toLowerCase());
  });
  return searchResult;
}
export { search };
