function drink( s ,  x ,  y ) {
    // write code here

    let bushu = 0;
    let need = x;
    const zui = y;
    let jihe = {};

    for(let j=0;j<s.length;j++){

        for(let i = j; i < s.length;i++){
            bushu++;
    
            if(zui > s[i]){
                need = need -s[i];
            }else{
                need = need - zui;
            }
    
            if(need <= 0 ){
                jihe.a
            }
        }
    }
    
}