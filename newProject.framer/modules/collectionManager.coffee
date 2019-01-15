class exports.collectionManager extends Layer
    Events.onTriger = "Open"
 
    constructor: (@options={}) ->
            @options.collections ?= ["Properties","Agents"]
            super @options
            {contextMenu} = require "contextMenu"
            this.style=
                position:"relative"
                width:"100%"
                height:"550px"
                display:"flex"
                flexDirection: "column"
                
            mc= this
            styles= require "wixStyles"
            colors= require "wixColors"
            {buttonLink} = require "buttonLink"

            collectionIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="29"><path fill="#2B5672" fill-rule="evenodd" d="M12 23h17.5c.275 0 .5-.225.5-.5V18H12v5zm-1 0v-5H6v-1h5v-5H6v-1h5V6H6.5c-.275 0-.5.225-.5.5v16c0 .275.225.5.5.5H11zm1-17v5h18V6.5c0-.275-.225-.5-.5-.5H12zm0 6v5h18v-5H12zm-1-7h18.5c.827 0 1.5.673 1.5 1.5v16c0 .827-.673 1.5-1.5 1.5h-23c-.827 0-1.5-.673-1.5-1.5v-16C5 5.673 5.673 5 6.5 5H11zM3 .5h30c1.379 0 2.5 1.121 2.5 2.5v23c0 1.38-1.121 2.5-2.5 2.5H3C1.62 28.5.5 27.38.5 26V3C.5 1.621 1.62.5 3 .5zm0 1c-.827 0-1.5.674-1.5 1.5v23c0 .827.673 1.5 1.5 1.5h30c.827 0 1.5-.673 1.5-1.5V3c0-.826-.673-1.5-1.5-1.5H3z"/></svg>'
            for collection in @options.collections
                item = new Layer
                    parent:mc
                    name:collection
                    style:
                        position:"relative"
                        display:"flex"
                        width:"100%"
                        height:"66px"
                        borderBottom:"1px solid #D9E1E8"
                        cursor:"pointer"
                item.onClick (e) ->
                    e.stopPropagation()
                    mc.dispatch(this)

                icon = new SVGLayer
                    parent:item
                    svg:collectionIcon
                    style:
                        width:"auto"
                        height:"auto"
                        position:"relative"
                        marginTop:"18px"
                        marginLeft:"24px"
                title = new Layer
                    parent:item
                    style:styles.t05
                    html:collection
                    name:"title"
                title.style=
                    position:"relative"
                    width:"100%"
                    color:colors.d2
                    marginLeft:"15px"
                    marginTop:"15px"
                    height:"100%"
                permissions = new Layer
                    parent:title
                    html:"Permissions: Site Content"
                    style:styles.t15
                permissions.style=
                    position:"relative"
                    color:colors.d3
                    marginTop:"5px"
                menuIcon = new contextMenu
                    parent:item
                
                menuIcon.on Events.onOpen, (value) ->
                     mc.dispatch(value)
            
            button = new buttonLink
                parent:this
                link:false
                btnLabel:"Create New Collection"
                

    dispatch: (value)->
        p = this.parent.parent.parent.parent
        p.dispatch(null, false, value)  

     
