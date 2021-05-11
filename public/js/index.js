$("#item1").click(() => {
  $("#item1-div").addClass("hidden-items-click");
});

$("#item1-add").click(() => {
  $("#item1-div").removeClass("hidden-items-click");
});

$("#item2").click(() => {
  $("#item2-div").addClass("hidden-items-click");
});

$("#item2-add").click(() => {
  $("#item2-div").removeClass("hidden-items-click");
});

$("#item3").click(() => {
  $("#item3-div").addClass("hidden-items-click");
});

$("#item3-add").click(() => {
  $("#item3-div").removeClass("hidden-items-click");
});

$("#item4").click(() => {
  $("#item4-div").addClass("hidden-items-click");
});

$("#item4-add").click(() => {
  $("#item4-div").removeClass("hidden-items-click");
});

$("#item5").click(() => {
  $("#item5-div").addClass("hidden-items-click");
});

$("#item5-add").click(() => {
  $("#item5-div").removeClass("hidden-items-click");
});

$("#item6").click(() => {
  $("#item6-div").addClass("hidden-items-click");
});

$("#item6-add").click(() => {
  $("#item6-div").removeClass("hidden-items-click");
});

$("#item7").click(() => {
  $("#item7-div").addClass("hidden-items-click");
});

$("#item7-add").click(() => {
  $("#item7-div").removeClass("hidden-items-click");
});

$("#item8").click(() => {
  $("#item8-div").addClass("hidden-items-click");
});

$("#item8-add").click(() => {
  $("#item8-div").removeClass("hidden-items-click");
});

$("#formControlRange1").change(function() {
  $("#number-display1").text($(this).val());
});

$("#formControlRange2").change(function() {
  $("#number-display2").text($(this).val());
});

$("#formControlRange3").change(function() {
  $("#number-display3").text($(this).val());
});

$("#formControlRange4").change(function() {
  $("#number-display4").text($(this).val());
});

$("#formControlRange5").change(function() {
  $("#number-display5").text($(this).val());
});

$("#formControlRange6").change(function() {
  $("#number-display6").text($(this).val());
});

$("#formControlRange7").change(function() {
  $("#number-display7").text($(this).val());
});

$("#formControlRange8").change(function() {
  $("#number-display8").text($(this).val());
});

// $("#signup").click(() => {
//   console.log("hrllo");
//   // $.get("http://localhost:8080/signup", (data, status) => {
//   //   console.log(`${data}`);
//   // });
//   // const xhttp = new XMLHttpRequest();
//   // xhttp.open("POST", "http://localhost:8080/signup", true);
//   // xhttp.send("Hello");
//   const url = "http://localhost:8080/signup";
//   const data = {
//     name: "Abishek",
//     age: 21
//   };
//   $.post(url, data, (data, status) => {
//     console.log(`Data: ${data} Status: ${status}`);
//   });
// });
// $("#signup-submit").click(() => {
//   const fname = $("#fname").val();
//   const lname = $("#lname").val();
//   const uname = $("#uname").val();
//   const email = $("#email").val();
//   const password = $("#password").val();
//   const url = "http://localhost:8080/signup";
//   const data = {
//     fname,
//     lname,
//     uname,
//     email,
//     password
//   };
//   console.log(data);
//   $.post(url, data, (data, status) => {
//     console.log(`Data: ${data} Status: ${status}`);
//   });
// })