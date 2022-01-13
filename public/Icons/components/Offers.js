export default class SvgOffers extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M16.665 3.146l1.498 1.321 2.782 2.453v5.565l-6.916 7.877a1.83 1.83 0 01-1.257.61h-.116a1.83 1.83 0 01-1.22-.457l-8.265-7.28.61-.692 8.253 7.295a.915.915 0 001.278-.08l6.712-7.605V7.347L17.553 5.17l-1.175-1.034-4.64.696-6.12 7.016-.696-.61 6.343-7.282 5.4-.809zm-5.666 11.752a1.754 1.754 0 111.367 2.938h-.076A1.751 1.751 0 0111 14.898zm1.294.376h-.037a.812.812 0 00.07 1.62.805.805 0 00.562-.263l.079-.1a.808.808 0 00-.674-1.257zm3.679-3.543l.179.925-8.516 1.645-.18-.926 8.517-1.644zm-4.703-3.355a1.678 1.678 0 01.038 3.356h-.076a1.678 1.678 0 01.038-3.356zm-.032.796h-.04a.793.793 0 00-.56.262.805.805 0 00.051 1.144c.16.144.368.22.583.214a.812.812 0 00-.034-1.62z');
                    path2.setAttributeNS(null, 'fill','#190F14')
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'offers-icon'
            customElements.define(customElementName, class extends SvgOffers {});
            export const OFFERS_ICON = customElementName;
            