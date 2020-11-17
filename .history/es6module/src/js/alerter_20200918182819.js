export let alerter = {
    massage: 'alerter.js',
    bar(dataSource) {
        console.log(this.massage, dataSource.getMsg());
    }
}