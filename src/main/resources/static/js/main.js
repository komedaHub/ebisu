var app = new Vue({
    el: '#app',
    methods: {
        handleClick: function(event) {
            alert(event.target)
        },
        checkMsg: function(event) {
            if (event.target.value === "123") {
                alert('error')
            } else {
                this.message = event.target.value
            }
        },
        increment: function() {
            this.count += 1
        },
        doAdd: function() {
            var max = this.monsterList.reduce(function(a,b){
                return a > b.id ? a : b.id
            }, 0)
            this.monsterList.push({
                id: max + 1,
                name: this.name,
                hp: 500
            })
        },
        doRemove: function(index) {
            this.monsterList.splice(index, 1)
        }
    },
    data: {
        message: 'Hello Vue.js!',
        scroll: 0,
        textColor: 'red',
        isInfo: true,
        areaShow: true,
        radius: 50,
        errShow: false,
        errMessage: 'ERRRRR!!!!!',
        count: 1,
        flag: true,
        memo: '',
        power: 5,
        colorVal: '',
        hobby: ['01','02'],
        list: ['いちご','バナナ','りんご'],
        monsterList: [
            { id: 1, name: 'スライム', hp: 100 },
            { id: 2, name: 'ドラキー', hp: 150 },
            { id: 3, name: 'ブラウニー', hp: 200 }
        ],
        name: 'aaa',
        lastName: '',
        firstName: '',
        sex: '',
        email: ''
    },
    created: function() {
        axios.get("./list.json").then(function(response) {
            this.list = response.data
        }.bind(this)).catch(function(e) {
            console.error(e)
        })
    }
})