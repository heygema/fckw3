/*
Just Hide w3schools results from search query.
*/

var w3 = "w3scho";
var w3pattern = /(w3schoo)/gi;
var w3spattern = /(w3schools)/gi;

var currentPath = window.location.href;

if (w3pattern.test(currentPath) || w3spattern.test(currentPath)) {
  var newPath = currentPath.replace(w3pattern, "__this_one__");
  var newPath = currentPath.replace(w3spattern, "__this_one__");
  newPath = newPath.split("__this_one__").join("mozilla+mdn");
  window.location.href = newPath;
}

for (let item of document.getElementsByTagName("a")) {
  if (
    item.href.includes(w3) ||
    w3pattern.test(item.href) ||
    w3spattern.test(item.href)
  ) {
    item.parentNode.parentNode.hidden = true;
  }
}
