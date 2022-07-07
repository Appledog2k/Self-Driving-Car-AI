const canvas = document.getElementById("myCanvas");
canvas.width = 200;

const graph = canvas.getContext("2d");
const car = new Car(100,100,30,50);
car.draw(graph);

animation();

function animation() {
    car.update();
    canvas.height = window.innerHeight;
    car.draw(graph);
    requestAnimationFrame(animation);
}