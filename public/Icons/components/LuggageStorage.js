export default class SvgLuggageStorage extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M16.326 6.653V4h-6.33a2.551 2.551 0 00-2.549 2.551v.096H5.585a2.551 2.551 0 00-2.548 2.551v8.07h.931v-8.07a1.62 1.62 0 011.617-1.62h.99v11.43H3v.931h15.185c1.408 0 2.55-1.14 2.551-2.548V6.653h-4.41zm-7.948-.096a1.62 1.62 0 011.617-1.626h5.4v1.716H8.378v-.09zm-.872 1.027h8.77v11.424h-8.77V7.584zm12.3 9.807a1.62 1.62 0 01-1.62 1.617h-.978V7.584h2.597v9.807z');
                    path2.setAttributeNS(null, 'fill','#190F14')
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'luggage-storage-icon'
            customElements.define(customElementName, class extends SvgLuggageStorage {});
            export const LUGGAGE_STORAGE_ICON = customElementName;
            