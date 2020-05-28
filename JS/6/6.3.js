// Необходимо отсортировать массив в случайном порядке используя метод sort.

var arr = [1, 2, 3, 4, 5];

console.log(arr.sort(function(a, b){return 0.5 - Math.random()}));