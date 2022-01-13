export default class SvgElectronicPac extends HTMLElement {
                constructor() 
                {
                    super();
                }
                connectedCallback() {
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
                    path2.setAttributeNS(null, 'd', 'M15.728 4.134l1.91 3.411 2.544-3.256.635.53-2.98 3.817H6.604v10.61h10.623l.014-8.973h.818v9.79H5.787v-11.7l-2.773-3.57.646-.504 2.534 3.256 1.898-3.411h7.636zm-5.853 8.58v.812h.813v.819h-.813v.812h-.818v-.812h-.812v-.819h.812v-.812h.818zm5.72.812v.819H13.15v-.819h2.444zm-.341-8.574H8.58L6.987 7.818h9.86l-1.593-2.866z');
                    path2.setAttributeNS(null, 'fill','#190F14')
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'electronic-pac-icon'
            customElements.define(customElementName, class extends SvgElectronicPac {});
            export const ELECTRONIC_PAC_ICON = customElementName;
            