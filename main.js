javascriptFunctions
some helpful javascript functions

//to make a word Uppercase

var toUpperCase = param => param[0].toUpperCase()+param.slice(1,param.length);

/*   Here's some useful functions to convert / extract dictionaries to / from arrays  */


var testArray = ["one","two","three","apple","banana"];
var testDict = {one:"one",two:"two",three:3,four:"lalala"};

function makeArrayADictionaryOfValues(array) {
    var dictionary = {};

    for (var x in array) {
        dictionary[x] = array[x];
    }//for

    return dictionary;
}//makeArrayADictionaryOfValues

//console.log(makeArrayADictionaryOfValues(testArray))

function makeArrayADictionaryOfKeys(array) {
    var dictionary = {};
    for (var x in array) {
        dictionary[array[x]] = null;
    }
    return dictionary;
}//makeArrayADictionaryOfKeys

//console.log(makeArrayADictionaryOfKeys(testArray))


function makeDictionaryKeysAnArray(dictionary) {
    var newArray = [];
    for (var x in dictionary) {
        newArray.push(x);
    }
    return newArray;
}//makeDictionaryKeysAnArray

//console.log(makeDictionaryKeysAnArray(testDict));



function makeDictionaryValuesAnArray(dictionary) {
    var newArray = [];
    for (var x in dictionary) {
        newArray[x] = dictionary[x];
    }
    return newArray;
}//makeDictionaryValuesAnArray

//console.log("the new array is: "+makeDictionaryValuesAnArray(testDict));
