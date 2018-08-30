class exports.btnPanel extends Layer

    constructor: (@options={}) ->
            @options.items ?= ["Collection Manager","Database Elements","Learn More"]
            @options.panelColor ?= "rgba(43,86,114,1)"
            @options.panelY ?= 342
            @options.icon ?= '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="23"><defs><path id="a" d="M28.668 23.103c.826 2.535-1.041 4.894-3.456 4.897H14.201a2.199 2.199 0 0 1-2.159-2.615c.066-.344.215-.654.42-.92l.05-.06a2.18 2.18 0 0 1 .432-.408l.005-.004a2.2 2.2 0 0 1 .526-.261l.126-.04a2.2 2.2 0 0 1 .6-.092v-.733a2.933 2.933 0 0 1 2.933-2.933h.843C18.218 18.864 19 17 21.533 17c1.426 0 2.293.596 2.826 1.306l.006.007c.076.102.146.204.208.308l.015.028a3.885 3.885 0 0 1 .3.622l.016.043a4.913 4.913 0 0 1 .289 1.268l.002.006.005.079h.008c1.55 0 2.98.96 3.46 2.436zm-16.404-1.03A4.208 4.208 0 0 0 10.086 25H8c-1.65 0-3-1.35-3-3V8c0-1.65 1.35-3 3-3h14c1.65 0 3 1.35 3 3v8.135a5.14 5.14 0 0 0-2-.948V15h-4v.55c-.802.38-1.48.948-2 1.689v-2.24h-4v3h3.394a4.928 4.928 0 0 0-3.263 2H13v.206a4.89 4.89 0 0 0-.736 1.868zM7 18h4v-3H7v3zm0 5h4v-3H7v3zm6-10h4v-3h-4v3zm6 0h4v-3h-4v3zM7 13h4v-3H7v3z"/></defs><use  fill-rule="nonzero" transform="translate(-5 -5)" xlink:href="#a"/></svg>'
            @options.title ?= "Add Text"

            super @options
            {panelHeader}= require "panelHeader"
            this.selected = -1
            this.btns = []
            styles= require "wixStyles"
            colors= require "wixColors"
            helpIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='25' height='25'><g fill='none' fill-rule='evenodd'><circle cx='12.5' cy='12.5' r='12.5' fill='#EAF7FF'/><path fill='#3899EC' d='M15.009 6.805c.309.264.552.583.729.96.174.38.262.802.262 1.273 0 .615-.135 1.129-.403 1.557a6.377 6.377 0 0 1-1.034 1.22c-.355.35-.629.59-.827.777-.2.187-.348.317-.448.51-.098.192-.166.303-.199.568-.032.262-.055.918-.065.918H12.1c0-1.58.401-1.984.89-2.514.24-.257.54-.537.893-.856a4.11 4.11 0 0 0 .772-.954c.203-.35.304-.741.304-1.17a2.105 2.105 0 0 0-.703-1.605 2.429 2.429 0 0 0-.753-.45 2.531 2.531 0 0 0-.91-.165c-.452 0-.846.078-1.182.232a2.31 2.31 0 0 0-.836.635 2.78 2.78 0 0 0-.496.95c-.11.363-.159 1.194-.149 1.194H9c0-1.69.558-2.488.873-2.823a3.224 3.224 0 0 1 1.176-.782c.467-.186 1-.28 1.594-.28.464 0 .895.069 1.3.205.402.137.756.337 1.066.6zM12.1 18v-1.797h.924V18H12.1z'/></g></svg>"
            closeIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='25' height='25'><g fill='none' fill-rule='evenodd'><circle cx='12.5' cy='12.5' r='12.5' fill='#EAF7FF'/><path fill='#3899EC' d='M8 8h1v1H8V8zm1 1h1v1H9V9zm1 1h1v1h-1v-1zm1 1h1v1h-1v-1zm1 1h1v1h-1v-1zm1 1h1v1h-1v-1zm1 1h1v1h-1v-1zm1 1h1v1h-1v-1zm1 1h1v1h-1v-1zm0-8h1v1h-1V8zm-1 1h1v1h-1V9zm-1 1h1v1h-1v-1zm-1 1h1v1h-1v-1zm-2 2h1v1h-1v-1zm-1 1h1v1h-1v-1zm-1 1h1v1H9v-1zm-1 1h1v1H8v-1z'/></g></svg>"
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
                    overflowY:"auto"
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
                    
            content = new Layer
                parent:rectangle
                name:"content"
                style:
                    position:"relative"
                    flex: "1 1 auto"
                    height:"100%"

            header = new panelHeader
                parent:content
                name:"header"
            # header.updateTitle("test")


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
                    mc.dispatch(this.index)

            
    dispatch: (i)->
        selected = this.selected
        btns = this.btns
        if selected >= 0
            btns[selected].backgroundColor="rgba(0, 0 , 0, 0)"
            btns[selected].active = true
        btns[i].active = false
        btns[i].backgroundColor="rgba(0, 0 , 0, 0.2)"
        this.selected = i

    updateTitle: (value)->
        rectangle = this.childrenWithName("rectangle")[0]
        content = rectangle.childrenWithName("content")[0]
        header = content.childrenWithName("header")[0]
        header.updateTitle(value)