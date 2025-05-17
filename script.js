document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Message sent! I’ll get back to you soon.");
    this.reset();
  });
  