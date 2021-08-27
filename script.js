
let frutas = ["maçã", "uva", "pera"];

function newForEach(array, callback) {
   for(let i = 0; i < array.length; i++) {
       callback(array[i], i, array);
   }   
}

/*newForEach(frutas, (item) =>{
    console.log(item)
})*/

/* -------------------------------------------------*/

function newMap(array, callback) {
    let arr = []
    for(let i = 0; i < array.length; i++) {
        arr[i] = callback(array[i], i, array);
    }
    return arr
}

/*newMap(frutas, (item) =>{
    item = 'bananinha'
    console.log(item)
})*/

/* -------------------------------------------------*/

function newFill(array, valor, inicio = 0, fim) {
   if(fim == undefined){
       for(let i = inicio; i < array.length; i++){
            array[i] = valor
       }
   }else{
        for(let i = inicio; i < fim; i++){
            array[i] = valor
        }
   }
   return array
}
//console.log(newFill(frutas, 4, 1, 2))


/* -------------------------------------------------*/


function newFind(array, cond, valor) {
    for(let i = 0; i < array.length; i++) {
        if(cond == '>'){
            if(array[i] > valor){
                return array[i]
            }
        }else if(cond == '>='){
            if(array[i] >= valor){
                return array[i]
            }
        }else if(cond == '<='){
            if(array[i] <= valor){
                return array[i]
            }
        }else if(cond == '<'){
            if(array[i] < valor){
                return array[i]
            }
        }else if(cond == '!='){
            if(array[i] != valor){
                return array[i]
            }
        }else if(cond == '=='){
            if(array[i] == valor){
                return array[i]
            }
        }else if(cond == '==='){
            if(array[i] === valor){
                return array[i]
            }
        }else if(cond == '!=='){
            if(array[i] !== valor){
                return array[i]
            }
        }
    }
    return undefined
}

//console.log(newFind([1,2,3,4,5], '>', 3))


function newFindIndex(array, cond, valor) {
    for(let i = 0; i < array.length; i++) {
        if(cond == '>'){
            if(array[i] > valor){
                return i
            }
        }else if(cond == '>='){
            if(array[i] >= valor){
                return i
            }
        }else if(cond == '<='){
            if(array[i] <= valor){
                return i
            }
        }else if(cond == '<'){
            if(array[i] < valor){
                return i
            }
        }else if(cond == '!='){
            if(array[i] != valor){
                return i
            }
        }else if(cond == '=='){
            if(array[i] == valor){
                return i
            }
        }else if(cond == '==='){
            if(array[i] === valor){
                return i
            }
        }else if(cond == '!=='){
            if(array[i] !== valor){
                return i
            }
        }
    }
    return -1
}


function newFilter(array, cond, valor) {
    let arr = []
    for(let i = 0; i < array.length; i++) {
        if(cond == '>'){
            if(array[i] > valor){
                arr.push(array[i])
            }
        }else if(cond == '>='){
            if(array[i] >= valor){
                arr.push(array[i])
            }
        }else if(cond == '<='){
            if(array[i] <= valor){
                arr.push(array[i])
            }
        }else if(cond == '<'){
            if(array[i] < valor){
                arr.push(array[i])
            }
        }else if(cond == '!='){
            if(array[i] != valor){
                arr.push(array[i])
            }
        }else if(cond == '=='){
            if(array[i] == valor){
                arr.push(array[i])
            }
        }else if(cond == '==='){
            if(array[i] === valor){
                arr.push(array[i])
            }
        }else if(cond == '!=='){
            if(array[i] !== valor){
                arr.push(array[i])
            }
        }
    }
    return arr
}

//console.log(newFilter([1,2,3,4,5,6,7,8,9,10], '>', 2))


    function newEvery(array, cond, valor){
        let arr = []
        for(let i = 0; i < array.length; i++) {
            if(cond == '>'){
                if(array[i] > valor){
                    arr.push(array[i])
                }
            }else if(cond == '>='){
                if(array[i] >= valor){
                    arr.push(array[i])
                }
            }else if(cond == '<='){
                if(array[i] <= valor){
                    arr.push(array[i])
                }
            }else if(cond == '<'){
                if(array[i] < valor){
                    arr.push(array[i])
                }
            }else if(cond == '!='){
                if(array[i] != valor){
                    arr.push(array[i])
                }
            }else if(cond == '=='){
                if(array[i] == valor){
                    arr.push(array[i])
                }
            }else if(cond == '==='){
                if(array[i] === valor){
                    arr.push(array[i])
                }
            }else if(cond == '!=='){
                if(array[i] !== valor){
                    arr.push(array[i])
                }
            }
        }


        if(arr.length == array.length){
            return true
        }else{
            return false
        }

    }

    //console.log(newEvery([1,2,3,4,5,6,7,8,9,10], '>', 0))


function newConcat(array1,array2) {
    arr = array1
    for(let i = 0; i < array2.length; i++){
        arr.push(array2[i])
    }
    return arr
}

//console.log(newConcat([1,2,3], ['a','b','c']))

function newIncludes(array, searchElement){
    for(let i = 0; i < array.length; i++){
        if(array[i] == searchElement){
            return true
        }
    }
    return false
}
//console.log(newIncludes([1,2,3,4,5], 5))



function newJoin(array, separador = ''){
    let string = ''
    for(let i = 0; i < array.length; i++){
        if(i < array.length - 1){
            string += array[i] + separador
        }else{
            string += array[i]
        } 
    }
    return string
}

//console.log(newJoin(['abacate', 'é', 'bom'], ' '))

function newReduce(array,callback){
    let acumulador

    if(typeof(array[0]) == 'number'){
        acumulador = 0
    }else{
        acumulador = ''
    }

    for(let i = 0; i < array.length; i++){
        acumulador += array[i]
        callback(acumulador,array[i])
    }
    return acumulador
}

/*console.log(newReduce([1,2,3,4,5], (a,b) => {
    a += b
}))*/



function newSlice(array,inicio, fim){
    let arr = []
    if(fim == undefined){
        for(let i = inicio; i < array.length; i++){
             arr.push(array[i])
        }
    }else{
         for(let i = inicio; i < fim; i++){
            arr.push(array[i])
        }
    }
    return arr
}

//console.log(newSlice([1,2,3,4,5,6], 1,4))


function newFlat(array){
    let arr = []
    for(let i = 0; i < array.length; i++){
        if(typeof(array[i]) == 'object'){
            for(let j = 0; j < array[i].length; j++){
               
                if(typeof(array[i][j]) == 'object'){
                    for(let d = 0; d < array[i][j].length; d++){
                        arr.push(array[i][j][d])
                    }
                }else{
                    arr.push(array[i][j])
                }
            }
        }else{
            arr.push(array[i])
        }
    }
    return arr
}

//console.log(newFlat([1,2,[3,4]]))


function newArrayOf(array){
    return array
}

console.log(newArrayOf([7]))
