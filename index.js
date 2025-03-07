function receivesAFunction(callback){
    callback();
}
function returnsANamedFunction(){
    function named(){
        console.log("this if from named function");
    }
    return named;
}
function returnsAnAnonymousFunction(){
    return function(){
        console.log("This is from anonymous function");
    }
}