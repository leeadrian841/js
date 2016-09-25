// long1
var words = ["hello", "what", "is", "up", "dude"]

function lengths(){
  var arrlength = []
  for (var i = 0; i < words.length; i++){
    var single = words[i].split(", ")
    for (var j = 0; j < single.length; j++){
      var count = single[j].length
      arrlength.push(count)
    }
  }
 return arrlength
}
lengths(words)

// long2
function transmogrifier(a, b, c){
  var result = Math.pow((a * b), c)
  return result
}
transmogrifier(5, 3, 2)
transmogrifier(13, 12, 5)
transmogrifier(42, 13, 7)

// long3
function wordReverse(str){
  var reversestr = str.split(" ").reverse().join(" ")
  return reversestr
}
wordReverse("Now I know what a TV dinner feels like")
wordReverse("Put Hans back on the line")

// short1
function maxofTwoNumbers(a, b){
  if (a > b) {
    return a
  } else {
    return b
  }
}
maxofTwoNumbers(7, 5)

// short2
function maxofThree(a, b, c){
  if ((a > b) && (a > c)) {
    return a
  } else if (b > c) {
    return b
  } else {
    return c
  }
}
maxofThree(4, 1, 7)

// short3
var isVowel = false
var vowels = ['a', 'e', 'i', 'o', 'u']

function isCharacterAVowel(str){
  for (var i = 0; i < vowels.length; i++) {
    console.log()
    if () {
      isVowel = true
    } else {
      isVowel = false
    }
  }
  return isVowel
}
isCharacterAVowel( 's' )

// short4
function sumArray([a,b,c,d]){
  var sum = a + b + c + d
  return sum
}
sumArray([1,2,3,4])

function multiplyArray([a,b,c,d]){
  var product = a * b * c * d
  return product
}
multiplyArray([1,2,3,4])

// short5

// short6
function reverseString(str){
  var rev = str.split('').reverse().join('')
  return rev
}
reverseString('jag testar')

// short7
var words = ["hello", "what", "is", "up", "dude"]

function findLongestWords(arr){
  var longestWordsLength = 0
  for (var i = 0; i < arr.length; i++){
    if (longestWordsLength < arr[i].length){
      longestWordsLength = arr[i].length
    }
  }
  return longestWordsLength
}
findLongestWords(words)

// short8
var words = ["hello", "what", "is", "up", "dude"]

function filterLongWords(){

}
filterLongWords()
