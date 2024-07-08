function keyLong(event) {
    var count = 1;
    if (event.keyCode) {
      var length = document.getElementById("a");
      for (i = 0; i < length.value.length; i++) {
        count++;
      }
      document.getElementById(
        "display"
      ).innerHTML = `You Pressed <b>(${event.key})</b> ${count} times`;
    }
  }
  function abc(event) {
    document.getElementById("a").value = "";
  }
  
  document.getElementById("a").addEventListener("keydown", function () {
    keyLong(event);
  });