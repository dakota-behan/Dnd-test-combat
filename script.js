(async () => {
  let totalData;

  await fetch("./src/allDndData.json")
    .then((e) => e.json())
    .then((e) => (totalData = e));

  console.log(totalData);
})();
