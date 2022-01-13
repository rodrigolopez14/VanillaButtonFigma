export default class SvgChallenge extends HTMLElement {
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
		path2.setAttributeNS(null, 'd', "M20.317 2a8.211 8.211 0 01-.368 2.311c-.318.858-.806 1.583-1.335 1.86.276-1.228.415-2.483.415-3.742V2H6.146v.429c0 1.258.137 2.514.411 3.742-.463-.242-.9-.837-1.217-1.548A7.003 7.003 0 014.857 2H4v.429a6.706 6.706 0 00.806 3.017c.551 1.008 1.257 1.594 2 1.685.857 3 2.525 5.358 4.491 6.109v3.474a1.143 1.143 0 01-.963 1.169H7.431v3.857h10.303v-4.286H13.02v.857h3.857v2.572H8.306V18.74h2.111a2 2 0 001.752-2.031V12.62l-.318-.089C8.96 11.674 7.13 6.946 7.01 2.857h11.157c-.123 4.089-1.952 8.817-4.843 9.674l-.312.089v3.123h.858v-2.494c1.968-.749 3.625-3.109 4.5-6.112.742-.091 1.445-.677 2-1.686a6.706 6.706 0 00.805-3.017v-.428L20.317 2z");
		path2.setAttributeNS(null, 'fill','#190F14')

        svgElem.appendChild(g);
		g.appendChild(path2)
        this.innerHTML=`${svgElem.outerHTML}`
      }
}

var customElementName = "challenge-icon"
customElements.define(customElementName, class extends SvgChallenge {});
export const CHALLENGE_ICON = customElementName;




