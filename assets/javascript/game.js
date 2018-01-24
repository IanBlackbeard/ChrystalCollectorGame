var wins = 0;
var losses = 0;
var compNumber = 0;
var arrayRandom = [];
var total = 0;

function compNum(){
  var randomValue = Math.floor((Math.random() * 10) + 1);
  arrayRandom.push(randomValue);
};

for(i=0; i<5; i++) {
  compNum();
}

for(i=0; i<4; i++) {
   var current = document.getElementById(`crystal-${i}`);
   current.innerHTML = `${arrayRandom[i]}`;
   current.style.font-size = 0;

}

document.addEventListener('click', function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement;
    var text = target.textContent || text.innerText;  
    total += text;
    console.log(total);
}, false);

