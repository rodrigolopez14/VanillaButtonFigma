export default class SvgScheduleAService extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M9.786 3.085l.58.304c1.196.627 2.483 1.993 2.483 3.513 0 1.202-.715 3.216-2.626 3.51l-.379.055h-.122v-.794l.392-.06c1.424-.218 1.954-1.814 1.954-2.724 0-.911-.68-1.827-1.475-2.425v1.932l-1.622.763-1.586-.768V4.437c-.924.625-1.588 1.71-1.588 2.692 0 2.017 1.112 2.372 1.945 2.462l.382.043L7.4 19.957h2.485a.582.582 0 00.408-.188.842.842 0 00.265-.545l-.794-6.845v-.49h.794v.466l.794 6.845a1.623 1.623 0 01-.487 1.13 1.363 1.363 0 01-.969.421H6.55l.727-10.427C5.794 10.02 5 8.924 5 7.132 5 5.647 6.13 4.06 7.623 3.405l.553-.236v2.727l.795.384.815-.387V3.085zm7.901.26c.366.005.714.158.967.423.298.3.467.704.47 1.127v.045l-.624 5.493h-.794l.627-5.559a.836.836 0 00-.24-.548.582.582 0 00-.406-.188H15.19l.553 7.883h2.544l-.082.794h-1.178v4.744h.836l-.214 3.176h-2.041l-.215-3.176h.84v-4.744h-1.263v-.429l-.633-9.042zm-.664 15.024h-.77l.108 1.588h.553l.109-1.588zm-8.018-.495a.564.564 0 110 1.127.564.564 0 010-1.127z');
                    path2.setAttributeNS(null, 'fill','#190F14')
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'schedule-a-service-icon'
            customElements.define(customElementName, class extends SvgScheduleAService {});
            export const SCHEDULE_A_SERVICE_ICON = customElementName;
            