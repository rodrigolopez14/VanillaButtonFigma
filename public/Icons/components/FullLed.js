export default class SvgFullLed extends HTMLElement {
                constructor() 
                {
                    super();
                }
                
connectedCallback() {
var colorFill = "#190F14"
if (this.getAttribute('color'))
{
  colorFill = this.getAttribute('color')
} 
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
                    path2.setAttributeNS(null, 'd', 'M21.956 6.064l-.067.509c-.037.296-.933 7.237-1.099 8.148a2.454 2.454 0 01-1.822 1.879c-.568.119-4.815.501-5.309.546h-.054L2.148 14.642l2.738-4.736 17.07-3.842zm-.85.924L5.351 10.54l-2.092 3.607 10.383 2.282c1.343-.121 4.733-.437 5.17-.529a1.728 1.728 0 001.267-1.303c.072-.408.297-2.061.524-3.771l.08-.604c.172-1.306.336-2.562.423-3.235zm-3.269 7.407a.37.37 0 110 .74.37.37 0 010-.74zm-1.53-.247a.37.37 0 11.159.723.37.37 0 01-.158-.723zm-1.531-.237a.37.37 0 11.286.683.37.37 0 01-.286-.683zm4.342-.137a.37.37 0 11.192.715.37.37 0 01-.192-.715zm-5.669-.164l.08.005a.376.376 0 11-.129.74.376.376 0 01.128-.74zm-1.447-.251l.074.007a.37.37 0 11-.142.727.37.37 0 01.142-.727zm-1.536-.25a.37.37 0 11.164.722.37.37 0 01-.164-.722zm-1.455-.26a.37.37 0 11.159.724.37.37 0 01-.159-.724zm-1.39-.27l.075.005a.37.37 0 11-.129.73.37.37 0 01.129-.73zm-1.454-.272l.073.007a.376.376 0 11-.375.583.37.37 0 01-.055-.285.368.368 0 01.43-.298zm13.018.062a.37.37 0 11.173.66.37.37 0 01-.173-.66zM6.777 10.96a.37.37 0 11.432.602.37.37 0 01-.432-.602zm12.724-.124a.37.37 0 11.192.715.37.37 0 01-.192-.715zm-11.148-.27a.37.37 0 11.165.723.37.37 0 01-.165-.722zm1.31-.275a.37.37 0 11.432.602.37.37 0 01-.432-.602zm1.442-.333a.37.37 0 11.432.602.37.37 0 01-.432-.602zm1.442-.333a.37.37 0 11.432.602.37.37 0 01-.432-.602zm7.144-.258a.37.37 0 11.192.715.37.37 0 01-.192-.715zm-5.696-.078a.37.37 0 11.434.6.37.37 0 01-.434-.6zm1.573-.391a.37.37 0 11.164.722.37.37 0 01-.164-.722zm1.308-.276a.37.37 0 11.431.602.37.37 0 01-.431-.602zm1.444-.32a.37.37 0 11.432.601.37.37 0 01-.432-.602zm1.781-.393l.035.014.032.018.027.02.03.022.024.027.023.025.022.037.017.032v.03c.005.012.01.025.012.039v.025a.193.193 0 000 .039.247.247 0 010 .042v.025l.001.02v.052l-.015.031a.133.133 0 01-.018.033l-.02.03-.039.029a.128.128 0 01-.027.024.116.116 0 01-.025.025l-.03.017-.031.02h-.03l-.04.015h-.217l-.032-.017-.032-.015-.03-.02-.027-.022-.025-.027-.024-.025a.205.205 0 01-.018-.032l-.02-.03a.138.138 0 010-.03.284.284 0 01-.014-.041l-.001-.014v-.013a.193.193 0 010-.04.212.212 0 01.026-.047.101.101 0 010-.027v-.042a.138.138 0 010-.03.207.207 0 01.014-.034l.015-.032a.188.188 0 00.02-.027l.022-.03.027-.025.025-.022.032-.02.03-.017h.03l.041-.012h.21z');
                    path2.setAttributeNS(null, 'fill',colorFill)
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'full-led-icon'
            customElements.define(customElementName, class extends SvgFullLed {});
            export const FULL_LED_ICON = customElementName;
            