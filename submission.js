const findSum = function(array) {
  sum = array.reduce((acc, elem) => (acc + elem));
  return sum;
};

const findFrequency = function(arr) {
    let obj = {}
    //create an object that tracks how many instances there are of each letter
    for (const elem in arr){
      if (!(obj[String(arr[elem])])){
        obj[String(arr[elem])] = 1
      } else{
        obj[String(arr[elem])] = obj[String(arr[elem])] + 1
      }
   console.log(obj)
    }
    let most = obj[arr[0]];
    let least = obj[arr[0]];
    for (const i in arr){
      if(obj[arr[i]] > most){
        most = obj[arr[i]]
      }
      if(obj[arr[i]] < least){
        least = obj[arr[i]]
      }
    }
    let new_object = {most: 0, least:0}
    for (const elem in obj){
      if(obj[elem] == most){
        new_object.most = elem
      }
      if(obj[elem] == least){
        new_object.least = elem
      }
    }
  return new_object
};

const isPalindrome = function(str) {
 let array = string.split('')

  for(let i = 0; i < array.length/2; i++){
    if (array[i] != array[array.length - 1 - i]){
      return false
    }
  }
  return true
};

const largestPair = function(array) {
  let first = array[0];
  let second = array[1];
  product = first * second
  for (let i = 0; i < array.length -1; i ++){
    if (product < array[i]*array[i+1]){
      first = array[i]
      second = array[i+1]
      product = first*second
     
    }
  }
  return product
};

const removeParenth = function(str) {
    let array = string.split('')
  let newarray = []
  for (const elem in array){
    if ((array[elem] !== '(' && array[elem] !== ')')){
      newarray.push(array[elem])
    }
  }
  return newarray.join('')
};

const scoreScrabble = function(str) {
    scoresheet = {
    1: ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'],
    2: ['d','g'],
    3: ['b', 'c','m', 'p'],
    4: ['f','h','v','w','y'],
    5: ['k'],
    8: ['j','x'],
    10: ['q', 'z']
  }

  score = 0;

  string = string.split('')
  let number = 0;
  for (let i = 0; i < string.length; i++){ //for every letter in the string parameter given
    for (const elem in scoresheet){
      if(scoresheet[elem].includes(string[i])){
        number = number + Number(elem);
       
      }
    }
  }
  return number
};
