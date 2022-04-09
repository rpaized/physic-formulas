"use strict";

// START TEXT

let formulsPhysic = new Array ();
formulsPhysic[0] = "u=s/t";
formulsPhysic[1] = "s=u*t";
formulsPhysic[2] = "t=s/u";
formulsPhysic[3] = "u(ср)=s1+s2+s3+.../t1+t2+t3+...";
formulsPhysic[4] = 'F(т)=m*g';
formulsPhysic[5] = 'P=m*g';
formulsPhysic[6] = 'm=P/g';
formulsPhysic[7] = 'p=m/V';
formulsPhysic[8] = 'M=Fl';
formulsPhysic[9] = 'F1/F2=l2/l1'; // а) | условие равновесия рычага, тут две формулы (9 и 10)
formulsPhysic[10] = 'F1*l1=F2*l2'; // б)
formulsPhysic[11] = 'p=F/S';
formulsPhysic[12] = 'F=p*S';
formulsPhysic[13] = 'p=g*p*h';
formulsPhysic[14] = 'F(в)=p*g*V(т)';
formulsPhysic[15] = 'F(в)>F(т)'; 
formulsPhysic[16] = 'F1/F2=S1/S2';
formulsPhysic[17] = 'h=const';
formulsPhysic[18] = 'A=F*S';
formulsPhysic[19] = 'n=A(п)/А(в)'; // a)
formulsPhysic[20] = "n=A(п)/A(в)*100%"; // б)
formulsPhysic[21] = "E(п)=m*g*h";
formulsPhysic[22] = "E(к)=m*u**/2";
formulsPhysic[23] = "E(п)+E(к)=const";
formulsPhysic[24] = "N=A/t"; // а) отношение работы ко времени, за которое она выполнена
formulsPhysic[25] = "N=F*u"; // б) произведению силы (F), под действием которой перемещается тело, на среднюю скорость его перемещения
// конец 7 класс | начало 8 класса
formulsPhysic[26] = "V=V0*(1+b*deltat)";
formulsPhysic[27] = "l=l0*(1+a*deltat)";
formulsPhysic[28] = "c=Q/m*deltat";
formulsPhysic[29] = "C=m*c";
formulsPhysic[30] = "Q=c*m*deltat";
formulsPhysic[31] = "Q(г)=q*m";
formulsPhysic[32] = "Q(пл)=L*m";
formulsPhysic[33] = "Q(пар)=r*m";
formulsPhysic[34] = "n=1-Q2/Q1"; // a)
formulsPhysic[35] = "n<1"; // б)
formulsPhysic[36] = "F= k*q1/q2/r**"; // квадрат вводиться так **  а)
formulsPhysic[37] = "k=9*10**9*Н*м**/Кл"; // Н,м,Кл русские буквы! б)
formulsPhysic[38] = "I=q/t";
formulsPhysic[39] = "U=A/q";
formulsPhysic[40] = "R=p*l/S";
formulsPhysic[41] = "I=U/R";
formulsPhysic[42] = "I=I1=I2=...=In"; // с 42 до 44 св-ва послед. соед
formulsPhysic[43] = "R=R1+R2+...+Rn";
formulsPhysic[44] = "U=U1+U2+...+Un";
formulsPhysic[45] = "I=I1+I2+...+In"; // c 45 до 48 св-ва паралл. соед
formulsPhysic[46] = "1/R=1/R1+1/R2+...+1/Rn";
formulsPhysic[47] = "U1=U2=...=Un";
formulsPhysic[48] = "R(общ)=R/n"; // n = кол-во проводников
formulsPhysic[49] = "A=U*q=U*I*t";
formulsPhysic[50] = "P=A/t=U*I";
formulsPhysic[51] = "Q=I***Rt"; // с 51 по 54 кол-во теплоты а)
formulsPhysic[52] = "Q=I*U*t"; // б)
formulsPhysic[53] = "Q=U**/R*t"; // в)
formulsPhysic[54] = "Q=P*t"; // г)
formulsPhysic[55] = "a=p"; // a - угол падания; p - угол отражения
formulsPhysic[56] = "n1,2=sin a/sin y=u1/u2";
formulsPhysic[57] = "D=1/F";
formulsPhysic[58] = "D=1/F=1/f+1/d";
// конец 8 класса | начало 9 класса
formulsPhysic[59] = "u>=S>/t"; // вектор вводиться так "">""
formulsPhysic[60] = "ux=x-x0/t";
formulsPhysic[61] = "s>=v>*t";
formulsPhysic[62] = "sx=x-x0";
formulsPhysic[63] = "v(ср)>=S>/t";
formulsPhysic[64] = "a>=u>-u0>/t";
formulsPhysic[65] = "u>=u0>+a>*t"; // а) u0 != 0 
formulsPhysic[66] = "u>=a>*t"; // б) при u0=0
formulsPhysic[67] = "s=u0*t+a*t**/2"; // а)
formulsPhysic[68] = "s=a*t**/2"; // б) при u0=0
formulsPhysic[69] = "s=u**-u0**/2a"; // а) (Б фактически) 
formulsPhysic[70] = "s=v**/2a"; // б) при u0=0
formulsPhysic[71] = "x=x0+u0*t+a*t**/2";
formulsPhysic[72] = "g=9,81";
formulsPhysic[73] = "n=1/T";
formulsPhysic[74] = "T=1/n"; // а)
formulsPhysic[75] = "T=2n/a"; // б)
formulsPhysic[76] = "u=2*Pi*r/T"; // а)  Число Пи вводится "Pi"
formulsPhysic[77] = "u=2*Pi*r*n"; // б)
formulsPhysic[78] = "a=u**/r"; // а)
formulsPhysic[79] = "a=4*Pi***r/T**"; // б)
formulsPhysic[80] = "a=4Pi***n***r";  // в)
formulsPhysic[81] = "u>=const"; // при F>=0
formulsPhysic[82] = "F>=m*a>";
formulsPhysic[83] = "F1>=-F2>";
formulsPhysic[84] = "F(т)=m*g";
formulsPhysic[85] = "g0=G*M(Земли)/R**"; // а)
formulsPhysic[86] = "g(h)=G*M(Земли)/(R+h)**"; // б)
formulsPhysic[87] = "t=\/2h/g"; // а) Корень вводится так "\/"
formulsPhysic[88] = "l=u0\/2*h/g"; // б)
formulsPhysic[89] = "h=g*t**/2"; // в)
formulsPhysic[90] = "p>=m*u>";
formulsPhysic[91] = "F>*t=m*u>+m*u0>";
formulsPhysic[92] = "m1*u1>+m2*u2>=m1*u1>`+m2*u2>`"; // Штрих вводится так " ` " 
formulsPhysic[93] = "A=F*s*cos a";
formulsPhysic[94] = "A=E(к2)-E(к1)=m*u2**/2-m*u1**/2";
formulsPhysic[95] = "A=E(п)=m*g*h";



