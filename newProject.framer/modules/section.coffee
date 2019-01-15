class exports.section extends Layer
   
    constructor: (@options={}) ->

            @options.sLabel ?="Section"

            super @options


            

            @.props=
                backgroundColor:"#F0F3F5"
                html: @options.sLabel
                style:
                    position:"relative"
                    width:"100%"
                    height:"42px"
                    borderBottom:"1px solid #D9E1E8"
                    fontFamily: "HelveticaNeueW01-45Ligh,HelveticaNeueW02-45Ligh,HelveticaNeueW10-45Ligh,Helvetica Neue,Helvetica,Arial,メイリオ,meiryo,ヒラギノ角ゴ pro w3,hiragino kaku gothic pro,sans-serif;"
                    fontSize: "16px"
                    color: "#2b5672"
                    lineHeight: "42px"
                    textAlign: "center"
                    
            
