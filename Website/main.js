function Over(x) {
   x.style.width="245px";
   x.style.height="245px";
}

function Out(x) {
   x.style.width="235px";
   x.style.height="235px";
}

function addUnderline(head) {
   head.style.textDecoration="underline";
}

function removeUnderline(head) {
   head.style.textDecoration="none";
}

function validateForm() {
   var a = document.forms["Form"]["name"].value;
   var b = document.forms["Form"]["mess"].value;
   if (a.length < 2) {
      alert("Слишком короткое имя!");
      return false;
   }
   if (b.length < 60) {
      alert("Слишком короткое сообщение!");
      return false;
   }
}