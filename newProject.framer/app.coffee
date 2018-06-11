# Setup
document.body.style.cursor = "auto"
Framer.Defaults.Layer.backgroundColor = null
sketch = Framer.Importer.load("images/Untitled%203@1x", scale: 1)
Utils.globalLayers(sketch)
page = Flow_Screen
page.center()
m=require "master"
Left_Menu.destroy()
screen_1.props= 
	parent:Wix_Template_Website
	x:0
	y:0


#vars
properties =[
	{
		type:"address"
		name:"Address"
		entry:"522 West 29th Street, Unit 5A"
	},
	{
		type:"text"
		name:"Property ID"
		entry:"347dx"
	},
	{
		type:"text"
		name:"Type"
		entry:"rent"
	},
	{
		type:"table"
		name:"Location"
		entry:"Neighborhoods: Manhattan"
	},
	{
		type:"user"
		name:"Agent"
		entry:"Christina Adams"
	},
	{
		type:"gallery"
		name:"Images"
		entry:"pic1, pic2, pic3"
	},
	{
		type:"number"
		name:"Rooms"
		entry:"5"
	},
	{
		type:"number"
		name:"Beds"
		entry:"3"
	},
	{
		type:"number"
		name:"Baths"
		entry:"3"
	}
] 

op = {}
clickedItem = null
panelFrame = null
fixStartPoint = true
globalContainer = null
drawing = false
clickedComp = null
datasetPanel = null
pairs = []
dragging = false
bind = false
newText = null











