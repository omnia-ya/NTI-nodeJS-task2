const yargs = require('yargs');
const chalk = require('chalk');
const myMethods = require('./myFunction.js');
const { argv } = require('yargs');
yargs.command({
    command:'addCustomer',
    builder:{
        name:{
            type:'string',
            demandOption:true
        },
        balance:{
            type:'string',

        }
    },
    handler:function(argv){
        let customer = {name: argv.name,
            balance: argv.balance
        }
        myMethods.addNewCustomer(customer)
    }
})
yargs.command({
    command:'showCustomer',
    
    handler:function(){
        myMethods.showAll(customer)
    }
})
yargs.command({
    command:'addBalance',
    handler:function(){
        console.log('addB')
    }
})
yargs.command({
    command:'deleteCustomer',
    builder:{
        name:{
            type:'string',
            demandOption:true
        }
    },
    handler:function(argv){
      myMethods.deleteCustomer(argv.name)  
    }
})
yargs.argv