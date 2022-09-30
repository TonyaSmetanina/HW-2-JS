// Task #1:
// let a = 2;
// let b = 2;
// let c = 4;
// let results;

// (a + b < c) ? results = "Malo" : results = "Mnogo";
// console.log (results);

// Task #2
// let a = parseInt(prompt ("введіть число А = "));
// let b = parseInt(prompt ("введіть число В = "));

// let sum = 0;

// for (let i = a; i < b; i++) {
//     if (i < b) {
//         sum += i;
//         console.log ("Summa: " + sum);
//     }
// }

// for (let i = a; i < b; i++) {
//     if (i%2 == 1) {
//         console.log (i)
//     }
// }

// Task #4


// трикутник
for (let i = 0; i < 10; i++){
    for (let j = 0; j - 1 < i; j++){
        document.write("*");
    }
    document.write("<br>");
}

// прямокутник
let p = "&nbsp\n";
let s = "*"; 

for (let i = 0; i < 10; ++i) {
    let st = "";

    if (i === 0 || i === 10 - 1) {    
      for (let j = 0; j < 10; ++j) {
        st += s;
      }    
    } else {
      st = s;
      for (let j = 0; j < 10 - 2; ++j) {
        st += p;
      }    
      st += s;
    }
    document.write(st);
    document.write ("<br>");
}

// прямий трикутник

let probil = "&nbsp";

for (let i = 0; i < 10; i++){
    for (let k = 10; k < i - 1; k++){
        document.write(probil,probil);
    }
    for (let j = 0; j < i + 1; j++){
    document.write("*", probil, probil);
    } 
    document.write ("<br>");
}
// рівносторонній трикутник
for (let i = 0; i < 10; i++){
    for (let k = 8; k > i - 1; k--){
        document.write(probil,probil);
    }
    for (let j = 0; j < i + 1; j++){
    document.write("*", probil, probil);
    } 
    document.write ("<br>");
}

// ромб

for(let i = 1; i <= 10; i++){
    let str="";
     for(let j=10-i; j>0; j--){
      str+= "&nbsp\n";
     }
     for(let j = 1; j <= i*2-1; j++){
      str+='*';
     }

     document.write(str);
     document.write ("<br>");
    }
  
     for (let i = 2; i <= 10; i++){
       let str='';
       for (let j = 0; j < i-1; j++){
        str+='&nbsp\n';
      }
       for (let j=(10-i)*2+1; j>0; j--){
        str+='*';
      }
      document.write(str);
      document.write ("<br>");
  }
 


// Task:
// Створіть масив styles з елементами «Джаз» та «Блюз». 
// Додайте «Рок-н-рол» до кінця.
// Замініть значення всередині на «Класика». 
// Ваш код для пошуку значення всередині повинен працювати для масивів 
// з будь-якою довжиною
// Видаліть перший елемент масиву та покажіть його.
// Вставте «Реп» та «Реггі» на початок масиву.

let styles = ["Джаз","Блюз"]; 
styles.push("Рок-н-рол"); 
styles[1] = "Класика";
console.log (styles); 

let del = styles.shift();
console.log(del);

let add = styles.unshift("Реп", "Реггі");
console.log(styles);