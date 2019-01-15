class exports.addElements extends Layer

    constructor: (@options={}) ->

            super @options

            this.style=
                position:"relative"
                width:"100%"
                height:"auto"
            
            addDataset = new Layer
                parent:this
                html:"<div class='listItemWithImage'><div><svg xmlns='http://www.w3.org/2000/svg' width='78' height='78'><g fill='none' fill-rule='evenodd'><circle cx='39' cy='39' r='39' fill='#EAF7FF' fill-rule='nonzero'/><path fill='#459FED' d='M24 26c-1.103 0-2 .897-2 2v23c0 1.103.897 2 2 2h30c1.103 0 2-.897 2-2V28c0-1.103-.897-2-2-2H24zm9 22v-5h18v4.5c0 .275-.225.5-.5.5H33zm-1 0h-4.5a.501.501 0 0 1-.5-.5v-16c0-.275.225-.5.5-.5H32v5h-5v1h5v5h-5v1h5v5zm1-17h17.5c.275 0 .5.225.5.5V36H33v-5zm0 6h18v5H33v-5zm-1-7h-4.5c-.827 0-1.5.673-1.5 1.5v16c0 .827.673 1.5 1.5 1.5h23c.827 0 1.5-.673 1.5-1.5v-16c0-.827-.673-1.5-1.5-1.5H32zm22 25H24c-2.206 0-4-1.794-4-4V28c0-2.206 1.794-4 4-4h30c2.206 0 4 1.794 4 4v23c0 2.206-1.794 4-4 4z'/><path fill='#459FED' d='M40.5 59c-1.379 0-2.5-1.319-2.5-2.941V41.94C38 40.32 39.121 39 40.5 39h17c1.379 0 2.5 1.319 2.5 2.941V56.06C60 57.68 58.879 59 57.5 59h-17z'/><path fill='#FFF' fill-rule='nonzero' d='M53.063 53.5a2 2 0 1 1 0 1H51a2.5 2.5 0 0 1-2.5-2.5v-5a1.5 1.5 0 0 0-1.5-1.5h-2.063a2 2 0 1 1 0-1H47a2.5 2.5 0 0 1 2.5 2.5v5a1.5 1.5 0 0 0 1.5 1.5h2.063z'/></g></svg></div><div class='content'><div class='title ellipsis'>Dataset</div><div class='desc ellipsis'>Connect page elements to your data</div></div><div class='indicator'><div><svg width='27' height='27' viewBox='0 0 27 27' class='symbol symbol-plusBig listItemSymbol'><circle id='Combined-Shape' cx='13.5' cy='13.5' r='12.5' fill='#CBCBCB' class='circle'></circle><path id='Combined-Shape' fill='#3899EC' d='M13 13H9v1h4v4h1v-4h4v-1h-4V9h-1v4z' class='plus'></path></svg></div></div></div>"
                style:
                    position:"relative"
                    width:"100%"
                    height:"auto"
            
            addDynamic = new Layer
                parent:this
                html:"<div class='listItemWithImage '><div><svg xmlns='http://www.w3.org/2000/svg' width='78' height='78'><g fill='none' fill-rule='evenodd'><circle cx='39' cy='39' r='39' fill='#EAF7FF' fill-rule='nonzero'/><path fill='#459FED' d='M24 26c-1.103 0-2 .897-2 2v23c0 1.103.897 2 2 2h30c1.103 0 2-.897 2-2V28c0-1.103-.897-2-2-2H24zm9 22v-5h18v4.5c0 .275-.225.5-.5.5H33zm-1 0h-4.5a.501.501 0 0 1-.5-.5v-16c0-.275.225-.5.5-.5H32v5h-5v1h5v5h-5v1h5v5zm1-17h17.5c.275 0 .5.225.5.5V36H33v-5zm0 6h18v5H33v-5zm-1-7h-4.5c-.827 0-1.5.673-1.5 1.5v16c0 .827.673 1.5 1.5 1.5h23c.827 0 1.5-.673 1.5-1.5v-16c0-.827-.673-1.5-1.5-1.5H32zm22 25H24c-2.206 0-4-1.794-4-4V28c0-2.206 1.794-4 4-4h30c2.206 0 4 1.794 4 4v23c0 2.206-1.794 4-4 4z'/><path fill='#459FED' d='M40.5 59c-1.379 0-2.5-1.319-2.5-2.941V41.94C38 40.32 39.121 39 40.5 39h17c1.379 0 2.5 1.319 2.5 2.941V56.06C60 57.68 58.879 59 57.5 59h-17z'/><path fill='#FFF' fill-rule='nonzero' d='M53.063 53.5a2 2 0 1 1 0 1H51a2.5 2.5 0 0 1-2.5-2.5v-5a1.5 1.5 0 0 0-1.5-1.5h-2.063a2 2 0 1 1 0-1H47a2.5 2.5 0 0 1 2.5 2.5v5a1.5 1.5 0 0 0 1.5 1.5h2.063z'/></g></svg></div><div class='content'><div class='title ellipsis'>Dynamic Page Dataset</div><div class='desc ellipsis'>Make this a dynamic item or category page</div></div><div class='indicator'><div><svg width='27' height='27' viewBox='0 0 27 27' class='symbol symbol-plusBig listItemSymbol'><circle  cx='13.5' cy='13.5' r='12.5' fill='#CBCBCB' class='circle'></circle><path  fill='#3899EC' d='M13 13H9v1h4v4h1v-4h4v-1h-4V9h-1v4z' class='plus'></path></svg></div></div></div>"
                style:
                    position:"relative"
                    width:"100%"
                    height:"auto"