// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості:
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// function TagNote(name, description, arrayAtr) {
//     this.TagName = name;
//     this.TagDescription = description;
//     this.TagArrayAtr = arrayAtr;
// }
//
// let tagA = new TagNote('<a>', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.', [{
//     title: 'accesskey',
//     action: 'Активация ссылки с помощью комбинации клавиш'
// }, {title: 'download', action: 'Предлагает скачать указанный по ссылке файл'}]);
//
// let tagDiv = new TagNote('<div>', 'Eлемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.', [{
//     title: 'align',
//     action: 'Задает выравнивание содержимого тега'
// }, {title: 'title', action: 'Добавляет всплывающую подсказку к содержимому'}]);
//
// let tagH1 = new TagNote('<h1>', 'Tег <h1> представляет собой наиболее важный заголовок первого уровня', [{
//     title: 'align',
//     action: 'Определяет выравнивание заголовка'
// }]);
//
// let tagSpan = new TagNote('<span>', 'Тег <span> предназначен для определения строчных элементов документа', [{
//     title: 'class',
//     action: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением'
// }, {title: 'hidden', action: 'Скрывает содержимое элемента от просмотра'}]);
//
// let tagInput = new TagNote('<input>', 'Тег <input>  позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем', [{
//     title: 'alt',
//     action: 'Альтернативный текст для кнопки с изображением'
// }, {title: 'border', action: 'Толщина рамки вокруг изображения'}]);
//
// let tagForm = new TagNote('<form>', 'Тег <form> устанавливает форму на веб-странице', [{
//     title: 'action',
//     action: 'Адрес программы или документа, который обрабатывает данные формы'
// }, {title: 'enctype', action: 'Способ кодирования данных формы'}]);
//
// let tagOption = new TagNote('<option>', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>', [{
//     title: 'selected',
//     action: 'Заранее устанавливает определенный пункт списка выделенным'
// }, {
//     title: 'value',
//     action: 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.'
// }]);
//
// let tagSelect = new TagNote('<select>', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка', [{
//     title: 'autofocus',
//     action: 'Устанавливает, что список получает фокус после загрузки страницы'
// }, {title: 'multiple', action: 'Позволяет одновременно выбирать сразу несколько элементов списка'}]);
//
// console.log(tagA);
// console.log(tagDiv);
// console.log(tagH1);
// console.log(tagSpan);
// console.log(tagInput);
// console.log(tagForm);
// console.log(tagOption);
// console.log(tagSelect);
//
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
//
// -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// class Tags {
//     constructor(name, description, arrayAtr) {
//         this.Name = name;
//         this.Description = description;
//         this.ArrayAtr = arrayAtr;
//     }
// }
//
// let tagsA = new Tags('<a>', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.', [{
//     title: 'accesskey',
//     action: 'Активация ссылки с помощью комбинации клавиш'
// }, {title: 'download', action: 'Предлагает скачать указанный по ссылке файл'}]);
//
// let tagsDiv = new Tags('<div>', 'Eлемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.', [{
//     title: 'align',
//     action: 'Задает выравнивание содержимого тега'
// }, {title: 'title', action: 'Добавляет всплывающую подсказку к содержимому'}]);
//
// let tagsH1 = new Tags('<h1>', 'Tег <h1> представляет собой наиболее важный заголовок первого уровня', [{
//     title: 'align',
//     action: 'Определяет выравнивание заголовка'
// }]);
//
// let tagsSpan = new Tags('<span>', 'Тег <span> предназначен для определения строчных элементов документа', [{
//     title: 'class',
//     action: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением'
// }, {title: 'hidden', action: 'Скрывает содержимое элемента от просмотра'}]);
//
// let tagsInput = new Tags('<input>', 'Тег <input>  позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем', [{
//     title: 'alt',
//     action: 'Альтернативный текст для кнопки с изображением'
// }, {title: 'border', action: 'Толщина рамки вокруг изображения'}]);
//
// let tagsForm = new Tags('<form>', 'Тег <form> устанавливает форму на веб-странице', [{
//     title: 'action',
//     action: 'Адрес программы или документа, который обрабатывает данные формы'
// }, {title: 'enctype', action: 'Способ кодирования данных формы'}]);
//
// let tagsOption = new Tags('<option>', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>', [{
//     title: 'selected',
//     action: 'Заранее устанавливает определенный пункт списка выделенным'
// }, {
//     title: 'value',
//     action: 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.'
// }]);
//
// let tagsSelect = new Tags('<select>', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка', [{
//     title: 'autofocus',
//     action: 'Устанавливает, что список получает фокус после загрузки страницы'
// }, {title: 'multiple', action: 'Позволяет одновременно выбирать сразу несколько элементов списка'}]);
//
// console.log(tagsA);
// console.log(tagsDiv);
// console.log(tagsH1);
// console.log(tagsSpan);
// console.log(tagsInput);
// console.log(tagsForm);
// console.log(tagsOption);
// console.log(tagsSelect);
//
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

