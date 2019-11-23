
  
  var database = firebase.database();
  
  const result = document.getElementById("result-search");
  const find = document.getElementById("find");
  const name = document.getElementById("name_sea");
const price = document.getElementById("price_sea");
const quantity = document.getElementById("quantity_sea");
  find.addEventListener("click", function() {
    let search = document.getElementById("search").value;
    database.ref("Shop1/products/")
    .orderByChild("name")
    .equalTo(search)
    .on("child_added", function(snap) {
        name.innerHTML = JSON.stringify(snap.val().name, null, 3);
        price.innerHTML = JSON.stringify(snap.val().price, null, 3);
        quantity.innerHTML = JSON.stringify(snap.val().total, null, 3);
     });
  });