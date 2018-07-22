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


btns = new m.radioBtns
	y:300
	x:300