export default class SvgChooseCar extends HTMLElement {
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
		path2.setAttributeNS(null, 'd', "M11.887 7.206a1.566 1.566 0 011.557 1.61v2.605l3.343.868c.95.417.802 1.485.747 1.937-.055.452-.136.834-.228 1.274l-.556 2.13h-.895l.6-2.316c.095-.437.167-.781.217-1.175.08-.585.057-.903-.209-1.042l-3.887-.99V8.816a.7.7 0 00-.701-.735h-.174v7.086h-.868v-2.244H9.542v2.43c0 .931 1.508 2.79 2.695 4.011h4.238l.037 3.474h-3.986a2.122 2.122 0 01-2.104-2.13V19.37h.637c-1.008-1.117-2.374-2.834-2.374-4.012v-2.49a.81.81 0 01.81-.813h1.35V7.206zm3.725 13.027h-4.325l.003.469a1.253 1.253 0 001.236 1.267h3.112l-.026-1.736zm3.462-16.489v.854h-.692l.684 1.065v3.584a1.853 1.853 0 01-1.85 1.853h-.735V9.395h-2.585v-.869h3.447v1.702a.999.999 0 00.869-.99V5.921l-1.028-1.598-.373-.579h2.263zM16.148 1.14l.553.854H8.934a.608.608 0 00-.518.29L6.08 5.892v4.341h.868V8.526h3.474l-.003.869H7.814v1.696H5.229v-5.46l.674-1.033h-.68v-.854h1.224l1.248-1.916a1.476 1.476 0 011.242-.69h7.21z");
		path2.setAttributeNS(null, 'fill',colorFill)

        svgElem.appendChild(g);
		g.appendChild(path2)
        this.innerHTML=`${svgElem.outerHTML}`
      }
}

var customElementName = "choose-car-icon"
customElements.define(customElementName, class extends SvgChooseCar {});
export const CHOOSE_CAR_ICON = customElementName;


