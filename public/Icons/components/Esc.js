export default class SvgEsc extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M6.455 4.214l.552.872a8.338 8.338 0 00.103 14.159l-.538.883a9.369 9.369 0 01-.117-15.914zm10.993.08a9.369 9.369 0 01-.065 15.75l-.01.008-.545-.88a8.334 8.334 0 00.055-14.013l.565-.866zm-5.51.261a7.586 7.586 0 110 15.173 7.586 7.586 0 010-15.173zm0 1.02v.015a6.552 6.552 0 106.552 6.551 6.552 6.552 0 00-6.552-6.565zm5.524 6.011l-.98.083a1.034 1.034 0 00-1.034-.772 1.131 1.131 0 00-1.096 1.234 1.141 1.141 0 001.107 1.241c.483.006.908-.316 1.034-.782l.973.082a1.955 1.955 0 01-1.983 1.57 2.028 2.028 0 01-2.104-2.108 2.031 2.031 0 012.07-2.106 1.972 1.972 0 012.013 1.558zm-6.234-1.558c1.096 0 1.562.61 1.651 1.193l-.972.072a.583.583 0 00-.641-.555c-.304 0-.518.128-.518.386 0 .259.138.362.555.486l.466.138c.669.204 1.214.476 1.214 1.235 0 .758-.628 1.245-1.6 1.245-1.042 0-1.58-.525-1.67-1.245l.966-.07a.614.614 0 00.69.594c.372 0 .624-.155.624-.459 0-.303-.21-.386-.517-.482l-.455-.138c-.866-.262-1.262-.583-1.262-1.245 0-.807.669-1.155 1.469-1.155zm-1.987.069v.779H7.762v.803H9.2v.749H7.762v.951h1.5v.78H6.828v-4.062H9.24z');
                    path2.setAttributeNS(null, 'fill','#190F14')
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'esc-icon'
            customElements.define(customElementName, class extends SvgEsc {});
            export const ESC_ICON = customElementName;
            