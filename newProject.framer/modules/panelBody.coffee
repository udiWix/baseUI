class exports.panelBody extends Layer
    Events.dragEnd = "dragEnd"
    constructor: (@options={}) ->
		 								
            @options.height ?=558
            @options.width ?=288
            @options.title ?="Panel Title"
            @options.headerColor ?="blue"
            super @options

            styles= require "wixStyles"
            colors= require "wixColors"
            # icons= require "icons"


            hColor = colors.b1
            mc = this
            @.props=
                backgroundColor:"white"
                shadowBlur: 14
                shadowColor: "rgba(22,45,61,0.36)"
                borderRadius:8
                clip:true
                style:
                    paddingTop:"54px"
          

            switch @options.headerColor
                when "blue"
                    hColor = colors.b1
                    circle= colors.e1
                    icon = "white"
                    textColor = "white"
                    headerStyle=
                        padding:"18px 24px"

                when "white"
                    hColor = "white"
                    circle= colors.b5
                    icon=colors.b1
                    textColor = colors.d1
                    headerStyle=
                        padding:"18px 24px"
                        borderBottom:"1px solid #D9E1E8"

            helpIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25"><desc>  Created with Sketch.</desc><g fill="none"><circle cx="12.5" cy="12.5" r="12.5" fill="'+circle+'"/><g fill="'+icon+'"><path d="M15 6.8C15.3 7.1 15.6 7.4 15.7 7.8 15.9 8.1 16 8.6 16 9 16 9.7 15.9 10.2 15.6 10.6 15.3 11 15 11.5 14.6 11.8 14.2 12.2 13.9 12.4 13.7 12.6 13.5 12.8 13.4 12.9 13.3 13.1 13.2 13.3 13.1 13.4 13.1 13.7 13.1 13.9 13 14.6 13 14.6L12.1 14.6C12.1 13 12.5 12.6 13 12.1 13.2 11.8 13.5 11.5 13.9 11.2 14.2 10.9 14.4 10.6 14.7 10.3 14.9 9.9 15 9.5 15 9.1 15 8.5 14.7 7.9 14.3 7.5 14 7.3 13.8 7.1 13.5 7 13.2 6.9 12.9 6.9 12.6 6.9 12.1 6.9 11.7 7 11.4 7.1 11.1 7.3 10.8 7.5 10.6 7.7 10.3 8 10.2 8.3 10.1 8.7 10 9.1 9.9 9.9 9.9 9.9L9 9.9C9 8.2 9.6 7.4 9.9 7.1 10.2 6.7 10.6 6.5 11 6.3 11.5 6.1 12 6 12.6 6 13.1 6 13.5 6.1 13.9 6.2 14.3 6.3 14.7 6.5 15 6.8ZM12.1 18L12.1 16.2 13 16.2 13 18 12.1 18Z"/></g></g></svg>'

            closeIcon = '<svg width="25" height="25" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="'+circle+'" cx="12.5" cy="12.5" r="12.5"/><path d="M8 8h1v1H8V8zm1 1h1v1H9V9zm1 1h1v1h-1v-1zm1 1h1v1h-1v-1zm1 1h1v1h-1v-1zm1 1h1v1h-1v-1zm1 1h1v1h-1v-1zm1 1h1v1h-1v-1zm1 1h1v1h-1v-1zm0-8h1v1h-1V8zm-1 1h1v1h-1V9zm-1 1h1v1h-1v-1zm-1 1h1v1h-1v-1zm-2 2h1v1h-1v-1zm-1 1h1v1h-1v-1zm-1 1h1v1H9v-1zm-1 1h1v1H8v-1z" fill="'+icon+'"/></g></svg>'

            header = new Layer
                parent:mc
                width:@options.width
                backgroundColor:hColor
                height:54
                style:headerStyle       
            
            header.onMouseDown ->
                mc.draggable.enabled = true


            header.onMouseUp ->
                mc.draggable.enabled = false

            hTitle = new Layer
                parent:header
                html:@options.title
                style:styles.t05
            hTitle.style=
                position:"relative"
                color:textColor
            
            close = new Layer
                parent:header
                x:@options.width-43
                y:15
                html:closeIcon
                width:25
                height:25
                style:
                    cursor:"pointer"
            
            close.onClick ->
                mc.destroy()

            help = new Layer
                parent:header
                x:@options.width-77
                y:15
                width:25
                height:25
                html:helpIcon