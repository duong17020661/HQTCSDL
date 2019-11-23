




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
  const name_fas1 = document.getElementById("name_fas1");
    const price1_fas1 = document.getElementById("price_fas1");
    const quantity_fas1 = document.getElementById("quantity_fas1");
    const name_fas2 = document.getElementById("name_fas2");
    const price1_fas2 = document.getElementById("price_fas2");
    const quantity_fas2 = document.getElementById("quantity_fas2");
  const sel_fas = document.querySelector("#sel_fas"); 
      sel_fas.addEventListener("click", function(){
        database.ref("Shop1/products/").limitToFirst(2)
        .orderByChild("category_id")
        .equalTo(2)
        .once('value', function(snapshot) {
            var i=1;
            snapshot.forEach(function(snap) {

                if(i == 1){
                    name_fas1.innerHTML = JSON.stringify(snap.val().name, null, 3);
                    price1_fas1.innerHTML = JSON.stringify(snap.val().price, null, 3);
                    quantity_fas1.innerHTML = JSON.stringify(snap.val().total, null, 3);
                    }
                    else{
                        name_fas2.innerHTML = JSON.stringify(snap.val().name, null, 3);
                        price1_fas2.innerHTML = JSON.stringify(snap.val().price, null, 3);
                        quantity_fas2.innerHTML = JSON.stringify(snap.val().total, null, 3);
                    }
            i++;
            })
     });
    });
  // In ra danh sách nhân viên
  const nv1 = document.getElementById("nv1");
  const email1 = document.getElementById("email1");
  const job1 = document.getElementById("job1");
  const nv2 = document.getElementById("nv2");
  const email2 = document.getElementById("email2");
  const job2 = document.getElementById("job2");
  const add_emp = document.querySelector("#add_emp");
  add_emp.addEventListener("click", function(){
    firebase.database().ref('/Shop1/employees').limitToFirst(5).orderByKey().once('value', function(snapshot) {
        snapshot.forEach(function(snap) {
            if(snap.key == 1){
                nv1.innerHTML = JSON.stringify(snap.val().name, null, 3);
                email1.innerHTML = JSON.stringify(snap.val().email, null, 3);
                job1.innerHTML = JSON.stringify(snap.val().job, null, 3);
                }
                else{
                    nv2.innerHTML = JSON.stringify(snap.val().name, null, 3);
                    email2.innerHTML = JSON.stringify(snap.val().email, null, 3);
                    job2.innerHTML = JSON.stringify(snap.val().job, null, 3);
                }
          
          // ...
        });
      });
    
  })

  // In ra danh sách đơn hàng
  const hang1 = document.getElementById("hang1");
  const nguoi1 = document.getElementById("nguoi1");
  const dc1 = document.getElementById("dc1");
  const soluong1 = document.getElementById("soluong1")
  const hang2 = document.getElementById("hang2");
  const nguoi2 = document.getElementById("nguoi2");
  const dc2 = document.getElementById("dc2");
  const soluong2 = document.getElementById("soluong2")
  const add_ord = document.querySelector("#add_ord");
  add_ord.addEventListener("click", function(){
    firebase.database().ref('/Shop1/orders').limitToLast(2).orderByKey().once('value', function(snapshot) {
        var i=1;
        snapshot.forEach(function(snap) {
            var nguoi = snap.val().customer_id
            
            var hang = snap.val().product_id
            console.log(hang,nguoi)
            if(i == 1){
            database.ref("Shop1/products/"+hang)
            .on("value", function(snap) {
                
                hang1.innerHTML = JSON.stringify(snap.val().name, null, 3);
            });
            database.ref("Shop1/customers/"+nguoi)
            .on("value", function(snap) {
                console.log(snap.val())
                nguoi1.innerHTML = JSON.stringify(snap.val().name, null, 3);
            });
            database.ref("Shop1/orders_detail/"+snap.key)
            .on("value", function(snap) {
                console.log(snap.val())
                dc1.innerHTML = JSON.stringify(snap.val().address, null, 3);
                soluong1.innerHTML = JSON.stringify(snap.val().quantity, null, 3);
            });
        }
            else{
                database.ref("Shop1/products/"+hang)
                .on("value", function(snap) {
                    hang2.innerHTML = JSON.stringify(snap.val().name, null, 3);
                });
                database.ref("Shop1/customers/"+nguoi)
                .on("value", function(snap) {
                    nguoi2.innerHTML = JSON.stringify(snap.val().name, null, 3);
                });
                database.ref("Shop1/orders_detail/"+snap.key)
                .on("value", function(snap) {
                    dc2.innerHTML = JSON.stringify(snap.val().address, null, 3);
                    soluong2.innerHTML = JSON.stringify(snap.val().quantity, null, 3);
                });
                }        
          i++;
        });
      });
  })
//WRITE
// INSERT - Đặt hàng(Thêm các thông tin vào bảng order, order_detail, customer)

// UPDATE - Đặt hàng(Thay đổi quantity trong products)

// DELETE - Đặt hàng(Xóa nhân viên, xóa đơn hàng)
