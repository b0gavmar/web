function gimme (triplet) {
  return triplet.indexOf(triplet.concat().sort(function(a, b) { return a - b })[1])
}