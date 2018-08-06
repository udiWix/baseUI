# Setup
document.body.style.cursor = "auto"
Framer.Defaults.Layer.backgroundColor = null
m=require "master"



btns = new m.radioBtns
	y:300
	x:300

topbar = new m.topbar


leftMenu = new m.leftMenu
	y:80
	x:12

comp = require "gfpp"

comp.addGFPP(Frame_1)