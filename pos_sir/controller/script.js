

/*//export use karanawanan mehema import karanna ona -
import {CustomerModel} from "./models/customerModel.js"*/

//export default nan mehema import karanna
import CustomerModel from "../models/customerModel.js";
import {customer_array} from "../db/database.js";

// customer array
//let customer_array = [];

let customerArray_index;


const loadCustomerTable = () => {
    $("#customerTableBody").empty();
    customer_array.map((item, index) => {
        console.log(item);
        let data = `<tr><td>${item.first_name}</td><td>${item.last_name}</td><td>${item.mobile}</td><td>${item.email}</td><td>${item.address}</td></tr>`
        $("#customerTableBody").append(data);
    })
}

const validEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);

}

const validMobile = (mobile) => {
    const sriLankanMobileRegex = /^(?:\+94|0)?7[0-9]{8}$/;
    return sriLankanMobileRegex.test(mobile);
}



/*const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const sriLankanMobileRegex = /^(?:\+94|0)?7[0-9]{8}$/;*/



// Add Customer Button
$("#customer_add_btn").on("click", function() {

    let first_name = $('#firstName').val();
    let last_name = $('#lastName').val();
    let mobile = $('#mobile').val();
    let email = $('#email').val();
    let address = $('#address').val();

  /*  if (first_name !== "" && last_name !== "" && mobile !== "" && email !== "" && address !== ""){
        console.log("first_name: ", first_name);
        console.log("last_name: ", last_name);
        console.log("mobile: ", mobile);
        console.log("email: ", email);
        console.log("address: ", address);

        let customer = {
            id: customer_array.length + 1,
            first_name: first_name,
            last_name: last_name,
            mobile: mobile,
            email: email,
            address: address
        };

        customer_array.push(customer);
        $('#firstName').val("");
        $('#lastName').val("")
        $('#email').val("");
        $('#mobile').val("");
        $('#address').val("");

        loadCustomerTable();
    }else{
        alert("Field is empty.")
    }*/



    if(first_name.length === 0 ){
        Swal.fire({
            title: 'Error!',
            text: 'Emty field name',
            icon: 'error',
            confirmButtonText: 'Cool'
        })
    }else if(last_name.length === 0){
        Swal.fire({
            title: 'Error!',
            text: 'Emty field name',
            icon: 'error',
            confirmButtonText: 'Cool'
        })
    }else if(validEmail(email)){
        Swal.fire({
            title: 'Error!',
            text: 'Emty field name',
            icon: 'error',
            confirmButtonText: 'Cool'
        })
    }else if(validMobile(mobile)){
        Swal.fire({
            title: 'Error!',
            text: 'Emty field name',
            icon: 'error',
            confirmButtonText: 'Cool'
        })
    }else if(mobile.length === 0){
        Swal.fire({
            title: 'Error!',
            text: 'Emty field name',
            icon: 'error',
            confirmButtonText: 'Cool'
        })
    }else{
        console.log("first_name: ", first_name);
        console.log("last_name: ", last_name);
        console.log("mobile: ", mobile);
        console.log("email: ", email);
        console.log("address: ", address);

        /*let customer = {
            id: customer_array.length + 1,
            first_name: first_name,
            last_name: last_name,
            mobile: mobile,
            email: email,
            address: address
        };*/

        let customer = new CustomerModel(customer_array.length + 1, first_name, last_name, mobile, email,address);

        customer_array.push(customer);
        $('#firstName').val("");
        $('#lastName').val("")
        $('#email').val("");
        $('#mobile').val("");
        $('#address').val("");

        loadCustomerTable();
    }



    // clean customer form




    // // create table row
    // let data = `<tr><td>${first_name}</td><td>${last_name}</td><td>${mobile}</td><td>${email}</td><td>${address}</td></tr>`
    // $("#customerTableBody").append(data);
});


$('#customerTableBody').on('click', 'tr', function () {
    // get tr index
   customerArray_index= $(this).index();

    // get customer object by index
    let customer_obj = customer_array[customerArray_index];

    // get customer's data
    let first_name = customer_obj.first_name;
    let last_name = customer_obj.last_name;
    let email = customer_obj.email;
    let mobile = customer_obj.mobile;
    let address = customer_obj.address;

    // fill data into the form
    $('#firstName').val(first_name);
    $('#lastName').val(last_name);
    $('#email').val(email);
    $('#mobile').val(mobile);
    $('#address').val(address);
});

//update customer

$("#customer_update_btn").on('click',function (){

    // get customer's data
    let first_name = $('#firstName').val()
    let last_name = $('#lastName').val()
    let email = $('#email').val();
    let mobile = $('#mobile').val();
    let address = $('#address').val();

    /*let customer = {
        id: customer_array[customerArray_index].id,
        first_name: first_name,
        last_name: last_name,
        mobile: mobile,
        email: email,
        address: address
    };*/

    let customer = new CustomerModel(customer_array[customerArray_index].id, first_name, last_name, mobile, email, address);


    // get customer object by index
    customer_array[customerArray_index] = customer;

    loadCustomerTable();

})

$("#customer_delete_btn").on('click', function (){
    //
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            customer_array.splice(customerArray_index,1);
            loadCustomerTable();
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
        }
    });




})