export default class SvgWeVeGotYouCovered extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M17.626 7.829l-.837-1.46h-.907l.815 1.426-4.323 1.052v1.466H6.72l.758 2.308H8.3l-.497-1.518h4.57v3.19H5.172v2.33H3.563v-5.5l3.124-5.43c.32-.557.91-.901 1.552-.904h7.648L15.434 4H8.24a2.584 2.584 0 00-2.236 1.297l-2.424 4.23H2v.789h1.129l-.355.597v6.5H5.96v-2.331h6.434a3.055 3.055 0 001.242 2.105l3.455 2.384 3.46-2.39a3.045 3.045 0 001.259-2.46V8.847L17.626 7.83zm3.395 6.884c0 .719-.344 1.394-.924 1.819l-3.005 2.073-3.003-2.07a2.255 2.255 0 01-.928-1.822V9.468l3.928-.957 3.932.957v5.245z');
                    path2.setAttributeNS(null, 'fill',colorFill)
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'we-ve-got-you-covered-icon'
            customElements.define(customElementName, class extends SvgWeVeGotYouCovered {});
            export const WE_VE_GOT_YOU_COVERED_ICON = customElementName;
            