/**
 * Created by yang on 2017/3/17.
 */

module.exports = function (title) {
    document.title = title
    var mobile = navigator.userAgent.toLowerCase()
    if (/iphone|ipad|ipod/.test(mobile)) {
        var iframe = document.createElement('iframe')
        iframe.style.display = 'none'
        iframe.setAttribute('src', 'https://img.alicdn.com/imgextra/i1/1876943437/TB2ssQmfmBjpuFjSsplXXa5MVXa_!!1876943437.jpg')
        var iframeCallback = function () {
            setTimeout(function () {
                iframe.removeEventListener('load', iframeCallback)
                document.body.removeChild(iframe)
            }, 0)
        }
        iframe.addEventListener('load', iframeCallback)
        document.body.appendChild(iframe)
    }
}
