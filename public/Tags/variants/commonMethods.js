String.prototype.convertToRGB = function(){
    var aRgbHex = this.match(/.{1,2}/g);
    var aRgb = [
        parseInt(aRgbHex[0], 16),
        parseInt(aRgbHex[1], 16),
        parseInt(aRgbHex[2], 16)
    ];
    return aRgb;
}
function probarEntrada(cadena)
{
    if (/[0-9A-Fa-f]{6}/g.test(cadena)) return true
    else return false
}
export const convertColor = function (colorStringHexa)
{
    colorStringHexa = colorStringHexa.slice(1)
    if (colorStringHexa.length !== 6)
    {
        if (colorStringHexa.length>6)
        {
            colorStringHexa = colorStringHexa.slice(0,5)
        }
        else 
        {
            colorStringHexa = colorStringHexa.padEnd(6, '0')
        }
    }
    colorStringHexa = colorStringHexa.toUpperCase()
    if (probarEntrada(colorStringHexa)) 
    {
        var rgb = colorStringHexa.convertToRGB()
        rgb = rgb.map (el=>{return el/255})
        var MaxValue = Math.max(...rgb)
        var MinValue = Math.min(...rgb)
        var L = 0.5 * (MaxValue + MinValue)
        if (L>0.5) return "#ECE9E1"
        else return "#190F14"

    }
    else return "#000000"


}