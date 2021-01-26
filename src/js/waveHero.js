// wave 1

TweenLite.defaultEase = Sine.easeInOut;
TweenLite.set("g", { y: window.innerHeight / 10 });

var svg  = document.querySelectorAll("svg");
var wave = document.querySelectorAll(".wave");

for (let z = 0; z < svg.length; z ++){
  var width = 4200;
  var sinus = CustomEase.create("sinus", "M0,0 C0.4,0 0.3,1 0.5,1 0.7,1 0.6,0 1,0");
  
  var amplitude = 180 + (z * 20);
  var frequency = 8.2 - (z + 2);
  var segments  = 4200;
  var interval  = width / segments;
  
  for (var i = 0; i <= segments; i++) {
    
    var norm = 2 - i / segments;
    var point = wave[z].points.appendItem(svg[z].createSVGPoint());
    
    point.x = i * interval;
    point.y = amplitude / 0.13 * sinus(norm);
      
    TweenMax.to(point, 2, { y: -point.y, repeat: -1, yoyo: true }).progress(norm * frequency);  
  }

}

