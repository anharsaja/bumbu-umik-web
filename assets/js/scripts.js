$(document).ready(function () {
  
  // Active link
  function setActiveLink() {
    var currentHash = window.location.hash;
    $(".navbar-nav a").removeClass("active");
    $('.navbar-nav a[href="' + currentHash + '"]').addClass("active");
  }

  setActiveLink();
  $(window).on("hashchange", setActiveLink);

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Initialize AOS and smooth config
  AOS.init({
    duration: 1200,
    once: true,
  });

  // Typing Effects
  var text = "Tentang Produk";
  var index = 0;

  function typeEffect() {
    var interval = setInterval(function () {
      $("#about-title").text($("#about-title").text() + text[index]);
      index++;
      if (index === text.length) {
        clearInterval(interval);
      }
    }, 100);
  }

  typeEffect();

  document.getElementById("belanja-sekarang").addEventListener("click", function (event) {

    event.preventDefault();

    Swal.fire({
      title: "Konfirmasi",
      text: "Anda akan diarahkan ke halaman baru. Lanjutkan?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Ya, Lanjutkan",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        window.open(
          "https://shopee.co.id/Bumbu-Umik-Bumbu-Instan-Bumbu-Dapur-Penyedap-Rasa-Makanan-65Gram-i.926276408.23419570179?sp_atk=2ac064fd-8f1b-4ef3-9e1c-7367c4fcf0a0&xptdk=2ac064fd-8f1b-4ef3-9e1c-7367c4fcf0a0",
          "_BLANK"
        );
      }
    });
  });
// Tanggal Otomatis
  var currentDateElements = document.querySelectorAll("#current-date");  
  currentDateElements.forEach(function (element) {
    var currentDate = new Date();
    var options = { year: "numeric", month: "long", day: "numeric" };
    element.textContent = currentDate.toLocaleDateString("id-ID", options);
  });

});


