let arr = [
    { article:'Почему язык С++ такой недружелюбный к программистам', author:'Максим Комисаренко', status:'not banned'},
    { article:'Одному из учеников — 91 год. Как людей старшего возраста обучают компьютерной грамотности в Харькове', author:'Анна Соха', status:'not banned'},
    { article:'Порівнюємо два формати серіалізації даних: Protobuf vs JSON', author:'Ярослав Характерник', status:'not banned'},
    { article:'Аби щось отримати, треба докласти зусиль — цей принцип справедливий і в IT, і в жонглюванні». Досвід циркового артиста, який став програмістом', author:'Artem Halai', status:'not banned'},
    { article:'User Acceptance Testing: как менеджеру организовать процесс', author:'Alexander Kryuchkov', status:'not banned'},
    { article:'Створення відеогри на асемблері, модуль для обробки зображень, вірус із кодом, що мутує. Як ІТ-спеціалісти розв’язують складні завдання', author:'Редакція DOU', status:'banned'},
    { article:'Як і навіщо IT-фахівці розвивають українськомовний YouTube', author:'Anna Belovolchenko', status:'not banned'},
    { article:'Scala 3: як зміниться синтаксис, система типів і застосування мови', author:'Ruslan Shevchenko', status:'not banned'},
    { article:'C++ дайджест #27: Continuous Integration', author:'Наталья Ковалёва', status:'not banned'},
];
console.log(arr);

let str = ''; // пустая строка перед списком статей

for (let item of arr) { // Предписываем переменной item повторяться пока незакончится массив arr 
    
    let objName = item;
    
    if ( objName.status !== 'not banned') { // Если это условие не выполняется,то приналичии в цикле оператора continue, цикл 
        continue;              // переходит к другой итерации. 
    }  
                       
    str = `${str}<li><b style='color:blue'>${objName.article}</b><br>${'Автор: ' + objName.author}</li>
    <button class='hider' style='background:red; border-color:red; border-radius:5px'><b>${'НАЖМИ МЕНЯ'}</b></button><p>`; // Пустая строка, маркерованный список, первое значение переменной item 
     //из массива c индексом 0 (ноль)
     
}

let dd = document.querySelector('.list'); // найден элемент html-кода с классом .list
dd.innerHTML = str; // Ему присвоено содержимое переменной dd



//document.querySelector('.hider').onclick = function() {
   // document.querySelector('.list').hidden = true        УДАЛЯЕТ весь массив
//}


let buttonElem = document.getElementsByTagName('button');
let liElem = document.getElementsByTagName('li');
for(let i = 0; i < buttonElem.length; i++) {  
            buttonElem[i].onclick = function(){
                liElem[i].hidden = true
                buttonElem[i].hidden = true
    } 
}






let dd3 = document.querySelector('.button-2');
dd3.addEventListener('mouseover', function( event ) {
    console.log('mouseover!'); 
    let target = event.target;
    target.style.cssText = 'height: 250px; width: 250px; background: green; border-radius: 10px; font-weight:bold; border: none';

});


let dd4 = document.querySelector('.button-2');
dd4.addEventListener('mouseout', function( event ) {
    console.log('mouseout!'); 
    let target = event.target;
    target.style.cssText = 'height: 100px; width: 100px; background: yellow; border-radius: 10px; font-weight:bold; border: none';
});





//})

