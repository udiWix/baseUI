class exports.datasetIcon extends Layer
    
    constructor: (@options={}) ->
            @options.setName ?="Properties List"							
            super @options

            styles= require "wixStyles"
            colors= require "wixColors"
            icons= require "icons"
            mc = this
            @.props=
                width:100
                height:85
                


            bg = new Layer
                parent:this
                backgroundColor:"white"
                shadowBlur: 14
                shadowColor: "rgba(22,45,61,0.45)"
                borderRadius:8
                width:50
                height:50
                y:10
                clip:true
            bg.centerX()
            icon = new SVGLayer
                parent:bg
                svg:icons.dataset
                w:50
                h:50
                y:1

            
            label = new TextLayer
                parent:this
                text:@options.setName
                y:65
                fontSize:12
                fontWeight: 700
                shadowColor:"rgba(0,0,0,0.9)"
                shadowBlur:2
                color:"white"
            label.centerX()



            # icon.center()
            
            
            @.onMouseDown ->
                @.draggable.enabled = true


            @.onMouseUp ->
                @.draggable.enabled = false

