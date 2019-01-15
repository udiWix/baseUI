class exports.gfppFrame extends Layer

    constructor: (@options={}) ->
            # @options.btns ?=["settings","design","help","data"]
            @options.btns ?=[{label:"settings", icon:true},{label:"design", icon:true},{label:"help", icon:true},{label:"data", icon:true}]
            @options.mc ?= null
            @options.strokeWidth ?= 2
            super @options

            
            {gfppBtn} = require "gfppBtn"
            frame = @options.mc.frame

            level = false 
            
            if @options.mc.name == "Repeater" | @options.mc.name == "tileBg"
                level = true




            this.props = 
                parent:@options.mc.parent
                name:"gfpp"
                x:frame.x
                y:frame.y
                width:frame.width
                height:frame.height
                custom:@options.mc

            if level 
                this.sendToBack()
                @options.mc.sendToBack()

            blueBorder = new Layer
                name:"border"
                parent:this
                width:frame.width+@options.strokeWidth
                height:frame.height+@options.strokeWidth
                borderWidth:2
                borderColor:"#00ABF6"
                visible:true
                x:-@options.strokeWidth/2
                y:-@options.strokeWidth/2

            for i in [0..7]
                circle = new Layer
                    width:9
                    height:9
                    backgroundColor:"#fff"
                    borderColor:"#00ABF6"
                    borderWidth:1
                    parent:this
                    borderRadius:100
                    name:"circle"

                switch i
                    when 0
                        circle.x=blueBorder.minX-4
                        circle.y=blueBorder.minY-4
                    when 1
                        circle.x=blueBorder.midX-4
                        circle.y=blueBorder.minY-4
                    when 2
                        circle.x=blueBorder.maxX-5
                        circle.y=blueBorder.minY-4
                    when 3
                        circle.x=blueBorder.minX-4
                        circle.y=blueBorder.maxY-4
                    when 4
                        circle.x=blueBorder.midX-4
                        circle.y=blueBorder.maxY-4
                    when 5
                        circle.x=blueBorder.maxX-5
                        circle.y=blueBorder.maxY-4
                    when 6
                        circle.x=blueBorder.maxX-5
                        circle.y=blueBorder.midY-4
                    when 7
                        circle.x=blueBorder.minX-4
                        circle.y=blueBorder.midY-4
            
            gfppContainer = new Layer
                parent: this
                name:"gfppContainer"
                y:-50
                height:32
                style:
                    display:"flex"
                    position:"absolute"	
                    width:"500px"
            
            for btn in @options.btns
                bt = new gfppBtn
                    parent:gfppContainer
                    icon:btn
            

            this.draggable.enabled =true
            this.draggable.momentum = false
            this.draggable.propagateEvents = false
            
            
            this.onDrag (e) ->
                if !level
                    layer = this.custom
                    layer.x = this.x
                    layer.y = this.y

