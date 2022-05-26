import { closePopup } from "./closePopup.js";
export const deleteContect = function (id, spanDelete) {
  try {
    const btnClose = document.querySelector(".close-x-confirm"); // get the buttom close
    let textConfirm = document.querySelector(".h2confirm");
    spanDelete.addEventListener("click", (e) => {
      textConfirm.innerHTML = "Are you sure you want to delete this contect";
      async function confirmToDelete() {
        const confirmDiv = document.querySelector(".div-confirm");
        confirmDiv.style.visibility = "visible";
        closePopup(btnClose, confirmDiv); // call func to close popup confirm with tag x
        const btnConfirm = document.querySelector(".btn-confirm");
        const btnNotConfirm = document.querySelector(".btn-not-confirm");
        btnConfirm.addEventListener("click", () => {
          try {
            const deleteData = async () => {
              const urlDelete = `http://localhost:4000/phone_contects/${id}`;
              const response = await fetch(urlDelete, {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                },
              });
              const data = await response.json();
              console.log(response.json());
              console.log(data);
            };
            deleteData();
          } catch (err) {
            console.error(err);
            console.log(err);
          }
          confirmDiv.style.visibility = "hidden"; // close the alert after he confirmed to delete
        });
        closePopup(btnNotConfirm, confirmDiv);
      }
      confirmToDelete();
    });
  } catch (err) {
    console.log(err);
  }
};
