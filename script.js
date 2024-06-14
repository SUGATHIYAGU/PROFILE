const header=document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY>0);
});


var aboutlabels=document.getElementsByClassName('abt-label');
var backCarddata=document.getElementsByClassName('back-card-data');

function opentab (cardId,tabname){
    var card=document.getElementById(cardId);
    var label=card.getElementsByClassName('abt-label');
    var data=card.getElementsByClassName('back-card-data');
    for(let labels of label){
        labels.classList.remove("active-label");
    }
    for(let datas of data){
        datas.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-label");
    document.getElementById( cardId+ '-'+tabname).classList.add("active-tab");

}

document.addEventListener("DOMContentLoaded",function(){
    var cards=document.getElementsByClassName('card');
    for(let card of cards){
        var label=card.getElementsByClassName('abt-label');
        var data=card.getElementsByClassName('back-card-data');
       if(label.length>0 && data.length>0){
        label[0].classList.add('active-label');
        data[0].classList.add('active-tab');

       }
    }
})



var menuLists=document.getElementById("menu-list");
function openlist(){
    menuLists.style.right="0";
}
function closelist(){
    menuLists.style.right="-200px";
}



  const scriptURL = 'https://script.google.com/macros/s/AKfycbxBSaTub_PPOvBrmiUsEPUXUNGU8SBhBatFPKy6igXe250hpyqXqVcOaSyOMsvZcc4kKw/exec'
  const form = document.forms['submit-to-google-sheet']
  const fmessage=document.getElementById("form-msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        fmessage.innerHTML="Sent Successfully!!!"
        setTimeout(function(){
            fmessage.innerHTML=""},5000)
            form.reset()
        })
     
      .catch(error => console.error('Error!', error.message))
  })

  ScrollReveal({
    duration: 2000,
    reset : true,
    distance:"80px",
  });

  ScrollReveal().reveal(".greet,.edu-heading,.about-heading,.contact-heading",{delay:1,origin:"left"});
  ScrollReveal().reveal(".home",{delay:500,origin:"top"});
  ScrollReveal().reveal(".edu-list1,.about-cnt,.about-content,.contact-row",{delay:500,origin:"bottom"});
  ScrollReveal().reveal(".social-contact i,.btn,.social-media",{delay:500,origin:"left",interval:100});
