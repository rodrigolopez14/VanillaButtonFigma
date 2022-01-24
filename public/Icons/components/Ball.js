export default class SvgBall extends HTMLElement {
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
        path2.setAttributeNS(null, 'd', "M11.938 4a7.934 7.934 0 105.77 13.377l-.705-.401a7.127 7.127 0 01-7.96 1.484l6.714-3.876 2.86 1.65.196-.342A7.932 7.932 0 0011.938 4zm7.121 7.36l-6.727-3.885V4.797a7.158 7.158 0 016.727 6.563zM8.673 13.356V5.582a7.082 7.082 0 012.872-.787v6.898l-2.872 1.663zm-3.88-1.424a7.137 7.137 0 013.093-5.878v7.756l-2.327 1.35c-.507-1-.769-2.107-.766-3.228zm3.423 6.096a7.218 7.218 0 01-2.26-2.193l5.982-3.457 3.032 1.75-6.754 3.9zm10.099-2.867l-5.983-3.465V8.383l6.743 3.892a7.155 7.155 0 01-.76 2.886z");
        path2.setAttributeNS(null, 'fill',colorFill)
        
        svgElem.appendChild(g);
		//g.appendChild(path1);
        g.appendChild(path2);
        this.innerHTML=`${svgElem.outerHTML}`
      }
}

var customElementName = "ball-icon"
customElements.define(customElementName, class extends SvgBall {});
export const BALL_ICON = customElementName;


