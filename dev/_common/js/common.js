const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

TweenLite.defaultEase = Power2.easeInOut

const tl = new TimelineMax()
tl.from('.f2', .5, {opacity:0, ease:Back.easeOut}, 5)

export {size}