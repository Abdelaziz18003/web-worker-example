self.onmessage = function (event) {
  let sum = calculateSum(event.data)
  self.postMessage(sum)
}

function calculateSum (number) {
  let sum = 0
  for (let i = 0; i <= number; i++) {
    sum += i;
  }
  return sum
}