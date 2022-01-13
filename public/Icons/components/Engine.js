export default class SvgEngine extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M10.357 7.003v1.57h3.56v1.646h2.592l1.627 2.418h1.443V10.22h2.362v7.984h-2.386v-2.416h-1.646v3.192h-.8v-3.992h3.246v2.416h.786v-6.384h-.762v2.418h-2.667l-1.63-2.418h-2.965V9.373H6.755V11H5.139v4.787h2.373l.928 2.392h7.31v.8H7.892l-.928-2.392H4.34v-2.728H2.963v2.765h-.8v-6.33h.8v2.765h1.376V10.2h1.616V8.573h3.602v-1.57h.8zm3.574-.811v.8H5.987v-.8h7.944z');
                    path2.setAttributeNS(null, 'fill','#190F14')
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'engine-icon'
            customElements.define(customElementName, class extends SvgEngine {});
            export const ENGINE_ICON = customElementName;
            