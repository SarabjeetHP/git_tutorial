$("#manage-permission").change(function () {
  var value = $(this).val();
  if (value === "") {
    $(".hidden").show();
  } else {
    $(".hidden").hide();
    $("#" + value + "-list").show();
  }
});

function toggleChildren(parent) {
  $(parent).siblings("div").find(".child").prop("checked", parent.checked);
}

function checkParent() {
  $(".child").each(function () {
    var parent = $(this).closest("div").siblings("input");
    var allChecked =
      $(this).siblings(".child:checked").length ===
      $(this).siblings(".child").length;
    parent.prop("checked", allChecked);
  });
}
