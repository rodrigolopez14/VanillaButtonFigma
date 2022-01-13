export default class SvgGlossyCap extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M20.919 8.768a17.794 17.794 0 00-4.884-1.739C11.525 6.061 5.6 5.821 4.73 6.122c-.356.122-1.098.374-1.205 1.293-.044.38.095 1.49.347 3.417.224 1.707.476 3.644.473 4.493a1.2 1.2 0 01-.267.75L2 18.213h1.217l1.508-1.548.023-.029c.304-.37.472-.834.475-1.313v-.14a7.07 7.07 0 002.58.58h.319l1.721-1.449h5.774l.122-.095a16.933 16.933 0 004.53-4.815l.212.116c.49.29.473.55.29.87-.73 1.298-3.142 3.936-4.513 4.75l-.16.102c-.29.18-.466.29-2.246.36-.713.025-.916.02-1.316 0-.275 0-.64-.018-1.316-.021a2.072 2.072 0 00-1.594.728L8.012 18.2H9.17l1.13-1.327c.232-.271.572-.426.928-.423.667 0 1.026 0 1.299.02.405 0 .629.017 1.368 0 1.93-.067 2.249-.218 2.687-.499l.133-.084c1.496-.893 4.026-3.66 4.82-5.075.447-.797.218-1.56-.617-2.044zm-5.571 4.655h-5.83l-1.738 1.47a6.722 6.722 0 01-2.609-.687c-.09-.991-.26-2.296-.417-3.493-.177-1.365-.38-2.898-.345-3.188.034-.29.162-.415.623-.58.614-.208 6.258-.05 10.838.934 1.247.265 2.466.654 3.637 1.159a16.414 16.414 0 01-4.16 4.385z');
                    path2.setAttributeNS(null, 'fill','#190F14')
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'glossy-cap-icon'
            customElements.define(customElementName, class extends SvgGlossyCap {});
            export const GLOSSY_CAP_ICON = customElementName;
            