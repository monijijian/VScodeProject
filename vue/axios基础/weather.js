var app = new Vue({
    el:"#app",
    data:{
        city:"",
        wealist:[],
    },
    methods:{
        sear:function(){
            console.log("sear hi "+this.city);
            //保存this
            var that = this;
            axios.get("http://wthrcdn.etouch.cn/weather_mini?city="+this.city)
            .then(function(res){
                // console.log(res);
                // console.log(res.data.data.forecast);
                that.wealist=res.data.data.forecast;
            },function(err){
                comsole.log(err);
            });
        }
    },
})