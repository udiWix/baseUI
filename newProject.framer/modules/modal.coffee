class exports.modal extends Layer

    constructor: (@options={}) ->						
            @options.title ?= "Modal Name"
            super @options
            styles= require "wixStyles"
            icons = require "icons"
            {panelHeader} = require "panelHeader"
            this.content =null

            @.props=
                name:"modal"
                style:
                    position:"fixed"
                    width:"100%"
                    height:"100%"
                    backgroundColor:"rgba(0, 0, 0, 0.5)"
                    boxSizing:"border-box"
                    padding:"45px 40px 10px 40px"
                    
            
            win  = new Layer
                parent:@
                backgroundColor:"White"
                clip:true
                name:"win"
                style:
                    position:"relative"
                    width:"100%"
                    height:"100%"
                    borderRadius:"8px"
            
            header = new panelHeader
                parent:win
                title:@options.title
                panelColor:"blue"
                name:"header"
            
            header.on Events.onClose, (value) ->
                par = this.parent.parent
                par.destroy()
            
            content = new Layer
                parent:win
                name:"content"
                style:
                    position:"relative"
                    width:"100%"
                    height:"100%"
            @content = content

    insertContent: (mc) ->
        mc.parent = this.content
        
                    


