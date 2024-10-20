
//customer array
let customer_array = [];

let loadCustomerTable = () => {
    $("#customerTableBody").empty();

    customer_array.map((customer, index) => {
        console.log(customer);
        let data = `<tr><td>${customer.first_name}</td><td>${customer.last_name}</td><td>${customer.mobile}</td><td>${customer.email}</td><td>${customer.address}</td></tr>`


        $("#customerTableBody").append(data);

    });
}


$("#customer_add_button").on("click",function () {
    console.log("click add customer button")

    let fname = $("#firstName").val();
    let lname = $("#lastName").val();
    let mobile = $("#mobile").val();
    let email = $("#email").val();
    let address = $("#address").val();

    console.log(fname,lname,mobile,email,address);

    //create table row
   /* let data = `<tr><td>${fname}</td><td>${lname}</td><td>${mobile}</td><td>${email}</td><td>${address}</td></tr>`

    $("#customerTableBody").append(data) ;*/

    function generated_id(){
        return customer_array.length +1;
    }

    let customer = {
        id: generated_id,
        first_name: fname,
        last_name: lname,
        mobile:mobile,
        email: email,
        address: address

    }

    customer_array.push(customer)

    loadCustomerTable();



})
