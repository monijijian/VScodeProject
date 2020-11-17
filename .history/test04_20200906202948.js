function ff(jn){
    var jobj = jn;
    var a = JSON.stringify(jobj);
    console.log(isArray(jobj));
    console.log(typeof a);

    // var jarr = JSON.parse(jobj);

    // console.log(typeof jarr[1]);
    // for(var i=0;i<jarr.length;i++){
    //     console.log('i: '+ jarr[i]);
    // }
}
ff({"1":123,"2":234,"8":456});