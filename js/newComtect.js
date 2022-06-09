const btnAdd = document.querySelector(".sudmit-btn"); // gett the buttom add contact
// varibles from form add contect to insert it to the phone contect
// sudmit form button
let btnSudmit = document.querySelector(".sudmit-btn");

btnSudmit.addEventListener("click", (e) => {
  const successMessage = document.querySelector(".success-edit");
  e.preventDefault();
  let isLoading = true;
  if(isLoading){
    if (successMessage.className !== "alert-success") {
      successMessage.className = "alert-success";
    }
    successMessage.style.visibility = "visible";
    successMessage.innerHTML =
      "please wait while we adding your contect...";
  }
  // varibles from form add contect to insert it to the phone contect
  let gender = document.querySelector(".select");
  let name = document.querySelector(".name");
  let number = document.querySelector(".phone");
  let address = document.querySelector(".address");
  let email = document.querySelector(".email");
  let description = document.querySelector(".textarea");
  let image = "";
  if (gender.value === "Female") {
    image = "https://img.icons8.com/office/80/000000/person-female.png";
  } else {
    image = "https://img.icons8.com/office/80/000000/person-male.png";
  }
  const data = {
    image: image,
    name: name.value,
    phoneNum: number.value,
    address: address.value,
    email: email.value,
    description: description.value,
  };

  try {

    const url = "https://server-phone-contect.herokuapp.com/phone_contects"
    fetch(url, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        response.json();
        const status = response.status;
        console.log(status);
        if (status === 200) {
          if (successMessage.className !== "alert-success") {
            successMessage.className = "alert-success";
          }
          successMessage.style.visibility = "visible";
          successMessage.innerHTML =
            "You have successfully added a new contact";
        } else {
          successMessage.className = "alert-danger";
          successMessage.style.visibility = "visible";
          successMessage.innerHTML =
            "for some reason we couldnt add this contect please try again later...";
        }
      })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
        if (successMessage.className !== "alert-danger") {
          successMessage.className = "alert-danger";
        }
        successMessage.style.visibility = "visible";
        successMessage.innerHTML =
          "for some reason we couldnt add this contect please try again later...";
      });
  } catch (err) {
    console.log(err);
    console.error("Error:", error);
    if (successMessage.className !== "alert-danger") {
      successMessage.className = "alert-danger";
    }
    successMessage.style.visibility = "visible";
    successMessage.innerHTML =
      "for some reason we couldnt add this contect please try again later...";
  }
});
