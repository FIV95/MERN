setTimeout
(
    function()
    {
        console.log(`end`);
    },
    3000
);

console.log('start')
//
//
//
//
const exampleFunction = function(message)
{
    console.log(message);
};


function parentFunction (callback)
{
    callback("information from the parent function");
}



// * cleaning it up

parentFunction
(
    function
    (message)
    {
        console.log(message);
    }
);

parentFunction(exampleFunction);