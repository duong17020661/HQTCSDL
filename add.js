

 

  (function() {
    var firebaseConfig = {
    apiKey: "AIzaSyCHTKfa_smeBgUi5BQep0u6-aYZLf4c4Q4",
    authDomain: "test-8f194.firebaseapp.com",
    databaseURL: "https://test-8f194.firebaseio.com",
    storageBucket: "test-8f194.appspot.com",
  };

  firebase.initializeApp(firebaseConfig);
  const ten = document.querySelector("#ten");
  const tuoi = document.querySelector("#tuoi");
  const diachi = document.querySelector("#diachi");
  const soluong = document.querySelector("#soluong");
  var database = firebase.database();
  function writeCusData(userId, name, age) {
    firebase.database().ref('Shop1/customers/' + userId).set({
      name: name,
      age: age
    });
  }
  function writeOrdData(userId, cus_id, pro_id) {
    firebase.database().ref('Shop1/orders/' + userId).set({
      customer_id: cus_id,
      product_id: pro_id
    });
  }
  function writeODData(userId, quantity, address, ord_id) {
    firebase.database().ref('Shop1/orders_detail/' + userId).set({
      quantity: quantity,
      address: address,
      order_id: ord_id
    });
  }
 
  const add = document.querySelector("#dathang1");
  add.addEventListener('click', function(){
    database.ref('Shop1/orders').orderByKey().limitToLast(1).once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        const ord_id = parseInt(childSnapshot.key)
        database.ref("Shop1/customers/").orderByKey().limitToLast(1)
          .once('value', function(snapshot) {
          snapshot.forEach(function(childSnapshot) {
                console.log(ord_id, childSnapshot.key)
                const cus_id = parseInt(childSnapshot.key)
                 writeOrdData(ord_id+1,cus_id+1,1)
                 writeCusData(cus_id+1,ten.value,tuoi.value)
                writeODData(ord_id+1,soluong.value,diachi.value,ord_id+1)
            });
          });
      });
    });
    
  })
 // writeOrdData(ord_id+1,cus_id+1,1)
   // writeCusData(cus_id+1,ten,tuoi)
    //writeODData(ord_id+1,soluong,diachi,ord_id+1)
//WRITE
  // INSERT - Đặt hàng(Thêm các thông tin vào bảng order, order_detail, customer)

  // UPDATE - Đặt hàng(Thay đổi quantity trong products)

  // DELETE - Đặt hàng(Xóa nhân viên, xóa đơn hàng)
}());