export default class SvgFrontGrill extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M22.78 9.081l1.119 1.301-3.05 5.3h-1.001l.494-.867h.003l2.495-4.335-.456-.532H1.729l-.457.532 2.493 4.335H18.74l-.497.867H3.265l-3.051-5.3L1.33 9.081h21.45zM9.996 12.088l3.73.694c-.003.101-.017.422-.017.607a.578.578 0 01-.145.437c-.127.113-.274.139-.624.16-.893.044-1.787.033-2.678-.036a.353.353 0 01-.17-.043c-.047-.032-.064-.067-.064-.252a14.345 14.345 0 01-.032-.604c.483.032 1.22.055 1.822.055h.65a.29.29 0 00.255-.11l-2.727-.46v-.448zm.79-1.37a21.129 21.129 0 012.677.034.29.29 0 01.17.044c.047.029.064.066.064.248.009.107.03.388.03.541-.36-.017-.964-.038-1.493-.055-.529-.017-1.006 0-1.061 0a.254.254 0 00-.185.093l2.741.509v.404L10 11.892c.014-.113.014-.408.014-.579v-.096a.578.578 0 01.15-.343c.125-.11.273-.136.623-.156z');
                    path2.setAttributeNS(null, 'fill',colorFill)
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'front-grill-icon'
            customElements.define(customElementName, class extends SvgFrontGrill {});
            export const FRONT_GRILL_ICON = customElementName;
            