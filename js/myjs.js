/**
 * Created by zhangyachao on 2017/4/5.
 */
var vm = new Vue({
    el:"#content",
    data:{
       title:"hello vue"
    },
   mounted: function () {
            this.cartview();

    },
    methods:{
        cartview: function(){
            this.title = "qqqq";
        }
    }

});