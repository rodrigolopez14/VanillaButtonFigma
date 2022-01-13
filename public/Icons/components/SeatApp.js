export default class SvgSeatApp extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M20.798 3.022v14.99a2.812 2.812 0 01-2.802 2.792H3v-.93h14.99a1.88 1.88 0 001.877-1.878V3.93H5.815A1.88 1.88 0 003.93 5.815v12.023H3V5.815a2.812 2.812 0 012.809-2.793h14.99zm-13.95 8.156l10.099 1.893a144.68 144.68 0 01-.047 1.645c-.018.598-.146.965-.394 1.185-.338.301-.738.372-1.688.425a56.542 56.542 0 01-7.247-.093.884.884 0 01-.459-.115c-.124-.087-.14-.18-.174-.68-.021-.331-.071-1.33-.087-1.641 1.304.087 3.306.152 4.935.152h1.756a.782.782 0 00.67-.31l-7.364-1.242v-1.22zm2.13-3.725a56.585 56.585 0 017.246.097.869.869 0 01.462.114c.124.084.14.18.17.677.023.286.06 1.046.078 1.465-.962-.05-2.6-.134-4.034-.15l-.664-.004h-.42c-.949.002-1.678.02-1.79.033a.689.689 0 00-.509.251l7.449 1.375v1.086L6.85 10.65c.007-.326.044-1.117.044-1.586.022-.599.146-.962.394-1.182.341-.304.739-.376 1.688-.429z');
                    path2.setAttributeNS(null, 'fill','#190F14')
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'seat-app-icon'
            customElements.define(customElementName, class extends SvgSeatApp {});
            export const SEAT_APP_ICON = customElementName;
            