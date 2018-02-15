window.onload = start()

function start(){
  setTimeout(function(){
    type()
  }, 700)

  setTimeout(function(){
    type1()
  }, 1500)


  setTimeout(function(){
    type2()
  }, 4000)

  setTimeout(function(){
    type3()
  }, 6500)

  setTimeout(function(){
    type4()
  }, 9000)

  setTimeout(function(){
    type5()
  }, 11500)

  setTimeout(function(){
    type6()
  }, 13500)

  setTimeout(function(){
    type7()
  }, 15000)

}




function type(){
  var str = "Hi, I'm Dave!";
  var spans = '<span>' + str.split('').join('</span><span>') + '</br></br></span>';
  $(spans).hide().appendTo('.welcome-text').each(function (i) {
      $(this).delay(45 * i).css({
          display: 'inline',
          opacity: 0
      }).animate({
          opacity: 1
      }, 50);
  });
}

function type1(){
  var str = "I'm a full stack web developer based in Brooklyn.";


  var spans = '<span>' + str.split('').join('</span><span>') + '</br></br></span>';
  $(spans).hide().appendTo('.welcome-text').each(function (i) {
      $(this).delay(45 * i).css({
          display: 'inline',
          opacity: 0
      }).animate({
          opacity: 1
      }, 50);
  });
}

function type2(){
 var str2 = "I like to use the stuff in the orange box."
 var spans = '<span>' + str2.split('').join('</span><span>') + '</br></br></span>';
 $(spans).hide().appendTo('.welcome-text').each(function (i) {
     $(this).delay(45 * i).css({
         display: 'inline',
         opacity: 0
     }).animate({
         opacity: 1
     }, 50);
 });
}

function type3(){
 var str3 = "Click the buttons above to see what I've made."
 var spans = '<span>' + str3.split('').join('</span><span>') + '</br></br></span>';
 $(spans).hide().appendTo('.welcome-text').each(function (i) {
     $(this).delay(45 * i).css({
         display: 'inline',
         opacity: 0
     }).animate({
         opacity: 1
     }, 50);
 });
}

function type4(){
 var str4 = "There's a bunch of ways to get a hold of me."
 var spans = '<span>' + str4.split('').join('</span><span>') + '</br></br></span>';
 $(spans).hide().appendTo('.welcome-text').each(function (i) {
     $(this).delay(45 * i).css({
         display: 'inline',
         opacity: 0
     }).animate({
         opacity: 1
     }, 50);
 });
}

function type5(){
 var str5 = "Just click one of those icons below."
 var spans = '<span>' + str5.split('').join('</span><span>') + '</br></br></span>';
 $(spans).hide().appendTo('.welcome-text').each(function (i) {
     $(this).delay(45 * i).css({
         display: 'inline',
         opacity: 0
     }).animate({
         opacity: 1
     }, 50);
 });
}

function type6(){
 var str6 = "Let's talk soon!"
 var spans = '<span>' + str6.split('').join('</span><span>') + '</br></br></span>';
 $(spans).hide().appendTo('.welcome-text').each(function (i) {
     $(this).delay(45 * i).css({
         display: 'inline',
         opacity: 0
     }).animate({
         opacity: 1
     }, 50);
 });
}

function type7(){
 var str7 = "--Dave"
 var spans = '<span>' + str7.split('').join('</span><span>') + '</br></br></span>';
 $(spans).hide().appendTo('.welcome-text').each(function (i) {
     $(this).delay(45 * i).css({
         display: 'inline',
         opacity: 0
     }).animate({
         opacity: 1
     }, 100);
 });
}


document.getElementById('onboard-btn').addEventListener('click', function(){
  this.classList.add('active-btn')
  document.querySelector('#urlink-btn').classList.remove('active-btn')
  document.querySelector('#stagefast-btn').classList.remove('active-btn')
  document.querySelector('.urlink').classList.remove('expand')
  document.querySelector('.stagefast').classList.remove('expand')
  document.querySelector('.onboard').classList.toggle('expand')
});
//
document.getElementById('urlink-btn').addEventListener('click', function(){
  this.classList.add('active-btn')
  document.querySelector('#stagefast-btn').classList.remove('active-btn')
  document.querySelector('#onboard-btn').classList.remove('active-btn')
  document.querySelector('.onboard').classList.remove('expand')
  document.querySelector('.stagefast').classList.remove('expand')
  document.querySelector('.urlink').classList.toggle('expand')
});
//
document.getElementById('stagefast-btn').addEventListener('click', function(){
  this.classList.add('active-btn')
  document.querySelector('#urlink-btn').classList.remove('active-btn')
  document.querySelector('#onboard-btn').classList.remove('active-btn')
  document.querySelector('.urlink').classList.remove('expand')
  document.querySelector('.onboard').classList.remove('expand')
  document.querySelector('.stagefast').classList.toggle('expand')
});
