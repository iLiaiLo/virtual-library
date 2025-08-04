const generateId = (() => {
  let currId = 16;

  return () => currId++;
})();

export default generateId;
