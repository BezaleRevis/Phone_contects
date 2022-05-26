function closePopup(closeBtn, popup, btn) {
  closeBtn.addEventListener("click", (e) => {
    popup.style.visibility = "hidden";
    // btn.style.visibility = "hidden";
  });
}
export { closePopup };
