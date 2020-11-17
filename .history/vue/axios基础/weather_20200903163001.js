var app = new Vue({
    el:"#app",
    data:{
        city:""
    },
    methods:{
        sear:function(){
            console.log("sear hi "+this.city);

            axios.get("http://wthrcdn.etouch.cn/weather_mini?city="+this.city)
            .then(function(res){
                // console.log(res);
                console.log(res.data.data.forecast)
            },function(err){
                comsole.log(err);
            });
        }
    },
})