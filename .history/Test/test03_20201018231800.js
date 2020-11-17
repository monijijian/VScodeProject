var obj = {
    name: '轩辕Rowboat',
};
function original(a, b) {
    console.log('this', this); // original {}
    console.log('typeof this', typeof this); // object
    this.name = b;
    console.log('name', this.name); // 2
    console.log('this', this);  // original {name: 2}
    console.log([a, b]); // 1, 2
}
var bound = original.bind(obj, 1);
// var newBoundResult = new bound(2);
bound(2);
//console.log(newBoundResult, 'newBoundResult'); // original {name: 2}