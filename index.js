const arr1=[3,7,34,90,12];
console.log(arr1);
const last = arr1[arr1.length -1];
console.log(last);



const arr2 = [true, "green", "where", 12, 56];
console.log(arr2);
const last_element = arr2[arr2.length -1];
console.log(last_element);



let myPets = ["cow", "Bird", "Snake", "Dog"];
console.log(myPets);
let joined = myPets.join();
console.log(joined);



var arr3 = [-5,9,5,3,2,-3,6,8,4,1];
console.log(arr3);
arr3.sort();
console.log(arr3);



const arr4 = ["boy", "man", "girl", "school", "girl", "woman"];
const newArray = [...new Set(arr4)];
let duplicatesArray = arr4.filter((item, index) => arr4.indexOf(item) !== index);
console.log("Array without duplicates:", newArray);
console.log("Array with duplicates only:", [...new Set(duplicatesArray)]);




let arr5=["the", "way", "x", 4];
let searchWord = "food";
if (arr5.includes(searchWord)) {
    console.log(searchWord);
} else {
    console.log("The search word was not found.");
}



let word = "renniw";
let sortedWord = word.split('').sort().join('');
console.log(sortedWord);


let fruits = ["Apple", "Banana","Pinapple", "Grape", "Kiwi", "Lemon", "Cherry", "Mango", "Watermelon", "Orange"];
fruits.splice(5,0, "Tomato");
console.log(fruits);






