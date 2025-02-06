
    // $(document).ready(function () {
    //   $('.select2').select2();
    // });

    // const tabs = document.querySelectorAll('.tab');
    // const contents = document.querySelectorAll('.tab-content');

    // tabs.forEach(tab => {
    //   tab.addEventListener('click', () => {
    //     tabs.forEach(t => t.classList.remove('active'));
    //     contents.forEach(c => c.classList.remove('active'));

    //     tab.classList.add('active');
    //     document.getElementById(`tab-${tab.dataset.tab}`).classList.add('active');
    //   });
    // });

    // document.addEventListener("DOMContentLoaded", function () {
    //   const dateInput = document.getElementById("date");
    //   const today = new Date().toISOString().split("T")[0];
    //   dateInput.min = today;

    //   const swapButton = document.getElementById("swap-addresses-1");
    //   const fromAddress = document.getElementById("from-address-1");
    //   const toAddress = document.getElementById("to-address-1");

    //   swapButton.addEventListener("click", function () {
    //     const temp = fromAddress.value;
    //     fromAddress.value = toAddress.value;
    //     toAddress.value = temp;
    //     $(`#from-address-1`).trigger('change');
    //     $(`#to-address-1`).trigger('change');
    //   });
    // });
 
 // kll
 $('.owl-carousel').owlCarousel({
  loop:true,
  margin:18,
  nav:true,
  autoplay:true,
  autoplayTimeout:6000,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
  }
})