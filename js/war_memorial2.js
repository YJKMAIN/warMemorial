/*메뉴*/
const mainmenu = document.querySelectorAll('.mainmenu > li');
const subBg = document.querySelector('#header .sub_bg');

mainmenu.forEach(function(item, index){
    item.addEventListener('mouseover',function(){
        item.querySelector('.submenu').style.display = "block";
        subBg.style.display = "block";
    });
    item.addEventListener('mouseout',function(){
        item.querySelector('.submenu').style.display = "none";
        subBg.style.display = "none";
    });
});


/*메인 슬라이드*/
const slideList = document.querySelector('.slideList');
const slideImg = document.querySelectorAll('.slideList li');
const slideCount = slideImg.length;
let currentIndex =0;

if(slideCount > 0 ){
    slideImg.forEach((item, index) => {
        item.style.left = `${index * 100}%`;
    });
}

function gotoSlide(idx){
    slideList.style.left = `${idx * -100}%`;
    currentIndex = idx;
}

setInterval(function(){
    let nextSlide = (currentIndex + 1) % slideCount;
    gotoSlide(nextSlide);
}, 3000);

/*전시prev, next 버튼*/
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const slideWrap = document.querySelector('.slide_wrap');
const slideWrapWidth = slideWrap.scrollWidth;

next.addEventListener('click',function(e){
    e.preventDefault();
    slideWrap.scrollTo({
        left:slideWrapWidth,
        behavior:'smooth'
    });
});

prev.addEventListener('click',function(e){
    e.preventDefault();
    slideWrap.scrollTo({
        left:0,
        behavior:'smooth'
    });
});

/*이달의 호국인물*/
const personWrap = document.querySelectorAll('.person_wrap');
personWrap.forEach((item)=>{
    item.addEventListener('mouseover',function(){
        item.classList.add('out');
        this.classList.remove('out');
        this.classList.add('over');
        this.querySelector('.great_txt').classList.add('active');
    });
    item.addEventListener('mouseout',function(){
        item.classList.remove('out');
        item.classList.remove('over');
        item.querySelector('.great_txt').classList.remove('active');
    });
});


/*태블릿*/
/*서브메뉴 토글바 */
const menuWrap = document.querySelector('.menu_wrap');
const toggle = document.querySelector('.toggle_bar');
const close = document.querySelector('.close_bar');

toggle.addEventListener('click',function(e){
    e.preventDefault();
    menuWrap.classList.add('active');
    toggle.style.display ="none";
    close.style.display ="block";
});

close.addEventListener('click',function(e){
    e.preventDefault();
    menuWrap.classList.remove('active');
    toggle.style.display ="block";
    close.style.display ="none";
});

/*모바일*/
/*전시 prev, next*/
function mediaResize() {
    
}

window.addEventListener('resize', mediaResize);

