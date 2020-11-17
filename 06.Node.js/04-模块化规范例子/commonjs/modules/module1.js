module.exports = {
    name:'我是module1',
    foo(){
        console.log(this.name);
    }
}
//使用这个就不能再写module.exports = xxx 。 会覆盖之前的值
