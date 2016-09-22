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
function maxofThree (a, b, c) {
  if ((a > b) && (a > c)) {
    return a
  } else if (b > c) {
    return b
  } else {
    return c
  }
}

maxofThree(4, 1, 7)
