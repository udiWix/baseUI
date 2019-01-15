
exports.addGFPP = (mc,label="Change Text",btns=["settings","design","help","data"]) ->
	frame = mc.frame
	Events.focused = "focused"
	
	
	mc.style=
		cursor:"all-scroll"



	border = new Layer
		name:"lightBorder"
		parent:mc
		width:frame.width+2
		height:frame.height+2
		borderWidth:1
		borderColor:"#D3EDFF"
		visible:false
		x:-1
		y:-1


	
	mc.onMouseOver ->
		border = this.childrenWithName("lightBorder")[0]
		border.visible = true

	mc.onMouseOut ->
		border = this.childrenWithName("lightBorder")[0]
		border.visible = false


	
			
