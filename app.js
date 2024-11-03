let arr = [5,10,15,20,25,30,35,40,45,50];
/*------------------------------------For first question--------*/
function getFirstElements(array,n){
    elements = [];
    for(let i=0; i<n; i++){
        elements.push((array[i]));
    }
    return elements
}
console.log(`First 3 elements of arr:`, ...getFirstElements(arr,3)); // Use spread inside console.log()
console.log(`First 5 elements of arr ${JSON.stringify(getFirstElements(arr,5))}`);

/*------------------------------------For second question--------*/
function getLastElements(array,n){
    elements = [];
    for(let i=1; i<=n; i++){
        elements.unshift((array[array.length-i]));
    }
    return elements
}
console.log(`Last 4 elements of arr ${JSON.stringify(getLastElements(arr,4))}`);
console.log(`Last 6 elements of arr:`, ...getLastElements(arr,6));   // Use spread inside console.log()

/* -----------------------------------------------for third Question-----------*/
function isBlank(str){
    let ans;
    if(str.length==0){
        return true
    }else{
        return false
    }
}
let name = "Ankush Yadav";
console.log(`Is name (${name}) is a Blank string ? : ${isBlank(name)}`);

/* -----------------------------------------------for Fourth Question-----------*/

function isLowerCase(str,index){
    let ans;
    if(str.charAt(index)>= 'a' && 'z' >= str.charAt(index)){
        return true
    }else{
        return false
    }
}

/*--------------------------------------------------for fifth Question---------- */
//we can use trim method

/* -----------------------------------------------for sixth Question-----------*/
function isExists(element,array){
    let index = array.indexOf(element);
    if(index != -1){
        return true
    }else{
        return false
    }
}