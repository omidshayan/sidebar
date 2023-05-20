const sidebar = document.querySelector('.sidebar');
const hamber = document.querySelector('.hamburger-icon');
const showOverview = document.querySelector('#overview')

hamber.addEventListener('click', function () {
    sidebar.classList.toggle('active')
    showOverview.classList.toggle('active')
})
showOverview.addEventListener('click', function () {
    sidebar.classList.toggle('active')
    showOverview.classList.toggle('active')
})


const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})


// header scroll
window.onscroll = function(){
  const scrollTopFix = document.documentElement.scrollTop;
      if(scrollTopFix > 30){
          document.querySelector('.header').classList.add('fixed');
      }else{
          document.querySelector('.header').classList.remove('fixed');
      }
}
