// グローバル
Vue.component('global_component', {
    template : '<p>global component</p>'
})
// ローカル
var localComponent = {
    template: '<p>localcomponent</p>'
}
var app = new Vue({
    el: '#app',
    components: {
        'local-component': localComponent
    },
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
        price: 100,
        filterHp: 999,
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
        email: '',
        limit: 10,
        order: false,
        current: '',
        topics: [
            { value: 'vue', name: 'Vue.js' },
            { value: 'jQuery', name: 'jQuery' },
        ],
        gitList: []
    },
    filters: {
        localNum :function(val) {
            return val.toLocaleString()
        }

    },
    watch: {
        price: function(newVal, oldVal) {
            this.message = '税込価格が更新されました。'
        },
        'monsterList': {
            handler: function(newVal, oldVal) {
                this.message = 'モンスターリストが更新されました。'
            },
            deep: true
        },
        current: function(val) {
            axios.get('https://api.github.com/search/repositories', {
                params: { q: 'topic:' + val }
            }).then(function(response) {
                this.gitList = response.data.items
            }.bind(this))
        }
    },
    computed: {
        includeTaxPrice: function() {
            return this.price * 1.08
        },
        matched: function() {
            return this.monsterList.filter(function(el) {
                return el.hp <= this.filterHp
            }, this)
        },
        sorted: function() {
            return _.orderBy(this.matched, 'hp', this.order ? 'desc' : 'asc')
        },
        limited: function() {
            return this.matched.slice(0, this.limit)
        }
    },
    created: function() {
    }
})