# Setup
document.body.style.cursor = "auto"
Framer.Defaults.Layer.backgroundColor = null
m=require "master"
canvas = new Layer
	style:
		position:"fixed"
		width:"100%"
		height:"100%"
topbar = new m.topbar

leftMenu = new m.leftMenu
	y:80
	x:12
focusedComponent = null
canvas.sendToBack()
comp = require "gfpp"

leftMenu.on Events.Selected, (value) ->
	print value


focusManager =(mc) ->
	if focusedComponent
		comp.unFocus(focusedComponent)
	if mc
		comp.Focus(mc)
		focusedComponent = mc 

canvas.onClick (e) ->
	focusManager()

comp.addGFPP(Frame)
Frame.on Events.focused, (value) ->
	focusManager(value)

comp.addGFPP(Frame_1)
Frame_1.on Events.focused, (value) ->
	focusManager(value)
	
comp.addGFPP(Frame_2)
Frame_2.on Events.focused, (value) ->
	focusManager(value)

panel = new m.btnPanel
	x: 72
	y: 134