let nameFormuls = new Array ();
nameFormuls[0] = "Скорость";
nameFormuls[1] = "Путь";
nameFormuls[2] = "Время движения";
nameFormuls[3] = "Средняя скорость";
nameFormuls[4] = "Сила тяжести";
nameFormuls[5] = "Вес";
nameFormuls[6] = "Масса";
nameFormuls[7] = "Плотность";
nameFormuls[8] = "Момент силы";
nameFormuls[9] = "Условие равновесия рычага | формула а) ";
nameFormuls[10] = "Условие равновесия рычага | формула б) ";
nameFormuls[11] = "Давление";
nameFormuls[12] = "Сила давления";
nameFormuls[13] = "Давление однородной жидкости";
nameFormuls[14] = "Закон Архимеда";
nameFormuls[15] = "Условие плавания тел";
nameFormuls[16] = "Закон гидравлической машины";
nameFormuls[17] = "Закон сообщающихся сосудов";
nameFormuls[18] = "Механическая работа";
nameFormuls[19] = "Коэффициент полезного действия механизма (КПД) | формула а)"; // а)
nameFormuls[20] = "Коэффициент полезного действия механизма (КПД) | формула б)"; // б)
nameFormuls[21] = "Потенциальная энергия";
nameFormuls[22] = "Кинетическая энергия";
nameFormuls[23] = "Сохранение и превращение механической энергии";
nameFormuls[24] = "Мощность | формула а)"; // а)
nameFormuls[25] = "Мощность | формула б)"; // б)
// конец 7 класс | начало 8 класса
nameFormuls[26] = "Объёмное расширение твёрдых тел"; // deltat
nameFormuls[27] = "Линейное расширение твёрдых тел"; // deltat
nameFormuls[28] = "Удельная теплоёмкость вещества"; // deltat
nameFormuls[29] = "Теплоёмкость тела";
nameFormuls[30] = "Количество теплоты при теплопередаче"; // deltat
nameFormuls[31] = "Количество теплоты при сгорании топлива";
nameFormuls[32] = "Количество теплоты при плавлении (кристаллизации) твёрдых тел";
nameFormuls[33] = "Количество теплоты при испарении (конденсации) жидких тел";
nameFormuls[34] = "Коэффициент полезного действия (КПД) тепловой машины"; // а)
nameFormuls[35] = "Коэффициент полезного действия (КПД) тепловой машины | КПД не может быть равен или больше единицы"; // б)
nameFormuls[36] = "Закон Кулона | формула а)"; // квадрат вводиться так **  а)
nameFormuls[37] = "Закон Кулона | коэффициент единицы измерения заряда"; // Н,м,Кл русские буквы! б)
nameFormuls[38] = "Сила тока";
nameFormuls[39] = "Напряжение";
nameFormuls[40] = "Сопротивление проводника";
nameFormuls[41] = "Закон Ома (для однородного участка цепи)";
nameFormuls[42] = "Последовательное соединение проводников | Сила тока"; // с 42 до 44 св-ва послед. соед
nameFormuls[43] = "Последовательное соединение проводников | Общее сопротивление";
nameFormuls[44] = "Последовательное соединение проводников | Общее напряжение";
nameFormuls[45] = "Параллельное соединение проводников | Сила тока"; // c 45 до 48 св-ва паралл. соед
nameFormuls[46] = "Параллельное соединение проводников | Общее сопротивление";
nameFormuls[47] = "Параллельное соединение проводников | Общее напряжение";
nameFormuls[48] = "Параллельное соединение проводников | Проводники с одинаковым сопротивлением..."; // n = кол-во проводников
nameFormuls[49] = "Работа тока";
nameFormuls[50] = "Мощность тока";
nameFormuls[51] = "Количество теплоты, выделяющееся в проводнике с током (Закон Джоуля-Ленца) | формула а)"; // с 51 по 54 кол-во теплоты а)
nameFormuls[52] = "Количество теплоты, выделяющееся в проводнике с током (Закон Джоуля-Ленца) | формула б)"; // б)
nameFormuls[53] = "Количество теплоты, выделяющееся в проводнике с током (Закон Джоуля-Ленца) | формула в)"; // в)
nameFormuls[54] = "Количество теплоты, выделяющееся в проводнике с током (Закон Джоуля-Ленца) | формула г)"; // г)
nameFormuls[55] = "Закон отражения света"; // a - угол падания; p - угол отражения
nameFormuls[56] = "Законы преломления света";
nameFormuls[57] = "Оптическая сила линзы";
nameFormuls[58] = "Формулы линзы";
// конец 8 класса | начало 9 класса
nameFormuls[59] = "Скорость | Равномерное прямолинейное движение"; // вектор вводиться так "">""
nameFormuls[60] = "Проекция скорости на координатную ось";
nameFormuls[61] = "Перемещение | Равномерное прямолинейное движение";
nameFormuls[62] = "Проекция перемещения на координатную ось";
nameFormuls[63] = "Средняя скорость при неравномерном прямолинейном движении";
nameFormuls[64] = "Ускорение | Равноускоренное прямолинейное движение";
nameFormuls[65] = "Скорость | Равноускоренное прямолинейное движение"; // а) u0 != 0 
nameFormuls[66] = "Скорость при u0> = 0 | Равноускоренное прямолинейное движение"; // б) при u0=0
nameFormuls[67] = "Перемещение | Равноускоренное прямолинейное движение, формула а)"; // а)
nameFormuls[68] = "Перемещение при u0> = 0 | Равноускоренное прямолинейное движение, формула aБ)"; // б) при u0=0
nameFormuls[69] = "Перемещение | Равноускоренное прямолинейное движение, формула бА)"; // а)  (Б фактически)
nameFormuls[70] = "Перемещение при u0> = 0 | Равноускоренное прямолинейное движение, формула бБ)"; // б) при u0=0
nameFormuls[71] = "Координата тела";
nameFormuls[72] = "Ускорение свободного падения";
nameFormuls[73] = "Частота обращения";
nameFormuls[74] = "Период обращения | формула а)"; // а)
nameFormuls[75] = "Период обращения | формула б)"; // б)
nameFormuls[76] = "Линейная скорость | формула а)"; // а)  Число Пи вводится "Pi"
nameFormuls[77] = "Линейная скорость | формула б)"; // б)
nameFormuls[78] = "Центростремительное ускорение | формула а)"; // а)
nameFormuls[79] = "Центростремительное ускорение | формула б)"; // б)
nameFormuls[80] = "Центростремительное ускорение | формула в)"; // в)
nameFormuls[81] = "Первый закон Ньютона | при F>=0"; // при F>=0
nameFormuls[82] = "Второй закон Ньютона";
nameFormuls[83] = "Третий закон Ньютона";
nameFormuls[84] = "Сила тяжести";
nameFormuls[85] = "Ускорение свободного падения | формула а)"; // а)
nameFormuls[86] = "Ускорение свободного падения | формула б)"; // б)
nameFormuls[87] = "Горизонтально брошенное тело | Время падения"; // а) Корень вводится так "\/"
nameFormuls[88] = "Горизонтально брошенное тело | Дальность падения"; // б)
nameFormuls[89] = "Горизонтально брошенное тело | Высота полёта"; // в)
nameFormuls[90] = "Импульс тела";
nameFormuls[91] = "Импульс силы";
nameFormuls[92] = "Закон сохранения импульса"; // Штрих вводится так " ` " 
nameFormuls[93] = "Механическая работа силы";
nameFormuls[94] = "Теорема о кинетической энергии";
nameFormuls[95] = "Потенциальная энергия поднятого тела";


