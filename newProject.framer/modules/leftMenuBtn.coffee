class exports.leftMenuBtn extends Layer

    constructor: (@options={}) ->						
            @options.icon ?= "pages"
            @options.open ?= true
            super @options
            styles= require "wixStyles"
            icons = require "icons"

            
            
            mc= this
            genertaeLabel =(label)->
                switch label
                    when "pages"
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
                    cursor:"pointer"
  
            
            icon = new SVGLayer
                parent:this
                svg:icons[@options.icon]
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
                if mc.options.open
                    this.style =
                        paddingLeft:"12px"
                    label = this.childrenWithName("label")[0]
                    label.visible = true
            this.onMouseOut ->
                    this.style =
                        paddingLeft:"initial"
                    label = this.childrenWithName("label")[0]
                    label.visible = false