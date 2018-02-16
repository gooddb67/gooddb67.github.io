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

function typer(str){
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



function type(){
  var str = "Hi, I'm Dave!";
  typer(str)
}

function type1(){
  var str = "I'm a full stack web developer based in Brooklyn.";
  typer(str)
}

function type2(){
 var str = "I like to use the stuff in the orange box."
 typer(str)
}

function type3(){
 var str = "Click the buttons above to see what I've made."
 typer(str)
}

function type4(){
 var str = "There's a bunch of ways to get a hold of me."
 typer(str)
}

function type5(){
 var str = "Just click one of those icons below."
 typer(str)
}

function type6(){
 var str = "Let's talk soon!"
 typer(str)
}

function type7(){
 var str = "--Dave"
 typer(str)
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
