class exports.contextMenu extends Layer
    Events.onOpen = "Open"
    constructor: (@options={}) ->
        @options.items ?= ["Page","Data","Edit","Remove"]							
        super @options
        styles= require "wixStyles"
        colors= require "wixColors"
        icons = require "icons"
        h = (@options.items.length * 30)

        this.props=
                width:24
                height:24
                style:
                        position:"relative"
                        float:"right"
                        marginRight:"24px"
                        marginTop:"18px"
                        minHeight:"24px"
                        minWidth:"24px"
                        border:"solid 2px #D3EDFF"
                        borderRadius:"60px"
        dots = new SVGLayer
                parent:this
                svg:"<svg baseProfile='full' xmlns='http://www.w3.org/2000/svg' height='4' width='12' viewBox='0 0 12 4'><path  d='M9.999 3.01A1.046 1.046 0 1 1 9.998.917a1.046 1.046 0 0 1 .001 2.093zm-3.998 0A1.046 1.046 0 1 1 6 .917 1.046 1.046 0 0 1 6 3.01zm-4.048-.041A1.055 1.055 0 0 1 .906 1.906c0-.587.469-1.062 1.047-1.062S3 1.319 3 1.906c0 .587-.469 1.063-1.047 1.063z'></path></svg>"
                fill:"#4EB7F5"
                width:12
                height:4
                x:4
                y:8

        this.onMouseOver ->
                this.backgroundColor = "#3899ec"
                this.style["border"] = "solid 2px transparent"
                this.children[0].fill = "#fff"

        this.onMouseOut ->
                this.backgroundColor = "transparent"
                this.style["border"]="solid 2px #D3EDFF"
                this.children[0].fill = "#4EB7F5"
        this.onClick (e) ->
                e.stopPropagation()
                menu = new SVGLayer
                        name:"contextMenu"
                        parent:this
                        y:-20
                        x:10
                        svg:"<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='213' height='280'><defs><path id='b' d='M7 28.28l-7-6.739L7 15V8a8 8 0 0 1 8-8h175a8 8 0 0 1 8 8v#{h}a8 8 0 0 1-8 8H15a8 8 0 0 1-8-8V28.28z'/><filter id='a' width='112.1%' height='109.1%' x='-6.1%' y='-4.5%' filterUnits='objectBoundingBox'><feOffset in='SourceAlpha' result='shadowOffsetOuter1'/><feGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='4'/><feColorMatrix in='shadowBlurOuter1' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0'/></filter></defs><g fill='none' fill-rule='evenodd' transform='translate(7 8)'><use fill='#000' filter='url(#a)' xlink:href='#b'/><use fill='#FFF' xlink:href='#b'/></g></svg>"
                        style:
                                width:"auto"
                                height:"auto"
                
                for item,i in @options.items
                        btn = new Layer
                                height:30
                                y:16+i*31
                                x:14
                                parent:menu
                                html:itemLabel(item)
                                style:styles.t02
                        btn.style=
                                width:"90%"
                                paddingLeft:"42px"
                                lineHeight:"30px"
                        btn.onMouseOver (e) ->
                                this.backgroundColor="#D3EDFF"
                        btn.onMouseOut (e) ->
                                this.backgroundColor="white"  
                        icon = new SVGLayer
                                parent:btn
                                svg:itemSVG(item)
                                fill:"#2B5672" 
                                x:18
                                y:8                 
                
                menu.bringToFront()
                this.dispatch(menu)
        
        itemLabel =(item) ->
                string=""
                switch item
                        when "Page"
                                string = "Add a Dynamic Page"
                        when "Data"
                                string = "Add a Dataset"
                        when "Edit"
                                string = "Edit Permissions"
                        when "Remove"
                                string = "Remove Collection"
                return string
        itemSVG =(item) ->
                string=""
                switch item
                        when "Page"
                                string = icons.contextPage
                        when "Data"
                                string = icons.contextDataset
                        when "Edit"
                                string = icons.contextEdit
                        when "Remove"
                                string = icons.contextRemove
                return string
    
    dispatch: (value)->
        @emit(Events.onOpen,value)
        


