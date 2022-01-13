export default class SvgSeguroDeNeumaticos extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M6.194 5.501a8.81 8.81 0 0114.63 7.542l-.922-.103a7.896 7.896 0 10-.61 2.306l.835.366a8.847 8.847 0 01-8.072 5.269 8.81 8.81 0 01-5.86-15.38zm12.875 5.584a7.041 7.041 0 01-2.44 6.38 7.017 7.017 0 01-5.2 1.65l.08-.916a6.169 6.169 0 006.645-6.99zM12.06 6.658a5.4 5.4 0 110 10.8 5.406 5.406 0 01-5.4-5.4 5.4 5.4 0 015.4-5.4zm0 .915a4.495 4.495 0 00-4.485 4.485 4.485 4.485 0 104.485-4.485zM6.944 7.18a7.081 7.081 0 015.745-2.176l-.079.916a6.12 6.12 0 00-4.53 1.43 6.15 6.15 0 00-2.102 5.553l-.916.125A7.081 7.081 0 016.944 7.18z');
                    path2.setAttributeNS(null, 'fill','#190F14')
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'seguro-de-neumaticos-icon'
            customElements.define(customElementName, class extends SvgSeguroDeNeumaticos {});
            export const SEGURO_DE_NEUMATICOS_ICON = customElementName;
            