var app = new Vue({
    el: '#app',
    data: {
        textText: 'Hello Vue!',
        style1: {color: 'blue'},
        bpdyElement: ''

    },
    methods:{
      clickFunc: function () {
          console.log(this.textText + ' -- clickFunc!!');
          this.style1.color == 'blue' ? this.style1.color = 'red' : this.style1.color = 'blue';
          this.bodyElement = 'HAHAHA'


    }
    }
});