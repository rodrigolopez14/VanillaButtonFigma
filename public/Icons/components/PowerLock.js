export default class SvgPowerLock extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M13.564 4.236a1.644 1.644 0 011.746 1.742v3.956h1.682l.005 10.65H9.101a2.011 2.011 0 01-1.994-2.022V9.934h7.378V5.978a.838.838 0 00-.923-.92H9.559V8.3h-.822V4.236zm2.606 6.52H7.929v7.806a1.187 1.187 0 001.172 1.2h7.069v-9.006zM3.792 9.48l.674.502A3.978 3.978 0 003.01 12.97a3.986 3.986 0 001.455 2.989l-.674.512a4.614 4.614 0 010-6.992zm16.52 0a4.614 4.614 0 010 6.992l-.665-.507a3.984 3.984 0 001.446-2.989 3.975 3.975 0 00-1.446-2.989zm-1.528 1.165a3.096 3.096 0 010 4.657l-.658-.5.132-.11c.44-.395.71-.946.756-1.536l.007-.178c0-.717-.333-1.392-.9-1.83zm-13.46-.008l.654.5-.131.11a2.31 2.31 0 00-.756 1.536l-.006.178c0 .716.332 1.392.899 1.829l-.66.504a3.096 3.096 0 010-4.657z');
                    path2.setAttributeNS(null, 'fill','#190F14')
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'power-lock-icon'
            customElements.define(customElementName, class extends SvgPowerLock {});
            export const POWER_LOCK_ICON = customElementName;
            