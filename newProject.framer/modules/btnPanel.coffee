class exports.btnPanel extends Layer

    constructor: (@options={}) ->

            super @options

            styles= require "wixStyles"
            colors= require "wixColors"
            
            rectangle = new Layer
                parent:this
                width: 528
                height: 604
                backgroundColor: "rgba(255,255,255,1)"
                borderRadius: 8
                shadowColor: "rgba(22,45,61,0.36)"
                shadowBlur: 14
            content = new Layer
                parent:rectangle
                width: 353
                x:175
                height: 604

            panelContainer = new Layer
                parent:rectangle
                width: 175
                height: 604

            panel_1 = new Layer
                parent: panelContainer
                width: 175
                height: 604
                backgroundColor: "rgba(43,86,114,1)"
                borderRadius: 8

            panel_2 = new Layer
                parent: panelContainer
                x: 120
                width: 55
                height: 604
                backgroundColor: "rgba(43,86,114,1)"

            nob = new SVGLayer
                x:-60
                y:289
                parent: panelContainer
                svg:'<svg xmlns="http://www.w3.org/2000/svg" width="60" height="84"><path fill="#2B5672" fill-rule="nonzero" d="M24 18C10.745 18 0 28.745 0 42s10.745 24 24 24h18c9.9 0 18 8.1 18 18V0c0 9.9-8.1 18-18 18H24z"/></svg>'