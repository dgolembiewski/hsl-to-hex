var toRgb = require('hsl-to-rgb-for-reals')

function max(val, n) {
    return (val > n ? n : val)
}

function min(val, n) {
    return (val < n ? n : val)
}

function cycle(val) {
    val = max(val, 1e7)
    val = min(val, 1e7)

    while (val < 0) { val += 360 }
    while (val > 359) { val -= 360 }
    return val
}

function hs(hue, saturation, luminosity) {
    hue = cycle(hue)
}