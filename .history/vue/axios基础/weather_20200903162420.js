var app = new Vue({
    el:"#app",
    methods:{
        sear:function(){
            console.log("sear hi "+this.city);
        }
    },
    data:{
        city:""
    }
})