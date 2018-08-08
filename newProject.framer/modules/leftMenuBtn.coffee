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
            data = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="23"><defs><path id="a" d="M28.668 23.103c.826 2.535-1.041 4.894-3.456 4.897H14.201a2.199 2.199 0 0 1-2.159-2.615c.066-.344.215-.654.42-.92l.05-.06a2.18 2.18 0 0 1 .432-.408l.005-.004a2.2 2.2 0 0 1 .526-.261l.126-.04a2.2 2.2 0 0 1 .6-.092v-.733a2.933 2.933 0 0 1 2.933-2.933h.843C18.218 18.864 19 17 21.533 17c1.426 0 2.293.596 2.826 1.306l.006.007c.076.102.146.204.208.308l.015.028a3.885 3.885 0 0 1 .3.622l.016.043a4.913 4.913 0 0 1 .289 1.268l.002.006.005.079h.008c1.55 0 2.98.96 3.46 2.436zm-16.404-1.03A4.208 4.208 0 0 0 10.086 25H8c-1.65 0-3-1.35-3-3V8c0-1.65 1.35-3 3-3h14c1.65 0 3 1.35 3 3v8.135a5.14 5.14 0 0 0-2-.948V15h-4v.55c-.802.38-1.48.948-2 1.689v-2.24h-4v3h3.394a4.928 4.928 0 0 0-3.263 2H13v.206a4.89 4.89 0 0 0-.736 1.868zM7 18h4v-3H7v3zm0 5h4v-3H7v3zm6-10h4v-3h-4v3zm6 0h4v-3h-4v3zM7 13h4v-3H7v3z"/></defs><use  fill-rule="nonzero" transform="translate(-5 -5)" xlink:href="#a"/></svg>'
            

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