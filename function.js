// long1
function lengths(){

}
// long2


// long3
function wordReverse(str){
  var reversestr = str.split(" ").reverse().join(" ")
  return reversestr
}

wordReverse("Now I know what a TV dinner feels like")
wordReverse("Put Hans back on the line")

// short1
function maxofTwoNumbers (a, b) {
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

function isCharacterAVowel (str) {
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

// short5

// short6
function reverseString (str) {
  var rev = str.split('').reverse().join('')
  return rev
}

reverseString('jag testar')

// short7
function findLongestWords (arr) {
  var longestWordsLength = 0
  for (var i = 0; i < arr.length; i++) {
    arr[i]
    arr[i].length
    if ( longestWordsLength < arr[i].length ) {
      longestWordsLength = arr[i].length
    }
  }
  return longestWordsLength
}

findLongestWords()

// short8
