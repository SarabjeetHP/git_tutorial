$(document).ready(function () {
  $("#form").submit(function (event) {
    event.preventDefault();

    if ($("#email").val() === "") {
      alert("Email is required");
      return;
    }

    if ($("#Password").val() !== $("#CP").val()) {
      alert("error");
      return;
    }

    if (!$("#checkbox").is(":checked")) {
      alert("You must agree to the terms and conditions.");
      return;
    }

    alert("Success");
    form.reset();

    console.log("Form Submitted Successfully");
  });
});
