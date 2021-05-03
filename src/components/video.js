(function () {
    var Video = function (option) {
        var setting = {
            num: 0
        }
        this.setting = Object.assign({}, setting, option)
    }
    window.Video = Video
})()