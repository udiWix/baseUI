class exports.btnPanel extends Layer
    Events.onTabSelected = "Selected"
    Events.onContentTriger = "contentTriger"
    
    constructor: (@options={}) ->
            @options.items ?= ["Collection Manager","Data Elements","Learn More"]
            @options.panelColor ?= "rgba(43,86,114,1)"
            @options.panelY ?= 342
            @options.icon ?= '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="21" height="24"><defs><path id="a" d="M0 18.522c2.046 1.425 5.979 2.391 10.5 2.391s8.454-.966 10.5-2.39v1.622c0 .984-.567 1.87-1.446 2.26C17.355 23.383 14.117 24 10.5 24c-3.615 0-6.855-.618-9.054-1.594A2.462 2.462 0 0 1 0 20.146v-1.624zM10.5 0c3.617 0 6.855.618 9.054 1.595A2.462 2.462 0 0 1 21 3.854v.007c0 .984-.567 1.871-1.446 2.261-2.199.976-5.437 1.595-9.054 1.595s-6.855-.619-9.054-1.595A2.462 2.462 0 0 1 0 3.863v-.008c0-.984.567-1.87 1.446-2.26C3.645.618 6.884 0 10.5 0zM0 13.044c2.046 1.425 5.979 2.391 10.5 2.391s8.454-.966 10.5-2.39v1.622c0 .984-.567 1.87-1.446 2.26-2.199.977-5.437 1.595-9.054 1.595-3.615 0-6.855-.618-9.054-1.594A2.462 2.462 0 0 1 0 14.668v-1.624zm0-5.327c2.046 1.426 5.979 2.391 10.5 2.391s8.454-.966 10.5-2.39V9.34c0 .984-.567 1.87-1.446 2.26-2.199.976-5.437 1.594-9.054 1.594-3.615 0-6.855-.617-9.054-1.594A2.462 2.462 0 0 1 0 9.341V7.718z"/></defs><use fill-rule="evenodd" xlink:href="#a"/></svg>'
            @options.title ?= "Add Text"

            super @options
            {panelHeader}= require "panelHeader"
            this.selected = -1
            this.btns = []
            this.element = null
            styles= require "wixStyles"
            colors= require "wixColors"
            
            mc = this
            this.props = 
                x:72
                y:80

            rectangle = new Layer
                parent:this
                width: 528
                height: 604
                backgroundColor: "rgba(255,255,255,1)"
                borderRadius: 8
                shadowColor: "rgba(22,45,61,0.36)"
                shadowBlur: 14
                name:"rectangle"
                style:
                    flex: "1 1 auto"
                    position: "relative"
                    # overflowY:"auto"
                    display: "flex"
                    justifyContent: "space-between"
            

            panelContainer = new Layer
                parent:rectangle
                height: 604
                name:"panel container"
                style:
                    position:"relative"
                    # display:"inline-block"
                    width:"auto"
                    paddingRight:"5px"
                    
            container = new Layer
                parent:rectangle
                name:"container"
                style:
                    position:"relative"
                    flex: "1 1 auto"
                    height:"100%"

            header = new panelHeader
                parent:container
                name:"header"
            # header.updateTitle("test")

            content = new Layer
                parent:container
                name:"content"
                style:
                    position:"relative"
                    width:"100%"
                    height:"550px"
            this.content = content

            # content.on Events.onTriger, (value) ->
            #         print value
            
            panel_1 = new Layer
                parent: panelContainer
                width: 10
                height: 604
                backgroundColor: @options.panelColor
                borderRadius: 8


            nob = new SVGLayer
                x:-60
                y:@options.panelY
                parent: this
                svg:"<svg xmlns='http://www.w3.org/2000/svg' width='60' height='84'><path fill= #{@options.panelColor} fill-rule='nonzero' d='M24 18C10.745 18 0 28.745 0 42s10.745 24 24 24h18c9.9 0 18 8.1 18 18V0c0 9.9-8.1 18-18 18H24z'/></svg>"

            icon = new SVGLayer
                parent:nob
                svg:@options.icon
                fill:"#fff"
                x:14
                y:30
            menuContainer = new Layer
                parent:panelContainer
                backgroundColor: @options.panelColor
                x:5
                style:
                    position:"relative"
                    height:"100%"
                    padding:"15px 7px"
                    width:"auto"

            for item in @options.items
                btn = new Layer
                    html:item
                    parent:menuContainer
                    height:30
                    style:styles.t02
                    backgroundColor:"rgba(0, 0 , 0, 0)"
                    name:item
                btn.style=
                    position:"relative"
                    color:"#fff"
                    width:"auto"
                    height:"initial"
                    margin:"0px 0px 4px 0px"
                    curser:"pointer"
                    lineHeight:"30px"
                    display:"inline-block"
                    borderRadius:"20px"
                    padding:"0px 14px"
                    cursor:"pointer"
                    clear: "both"
                    float:"left"
                btn.active = true
                this.btns.push(btn)
                btn.onMouseOver ->
                    if this.active
                        this.backgroundColor="rgba(0, 0 , 0, 0.1)"
                btn.onMouseOut ->
                     if this.active
                        this.backgroundColor="rgba(0, 0 , 0, 0)"
                btn.onClick ->
                    mc.dispatch(this.index,true)

            
    dispatch: (i, tab, v)->
        if tab
            selected = this.selected
            btns = this.btns
            if selected >= 0
                btns[selected].backgroundColor="rgba(0, 0 , 0, 0)"
                btns[selected].active = true
            btns[i].active = false
            btns[i].backgroundColor="rgba(0, 0 , 0, 0.2)"
            this.selected = i
            value = btns[i]
            @emit(Events.onTabSelected,value)
        else 
            @emit(Events.onContentTriger,v)

    updateTitle: (value)->
        rectangle = this.childrenWithName("rectangle")[0]
        container = rectangle.childrenWithName("container")[0]
        header = container.childrenWithName("header")[0]
        header.updateTitle(value)
    
    insertContent: (mc) ->
        mc.parent = this.content
        this.element=mc