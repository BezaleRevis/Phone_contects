const btnAdd = document.querySelector(".sudmit-btn"); // gett the buttom add contact
// console.log(btnAdd.classList);

// varibles from form add contect to insert it to the phone contect
// sudmit form button
let btnSudmit = document.querySelector(".sudmit-btn");

btnSudmit.addEventListener("click", (e) => {
  // varibles from form add contect to insert it to the phone contect
  let gender = document.querySelector(".select");
  let name = document.querySelector(".name");
  let number = document.querySelector(".phone");
  let address = document.querySelector(".address");
  let email = document.querySelector(".email");
  let description = document.querySelector(".textarea");
  let image = "";
  console.log(gender.value);
  if (gender.value === "Female") {
    image = "https://img.icons8.com/office/80/000000/person-female.png";
  } else {
    image = "https://img.icons8.com/office/80/000000/person-male.png";
  }
  console.log(image);
  const data = {
    image: image,
    name: name.value,
    phoneNum: number.value,
    address: address.value,
    email: email.value,
    description: description.value,
  };
    try {
        fetch('http://localhost:4000/phone_contects', {
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
          .then(response =>{
            response.json()
          } )
          .then(data => {
            console.log('Success:', data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
    } catch (err) {
      console.log(err);
    }
});
