const myFs = require('fs')
const readFile = function(){
    try{
        customers = JSON.parse(myFs.readFileSync('customers.json').toString())
    }
    catch(e){
        customers = [ ]
    }
    return customers
}
// myFs.writeFileSync('customers.json',JSON.stringify(customers))
// const data = myFs.readFileSync('customers.json')
// console.log(JSON.parse(data.toString()))
const addNewCustomer = function(customer){
    try{
        customers = JSON.parse(myFs.readFileSync('customers.json').toString())
    }
    catch(e){
        customers = [ ]
    }
    customers.push(customer)
    myFs.writeFileSync('customers.json', JSON.stringify(customers))
    console.log(customers)
}
const showAll = function(){
    customers = readFile()
    customers.forEach(customer => {
        console.log(`customer name: ${customer.name} and balance is ${customer.balance}`)
    })
}
const deleteCustomer = function(customerName){
    let customers = readFile()
    index = customers.findIndex(customer=>{
        return customer.name == customerName
    })
    if(index == 1) console.log('customer not found')
    else {
        customers.splice(index,1)
    myFs.writeFileSync('customers.json',JSON.stringify(customers))
    console.log('deleted')
    }
    // console.log(index)
    

}
module.exports = {addNewCustomer, showAll, deleteCustomer}
