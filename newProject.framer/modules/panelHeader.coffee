class exports.panelHeader extends Layer
    constructor: (@options={}) ->
		 								
            @options.title ?= "Add Text"
            super @options
            styles= require "wixStyles"
            colors= require "wixColors"
            helpIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='25' height='25'><g fill='none' fill-rule='evenodd'><circle cx='12.5' cy='12.5' r='12.5' fill='#EAF7FF'/><path fill='#3899EC' d='M15.009 6.805c.309.264.552.583.729.96.174.38.262.802.262 1.273 0 .615-.135 1.129-.403 1.557a6.377 6.377 0 0 1-1.034 1.22c-.355.35-.629.59-.827.777-.2.187-.348.317-.448.51-.098.192-.166.303-.199.568-.032.262-.055.918-.065.918H12.1c0-1.58.401-1.984.89-2.514.24-.257.54-.537.893-.856a4.11 4.11 0 0 0 .772-.954c.203-.35.304-.741.304-1.17a2.105 2.105 0 0 0-.703-1.605 2.429 2.429 0 0 0-.753-.45 2.531 2.531 0 0 0-.91-.165c-.452 0-.846.078-1.182.232a2.31 2.31 0 0 0-.836.635 2.78 2.78 0 0 0-.496.95c-.11.363-.159 1.194-.149 1.194H9c0-1.69.558-2.488.873-2.823a3.224 3.224 0 0 1 1.176-.782c.467-.186 1-.28 1.594-.28.464 0 .895.069 1.3.205.402.137.756.337 1.066.6zM12.1 18v-1.797h.924V18H12.1z'/></g></svg>"
            closeIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='25' height='25'><g fill='none' fill-rule='evenodd'><circle cx='12.5' cy='12.5' r='12.5' fill='#EAF7FF'/><path fill='#3899EC' d='M8 8h1v1H8V8zm1 1h1v1H9V9zm1 1h1v1h-1v-1zm1 1h1v1h-1v-1zm1 1h1v1h-1v-1zm1 1h1v1h-1v-1zm1 1h1v1h-1v-1zm1 1h1v1h-1v-1zm1 1h1v1h-1v-1zm0-8h1v1h-1V8zm-1 1h1v1h-1V9zm-1 1h1v1h-1v-1zm-1 1h1v1h-1v-1zm-2 2h1v1h-1v-1zm-1 1h1v1h-1v-1zm-1 1h1v1H9v-1zm-1 1h1v1H8v-1z'/></g></svg>"                        
            
            this.props=
                height:54
                style:
                    width:"100%"
                    padding:"18px 24px"
                    borderBottom:"1px solid #D9E1E8"
                    height:"54px"

            hTitle = new Layer
                parent:this
                html:@options.title
                style:styles.t05
                x:24
                y:18
                name:"hTitle"
            hTitle.style=
                color:colors.d1
                height:"54px"
            close = new SVGLayer
                parent:this
                svg:closeIcon
                width:25
                height:25
                name:"close"
                style:
                    position:"relative"
                    float:"right"

            help = new SVGLayer
                parent:this
                svg:helpIcon
                width:25
                height:25
                name:"help"
                style:
                    position:"relative"
                    float:"right"
                    marginRight:"10px"

    updateTitle: (value) ->
        title = this.childrenWithName("hTitle")[0]
        title.html=value
    



            

            
            

            
