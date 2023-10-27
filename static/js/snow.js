// Код для метели на сайте

let flakes_count = 25;
let isFlurry = true;

$(document).snowFlurry({
    maxSize: 5,
    numberOfFlakes: flakes_count,
    minSpeed: 10,
    maxSpeed: 15,
    color: '#fff',
    timeout: 0
});

// Включение / отключение метели
function press()
{
    if (isFlurry === false) // Включение метели
    {
        isFlurry = true;
        flakes_count = 25;
        console.log("isFlurry = " + isFlurry);
        console.log("flakes_count = " + flakes_count);

    }
    else if (isFlurry === true)
    {
        isFlurry = false;
        flakes_count = 0;
        console.log("isFlurry = " + isFlurry);
        console.log("flakes_count = " + flakes_count);
    }
};



