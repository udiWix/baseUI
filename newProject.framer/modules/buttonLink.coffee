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
            mc = this

            btnType = {main:{hover:colors.b2, idle:colors.b1},secondary:{hover:colors.b4, idle:colors.b5}}
            

            @.props=
                backgroundColor:"rgba(255, 255, 255, 0.8)"
                style:
                    position:"relative"
                    alignself: "flex-end"
                    width:"100%"
                    height:"auto"
                    paddingTop:"24px"
                    paddingBottom:"24px"
                    textAlign:"center"
                    marginTop:"auto"



            
            btn = new Layer
                parent:@
                html:@options.btnLabel
                style:styles.t01
                
            
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
          