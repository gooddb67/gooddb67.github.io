window.onload = trimSvgWhitespace()

function trimSvgWhitespace() {
  // get all SVG objects in the DOM
  var svgs = document.getElementsByTagName("svg");

  // go through each one and add a viewbox that ensures all children are visible
  for (var i=0, l=svgs.length; i<l; i++) {

    var svg = svgs[i],
        box = svg.getBBox(), // <- get the visual boundary required to view all children
        viewBox = [box.x, box.y, box.width, box.height].join(" ");
    // set viewable area based on value above
    svg.setAttribute("viewBox", viewBox);
  }

  function write (){
    const wrapper = document.querySelector('.projects-wrapper')
    const str = "Hi, I'm Dave. I am a full stack web developer and would love to help you make things. Please click on one of the project links above to see what I can do. "

    return str.split('').forEach((letter) => {
      return wrapper.innerHTML += letter
    })
  }

  write()

}


document.getElementById('onboard-btn').addEventListener('click', function(){
  console.log('ob')
  document.querySelector('.onboard').classList.toggle('expand')
  //document.querySelector('.project-notes').classList.toggle('expand')

});

document.getElementById('urlink-btn').addEventListener('click', function(){
  document.querySelector('.urlink').classList.toggle('expand')
});

document.getElementById('stagefast-btn').addEventListener('click', function(){
  document.querySelector('.stagefast').classList.toggle('expand')
});
