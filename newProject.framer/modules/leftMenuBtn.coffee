class exports.leftMenuBtn extends Layer

    constructor: (@options={}) ->
		 								
            @options.icon ?= "home"
            super @options
            styles= require "wixStyles"

            home = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="22" height="26"><defs><path id="a" d="M22 3a5 5 0 0 1 5 5v16a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h12zm0 20V9a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1zm-9-10v-2h6v2h-6zm0 4v-2h6v2h-6zm0 4v-2h6v2h-6z"/></defs><use  fill-rule="evenodd" transform="translate(-5 -3)" xlink:href="#a"/></svg>'
            background ='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24"><defs><path id="a" d="M5 19h14V5H5v14zM19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5z"/></defs><use fill-rule="evenodd" xlink:href="#a"/></svg>'
            add = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24"><defs><path id="a" d="M18.4 13.44h-4.8v4.8h-2.88v-4.8h-4.8v-2.88h4.8v-4.8h2.88v4.8h4.8v2.88zM11.99 0C5.456 0 0 5.453 0 11.98 0 18.508 5.456 24 11.99 24S24 18.53 24 12 18.524 0 11.99 0z"/></defs><use  fill-rule="evenodd" xlink:href="#a"/></svg>'
            appMarket = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24"><defs><path id="a" d="M18 6V3h-2v3h-3v2h3v3h2V8h3V6h-3zM0 7.998C0 6.895.887 6 1.998 6h4.004C7.105 6 8 6.887 8 7.998v4.004A1.993 1.993 0 0 1 6.002 14H1.998A1.993 1.993 0 0 1 0 12.002V7.998zm0 10C0 16.895.887 16 1.998 16h4.004C7.105 16 8 16.887 8 17.998v4.004A1.993 1.993 0 0 1 6.002 24H1.998A1.993 1.993 0 0 1 0 22.002v-4.004zm10 0c0-1.103.887-1.998 1.998-1.998h4.004c1.103 0 1.998.887 1.998 1.998v4.004A1.993 1.993 0 0 1 16.002 24h-4.004A1.993 1.993 0 0 1 10 22.002v-4.004zm0-15.992C10 .898 10.897 0 12.006 0h9.988C23.102 0 24 .897 24 2.006v9.988A2.005 2.005 0 0 1 21.994 14h-9.988A2.005 2.005 0 0 1 10 11.994V2.006z"/></defs><use fill-rule="evenodd" xlink:href="#a"/></svg>'
            media = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="28" height="21"><defs><path id="a" d="M21.536 6.82C20.573 2.906 17.05 0 12.84 0 7.888 0 1.53 3.643 3.988 12.268 3.775 12.233 0 12.393 0 16.398c0 2.205 1.788 3.87 3.993 3.87h8.495V11.1l-2.455 2.145c-.4.381-1.143.906-1.734.316-.53-.53-.373-1.229.064-1.698l5.125-4.594 5.14 4.531c.401.38.436 1.023.046 1.413-.403.402-1.117.583-1.663.038l-2.523-2.15v9.168h6.654c3.788 0 6.858-2.947 6.858-6.734 0-3.654-2.86-6.51-6.464-6.714"/></defs><use fill-rule="evenodd" xlink:href="#a"/></svg>'
            blog = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="30"><defs><path id="a" d="M13.499 2h-9a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5m.162 2H4.337a.5.5 0 0 0-.464.314L0 14l8 16h.5V16.929a1.997 1.997 0 1 1 1.75-3.492 1.996 1.996 0 0 1-.749 3.492V30h.5l8-16-3.878-9.686A.5.5 0 0 0 13.662 4"/></defs><use fill-rule="nonzero" xlink:href="#a"/></svg>'
            data = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="22"><defs><path id="a" d="M6.287 10.418C5.5 10.071 5 9.241 5 8.333c0-.907.5-1.738 1.287-2.084C8.027 5.482 10.539 5 13.334 5c2.793 0 5.305.482 7.046 1.249.787.346 1.287 1.177 1.287 2.084 0 .908-.5 1.738-1.287 2.085-1.741.767-4.253 1.249-7.046 1.249-2.795 0-5.306-.482-7.047-1.249zm-.032 4.337A1.941 1.941 0 0 1 5 12.955v-1.288c1.741 1.012 4.628 1.698 8.126 1.698 1.256 0 2.449-.09 3.54-.251a5.726 5.726 0 0 0-1.815 2.66c-.56.036-1.133.06-1.725.06-2.724 0-5.173-.417-6.871-1.08zm.156 4.28C5.548 18.725 5 17.981 5 17.168v-1.335c1.958.977 4.743 1.653 8.333 1.744-.564.556-1 1.214-1.245 1.944a5.153 5.153 0 0 0-1.024.479c-1.809-.183-3.412-.518-4.653-.965zM5 20c.724.65 1.928 1.175 3.333 1.507a5.54 5.54 0 0 0-.436 2.163c0 .169.024.331.038.497a9.37 9.37 0 0 1-1.892-.72C5.405 23.111 5 22.311 5 21.436V20zm15.9-6.667c4.4 0 4.55 4.445 4.55 4.445h.01c2.507 0 4.54 1.987 4.54 4.436 0 2.447-2.03 4.434-4.535 4.437l-12.752.016h-.005C11.483 26.667 10 26.109 10 24c0-2.108 1.947-2.677 2.727-2.677 0-1.767 1.802-3.545 3.622-3.545 0 0 .149-4.445 4.55-4.445z"/></defs><use fill-rule="nonzero" transform="translate(-5 -5)" xlink:href="#a"/></svg>'
            

            genertaeLabel =(label)->
                switch label
                    when "home"
                        label="Menus & Pages"
                    when "background"
                        label="Background"
                    when "add"
                        label="Add"
                    when "appMarket"
                        label="Add Apps"
                    when "media"
                        label="My Uploads"
                    when "blog"
                        label="My Blog"
                    when "data"
                        label="Data App"
                return label

            this.props=
                borderRadius: 100
                shadowColor: "rgba(0,0,0,0.54)"
                shadowX: 0
                shadowY: 2
                shadowBlur: 5
                shadowSpread: 0
                gradient:
                    end: "#FCFCFC"
                    start: "#F4F4F4"
                    angle: 0
                style:
                    width:"auto"
                    height:"auto"
                    display:"flex"
                    justifyContent:"center"
                    alignItems:"center"
                    minHeight:"48px"
                    minWidth:"48px"
  

            icon = new SVGLayer
                parent:this
                svg:eval(@options.icon)
                fill:"#2D4150"
                style:
                    position:"relative"
                    width:"auto"
                    height:"auto"

            
            label = new Layer
                name:"label"
                visible:false
                parent:this
                html:genertaeLabel(@options.icon)
                style:styles.t05
            label.style=
                position:"relative"
                height:"auto"
                width:"auto"
                paddingRight:"20px"
                paddingLeft:"10px"
                whiteSpace:"nowrap"
            
            this.onMouseOver ->
                this.style =
                    paddingLeft:"12px"
                label = this.childrenWithName("label")[0]
                label.visible = true
            this.onMouseOut ->
                this.style =
                    paddingLeft:"initial"
                label = this.childrenWithName("label")[0]
                label.visible = false