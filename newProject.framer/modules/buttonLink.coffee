class exports.buttonLink extends Layer
    Events.OnClicked  = "OnClicked"
    constructor: (@options={}) ->
		 								
            @options.width ?=288
            @options.btnLabel ?="Primary btn"
            @options.btnType ?="main"
            @options.link ?="true"
            @options.linkLabel ?="Link"
            super @options

            styles= require "wixStyles"
            colors= require "wixColors"
            icons= require "icons"
            panel = @.parent
            mc = this

            btnType = {main:{hover:colors.b2, idle:colors.b1},secondary:{hover:colors.b4, idle:colors.b5}}
            

            @.props=
                backgroundColor:"rgba(255, 255, 255, 0.8)"
                height:108
                width:@options.width
                y:panel.height - 107
                style:
                    paddingTop:"24px"
                    textAlign:"center"
                    margin:"auto"

            panel.on "change:height", ->
                mc.y=panel.height - 107
            
            btn = new Layer
                parent:@
                html:@options.btnLabel
                style:styles.t01
                name:"btn"
            
            btn.style=
                position:"relative"
                color:"white"
                backgroundColor:btnType[@options.btnType].idle
                height:"36px"
                width:"auto"
                padding:"6px 24px"
                borderRadius:"30px"
                textAlign:"center"
                display:"inline-block"
                cursor:"pointer"
            

            btn.states.hover=
                backgroundColor:btnType[@options.btnType].hover
            btn.states.idle=
                backgroundColor:btnType[@options.btnType].idle


            btn.onMouseOver ->
                this.stateSwitch("hover")
            btn.onMouseOut ->
                this.stateSwitch("idle")
            
            btn.onClick -> 
                mc.emit(Events.OnClicked, mc)
           
            if @options.link
                link = new Layer
                    parent:@
                    html:@options.linkLabel
                    style:styles.t02
                link.style=
                    position:"relative"
                    color:colors.b1
                    height:"36px"
                    marginTop:"10px"
                    width:"auto"
                    textAlign:"center"
          