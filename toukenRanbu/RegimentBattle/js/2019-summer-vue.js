var app = new Vue({
    el: '#app',
    data: {
        rewards: [],
        startDate: '2019-07-30',
        endDate: '2019-08-27',
        diffDays: 0,

        currentAmount: null, // 目前貝數
        addAmount: null, // 單次取得貝
    },

    mounted () {
        const _this = this

        // 綁定外部 json 資料
        $.ajax({
            dataType: "json",
            url: 'js/2019-summer-vue.json',
            success: function (data) {
                _this.rewards = data
            }
        })

        // 計算到 endDate 還有幾天
        const today = new Date()
        const endDate = new Date(this.endDate)
        const diffDays = endDate - today
        this.diffDays = Math.ceil(diffDays / 86400000) - 1
    },

    computed: {
        everydayLeasts () {
            const _this = this
            return _this.rewards.map(function(item) {
                const least = item.amount - _this.currentAmount

                if (least > 0) {
                    return `每天至少需 ` + Math.round(least / _this.diffDays) + ` 貝`
                } else {
                    return 'Get!'
                }
            })
        }
    }

})

Vue.filter('number_format', function (value) {
    if (isNaN(value)) return 0
    value = Math.round(value * 100) / 100
    return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
})

var number_format = Vue.filter('number_format')
