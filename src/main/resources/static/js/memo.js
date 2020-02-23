// グローバル
Vue.component('global_component', {
    template : '<p>global component</p>'
})
// ローカル
var localComponent = {
    template: '<p>localcomponent</p>'
}
var memoApp = new Vue({
    el: '#memoApp',
    data: {
        memo: '',
        errorMessage: ''
    },
    computed: {
        memoCharCount: function() {
            return this.memo.length;
        },
        hasError: function() {
            return this.memo.length > 100
        }
    },
    watch: {
        memo: function(newVal, oldVal) {
            if (newVal.length > 100) {
                this.errorMessage = 'メモ欄の入力文字数は100文字までです。'
            } else {
                this.errorMessage = ''
            }
        }
    }
})