export default class SvgTiredness extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M18.06 8.946l-.53 3.093h.637a1.246 1.246 0 011.251 1.246v4.11h-3.094l-.68 3.374h-.847l.172-.843.664-3.367h2.93v-3.277c0-.22-.178-.4-.4-.402h-1.636l.531-3.09H5.207l2.168 10.124h5.856l-.172.844H6.7L4.169 8.946h13.89zm-6.238-5.89v4.652h-.844V3.056h.844zM8.455 4.744v2.964h-.844V4.744h.844zm6.742-.05v3.014h-.844V4.693h.844z');
                    path2.setAttributeNS(null, 'fill','#190F14')
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'tiredness-icon'
            customElements.define(customElementName, class extends SvgTiredness {});
            export const TIREDNESS_ICON = customElementName;
            