alert("Diese Website befindet sich noch in Bearbeitung. Bitte kommen Sie später nochmal wieder!\nWe are still building this page. Please return later.");

$('.navbar-collapse a').click(function(){
  setTimeout(function(){
    $(".navbar-collapse").collapse('hide');
  }, 500);
});

function blinkBox(boxString) {
  closeModal();
  let box = document.getElementById(boxString);
  box.classList.add("blink");
  setTimeout(function(){
    box.classList.remove("blink");
  }, 2000);
};

function closeModal() {
  let openModal = $(".modal.show");
  if (openModal.length > 0) {
    openModal.modal('hide');
  }
}
