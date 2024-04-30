
function validateForm() {
  let x = document.forms["myForm"]["name"].value;
  if (x == "" || x==null) {
    alert("Name must be filled out");
    return false;
  }
  let y = document.forms["myForm"]["pass"].value;
  if (y == "" || y==null) {
    alert("Name must be filled out");
    return false;
  }
}

function changeStyle() {
    var currentStyle = document.getElementById('stylesheet').getAttribute('href');
    if (currentStyle === 'style-login.css') {
        document.getElementById('stylesheet').setAttribute('href', 'style1-login.css');
    } else {
        document.getElementById('stylesheet').setAttribute('href', 'style-login.css');
    }
}

function change() {
  var current = document.getElementById('style').getAttribute('href');
  if (current === 'style2-reg.css') {
      document.getElementById('style').setAttribute('href', 'style3-reg.css');
  } else {
      document.getElementById('style').setAttribute('href', 'style2-reg.css');
  }
}

