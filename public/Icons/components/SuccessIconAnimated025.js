           
            export default class SvgSuccessIconAnimated025 extends HTMLElement {
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

                    var lineargradient = document.createElementNS(xmlns, "linearGradient");
                    lineargradient.setAttributeNS(null, "id", "left-to-right");
                    

                    var stop1 = document.createElementNS(xmlns, "stop");
                    stop1.setAttributeNS(null, "offset", "0");
                    stop1.setAttributeNS(null, "stop-color", "#190F14");
                    var animate1 = document.createElementNS(xmlns, "animate");
                    animate1.setAttributeNS(null, "dur", "0.15s");
                    animate1.setAttributeNS(null, "attributeName", "offset");
                    animate1.setAttributeNS(null, "fill", "freeze");
                    animate1.setAttributeNS(null, "from", "0")
                    animate1.setAttributeNS(null, "to", "1")
                    animate1.setAttributeNS(null, "begin", "0.25s;op.end+0.25s")

                    stop1.appendChild(animate1)

                    var stop2 = document.createElementNS(xmlns, "stop");
                    stop2.setAttributeNS(null, "offset", "0");
                    stop2.setAttributeNS(null, "stop-color", "transparent");
                    var animate2 = document.createElementNS(xmlns, "animate");
                    animate2.setAttributeNS(null, "dur", "0.15s");
                    animate2.setAttributeNS(null, "attributeName", "offset");
                    animate2.setAttributeNS(null, "fill", "freeze");
                    animate2.setAttributeNS(null, "from", "0")
                    animate2.setAttributeNS(null, "to", "1")
                    animate2.setAttributeNS(null, "begin", "0.25s;op.end+0.25s")

                    stop2.appendChild(animate2)

                    lineargradient.appendChild(stop1)
                    lineargradient.appendChild(stop2)
            
                    var path = document.createElementNS(xmlns, "path");
                    path.setAttributeNS(null, 'd', 'M8.1,17.4l1.65-1.65,12-12.45c.3-.3.6-.3.75,0l1.35,1.35c.3.3.3.6,0,.75l-14.4,15A1.83,1.83,0,0,1,8.1,21a2.23,2.23,0,0,1-1.35-.6L.3,13.65a.49.49,0,0,1,0-.75l1.35-1.35a.49.49,0,0,1,.75,0l4.05,4.2Z');
                    path.setAttributeNS(null, 'fill','url(#left-to-right)')
                    
                    svgElem.appendChild(lineargradient);
                    svgElem.appendChild(path)

                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'success-icon-animated-025-icon'
            customElements.define(customElementName, class extends SvgSuccessIconAnimated025 {});
            export const SUCCESS_ICON_ANIMATED_025_ICON = customElementName;
            
            