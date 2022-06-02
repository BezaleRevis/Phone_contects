"use strict";
// importing functions
import { deleteContect } from "./functions/deleteContect.js"; // importing delete contect
import { showInfo } from "./functions/info.js"; // importing func the info contect
import { updateContect } from "./functions/editContect.js";
import { onClickVisible } from "./functions/visibleHidden.js";
import { searchPecificUser } from "./functions/searchPecificUser.js";
import { closePopup } from "./functions/closePopup.js"; // importing func for close popup

let details = document.getElementById("details"); // details where i'm going to enter all phone contacts
let table = document.createElement("table"); // creating table
table.className = "table"; // giving it a class name for(style..other...)
details.appendChild(table); // inside the div of details im entering the table

let divImageName;
let divEditInfo = document.createElement("div");
let spanInfo = document.createElement("span"); // creating element for info botton
let spanEdit = document.createElement("span"); // creating element for edit botton
let spanDelete = document.createElement("span"); // creating element for delete botton
const popupInfo = document.getElementById("popup-info");

// gen the inputs varivles for edit contect
let gender = document.querySelector(".update-select");
let input_name = document.getElementById("input-name");
let pNumber = document.getElementById("phone");
let input_address = document.querySelector("#address");
let input_email = document.getElementById("email");

const popupAddDiv = document.getElementById("popup"); // get the div popup
const btnClose = document.querySelector(".close"); // get the buttom close
const btnClosex = document.querySelector(".closex"); // get the buttom close ('x')
// sudmit bottins
let btnSudmitEdit = document.getElementById("sudmit-edit"); // sudmit btn to confirm the add contact
closePopup(btnClose, popupAddDiv); // handling btn close edit with text "close"
closePopup(btnClosex, popupAddDiv); // handling btn close edit popup with tag "x"
closePopup(btnClose, btnSudmitEdit);
closePopup(btnClosex, btnSudmitEdit);
const successMessage = document.querySelector(".success-edit");
closePopup(btnClose, successMessage);
closePopup(btnClosex, successMessage);

const btnCloseInfo = document.querySelector(".close-info"); // get the buttom close
const btnClosexInfo = document.querySelector(".closex-info"); // get the buttom close ('x')
closePopup(btnCloseInfo, popupInfo); // handling btn close info with text "close"
closePopup(btnClosexInfo, popupInfo); // handling btn close with tag "x"
try {
  const api = await axios
    .get("//ec2-18-234-170-231.compute-1.amazonaws.com:5000/phone_contects")
    // .then((data) => {
    //   console.log(data);
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
    console.log(api.data);
} catch (err) {
  console.log(err);
}

try {
  fetch("//ec2-18-234-170-231.compute-1.amazonaws.com:5000/phone_contects", {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.ok) {
        console.log(res);
        return res.json();
      } else {
        console.log(res);
        listEmpty.innerHTML = `<em>Sorry somthing went wrong we could't fetch the data...</em>`;
        throw Error("Erroo we couldn't fetch the data");
      }
    })
    .then((data) => {
      console.log(data);
      if (data === undefined) {
        listEmpty.innerHTML = `loading data please wait or reload page...`;
      } else if (data !== undefined && data.length > 0) {
        // list is not empty
        data.map(() => {
          // creating a table to print in html all phone contact
          let td = document.createElement("td");
          table.appendChild(td);
          td.className = "td";
          divImageName = document.createElement("div"); // div the enter the spans of image and name
          divImageName.className = "div_image_name";
          divEditInfo = document.createElement("div"); // div the enter the spans of edit and info
          divEditInfo.className = "div_edit_info";
          divEditInfo.id = "div_edit_info";
          td.appendChild(divImageName);
          td.appendChild(divEditInfo);
        });
        let divTD = document.querySelectorAll(".div_image_name");
        let divTDEdit = document.querySelectorAll(".div_edit_info");
        divTD.className = "divDt";
        data.forEach((element, i) => {
          let id = element._id;
          let spanP = document.createElement("span");
          spanInfo = document.createElement("span");
          spanEdit = document.createElement("span");
          spanDelete = document.createElement("span"); // creating a button delete for evry contact
          spanDelete.className = "deleteButton"; // class name for delete button
          spanEdit.className = "edit";
          spanInfo.className = "edit";
          spanP.className = "spanNane";
          divTD[i].innerHTML = ` <img src=${element.image}/>`;
          spanP.innerHTML = element.name;
          spanDelete.innerHTML = `<img src=${"https://img.icons8.com/ios-glyphs/24/000000/filled-trash.png"} alt=${"delete"}"/>`;
          spanEdit.innerHTML = `<img src="https://img.icons8.com/office/24/000000/edit-user-female.png" alt=${"edit"} />`;
          spanInfo.innerHTML = `<img src=${"https://img.icons8.com/material-outlined/24/000000/info.png"} alt=${"info"}"/>`;
          divTDEdit[i].appendChild(spanDelete);
          divTDEdit[i].appendChild(spanInfo);
          divTDEdit[i].appendChild(spanEdit);
          divTD[i].appendChild(spanP);
          onClickVisible(spanEdit, popupAddDiv); // call func on click edit to open popup info
          spanInfo.addEventListener("click", (e) => {
            popupInfo.style.visibility = "visible";
          });
          deleteContect(id, spanDelete); // call function to delete contect

          spanEdit.addEventListener("click", (e) => {
            // handeling onClick on the edit icon
            popupAddDiv.style.visibility = "visible";
            btnSudmitEdit.style.visibility = "visible";
            // show in input of edit the exist details
            input_address.value = element.address;
            input_name.value = element.name;
            input_email.value = element.email;
            pNumber.value = element.phoneNum;
            updateContect(
              gender,
              input_name,
              pNumber,
              input_address,
              input_email,
              id
            );
          }); // call func to update contect
          //taking the id from the input element search
          var search = document.getElementById("search");
          //taking all td from the table to know what td to show when user searching spesipifig user
          let allTd = document.querySelectorAll(".td");
          searchPecificUser(search, allTd); // call func handeling the serch if user loocking for a spesifig contact
          showInfo(element, spanInfo); // call func to show info spesifig user
        });
      } else {
        // if(the list is empty){im printing for the user a messege that the list is empty}
        listEmpty.innerHTML = `<div >
        <h2><em>list is empty be the first one to add a new contect</em></h2>
        <a
        class="icon-add-user"
         href="./html/singnUp.html">
          <button class="add" id="add">
            <img
              class="iconAdd"
              src="https://img.icons8.com/office/30/000000/add-user-group-woman-man.png"
            />
          </button>
        </a>
      </div>`;
      }
    })
    .catch((err) => {
      // case of error couldn't fetch the json data
      listEmpty.innerHTML = `<em>Sorry somthing went wrong we could't fetch the data...</em>`;
      console.log(err);
    });
} catch (err) {
  // case of error couldn't fetch the json data
  listEmpty.innerHTML = `<em>Sorry somthing went wrong we could't fetch the data...</em>`;
  console.log(err);
}
