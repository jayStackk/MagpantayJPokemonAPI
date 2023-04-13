// Using Local Storage from the Local Storage lecture week! Copy pasted some from the lecture but added more. 



function RemoveFromLocalStorage(name){
    let nameIndex = newArray.indexOf(name);
    //found nameIndex in array names
    newArray.splice(nameIndex,1);
    SaveToLocalStorage();
}

let newArray = [];

function SaveToLocalStoragebybtn(name){
    newArray.push(name)
    localStorage.setItem('Names',JSON.stringify(newArray));
}
function SaveToLocalStorage(name){
    localStorage.setItem('Names',JSON.stringify(newArray));
}


function getLocalStorage(){
    const localStorageItem = localStorage.getItem('Names');
    newArray = JSON.parse(localStorageItem);
    localStorageItem != null ?  newArray = JSON.parse(localStorageItem) : newArray = [];
    return newArray;
}
export {newArray, RemoveFromLocalStorage, getLocalStorage, SaveToLocalStoragebybtn, SaveToLocalStorage}