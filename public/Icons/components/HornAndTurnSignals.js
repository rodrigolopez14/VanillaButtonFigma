export default class SvgHornAndTurnSignals extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M15.87 7.231l5.235 4.361-5.236 4.361v-2.605h-1.765v-.878h2.643v1.61l2.986-2.488-2.986-2.488v1.607H12.34v2.637H7.955v2.605l-5.236-4.36L7.955 7.23v2.6h1.783v.877h-2.66V9.104l-2.99 2.488 2.99 2.488v-1.61h4.383V9.833h4.408V7.231zm-13.544 6.26l.564.672-1.367 1.148-.565-.672 1.368-1.148zm19.167-.002l1.367 1.147-.564.673-1.368-1.148.565-.672zm2.317-2.377v.878h-1.786v-.878h1.786zm-22.013 0v.878H.012v-.878h1.785zM22.267 7.8l.565.673-1.368 1.148-.564-.673L22.267 7.8zM1.531 7.79l1.367 1.148-.564.672L.966 8.463l.565-.673z');
                    path2.setAttributeNS(null, 'fill','#190F14')
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'horn-and-turn-signals-icon'
            customElements.define(customElementName, class extends SvgHornAndTurnSignals {});
            export const HORN_AND_TURN_SIGNALS_ICON = customElementName;
            