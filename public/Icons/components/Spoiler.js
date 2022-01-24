export default class SvgSpoiler extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M3.924 7.337a47.803 47.803 0 017.941-.253c.838.06 1.655.29 2.4.68a35.056 35.056 0 013.287 1.86.52.52 0 00.19.073h.201c1.764.156 3.9.399 4.787.911.08.046.585.388 1.079 1.421l.043.095-.087 1.752.135.151-.019.502-.566.329a1.958 1.958 0 01-.701.21h-.084c-.207.022-.501.057-.933.057a2.295 2.295 0 01-4.339-.035l-9.106-.065v-.809l9.015.046a2.295 2.295 0 014.584.032c.32-.008.55-.032.717-.048h.087a1.12 1.12 0 00.393-.113h.022v-.192l.08-1.658a2.724 2.724 0 00-.72-.993c-.541-.31-2.043-.58-4.44-.787l-.206-.019a1.348 1.348 0 01-.539-.197 34.404 34.404 0 00-3.212-1.817 5.555 5.555 0 00-2.07-.586 46.824 46.824 0 00-7.82.251h-.028c-.043.003-.717.052-1.618.052a.809.809 0 00.21.436l.284.286-1.154 1.157-.308.197-.013 1.151-.367 1.451c.113.36.25.713.41 1.055l.483.12a2.3 2.3 0 11.037.845l-.943-.237-.068-.052c-.078-.062-.283-.223-.725-1.593l-.035-.11.412-1.619v-1.3l.038-.083c.067-.119.08-.138.607-.472l.526-.54a2.058 2.058 0 01-.216-1.135l.043-.356h.34c1.008 0 1.855-.05 1.966-.05zm.283 5.542a1.489 1.489 0 100 2.977 1.489 1.489 0 000-2.977zm15.803.102a1.489 1.489 0 10-.57 2.864v.01a1.489 1.489 0 001.489-1.499c0-.602-.363-1.144-.92-1.375zM5.043 8.747l2.357.828 7.445.367c.394.205.944.504 1.588.887l-9.193-.453-2.785-.979.588-.65z');
                    path2.setAttributeNS(null, 'fill',colorFill)
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'spoiler-icon'
            customElements.define(customElementName, class extends SvgSpoiler {});
            export const SPOILER_ICON = customElementName;
            