// END TEXT

let wrongList = [
    ["№","Название формулы","Правильный ответ","Ваш ответ"]
];
let randomNumber = null;
let repeatNumber = 0;
let writeWord;
let counterPointPlus = 0;
let counterPointMinus = 0;
function askErrorFormuls(ask) {
    while (ask>=98) {
        ask = prompt("Ошибка. Введите число меньше или равное 97");
    }
} 
let arrayRandomNumber = [];
let wrongFormulsPhysic = [];
let wrongNameFormulsPhysic = [];
let wrongWriteFormuls = [];
let showNumber = 1;
let askStartNumber = +prompt('С какого номера выводить формулы?');
askErrorFormuls(askStartNumber);
let askEndNumber = +prompt('До какого номера выводить формулы?');
askErrorFormuls(askEndNumber);
while (askStartNumber>askEndNumber) {
    askEndNumber = prompt(`Ошибка. другое Введите число меньше или равное ${askStartNumber} `);
}; 
askStartNumber--;
askEndNumber--;
let differenceStartEndNumber = (askEndNumber - askStartNumber);
arrayRandomNumber = Array(differenceStartEndNumber).fill(0).map((e,i)=>i+askStartNumber);
alert("В некоторых формулах понадобиться вводить символы, которых нет на клавиатуре." + 
"\nСправка: Дельта - delta; Квадрат - **; Пи - Pi; Корень - \\/; Вектор - >; Штрих - `");
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
shuffleArray(arrayRandomNumber); 
while (repeatNumber < differenceStartEndNumber) {
    writeWord = prompt(`№${showNumber}. ${nameFormuls[arrayRandomNumber[repeatNumber]]}`);
    showNumber++;
    if (writeWord ==  formulsPhysic[arrayRandomNumber[repeatNumber]]) {
        alert('Правильно');
        counterPointPlus += 1;
        
    } else {
        alert(`Неправильно, правильный ответ ${formulsPhysic[arrayRandomNumber[repeatNumber]]}`);
        wrongFormulsPhysic.push(formulsPhysic[arrayRandomNumber[repeatNumber]]);
        wrongNameFormulsPhysic.push(nameFormuls[arrayRandomNumber[repeatNumber]]);      
        wrongWriteFormuls.push(writeWord); 
        counterPointMinus += 1;
    }
    repeatNumber++;
}
if (counterPointPlus == 0) {
    alert("Ни одного правильного ответа...");
} else {
    alert(`Правильные ответы - ${counterPointPlus}`);
}
if (counterPointMinus == 0) {
    alert("Ни одного неправильного ответа...");
} else {
    alert(`Неправильные ответы - ${counterPointMinus}`);
}
let comparisonPlus = (counterPointPlus/differenceStartEndNumber*100);
let comparisonMinus = (counterPointMinus/differenceStartEndNumber*100);
if (comparisonPlus>comparisonMinus) {
    alert(`Правильных ответов было больше (${comparisonPlus}% | ${comparisonMinus}%)`);
} else if (comparisonPlus == comparisonMinus) {
    alert("Оказалось, вы умеете бить в середину. Правильные и неправильные ответы равны (50% | 50%)");
}
else {
    alert(`Неправильных ответов было больше (${comparisonPlus}% | ${comparisonMinus}%)`);
} 
let askShowFormuls;
if (counterPointMinus !== 0) {
    askShowFormuls = confirm("Вывести ваши неправильные ответы?");
}
repeatNumber = 0;
let showNumberMinus = 1; 
if (askShowFormuls === true) {
    while (repeatNumber < counterPointMinus) {
        alert(`№${showNumberMinus}. ${wrongNameFormulsPhysic[repeatNumber]} - ${wrongFormulsPhysic[repeatNumber]}. Вы ответили - ${wrongWriteFormuls[repeatNumber]}`);
        repeatNumber++;
        showNumberMinus++;
    }
} 
