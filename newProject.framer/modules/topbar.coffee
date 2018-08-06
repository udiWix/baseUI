class exports.topbar extends Layer
    Events.dragEnd = "dragEnd"
    constructor: (@options={}) ->
		 								
            @options.height ?=48

            super @options

            styles= require "wixStyles"
            colors= require "wixColors"
            @.height = 48
            @.backgroundColor = "white"
            @.style = 
                position:"relative"
                width:"100%"
                boxShadow: "0 0 15px 0 rgba(22, 45, 61, 0.5)"
                display:"flex"
                justifyContent:"space-between"
            
            leftSection = new Layer
                parent:this
                style:
                    position:"relative"
            
            wixBtn = new Layer
                parent:leftSection
                width:75
                height:48
                style:
                    borderRight: "1px #eaf7ff solid"
            wixLogo = new SVGLayer
                x:10
                y:12
                parent:wixBtn
                svg:'<svg xmlns="http://www.w3.org/2000/svg" width="50" height="19"><path fill="#000" fill-rule="evenodd" d="M29.56.347C30.433-.035 32 .001 32 .001c0 1.272-.148 2.028-1.109 2.615-.308.187-.839.474-1.462.662A4.628 4.628 0 0 0 28 4c0-2.317.423-3.156 1.56-3.653zm-5.492.812C25.456.045 27.536.283 27.536.283l-5.424 18.67s-1.79.117-2.685-.299c-1.176-.545-1.736-.966-2.448-3.506-.634-2.265-2.411-8.916-2.574-9.39-.08-.235-.175-.794-.637-.794-.451 0-.555.56-.637.794-.166.473-1.94 7.125-2.574 9.39-.712 2.54-1.272 2.96-2.448 3.506-.895.416-2.685.299-2.685.299L0 .283s2.08-.238 3.468.876c.855.686 1.105 1.78 1.105 1.78l2.833 9.99L9.76 4.753c.23-.87.644-1.944 1.298-2.67.834-.926 2.529-.984 2.709-.984.18 0 1.875.058 2.709.984.655.726 1.068 1.8 1.298 2.67l2.356 8.176 2.832-9.99s.25-1.094 1.105-1.78zM31.998 4v.648H32v10.845c-.011 2.225-.298 2.72-1.547 3.232-.97.398-2.453.247-2.453.247V6.826c0-.61.252-1.01 1.182-1.37.554-.214 1.07-.378 1.61-.62C31.63 4.456 31.998 4 31.998 4zm12.123 6.031l5.863 8.924s-2.539.334-3.767-.811c-.787-.733-1.592-1.924-1.592-1.924l-2.163-3.192c-.105-.166-.243-.346-.462-.346-.22 0-.357.18-.462.346l-2.163 3.192s-.761 1.191-1.547 1.924c-1.229 1.145-3.813.81-3.813.81l5.864-8.923L34 1.081s2.481-.434 3.71.711c.786.733 1.665 2.05 1.665 2.05l2.163 3.192c.105.166.243.347.462.347.22 0 .357-.18.462-.347l2.163-3.192s.879-1.317 1.665-2.05C47.52.647 50 1.08 50 1.08l-5.88 8.951z"/></svg>'

            pagesNav = new Layer
                parent:leftSection
                x: 75
                width: 222
                height: 48
                style:
                    borderRight: "1px #eaf7ff solid"

            pageName = new TextLayer
                parent: pagesNav
                x: 71
                y: 15
                width: 109
                text: "Home"
                fontSize: 14
                fontFamily: "Helvetica Neue W01 55 Roman"
                letterSpacing: 0.0
                lineHeight: 1.2857142857142858
                textAlign: "left"
                color: "rgba(56,153,236,1)"

            pages = new TextLayer
                parent: pagesNav
                x: 24
                y: 15
                text: "Pages:"
                fontSize: 14
                fontFamily: "Helvetica Neue W01 55 Roman"
                lineHeight: 1.2857142857142858
                textAlign: "left"
                color: "rgba(22,45,61,1)"

            combinedShape = new SVGLayer
                parent: pagesNav
                x: 188
                y: 20
                width: 10
                height: 5.5
                svg:'<svg xmlns="http://www.w3.org/2000/svg" width="10" height="6"><path fill="#3899EC" fill-rule="nonzero" d="M5 3.851L8.908.175a.627.627 0 0 1 .93.067.745.745 0 0 1-.063.999L5.441 5.318a.625.625 0 0 1-.882 0L.225 1.241a.745.745 0 0 1-.062-1 .627.627 0 0 1 .93-.066L5 3.851z"/></svg>'

            menu = new Layer
                parent:leftSection
                x: 296
                backgroundColor: "transparent"
                width: 325
                height: 48

            topbarMenuItemDefault = new Layer
                parent: menu
                x: 0
                y: 0
                backgroundColor: "transparent"
                width: 79
                height: 48
            Site = new TextLayer
                parent: topbarMenuItemDefault
                x: 36
                y: 15
                text: "Site"
                fontSize: 14
                fontFamily: "Helvetica Neue W01 55 Roman"
                letterSpacing: 0.0
                lineHeight: 1.2857142857142858
                textAlign: "left"
                color: "rgba(22,45,61,1)"

            topbarMenuItemDefault_2 = new Layer
                parent: menu
                x: 79
                y: 0
                backgroundColor: "transparent"
                width: 71
                height: 48

            tools = new TextLayer
                parent: topbarMenuItemDefault_2
                x: 18
                y: 15
                width: 43.13953488372093
                text: "Tools"
                fontSize: 14
                fontFamily: "Helvetica Neue W01 55 Roman"
                letterSpacing: 0.0
                lineHeight: 1.2857142857142858
                textAlign: "left"
                color: "rgba(22,45,61,1)"

            topbarMenuItemDefault_3 = new Layer
                parent: menu
                x: 150
                y: 0
                backgroundColor: "transparent"
                width: 66
                height: 48


            help = new TextLayer
                parent: topbarMenuItemDefault_3
                x: 18
                y: 15
                width: 33.48837209302326
                text: "Help"
                fontSize: 14
                fontFamily: "Helvetica Neue W01 55 Roman"
                letterSpacing: 0.0
                lineHeight: 1.2857142857142858
                textAlign: "left"
                color: "rgba(22,45,61,1)"

            topbarMenuItemDefault_4 = new Layer
                parent: menu
                x: 216
                y: 0
                backgroundColor: "transparent"
                width: 109
                height: 48



            upgrade = new TextLayer
                parent: topbarMenuItemDefault_4
                x: 18
                y: 15
                width: 82.04918032786885
                text: "Upgrade"
                fontSize: 14
                fontFamily: "Helvetica Neue W01 55 Roman"
                letterSpacing: 0.0
                lineHeight: 1.2857142857142858
                textAlign: "left"
                color: "rgba(22,45,61,1)"

            rightSide = new Layer
                parent:this
                backgroundColor: "transparent"
                width: 523
                height: 48
                style:
                    position:"relative"


            topbarIconsRedo = new Layer
                parent: rightSide
                x: 98
                backgroundColor: "transparent"
                width: 48
                height: 48
                style:
                    borderLeft: "1px #eaf7ff solid"

            redoIcon = new SVGLayer
                parent: topbarIconsRedo
                x: 17
                y: 16
                width: 13.21162377200934
                height: 16
                svg:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="16"><path fill="#162D3D" fill-rule="evenodd" d="M10.077 0L9.26.507l2.273 3.664-2.427-.564c-1.916-.443-3.894-.157-5.57.816-1.706.99-2.89 2.578-3.33 4.47-.64 2.753.22 5.41 2.299 7.107l.608-.745C1.326 13.796.589 11.499 1.144 9.11c.775-3.331 4.25-5.384 7.745-4.566l2.426.563L7.66 7.394l.508.814 5.044-3.153L10.077 0z"/></svg>'

            topbarIconsUndo = new Layer
                parent: rightSide
                x: 49
                backgroundColor: "transparent"
                width: 48
                height: 48
                style:
                    borderLeft: "1px #eaf7ff solid"


            undoIcon = new SVGLayer
                parent: topbarIconsUndo
                x: 17
                y: 16
                width: 13.21173512517724
                height: 16
                svg:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="16"><path fill="#162D3D" fill-rule="evenodd" d="M13.004 8.893c-.896-3.848-4.891-6.218-8.899-5.285l-2.426.563L3.952.507 3.135 0 0 5.055l5.044 3.153.509-.814-3.655-2.286 2.424-.564c3.494-.815 6.972 1.236 7.745 4.567.556 2.388-.181 4.685-1.969 6.144l.608.745c2.079-1.697 2.938-4.353 2.298-7.107"/></svg>'

            topbarIconsZoom = new Layer
                parent: rightSide
                backgroundColor: "transparent"
                width: 48
                height: 48
                style:
                    borderLeft: "1px #eaf7ff solid"

            zoomIcon = new SVGLayer
                parent: topbarIconsZoom
                x: 15
                y: 16
                width: 17.021
                height: 16.021
                svg:'<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16"><path fill="#162D3D" fill-rule="evenodd" d="M7.5 14A6.508 6.508 0 0 1 1 7.5C1 3.916 3.916 1 7.5 1S14 3.916 14 7.5 11.084 14 7.5 14zm9.521 1.313l-3.441-3.44A7.442 7.442 0 0 0 15 7.5C15 3.364 11.636 0 7.5 0S0 3.364 0 7.5 3.364 15 7.5 15a7.467 7.467 0 0 0 5.44-2.353l3.373 3.374.708-.708zM5.021 8h5V7h-5v1z"/></svg>'

            topbarButtonsSaveDefault = new Layer
                parent: rightSide
                x: 248
                backgroundColor: "transparent"
                width: 80
                height: 48
                style:
                    borderLeft: "1px #eaf7ff solid"


            layer_15241524Save = new TextLayer
                parent: topbarButtonsSaveDefault
                x: 24
                y: 15
                text: "Save"
                fontSize: 14
                fontFamily: "Helvetica Neue W01 55 Roman"
                letterSpacing: 0.0
                lineHeight: 1.2857142857142858
                textAlign: "left"
                color: "rgba(22,45,61,1)"

            topbarButtonsPreviewDefault = new Layer
                parent: rightSide
                x: 329
                backgroundColor: "transparent"
                width: 98
                height: 48
                style:
                    borderLeft: "1px #eaf7ff solid"


            layer_15241524Preview = new TextLayer
                parent: topbarButtonsPreviewDefault
                x: 24
                y: 15
                text: "Preview"
                fontSize: 14
                fontFamily: "Helvetica Neue W01 55 Roman"
                letterSpacing: 0.0
                lineHeight: 1.2857142857142858
                textAlign: "left"
                color: "rgba(22,45,61,1)"

            topbarButtonsPublishDefault = new Layer
                parent: rightSide
                x: 428
                backgroundColor: "transparent"
                width: 95
                height: 48
                style:
                    borderLeft: "1px #eaf7ff solid"

            bG_3 = new Layer
                parent: topbarButtonsPublishDefault
                x: 0
                y: 0
                width: 95
                height: 48
                backgroundColor: "rgba(56,153,236,1)"

            layer_15241524Publish = new TextLayer
                parent: topbarButtonsPublishDefault
                x: 24
                y: 15
                text: "Publish"
                fontSize: 14
                fontFamily: "Helvetica Neue W01 55 Roman"
                letterSpacing: 0.0
                lineHeight: 1.2857142857142858
                textAlign: "left"
                color: "rgba(255,255,255,1)"

            topbarIconsMobileText = new Layer
                parent: rightSide
                x: 147
                backgroundColor: "transparent"
                width: 100
                height: 48
                style:
                    borderLeft: "1px #eaf7ff solid"



            layer_15391518Mobile = new TextLayer
                parent: topbarIconsMobileText
                x: 39
                y: 15
                text: "Mobile"
                fontSize: 14
                fontFamily: "Helvetica Neue W01 55 Roman"
                letterSpacing: 0.0
                lineHeight: 1.2857142857142858
                textAlign: "left"
                color: "rgba(22,45,61,1)"

            mobileIcon = new SVGLayer
                parent: topbarIconsMobileText
                x: 18
                y: 13
                width: 13
                height: 22
                svg:'<svg xmlns="http://www.w3.org/2000/svg" width="13" height="22"><path fill="#1D2D3C" fill-rule="evenodd" d="M1 17h11V3H1v14zm11 2c0 1.103-.897 2-2 2H3c-1.103 0-2-.897-2-2v-1h11v1zM2.898 1h7.204c.852 0 1.585.413 1.898 1H1c.313-.587 1.046-1 1.898-1zM3 0a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/></svg>'