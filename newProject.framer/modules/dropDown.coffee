class exports.dropDown extends Layer
	selectText = null
	icon = null
	Events.Selected  = "dropDown.OnSelected"
	icons= require "icons"
	colors= require "wixColors"

	constructor: (@options={}) ->
		@options.items ?=["One","Two","Three"]
		@options.cLabel ?="Label"
		@options.placeholder ?="Not connected"
		@options.icons ?=false
		super @options
		styles= require "wixStyles"
		
		
		this.backgroundColor="transparent"
		
		@.style=
			position:"relative"
			width:"100%"
			minHeight:"30px"
			height:"84px"
			# padding:"16px 24px"
		
		enabler = true
		mc=this
		label= new Layer
			parent:@
			html:@options.cLabel
			style:styles.t02
		label.style=
			height:"auto"
			width:"auto"
			position:"relative"
			color:colors.d2
			padding:"16px 24px 7px 24px"

		select = new Layer
			parent:@

		select.style=
				width:"100%"
				height:"initial"
				position:"relative"
				display:"flex"
				padding:"0px 24px 18px 24px"
				borderBottom:"1px solid #D9E1E8"
				
		if @options.icons
			icon =new SVGLayer
				parent:select
				width:0
				height:0
				fill:colors.d2
				style:
					position:"relative"
					paddingTop:"2px"

		selectText = new Layer
			parent:select
			name:"selectText"
			style:styles.t03
			html:@options.placeholder
		
		selectText.style=
				width:"auto"
				height:"initial"
				position:"relative"
				color:colors.d2
				textTransform:"capitalize"


		selectText.on "change:html", ->
    			# mc.value = select.html
                mc.btnDispatch(selectText.html)
		
		select.onClick ->	
			if enabler
				drop.visible=true
				enabler = false
				setItems()
				this.parent.bringToFront()
		

		dropIcon = new SVGLayer
			svg:icons.dropdown
			parent:select
			x:240
			style:
				width:"auto"
				height:"auto"

								


		setItems= () ->
			items=drop.children
			selectText = select.childrenWithName("selectText")[0]
			value=selectText.html
			
			for item in items
				label = item.childrenWithName("label")[0]
				if label.html is value
					item.stateSwitch("selected")
					label.style["color"]="white"
					item.ignoreEvents = true
				else
					item.stateSwitch("default")
					label.style["color"]="#162D3D"
					item.ignoreEvents = false
			


		
		drop = new Layer
			parent:select
			backgroundColor:"white"
			shadowBlur:16
			shadowColor:"rgba(0,0,0,.14)"
			clip:true
			visible:false
			style:
				width:"85%"
				margin:"0px 24px"
				height:"auto"
				borderRadius:"8px"
		
		for option in @options.items
			
			listItem = new Layer
				parent:drop
				backgroundColor:"white"
				height:36


			listItem.style=
					position:"relative"
					width:"100%"
					padding:"6px 24px"
					
			
			listLabel = new Layer
				parent:listItem
				html:option
				name:"label"
				style:styles.t01
				backgroundColor:"transparent"
				height:36
			
			listLabel.style=
				position:"relative"
				width:"initial"
				textTransform:"capitalize"
				left:"0px"

			if @options.icons
				listLabel.style["left"]="24px"
				listIcon = new SVGLayer
					parent:listItem
					svg:icons[option]
					height:20
					width:20
					fill:colors.d2
					x:18
				listIcon.centerY()


			listItem.states.hover=
				backgroundColor:colors.b4
			
			listItem.states.selected=
				backgroundColor:colors.b1


			listItem.onMouseOver ->
				this.stateSwitch("hover")
			listItem.onMouseOut ->
				this.stateSwitch("default")
			
			listItem.onClick ->
				this.parent.visible = false
				label = this.childrenWithName("label")[0]
				mc.setSelect(label.html)
				Utils.delay 0.2, ->
					enabler=true
				



	btnDispatch: (value) ->
		@emit(Events.Selected, value, @)
	
	setSelect: (string) ->
		selectText.html = string
		if @options.icons
			icon.props=
				svg:icons[string]
				width:25
				height:25
				fill:colors.d2
	getSelection: () ->
		return selectText.html

	# fieldType.on Events.Selected, (value) ->