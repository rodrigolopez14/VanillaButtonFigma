export default class SvgUsb extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M17.406 6.778h-2.769v2.77h.923v1.572c0 .588-.302 1.134-.8 1.446l-1.972 1.256V5.84h1.461L12.332 2 10.41 5.84h1.462v10.062L9.1 14.138v-2.553a1.64 1.64 0 10-.922 0v3.077l3.692 2.347V18.6a1.64 1.64 0 10.923 0v-3.692l2.462-1.573a2.625 2.625 0 001.23-2.227V9.532h.923l-.003-2.754zm-5.074-2.713l.431.861h-.861l.43-.861zm-4.409 5.953a.717.717 0 111.434 0 .717.717 0 01-1.434 0zm5.126 10.154a.717.717 0 110-.015v.015zm2.514-12.455h.923v.923h-.923v-.923z');
                    path2.setAttributeNS(null, 'fill','#190F14')
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'usb-icon'
            customElements.define(customElementName, class extends SvgUsb {});
            export const USB_ICON = customElementName;
            