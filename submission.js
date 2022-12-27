const findSum = function(array) {
  sum = array.reduce((acc, elem) => (acc + elem));
  return sum;
};

const findFrequency = function(array) {
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
  // your code here - don't forget to return a boolean!
};

const largestPair = function(array) {
  // your code here - don't forget to return a number!
};

const removeParenth = function(str) {
  // your code here - don't forget to return a string!
};

const scoreScrabble = function(str) {
  // your code here - don't forget to return a number!
};
