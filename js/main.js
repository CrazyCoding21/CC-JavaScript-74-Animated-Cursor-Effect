document.addEventListener('mousemove', function(e){
    let body = document.querySelector('body');
    let flower = document.createElement('span');
    let x = e.offsetX;
    let y = e.offsetY;
    flower.style.left = x+'px';
    flower.style.top = y+'px';

    let size = Math.random() * 80;
    flower.style.width = 20 + size+'px';
    flower.style.height = 20 + size+'px';

    // let transformValue = Math.random() * 360;
    // flower.style.transform = 'rotate('+ transformValue + 'deg)';

    body.appendChild(flower);

    setTimeout(function(){
        flower.remove();
    }, 1000);
});