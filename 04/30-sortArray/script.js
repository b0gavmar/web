// input: names - unsorted strings
// output: case-agnostic sort
sortme = function( names ){
  return names.sort(function(a, b) {
    return a.toUpperCase().localeCompare(b.toUpperCase())
  })
}
