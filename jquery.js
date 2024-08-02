$(document).ready(function () {
  $("#form").submit(function (event) {
    event.preventDefault();

    if ($("#email").val() === "") {
      alert("Email is required");
      return;
    }
    alert("Success");
    form.reset();

    console.log("Form Submitted Successfully");
  });
});
