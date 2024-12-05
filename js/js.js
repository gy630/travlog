const $body = document.querySelector('body')
const mob_btn = document.querySelector('.mob_btn')


// 스크롤이 되면 헤더 배경색 들어감
window.addEventListener('scroll', ()=>{
  let scroll = window.scrollY;
  //console.log(scroll)

  if(scroll > 80){
    $body.classList.add('scrolling')
  } else {
    $body.classList.remove('scrolling')
  }
})

// 햄버거버튼을 클릭
mob_btn.addEventListener('click',(e)=>{
  e.preventDefault()
  $body.classList.toggle('mOpen')
})


// 각 섹션이 보일 때 애니메이션 적용

const secTextWrap = document.querySelectorAll('section .text_wrap')

// console.log(secTextWrap)

let io2 = new IntersectionObserver((entries)=>{
  entries.forEach(entry => {
    if(entry.isIntersecting){
      console.log(entry)
      entry.target.classList.add('ani')
    } else {
      entry.target.classList.remove('ani')
    }
  })
})

secTextWrap.forEach(tw => {
  io2.observe(tw)
})


const secImgWrap = document.querySelectorAll('.sec05 .img_wrap')
console.log(secImgWrap)

let io3 = new IntersectionObserver((entries2)=>{
  entries2.forEach(entry2 => {
    if(entry2.isIntersecting){
      entry2.target.classList.add('ani')
    } else {
      entry2.target.classList.remove('ani')
    }
  })
})
secImgWrap.forEach(iw => {
  io3.observe(iw)
})
