export default class SvgMantenimientoSeatServices extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M15.353 4.047l.447.779H8.252a1.771 1.771 0 00-1.533.888l-3.072 5.361v5.429h1.576v-2.301h5.868V9.499h6.488l-1.784-3.117h.901l1.785 3.117h1.298A2.231 2.231 0 0122 11.727v8.691h-8.678a2.234 2.234 0 01-2.231-2.231v-3.205H6.003v2.301H2.87v-6.415l.338-.59H2.094v-.78h1.558l2.392-4.17a2.55 2.55 0 012.208-1.281h7.101zm4.426 6.23H11.87v7.91a1.455 1.455 0 001.45 1.442h7.911l-.01-7.902a1.452 1.452 0 00-1.442-1.45zm-2.855 1.23a2.265 2.265 0 012.479-.3l.483.242-1.14 1.14.08.219.244.098 1.135-1.135.237.502a2.265 2.265 0 01-2.767 3.111l-2.711 3.258c-.19.188-.447.293-.715.293l-.117-.007a.888.888 0 01-.516-.253l-1.359-1.358 3.969-3.413a2.265 2.265 0 01.698-2.397zm1.557.26a1.483 1.483 0 00-1.44 2.103l.123.26-3.761 3.231.766.764a.122.122 0 00.083.026l.055-.007a.244.244 0 00.098-.048l3.047-3.667.275.137a1.486 1.486 0 002.146-1.363l-.616.615-1.039-.413-.374-1.013z');
                    path2.setAttributeNS(null, 'fill','#190F14')
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'mantenimiento-seat-services-icon'
            customElements.define(customElementName, class extends SvgMantenimientoSeatServices {});
            export const MANTENIMIENTO_SEAT_SERVICES_ICON = customElementName;
            