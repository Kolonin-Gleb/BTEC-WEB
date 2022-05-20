// Код для метели на сайте

// Функция, которая будет заускаться при нажатии на кнопку.
// Вызывает метель

function press()
{
    jQuery(document).ready(function($){

        $(document).snowFlurry({
            maxSize: 5,
            numberOfFlakes: 25,
            minSpeed: 10,
            maxSpeed: 15,
            color: '#fff',
            timeout: 0
        });
    });
}

