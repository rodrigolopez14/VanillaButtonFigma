export default class SvgReceiveCode extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M23.918 7.125v9.21h-.911v-8.3H1.109V15.5h20.205v.912L.197 16.409V7.125h23.721zM4.189 9.865c.997 0 1.42.556 1.501 1.084l-.887.061a.532.532 0 00-.583-.507c-.277 0-.471.14-.471.35 0 .209.127.33.504.443l.416.127c.608.186 1.103.395 1.103 1.121s-.556 1.14-1.449 1.133c-.945 0-1.437-.473-1.519-1.133l.878-.06a.562.562 0 00.635.537c.34 0 .568-.149.568-.407s-.191-.352-.47-.437L4 12.049c-.79-.24-1.148-.525-1.148-1.133 0-.747.607-1.051 1.336-1.051zm13.313-.01c.984 0 1.607.724 1.607 1.912 0 1.187-.626 1.91-1.607 1.91s-1.607-.723-1.607-1.91c0-1.191.622-1.911 1.607-1.911zm-6.097.061l1.215 3.698h-.912l-.145-.538h-1.289l-.133.54h-.912l1.2-3.697.976-.003zm9.91.003v3.698h-.866V11.01c-.211.044-.426.063-.641.058v-.68c.51 0 .796-.12.899-.469h.607zm-12.587 0v.711H7.373v.73h1.31v.68h-1.31v.866H8.74v.708H6.507V9.919h2.221zm6.671 0v.711h-.978v2.984h-.872V10.63h-.975v-.71H15.4zm2.103.727c-.432 0-.714.385-.714 1.12 0 .736.3 1.134.714 1.134.413 0 .717-.398.717-1.133.009-.733-.286-1.121-.717-1.121zm-6.565.109l-.486 1.713h.938l-.452-1.713z');
                    path2.setAttributeNS(null, 'fill','#190F14')
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'receive-code-icon'
            customElements.define(customElementName, class extends SvgReceiveCode {});
            export const RECEIVE_CODE_ICON = customElementName;
            