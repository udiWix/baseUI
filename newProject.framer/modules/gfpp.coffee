
exports.addGFPP = (mc,label="Change Text",btns=["settings","design","help","data"]) ->
	frame = mc.frame
	Events.focused = "focused"
	container = new Layer
		parent:mc
		name:"container"

	{gfppBtn} = require "gfppBtn"

	mc.draggable.enabled  = true

	border = new Layer
		name:"lightBorder"
		parent:container
		width:frame.width+2
		height:frame.height+2
		borderWidth:1
		borderColor:"#D3EDFF"
		visible:false
		x:-1
		y:-1

	blueBorder = new Layer
		name:"border"
		parent:container
		width:frame.width+2
		height:frame.height+2
		borderWidth:1
		borderColor:"#D3EDFF"
		visible:false
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
			visible:false
			name:"circle"

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
		name:"gfppContainer"
		y:-50
		height:32
		style:
			display:"flex"
			position:"relative"	
			visibility:"hidden"


	
	for btn in btns
		bt = new gfppBtn
			parent:gfppContainer
			icon:btn
	

	
	mc.onMouseOver ->
		container = this.childrenWithName("container")[0]
		border = container.childrenWithName("lightBorder")[0]
		border.visible = true

	mc.onMouseOut ->
		container = this.childrenWithName("container")[0]
		border = container.childrenWithName("lightBorder")[0]
		border.visible = false


	mc.onClick (e)->
		this.emit(Events.focused, this)
		this.bringToFront()

exports.Focus = (mc) ->
		container = mc.childrenWithName("container")[0]
		border = container.childrenWithName("border")[0]
		border.borderColor = "#00ABF6"
		border.visible=true
		circles = container.childrenWithName("circle")
		gfppContainer = container.childrenWithName("gfppContainer")[0]
		gfppContainer.style["visibility"] = "visible"
		for circle in circles
			circle.visible =true
		

exports.unFocus = (mc) ->
		if mc
			container = mc.childrenWithName("container")[0]
			border = container.childrenWithName("border")[0]
			circles = container.childrenWithName("circle")
			gfppContainer = container.childrenWithName("gfppContainer")[0]
			gfppContainer.style["visibility"] = "hidden"
			border.borderColor="#D3EDFF"
			border.visible=false
			for circle in circles
				circle.visible =false		
			
