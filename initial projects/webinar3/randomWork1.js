var myDogs = [
    {
        name: "Dexter",
        age: 3
    },
    {
        name: "Ted",
        age: 7
    }
];

myDogs.forEach(function(dog){
    console.log(dog.name + ' is ' + dog.age + ' years old.'); 
});