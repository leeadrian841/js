function maxofThree (a, b, c) {
  if ((a > b) && (a > c)) {
    console.log('The biggest number is ' + a)
  } else if (b > c) {
    console.log('The biggest number is ' + b)
  } else {
    console.log('The biggest number is ' + c)
  }
}

maxofThree(4, 1, 7)
