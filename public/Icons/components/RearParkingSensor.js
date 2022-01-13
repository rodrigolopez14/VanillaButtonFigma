export default class SvgRearParkingSensor extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M6.656 8.474a39.79 39.79 0 016.795-.217 5.372 5.372 0 012.074.58 29.44 29.44 0 012.815 1.6c.04.024.083.042.129.052l.17.017c1.518.131 3.363.338 4.139.784.067.042.513.346.943 1.25l.053.095-.075 1.488.128.125-.02.497-.519.302c-.195.104-.41.168-.63.19h-.073c-.167.016-.41.047-.75.047a2.034 2.034 0 01-3.815-.028l-7.505-.04v-.836l7.379.039a2.037 2.037 0 014.066.025c.234-.011.407-.04.536-.04h.075a.957.957 0 00.28-.08V14.2l.066-1.395a2.433 2.433 0 00-.575-.799c-.488-.27-1.758-.494-3.778-.667l-.173-.016a1.245 1.245 0 01-.503-.179 29.16 29.16 0 00-2.743-1.552 4.602 4.602 0 00-1.744-.493 39.645 39.645 0 00-6.675.214l-.307.017-1.63 1.638-.232.148v.963l-.31 1.222c.092.286.2.565.324.838l.316.053a2.043 2.043 0 11.03.87l-.781-.195-.07-.053c-.086-.059-.26-.201-.645-1.395l-.036-.115.355-1.395v-1.117l.039-.08c.055-.129.094-.16.541-.439l.865-.87-.162-.184.184-.662zm-5.78 3.154l.617.572a2.436 2.436 0 000 3.301l-.617.559a3.27 3.27 0 010-4.432zm6.006 1.741a1.203 1.203 0 100 2.406 1.203 1.203 0 000-2.406zm13.04 0a1.203 1.203 0 100 2.406 1.203 1.203 0 000-2.406zm-17.81-.625l.617.558v.014a.762.762 0 000 1.038l-.616.559a1.596 1.596 0 010-2.169zm5.54-3.042l1.976.695 6.206.313c.366.187.946.5 1.647.918l-8.015-.402-2.425-.851.611-.673z');
                    path2.setAttributeNS(null, 'fill','#190F14')
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'rear-parking-sensor-icon'
            customElements.define(customElementName, class extends SvgRearParkingSensor {});
            export const REAR_PARKING_SENSOR_ICON = customElementName;
            