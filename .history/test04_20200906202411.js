function ff(jn){
    var jobj = jn;
    console.log(typeof jobj);

    var jarr = JSON.parse(jobj);

    console.log(typeof jarr[1]);
    // for(var i=0;i<jarr.length;i++){
    //     console.log('i: '+ jarr[i]);
    // }
}
ff({"1":123,"2":234,"8":456});