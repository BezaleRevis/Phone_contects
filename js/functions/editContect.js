import { closePopup } from "./closePopup.js";
function updateContect(gender, name, phoneNum, address, email, id) {
  let btnUpdateContect = document.getElementById("sudmit-edit"); // sudmit btn to confirm the edit contact
  const confirmDiv = document.querySelector(".div-confirm");
  const btnClose = document.querySelector(".close-x-confirm"); // get the buttom close
  let textConfirm = document.querySelector(".h2confirm"); //
  btnUpdateContect.addEventListener("click", () => {
    // handeling click on sudmit button editContact
    confirmDiv.style.visibility = "visible";
    closePopup(btnClose, confirmDiv);
    textConfirm.innerHTML = "Are you sure you want to edit this contect";
    console.log(id);
    let image = "";
    if (gender.value === "Female") {
      image = "https://img.icons8.com/office/80/000000/person-female.png";
    } else {
      image = "https://img.icons8.com/office/80/000000/person-male.png";
    }
    const data = {
      image: image,
      name: name.value,
      phoneNum: phoneNum.value,
      address: address.value,
      email: email.value,
      // description: description.value,
    };
    const btnConfirm = document.querySelector(".btn-confirm");
    const btnNotConfirm = document.querySelector(".btn-not-confirm");
    btnConfirm.addEventListener("click", () => {
      try {
        fetch(`http://localhost:4000/phone_contects/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => {
            response.json();
            const status = response.status;
            // console.log(response);
            console.log(status);
            if(status === 200){
              const successMessage = document.querySelector(".success-edit");
              successMessage.className = "alert-success";
              successMessage.style.visibility = "visible";
              successMessage.innerHTML = 
                "You have successfully edited this contact";
            }
          })
          .then((data) => {
            console.log("Success:", data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      } catch (err) {
        console.log(err);
      }
      confirmDiv.style.visibility = "hidden"; // close the alert after he confirmed to delete
    });
    closePopup(btnNotConfirm, confirmDiv);
  });
}
export { updateContect };
