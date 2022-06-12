export const showInfo = function (element, spanInfo) {
  const imgInfo = document.getElementById("img-info");
  const nameInfo = document.getElementById("name-info");
  const numberInfo = document.getElementById("number-info");
  const addressInfo = document.getElementById("address-info");
  const emailInfo = document.getElementById("email-info");

  imgInfo.innerHTML = ` <img src=${element.image}/>`;
  nameInfo.innerHTML = `<em> name:${element.name} </em>`;
  numberInfo.innerHTML = `<em>phone number:${element.phoneNum} </em>`;
  addressInfo.innerHTML = `<em> address:${element.address} </em>`;
  emailInfo.innerHTML = `<em> email:${element.email} </em>`;
};