// -- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і добавляет його в поточний об'єкт car
// let car = {
//     model: 'Lancer',
//     producer: 'Mitsubishi',
//     year: '2015',
//     maxSpeed: 220,
//     engine: '1.6',
//     driving() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     },
//     information() {
//         console.log(`Модель: ${this.model},Bиробник: ${this.producer},рік випуску:${this.year},максимальна швидкість:${this.maxSpeed},об'єм двигуна: ${this.engine}`);
//     },
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed += newSpeed;
//     },
//     changingYear(changeYear) {
//         this.year = changeYear;
//     },
//     addDriver(drivers) {
//         this.driver = drivers;
//     }
// }
//
// car.changingYear(2020);
// car.increaseMaxSpeed(500);
// car.addDriver({name: 'Sasha', age: 23});
// console.log(car);

// Реалізовуємо свій компютерний магазин.
// ===
// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
//     Оперативна память.
//     Потужність процесора. (цифра від 0 до 1000)
//     Назва.
//     В кожного компютера має бути метод включання.
// ===
class Computer {
    constructor(RAM, processor, name) {
        this.ram = RAM;
        this.processor = processor;
        this.name = name;
    }

    on() {
        console.log('Hello user')
    }

}

let pc1 = new Computer(8, 512, 'lenovo');
console.log(pc1);
pc1.on();

// Від базового компютрера треба реалізувати ноутбук.
//     Він має нову властивість дюймаж монітора.
//
//     У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)
// ===

class noteBook extends Computer {
    constructor(RAM, processor, name, diagonal) {
        super(RAM, processor, name);
        this.diagonal = diagonal;
        this.power = diagonal * RAM;
    }

}

let note1 = new noteBook(16, 600, 'samsung', 19);
console.log(note1);

// Від ноутбука потрібно зробити ультрабук.
//     Він має нову змінну ваги.
//     При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.
// ===
class ultraBook extends noteBook {
    constructor(RAM, processor, name, diagonal, weight) {
        super(RAM, processor, name, diagonal);
        this.weight = weight;
    }

    eror() {
        if (this.weight > 2 && this.power < 240) {
            console.error('warning');
        }
    }
}

let ultra1 = new ultraBook(1, 250, 'HP', 15, 3);
console.log(ultra1);
ultra1.eror();

// Від базвого класу потрібно створити базовий ПК.
//     В нього має бути новий метод запуску ігор.
//     Кількість FPS визначається як потужність / опервтивку.
//     Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`
class Basic extends Computer {
    constructor(RAM, processor, name, power, game) {
        super(RAM, processor, name);
        this.power = power;
        this.fps = power / RAM;
        this.game = game;
    }

    gamePlay() {
        console.log(`You are playing ${this.game}  with ${this.fps} FSP`)
    }

// Компютер можна апгрейдити.
//     Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
//     Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
//     Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.
// ===
    upgrade1(perCent) {
        if (perCent <= 0.1) {
            this.processor = this.processor + (this.processor * perCent);
        }
    }

    upgrade2(ramX) {
        if (ramX <= 2) {
            this.ram = this.ram * ramX;
        }
    }
}

let basic1 = new Basic(2, 500, 'panasonic', 156, 'GTA V');
basic1.gamePlay('GTA');
basic1.upgrade1(0.05);
basic1.upgrade2(2);
console.log(basic1);

// Від базового ПК необхідно зробити ігровий ПК.
//     Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
//     При запуску однієї гри потужніть процесора має падати на 0.1%.
// Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно видати помилку,
//     що на цьому відрі ігри не запускаються.

class GamerPC extends Basic {
    constructor(RAM, processor, name, power, game) {
        super(RAM, processor, name, power, game);
        this.fps = (power / RAM) * 2;
    }

    gameplayBug() {
        this.gamePlay();
        this.processor = this.processor - this.processor * 0.01;
    }

    output() {
        console.log(this);
    }
}


let gamer1 = new GamerPC(16, 1000, 'SONY', 512, 'Vitcher 12');
gamer1.gameplayBug();
gamer1.output();