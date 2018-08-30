class exports.leftMenu extends Layer
    Events.Selected = "Selected"
    constructor: (@options={}) ->
		 								
            @options.icons ?= ["pages","background","add","appMarket","media","blog","data"]
            super @options
            
            {leftMenuBtn}= require "leftMenuBtn"
            btns = @options.icons
            mc = this
            @.props= 
                width:32
            
            for menuBtn,i in btns 
                btn = new leftMenuBtn
                    parent:mc
                    y:i*60
                    icon:menuBtn
                    name:menuBtn
                btn.onClick ->
                    this.parent.btnDispatch(this)

    btnDispatch: (value) ->
        @emit(Events.Selected,value)
    



            

            
            

            
