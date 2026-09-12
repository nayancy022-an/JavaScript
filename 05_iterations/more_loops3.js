const coding = ['JavaScript', 'Python', 'C++', 'Java', 'Ruby'];


coding.values =  coding.forEach( (item) => {
    console.log(item);
    return item
})

console.log(values);  //=> undefined because forEach does not return anything, it just iterates over the array and executes the callback function for each element.