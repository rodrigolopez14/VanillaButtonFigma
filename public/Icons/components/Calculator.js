export default class SvgCalculator extends HTMLElement {
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
		path2.setAttributeNS(null, 'd', "M19.72 3.218v.806H7.867c-.188.005-1.9.096-1.9 1.926v.537c.005 2.711.032 10.735.035 13.245v.35h11.22c.168-.003 1.689-.07 1.689-1.57V5.568h.811v12.944c0 1.867-1.633 2.38-2.498 2.38H5.194v-.453l-.001-.056v-.168c-.004-.849-.012-3.522-.02-6.355l-.002-.682-.001-.683c-.006-1.933-.01-3.816-.012-5.126l-.001-.437v-.2l-.001-.777c0-2.13 1.77-2.721 2.705-2.737H19.72zM10 16.924v1.543H8.458v-1.543H10zm3.234-.002v1.534H11.7v-1.534h1.534zm3.2-.014v1.548h-1.547v-1.548h1.547zm-6.432-3.232v1.548H8.455v-1.548h1.547zm6.432-.002v1.547h-1.547v-1.547h1.547zm-3.194 0v1.542h-1.542v-1.542h1.542zm-3.232-3.227v1.561H8.447v-1.56h1.56zm3.232.014V12H11.7v-1.54h1.54zm3.191-.003V12H14.89v-1.542h1.542zm.062-3.227v.806H8.4v-.806h8.094z");
		path2.setAttributeNS(null, 'fill',colorFill)
		path2.setAttributeNS(null, 'fillOpacity','{0.1}')

        svgElem.appendChild(g);
		g.appendChild(path2)
        this.innerHTML=`${svgElem.outerHTML}`
      }
}

var customElementName = "calculator-icon"
customElements.define(customElementName, class extends SvgCalculator {});
export const CALCULATOR_ICON = customElementName;