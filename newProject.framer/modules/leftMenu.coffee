class exports.leftMenu extends Layer

    constructor: (@options={}) ->
		 								
            @options.icons ?= ["home","background","add","appMarket","media","blog","data"]
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

            

            
            

            
