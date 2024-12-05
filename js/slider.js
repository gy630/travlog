const nextBtn = document.querySelector('.sec03 .right')
const prevBtn = document.querySelector('.sec03 .left')
const slides = document.querySelector('.sec03 .row_inner')
// const imgs = slides.querySelectorAll('img')   // NodeList( 배열처럼 사용하지만 단순한 묶음)

const imgs = Array.from(slides.querySelectorAll('img'))
console.log(imgs)   


nextBtn.addEventListener('click',function (e) {
  e.preventDefault();
  nextFunc()
})

prevBtn.addEventListener('click',function (e) {
  e.preventDefault();
  prevFunc()
})

function nextFunc(){
  //console.log('nextFunc 함수 실행!!!')
  // 현재  active가 있는 이미지가 무언지(인덱스넘버) 알아와야 됨
  // 배열.findIndex((아이템) =>{ 실행구 });

  let index = imgs.findIndex((img) => { 
    return img.classList.contains('active')
  });
  console.log('active 클라스가 있는 이미지의 인덱스 값은?', index)
  imgs[index].classList.remove('active');
  index++;  //index= index+1;
  if(index === imgs.length)  { index = 0 }
  imgs[index].classList.add('active');
}

function prevFunc(){
  //console.log('prevFunc 함수 실행!!!')
  let index = imgs.findIndex( img => img.classList.contains('active') );

  imgs[index].classList.remove('active');
  index--;
  if( index < 0) { index = imgs.length-1 } 
  imgs[index].classList.add('active');

}



//sec 04 swiper

var swiper = new Swiper(".sec04 .swiper", {
  slidesPerView: 1,
  spaceBetween: 20,

  breakpoints: {
    678: {
      slidesPerView: 'auto'
    }
  },

  grabCursor: true,
  loop: true,
});