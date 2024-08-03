// $("#manage-permission").change(function () {
//   var value = $(this).val();

//   if (value === "") {
//     $(".hidden").show();
//   } else {
//     $(".hidden").hide();
//     $("#" + value + "-list").show();
//   }
// });

function AllSelect(parent) {
  $(parent).siblings("div").find(".child").prop("checked", parent.checked);
}

function checkParent() {
  $(".child").each(function () {
    var parent = $(this).closest("div").siblings("input");
    var allChecked =
      $(this).siblings(".child:checked").length === //current HTML element will be selected
      $(this).siblings(".child").length;
    parent.prop("checked", allChecked);
  });
}

function Hide() {
  $(".hidden").toggle(1000);
}
