const startBtn  = document.querySelector('.start-game__btn');
const sectionGame = document.querySelector('.game');
const exitBtn = document.querySelector('.header__exit')
const hc = document.querySelector('.header__container');
const nextBtn = document.querySelector('.game__next-btn')

const btns = document.querySelectorAll('.item');
const placeholder = document.querySelector('.placeholder');
const questionsText = document.querySelector('.game__questions');

exitBtn.addEventListener('click', () => {
    sectionGame.style.display = 'none';
    startBtn.style.display = 'block';
    exitBtn.style.display = 'none';
    hc.style.justifyContent = 'center';
})

const questions = [
    { text: "Где находится Эйфелева башня?", answer: "Франция" },
    { text: "Где находится Красная площадь?", answer: "Россия" },
    { text: "Где находится Статуя Свободы?", answer: "Америка" },
    { text: "Какое государство находится в Северной Америке?", answer: "Америка" },
    { text: "Какое государство известно своей балалайкой?", answer: "Россия" },
    { text: "Какое государство славится сыром и круассанами?", answer: "Франция" },
    { text: "Где пьют кленовый сироп и играют в хоккей?", answer: "Америка" },
    { text: "Где популярны береты и багеты?", answer: "Франция" },
    { text: "Где отмечают День Победы 9 мая?", answer: "Россия" },
    { text: "Где находится гора Эльбрус?", answer: "Россия" },
    { text: "Какое государство является родиной Джеймса Бонда?", answer: "Америка" },
    { text: "Какое государство славится своим вином и сыром?", answer: "Франция" },
    { text: "Где находится озеро Байкал?", answer: "Россия" },
    { text: "Какая страна известна своими национальными парками, как Йеллоустоун?", answer: "Америка" },
    { text: "Где проводятся знаменитые Каннские кинофестивали?", answer: "Франция" },
    { text: "Какая страна является крупнейшей по площади в мире?", answer: "Россия" },
    { text: "Где проводят известные праздники, такие как День независимости и День труда?", answer: "Америка" },
    { text: "Где находится самый известный замок — Версаль?", answer: "Франция" },
    { text: "Какое государство известно своей традицией матрешек?", answer: "Россия" },
    { text: "В какой стране находится самая высокая небоскрёб в мире — Бурдж-Халифа?", answer: "Америка" },
    { text: "Где был написан знаменитый роман 'Три мушкетёра'?", answer: "Франция" },
    { text: "Где находится Кремль?", answer: "Россия" },
    { text: "Какая страна является родиной Лувра?", answer: "Франция" },
    { text: "Где был подписан Декларация независимости США?", answer: "Америка" },
    { text: "Какая страна известна своим балетом и искусствами?", answer: "Россия" },
    { text: "Где проводят знаменитые винные фестивали, например, в Бордо?", answer: "Франция" },
    { text: "Какая страна знаменита своей культурой и праздниками, такими как День Мертвых?", answer: "Америка" },
    { text: "Где расположен город Санкт-Петербург?", answer: "Россия" },
    { text: "Где находится замок Нойшванштайн, вдохновивший на создание Диснейленда?", answer: "Франция" },
    { text: "Какая страна славится своими автопроизводителями, такими как Ford и Chevrolet?", answer: "Америка" },
    { text: "Где находится парк 'Воронежский заповедник'?", answer: "Россия" },
    { text: "Где проходят легендарные Великие гонки, такие как Тур де Франс?", answer: "Франция" },
    { text: "Где распространены традиции ковбоев и дикий Запад?", answer: "Америка" },
    { text: "В какой стране популярны традиционные санки и катание с гор?", answer: "Россия" },

];


let currentQuestion = null;

startBtn.addEventListener('click', () => {
    hc.style.justifyContent = 'space-between';
    exitBtn.style.display = "block";
    sectionGame.style.display = 'block';
    startBtn.style.display = 'none';
    showQuestion();
});

btns.forEach((btn) => {
    btn.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', btn.textContent);
        e.target.classList.add('dragged');
        setTimeout(() => e.target.classList.add('hide'), 0);
    });

    btn.addEventListener('dragend', (e) => {
        e.target.classList.remove('dragged', 'hide');
    });
});

placeholder.addEventListener('dragover', (e) => e.preventDefault());

placeholder.addEventListener('drop', (e) => {
    e.preventDefault();

    const draggedAnswer = e.dataTransfer.getData('text/plain');

    const draggedBtn = Array.from(btns).find(btn => btn.textContent === draggedAnswer);
    if (draggedBtn) {
        placeholder.innerHTML = ''
        placeholder.append(draggedBtn);
    }

    if (draggedAnswer === currentQuestion.answer) {
        alert('✅ Правильно!');
    } else {
        alert('❌ Неправильно. Попробуй ещё раз!');
    }
});

nextBtn.addEventListener('click', () => {
    showQuestion();
})

function showQuestion() {
    placeholder.innerHTML = '';

    const randomIndex = Math.floor(Math.random() * questions.length);
    currentQuestion = questions[randomIndex];
    questionsText.innerHTML = `<p>${currentQuestion.text}</p>`;
}

