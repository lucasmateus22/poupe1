window.onscroll=function(){scrollFunction()};

function scrollFunction(){
    if(document.body.scroll > 200 || document.documentElement.scrollTop > 200){
        document.getElementById("btnScroll").style.display = "block";
    }else{
        document.getElementById("btnScroll").style.display = "none";
    }
}
function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
};
/**----------------------------------------------------------------------------- */
/**window.onscroll=function(){divSide()};
function divSide(){
    if(document.body.scroll > 600 || document.documentElement.scroll > 600){
        document.getElementById("divResponsive").style.animation
    }
} */
window.addEventListener('scroll', ()=>{
    document.body.style.setProperty('--scroll', window.pageXOffset / 
    (document.body.offsetHeight - window.innerHeight));
    }, false);
/**
 * -----------------------------------------------------------------------------------
 */
function showDiv(dv){
    var display = document.getElementById(dv).style.display;
    if(display == "none")
        document.getElementById(dv).style.display = 'block';
    else
        document.getElementById(dv).style.display = 'none';
};
/**
 * -----------------------------------------------------------------------------------
 */
function dlzDiv(skip){
    var display = document.getElementById(skip).style.display;
    if(display == "none")
        document.getElementById(skip).style.display = 'block';
    else
        document.getElementById(skip).style.display = 'none';
};