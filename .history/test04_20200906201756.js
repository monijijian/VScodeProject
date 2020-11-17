function ff(jn){
    var jobj = jn;

    var jarr = JSON.parse(jobj);

    for(var i=0;i<jarr.length;i++){
        console.log('i: '+ jarr[i]);
    }
}