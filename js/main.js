const DATA = [

    {
        word: 'Translator',
        translates: [
            {
                id: '1',
                value: 'Переводчик',
                correct: true
            },
            {
                id: '2',
                value: 'Машина',
                correct: false
            },
            {
                id: '3',
                value: 'Транспорт',
                correct: false
            },
        ]
        
    },
    {
        word: 'Paint',
        translates: [
            {
                id: '1',
                value: 'Бегать',
                correct: false
            },
            {
                id: '2',
                value: 'Рисовать',
                correct: true
            },
            {
                id: '3',
                value: 'Пляж',
                correct: false
            },
        ]
        
    },
    {
        word: 'Walk',
        translates: [
            {
                id: '1',
                value: 'Любить',
                correct: false
            },
            {
                id: '2',
                value: 'Плавать',
                correct: false
            },
            {
                id: '3',
                value: 'Гулять',
                correct: true
            },
        ]
        
    },
    {
        word: 'Play',
        translates: [
            {
                id: '1',
                value: 'Играть',
                correct: true
            },
            {
                id: '2',
                value: 'Умирать',
                correct: false
            },
            {
                id: '3',
                value: 'Идти',
                correct: false
            },
        ]
        
    },
    {
        word: 'Hello',
        translates: [
            {
                id: '1',
                value: 'Привет',
                correct: true
            },
            {
                id: '2',
                value: 'Пока',
                correct: false
            },
            {
                id: '3',
                value: 'Добрый вечер',
                correct: false
            },
        ]
        
    },
    {
        word: 'Enormity',
        translates: [
            {
                id: '1',
                value: 'Разнообразный',
                correct: false
            },
            {
                id: '2',
                value: 'Чудовищный',
                correct: true
            },
            {
                id: '3',
                value: 'Прекрасный',
                correct: false
            },
        ]
        
    },
]
const Results = ['Переводчик', 'Рисовать', 'Гулять', 'Играть']

const count = document.querySelector('.game__counter')
const field = document.querySelector('#game-field')
const answers = document.querySelector('#buttons')
const translationButtons = Array.from(document.querySelector('.game__buttons').children)
const game = document.querySelector('#game')




let INDEX 
let COUNT = 0
function renderGame(){

    const renderWord = function (index){
        let result = ''
        game.dataset.currentIndex = index
        INDEX = index

        field.innerHTML = `
            <a href="#" class="game__button game__button--blue">${DATA[index].word}</a>
        `

        DATA[index].translates.forEach(function(translate, translateIndex){
            result += `
                <a href="#" class="game__button" id="g${DATA[index].translates[translateIndex].id}">${DATA[index].translates[translateIndex].value}</a>
            `
        })

        answers.innerHTML = result
    }

    answers.addEventListener('click', e =>{
        console.log(e.target)
        if(e.target.classList.contains('game__button')){
            const value = e.target.innerText

            if (value == Results[INDEX]){
                COUNT++
            }
            const nextIndex = +game.dataset.currentIndex + 1
            count.innerHTML = COUNT

            console.log(nextIndex)

            if (DATA.length == nextIndex){
                console.log('Слова закончились')
                COUNT = 0
                alert('Слова закончились')
                location.reload()
                
            }
            else{
                renderWord(nextIndex)
            }
        }
    })


    

    renderWord(0)


}

renderGame()




            
