class exports.listItem extends Layer
    Events.OnClicked  = "OnClicked"
    constructor: (@options={}) ->

            @options.prefix ?=false	
            @options.arrow ?=false
            @options.mLabel ?="Item 01"
            @options.sLabel ?="Value:Item 01"
            super @options

            styles= require "wixStyles"
            colors= require "wixColors"
            icons= require "icons"
            mc = this
            

            @.props=
                style:
                    position:"relative"
                    display: "flex"
                    flexDirection: "column"
                    paddingTop:"15px"
                    paddingBottom:"10px"
                    width:"100%"
                    height:"auto"
                    borderBottom:"1px solid #D9E1E8"
            
            mLabel = new Layer
                parent: this
                html:@options.mLabel
                style:
                    position:"relative"
                    width:"100%"
                    height:"18px"
                    fontFamily:"HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif"
                    fontSize:"16px"
                    color:"#2B5679"
                    paddingLeft:"24px"

            sLabel = new Layer
                parent: this
                html:@options.sLabel
                style:
                    position:"relative"
                    width:"100%"
                    height:"18px"
                    fontFamily:"HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;"
                    fontSize:"12px"
                    color:"#7a92a5"
                    paddingLeft:"24px"
                    paddingTop:"3px"
            if @options.arrow 
                arrow = new SVGLayer
                    parent: this
                    width:6
                    height:10
                    style:
                        position: "absolute"
                        top: "50%"
                        left: "90%"
                        
     
                        
                    svg:"
    <svg width='6px' height='10px' viewBox='0 0 6 10' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
        <defs>
            <path d='M2.7500034,6.10141403 L6.65792747,2.425162 C6.93160956,2.1677045 7.34760301,2.19752029 7.58707484,2.49175743 C7.82654667,2.78599457 7.79881377,3.23323144 7.52513168,3.49068894 L3.190542,7.56831272 C2.9462394,7.80529889 2.57015157,7.81354529 2.31640129,7.574838 C2.31404155,7.57272128 2.31174742,7.57052698 2.3094648,7.56831272 L-2.02512488,3.49068894 C-2.29880697,3.23323144 -2.32653987,2.78599457 -2.08706804,2.49175743 C-1.84759621,2.19752029 -1.43160276,2.1677045 -1.15792067,2.425162 L2.7500034,6.10141403 Z' id='path-1'></path>
        </defs>
        <g id='Symbols' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
            <g id='Primitives-/-0A.-Icons-/-Arrows-/-Rounded-/-Large-/-Arrow-Right'>
                <mask id='mask-2' fill='white'>
                    <use xlink:href='#path-1'></use>
                </mask>
                <use id='Arrow' fill='#3899EC' transform='translate(2.750003, 5.000000) scale(-1, 1) rotate(90.000000) translate(-2.750003, -5.000000) ' xlink:href='#path-1'></use>
            </g>
        </g>
    </svg>"