class exports.inputComp extends Layer
	
	# Events.valueChange  = "input.OnChange"
	Events.ValueChange = "ValueChange"
	
	constructor: (@options={curentValue}) ->
		@options.cLabel ?="Label"
		@options.placeholder ?="Not connected"
		@options.placeHolderColor ?="red"
		@options.currentValue ?=""
		
		super @options
		styles= require "wixStyles"
		colors= require "wixColors"
		currentValue = @options.currentValue
		isFocused = false

		this.backgroundColor="transparent"

		@.style=
			position:"relative"
			width:"100%"
			height:"84px"
			borderBottom:"1px solid #D9E1E8"
			backgroundColor:"transparent"

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
			backgroundColor:"transparent"
		
		
		inputStyle=
			appearance: "none"
			border:"1px solid #ffffff"
			borderRadius: "6px"
			background:"#ffffff"
			position:"relative"
			height:"36px"
			margin:"35px 12px"
			padding:"0px 12px"
			textAlign: "left"
			fontFamily:"font-family: HelveticaNeueW01-55Roma,HelveticaNeueW02-55Roma,HelveticaNeueW10-55Roma,Helvetica Neue,Helvetica,Arial,メイリオ,meiryo,ヒラギノ角ゴ pro w3,hiragino kaku gothic pro,sans-serif;"
			fontSize:"18px"
			"-webkit-appearance": "none"
			outline: "none"
			color:"#162D3D"

		
		@picker =new Layer
			parent:this
			width:288
			height:0
			html:'<input  type="text" name="demo"><style type="text/css">::-webkit-input-placeholder { color: rgb(122, 122, 122) };</style>'

		
		@input = @picker.querySelector("input")

		@picker.onMouseOver =>
			if !isFocused
				@input.style.backgroundColor=colors.b4

		@picker.onMouseOut =>
			@input.style.backgroundColor="#ffffff"

		@input.placeholder = @options.placeholder 
		@input.style[key]  = val for key, val of inputStyle
		@input.onfocus = =>
			@input.style.borderColor="#C1E4FE"
			@input.style.backgroundColor="#ffffff"
			isFocused = true
		@input.onblur = =>
			@input.style.borderColor="#ffffff"
			isFocused = false
		@input.onkeydown = (e) ->
			currentValue = @value

		
		@input.onkeyup = (e) =>

			if @options.currentValue isnt @value
				@emit(Events.ValueChange, @value)
	
	setInput: (string) ->
		@input.value= string
		@name = string

