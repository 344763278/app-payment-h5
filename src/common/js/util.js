


export default {
    //配置参数
    //配置参数
    jsonpUrl: process.env.NODE_ENV == 'development' ? 'https://dev-access.huanjixia.com/index/index' : '', //jsonp开发环境、线上环境
    api: process.env.NODE_ENV == 'development' ? '/pengkuan' : '',
    // 公共方法
    // 公共方法
    getQueryStringByName: function(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
        var r = window.location.search.substr(1).match(reg)
        var context = ''
        if (r != null) { context = r[2] }
        reg = null
        r = null
        return context === null || context === '' || context === 'undefined' ? '' : context
    },
    getUrlParam: function(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
        var result = window.location.search.substr(1).match(reg)
        return result ? decodeURIComponent(result[2]) : null
    }
}
