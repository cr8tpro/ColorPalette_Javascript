var minNum = 0;
var maxNum = 100;
var startColour = 'ff0000';
var endColour = '0000ff';

export function setStartColor(startColor) { startColour = startColor }
export function setEndColor(endColor) { endColour = endColor }

export function setMinNumber(min) { minNum = min; }

export function setMaxNumber(max) { maxNum = max; }

export function setNumberRange(minNumber, maxNumber) {
    if (maxNumber > minNumber) {
        minNum = minNumber;
        maxNum = maxNumber;
    } else {
        throw new RangeError('maxNumber (' + maxNumber + ') is not greater than minNumber (' + minNumber + ')');
    }
}

export function colorAt(number) {
    return 'rgb(' + calcDecimal(number, startColour.substring(0, 2), endColour.substring(0, 2)) + ', '
        + calcDecimal(number, startColour.substring(2, 4), endColour.substring(2, 4)) + ', '
        + calcDecimal(number, startColour.substring(4, 6), endColour.substring(4, 6)) + ')';
}

function calcHex(number, channelStart_Base16, channelEnd_Base16) {
    var num = number;
    if (num < minNum) {
        num = minNum;
    }
    if (num > maxNum) {
        num = maxNum;
    }
    var numRange = maxNum - minNum;
    var cStart_Base10 = parseInt(channelStart_Base16, 16);
    var cEnd_Base10 = parseInt(channelEnd_Base16, 16);
    var cPerUnit = (cEnd_Base10 - cStart_Base10) / numRange;
    var c_Base10 = Math.round(cPerUnit * (num - minNum) + cStart_Base10);
    return formatHex(c_Base10.toString(16));
}

function calcDecimal(number, channelStart_Base16, channelEnd_Base16) {
    var num = number;
    if (num < minNum) {
        num = minNum;
    }
    if (num > maxNum) {
        num = maxNum;
    }
    var numRange = maxNum - minNum;
    var cStart_Base10 = parseInt(channelStart_Base16, 16);
    var cEnd_Base10 = parseInt(channelEnd_Base16, 16);
    var cPerUnit = (cEnd_Base10 - cStart_Base10) / numRange;
    var c_Base10 = Math.round(cPerUnit * (num - minNum) + cStart_Base10);
    return c_Base10;
}

function formatHex(hex) {
    if (hex.length === 1) {
        return '0' + hex;
    } else {
        return hex;
    }
} 