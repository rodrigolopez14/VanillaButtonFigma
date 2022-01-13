export default class SvgBlindSpot extends HTMLElement {
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
		path2.setAttributeNS(null, 'd', "M5.614 6.28c.783-.27 6.115-.056 10.174.816 1.534.304 3.015.831 4.395 1.565.752.436.958 1.122.556 1.836-.715 1.276-2.992 3.767-4.325 4.56l-.12.076c-.394.253-.681.389-2.418.449-.666.015-.866 0-1.232 0a9.772 9.772 0 00-.653-.018h-.515c-.32.005-.622.143-.835.38L9.623 17.14H8.58l1.453-1.703c.358-.42.883-.66 1.435-.655.608.002.936.018 1.184.018.36.018.543.024 1.185 0 1.456-.057 1.72-.144 1.951-.28l.07-.043.144-.092c1.234-.733 3.404-3.107 4.061-4.275.165-.287.18-.522-.26-.783a15.28 15.28 0 00-4.174-1.482c-4.122-.884-9.201-1.027-9.754-.84-.415.152-.53.246-.561.522-.031.277.151 1.657.31 2.885l.04.295.077.598c.167 1.3.316 2.592.316 3.255a1.878 1.878 0 01-.427 1.182l-.021.026-1.357 1.393H3.157l1.87-1.923c.155-.19.24-.43.24-.675.003-.765-.224-2.507-.425-4.044-.227-1.737-.352-2.734-.313-3.075.096-.827.764-1.054 1.085-1.164zm9.143 4.772l.553.553-.587.587-.553-.553.587-.587zm2.195-.006l.587.587-.553.553-.587-.587.553-.553zm-2.262-.927v.783h-.83v-.783h.83zm3.15-.01v.782h-.829v-.782h.83zm-3.123-1.286l.587.587-.553.553-.587-.587.553-.553zm2.263-.006l.553.553-.587.587-.553-.553.587-.587z");
		path2.setAttributeNS(null, 'fill','#190F14')

        svgElem.appendChild(g);
		g.appendChild(path2)
        this.innerHTML=`${svgElem.outerHTML}`
      }
}

var customElementName = "blind-spot-icon"
customElements.define(customElementName, class extends SvgBlindSpot {});
export const BLIND_SPOT_ICON = customElementName;


