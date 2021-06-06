/* Obtén del 1 al 255*/
function array(){
    var arr = [];
    for (var i = 1; i <= 255; i++){
        arr.push(i);
    }
    return arr;
}

console.log(array());


/* Suma pares hasta 1000 */
function sumaPares(){
    var sum = 0;
    for (var i = 1; i <= 1000; i++){
        if (i%2 == 0){
            sum = sum + i;
        } 
    }
    return sum;
}

console.log(sumaPares());


/* Suma impares hasta 5000 */
function sumaImp(){
    var sum = 0;
    for (var i = 1; i <= 5000; i+=2){
        if (i % 2 == 1){
            sum = sum + i;
        }
    }
    return sum;
}

console.log(sumaImp());


/* Itera un array */
function sumaArr(arr){
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}

console.log(sumaArr([-5,2,5,12]));


/* Encuentra el mayor (max) */
function maximo(arr){
    var max = arr[0];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

console.log(maximo([-3,3,5,7]));


/* Encuentra el promedio (avg) */
function promedio(arr){
    var sum = 0;
    var prom = 0;
    for (var i = 0; i < arr.length; i++){
        sum = sum + arr[i];
        /* console.log(sum) */
    }
    prom = sum / arr.length;
    return prom;
}

console.log(promedio([1,3,5,7,20]));


/* Array de impares */
function arrayImp(){
    var arr = [];
    for (var x = 1; x < 50; x+=2){
        arr.push(x);
    }
    return arr;
}

console.log(arrayImp());


/* Mayor que Y */
function mayorQueY(arr, y){
    var contador = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > y){
            contador++;
        }
    }
    return contador;
}

console.log(mayorQueY([1,3,5,7], 3));


/* Cuadrados */
function cuadrados(arr) {
    var arr2 = [];
    for (var i = 0; i < arr.length; i++) {
        arr2.push(Math.pow(arr[i],2));
    }
    return arr2;
}

console.log(cuadrados([1,3,5,7]));


/* Negativos */
function sinNegativos(arr){
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            arr[i] = 0;
        }
    }
    return arr;
}

console.log(sinNegativos([1,5,10,-2]));


/* Max/Min/Avg */
function maxMinProm(arr){
    var max = Math.max.apply(null,arr);
    var min = Math.min.apply(null, arr);
    var prom = arr.reduce((a, b) => (a + b)) / arr.length;

    var arr2 = [];
    arr2.push(max);
    arr2.push(min);
    arr2.push(prom);
    
    return arr2;
}

console.log(maxMinProm([1,5,10,-2]));


/* Intercambia Valores */
function priYult(arr){
    var pri = (arr[0]);
    var ult = arr[arr.length-1];
    arr[arr.length-1] = pri;
    arr[0] = ult;

    return arr;
}

console.log(priYult([1,5,10,-2]));


/* De Número a String */
function negAdojo(arr){
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            arr[i] = "Dojo";
        }
    }
    return(arr);
}

console.log(negAdojo([-1,-3,2]));