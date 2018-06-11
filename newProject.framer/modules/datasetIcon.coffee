class exports.datasetIcon extends Layer
    
    constructor: (@options={}) ->
            @options.setName ?="Properties List"							
            super @options

            styles= require "wixStyles"
            colors= require "wixColors"
            icons= require "icons"
            mc = this
            @.props=
                backgroundColor:"white"
                shadowBlur: 14
                shadowColor: "rgba(22,45,61,0.36)"
                borderRadius:8
                width:50
                height:50

            
            icon = new SVGLayer
                parent:mc
                svg:icons.dataset
                width:30
                height:26
            
            label = new TextLayer
                parent:icon
                text:@options.setName
                y:45
                fontSize:12
                fontWeight: 700
                shadowColor:"rgba(0,0,0,0.7)"
                shadowBlur:3
                color:"white"
            label.centerX()



            icon.center()
            
            
            @.onMouseDown ->
                @.draggable.enabled = true


            @.onMouseUp ->
                @.draggable.enabled = false

