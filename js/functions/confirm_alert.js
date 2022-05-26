export const submit = (setLoginPopup,confirmAlert) => {
    setLoginPopup(true);
    confirmAlert({
      title: "Confirm to Logout",
      message: "Are you sure you want to logout?.",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            sessionStorage.removeItem("loginStatus");
            sessionStorage.removeItem("usernameActive");
            setLoginPopup(false);
          },
        },
        {
          label: "No",
          onClick: () => alert("Great"),
        },
      ],
    });
  };