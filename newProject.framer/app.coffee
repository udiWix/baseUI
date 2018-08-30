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
leftMenuFocus = null


leftMenu.on Events.Selected, (value) ->
	if leftMenuFocus
		removeTab(leftMenuFocus)
	isShow = false
	switch value.name
		when "data"
			panel = dataPanel
			isShow = true
		when "add"
			panel = addPanel
			isShow = true
	if isShow
		showTab(panel)
		leftMenuFocus =panel


showTab = (tab) ->
	tab.visible=true
	tab.animate
		opacity:1
		options:
			time:0.2
			
removeTab = (tab) ->	
	passParamToLeftMenu(true)
	tab.visible=false
	tab.opacity=0	

passParamToLeftMenu = (value)->
	btns = leftMenu.children
	for btn in btns
		btn.options.open = value

dataPanel = new m.btnPanel
	opacity:0
	visible:false
dataPanel.dispatch(0)


addPanel = new m.btnPanel
	x: 72
	y: 80
	panelY:102
	icon:m.icons.add
	panelColor:"#3898EA"
	visible:false
	items:["Database","User Input","Page","Text","Image","Gallery","Vector Art","Shape","Interactive","Button","Box","Strip","Lists & Grids","Video","Music","Social","Forms"]
addPanel.dispatch(0)


focusManager =(mc) ->
	if leftMenuFocus
		removeTab(leftMenuFocus)
		
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











