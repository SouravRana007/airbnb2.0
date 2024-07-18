import React from "react";

function Validation() {
  let error = {};
  if (!FormData.name.trim()) {
    errors.name = "Name is required";
  }
  if (!FormData.email) {
    error.email = "e-mail is required";
  } else if (!!/[^\s@]+@[^\s@]+\.[^\s@]+/.test(FormData.email)) {
    error.email = "E-mail is invalid";
  }
  if (!FormData.password) {
    error.FormData = "Password is required";
  } else if (FormData.password.length < 5) {
    error.password = "Minimum five character required";
  }
  return error;
}

export default Validation;
