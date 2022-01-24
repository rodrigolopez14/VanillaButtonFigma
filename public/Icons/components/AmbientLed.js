export default class SvgAmbientLed extends HTMLElement {
    constructor() 
    {
        super();
    }
    
connectedCallback() {
var colorFill = "#190F14"
if (this.getAttribute('color'))
{
  colorFill = this.getAttribute('color')
} 
        var xmlns = "http://www.w3.org/2000/svg";

        var svgElem = document.createElementNS(xmlns, "svg");
        svgElem.setAttributeNS(null, "viewBox", "0 0 24 24");
        svgElem.setAttributeNS(null, "width", "1em");
        svgElem.setAttributeNS(null, "height", "1em");

        var g = document.createElementNS(xmlns, "g");
        g.setAttributeNS(null, 'fill', 'none');
        g.setAttributeNS(null, 'fillRule', 'evenodd');

        var path1 = document.createElementNS(xmlns, "path");
        path1.setAttributeNS(null, 'd', "M0 0h24v24H0z");
        path1.setAttributeNS(null, 'fill','none')
        path1.setAttributeNS(null, 'fillOpacity','{0}')

        var path2 = document.createElementNS(xmlns, "path");
        path2.setAttributeNS(null, 'd', "M11.884 5.825a4.463 4.463 0 014.457 4.456v3.981h-.938v-3.98a3.522 3.522 0 00-3.503-3.52h-.463a3.519 3.519 0 00-3.53 3.52v5.855h8.415v.938H13.55v4.688h-.938v-4.688H10.72v4.688H9.78v-4.688H6.97v-6.794a4.46 4.46 0 014.468-4.456zm-6.322 4.219a.469.469 0 110 .937.469.469 0 010-.937zm-1.875 0a.469.469 0 110 .937.469.469 0 010-.937zm14.06-.047a.469.469 0 110 .937.469.469 0 010-.937zm1.872-.01a.469.469 0 110 .938.469.469 0 010-.938zM5.853 8.16a.469.469 0 110 .938.469.469 0 010-.938zm11.588-.043a.469.469 0 110 .937.469.469 0 010-.937zM4.069 7.58a.469.469 0 110 .938.469.469 0 010-.938zm15.153-.056a.469.469 0 110 .937.469.469 0 010-.937zM6.712 6.459a.469.469 0 110 .938.469.469 0 010-.938zm9.857-.037a.469.469 0 110 .937.469.469 0 010-.937zM5.194 5.356a.469.469 0 110 .938.469.469 0 010-.938zM18.08 5.31a.469.469 0 110 .938.469.469 0 010-.938zM8.056 5.106a.469.469 0 110 .938.469.469 0 010-.938zm7.16-.028a.469.469 0 110 .938.469.469 0 010-.938zM9.75 4.234a.469.469 0 110 .938.469.469 0 010-.938zm3.766-.012a.469.469 0 110 .937.469.469 0 010-.937zm-1.885-.294a.469.469 0 110 .938.469.469 0 010-.938zm-4.684-.34a.469.469 0 110 .937.469.469 0 010-.938zm9.366-.035a.469.469 0 110 .938.469.469 0 010-.938zM9.165 2.447a.469.469 0 110 .937.469.469 0 010-.937zm4.921-.016a.469.469 0 110 .938.469.469 0 010-.938zm-2.462-.381a.469.469 0 110 .937.469.469 0 010-.937z");
        path2.setAttributeNS(null, 'fill',colorFill)
        
        svgElem.appendChild(g);
        g.appendChild(path2);
        this.innerHTML=`${svgElem.outerHTML}`
      }
}

var customElementName = "ambient-led-icon"
customElements.define(customElementName, class extends SvgAmbientLed {});
export const AMBIENT_LED_ICON = customElementName;
