//When document loads
$(document).ready(function() {
  $("#mainForm").on("submit", function() {
  // this variable is true when the form is valid
  var formValid = true;

  // Store if name is valid or not
  var nameIsValid = $("#userName").prop("validity").valid;

  // if the name is valid
  if(nameIsValid) {
    // hide the error
    $("#emailErrorNoName").addClass("hidden");
  } else {
    // the form is invalid
    formValid = false;
    // show the error
    $("#emailErrorNoName").removeClass("hidden");
  }
  // if the form is valid, we allow the user to submit (return true)
  // if the form is invalid, we prevent submission (return false)
  return formValid;
});
});

//When document loads
$(document).ready(function() {
  $("#mainForm").on("submit", function() {
  // this variable is true when the form is valid
  var formValid = true;

  // Store if name is valid or not
  var emailIsValid = $("#userEmail").prop("validity").valid;

  // if the name is valid
  if(emailIsValid) {
    // hide the error
    $("#emailErrorNoEmail").addClass("hidden");
  } else {
    // the form is invalid
    formValid = false;
    // show the error
    $("#emailErrorNoEmail").removeClass("hidden");
  }
  // if the form is valid, we allow the user to submit (return true)
  // if the form is invalid, we prevent submission (return false)
  return formValid;
});
});

//When document loads
$(document).ready(function() {
  $("#mainForm").on("submit", function() {
  // this variable is true when the form is valid
  var formValid = true;

  // Store if name is valid or not
  var messageIsValid = $("#message").prop("validity").valid;

  // if the name is valid
  if(messageIsValid) {
    // hide the error
    $("#errorNoMessage").addClass("hidden");
  } else {
    // the form is invalid
    formValid = false;
    // show the error
    $("#errorNoMessage").removeClass("hidden");
  }
  // if the form is valid, we allow the user to submit (return true)
  // if the form is invalid, we prevent submission (return false)
  return formValid;
});
});
