export const searchPecificUser = function (search, allTd) {
  // func handeling the serch if user loocking for a spesifig contact
  search.addEventListener("keyup", () => {
    Array.prototype.forEach.call(allTd, function (el) {
      if (
        el.textContent
          .toLowerCase()
          .trim()
          .indexOf(search.value.toLowerCase()) > -1
      ) {
        el.style.display = ""; //dont do nothing just keep it on screen
      } else {
        el.style.display = "none"; // hide all of other td which user is not loocking for
      }
    });
  });
};
