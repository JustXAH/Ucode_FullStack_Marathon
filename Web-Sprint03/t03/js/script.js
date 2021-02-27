class Human {
    constructor(options) {
        this.firstName = options.firstName;
        this.lastName = options.lastName;
        this.gender = options.gender;
        this.age = options.age;
        this.calories = options.calories ;
        this.img = options.img;
        this.hero = false;
    }
    sleepFor() {
        document.querySelector('#info').innerHTML = "I'm sleeping";
    }
    feed() {
        document.querySelector('#info').innerHTML = "Nom nom nom";
    }
}

class Superhero extends Human{
    fly() {
        document.querySelector('#info').innerHTML = `I'm flying`;
        setTimeout(()=> {
        document.querySelector('#info').innerHTML = "We are VENOM";
        document.querySelector('img').src = 'assets/images/venom.gif';
        }, 10000);
    }
    fightWithEvil () {
        document.querySelector('#info').innerHTML ="Khhhh-chh..." +
            " Bang-g-g-g... Evil is defeated!";
    }
}

let human = new Human({
    firstName: 'Edward',
    lastName: "Brock",
    gender: "Male",
    age: 43,
    calories: 600,
    img: 'assets/images/human.jpg',
    hero: false
    });

let superhero = new Superhero(human);

let createInfo = `<div class="mainWindow_conteiner">
<span id="info">"I'm human"</span></div>
<img src='assets/images/human.jpg'>
<div class="description">${human.firstName} ${human.lastName}, ${human.age} years.
<br> ${human.calories} calories</div>
<div class="mainWindow_content">
<button id="feed", onclick="feedMe()">Feed</button><br>
<button id="sleep", onclick="sleep()">To fall asleep</button><br>
<button id="hero", onclick="intoSuper()">Into superhero</button><br>
</div>`


document.querySelector('.mainWindow').insertAdjacentHTML('afterbegin', createInfo)

// begin
setTimeout(() => {
    count()
}, 5000);

setInterval(count, 60000);

function count() {
    if (superhero.hero === false) {
        if (human.calories > 0) {
            human.calories -= 200
            document.querySelector('.description').innerHTML = `${human.firstName} ${human.lastName}, ${human.age} years.
<br> ${human.calories} calories`
        }
        if (human.calories < 500) {
            document.querySelector('#info').innerHTML = "I'm still hungry"
        }
    }
    else {
        if (superhero.calories > 0) {
            superhero.calories -= 200
            document.querySelector('.description').innerHTML = `${superhero.firstName}
        <br> ${superhero.calories} calories`
        }
        if (superhero.calories < 500) {
            document.querySelector('#info').innerHTML = "I'm still hungry"
        }
    }
}

function feedMe() {
    document.querySelector('#info').innerHTML = ""
    if (superhero.hero === false) {
        if (human.calories < 500) {
            human.feed()
            document.querySelector('img').src = 'assets/images/eat.gif'
            disableButtons();
            setTimeout(() => {
                human.calories += 200
                document.querySelector('.description').innerHTML = `${human.firstName} ${human.lastName}, ${human.age} years.
                    <br> ${human.calories} calories`
                document.querySelector('img').src = 'assets/images/human.jpg'
                document.querySelector('#info').innerHTML = "I'm human"
                enableButtons();
            }, 10000)
        }
        else {
            document.querySelector('#info').innerHTML = "I am not hungry"
        }
    }
    else {
        if (superhero.calories < 500) {
            superhero.feed()
            document.querySelector('img').src = 'assets/images/eat_venom.gif'
            disableButtons();
            setTimeout(() => {
                superhero.calories += 200
                document.querySelector('.description').innerHTML = "";
                document.querySelector('.description').innerHTML = `${superhero.firstName}
            <br> ${superhero.calories} calories`;
                document.querySelector('img').src = 'assets/images/venom.gif'
                document.querySelector('#info').innerHTML = "We are VENOM"
                enableButtons();
            }, 10000)
        } else {
            document.querySelector('#info').innerHTML = "I am not hungry"
        }
    }
}

function intoSuper() {
    document.querySelector('#info').innerHTML = ""
    if(human.calories > 500) {
        superhero.firstName = "VENOM";
        superhero.lastName = "";
        superhero.hero = true;
        superhero.calories = human.calories;
        document.querySelector('#info').innerHTML = "";
        document.querySelector('#info').innerHTML = "We are VENOM";
        document.querySelector('img').src = 'assets/images/venom.gif';
        document.querySelector('.description').innerHTML = "";
        document.querySelector('.description').innerHTML = `${superhero.firstName}
            <br> ${superhero.calories} calories`;
        document.querySelector('.mainWindow_content').innerHTML = "";
        document.querySelector('.mainWindow_content').innerHTML =
            `<button id="feed", onclick="feedMe()">Feed</button><br>
            <button id="sleep", onclick="sleep()">To fall asleep</button><br>
            <button id="fly", onclick="flySuperhero()">Fly</button>
            <button id="defeat", onclick="victory()">Defeat the villain</button>`
    }
    else {
        document.querySelector('#info').innerHTML = "Not enough calories";
    }
}

function wakeUp() {
    document.querySelector('#info').innerHTML = ""
    document.querySelector('#info').innerHTML = "I'm awake now"
    if (superhero.hero === false) {
        document.querySelector('img').src = 'assets/images/wake_up.gif';
    }
    else {
        document.querySelector('img').src = 'assets/images/wake_up_venom.gif';
    }
}

function sleep() {
    if (superhero.hero === false) {
        document.querySelector('#info').innerHTML = ""
        document.querySelector('img').src = 'assets/images/sleep.gif';
        disableButtons();
        human.sleepFor();
        setTimeout(() => {
            wakeUp();
            setTimeout(() => {
                document.querySelector('img').src = 'assets/images/human.jpg'
                document.querySelector('#info').innerHTML = "I'm human"
                enableButtons();
            },2000);
        },10000);

    }
    else {
        document.querySelector('#info').innerHTML = ""
        document.querySelector('img').src = 'assets/images/sleep_venom.gif';
        disableButtons();
        superhero.sleepFor();
        setTimeout(() => {
            wakeUp();
            setTimeout(() => {
                document.querySelector('img').src = 'assets/images/venom.gif'
                document.querySelector('#info').innerHTML = "We are VENOM"
                enableButtons();
            },2000);
            enableButtons();
        },10000);
    }
}

function flySuperhero() {
    document.querySelector('#info').innerHTML = "";
    document.querySelector('img').src = 'assets/images/fly.gif';
    superhero.fly();
    disableButtons();
    setTimeout(() => {
        document.querySelector('img').src = 'assets/images/venom.gif'
        document.querySelector('#info').innerHTML = "We are VENOM"
        enableButtons();
    },10000);
}

function victory() {
    document.querySelector('#info').innerHTML = "";
    superhero.fightWithEvil();
    document.querySelector('img').src = 'assets/images/victory.gif';
}

function disableButtons() {
    document.querySelector('#feed').disabled = true;
    document.querySelector('#sleep').disabled = true;
    if (superhero.hero === false) {
        document.querySelector('#hero').disabled = true;
    }
    else {
        document.querySelector('#fly').disabled = true;
        document.querySelector('#defeat').disabled = true;
    }
}

function enableButtons() {
    document.querySelector('#feed').disabled = false;
    document.querySelector('#sleep').disabled = false;
    if (superhero.hero === false) {
        document.querySelector('#hero').disabled = false;
    }
    else {
        document.querySelector('#fly').disabled = false;
        document.querySelector('#defeat').disabled = false;
    }
}