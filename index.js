function receivesAFunction(callBack){
    callBack();
}
receivesAFunction( () => console.log('call back functions'));

function returnANamedFunction(){
    return callback();
}
console.log(returnANamedFunction());

function returnsAnAnonymousFunction(){
    console.log('anonymous')
}
returnsAnAnonymousFunction()