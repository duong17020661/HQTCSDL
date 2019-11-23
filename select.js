const ho = document.querySelector("#ho");
const ten = document.querySelector("#ten");
const tuoi = document.querySelector("#tuoi");
const diachi = document.querySelector("#diachi");
const email = document.querySelector("#email");
const soluong = document.querySelector("#soluong");
const add = document.querySelector("#dathang");

(function() {
  var firebaseConfig = {
  apiKey: "AIzaSyCHTKfa_smeBgUi5BQep0u6-aYZLf4c4Q4",
  authDomain: "test-8f194.firebaseapp.com",
  databaseURL: "https://test-8f194.firebaseio.com",
  storageBucket: "test-8f194.appspot.com",
};

firebase.initializeApp(firebaseConfig);

var db = firebase.database();
var pd1 = db.ref('Shop1/products').child('1');
var pd2 = db.ref('Shop1/products').child('2');

// READ
// SELECT - In ra vài món hàng trong product - In ra các đơn hàng - In ra các Feedback
  // In ra vài món hàng
const name1 = document.getElementById("name1");
const price1 = document.getElementById("price1");
const quantity1 = document.getElementById("quantity1");
pd1.on('value', snap=> {
  name1.innerHTML = JSON.stringify(snap.val().name, null, 3);
  price1.innerHTML = JSON.stringify(snap.val().price, null, 3);
  quantity1.innerHTML = JSON.stringify(snap.val().total, null, 3);
  var fb1 = db.ref('Shop1/feedbacks').child('1');
  fb1.on('value', snap=> {
  feedback1.innerHTML = JSON.stringify(snap.val().customer_id, null, 3);
});
});

const name2 = document.getElementById("name2");
const price2 = document.getElementById("price2");
const quantity2 = document.getElementById("quantity2");
pd2.on('value', snap=> {
  name2.innerHTML = JSON.stringify(snap.val().name, null, 3);
  price2.innerHTML = JSON.stringify(snap.val().price, null, 3);
  quantity2.innerHTML = JSON.stringify(snap.val().total, null, 3);
});
  // In ra món hàng trong một thể loại
const name = document.getElementById("name1");
const price = document.getElementById("price1");
const quantity = document.getElementById("quantity1");
  // In ra danh sách nhân viên
  // In ra danh sách đơn hàng
//WRITE
// INSERT - Đặt hàng(Thêm các thông tin vào bảng order, order_detail, customer)

// UPDATE - Đặt hàng(Thay đổi quantity trong products)

// DELETE - Đặt hàng(Xóa nhân viên, xóa đơn hàng)
}());