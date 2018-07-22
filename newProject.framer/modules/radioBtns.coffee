class exports.radioBtns extends Layer
    
    Events.Checked  = "radioBtns.OnChecked"


    constructor: (@options={}) ->
		 								
            @options.items ?=['item1','item2','item3']
            @options.checked ?=0
            @options.title ?="Do images show text?"
            @itemMcs = []
            super @options
            
            styles= require "wixStyles"
            colors= require "wixColors"

            
            Utils.insertCSS("
            .container {
  display: block;
  position: relative;
  padding-left: 30px;
  margin-bottom: 12px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-family: HelveticaNeueW01-55Roman,HelveticaNeueW02-55Roman,HelveticaNeueW10-55Roman,sans-serif;
  font-size: 14px;
  color:#{colors.d1};
  lineHeight: 18px;
  textTransform: none;
  textRendering: geometricPrecision;

}
.container input {
  opacity: 0;
  position: absolute;
  left: 0px;
  width:100%;
  height:100%;

}
.checkmark {
    position: absolute;
    top: 5px;
    left: 0;
    height: 16px;
    width: 16px;
    background-color: #fff;
    border-radius: 50%;
    border: 1px solid #{colors.b1};
}
.container:hover input ~ .checkmark {
    background-color: #{colors.b4};
}
.container input:checked ~ .checkmark {
  
}
.checkmark:after {
    position: absolute;
    display: none;
    content:'';
   
}
.container input:checked ~ .checkmark:after {
    display: block;
}
.container .checkmark:after {
 	top: 3px;
	left: 3px;
	width: 10px;
	height: 10px;
	border-radius: 50%;
	background: #{colors.b1};
}
 ")
            
            line = ""
            for item,i in @options.items
                check = if @options.checked == i then "checked" else ""
                line += "<label class='container'>#{@options.items[i]}
                <input type='radio' name='radio' #{check}>
                <span class='checkmark'></span>
                </label>"

            title = new Layer
              parent:this
              html:@options.title
              style:styles.t02
            title.style["color"] = colors.d2

            container = new Layer
                parent:this
                html:line
                y:30
                style:
                  position:"relative"

