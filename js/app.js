const table = document.querySelector("tbody");

//implementing jquery here..
$("#johny-div").hover(
  () => {
    $("#johny").addClass("biggerjohny");
  },
  () => {
    $("#johny").removeClass("biggerjohny");
  }
);
//for the button
$("#johny-btn").on("click", () => {
  // johnyPara.innerText = "johny is a cartoon character!";
  $("#johny-p").text("johny was a good kid");
  setTimeout(() => {
    $("#johny-p").text("johny bravo");
  }, 1500);
});
//
$("#submit-btn").on("click", (e) => {
  const firstName = $("#first-name").val();
  const lastName = $("#last-name").val();
  e.preventDefault();
  console.log(firstName, lastName);
  let firstname = document.createElement("td");
  firstname.innerText = firstName;
  let lastname = document.createElement("td");
  lastname.innerText = lastName;
  let point = document.createElement("td");
  point.innerText = `${Math.floor(Math.random() * 50)}`;
  let row = document.createElement("tr");
  row.appendChild(firstname);
  row.appendChild(lastname);
  row.appendChild(point);
  table.appendChild(row);
  $("#first-name").val("");
  $("#last-name").val("");
});
