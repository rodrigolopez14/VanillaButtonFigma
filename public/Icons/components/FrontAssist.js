export default class SvgFrontAssist extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M3.49 8.474a39.371 39.371 0 016.717-.215 5.31 5.31 0 012.06.569 28.34 28.34 0 012.779 1.58c.039.025.081.042.126.053l.182.022c1.501.124 3.322.328 4.083.77.064.04.505.341.933 1.235l.044.094-.066 1.481.115.133-.019.49-.51.299a1.686 1.686 0 01-.624.187l-.069-.002c-.165.016-.405.047-.744.047h.016a2.011 2.011 0 01-3.77-.028l-7.466-.039v-.827l7.344.038a2.014 2.014 0 014.016.011c.232-.008.403-.041.533-.041h.071a.874.874 0 00.276-.08v-.121l.07-1.38a2.436 2.436 0 00-.564-.789c-.482-.264-1.737-.488-3.732-.659l-.174-.016a1.23 1.23 0 01-.496-.177 28.414 28.414 0 00-2.734-1.52 4.458 4.458 0 00-1.721-.488 39.272 39.272 0 00-6.602.212l-.303.017-1.609 1.605-.226.146v.952l-.306 1.208c.093.281.2.558.32.828l.303.041a2.014 2.014 0 11.034.861l-.773-.193-.069-.052c-.088-.058-.26-.2-.64-1.38l-.036-.113.353-1.38V10.75l.036-.08c.058-.127.097-.157.535-.433l.856-.86-.16-.183.19-.642zm19.5 3.098a3.233 3.233 0 010 4.381l-.61-.565c.85-.922.85-2.342 0-3.264zm-6.375 1.736a1.189 1.189 0 100 2.378 1.189 1.189 0 000-2.378zm-12.89 0a1.189 1.189 0 10.005 2.378 1.189 1.189 0 00-.006-2.378zm18.043-.624c.56.605.56 1.539 0 2.144l-.61-.552a.756.756 0 00.202-.513.756.756 0 00-.201-.522zM4.486 9.683l1.955.687 6.136.306c.358.185.932.494 1.624.91L6.28 11.19l-2.395-.841.602-.665z');
                    path2.setAttributeNS(null, 'fill','#190F14')
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'front-assist-icon'
            customElements.define(customElementName, class extends SvgFrontAssist {});
            export const FRONT_ASSIST_ICON = customElementName;
            