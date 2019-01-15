# Setup
document.body.style.cursor = "auto"
Framer.Defaults.Layer.backgroundColor = null
Framer.Extras.Hints.disable()
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

# tools = new m.tools
# 	x:Canvas.width-120
# 	y:60
# tools.name="tools"
# tools.draggable.enabled = true
# tools.draggable.momentum = false

focusedComponent = null
canvas.sendToBack()
hover = require "gfppHover"
leftMenuFocus = null
contextMenu = null
gfpp = null
Utils.insertCSS(m.editorCss)

dataset = new m.datasetIcon
	y:100
	x:400
	parent:stage
	name:"dataset"

#properties npanel
properties = new m.panelBody
	parent:stage
	width:222
	height:350
	x:1000
	y:-100
	headerColor:"white"
content = new Layer
	parent:properties
	style:
		position:"relative"
		width:"100%"
		height:"100%"

# id = new Layer
# 	parent:content
# 	style:
# 		position:"relative"
# 		width:"100%"
# 		height:"30px"
# 		display: "flex",
# 		alignItems:"center"
# 		padding:"0px 12px"
# 
# idLabel = new Layer
# 	parent:id
# 	html:"ID:"
# 	style:
# 		position:"relative",
# 		height:"auto",
# 		width:"auto",
# 		textTransform: "uppercase",
# 		fontSize: "10px",
# 		color: "#7a92a5",
# 		fontFamily: "HelveticaNeueW01-65Medi, HelveticaNeueW02-65Medi, HelveticaNeueW10-65Medi, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif",
# 		letterSpacing: "0.6px",
# idName = new Layer
# 	parent:id
# 	html:"Name"
# 	style:
# 		position:"relative",
# 		height:"auto",
# 		width:"auto",
# 		fontSize: "12px",
# 		fontFamily: "HelveticaNeueW01-55Roma, HelveticaNeueW02-55Roma, HelveticaNeueW10-55Roma, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif",
# 		color: "#174165",
# 		fontWeight: "700",
# 		paddingLeft: "8px"
		
# divider = new Layer
# 	parent:content,
# 	backgroundColor: "#d9e1e8",
# 	style:
# 		position:"relative",
# 		height:"1px",
# 		width:"100%",
# 		marginTop:"8px"
compId = new m.inputComp
	parent:content
	cLabel:"Component ID"	


title = new Layer
	parent:content
	html:"Events & Actions"
	style:
		position:"relative"
		height:"30px",
		width:"100%",
		textTransform: "uppercase",
		fontSize: "10px",
		color: "#7a92a5",
		fontFamily: "HelveticaNeueW01-65Medi, HelveticaNeueW02-65Medi, HelveticaNeueW10-65Medi, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif",
		letterSpacing: "0.6px",
		fontWeight: "500",
		padding:"12px 24px"	
	
	
para = new Layer
	parent:content
	html:"Add events and actions to customize component behavior"
	style:
		position:"relative"
		height:"auto",
		width:"100%",
		fontSize: "14px",
		lineHeight:"normal",
		color: "#7a92a5",
		fontFamily: "HelveticaNeueW-4-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif",
		padding:"12px 24px"	
	
	
actionsContainer = new Layer
	parent:content
	name:"actionsContainer"
	style:
		position:"relative"
		width:"100%"
		height:"auto"
		margin:"12px 0px"
		padding:"0px 12px"	
	
btn = new m.buttonLink
	parent:content
	link:false
	btnLabel:"+ Add Action"	
	
	
btn.onClick ->
	pointInCanvas = this.convertPointToCanvas(this.point)
	compName = compId.name
	if compName
		openActionsModal(pointInCanvas, compName)	
	
	
	
	

		
		

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
	passParamToLeftMenu(false)
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


panelHeader = (title) ->
	switch title
		when "Collection Manager"
			output = title
		when "Data Elements"
			output = "Add "+title
		when "User Input"
			output = "Add "+title+ " Elements"
		when "Database"
			output = "Add "+title+ " Elements"
	return output

dataPanel.on Events.onTabSelected, (value) ->
	this.updateTitle(panelHeader(value.name))
	current = this.element
	if current
		current.destroy()
	switch value.name
		when "Data Elements"
			element = new m.addElements
			this.insertContent(element)
		when "Collection Manager"
			element = new m.collectionManager
			this.insertContent(element)
	
dataPanel.dispatch(0, true)

dataPanel.on Events.onContentTriger, (value) ->
	switch value.name
		when "contextMenu"
				focusManager(value)
				contextMenu = value	
		when "Properties","Agents"
				openModal(value.name)

	

addPanel = new m.btnPanel
	x: 72
	y: 80
	panelY:102
	icon:m.icons.add
	panelColor:"#3898EA"
	visible:false
	items:["Database","User Input","Page","Text","Image","Gallery","Vector Art","Shape","Interactive","Button","Box","Strip","Lists & Grids","Video","Music","Social","Forms"]

addPanel.on Events.onTabSelected, (value) ->
	this.updateTitle(panelHeader(value.name))
	current = this.element
	if current
		current.destroy()
	switch value.name
		when "User Input"
			element = new m.inputElements
			this.insertContent(element)
		when "Database"
			element = new m.addDataElements
			this.insertContent(element)

addPanel.dispatch(0, true)


focusManager =(mc) ->
	if mc
		if mc.name == "contextMenu"
			if contextMenu
				contextMenu.destroy()
		else
			if focusedComponent 	
				comp.unFocus(focusedComponent)
			comp.Focus(mc)
			focusedComponent = mc
	else 
		if leftMenuFocus
			removeTab(leftMenuFocus)
			
		if focusedComponent 	
			comp.unFocus(focusedComponent)
		
		if contextMenu
				contextMenu.destroy()


canvas.onClick (e) ->
	focusManager()

gfppBatch = (mc) =>
	childs = mc.descendants
	names = ["Repeater","tileBg","price","btn","text","date","h1","h1bg","pic","from","dataset"]
	
	for child in childs
		includ = names.includes(child.name)
		if includ
			hover.addGFPP(child)
			
			child.onClick (e) ->
				e.stopPropagation()
				name = this.name
				compId.setInput(name)
				if gfpp 
						gfpp.destroy()
				gfpp = new m.gfppFrame
					mc: this
					btns: if this.name is "dataset" then [{label:"Settings",icon:false},{label:"Manage Content",icon:false},{label:"help",icon:true}]


gfppBatch(stage)

dragHandler = (event, layer) ->
		gfpp.x = layer.x
		gfpp.y = layer.y

#Action modal
openActionsModal= (point, name) ->
	actionsModal = new m.panelBody
		parent:stage
		x:point.x-500
		y:point.y-200
		width:288
		height:579
		title: "Add actions to "+name
		
	eventSelector = new m.dropDown
		parent:actionsModal
		cLabel:"Event"
		placeHolder:"Choose event"
		items:["On viewport enter","On viewport leave", "On mouse in", "On mouse out", "On change","On key press","On focus","On blur", "On click", "On double click"]
	ActionsContainer = new Layer
		parent:actionsModal
		style:
			position:"relative"
			width:"100%"
			height:"auto"

	section = new m.section
		sLabel:"Components"
		parent:ActionsContainer


	list = new m.listItem
		parent:ActionsContainer
		arrow:true




