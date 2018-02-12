window.onload = start()

function start(){
  const navBox = document.querySelector('.nav-box');
  const btns = navBox.getElementsByClassName("project-btn");
  const projectsWrapper = document.querySelector('.projects-wrapper')
  const projects = projectsWrapper.getElementsByClassName("project")

  for (let i = 0; i < btns.length; i++){
    btns[i].addEventListener("click", function(){
      let currentBtn = document.getElementsByClassName("active-btn");
      currentBtn[0].className = currentBtn[0].className.replace(" active-btn", "");
      this.className += " active-btn"
    });

  }
}


document.getElementById('onboard-btn').addEventListener('click', function(){
  document.querySelector('.urlink').classList.remove('expand')
  document.querySelector('.stagefast').classList.remove('expand')
  document.querySelector('.onboard').classList.toggle('expand')
});

document.getElementById('urlink-btn').addEventListener('click', function(){
  document.querySelector('.onboard').classList.remove('expand')
  document.querySelector('.stagefast').classList.remove('expand')
  document.querySelector('.urlink').classList.toggle('expand')
});

document.getElementById('stagefast-btn').addEventListener('click', function(){
  document.querySelector('.urlink').classList.remove('expand')
  document.querySelector('.onboard').classList.remove('expand')
  document.querySelector('.stagefast').classList.toggle('expand')
});
