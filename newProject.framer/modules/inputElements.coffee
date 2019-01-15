class exports.inputElements extends Layer

    constructor: (@options={}) ->

            super @options

            this.style=
                position:"relative"
                width:"100%"
                height:"auto"
                paddingTop:"10px"
            
            addDInput = new Layer
                parent:this
                html:'<div class="content-wrapper" style="height: 100%; overflow-y: visible; margin-right: 20px;"><div class="sections"><div class="section-wrapper section-wrapper preset-section without-footer without-labels" data-section-title="Input" data-tooltip-bounds="true"><div class="section-header SECTIONS_TYPES_PRESET" style="width: 304px; min-height: 25px;"><div class="title-line title-line-sub-category"><div class="title new-title-sub-category">Input</div><span class="has-tooltip info-icon-tooltip"><span class="control-info-icon sub-category-info-icon"><svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="1.5 1.5 18 18" width="18" height="18"><circle cx="10.5" cy="10.5" r="8"></circle><path d="M10.5 19.5a9 9 0 0 1-9-9 9 9 0 0 1 9-9 9 9 0 0 1 9 9 9 9 0 0 1-9 9zm-8-9c0 4.411 3.589 8 8 8s8-3.589 8-8-3.589-8-8-8-8 3.589-8 8zm10 5h-4l1-2v-3h-1l1-2h2v5l1 2zm-3-10h2v2h-2v-2z" fill-rule="evenodd"></path></svg><!-- react-text: 1995 -->
        <!-- /react-text --><!-- react-text: 1996 -->
    <!-- /react-text --></span></span></div></div><!-- react-text: 1997 -->
    <!-- /react-text --><div class="items-wrapper" style="width: 324px; height: 458px;"><div class="items" style="width: 324px; height: 458px;"><img src="https://static.parastorage.com/services/santa-resources/resources/editor/addPanelData/sections/textInputSection_en/textInputSection_en.v3.png"><!-- react-text: 2001 -->
            <!-- /react-text --><div draggable="false" class="preset-item" data-comp="wysiwyg.viewer.components.inputs.TextInput" style="left: 0px; top: 0px; width: 324px; height: 78px;"></div><div draggable="false" class="preset-item" data-comp="wysiwyg.viewer.components.inputs.TextInput" style="left: 0px; top: 78px; width: 324px; height: 68px;"></div><div draggable="false" class="preset-item" data-comp="wysiwyg.viewer.components.inputs.TextInput" style="left: 0px; top: 146px; width: 324px; height: 78px;"></div><div draggable="false" class="preset-item" data-comp="wysiwyg.viewer.components.inputs.TextInput" style="left: 0px; top: 224px; width: 324px; height: 76px;"></div><div draggable="false" class="preset-item" data-comp="wysiwyg.viewer.components.inputs.TextInput" style="left: 0px; top: 300px; width: 324px; height: 76px;"></div><div draggable="false" class="preset-item" data-comp="wysiwyg.viewer.components.inputs.TextInput" style="left: 0px; top: 376px; width: 324px; height: 82px;"></div><!-- react-text: 2008 -->
        <!-- /react-text --></div></div><!-- react-text: 2009 -->
    <!-- /react-text --></div><div class="section-wrapper section-wrapper preset-section without-footer without-labels" data-section-title="Text Box" data-tooltip-bounds="true"><div class="section-header SECTIONS_TYPES_PRESET" style="width: 304px; min-height: 25px;"><div class="title-line title-line-sub-category"><div class="title new-title-sub-category">Text Box</div><span class="has-tooltip info-icon-tooltip"><span class="control-info-icon sub-category-info-icon"><svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="1.5 1.5 18 18" width="18" height="18"><circle cx="10.5" cy="10.5" r="8"></circle><path d="M10.5 19.5a9 9 0 0 1-9-9 9 9 0 0 1 9-9 9 9 0 0 1 9 9 9 9 0 0 1-9 9zm-8-9c0 4.411 3.589 8 8 8s8-3.589 8-8-3.589-8-8-8-8 3.589-8 8zm10 5h-4l1-2v-3h-1l1-2h2v5l1 2zm-3-10h2v2h-2v-2z" fill-rule="evenodd"></path></svg><!-- react-text: 2019 -->
   
    <!-- /react-text --></div></div></div>'
                style:
                    position:"relative"
                    width:"100%"
                    height:"auto"
