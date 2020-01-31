var app = new Vue({
    el: '#app',
    methods: {
        handleClick: function(event) {
            alert(event.target)
        }
    },
    data: {
        message: 'Hello Vue.js!',
        errShow: false,
        errMessage: 'ERRRRR!!!!!',
        count: 1,
        list: ['いちご','バナナ','りんご']
    }
})