import {COLOR_FONT_ATTRIBUTE, NAME_OF_COMPONENT} from './constants.js'
import {ATTRIBUTES} from './constants.js'
import {COLOR_DEFAULT,COLOR_ATTRIBUTE, CLOSE_ATTRIBUTE, ICON_SELECTION_ATTRIBUTE, ICON_ATTRIBUTE, POSTION_ICON_ATTRIBUTE} from './constants.js'
import { ON_ICON_OPTION, OFF_ICON_OPTION } from './constants.js'
import {ICON_DEFAULT} from './constants.js'
import {COMPONENT_VARIANT_KEY,STYLE_KEY} from "../commonMethodsAndConstants/Styles/commonConstants.js"
import {setKeys} from "./styles/index.js"
import {COMPONENTS} from "./variants/index.js"

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
        if (L<0.6) return "#ECE9E1"
        else return "#190F14"

    }
    else return "#000000"


}

class SeatTags extends HTMLElement {
    constructor()
    {
        super();
        
    }
        
    connectedCallback() {
        const WebComponent = this
        const attributes = {}
        ATTRIBUTES.forEach((ATTRIBUTE)=>{ 
            if (this.getAttribute(ATTRIBUTE.attributeName)) attributes[ATTRIBUTE.attributeName] = ATTRIBUTE.proccessValue(this.getAttribute(ATTRIBUTE.attributeName))
            else attributes[ATTRIBUTE.attributeName] = ATTRIBUTE.defaultValue
                        })
        attributes[COLOR_FONT_ATTRIBUTE] = convertColor(attributes[COLOR_ATTRIBUTE])
        const keysAttributes = {}
        

        if (attributes[ICON_SELECTION_ATTRIBUTE] === ICON_DEFAULT) {keysAttributes[ICON_ATTRIBUTE] = OFF_ICON_OPTION}
        else
        { 
            keysAttributes[ICON_ATTRIBUTE] = ON_ICON_OPTION
            keysAttributes[POSTION_ICON_ATTRIBUTE] = attributes[POSTION_ICON_ATTRIBUTE]
        }
        keysAttributes[CLOSE_ATTRIBUTE] = attributes[CLOSE_ATTRIBUTE]
        const stylesKeys = setKeys(keysAttributes) 
        attributes[STYLE_KEY] = stylesKeys[STYLE_KEY]
        const container = COMPONENTS[stylesKeys[COMPONENT_VARIANT_KEY]] (attributes, WebComponent)
        this.appendChild(container)
        this.style.display = 'contents' 
      }
}
if (customElements.get(NAME_OF_COMPONENT) === undefined) customElements.define(NAME_OF_COMPONENT, class extends SeatTags {});
export const SEAT_TAGS = NAME_OF_COMPONENT;

