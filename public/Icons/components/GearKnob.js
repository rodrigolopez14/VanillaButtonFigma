export default class SvgGearKnob extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M18.759 19.601v1.125H5.262v-1.125H18.76zm-1.125-2.253v1.125H6.387v-1.125h11.247zM10.47 4.133c.086-.075 2.164-1.718 5.779-.825l.105.033.105.094c.452.441.713 1.041.727 1.672.012.83-.393 1.65-1.21 2.442-1.606 1.552-1.666 3.907-1.745 6.907v.642h2.277l.003 1.11h-9v-1.125h2.416V6.457a4.68 4.68 0 01.408-2.163l.053-.094zm5.329.243c-2.569-.581-4.136.304-4.538.574a4.459 4.459 0 00-.225 1.522v8.625h2.067c.022-.224.022-.45.022-.667.079-3.12.147-5.816 2.082-7.691.585-.566.87-1.106.87-1.613a1.313 1.313 0 00-.278-.75z');
                    path2.setAttributeNS(null, 'fill','#190F14')
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'gear-knob-icon'
            customElements.define(customElementName, class extends SvgGearKnob {});
            export const GEAR_KNOB_ICON = customElementName;
            