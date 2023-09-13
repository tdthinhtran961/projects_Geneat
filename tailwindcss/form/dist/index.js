const form = document.getElementById("form");
console.log(form);

form.addEventListener("submit", (e) => {
  const formData = new FormData(form);
  e.preventDefault();
  let object = {};
  formData.forEach((value, key) => {
    object[key] = value;
  });
});

let json = JSON.stringify(object);

fetch("https://api.web3forms.com/submit", {
  method: "POST",
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
  body: json,
}).then(async (response) => {
  let json = await response.json();
  if (response.status == 200) {
    console.log(successful);
  } else {
    console.log(response);
  }
});
