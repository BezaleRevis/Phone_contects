const visibleHidden = (e) => {
    // function to handle the popup div
    if (e.style.visibility === "hidden") {
      e.style.visibility = "visible";
    } else {
      e.style.visibility = "hidden";
    }
  };
  function onClickVisible(e, popup) {
    // func to to decide visiblity
    e.onclick = () => {
      visibleHidden(popup);
    };
  }
  export {visibleHidden,onClickVisible}