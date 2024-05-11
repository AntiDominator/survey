// script.js

// To access the stars
let stars = document.getElementsByClassName("star");
let output = document.getElementById("output");

// Funtion to update rating
function gfg(n) {
  remove();
  for (let i = 0; i < n; i++) {
    if (n == 1) cls = "one";
    else if (n == 2) cls = "two";
    else if (n == 3) cls = "three";
    else if (n == 4) cls = "four";
    else if (n == 5) cls = "five";
    stars[i].className = "star " + cls;
  }
  output.innerText = "Rating is: " + n + "/5";
}

// To remove the pre-applied styling
function remove() {
  let i = 0;
  while (i < 5) {
    stars[i].className = "star";
    i++;
  }
}
function download(filename, text) {
  var pom = document.createElement("a");
  pom.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  pom.setAttribute("download", filename);
  pom.style.display = "none";
  document.body.appendChild(pom);
  pom.click();
  document.body.removeChild(pom);
}

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  // Collect form data
  const firstname = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;
  let gender = "";
  if (document.getElementById("male").checked) {
    gender = "Male";
  } else if (document.getElementById("female").checked) {
    gender = "Female";
  }
  const types = [];
  if (document.getElementById("people1").checked) {
    types.push("Teacher");
  }
  if (document.getElementById("people2").checked) {
    types.push("Student");
  }
  if (document.getElementById("people3").checked) {
    types.push("Guardian");
  }
  if (document.getElementById("people4").checked) {
    types.push("Others");
  }
  const rating = document.getElementById("output").innerText.split(" ")[2];
  const description = document.getElementById("Description").value;

  // Prepare the data string
  const data = `Firstname: ${firstname}\nLastname: ${lastname}\nGender: ${gender}\nTypes: ${types.join(
    ", "
  )}\nRating: ${rating}\nDescription: ${description}`;

  // Download the data as a.txt file
  download("data.txt", data);
});
function download(filename, text) {
  var pom = document.createElement("a");
  pom.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  pom.setAttribute("download", filename);
  pom.style.display = "none";
  document.body.appendChild(pom);
  pom.click();
  document.body.removeChild(pom);
  // Navigate to a new URL to trigger the download and then redirect back to the current page
  window.location.href = window.location.href;
}
