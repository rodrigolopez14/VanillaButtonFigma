export default class SvgEmergency extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M14.922 9a1.865 1.865 0 011.843 1.613l.807 6.852a1.86 1.86 0 011.339 1.448l.343 1.854H5.602l.562-3.375h10.55l-.787-6.675a1.015 1.015 0 00-1.005-.874H9.854a1.018 1.018 0 00-1.004.88l-.475 5.046h-.844v-.183l.47-4.959A1.868 1.868 0 019.843 9zm2.172 9.244H6.867l-.28 1.687 11.663.023-.16-.867a1.015 1.015 0 00-.996-.843zm1.441-12.962l.611.583-2.328 2.443-.61-.582 2.327-2.444zM5.811 5.28L8.14 7.724l-.61.582L5.2 5.862l.61-.582zm8.602-2.228l.803.258-1.03 3.213-.804-.257 1.03-3.214zm-4.482 0l1.03 3.214-.803.258-1.03-3.214.803-.258z');
                    path2.setAttributeNS(null, 'fill',colorFill)
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'emergency-icon'
            customElements.define(customElementName, class extends SvgEmergency {});
            export const EMERGENCY_ICON = customElementName;
            