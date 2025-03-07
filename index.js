function receivesAFunction(callBack){
    callBack();
}
receivesAFunction( () => console.log('call back functions'));

function returnANamedFunction(){
    return callback();
}
console.log(returnANamedFunction());

function returnsAnAnonymousFunction(){
    return function(){
        console.log("This is from anonymous function");
    }
}