$(document).ready(function () {
  $("#Click").click(function (event) {
    alert("Link clicked!");
    event.preventDefault(); // To prevent the default action of the anchor tag
  });

  $("#Hover").hover(
    function () {
      alert("Link hovered!");
    },
    function () {
      alert("Link un-hovered!");
    }
  );

  $("#Focus").focus(function () {
    alert("Link focused!");
  });

  $("#Click").onclick(function () {
    alert("Mouse over the link!");
  });

  $("#Mouse over").mouseover(function () {
    alert("Mouse out of the link!");
  });
});
