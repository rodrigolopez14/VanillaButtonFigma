export default class SvgPetrolStations extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M19.483 11.07V3.01h-7.887c-1.005 0-1.76.702-1.76 1.629v5.582a1.744 1.744 0 00-1.722 1.741v6.985a.916.916 0 01-.935.917H5.806v-8.866h.36a1.658 1.658 0 001.74-1.642V6.178h-2.1V4.86c0-.497.365-1.053.89-1.053h.99V3h-.99C5.775 3 5 3.852 5 4.86v15.807h2.173a1.733 1.733 0 001.741-1.722V11.96c0-.51.407-.925.916-.935v9.642h7.765a1.846 1.846 0 001.88-1.846v-6.195h-.806v6.195a1.048 1.048 0 01-1.074 1.04h-6.953v-8.79h8.841zm-8.841-6.447c0-.538.478-.822.954-.822h7.081v6.447h-8.035V4.623zM7.106 6.987v2.372a.865.865 0 01-.935.836h-.365V6.992l1.3-.005z');
                    path2.setAttributeNS(null, 'fill','#190F14')
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'petrol-stations-icon'
            customElements.define(customElementName, class extends SvgPetrolStations {});
            export const PETROL_STATIONS_ICON = customElementName;
            