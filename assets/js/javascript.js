window.onscroll = function() {scrollFunction()};

var header = document.getElementById("header");

// loadpage();

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    header.style.height = "92px";
    header.style.backgroundColor = "rgba(29,19,19,0.9)";
  }
  else {
    header.style.height = "88px";
    header.style.backgroundColor = "transparent";
  }
}

//*** slide_next
var slideS1 = document.querySelector(".slide.s1");
var slideNexts = document.querySelectorAll(".slide_next");
var tranSliders = document.querySelectorAll(".tran_slide-item");
var animationTextFirst = document.querySelector(".enjoyYourHoliday > div:first-child");
var animationTextLast = document.querySelector(".enjoyYourHoliday > div:last-child");

function clickNextSlider(){
  slideS1.classList.toggle("active");
  // animationTextFirst.style.animation = "Div1 0.5s linear";
  // animationTextLast.style.animation = "Div2 0.5s linear";
  // setTimeout(function(){
  //   animationTextFirst.style.animation = "";
  //   animationTextLast.style.animation = "";
  // },500);
}

for (const nextSlider of slideNexts) {
  nextSlider.addEventListener('click', clickNextSlider);

}

for (const tranSlider of tranSliders) {
  tranSlider.addEventListener('click', clickNextSlider)
}

// $(document).ready(function(){
//   loadpage();
// });


// function loadpage(){
//   // document.querySelector("#load-page").classList.add('load-page');
//   // setTimeout(function(){
//   //   console.log('aaaaa',document.querySelector("#load-page"));
//   //   document.querySelector("#load-page").classList.remove('load-page');
//   // },5000);
// }
// var slideWrap = document.querySelector(".slide-wrap");
// var slideNexts = document.querySelectorAll(".slide_next");

// function clickNextSlider(){
//   slideWrap.classList.toggle("active");
// }

// for (const nextSlider of slideNexts) {
//   nextSlider.addEventListener('click', clickNextSlider)
// }

//*** Image smell-product

var tranImgItems = 
document.querySelectorAll(".content-procedure .content-procedure-tran_img-item");
var tranImgItem = 
document.querySelector(".content-procedure-tran_img-item");
var contentProcedureItem = 
document.querySelector(".content-procedure-container-img");

// function animationImgItem(){
//   tranImgItem.style.width = "30px";
// }


for (const nextSlider of tranImgItems) {
  nextSlider.addEventListener('click', function(){

    // Find Tag have class item-long
    var findItemLong = document.querySelector(".item-long");
    
    findItemLong.classList.remove("item-long");
    nextSlider.classList.add("item-long");

    // Tranfer slider
    var marginLeft = -100;
    for(let i=0; i<3; i++){
      if(nextSlider.className.indexOf(`item${i + 1}`) != -1){
        contentProcedureItem.style.marginLeft = `${marginLeft * i}%`;
      }
    }
  });
}

// feedback
var feedbackTranImgItems = 
document.querySelectorAll(".feedback .content-procedure-tran_img-item");
var  feedbackTranImgItem = 
document.querySelector(".feedback .content-procedure-tran_img-item");
// console.log(feedbackTranImgItems);
var feedbackcontentProcedureItem = 
document.querySelector("#section5-feedback .content-feedback");
// console.log(feedbackcontentProcedureItem.style.marginLeft);



for (const feedbackNextSlider of feedbackTranImgItems) {
  feedbackNextSlider.addEventListener('click', function(){
    // Find Tag have class item-long
    var feedbackFindItemLong = document.querySelector(".feedback_img-item.item-long");
    
    feedbackFindItemLong.classList.remove("item-long");
    feedbackNextSlider.classList.add("item-long");
    
    var feedbackMarginLeft = -100;
    for(let i=0; i<3; i++){
      if(feedbackNextSlider.className.indexOf(`feedback_item${i + 1}`) != -1){
        feedbackcontentProcedureItem.style.marginLeft = `${feedbackMarginLeft * i}%`;
        
      }
    }
  });
}

var typeProduct = document.querySelector('.type-product');
var typeProducts = document.querySelectorAll('.type-product');
// console.log(typeProducts.length);

var smellProduct = document.querySelector('.smell-product');
// var a = `-${typeProduct.offsetWidth}px`;

// console.log(typeProduct.offsetWidth);
document.querySelector('.product_next.right').onclick = function(){

  if(smellProduct.offsetLeft < - typeProduct.offsetWidth * (typeProducts.length - 5)){
    smellProduct.style.marginLeft = 0;
  }
  else{
    if(smellProduct.style.marginLeft === ''){
      smellProduct.style.marginLeft = 0;
    }
    smellProduct.style.marginLeft = (- parseInt(smellProduct.style.marginLeft.replace(/[^0-9]/g , '')) - typeProduct.offsetWidth) + 'px';
  }
  // console.log('XIn chào')
}

document.querySelector('.product_next.left').onclick = function(){
  if(smellProduct.offsetLeft > - typeProduct.offsetWidth){
    // if(smellProduct.style.marginLeft === ''){
    //   smellProduct.style.marginLeft = 0;
    // }
    smellProduct.style.marginLeft = - typeProduct.offsetWidth * (typeProducts.length - 4) + 'px';
    // console.log(smellProduct.style.marginLeft, typeProduct.offsetWidth );
  }
  else{
    
    smellProduct.style.marginLeft = (- parseInt(smellProduct.style.marginLeft.replace(/[^0-9]/g , '')) + typeProduct.offsetWidth) + 'px';
    // console.log(smellProduct.style.marginLeft);
  }
  // console.log('XIn chào')
}

// Giá sản phẩm không bị che
typeProducts.forEach(function(product){
  product.style.marginTop = document.querySelector('.cost-type-product').offsetHeight + 'px';
})

// Click box-left-header_menu xuất hiện nav trên tablet và mobile
var btnOpenNav = document.querySelector('.box-left-header_menu');
var Nav = document.querySelector('#nav');

btnOpenNav.onclick = function(){
  Nav.classList.toggle('active');
}





