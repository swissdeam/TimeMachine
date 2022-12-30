/**
 * @file Это тестовая демонстрация jsDoc
 * @author walker
 * @version 0.0.1
 */

/**
 * @description Book class, представляющий книгу
 * @param (string) title-Название книги.
 * @param (string) author - автор книги.
 */
function Book(title, author) {
    this.title = title;
    this.author = author;
}
Book.prototype = {
    /**
     * @description Получить название книги
     * @returns {string|*}
     */
    getTitle: function () {
        return this.title;
    },
    /**
     * @description устанавливает количество страниц книги
     * @param pageNum {номер} номер страницы
     */
    setPageNum: function (pageNum) {
        this.pageNum = pageNum;
    }
};


/**
 * @description Это функция суммирования, которая имеет возвращаемое значение.
 * @param {*} num1 addend
 * @param {*} num2 addendum
 * @returns {num | *} myTestVal Сумма двух чисел
 */
var myTest2 = function (num1, num2) {
    var myTestVal;
    myTestVal = num1 + num2;
    return myTestVal;
}
myTest2(2, 2)

/**
 * @description num2 - бесполезная переменная
 */
var num2 = 2;

// @description num - сумма двух чисел
var num;
/**
 * @description Это функция, которая не возвращает сумму значений.
 * @param {*} num1 addend
 * @param {*} num2 addendum
 */
var myTest = function (num1, num2) {
    num = num1 + num2;
}
myTest(1, 2)

var testVal;
/**
 * @description Это функция без параметров
 */
function test() {
    console.log("123")
}
