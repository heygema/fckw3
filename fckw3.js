/*
Just Hide w3schools results from search query.
*/
for (let item of document.getElementsByTagName("a")) {
  if (item.href.includes("w3school")) {
    item.parentNode.parentNode.hidden = true;
  }
}
