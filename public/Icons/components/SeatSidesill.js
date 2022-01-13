export default class SvgSeatSidesill extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M3.937 7.332a47.46 47.46 0 017.928-.254 6.135 6.135 0 012.4.666 35.806 35.806 0 013.287 1.86.585.585 0 00.19.076l.199.017c1.766.153 3.902.393 4.789.908.08.044.585.386 1.079 1.422l.043.091-.087 1.753.135.154-.019.501-.566.33a1.958 1.958 0 01-.701.21h-.086c-.205.021-.5.056-.93.056a2.295 2.295 0 01-4.34-.032l-9.244-.046v-.809l9.131.046a2.29 2.29 0 01.113-.65l-10.902-.097a2.298 2.298 0 11-4.39 1.327l-.944-.238-.067-.05C.876 14.51.67 14.35.229 12.98l-.035-.11.413-1.618v-1.3l.037-.081c.068-.121.081-.14.607-.475L2.33 8.32l-.21-.24.183-.648zm.27 5.541a1.489 1.489 0 100 2.977 1.489 1.489 0 000-2.977zm15.803.114a1.489 1.489 0 10-1.14 2.75 1.489 1.489 0 001.14-2.75zm-8.158-5.108a47.315 47.315 0 00-7.82.248l-.456.03.04.024L1.73 10.07l-.308.197-.013 1.151-.367 1.45c.113.361.25.713.41 1.055l.482.122a2.292 2.292 0 013.919-1.281l11.878.037a2.292 2.292 0 013.997 1.497c.318-.008.55-.032.717-.048h.086c.138-.015.271-.054.394-.116h.022l.013-.2.081-1.658a2.656 2.656 0 00-.72-.99c-.545-.313-2.047-.583-4.444-.79l-.202-.019a1.305 1.305 0 01-.54-.197 35.178 35.178 0 00-3.211-1.817 5.46 5.46 0 00-2.071-.583zm-6.81.863L7.4 9.57l7.445.367.155.082.35.189c.315.17.68.376 1.083.616L7.24 10.37l-2.785-.98.588-.649z');
                    path2.setAttributeNS(null, 'fill','#190F14')
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'seat-sidesill-icon'
            customElements.define(customElementName, class extends SvgSeatSidesill {});
            export const SEAT_SIDESILL_ICON = customElementName;
            