# Add the following line to your project in Framer Studio. 
# myModule = require "myModule"
# Reference the contents by name, like myModule.myFunction() or myModule.myVar



exports.addGFPP = (mc,label="Change Text",btns=["settings","design","help","data"]) ->
	frame = mc.frame
	container = new Layer
		parent:mc

	{gfppBtn} = require "gfppBtn"


	blueBorder = new Layer
		parent:container
		width:frame.width+2
		height:frame.height+2
		borderWidth:1
		borderColor:"#00ABF6"
		x:-1
		y:-1
	
	for i in [0..7]
		circle = new Layer
			width:9
			height:9
			backgroundColor:"#fff"
			borderColor:"#00ABF6"
			borderWidth:1
			parent:container
			borderRadius:100

		switch i
			when 0
				circle.x=blueBorder.minX-4
				circle.y=blueBorder.minY-4
			when 1
				circle.x=blueBorder.midX-4
				circle.y=blueBorder.minY-4
			when 2
				circle.x=blueBorder.maxX-5
				circle.y=blueBorder.minY-4
			when 3
				circle.x=blueBorder.minX-4
				circle.y=blueBorder.maxY-4
			when 4
				circle.x=blueBorder.midX-4
				circle.y=blueBorder.maxY-4
			when 5
				circle.x=blueBorder.maxX-5
				circle.y=blueBorder.maxY-4
			when 6
				circle.x=blueBorder.maxX-5
				circle.y=blueBorder.midY-4
			when 7
				circle.x=blueBorder.minX-4
				circle.y=blueBorder.midY-4
	
	gfppContainer = new Layer
		parent: container
		y:-50
		height:32
		style:
			display:"flex"
			position:"relative"
	
	for btn in btns
		bt = new gfppBtn
			parent:gfppContainer
			icon:btn
