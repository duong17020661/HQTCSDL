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


//WRITE
  // INSERT - Đặt hàng(Thêm các thông tin vào bảng order, order_detail, customer)

  // UPDATE - Đặt hàng(Thay đổi quantity trong products)

  // DELETE - Đặt hàng(Xóa nhân viên, xóa đơn hàng)
}());