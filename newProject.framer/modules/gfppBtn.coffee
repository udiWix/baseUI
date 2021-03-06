class exports.gfppBtn extends Layer

    constructor: (@options={}) ->
		 								
            @options.icon ?= "settings"
            super @options
            styles= require "wixStyles"
            settings = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="18"><defs><path id="a" d="M8.874 11.627a2.71 2.71 0 1 1 0-5.421 2.711 2.711 0 1 1 0 5.421m8.037-4.572l-1.706-.342a6.671 6.671 0 0 0-.298-.717l.966-1.449a1.113 1.113 0 0 0-.14-1.404l-1.07-1.071a1.114 1.114 0 0 0-1.404-.139l-1.448.965a7.18 7.18 0 0 0-.718-.298L10.751.895A1.112 1.112 0 0 0 9.66 0H8.146a1.11 1.11 0 0 0-1.091.895L6.713 2.6a7.304 7.304 0 0 0-.717.298l-1.449-.965a1.112 1.112 0 0 0-1.404.139L2.072 3.143a1.112 1.112 0 0 0-.138 1.404l.964 1.449c-.111.232-.211.47-.297.717l-1.706.342C.375 7.158 0 7.615 0 8.146V9.66c0 .53.375.987.895 1.091l1.706.341c.086.247.186.486.297.718l-.964 1.448a1.113 1.113 0 0 0 .138 1.405l1.071 1.07a1.112 1.112 0 0 0 1.404.139l1.449-.965c.232.112.471.212.718.298l.341 1.706c.103.52.56.895 1.091.895H9.66c.53 0 .987-.375 1.091-.895l.342-1.706c.247-.086.485-.186.718-.298l1.448.965a1.114 1.114 0 0 0 1.404-.139l1.07-1.07c.375-.375.434-.963.14-1.405l-.966-1.448c.113-.232.212-.472.298-.718l1.706-.341c.521-.104.895-.561.895-1.091V8.146a1.11 1.11 0 0 0-.895-1.091"/></defs><use fill-rule="evenodd" xlink:href="#a"/></svg>'
            design = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="16"><defs><path id="a" d="M6.634 11.675c-.024.403-.249.82-.631 1.173-.802.74-1.993 1.18-2.985 1.359.317-.628.421-1.198.345-1.828-.076-.615-.122-1.022.452-1.552a1.809 1.809 0 0 1 1.249-.48 2 2 0 0 1 .299.027c-.297.693-.51 1.262-.611 1.608.392-.097 1.042-.305 1.837-.6.02.097.052.189.045.293M16.872.785c-1.033-.92-2.76-1.72-6.595 1.823C8.498 4.25 6.849 7.167 5.808 9.385a3.235 3.235 0 0 0-.744-.097c-.724 0-1.469.242-2.061.789-2.253 2.08 1.235 3.22-3.003 5.2 0 0 .525.074 1.313.074 1.478 0 3.884-.26 5.502-1.754.866-.8 1.128-1.796.859-2.635 2.387-.963 5.476-2.466 7.227-4.083 3.835-3.543 2.968-5.138 1.971-6.093"/></defs><use fill-rule="evenodd" xlink:href="#a"/></svg>'
            help = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><defs><path id="a" d="M11.346 6.339a2.366 2.366 0 0 1-.644 1.12c-.14.136-.285.259-.434.371-.15.112-.299.222-.448.329-.15.108-.287.224-.413.35-.126.126-.19.266-.283.42a1.021 1.021 0 0 0-.135.539V10h-2v-.63c0-.308.076-.574.155-.798.079-.224.18-.422.292-.595.111-.172.237-.322.373-.448a7.54 7.54 0 0 1 .414-.357l.393-.315c.121-.098.229-.205.322-.322a1.313 1.313 0 0 0 .308-.875c0-.429-.105-.746-.315-.952-.21-.205-.502-.308-.875-.308-.252 0-.469.049-.651.147a1.305 1.305 0 0 0-.448.392c-.117.164-.203.245-.259.464-.056.219-.084.597-.084.597H4.556c.009 0 .096-.856.259-1.276.163-.42.392-.729.686-1.037.294-.308.649-.52 1.064-.693.415-.173.88-.245 1.393-.245.662 0 1.215.097 1.659.279.444.183.8.412 1.072.683a2.515 2.515 0 0 1 .755 1.752c0 .336-.033.629-.098.876zM6.989 13h2v-2h-2v2zM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0z"/></defs><use fill-rule="evenodd" xlink:href="#a"/></svg>'
            data = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14" height="16"><defs><path id="a" d="M0 12.348c1.364.95 3.986 1.594 7 1.594s5.636-.644 7-1.594v1.082c0 .656-.378 1.247-.964 1.507C11.57 15.588 9.411 16 7 16c-2.41 0-4.57-.412-6.036-1.063A1.641 1.641 0 0 1 0 13.43v-1.082zM7 0c2.411 0 4.57.412 6.036 1.063.586.26.964.851.964 1.507v.005c0 .656-.378 1.247-.964 1.507C11.57 4.733 9.411 5.145 7 5.145c-2.411 0-4.57-.412-6.036-1.063A1.641 1.641 0 0 1 0 2.575V2.57c0-.656.378-1.247.964-1.507C2.43.412 4.589 0 7 0zM0 8.696c1.364.95 3.986 1.594 7 1.594s5.636-.644 7-1.594v1.082c0 .656-.378 1.247-.964 1.507-1.466.651-3.625 1.063-6.036 1.063-2.41 0-4.57-.412-6.036-1.063A1.641 1.641 0 0 1 0 9.778V8.696zm0-3.551c1.364.95 3.986 1.594 7 1.594s5.636-.644 7-1.594v1.082c0 .656-.378 1.247-.964 1.507C11.57 8.385 9.411 8.797 7 8.797c-2.41 0-4.57-.412-6.036-1.063A1.641 1.641 0 0 1 0 6.227V5.145z"/></defs><use fill-rule="evenodd" xlink:href="#a"/></svg>'

            this.props=
                borderRadius: 100
                shadowColor: "rgba(0,0,0,0.54)"
                shadowX: 0
                shadowY: 2
                shadowBlur: 5
                shadowSpread: 0
                gradient:
                    end: "#FCFCFC"
                    start: "#F4F4F4"
                    angle: 0
                style:
                    width:"auto"
                    display:"flex"
                    position:"relative"
                    justifyContent:"center"
                    alignItems:"center"
                    height:"32px"
                    minWidth:"32px"
                    marginRight:"10px"
  
            if @options.icon.icon
                shape = eval(@options.icon["label"])
    
                icon = new SVGLayer
                    name:"icon"
                    parent:this
                    svg:shape
                    fill:"#2D4150"
                    style:
                        position:"relative"
                        width:"auto"
                        height:"auto"
            else
                 btn = new Layer
                    name:"btn"
                    parent:this
                    html:@options.icon.label
                    style:
                        position:"relative"
                        width:"auto"
                        height:"auto" 
                        fontSize:"14px"
                        color:"#2d4150"
                    this.style["padding"]="0px 15px"


     

                      
            this.onMouseOver ->
                icon = this.childrenWithName("icon")[0]
                if icon
                    icon.fill = "#00ABF6"
            this.onMouseOut ->
                icon = this.childrenWithName("icon")[0]
                if icon
                    icon.fill = "#2D4150"