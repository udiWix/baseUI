require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"buttonLink":[function(require,module,exports){
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

exports.buttonLink = (function(superClass) {
  extend(buttonLink, superClass);

  Events.OnClicked = "OnClicked";

  function buttonLink(options) {
    var base, base1, base2, base3, base4, btn, btnType, colors, icons, link, mc, panel, styles;
    this.options = options != null ? options : {};
    if ((base = this.options).width == null) {
      base.width = 288;
    }
    if ((base1 = this.options).btnLabel == null) {
      base1.btnLabel = "Primary btn";
    }
    if ((base2 = this.options).btnType == null) {
      base2.btnType = "main";
    }
    if ((base3 = this.options).link == null) {
      base3.link = "true";
    }
    if ((base4 = this.options).linkLabel == null) {
      base4.linkLabel = "Link";
    }
    buttonLink.__super__.constructor.call(this, this.options);
    styles = require("wixStyles");
    colors = require("wixColors");
    icons = require("icons");
    panel = this.parent;
    mc = this;
    btnType = {
      main: {
        hover: colors.b2,
        idle: colors.b1
      },
      secondary: {
        hover: colors.b4,
        idle: colors.b5
      }
    };
    this.props = {
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      height: 108,
      width: this.options.width,
      y: panel.height - 107,
      style: {
        paddingTop: "24px",
        textAlign: "center",
        margin: "auto"
      }
    };
    panel.on("change:height", function() {
      return mc.y = panel.height - 107;
    });
    btn = new Layer({
      parent: this,
      html: this.options.btnLabel,
      style: styles.t01,
      name: "btn"
    });
    btn.style = {
      position: "relative",
      color: "white",
      backgroundColor: btnType[this.options.btnType].idle,
      height: "36px",
      width: "auto",
      padding: "6px 24px",
      borderRadius: "30px",
      textAlign: "center",
      display: "inline-block",
      cursor: "pointer"
    };
    btn.states.hover = {
      backgroundColor: btnType[this.options.btnType].hover
    };
    btn.states.idle = {
      backgroundColor: btnType[this.options.btnType].idle
    };
    btn.onMouseOver(function() {
      return this.stateSwitch("hover");
    });
    btn.onMouseOut(function() {
      return this.stateSwitch("idle");
    });
    btn.onClick(function() {
      return mc.emit(Events.OnClicked, mc);
    });
    if (this.options.link) {
      link = new Layer({
        parent: this,
        html: this.options.linkLabel,
        style: styles.t02
      });
      link.style = {
        position: "relative",
        color: colors.b1,
        height: "36px",
        marginTop: "10px",
        width: "auto",
        textAlign: "center"
      };
    }
  }

  return buttonLink;

})(Layer);


},{"icons":"icons","wixColors":"wixColors","wixStyles":"wixStyles"}],"datasetIcon":[function(require,module,exports){
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

exports.datasetIcon = (function(superClass) {
  extend(datasetIcon, superClass);

  function datasetIcon(options) {
    var base, colors, icon, icons, label, mc, styles;
    this.options = options != null ? options : {};
    if ((base = this.options).setName == null) {
      base.setName = "Properties List";
    }
    datasetIcon.__super__.constructor.call(this, this.options);
    styles = require("wixStyles");
    colors = require("wixColors");
    icons = require("icons");
    mc = this;
    this.props = {
      backgroundColor: "white",
      shadowBlur: 14,
      shadowColor: "rgba(22,45,61,0.36)",
      borderRadius: 8,
      width: 50,
      height: 50
    };
    icon = new SVGLayer({
      parent: mc,
      svg: icons.dataset,
      width: 30,
      height: 26
    });
    label = new TextLayer({
      parent: icon,
      text: this.options.setName,
      y: 45,
      fontSize: 12,
      fontWeight: 700,
      shadowColor: "rgba(0,0,0,0.7)",
      shadowBlur: 3,
      color: "white"
    });
    label.centerX();
    icon.center();
    this.onMouseDown(function() {
      return this.draggable.enabled = true;
    });
    this.onMouseUp(function() {
      return this.draggable.enabled = false;
    });
  }

  return datasetIcon;

})(Layer);


},{"icons":"icons","wixColors":"wixColors","wixStyles":"wixStyles"}],"dropDown":[function(require,module,exports){
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

exports.dropDown = (function(superClass) {
  var colors, icon, icons, selectText;

  extend(dropDown, superClass);

  selectText = null;

  icon = null;

  Events.Selected = "dropDown.OnSelected";

  icons = require("icons");

  colors = require("wixColors");

  function dropDown(options) {
    var base, base1, base2, base3, drop, dropIcon, enabler, i, label, len, listIcon, listItem, listLabel, mc, option, ref, select, setItems, styles;
    this.options = options != null ? options : {};
    if ((base = this.options).items == null) {
      base.items = ["One", "Two", "Three"];
    }
    if ((base1 = this.options).cLabel == null) {
      base1.cLabel = "Label";
    }
    if ((base2 = this.options).placeholder == null) {
      base2.placeholder = "Not connected";
    }
    if ((base3 = this.options).icons == null) {
      base3.icons = false;
    }
    dropDown.__super__.constructor.call(this, this.options);
    styles = require("wixStyles");
    this.backgroundColor = "transparent";
    this.style = {
      position: "relative",
      width: "100%",
      minHeight: "30px",
      height: "84px"
    };
    enabler = true;
    mc = this;
    label = new Layer({
      parent: this,
      html: this.options.cLabel,
      style: styles.t02
    });
    label.style = {
      height: "auto",
      width: "auto",
      position: "relative",
      color: colors.d2,
      padding: "16px 24px 7px 24px"
    };
    select = new Layer({
      parent: this
    });
    select.style = {
      width: "100%",
      height: "initial",
      position: "relative",
      display: "flex",
      padding: "0px 24px 18px 24px",
      borderBottom: "1px solid #D9E1E8"
    };
    if (this.options.icons) {
      icon = new SVGLayer({
        parent: select,
        width: 0,
        height: 0,
        fill: colors.d2,
        style: {
          position: "relative",
          paddingTop: "2px"
        }
      });
    }
    selectText = new Layer({
      parent: select,
      name: "selectText",
      style: styles.t03,
      html: this.options.placeholder
    });
    selectText.style = {
      width: "auto",
      height: "initial",
      position: "relative",
      color: colors.d2,
      textTransform: "capitalize"
    };
    selectText.on("change:html", function() {
      return mc.btnDispatch(selectText.html);
    });
    select.onClick(function() {
      if (enabler) {
        drop.visible = true;
        enabler = false;
        setItems();
        return this.parent.bringToFront();
      }
    });
    dropIcon = new SVGLayer({
      svg: icons.dropdown,
      parent: select,
      x: 240,
      style: {
        width: "auto",
        height: "auto"
      }
    });
    setItems = function() {
      var i, item, items, len, results, value;
      items = drop.children;
      selectText = select.childrenWithName("selectText")[0];
      value = selectText.html;
      results = [];
      for (i = 0, len = items.length; i < len; i++) {
        item = items[i];
        label = item.childrenWithName("label")[0];
        if (label.html === value) {
          item.stateSwitch("selected");
          label.style["color"] = "white";
          results.push(item.ignoreEvents = true);
        } else {
          item.stateSwitch("default");
          label.style["color"] = "#162D3D";
          results.push(item.ignoreEvents = false);
        }
      }
      return results;
    };
    drop = new Layer({
      parent: select,
      backgroundColor: "white",
      shadowBlur: 16,
      shadowColor: "rgba(0,0,0,.14)",
      clip: true,
      visible: false,
      style: {
        width: "85%",
        margin: "0px 24px",
        height: "auto",
        borderRadius: "8px"
      }
    });
    ref = this.options.items;
    for (i = 0, len = ref.length; i < len; i++) {
      option = ref[i];
      listItem = new Layer({
        parent: drop,
        backgroundColor: "white",
        height: 36
      });
      listItem.style = {
        position: "relative",
        width: "100%",
        padding: "6px 24px"
      };
      listLabel = new Layer({
        parent: listItem,
        html: option,
        name: "label",
        style: styles.t01,
        backgroundColor: "transparent",
        height: 36
      });
      listLabel.style = {
        position: "relative",
        width: "initial",
        textTransform: "capitalize",
        left: "0px"
      };
      if (this.options.icons) {
        listLabel.style["left"] = "24px";
        listIcon = new SVGLayer({
          parent: listItem,
          svg: icons[option],
          height: 20,
          width: 20,
          fill: colors.d2,
          x: 18
        });
        listIcon.centerY();
      }
      listItem.states.hover = {
        backgroundColor: colors.b4
      };
      listItem.states.selected = {
        backgroundColor: colors.b1
      };
      listItem.onMouseOver(function() {
        return this.stateSwitch("hover");
      });
      listItem.onMouseOut(function() {
        return this.stateSwitch("default");
      });
      listItem.onClick(function() {
        this.parent.visible = false;
        label = this.childrenWithName("label")[0];
        mc.setSelect(label.html);
        return Utils.delay(0.2, function() {
          return enabler = true;
        });
      });
    }
  }

  dropDown.prototype.btnDispatch = function(value) {
    return this.emit(Events.Selected, value, this);
  };

  dropDown.prototype.setSelect = function(string) {
    selectText.html = string;
    if (this.options.icons) {
      return icon.props = {
        svg: icons[string],
        width: 25,
        height: 25,
        fill: colors.d2
      };
    }
  };

  dropDown.prototype.getSelection = function() {
    return selectText.html;
  };

  return dropDown;

})(Layer);


},{"icons":"icons","wixColors":"wixColors","wixStyles":"wixStyles"}],"gfppBtn":[function(require,module,exports){
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

exports.gfppBtn = (function(superClass) {
  extend(gfppBtn, superClass);

  function gfppBtn(options) {
    var base, data, design, help, icon, settings;
    this.options = options != null ? options : {};
    if ((base = this.options).icon == null) {
      base.icon = "settings";
    }
    gfppBtn.__super__.constructor.call(this, this.options);
    settings = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="18"><defs><path id="a" d="M8.874 11.627a2.71 2.71 0 1 1 0-5.421 2.711 2.711 0 1 1 0 5.421m8.037-4.572l-1.706-.342a6.671 6.671 0 0 0-.298-.717l.966-1.449a1.113 1.113 0 0 0-.14-1.404l-1.07-1.071a1.114 1.114 0 0 0-1.404-.139l-1.448.965a7.18 7.18 0 0 0-.718-.298L10.751.895A1.112 1.112 0 0 0 9.66 0H8.146a1.11 1.11 0 0 0-1.091.895L6.713 2.6a7.304 7.304 0 0 0-.717.298l-1.449-.965a1.112 1.112 0 0 0-1.404.139L2.072 3.143a1.112 1.112 0 0 0-.138 1.404l.964 1.449c-.111.232-.211.47-.297.717l-1.706.342C.375 7.158 0 7.615 0 8.146V9.66c0 .53.375.987.895 1.091l1.706.341c.086.247.186.486.297.718l-.964 1.448a1.113 1.113 0 0 0 .138 1.405l1.071 1.07a1.112 1.112 0 0 0 1.404.139l1.449-.965c.232.112.471.212.718.298l.341 1.706c.103.52.56.895 1.091.895H9.66c.53 0 .987-.375 1.091-.895l.342-1.706c.247-.086.485-.186.718-.298l1.448.965a1.114 1.114 0 0 0 1.404-.139l1.07-1.07c.375-.375.434-.963.14-1.405l-.966-1.448c.113-.232.212-.472.298-.718l1.706-.341c.521-.104.895-.561.895-1.091V8.146a1.11 1.11 0 0 0-.895-1.091"/></defs><use fill-rule="evenodd" xlink:href="#a"/></svg>';
    design = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="16"><defs><path id="a" d="M6.634 11.675c-.024.403-.249.82-.631 1.173-.802.74-1.993 1.18-2.985 1.359.317-.628.421-1.198.345-1.828-.076-.615-.122-1.022.452-1.552a1.809 1.809 0 0 1 1.249-.48 2 2 0 0 1 .299.027c-.297.693-.51 1.262-.611 1.608.392-.097 1.042-.305 1.837-.6.02.097.052.189.045.293M16.872.785c-1.033-.92-2.76-1.72-6.595 1.823C8.498 4.25 6.849 7.167 5.808 9.385a3.235 3.235 0 0 0-.744-.097c-.724 0-1.469.242-2.061.789-2.253 2.08 1.235 3.22-3.003 5.2 0 0 .525.074 1.313.074 1.478 0 3.884-.26 5.502-1.754.866-.8 1.128-1.796.859-2.635 2.387-.963 5.476-2.466 7.227-4.083 3.835-3.543 2.968-5.138 1.971-6.093"/></defs><use fill-rule="evenodd" xlink:href="#a"/></svg>';
    help = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><defs><path id="a" d="M11.346 6.339a2.366 2.366 0 0 1-.644 1.12c-.14.136-.285.259-.434.371-.15.112-.299.222-.448.329-.15.108-.287.224-.413.35-.126.126-.19.266-.283.42a1.021 1.021 0 0 0-.135.539V10h-2v-.63c0-.308.076-.574.155-.798.079-.224.18-.422.292-.595.111-.172.237-.322.373-.448a7.54 7.54 0 0 1 .414-.357l.393-.315c.121-.098.229-.205.322-.322a1.313 1.313 0 0 0 .308-.875c0-.429-.105-.746-.315-.952-.21-.205-.502-.308-.875-.308-.252 0-.469.049-.651.147a1.305 1.305 0 0 0-.448.392c-.117.164-.203.245-.259.464-.056.219-.084.597-.084.597H4.556c.009 0 .096-.856.259-1.276.163-.42.392-.729.686-1.037.294-.308.649-.52 1.064-.693.415-.173.88-.245 1.393-.245.662 0 1.215.097 1.659.279.444.183.8.412 1.072.683a2.515 2.515 0 0 1 .755 1.752c0 .336-.033.629-.098.876zM6.989 13h2v-2h-2v2zM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0z"/></defs><use fill-rule="evenodd" xlink:href="#a"/></svg>';
    data = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14" height="16"><defs><path id="a" d="M0 12.348c1.364.95 3.986 1.594 7 1.594s5.636-.644 7-1.594v1.082c0 .656-.378 1.247-.964 1.507C11.57 15.588 9.411 16 7 16c-2.41 0-4.57-.412-6.036-1.063A1.641 1.641 0 0 1 0 13.43v-1.082zM7 0c2.411 0 4.57.412 6.036 1.063.586.26.964.851.964 1.507v.005c0 .656-.378 1.247-.964 1.507C11.57 4.733 9.411 5.145 7 5.145c-2.411 0-4.57-.412-6.036-1.063A1.641 1.641 0 0 1 0 2.575V2.57c0-.656.378-1.247.964-1.507C2.43.412 4.589 0 7 0zM0 8.696c1.364.95 3.986 1.594 7 1.594s5.636-.644 7-1.594v1.082c0 .656-.378 1.247-.964 1.507-1.466.651-3.625 1.063-6.036 1.063-2.41 0-4.57-.412-6.036-1.063A1.641 1.641 0 0 1 0 9.778V8.696zm0-3.551c1.364.95 3.986 1.594 7 1.594s5.636-.644 7-1.594v1.082c0 .656-.378 1.247-.964 1.507C11.57 8.385 9.411 8.797 7 8.797c-2.41 0-4.57-.412-6.036-1.063A1.641 1.641 0 0 1 0 6.227V5.145z"/></defs><use fill-rule="evenodd" xlink:href="#a"/></svg>';
    this.props = {
      borderRadius: 100,
      shadowColor: "rgba(0,0,0,0.54)",
      shadowX: 0,
      shadowY: 2,
      shadowBlur: 5,
      shadowSpread: 0,
      gradient: {
        end: "#FCFCFC",
        start: "#F4F4F4",
        angle: 0
      },
      style: {
        width: "auto",
        height: "auto",
        display: "flex",
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "32px",
        minWidth: "32px",
        marginRight: "10px"
      }
    };
    icon = new SVGLayer({
      name: "icon",
      parent: this,
      svg: eval(this.options.icon),
      fill: "#2D4150",
      style: {
        position: "relative",
        width: "auto",
        height: "auto"
      }
    });
    this.onMouseOver(function() {
      icon = this.childrenWithName("icon")[0];
      return icon.fill = "#00ABF6";
    });
    this.onMouseOut(function() {
      icon = this.childrenWithName("icon")[0];
      return icon.fill = "#2D4150";
    });
  }

  return gfppBtn;

})(Layer);


},{}],"gfpp":[function(require,module,exports){
exports.addGFPP = function(mc, label, btns) {
  var blueBorder, bt, btn, circle, container, frame, gfppBtn, gfppContainer, i, j, k, len, results;
  if (label == null) {
    label = "Change Text";
  }
  if (btns == null) {
    btns = ["settings", "design", "help", "data"];
  }
  frame = mc.frame;
  container = new Layer({
    parent: mc
  });
  gfppBtn = require("gfppBtn").gfppBtn;
  blueBorder = new Layer({
    parent: container,
    width: frame.width + 2,
    height: frame.height + 2,
    borderWidth: 1,
    borderColor: "#00ABF6",
    x: -1,
    y: -1
  });
  for (i = j = 0; j <= 7; i = ++j) {
    circle = new Layer({
      width: 9,
      height: 9,
      backgroundColor: "#fff",
      borderColor: "#00ABF6",
      borderWidth: 1,
      parent: container,
      borderRadius: 100
    });
    switch (i) {
      case 0:
        circle.x = blueBorder.minX - 4;
        circle.y = blueBorder.minY - 4;
        break;
      case 1:
        circle.x = blueBorder.midX - 4;
        circle.y = blueBorder.minY - 4;
        break;
      case 2:
        circle.x = blueBorder.maxX - 5;
        circle.y = blueBorder.minY - 4;
        break;
      case 3:
        circle.x = blueBorder.minX - 4;
        circle.y = blueBorder.maxY - 4;
        break;
      case 4:
        circle.x = blueBorder.midX - 4;
        circle.y = blueBorder.maxY - 4;
        break;
      case 5:
        circle.x = blueBorder.maxX - 5;
        circle.y = blueBorder.maxY - 4;
        break;
      case 6:
        circle.x = blueBorder.maxX - 5;
        circle.y = blueBorder.midY - 4;
        break;
      case 7:
        circle.x = blueBorder.minX - 4;
        circle.y = blueBorder.midY - 4;
    }
  }
  gfppContainer = new Layer({
    parent: container,
    y: -50,
    height: 32,
    style: {
      display: "flex",
      position: "relative"
    }
  });
  results = [];
  for (k = 0, len = btns.length; k < len; k++) {
    btn = btns[k];
    results.push(bt = new gfppBtn({
      parent: gfppContainer,
      icon: btn
    }));
  }
  return results;
};


},{"gfppBtn":"gfppBtn"}],"icons":[function(require,module,exports){
exports.closeIcon = '<svg width="25" height="25" ><defs><path d="M0 0h1v1H0V0zm1 1h1v1H1V1zm1 1h1v1H2V2zm1 1h1v1H3V3zm1 1h1v1H4V4zm1 1h1v1H5V5zm1 1h1v1H6V6zm1 1h1v1H7V7zm1 1h1v1H8V8zm0-8h1v1H8V0zM7 1h1v1H7V1zM6 2h1v1H6V2zM5 3h1v1H5V3zM3 5h1v1H3V5zM2 6h1v1H2V6zM1 7h1v1H1V7zM0 8h1v1H0V8z" /></defs><g fill="none" fill-rule="evenodd"><circle fill="#2B81CB" cx="12.5" cy="12.5" r="12.5"/><g transform="translate(8 8)"><mask  fill="#fff"><use xlink:href="#a"/></mask><use fill="#162D3D" xlink:href="#a"/><g mask="url(#b)" fill="#FFF"><path d="M0 0h9v9H0z"/></g></g></g></svg>';

exports.helpIcon = '<svg width="25" height="25" ><defs><path d="M6.009.805c.309.264.552.583.729.96.174.38.262.802.262 1.273 0 .615-.135 1.129-.403 1.557a6.377 6.377 0 0 1-1.034 1.22c-.355.35-.629.59-.827.777-.2.187-.348.317-.448.51-.098.192-.166.303-.199.568-.032.262-.055.918-.065.918H3.1c0-1.58.401-1.984.89-2.514.24-.257.54-.537.893-.856a4.11 4.11 0 0 0 .772-.954c.203-.35.304-.741.304-1.17a2.105 2.105 0 0 0-.703-1.605 2.429 2.429 0 0 0-.753-.45 2.531 2.531 0 0 0-.91-.165c-.452 0-.846.078-1.182.232a2.31 2.31 0 0 0-.836.635 2.78 2.78 0 0 0-.496.95C.97 3.055.92 3.886.93 3.886H0c0-1.69.558-2.488.873-2.823A3.224 3.224 0 0 1 2.05.28c.467-.186 1-.28 1.594-.28.464 0 .895.069 1.3.205.402.137.756.337 1.066.6zM3.1 12v-1.797h.924V12H3.1z" /></defs><g fill="none" fill-rule="evenodd"><circle fill="#2B81CB" cx="12.5" cy="12.5" r="12.5"/><g transform="translate(9 6)"><mask  fill="#fff"><use xlink:href="#a"/></mask><use fill="#162D3D" xlink:href="#a"/><g mask="url(#b)" fill="#FFF"><path d="M0 0h7v12H0z"/></g></g></g></svg>';

exports.dropdown = '<svg width="25" height="25" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle stroke="#B1DDF8" stroke-width="2" cx="12.5" cy="12.5" r="11.5"/><path d="M7.325 11.03c0 .19.08.372.222.5l4.74 4.395a.794.794 0 0 0 1.061 0l4.74-4.6a.668.668 0 0 0 0-.992.791.791 0 0 0-1.064 0l-4.21 4.11-4.211-3.905a.791.791 0 0 0-1.064 0 .672.672 0 0 0-.214.492z" fill="#3899EC"/></g></svg>';

exports.dataset = '<svg width="30" height="26" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero" fill="#3D3D3D"><path d="M1.544 6.502C3.634 7.422 6.647 8 10 8c3.352 0 6.366-.578 8.455-1.498C19.4 6.086 20 5.089 20 4c0-1.09-.6-2.086-1.544-2.502C16.366.578 13.353 0 10.001 0 6.647 0 3.633.578 1.544 1.498.6 1.914 0 2.911 0 4c0 1.09.6 2.086 1.544 2.502M1.506 11.706C3.543 12.5 6.482 13 9.752 13c.71 0 1.398-.028 2.07-.072A6.871 6.871 0 0 1 14 9.736c-1.31.193-2.742.302-4.248.302C5.553 10.038 2.09 9.215 0 8v1.545c0 .94.585 1.801 1.506 2.16M1.693 15.842c1.49.537 3.413.939 5.583 1.158a6.184 6.184 0 0 1 1.23-.574c.293-.877.817-1.667 1.494-2.334-4.309-.108-7.65-.92-10-2.092v1.602c0 .975.658 1.868 1.693 2.24M0 18v1.724c0 1.05.486 2.01 1.252 2.411.653.343 1.42.635 2.27.865-.017-.198-.046-.393-.046-.596.001-.94.195-1.82.524-2.595C2.314 19.41.869 18.78 0 18M9.191 23.922c.174.003.346.015.519.015h-.005c-.172 0-.341-.012-.514-.015zm.607-3.186v.001l-.007-.001h.007zM19.08 10c-5.282 0-5.46 5.333-5.46 5.333-2.184 0-4.346 2.134-4.346 4.254C8.337 19.587 6 20.27 6 22.8 6 25.331 7.78 26 9.25 26h.005l15.303-.02C27.565 25.979 30 23.595 30 20.658c0-2.939-2.44-5.324-5.448-5.324h-.012S24.36 10 19.08 10z"/></g></svg>';

exports.gallery = '<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 13.63l-2.968-3.7a.495.495 0 0 0-.362-.186.456.456 0 0 0-.38.145l-4.085 4.064-1.636-1.117a.501.501 0 0 0-.597.025L6 14.46V7.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v6.13zm0 2.87a.5.5 0 0 1-.5.5H6v-1.251l2.313-1.876 1.67 1.139a.499.499 0 0 0 .634-.06L14.6 10.99l3.4 4.24v1.27zm-13-9v7.367l-.969.129c-.28.034-.55-.143-.589-.392L2.005 5.067a.41.41 0 0 1 .081-.312.522.522 0 0 1 .354-.2l11.607-1.542c.257 0 .476.17.511.397l.39 2.59H6.5A1.5 1.5 0 0 0 5 7.5zM17.5 6h-1.54l-.413-2.74c-.118-.775-.714-1.358-1.547-1.246L2.308 3.566a1.526 1.526 0 0 0-1.02.59 1.399 1.399 0 0 0-.272 1.06l1.437 9.537c.108.71.753 1.247 1.5 1.247.07 0 .14-.005.21-.015L5 15.874v.626A1.5 1.5 0 0 0 6.5 18h11a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 17.5 6zM9 8c-.53 0-1 .47-1 1s.47 1 1 1c.531 0 1-.47 1-1s-.469-1-1-1z" fill-rule="evenodd"/></svg>';

exports.number = '<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M13.94 3l-.494 3.953-5.015.06L8.933 3h-.992L7.44 7.008 4 7.001V8h3.316l-.625 5H4v1.001h2.567L6.067 18h.992l.5-3.999h5.008L12.066 18h.993l.5-3.999H17V13h-3.316l.623-5H17v-.999l-2.568.001.5-4.002h-.992zm-1.192 5h.566l-.622 5H7.698l.5-5H12.748z"  fill-rule="evenodd"/></svg>';

exports.address = '<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 16.786C9.284 15.9 5 12.345 5 8.807c0-2.536 2.514-4.839 5.5-4.839s5.417 2.303 5.417 4.839c0 3.532-4.203 7.092-5.417 7.979M10.5 3C6.916 3 4 5.741 4 8.807c0 4.59 5.923 8.809 6.175 8.977L10.5 18l.325-.216C11.077 17.616 17 13.397 17 8.807 17 5.741 14.084 3 10.5 3m0 8.223c-1.103 0-2-.898-2-2 0-1.103.897-2 2-2s2 .897 2 2c0 1.102-.897 2-2 2m0-5c-1.654 0-3 1.345-3 3 0 1.654 1.346 3 3 3s3-1.346 3-3c0-1.655-1.346-3-3-3" fill-rule="evenodd"/></svg>';

exports.text = '<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M15.7 4H5.3C4.583 4 4 4.577 4 5.286v3h.867v-3c0-.237.195-.429.433-.429h4.767v10.286h-2.6V16h6.066v-.857h-2.6V4.857H15.7c.238 0 .433.192.433.429v3H17v-3C17 4.576 16.417 4 15.7 4" fill-rule="evenodd"/></svg>';

exports.user = '<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 16.5c0-2.688 1.663-4.884 3.895-5.56a.499.499 0 0 0 .355-.466c.004-.184.012-.367.03-.542A.501.501 0 0 0 9 9.434a2.855 2.855 0 0 1-1.632-2.58C7.368 5.266 8.66 4 10.246 4c1.587 0 2.88 1.266 2.88 2.854a2.855 2.855 0 0 1-1.633 2.58.501.501 0 0 0-.28.5c.018.174.025.356.03.539a.5.5 0 0 0 .354.466C13.83 11.617 16 13.792 16 16.5H5zm7.31-6.373a3.841 3.841 0 0 0 1.823-3.274 3.855 3.855 0 0 0-3.87-3.852c-.608 0-1.172.151-1.679.403-.413.23-.962.563-1.422 1.176a3.522 3.522 0 0 0-.28.434c-.007.013-.015.023-.022.037a3.771 3.771 0 0 0-.459 1.803c0 1.346.721 2.567 1.852 3.272-1.976.768-3.422 2.29-3.986 4.375h-.004a5.322 5.322 0 0 0-.204 1h.01a7.89 7.89 0 0 0-.069 1c0 .274.063 1 .5 1h12c.521 0 .5-1 .5-1 0-3.122-2.126-5.38-4.69-6.375z"  fill-rule="evenodd"/></svg>';

exports.filter = '<svg width="30" height="30" xmlns="http://www.w3.org/2000/svg"><path d="M18.898 9h.062c.814 0 1.35.919.877 1.581L16.151 16v5h-2v-5l-3.938-5.419C9.741 9.919 10.088 9 10.903 9h7.995zm-3.747 7l4-6h-8.249l4.25 6z" /></svg>';

exports.sort = '<svg width="30" height="30" xmlns="http://www.w3.org/2000/svg"><path d="M18 11V9h2v2h-2zm0 5v-2h2v2h-2zm0 5v-2h2v2h-2zm-2.625-4l.625.804L12.5 21 9 17.804 9.625 17 12 19.271V9h1v10.271L15.375 17z" /></svg>';

exports.menu = '<svg width="2" height="12" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2V0h2v2H0zm0 5V5h2v2H0zm0 5v-2h2v2H0z" /></defs><use xlink:href="#a" fill-rule="evenodd"/></svg>';

exports.table = '<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="12px" viewBox="0 0 16 12"><rect id="Rectangle" fill="#FFFFFF" opacity="0" x="0" y="0" width="20" height="20"></rect> <path d="M16,4 C17.1,4 18,4.9 18,6 L18,14 C18,15.1 17.1,16 16,16 L4,16 C2.9,16 2,15.1 2,14 L2,6 C2,4.9 2.9,4 4,4 L16,4 Z M17,7 L17,6 C17,5.4 16.6,5 16,5 L4,5 C3.4,5 3,5.4 3,6 L3,7 L17,7 Z M8,15 L12.2,15 L12.2,11.8 L8,11.8 L8,15 Z M13,11 L17,11 L17,7.8 L13,7.8 L13,11 Z M17,14 L17,11.8 L13,11.8 L13,15 L16,15 C16.6,15 17,14.6 17,14 Z M4,15 L7.2,15 L7.2,11.8 L3,11.8 L3,14 C3,14.6 3.4,15 4,15 Z M8,11 L12.2,11 L12.2,7.8 L8,7.8 L8,11 Z M3,11 L7.2,11 L7.2,7.8 L3,7.8 L3,11 Z" id="Shape"  fill-rule="nonzero"></path></svg>';


},{}],"inputComp":[function(require,module,exports){
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

exports.inputComp = (function(superClass) {
  extend(inputComp, superClass);

  Events.ValueChange = "ValueChange";

  function inputComp(options) {
    var base, base1, base2, colors, currentValue, enabler, inputStyle, isFocused, key, label, mc, styles, val;
    this.options = options != null ? options : {};
    if ((base = this.options).cLabel == null) {
      base.cLabel = "Label";
    }
    if ((base1 = this.options).placeholder == null) {
      base1.placeholder = "Not connected";
    }
    if ((base2 = this.options).placeHolderColor == null) {
      base2.placeHolderColor = "red";
    }
    inputComp.__super__.constructor.call(this, this.options);
    styles = require("wixStyles");
    colors = require("wixColors");
    currentValue = void 0;
    isFocused = false;
    this.backgroundColor = "transparent";
    this.style = {
      position: "relative",
      width: "100%",
      height: "84px",
      borderBottom: "1px solid #D9E1E8",
      backgroundColor: "transparent"
    };
    enabler = true;
    mc = this;
    label = new Layer({
      parent: this,
      html: this.options.cLabel,
      style: styles.t02
    });
    label.style = {
      height: "auto",
      width: "auto",
      position: "relative",
      color: colors.d2,
      padding: "16px 24px 7px 24px",
      backgroundColor: "transparent"
    };
    inputStyle = {
      appearance: "none",
      border: "1px solid #ffffff",
      borderRadius: "6px",
      background: "#ffffff",
      position: "relative",
      height: "36px",
      margin: "35px 12px",
      padding: "0px 12px",
      textAlign: "left",
      fontFamily: "font-family: HelveticaNeueW01-55Roma,HelveticaNeueW02-55Roma,HelveticaNeueW10-55Roma,Helvetica Neue,Helvetica,Arial,メイリオ,meiryo,ヒラギノ角ゴ pro w3,hiragino kaku gothic pro,sans-serif;",
      fontSize: "18px",
      "-webkit-appearance": "none",
      outline: "none"
    };
    this.picker = new Layer({
      parent: this,
      width: 288,
      height: 0,
      html: '<input  type="text" name="demo"><style type="text/css">::-webkit-input-placeholder { color: rgb(122, 122, 122) };</style>'
    });
    this.input = this.picker.querySelector("input");
    this.picker.onMouseOver((function(_this) {
      return function() {
        if (!isFocused) {
          return _this.input.style.backgroundColor = colors.b4;
        }
      };
    })(this));
    this.picker.onMouseOut((function(_this) {
      return function() {
        return _this.input.style.backgroundColor = "#ffffff";
      };
    })(this));
    this.input.placeholder = this.options.placeholder;
    for (key in inputStyle) {
      val = inputStyle[key];
      this.input.style[key] = val;
    }
    this.input.onfocus = (function(_this) {
      return function() {
        _this.input.style.borderColor = "#C1E4FE";
        _this.input.style.backgroundColor = "#ffffff";
        return isFocused = true;
      };
    })(this);
    this.input.onblur = (function(_this) {
      return function() {
        _this.input.style.borderColor = "#ffffff";
        return isFocused = false;
      };
    })(this);
    this.input.onkeydown = function(e) {
      return currentValue = this.value;
    };
    this.input.onkeyup = (function(_this) {
      return function(e) {
        if (currentValue !== _this.value) {
          return _this.emit(Events.ValueChange, _this.value);
        }
      };
    })(this);
  }

  return inputComp;

})(Layer);


},{"wixColors":"wixColors","wixStyles":"wixStyles"}],"input":[function(require,module,exports){
var wrapInput,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Events.EnterKey = "EnterKey";

Events.SpaceKey = "SpaceKey";

Events.BackspaceKey = "BackspaceKey";

Events.CapsLockKey = "CapsLockKey";

Events.ShiftKey = "ShiftKey";

Events.ValueChange = "ValueChange";

Events.InputFocus = "InputFocus";

Events.InputBlur = "InputBlur";

exports.InputLayer = (function(superClass) {
  extend(InputLayer, superClass);

  function InputLayer(options) {
    var base, currentValue, property, textProperties, value;
    if (options == null) {
      options = {};
    }
    this._setTextProperties = bind(this._setTextProperties, this);
    this._setPlaceholder = bind(this._setPlaceholder, this);
    _.defaults(options, {
      backgroundColor: "#FFF",
      width: 375,
      height: 60,
      padding: {
        left: 20
      },
      text: "Type something...",
      fontSize: 40,
      fontWeight: 300
    });
    if (options.multiLine) {
      if ((base = options.padding).top == null) {
        base.top = 20;
      }
    }
    this._inputElement = document.createElement("input");
    this._inputElement.style.position = "absolute";
    InputLayer.__super__.constructor.call(this, options);
    this._background = void 0;
    this._placeholder = void 0;
    this._isDesignLayer = false;
    this.input = new Layer({
      backgroundColor: "transparent",
      name: "input",
      width: this.width,
      height: this.height,
      parent: this
    });
    if (this.multiLine) {
      this._inputElement = document.createElement("textarea");
    }
    this.input._element.appendChild(this._inputElement);
    this._setTextProperties(this);
    this._inputElement.autocomplete = "off";
    this._inputElement.autocorrect = "off";
    this._inputElement.spellcheck = false;
    this._inputElement.className = "input" + this.id;
    textProperties = {
      text: this.text,
      fontFamily: this.fontFamily,
      fontSize: this.fontSize,
      lineHeight: this.lineHeight,
      fontWeight: this.fontWeight,
      color: this.color,
      backgroundColor: this.backgroundColor,
      width: this.width,
      height: this.height,
      padding: this.padding,
      parent: this.parent
    };
    for (property in textProperties) {
      value = textProperties[property];
      this.on("change:" + property, (function(_this) {
        return function(value) {
          _this._elementHTML.children[0].textContent = "";
          if (_this._isDesignLayer) {
            return;
          }
          _this._setTextProperties(_this);
          return _this._setPlaceholderColor(_this._id, _this.color);
        };
      })(this));
    }
    this._setPlaceholder(this.text);
    this._setPlaceholderColor(this._id, this.color);
    this._elementHTML.children[0].textContent = "";
    this._isFocused = false;
    this._inputElement.onfocus = (function(_this) {
      return function(e) {
        if (_this.focusColor == null) {
          _this.focusColor = "#000";
        }
        _this.emit(Events.InputFocus, event);
        return _this._isFocused = true;
      };
    })(this);
    this._inputElement.onblur = (function(_this) {
      return function(e) {
        _this.emit(Events.InputBlur, event);
        return _this._isFocused = false;
      };
    })(this);
    currentValue = void 0;
    this._inputElement.onkeydown = (function(_this) {
      return function(e) {
        currentValue = _this.value;
        if (e.which === 20) {
          _this.emit(Events.CapsLockKey, event);
        }
        if (e.which === 16) {
          return _this.emit(Events.ShiftKey, event);
        }
      };
    })(this);
    this._inputElement.onkeyup = (function(_this) {
      return function(e) {
        if (currentValue !== _this.value) {
          _this.emit("change:value", _this.value);
          _this.emit(Events.ValueChange, _this.value);
        }
        if (e.which === 13) {
          _this.emit(Events.EnterKey, event);
        }
        if (e.which === 8) {
          _this.emit(Events.BackspaceKey, event);
        }
        if (e.which === 32) {
          _this.emit(Events.SpaceKey, event);
        }
        if (e.which === 20) {
          return _this.emit(Events.CapsLockKey, event);
        }
      };
    })(this);
  }

  InputLayer.prototype._setPlaceholder = function(text) {
    return this._inputElement.placeholder = text;
  };

  InputLayer.prototype._setPlaceholderColor = function(id, color) {
    return document.styleSheets[0].addRule(".input" + id + "::-webkit-input-placeholder", "color: " + color);
  };

  InputLayer.prototype._checkDevicePixelRatio = function() {
    var dpr, ratio;
    ratio = Screen.width / Framer.Device.screen.width;
    if (Utils.isDesktop()) {
      if (ratio < 0.5 && ratio > 0.25) {
        dpr = 1 - ratio;
      } else if (ratio === 0.25) {
        dpr = 1 - (ratio * 2);
      } else {
        dpr = Utils.devicePixelRatio();
      }
      if (Framer.Device.deviceType === "fullscreen") {
        dpr = 2;
      }
    } else {
      if (ratio < 0.5 && ratio > 0.25) {
        dpr = 1 - ratio;
      } else if (ratio === 0.25) {
        dpr = 1 - (ratio * 2);
      } else if (ratio === 0.5) {
        dpr = 1;
      }
    }
    return dpr;
  };

  InputLayer.prototype._setTextProperties = function(layer) {
    var dpr, ref;
    dpr = this._checkDevicePixelRatio();
    if (!this._isDesignLayer) {
      this._inputElement.style.fontFamily = layer.fontFamily;
      this._inputElement.style.fontSize = (layer.fontSize / dpr) + "px";
      this._inputElement.style.fontWeight = (ref = layer.fontWeight) != null ? ref : "normal";
      this._inputElement.style.paddingTop = (layer.padding.top * 2 / dpr) + "px";
      this._inputElement.style.paddingRight = (layer.padding.bottom * 2 / dpr) + "px";
      this._inputElement.style.paddingBottom = (layer.padding.right * 2 / dpr) + "px";
      this._inputElement.style.paddingLeft = (layer.padding.left * 2 / dpr) + "px";
    }
    this._inputElement.style.width = ((layer.width - layer.padding.left * 2) * 2 / dpr) + "px";
    this._inputElement.style.height = (layer.height * 2 / dpr) + "px";
    this._inputElement.style.outline = "none";
    this._inputElement.style.backgroundColor = "transparent";
    this._inputElement.style.cursor = "auto";
    this._inputElement.style.webkitAppearance = "none";
    this._inputElement.style.resize = "none";
    this._inputElement.style.overflow = "hidden";
    return this._inputElement.style.webkitFontSmoothing = "antialiased";
  };

  InputLayer.prototype.addBackgroundLayer = function(layer) {
    this._background = layer;
    this._background.parent = this;
    this._background.name = "background";
    this._background.x = this._background.y = 0;
    this._background._element.appendChild(this._inputElement);
    return this._background;
  };

  InputLayer.prototype.addPlaceHolderLayer = function(layer) {
    var dpr;
    this._isDesignLayer = true;
    this._inputElement.className = "input" + layer.id;
    this.padding = {
      left: 0,
      top: 0
    };
    this._setPlaceholder(layer.text);
    this._setTextProperties(layer);
    this._setPlaceholderColor(layer.id, layer.color);
    this.on("change:color", (function(_this) {
      return function() {
        return _this._setPlaceholderColor(layer.id, _this.color);
      };
    })(this));
    layer.visible = false;
    this._elementHTML.children[0].textContent = "";
    dpr = this._checkDevicePixelRatio();
    this._inputElement.style.fontSize = (layer.fontSize * 2 / dpr) + "px";
    this._inputElement.style.paddingTop = (layer.y * 2 / dpr) + "px";
    this._inputElement.style.paddingLeft = (layer.x * 2 / dpr) + "px";
    this._inputElement.style.width = ((this._background.width - layer.x * 2) * 2 / dpr) + "px";
    if (this.multiLine) {
      this._inputElement.style.height = (this._background.height * 2 / dpr) + "px";
    }
    this.on("change:padding", (function(_this) {
      return function() {
        _this._inputElement.style.paddingTop = (_this.padding.top * 2 / dpr) + "px";
        return _this._inputElement.style.paddingLeft = (_this.padding.left * 2 / dpr) + "px";
      };
    })(this));
    return this._placeholder;
  };

  InputLayer.prototype.focus = function() {
    return this._inputElement.focus();
  };

  InputLayer.define("value", {
    get: function() {
      return this._inputElement.value;
    },
    set: function(value) {
      return this._inputElement.value = value;
    }
  });

  InputLayer.define("focusColor", {
    get: function() {
      return this._inputElement.style.color;
    },
    set: function(value) {
      return this._inputElement.style.color = value;
    }
  });

  InputLayer.define("multiLine", InputLayer.simpleProperty("multiLine", false));

  InputLayer.wrap = function(background, placeholder, options) {
    return wrapInput(new this(options), background, placeholder, options);
  };

  InputLayer.prototype.onEnterKey = function(cb) {
    return this.on(Events.EnterKey, cb);
  };

  InputLayer.prototype.onSpaceKey = function(cb) {
    return this.on(Events.SpaceKey, cb);
  };

  InputLayer.prototype.onBackspaceKey = function(cb) {
    return this.on(Events.BackspaceKey, cb);
  };

  InputLayer.prototype.onCapsLockKey = function(cb) {
    return this.on(Events.CapsLockKey, cb);
  };

  InputLayer.prototype.onShiftKey = function(cb) {
    return this.on(Events.ShiftKey, cb);
  };

  InputLayer.prototype.onValueChange = function(cb) {
    return this.on(Events.ValueChange, cb);
  };

  InputLayer.prototype.onInputFocus = function(cb) {
    return this.on(Events.InputFocus, cb);
  };

  InputLayer.prototype.onInputBlur = function(cb) {
    return this.on(Events.InputBlur, cb);
  };

  return InputLayer;

})(TextLayer);

wrapInput = function(instance, background, placeholder) {
  var input, ref;
  if (!(background instanceof Layer)) {
    throw new Error("InputLayer expects a background layer.");
  }
  if (!(placeholder instanceof TextLayer)) {
    throw new Error("InputLayer expects a text layer.");
  }
  input = instance;
  if (input.__framerInstanceInfo == null) {
    input.__framerInstanceInfo = {};
  }
  if ((ref = input.__framerInstanceInfo) != null) {
    ref.name = instance.constructor.name;
  }
  input.frame = background.frame;
  input.parent = background.parent;
  input.index = background.index;
  input.addBackgroundLayer(background);
  input.addPlaceHolderLayer(placeholder);
  return input;
};


},{}],"leftMenuBtn":[function(require,module,exports){
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

exports.leftMenuBtn = (function(superClass) {
  extend(leftMenuBtn, superClass);

  function leftMenuBtn(options) {
    var add, appMarket, background, base, blog, data, genertaeLabel, home, icon, label, media, styles;
    this.options = options != null ? options : {};
    if ((base = this.options).icon == null) {
      base.icon = "home";
    }
    leftMenuBtn.__super__.constructor.call(this, this.options);
    styles = require("wixStyles");
    home = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="22" height="26"><defs><path id="a" d="M22 3a5 5 0 0 1 5 5v16a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h12zm0 20V9a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1zm-9-10v-2h6v2h-6zm0 4v-2h6v2h-6zm0 4v-2h6v2h-6z"/></defs><use  fill-rule="evenodd" transform="translate(-5 -3)" xlink:href="#a"/></svg>';
    background = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24"><defs><path id="a" d="M5 19h14V5H5v14zM19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5z"/></defs><use fill-rule="evenodd" xlink:href="#a"/></svg>';
    add = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24"><defs><path id="a" d="M18.4 13.44h-4.8v4.8h-2.88v-4.8h-4.8v-2.88h4.8v-4.8h2.88v4.8h4.8v2.88zM11.99 0C5.456 0 0 5.453 0 11.98 0 18.508 5.456 24 11.99 24S24 18.53 24 12 18.524 0 11.99 0z"/></defs><use  fill-rule="evenodd" xlink:href="#a"/></svg>';
    appMarket = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24"><defs><path id="a" d="M18 6V3h-2v3h-3v2h3v3h2V8h3V6h-3zM0 7.998C0 6.895.887 6 1.998 6h4.004C7.105 6 8 6.887 8 7.998v4.004A1.993 1.993 0 0 1 6.002 14H1.998A1.993 1.993 0 0 1 0 12.002V7.998zm0 10C0 16.895.887 16 1.998 16h4.004C7.105 16 8 16.887 8 17.998v4.004A1.993 1.993 0 0 1 6.002 24H1.998A1.993 1.993 0 0 1 0 22.002v-4.004zm10 0c0-1.103.887-1.998 1.998-1.998h4.004c1.103 0 1.998.887 1.998 1.998v4.004A1.993 1.993 0 0 1 16.002 24h-4.004A1.993 1.993 0 0 1 10 22.002v-4.004zm0-15.992C10 .898 10.897 0 12.006 0h9.988C23.102 0 24 .897 24 2.006v9.988A2.005 2.005 0 0 1 21.994 14h-9.988A2.005 2.005 0 0 1 10 11.994V2.006z"/></defs><use fill-rule="evenodd" xlink:href="#a"/></svg>';
    media = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="28" height="21"><defs><path id="a" d="M21.536 6.82C20.573 2.906 17.05 0 12.84 0 7.888 0 1.53 3.643 3.988 12.268 3.775 12.233 0 12.393 0 16.398c0 2.205 1.788 3.87 3.993 3.87h8.495V11.1l-2.455 2.145c-.4.381-1.143.906-1.734.316-.53-.53-.373-1.229.064-1.698l5.125-4.594 5.14 4.531c.401.38.436 1.023.046 1.413-.403.402-1.117.583-1.663.038l-2.523-2.15v9.168h6.654c3.788 0 6.858-2.947 6.858-6.734 0-3.654-2.86-6.51-6.464-6.714"/></defs><use fill-rule="evenodd" xlink:href="#a"/></svg>';
    blog = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="30"><defs><path id="a" d="M13.499 2h-9a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5m.162 2H4.337a.5.5 0 0 0-.464.314L0 14l8 16h.5V16.929a1.997 1.997 0 1 1 1.75-3.492 1.996 1.996 0 0 1-.749 3.492V30h.5l8-16-3.878-9.686A.5.5 0 0 0 13.662 4"/></defs><use fill-rule="nonzero" xlink:href="#a"/></svg>';
    data = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="22"><defs><path id="a" d="M6.287 10.418C5.5 10.071 5 9.241 5 8.333c0-.907.5-1.738 1.287-2.084C8.027 5.482 10.539 5 13.334 5c2.793 0 5.305.482 7.046 1.249.787.346 1.287 1.177 1.287 2.084 0 .908-.5 1.738-1.287 2.085-1.741.767-4.253 1.249-7.046 1.249-2.795 0-5.306-.482-7.047-1.249zm-.032 4.337A1.941 1.941 0 0 1 5 12.955v-1.288c1.741 1.012 4.628 1.698 8.126 1.698 1.256 0 2.449-.09 3.54-.251a5.726 5.726 0 0 0-1.815 2.66c-.56.036-1.133.06-1.725.06-2.724 0-5.173-.417-6.871-1.08zm.156 4.28C5.548 18.725 5 17.981 5 17.168v-1.335c1.958.977 4.743 1.653 8.333 1.744-.564.556-1 1.214-1.245 1.944a5.153 5.153 0 0 0-1.024.479c-1.809-.183-3.412-.518-4.653-.965zM5 20c.724.65 1.928 1.175 3.333 1.507a5.54 5.54 0 0 0-.436 2.163c0 .169.024.331.038.497a9.37 9.37 0 0 1-1.892-.72C5.405 23.111 5 22.311 5 21.436V20zm15.9-6.667c4.4 0 4.55 4.445 4.55 4.445h.01c2.507 0 4.54 1.987 4.54 4.436 0 2.447-2.03 4.434-4.535 4.437l-12.752.016h-.005C11.483 26.667 10 26.109 10 24c0-2.108 1.947-2.677 2.727-2.677 0-1.767 1.802-3.545 3.622-3.545 0 0 .149-4.445 4.55-4.445z"/></defs><use fill-rule="nonzero" transform="translate(-5 -5)" xlink:href="#a"/></svg>';
    genertaeLabel = function(label) {
      switch (label) {
        case "home":
          label = "Menus & Pages";
          break;
        case "background":
          label = "Background";
          break;
        case "add":
          label = "Add";
          break;
        case "appMarket":
          label = "Add Apps";
          break;
        case "media":
          label = "My Uploads";
          break;
        case "blog":
          label = "My Blog";
          break;
        case "data":
          label = "Data App";
      }
      return label;
    };
    this.props = {
      borderRadius: 100,
      shadowColor: "rgba(0,0,0,0.54)",
      shadowX: 0,
      shadowY: 2,
      shadowBlur: 5,
      shadowSpread: 0,
      gradient: {
        end: "#FCFCFC",
        start: "#F4F4F4",
        angle: 0
      },
      style: {
        width: "auto",
        height: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "48px",
        minWidth: "48px"
      }
    };
    icon = new SVGLayer({
      parent: this,
      svg: eval(this.options.icon),
      fill: "#2D4150",
      style: {
        position: "relative",
        width: "auto",
        height: "auto"
      }
    });
    label = new Layer({
      name: "label",
      visible: false,
      parent: this,
      html: genertaeLabel(this.options.icon),
      style: styles.t05
    });
    label.style = {
      position: "relative",
      height: "auto",
      width: "auto",
      paddingRight: "20px",
      paddingLeft: "10px",
      whiteSpace: "nowrap"
    };
    this.onMouseOver(function() {
      this.style = {
        paddingLeft: "12px"
      };
      label = this.childrenWithName("label")[0];
      return label.visible = true;
    });
    this.onMouseOut(function() {
      this.style = {
        paddingLeft: "initial"
      };
      label = this.childrenWithName("label")[0];
      return label.visible = false;
    });
  }

  return leftMenuBtn;

})(Layer);


},{"wixStyles":"wixStyles"}],"leftMenu":[function(require,module,exports){
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

exports.leftMenu = (function(superClass) {
  extend(leftMenu, superClass);

  function leftMenu(options) {
    var base, btn, btns, i, j, leftMenuBtn, len, mc, menuBtn;
    this.options = options != null ? options : {};
    if ((base = this.options).icons == null) {
      base.icons = ["home", "background", "add", "appMarket", "media", "blog", "data"];
    }
    leftMenu.__super__.constructor.call(this, this.options);
    leftMenuBtn = require("leftMenuBtn").leftMenuBtn;
    btns = this.options.icons;
    mc = this;
    this.props = {
      width: 32
    };
    for (i = j = 0, len = btns.length; j < len; i = ++j) {
      menuBtn = btns[i];
      btn = new leftMenuBtn({
        parent: mc,
        y: i * 60,
        icon: menuBtn
      });
    }
  }

  return leftMenu;

})(Layer);


},{"leftMenuBtn":"leftMenuBtn"}],"master":[function(require,module,exports){
var buttonLink, colors, datasetIcon, dropDown, icons, inputComp, leftMenu, leftMenuBtn, panelBody, radioBtns, styles, topbar;

exports.colors = colors = require("wixColors");

exports.styles = styles = require("wixStyles");

exports.icons = icons = require("icons");

panelBody = require("panelBody").panelBody;

exports.panelBody = panelBody;

dropDown = require("dropDown").dropDown;

exports.dropDown = dropDown;

inputComp = require("inputComp").inputComp;

exports.inputComp = inputComp;

datasetIcon = require("datasetIcon").datasetIcon;

exports.datasetIcon = datasetIcon;

buttonLink = require("buttonLink").buttonLink;

exports.buttonLink = buttonLink;

radioBtns = require("radioBtns").radioBtns;

exports.radioBtns = radioBtns;

topbar = require("topbar").topbar;

exports.topbar = topbar;

leftMenuBtn = require("leftMenuBtn").leftMenuBtn;

exports.leftMenuBtn = leftMenuBtn;

leftMenu = require("leftMenu").leftMenu;

exports.leftMenu = leftMenu;


},{"buttonLink":"buttonLink","datasetIcon":"datasetIcon","dropDown":"dropDown","icons":"icons","inputComp":"inputComp","leftMenu":"leftMenu","leftMenuBtn":"leftMenuBtn","panelBody":"panelBody","radioBtns":"radioBtns","topbar":"topbar","wixColors":"wixColors","wixStyles":"wixStyles"}],"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}],"panelBody":[function(require,module,exports){
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

exports.panelBody = (function(superClass) {
  extend(panelBody, superClass);

  Events.dragEnd = "dragEnd";

  function panelBody(options) {
    var base, base1, base2, base3, circle, close, closeIcon, colors, hColor, hTitle, header, headerStyle, help, helpIcon, icon, mc, styles, textColor;
    this.options = options != null ? options : {};
    if ((base = this.options).height == null) {
      base.height = 558;
    }
    if ((base1 = this.options).width == null) {
      base1.width = 288;
    }
    if ((base2 = this.options).title == null) {
      base2.title = "Panel Title";
    }
    if ((base3 = this.options).headerColor == null) {
      base3.headerColor = "blue";
    }
    panelBody.__super__.constructor.call(this, this.options);
    styles = require("wixStyles");
    colors = require("wixColors");
    hColor = colors.b1;
    mc = this;
    this.props = {
      backgroundColor: "white",
      shadowBlur: 14,
      shadowColor: "rgba(22,45,61,0.36)",
      borderRadius: 8,
      clip: true,
      style: {
        paddingTop: "54px"
      }
    };
    switch (this.options.headerColor) {
      case "blue":
        hColor = colors.b1;
        circle = colors.e1;
        icon = "white";
        textColor = "white";
        headerStyle = {
          padding: "18px 24px"
        };
        break;
      case "white":
        hColor = "white";
        circle = colors.b5;
        icon = colors.b1;
        textColor = colors.d1;
        headerStyle = {
          padding: "18px 24px",
          borderBottom: "1px solid #D9E1E8"
        };
    }
    helpIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25"><desc>  Created with Sketch.</desc><g fill="none"><circle cx="12.5" cy="12.5" r="12.5" fill="' + circle + '"/><g fill="' + icon + '"><path d="M15 6.8C15.3 7.1 15.6 7.4 15.7 7.8 15.9 8.1 16 8.6 16 9 16 9.7 15.9 10.2 15.6 10.6 15.3 11 15 11.5 14.6 11.8 14.2 12.2 13.9 12.4 13.7 12.6 13.5 12.8 13.4 12.9 13.3 13.1 13.2 13.3 13.1 13.4 13.1 13.7 13.1 13.9 13 14.6 13 14.6L12.1 14.6C12.1 13 12.5 12.6 13 12.1 13.2 11.8 13.5 11.5 13.9 11.2 14.2 10.9 14.4 10.6 14.7 10.3 14.9 9.9 15 9.5 15 9.1 15 8.5 14.7 7.9 14.3 7.5 14 7.3 13.8 7.1 13.5 7 13.2 6.9 12.9 6.9 12.6 6.9 12.1 6.9 11.7 7 11.4 7.1 11.1 7.3 10.8 7.5 10.6 7.7 10.3 8 10.2 8.3 10.1 8.7 10 9.1 9.9 9.9 9.9 9.9L9 9.9C9 8.2 9.6 7.4 9.9 7.1 10.2 6.7 10.6 6.5 11 6.3 11.5 6.1 12 6 12.6 6 13.1 6 13.5 6.1 13.9 6.2 14.3 6.3 14.7 6.5 15 6.8ZM12.1 18L12.1 16.2 13 16.2 13 18 12.1 18Z"/></g></g></svg>';
    closeIcon = '<svg width="25" height="25" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="' + circle + '" cx="12.5" cy="12.5" r="12.5"/><path d="M8 8h1v1H8V8zm1 1h1v1H9V9zm1 1h1v1h-1v-1zm1 1h1v1h-1v-1zm1 1h1v1h-1v-1zm1 1h1v1h-1v-1zm1 1h1v1h-1v-1zm1 1h1v1h-1v-1zm1 1h1v1h-1v-1zm0-8h1v1h-1V8zm-1 1h1v1h-1V9zm-1 1h1v1h-1v-1zm-1 1h1v1h-1v-1zm-2 2h1v1h-1v-1zm-1 1h1v1h-1v-1zm-1 1h1v1H9v-1zm-1 1h1v1H8v-1z" fill="' + icon + '"/></g></svg>';
    header = new Layer({
      parent: mc,
      width: this.options.width,
      backgroundColor: hColor,
      height: 54,
      style: headerStyle
    });
    header.onMouseDown(function() {
      return mc.draggable.enabled = true;
    });
    header.onMouseUp(function() {
      return mc.draggable.enabled = false;
    });
    hTitle = new Layer({
      parent: header,
      html: this.options.title,
      style: styles.t05
    });
    hTitle.style = {
      position: "relative",
      color: textColor
    };
    close = new Layer({
      parent: header,
      x: this.options.width - 43,
      y: 15,
      html: closeIcon,
      width: 25,
      height: 25,
      style: {
        cursor: "pointer"
      }
    });
    close.onClick(function() {
      return mc.destroy();
    });
    help = new Layer({
      parent: header,
      x: this.options.width - 77,
      y: 15,
      width: 25,
      height: 25,
      html: helpIcon
    });
  }

  return panelBody;

})(Layer);


},{"wixColors":"wixColors","wixStyles":"wixStyles"}],"radioBtns":[function(require,module,exports){
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

exports.radioBtns = (function(superClass) {
  extend(radioBtns, superClass);

  Events.Checked = "radioBtns.OnChecked";

  function radioBtns(options) {
    var base, base1, base2, check, colors, container, i, item, j, len, line, ref, styles, title;
    this.options = options != null ? options : {};
    if ((base = this.options).items == null) {
      base.items = ['item1', 'item2', 'item3'];
    }
    if ((base1 = this.options).checked == null) {
      base1.checked = 0;
    }
    if ((base2 = this.options).title == null) {
      base2.title = "Do images show text?";
    }
    this.itemMcs = [];
    radioBtns.__super__.constructor.call(this, this.options);
    styles = require("wixStyles");
    colors = require("wixColors");
    Utils.insertCSS(".container { display: block; position: relative; padding-left: 30px; margin-bottom: 12px; cursor: pointer; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; font-family: HelveticaNeueW01-55Roman,HelveticaNeueW02-55Roman,HelveticaNeueW10-55Roman,sans-serif; font-size: 14px; color:" + colors.d1 + "; lineHeight: 18px; textTransform: none; textRendering: geometricPrecision; } .container input { opacity: 0; position: absolute; left: 0px; width:100%; height:100%; } .checkmark { position: absolute; top: 5px; left: 0; height: 16px; width: 16px; background-color: #fff; border-radius: 50%; border: 1px solid " + colors.b1 + "; } .container:hover input ~ .checkmark { background-color: " + colors.b4 + "; } .container input:checked ~ .checkmark { } .checkmark:after { position: absolute; display: none; content:''; } .container input:checked ~ .checkmark:after { display: block; } .container .checkmark:after { top: 3px; left: 3px; width: 10px; height: 10px; border-radius: 50%; background: " + colors.b1 + "; }");
    line = "";
    ref = this.options.items;
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      item = ref[i];
      check = this.options.checked === i ? "checked" : "";
      line += "<label class='container'>" + this.options.items[i] + " <input type='radio' name='radio' " + check + "> <span class='checkmark'></span> </label>";
    }
    title = new Layer({
      parent: this,
      html: this.options.title,
      style: styles.t02
    });
    title.style["color"] = colors.d2;
    container = new Layer({
      parent: this,
      html: line,
      y: 30,
      style: {
        position: "relative"
      }
    });
  }

  return radioBtns;

})(Layer);


},{"wixColors":"wixColors","wixStyles":"wixStyles"}],"topbar":[function(require,module,exports){
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

exports.topbar = (function(superClass) {
  extend(topbar, superClass);

  Events.dragEnd = "dragEnd";

  function topbar(options) {
    var Site, bG_3, base, colors, combinedShape, help, layer_15241524Preview, layer_15241524Publish, layer_15241524Save, layer_15391518Mobile, leftSection, menu, mobileIcon, pageName, pages, pagesNav, redoIcon, rightSide, styles, tools, topbarButtonsPreviewDefault, topbarButtonsPublishDefault, topbarButtonsSaveDefault, topbarIconsMobileText, topbarIconsRedo, topbarIconsUndo, topbarIconsZoom, topbarMenuItemDefault, topbarMenuItemDefault_2, topbarMenuItemDefault_3, topbarMenuItemDefault_4, undoIcon, upgrade, wixBtn, wixLogo, zoomIcon;
    this.options = options != null ? options : {};
    if ((base = this.options).height == null) {
      base.height = 48;
    }
    topbar.__super__.constructor.call(this, this.options);
    styles = require("wixStyles");
    colors = require("wixColors");
    this.height = 48;
    this.backgroundColor = "white";
    this.style = {
      position: "relative",
      width: "100%",
      boxShadow: "0 0 15px 0 rgba(22, 45, 61, 0.5)",
      display: "flex",
      justifyContent: "space-between"
    };
    leftSection = new Layer({
      parent: this,
      style: {
        position: "relative"
      }
    });
    wixBtn = new Layer({
      parent: leftSection,
      width: 75,
      height: 48,
      style: {
        borderRight: "1px #eaf7ff solid"
      }
    });
    wixLogo = new SVGLayer({
      x: 10,
      y: 12,
      parent: wixBtn,
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="19"><path fill="#000" fill-rule="evenodd" d="M29.56.347C30.433-.035 32 .001 32 .001c0 1.272-.148 2.028-1.109 2.615-.308.187-.839.474-1.462.662A4.628 4.628 0 0 0 28 4c0-2.317.423-3.156 1.56-3.653zm-5.492.812C25.456.045 27.536.283 27.536.283l-5.424 18.67s-1.79.117-2.685-.299c-1.176-.545-1.736-.966-2.448-3.506-.634-2.265-2.411-8.916-2.574-9.39-.08-.235-.175-.794-.637-.794-.451 0-.555.56-.637.794-.166.473-1.94 7.125-2.574 9.39-.712 2.54-1.272 2.96-2.448 3.506-.895.416-2.685.299-2.685.299L0 .283s2.08-.238 3.468.876c.855.686 1.105 1.78 1.105 1.78l2.833 9.99L9.76 4.753c.23-.87.644-1.944 1.298-2.67.834-.926 2.529-.984 2.709-.984.18 0 1.875.058 2.709.984.655.726 1.068 1.8 1.298 2.67l2.356 8.176 2.832-9.99s.25-1.094 1.105-1.78zM31.998 4v.648H32v10.845c-.011 2.225-.298 2.72-1.547 3.232-.97.398-2.453.247-2.453.247V6.826c0-.61.252-1.01 1.182-1.37.554-.214 1.07-.378 1.61-.62C31.63 4.456 31.998 4 31.998 4zm12.123 6.031l5.863 8.924s-2.539.334-3.767-.811c-.787-.733-1.592-1.924-1.592-1.924l-2.163-3.192c-.105-.166-.243-.346-.462-.346-.22 0-.357.18-.462.346l-2.163 3.192s-.761 1.191-1.547 1.924c-1.229 1.145-3.813.81-3.813.81l5.864-8.923L34 1.081s2.481-.434 3.71.711c.786.733 1.665 2.05 1.665 2.05l2.163 3.192c.105.166.243.347.462.347.22 0 .357-.18.462-.347l2.163-3.192s.879-1.317 1.665-2.05C47.52.647 50 1.08 50 1.08l-5.88 8.951z"/></svg>'
    });
    pagesNav = new Layer({
      parent: leftSection,
      x: 75,
      width: 222,
      height: 48,
      style: {
        borderRight: "1px #eaf7ff solid"
      }
    });
    pageName = new TextLayer({
      parent: pagesNav,
      x: 71,
      y: 15,
      width: 109,
      text: "Home",
      fontSize: 14,
      fontFamily: "Helvetica Neue W01 55 Roman",
      letterSpacing: 0.0,
      lineHeight: 1.2857142857142858,
      textAlign: "left",
      color: "rgba(56,153,236,1)"
    });
    pages = new TextLayer({
      parent: pagesNav,
      x: 24,
      y: 15,
      text: "Pages:",
      fontSize: 14,
      fontFamily: "Helvetica Neue W01 55 Roman",
      lineHeight: 1.2857142857142858,
      textAlign: "left",
      color: "rgba(22,45,61,1)"
    });
    combinedShape = new SVGLayer({
      parent: pagesNav,
      x: 188,
      y: 20,
      width: 10,
      height: 5.5,
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="6"><path fill="#3899EC" fill-rule="nonzero" d="M5 3.851L8.908.175a.627.627 0 0 1 .93.067.745.745 0 0 1-.063.999L5.441 5.318a.625.625 0 0 1-.882 0L.225 1.241a.745.745 0 0 1-.062-1 .627.627 0 0 1 .93-.066L5 3.851z"/></svg>'
    });
    menu = new Layer({
      parent: leftSection,
      x: 296,
      backgroundColor: "transparent",
      width: 325,
      height: 48
    });
    topbarMenuItemDefault = new Layer({
      parent: menu,
      x: 0,
      y: 0,
      backgroundColor: "transparent",
      width: 79,
      height: 48
    });
    Site = new TextLayer({
      parent: topbarMenuItemDefault,
      x: 36,
      y: 15,
      text: "Site",
      fontSize: 14,
      fontFamily: "Helvetica Neue W01 55 Roman",
      letterSpacing: 0.0,
      lineHeight: 1.2857142857142858,
      textAlign: "left",
      color: "rgba(22,45,61,1)"
    });
    topbarMenuItemDefault_2 = new Layer({
      parent: menu,
      x: 79,
      y: 0,
      backgroundColor: "transparent",
      width: 71,
      height: 48
    });
    tools = new TextLayer({
      parent: topbarMenuItemDefault_2,
      x: 18,
      y: 15,
      width: 43.13953488372093,
      text: "Tools",
      fontSize: 14,
      fontFamily: "Helvetica Neue W01 55 Roman",
      letterSpacing: 0.0,
      lineHeight: 1.2857142857142858,
      textAlign: "left",
      color: "rgba(22,45,61,1)"
    });
    topbarMenuItemDefault_3 = new Layer({
      parent: menu,
      x: 150,
      y: 0,
      backgroundColor: "transparent",
      width: 66,
      height: 48
    });
    help = new TextLayer({
      parent: topbarMenuItemDefault_3,
      x: 18,
      y: 15,
      width: 33.48837209302326,
      text: "Help",
      fontSize: 14,
      fontFamily: "Helvetica Neue W01 55 Roman",
      letterSpacing: 0.0,
      lineHeight: 1.2857142857142858,
      textAlign: "left",
      color: "rgba(22,45,61,1)"
    });
    topbarMenuItemDefault_4 = new Layer({
      parent: menu,
      x: 216,
      y: 0,
      backgroundColor: "transparent",
      width: 109,
      height: 48
    });
    upgrade = new TextLayer({
      parent: topbarMenuItemDefault_4,
      x: 18,
      y: 15,
      width: 82.04918032786885,
      text: "Upgrade",
      fontSize: 14,
      fontFamily: "Helvetica Neue W01 55 Roman",
      letterSpacing: 0.0,
      lineHeight: 1.2857142857142858,
      textAlign: "left",
      color: "rgba(22,45,61,1)"
    });
    rightSide = new Layer({
      parent: this,
      backgroundColor: "transparent",
      width: 523,
      height: 48,
      style: {
        position: "relative"
      }
    });
    topbarIconsRedo = new Layer({
      parent: rightSide,
      x: 98,
      backgroundColor: "transparent",
      width: 48,
      height: 48,
      style: {
        borderLeft: "1px #eaf7ff solid"
      }
    });
    redoIcon = new SVGLayer({
      parent: topbarIconsRedo,
      x: 17,
      y: 16,
      width: 13.21162377200934,
      height: 16,
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="16"><path fill="#162D3D" fill-rule="evenodd" d="M10.077 0L9.26.507l2.273 3.664-2.427-.564c-1.916-.443-3.894-.157-5.57.816-1.706.99-2.89 2.578-3.33 4.47-.64 2.753.22 5.41 2.299 7.107l.608-.745C1.326 13.796.589 11.499 1.144 9.11c.775-3.331 4.25-5.384 7.745-4.566l2.426.563L7.66 7.394l.508.814 5.044-3.153L10.077 0z"/></svg>'
    });
    topbarIconsUndo = new Layer({
      parent: rightSide,
      x: 49,
      backgroundColor: "transparent",
      width: 48,
      height: 48,
      style: {
        borderLeft: "1px #eaf7ff solid"
      }
    });
    undoIcon = new SVGLayer({
      parent: topbarIconsUndo,
      x: 17,
      y: 16,
      width: 13.21173512517724,
      height: 16,
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="16"><path fill="#162D3D" fill-rule="evenodd" d="M13.004 8.893c-.896-3.848-4.891-6.218-8.899-5.285l-2.426.563L3.952.507 3.135 0 0 5.055l5.044 3.153.509-.814-3.655-2.286 2.424-.564c3.494-.815 6.972 1.236 7.745 4.567.556 2.388-.181 4.685-1.969 6.144l.608.745c2.079-1.697 2.938-4.353 2.298-7.107"/></svg>'
    });
    topbarIconsZoom = new Layer({
      parent: rightSide,
      backgroundColor: "transparent",
      width: 48,
      height: 48,
      style: {
        borderLeft: "1px #eaf7ff solid"
      }
    });
    zoomIcon = new SVGLayer({
      parent: topbarIconsZoom,
      x: 15,
      y: 16,
      width: 17.021,
      height: 16.021,
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16"><path fill="#162D3D" fill-rule="evenodd" d="M7.5 14A6.508 6.508 0 0 1 1 7.5C1 3.916 3.916 1 7.5 1S14 3.916 14 7.5 11.084 14 7.5 14zm9.521 1.313l-3.441-3.44A7.442 7.442 0 0 0 15 7.5C15 3.364 11.636 0 7.5 0S0 3.364 0 7.5 3.364 15 7.5 15a7.467 7.467 0 0 0 5.44-2.353l3.373 3.374.708-.708zM5.021 8h5V7h-5v1z"/></svg>'
    });
    topbarButtonsSaveDefault = new Layer({
      parent: rightSide,
      x: 248,
      backgroundColor: "transparent",
      width: 80,
      height: 48,
      style: {
        borderLeft: "1px #eaf7ff solid"
      }
    });
    layer_15241524Save = new TextLayer({
      parent: topbarButtonsSaveDefault,
      x: 24,
      y: 15,
      text: "Save",
      fontSize: 14,
      fontFamily: "Helvetica Neue W01 55 Roman",
      letterSpacing: 0.0,
      lineHeight: 1.2857142857142858,
      textAlign: "left",
      color: "rgba(22,45,61,1)"
    });
    topbarButtonsPreviewDefault = new Layer({
      parent: rightSide,
      x: 329,
      backgroundColor: "transparent",
      width: 98,
      height: 48,
      style: {
        borderLeft: "1px #eaf7ff solid"
      }
    });
    layer_15241524Preview = new TextLayer({
      parent: topbarButtonsPreviewDefault,
      x: 24,
      y: 15,
      text: "Preview",
      fontSize: 14,
      fontFamily: "Helvetica Neue W01 55 Roman",
      letterSpacing: 0.0,
      lineHeight: 1.2857142857142858,
      textAlign: "left",
      color: "rgba(22,45,61,1)"
    });
    topbarButtonsPublishDefault = new Layer({
      parent: rightSide,
      x: 428,
      backgroundColor: "transparent",
      width: 95,
      height: 48,
      style: {
        borderLeft: "1px #eaf7ff solid"
      }
    });
    bG_3 = new Layer({
      parent: topbarButtonsPublishDefault,
      x: 0,
      y: 0,
      width: 95,
      height: 48,
      backgroundColor: "rgba(56,153,236,1)"
    });
    layer_15241524Publish = new TextLayer({
      parent: topbarButtonsPublishDefault,
      x: 24,
      y: 15,
      text: "Publish",
      fontSize: 14,
      fontFamily: "Helvetica Neue W01 55 Roman",
      letterSpacing: 0.0,
      lineHeight: 1.2857142857142858,
      textAlign: "left",
      color: "rgba(255,255,255,1)"
    });
    topbarIconsMobileText = new Layer({
      parent: rightSide,
      x: 147,
      backgroundColor: "transparent",
      width: 100,
      height: 48,
      style: {
        borderLeft: "1px #eaf7ff solid"
      }
    });
    layer_15391518Mobile = new TextLayer({
      parent: topbarIconsMobileText,
      x: 39,
      y: 15,
      text: "Mobile",
      fontSize: 14,
      fontFamily: "Helvetica Neue W01 55 Roman",
      letterSpacing: 0.0,
      lineHeight: 1.2857142857142858,
      textAlign: "left",
      color: "rgba(22,45,61,1)"
    });
    mobileIcon = new SVGLayer({
      parent: topbarIconsMobileText,
      x: 18,
      y: 13,
      width: 13,
      height: 22,
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="22"><path fill="#1D2D3C" fill-rule="evenodd" d="M1 17h11V3H1v14zm11 2c0 1.103-.897 2-2 2H3c-1.103 0-2-.897-2-2v-1h11v1zM2.898 1h7.204c.852 0 1.585.413 1.898 1H1c.313-.587 1.046-1 1.898-1zM3 0a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/></svg>'
    });
  }

  return topbar;

})(Layer);


},{"wixColors":"wixColors","wixStyles":"wixStyles"}],"wixColors":[function(require,module,exports){
module.exports = {
  d1: "#162D3D",
  d2: "#2B5672",
  d3: "#7A92A5",
  d4: "#D9E1E8",
  d5: "#F0F3F5",
  d6: "#FFFFFF",
  d1x: "#7A7A7A",
  d2x: "#939393",
  d3x: "#BCBCBC",
  d4x: "#ECECEC",
  d5x: "#F0F0F0",
  b1: "#3899EC",
  b2: "#4EB7F5",
  b3: "#7FCCF7",
  b4: "#D3EDFF",
  b5: "#EAF7FF",
  b1x: "#BCBCBC",
  b2x: "#C8C8C8",
  b3x: "#D5D5D5",
  b4x: "#E2E2E2",
  b5x: "#F0F0F0",
  e1: "#2B81CB",
  e2: "#0D487F",
  e3: "rgba(255, 255, 255, 96)",
  e4: "#2D4150",
  e5: "#B1DDF8",
  e6: "#B6C1CD",
  e7: "#5EFFFF",
  e8: "#18D2DE",
  e9: "#0A6363",
  e10: "#42C5BF",
  e11: "#D0427D",
  e12: "#C3504D",
  e13: "#942B28",
  e14: "#F7FBFF",
  e15: "#2B6B9E",
  e16: "#BF5727",
  g1: "#60BC57"
};


},{}],"wixStyles":[function(require,module,exports){
module.exports = {
  t01: {
    fontFamily: "HelveticaNeueW01-45Ligh,HelveticaNeueW02-45Ligh,HelveticaNeueW10-45Ligh,sans-serif",
    fontSize: "16px",
    color: "#162D3D",
    lineHeight: "24px",
    textTransform: "none",
    textRendering: "geometricPrecision"
  },
  t02: {
    fontFamily: "HelveticaNeueW01-45Ligh,HelveticaNeueW02-45Ligh,HelveticaNeueW10-45Ligh,sans-serif",
    fontSize: "14px",
    color: "#162D3D",
    lineHeight: "18px",
    textTransform: "none",
    textRendering: "geometricPrecision"
  },
  t03: {
    fontFamily: "HelveticaNeueW01-55Roman,HelveticaNeueW02-55Roman,HelveticaNeueW10-55Roman,sans-serif",
    fontSize: "18px",
    color: "#162D3D",
    lineHeight: "24px",
    textTransform: "none",
    textRendering: "geometricPrecision"
  },
  t04: {
    fontFamily: "HelveticaNeueW01-55Roman,HelveticaNeueW02-55Roman,HelveticaNeueW10-55Roman,sans-serif",
    fontSize: "12px",
    color: "#162D3D",
    lineHeight: "18px",
    textTransform: "none",
    textRendering: "geometricPrecision"
  },
  t05: {
    fontFamily: "HelveticaNeueW01-45Ligh,HelveticaNeueW02-45Ligh,HelveticaNeueW10-45Ligh,sans-serif",
    fontSize: "16px",
    color: "#162D3D",
    lineHeight: "18px",
    textTransform: "none",
    textRendering: "geometricPrecision"
  },
  t06: {
    fontFamily: "HelveticaNeueW01-55Roman,HelveticaNeueW02-55Roman,HelveticaNeueW10-55Roman,sans-serif",
    fontSize: "16px",
    color: "#162D3D",
    lineHeight: "24px",
    textTransform: "none",
    textRendering: "geometricPrecision"
  },
  t07: {
    fontFamily: "HelveticaNeueW01-55Roman,HelveticaNeueW02-55Roman,HelveticaNeueW10-55Roman,sans-serif",
    fontSize: "14px",
    color: "#162D3D",
    lineHeight: "18px",
    textTransform: "none",
    textRendering: "geometricPrecision"
  },
  t08: {
    fontFamily: "HelveticaNeueW01-55Roman,HelveticaNeueW02-55Roman,HelveticaNeueW10-55Roman,sans-serif",
    fontSize: "20px",
    color: "#162D3D",
    lineHeight: "24px",
    textTransform: "none",
    textRendering: "geometricPrecision"
  },
  t09: {
    fontFamily: "HelveticaNeueW01-65Romann,HelveticaNeueW02-65Romann,HelveticaNeueW10-65Romann,sans-serif",
    fontSize: "18px",
    color: "#162D3D",
    lineHeight: "24px",
    textTransform: "none",
    textRendering: "geometricPrecision"
  },
  t10: {
    fontFamily: "HelveticaNeueW01-45Ligh,HelveticaNeueW02-45Ligh,HelveticaNeueW10-45Ligh,sans-serif",
    fontSize: "13px",
    color: "#162D3D",
    lineHeight: "24px",
    textTransform: "none",
    textRendering: "geometricPrecision"
  },
  t11: {
    fontFamily: "HelveticaNeueW01-45Ligh,HelveticaNeueW02-45Ligh,HelveticaNeueW10-45Ligh,sans-serif",
    fontSize: "18px",
    color: "#162D3D",
    lineHeight: "24px",
    textTransform: "none",
    textRendering: "geometricPrecision"
  },
  t12: {
    fontFamily: "HelveticaNeueW01-45Ligh,HelveticaNeueW02-45Ligh,HelveticaNeueW10-45Ligh,sans-serif",
    fontSize: "12px",
    color: "#162D3D",
    lineHeight: "14px",
    textTransform: "none",
    textRendering: "geometricPrecision"
  },
  t13: {
    fontFamily: "HelveticaNeueW01-45Ligh,HelveticaNeueW02-45Ligh,HelveticaNeueW10-45Ligh,sans-serif",
    fontSize: "30px",
    color: "#162D3D",
    lineHeight: "36px",
    textTransform: "none",
    textRendering: "geometricPrecision"
  },
  t14: {
    fontFamily: "HelveticaNeueW01-45Ligh,HelveticaNeueW02-45Ligh,HelveticaNeueW10-45Ligh,sans-serif",
    fontSize: "12px",
    color: "#162D3D",
    lineHeight: "24px",
    textTransform: "none",
    textRendering: "geometricPrecision"
  },
  t15: {
    fontFamily: "HelveticaNeueW01-45Ligh,HelveticaNeueW02-45Ligh,HelveticaNeueW10-45Ligh,sans-serif",
    fontSize: "12px",
    color: "#162D3D",
    lineHeight: "18px",
    textTransform: "none",
    textRendering: "geometricPrecision"
  },
  t16: {
    fontFamily: "HelveticaNeueW01-55Roman,HelveticaNeueW02-55Roman,HelveticaNeueW10-55Roman,sans-serif",
    fontSize: "26px",
    color: "#162D3D",
    lineHeight: "36px",
    textTransform: "none",
    textRendering: "geometricPrecision"
  },
  t17: {
    fontFamily: "HelveticaNeueW01-55Roman,HelveticaNeueW02-55Roman,HelveticaNeueW10-55Roman,sans-serif",
    fontSize: "13px",
    color: "#162D3D",
    lineHeight: "24px",
    textTransform: "none",
    textRendering: "geometricPrecision"
  },
  t18: {
    fontFamily: "HelveticaNeueW01-55Roman,HelveticaNeueW02-55Roman,HelveticaNeueW10-55Roman,sans-serif",
    fontSize: "10px",
    color: "#162D3D",
    lineHeight: "24px",
    textTransform: "none",
    textRendering: "geometricPrecision"
  },
  t19: {
    fontFamily: "HelveticaNeueW01-65Romann,HelveticaNeueW02-65Romann,HelveticaNeueW10-65Romann,sans-serif",
    fontSize: "18px",
    color: "#162D3D",
    lineHeight: "24px",
    textTransform: "none",
    textRendering: "geometricPrecision"
  },
  t20: {
    fontFamily: "HelveticaNeueW01-65Romann,HelveticaNeueW02-65Romann,HelveticaNeueW10-65Romann,sans-serif",
    fontSize: "16px",
    color: "#162D3D",
    lineHeight: "24px",
    textTransform: "none",
    textRendering: "geometricPrecision"
  },
  t21: {
    fontFamily: "HelveticaNeueW01-55Roman,HelveticaNeueW02-55Roman,HelveticaNeueW10-55Roman,sans-serif",
    fontSize: "13px",
    color: "#162D3D",
    lineHeight: "18px",
    textTransform: "none",
    textRendering: "geometricPrecision"
  }
};


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3VkaWcvRG9jdW1lbnRzL0dpdEh1Yi9iYXNlVUkvbmV3UHJvamVjdC5mcmFtZXIvbW9kdWxlcy93aXhTdHlsZXMuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvdWRpZy9Eb2N1bWVudHMvR2l0SHViL2Jhc2VVSS9uZXdQcm9qZWN0LmZyYW1lci9tb2R1bGVzL3dpeENvbG9ycy5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy91ZGlnL0RvY3VtZW50cy9HaXRIdWIvYmFzZVVJL25ld1Byb2plY3QuZnJhbWVyL21vZHVsZXMvdG9wYmFyLmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3VkaWcvRG9jdW1lbnRzL0dpdEh1Yi9iYXNlVUkvbmV3UHJvamVjdC5mcmFtZXIvbW9kdWxlcy9yYWRpb0J0bnMuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvdWRpZy9Eb2N1bWVudHMvR2l0SHViL2Jhc2VVSS9uZXdQcm9qZWN0LmZyYW1lci9tb2R1bGVzL3BhbmVsQm9keS5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy91ZGlnL0RvY3VtZW50cy9HaXRIdWIvYmFzZVVJL25ld1Byb2plY3QuZnJhbWVyL21vZHVsZXMvbXlNb2R1bGUuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvdWRpZy9Eb2N1bWVudHMvR2l0SHViL2Jhc2VVSS9uZXdQcm9qZWN0LmZyYW1lci9tb2R1bGVzL21hc3Rlci5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy91ZGlnL0RvY3VtZW50cy9HaXRIdWIvYmFzZVVJL25ld1Byb2plY3QuZnJhbWVyL21vZHVsZXMvbGVmdE1lbnUuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvdWRpZy9Eb2N1bWVudHMvR2l0SHViL2Jhc2VVSS9uZXdQcm9qZWN0LmZyYW1lci9tb2R1bGVzL2xlZnRNZW51QnRuLmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3VkaWcvRG9jdW1lbnRzL0dpdEh1Yi9iYXNlVUkvbmV3UHJvamVjdC5mcmFtZXIvbW9kdWxlcy9pbnB1dC5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy91ZGlnL0RvY3VtZW50cy9HaXRIdWIvYmFzZVVJL25ld1Byb2plY3QuZnJhbWVyL21vZHVsZXMvaW5wdXRDb21wLmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3VkaWcvRG9jdW1lbnRzL0dpdEh1Yi9iYXNlVUkvbmV3UHJvamVjdC5mcmFtZXIvbW9kdWxlcy9pY29ucy5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy91ZGlnL0RvY3VtZW50cy9HaXRIdWIvYmFzZVVJL25ld1Byb2plY3QuZnJhbWVyL21vZHVsZXMvZ2ZwcC5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy91ZGlnL0RvY3VtZW50cy9HaXRIdWIvYmFzZVVJL25ld1Byb2plY3QuZnJhbWVyL21vZHVsZXMvZ2ZwcEJ0bi5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy91ZGlnL0RvY3VtZW50cy9HaXRIdWIvYmFzZVVJL25ld1Byb2plY3QuZnJhbWVyL21vZHVsZXMvZHJvcERvd24uY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvdWRpZy9Eb2N1bWVudHMvR2l0SHViL2Jhc2VVSS9uZXdQcm9qZWN0LmZyYW1lci9tb2R1bGVzL2RhdGFzZXRJY29uLmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3VkaWcvRG9jdW1lbnRzL0dpdEh1Yi9iYXNlVUkvbmV3UHJvamVjdC5mcmFtZXIvbW9kdWxlcy9idXR0b25MaW5rLmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbm1vZHVsZS5leHBvcnRzID1cbiAgICB0MDE6XG4gICAgICAgIGZvbnRGYW1pbHk6XCJIZWx2ZXRpY2FOZXVlVzAxLTQ1TGlnaCxIZWx2ZXRpY2FOZXVlVzAyLTQ1TGlnaCxIZWx2ZXRpY2FOZXVlVzEwLTQ1TGlnaCxzYW5zLXNlcmlmXCJcbiAgICAgICAgZm9udFNpemU6XCIxNnB4XCJcbiAgICAgICAgY29sb3I6XCIjMTYyRDNEXCJcbiAgICAgICAgbGluZUhlaWdodDpcIjI0cHhcIlxuICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcIm5vbmVcIlxuICAgICAgICB0ZXh0UmVuZGVyaW5nOiBcImdlb21ldHJpY1ByZWNpc2lvblwiXG4gICAgdDAyOlxuICAgICAgICBmb250RmFtaWx5OlwiSGVsdmV0aWNhTmV1ZVcwMS00NUxpZ2gsSGVsdmV0aWNhTmV1ZVcwMi00NUxpZ2gsSGVsdmV0aWNhTmV1ZVcxMC00NUxpZ2gsc2Fucy1zZXJpZlwiXG4gICAgICAgIGZvbnRTaXplOlwiMTRweFwiXG4gICAgICAgIGNvbG9yOlwiIzE2MkQzRFwiXG4gICAgICAgIGxpbmVIZWlnaHQ6XCIxOHB4XCJcbiAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJub25lXCJcbiAgICAgICAgdGV4dFJlbmRlcmluZzogXCJnZW9tZXRyaWNQcmVjaXNpb25cIlxuICAgIHQwMzpcbiAgICAgICAgZm9udEZhbWlseTpcIkhlbHZldGljYU5ldWVXMDEtNTVSb21hbixIZWx2ZXRpY2FOZXVlVzAyLTU1Um9tYW4sSGVsdmV0aWNhTmV1ZVcxMC01NVJvbWFuLHNhbnMtc2VyaWZcIlxuICAgICAgICBmb250U2l6ZTpcIjE4cHhcIlxuICAgICAgICBjb2xvcjpcIiMxNjJEM0RcIlxuICAgICAgICBsaW5lSGVpZ2h0OlwiMjRweFwiXG4gICAgICAgIHRleHRUcmFuc2Zvcm06IFwibm9uZVwiXG4gICAgICAgIHRleHRSZW5kZXJpbmc6IFwiZ2VvbWV0cmljUHJlY2lzaW9uXCJcbiAgICB0MDQ6XG4gICAgICAgIGZvbnRGYW1pbHk6XCJIZWx2ZXRpY2FOZXVlVzAxLTU1Um9tYW4sSGVsdmV0aWNhTmV1ZVcwMi01NVJvbWFuLEhlbHZldGljYU5ldWVXMTAtNTVSb21hbixzYW5zLXNlcmlmXCJcbiAgICAgICAgZm9udFNpemU6XCIxMnB4XCJcbiAgICAgICAgY29sb3I6XCIjMTYyRDNEXCJcbiAgICAgICAgbGluZUhlaWdodDpcIjE4cHhcIlxuICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcIm5vbmVcIlxuICAgICAgICB0ZXh0UmVuZGVyaW5nOiBcImdlb21ldHJpY1ByZWNpc2lvblwiXG4gICAgdDA1OlxuICAgICAgICBmb250RmFtaWx5OlwiSGVsdmV0aWNhTmV1ZVcwMS00NUxpZ2gsSGVsdmV0aWNhTmV1ZVcwMi00NUxpZ2gsSGVsdmV0aWNhTmV1ZVcxMC00NUxpZ2gsc2Fucy1zZXJpZlwiXG4gICAgICAgIGZvbnRTaXplOlwiMTZweFwiXG4gICAgICAgIGNvbG9yOlwiIzE2MkQzRFwiXG4gICAgICAgIGxpbmVIZWlnaHQ6XCIxOHB4XCJcbiAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJub25lXCJcbiAgICAgICAgdGV4dFJlbmRlcmluZzogXCJnZW9tZXRyaWNQcmVjaXNpb25cIlxuICAgIHQwNjpcbiAgICAgICAgZm9udEZhbWlseTpcIkhlbHZldGljYU5ldWVXMDEtNTVSb21hbixIZWx2ZXRpY2FOZXVlVzAyLTU1Um9tYW4sSGVsdmV0aWNhTmV1ZVcxMC01NVJvbWFuLHNhbnMtc2VyaWZcIlxuICAgICAgICBmb250U2l6ZTpcIjE2cHhcIlxuICAgICAgICBjb2xvcjpcIiMxNjJEM0RcIlxuICAgICAgICBsaW5lSGVpZ2h0OlwiMjRweFwiXG4gICAgICAgIHRleHRUcmFuc2Zvcm06IFwibm9uZVwiXG4gICAgICAgIHRleHRSZW5kZXJpbmc6IFwiZ2VvbWV0cmljUHJlY2lzaW9uXCJcbiAgICB0MDc6XG4gICAgICAgIGZvbnRGYW1pbHk6XCJIZWx2ZXRpY2FOZXVlVzAxLTU1Um9tYW4sSGVsdmV0aWNhTmV1ZVcwMi01NVJvbWFuLEhlbHZldGljYU5ldWVXMTAtNTVSb21hbixzYW5zLXNlcmlmXCJcbiAgICAgICAgZm9udFNpemU6XCIxNHB4XCJcbiAgICAgICAgY29sb3I6XCIjMTYyRDNEXCJcbiAgICAgICAgbGluZUhlaWdodDpcIjE4cHhcIlxuICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcIm5vbmVcIlxuICAgICAgICB0ZXh0UmVuZGVyaW5nOiBcImdlb21ldHJpY1ByZWNpc2lvblwiXG4gICAgdDA4OlxuICAgICAgICBmb250RmFtaWx5OlwiSGVsdmV0aWNhTmV1ZVcwMS01NVJvbWFuLEhlbHZldGljYU5ldWVXMDItNTVSb21hbixIZWx2ZXRpY2FOZXVlVzEwLTU1Um9tYW4sc2Fucy1zZXJpZlwiXG4gICAgICAgIGZvbnRTaXplOlwiMjBweFwiXG4gICAgICAgIGNvbG9yOlwiIzE2MkQzRFwiXG4gICAgICAgIGxpbmVIZWlnaHQ6XCIyNHB4XCJcbiAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJub25lXCJcbiAgICAgICAgdGV4dFJlbmRlcmluZzogXCJnZW9tZXRyaWNQcmVjaXNpb25cIlxuICAgIHQwOTpcbiAgICAgICAgZm9udEZhbWlseTpcIkhlbHZldGljYU5ldWVXMDEtNjVSb21hbm4sSGVsdmV0aWNhTmV1ZVcwMi02NVJvbWFubixIZWx2ZXRpY2FOZXVlVzEwLTY1Um9tYW5uLHNhbnMtc2VyaWZcIlxuICAgICAgICBmb250U2l6ZTpcIjE4cHhcIlxuICAgICAgICBjb2xvcjpcIiMxNjJEM0RcIlxuICAgICAgICBsaW5lSGVpZ2h0OlwiMjRweFwiXG4gICAgICAgIHRleHRUcmFuc2Zvcm06IFwibm9uZVwiXG4gICAgICAgIHRleHRSZW5kZXJpbmc6IFwiZ2VvbWV0cmljUHJlY2lzaW9uXCJcbiAgICB0MTA6XG4gICAgICAgIGZvbnRGYW1pbHk6XCJIZWx2ZXRpY2FOZXVlVzAxLTQ1TGlnaCxIZWx2ZXRpY2FOZXVlVzAyLTQ1TGlnaCxIZWx2ZXRpY2FOZXVlVzEwLTQ1TGlnaCxzYW5zLXNlcmlmXCJcbiAgICAgICAgZm9udFNpemU6XCIxM3B4XCJcbiAgICAgICAgY29sb3I6XCIjMTYyRDNEXCJcbiAgICAgICAgbGluZUhlaWdodDpcIjI0cHhcIlxuICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcIm5vbmVcIlxuICAgICAgICB0ZXh0UmVuZGVyaW5nOiBcImdlb21ldHJpY1ByZWNpc2lvblwiXG4gICAgdDExOlxuICAgICAgICBmb250RmFtaWx5OlwiSGVsdmV0aWNhTmV1ZVcwMS00NUxpZ2gsSGVsdmV0aWNhTmV1ZVcwMi00NUxpZ2gsSGVsdmV0aWNhTmV1ZVcxMC00NUxpZ2gsc2Fucy1zZXJpZlwiXG4gICAgICAgIGZvbnRTaXplOlwiMThweFwiXG4gICAgICAgIGNvbG9yOlwiIzE2MkQzRFwiXG4gICAgICAgIGxpbmVIZWlnaHQ6XCIyNHB4XCJcbiAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJub25lXCJcbiAgICAgICAgdGV4dFJlbmRlcmluZzogXCJnZW9tZXRyaWNQcmVjaXNpb25cIlxuICAgIHQxMjpcbiAgICAgICAgZm9udEZhbWlseTpcIkhlbHZldGljYU5ldWVXMDEtNDVMaWdoLEhlbHZldGljYU5ldWVXMDItNDVMaWdoLEhlbHZldGljYU5ldWVXMTAtNDVMaWdoLHNhbnMtc2VyaWZcIlxuICAgICAgICBmb250U2l6ZTpcIjEycHhcIlxuICAgICAgICBjb2xvcjpcIiMxNjJEM0RcIlxuICAgICAgICBsaW5lSGVpZ2h0OlwiMTRweFwiXG4gICAgICAgIHRleHRUcmFuc2Zvcm06IFwibm9uZVwiXG4gICAgICAgIHRleHRSZW5kZXJpbmc6IFwiZ2VvbWV0cmljUHJlY2lzaW9uXCJcbiAgICB0MTM6XG4gICAgICAgIGZvbnRGYW1pbHk6XCJIZWx2ZXRpY2FOZXVlVzAxLTQ1TGlnaCxIZWx2ZXRpY2FOZXVlVzAyLTQ1TGlnaCxIZWx2ZXRpY2FOZXVlVzEwLTQ1TGlnaCxzYW5zLXNlcmlmXCJcbiAgICAgICAgZm9udFNpemU6XCIzMHB4XCJcbiAgICAgICAgY29sb3I6XCIjMTYyRDNEXCJcbiAgICAgICAgbGluZUhlaWdodDpcIjM2cHhcIlxuICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcIm5vbmVcIlxuICAgICAgICB0ZXh0UmVuZGVyaW5nOiBcImdlb21ldHJpY1ByZWNpc2lvblwiXG4gICAgdDE0OlxuICAgICAgICBmb250RmFtaWx5OlwiSGVsdmV0aWNhTmV1ZVcwMS00NUxpZ2gsSGVsdmV0aWNhTmV1ZVcwMi00NUxpZ2gsSGVsdmV0aWNhTmV1ZVcxMC00NUxpZ2gsc2Fucy1zZXJpZlwiXG4gICAgICAgIGZvbnRTaXplOlwiMTJweFwiXG4gICAgICAgIGNvbG9yOlwiIzE2MkQzRFwiXG4gICAgICAgIGxpbmVIZWlnaHQ6XCIyNHB4XCJcbiAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJub25lXCJcbiAgICAgICAgdGV4dFJlbmRlcmluZzogXCJnZW9tZXRyaWNQcmVjaXNpb25cIlxuICAgIHQxNTpcbiAgICAgICAgZm9udEZhbWlseTpcIkhlbHZldGljYU5ldWVXMDEtNDVMaWdoLEhlbHZldGljYU5ldWVXMDItNDVMaWdoLEhlbHZldGljYU5ldWVXMTAtNDVMaWdoLHNhbnMtc2VyaWZcIlxuICAgICAgICBmb250U2l6ZTpcIjEycHhcIlxuICAgICAgICBjb2xvcjpcIiMxNjJEM0RcIlxuICAgICAgICBsaW5lSGVpZ2h0OlwiMThweFwiXG4gICAgICAgIHRleHRUcmFuc2Zvcm06IFwibm9uZVwiXG4gICAgICAgIHRleHRSZW5kZXJpbmc6IFwiZ2VvbWV0cmljUHJlY2lzaW9uXCJcbiAgICB0MTY6XG4gICAgICAgIGZvbnRGYW1pbHk6XCJIZWx2ZXRpY2FOZXVlVzAxLTU1Um9tYW4sSGVsdmV0aWNhTmV1ZVcwMi01NVJvbWFuLEhlbHZldGljYU5ldWVXMTAtNTVSb21hbixzYW5zLXNlcmlmXCJcbiAgICAgICAgZm9udFNpemU6XCIyNnB4XCJcbiAgICAgICAgY29sb3I6XCIjMTYyRDNEXCJcbiAgICAgICAgbGluZUhlaWdodDpcIjM2cHhcIlxuICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcIm5vbmVcIlxuICAgICAgICB0ZXh0UmVuZGVyaW5nOiBcImdlb21ldHJpY1ByZWNpc2lvblwiXG4gICAgdDE3OlxuICAgICAgICBmb250RmFtaWx5OlwiSGVsdmV0aWNhTmV1ZVcwMS01NVJvbWFuLEhlbHZldGljYU5ldWVXMDItNTVSb21hbixIZWx2ZXRpY2FOZXVlVzEwLTU1Um9tYW4sc2Fucy1zZXJpZlwiXG4gICAgICAgIGZvbnRTaXplOlwiMTNweFwiXG4gICAgICAgIGNvbG9yOlwiIzE2MkQzRFwiXG4gICAgICAgIGxpbmVIZWlnaHQ6XCIyNHB4XCJcbiAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJub25lXCJcbiAgICAgICAgdGV4dFJlbmRlcmluZzogXCJnZW9tZXRyaWNQcmVjaXNpb25cIlxuICAgIHQxODpcbiAgICAgICAgZm9udEZhbWlseTpcIkhlbHZldGljYU5ldWVXMDEtNTVSb21hbixIZWx2ZXRpY2FOZXVlVzAyLTU1Um9tYW4sSGVsdmV0aWNhTmV1ZVcxMC01NVJvbWFuLHNhbnMtc2VyaWZcIlxuICAgICAgICBmb250U2l6ZTpcIjEwcHhcIlxuICAgICAgICBjb2xvcjpcIiMxNjJEM0RcIlxuICAgICAgICBsaW5lSGVpZ2h0OlwiMjRweFwiXG4gICAgICAgIHRleHRUcmFuc2Zvcm06IFwibm9uZVwiXG4gICAgICAgIHRleHRSZW5kZXJpbmc6IFwiZ2VvbWV0cmljUHJlY2lzaW9uXCJcbiAgICB0MTk6XG4gICAgICAgIGZvbnRGYW1pbHk6XCJIZWx2ZXRpY2FOZXVlVzAxLTY1Um9tYW5uLEhlbHZldGljYU5ldWVXMDItNjVSb21hbm4sSGVsdmV0aWNhTmV1ZVcxMC02NVJvbWFubixzYW5zLXNlcmlmXCJcbiAgICAgICAgZm9udFNpemU6XCIxOHB4XCJcbiAgICAgICAgY29sb3I6XCIjMTYyRDNEXCJcbiAgICAgICAgbGluZUhlaWdodDpcIjI0cHhcIlxuICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcIm5vbmVcIlxuICAgICAgICB0ZXh0UmVuZGVyaW5nOiBcImdlb21ldHJpY1ByZWNpc2lvblwiXG4gICAgdDIwOlxuICAgICAgICBmb250RmFtaWx5OlwiSGVsdmV0aWNhTmV1ZVcwMS02NVJvbWFubixIZWx2ZXRpY2FOZXVlVzAyLTY1Um9tYW5uLEhlbHZldGljYU5ldWVXMTAtNjVSb21hbm4sc2Fucy1zZXJpZlwiXG4gICAgICAgIGZvbnRTaXplOlwiMTZweFwiXG4gICAgICAgIGNvbG9yOlwiIzE2MkQzRFwiXG4gICAgICAgIGxpbmVIZWlnaHQ6XCIyNHB4XCJcbiAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJub25lXCJcbiAgICAgICAgdGV4dFJlbmRlcmluZzogXCJnZW9tZXRyaWNQcmVjaXNpb25cIlxuICAgIHQyMTpcbiAgICAgICAgZm9udEZhbWlseTpcIkhlbHZldGljYU5ldWVXMDEtNTVSb21hbixIZWx2ZXRpY2FOZXVlVzAyLTU1Um9tYW4sSGVsdmV0aWNhTmV1ZVcxMC01NVJvbWFuLHNhbnMtc2VyaWZcIlxuICAgICAgICBmb250U2l6ZTpcIjEzcHhcIlxuICAgICAgICBjb2xvcjpcIiMxNjJEM0RcIlxuICAgICAgICBsaW5lSGVpZ2h0OlwiMThweFwiXG4gICAgICAgIHRleHRUcmFuc2Zvcm06IFwibm9uZVwiXG4gICAgICAgIHRleHRSZW5kZXJpbmc6IFwiZ2VvbWV0cmljUHJlY2lzaW9uXCIiLCJtb2R1bGUuZXhwb3J0cyA9XG4gZDE6XCIjMTYyRDNEXCJcbiBkMjpcIiMyQjU2NzJcIlxuIGQzOlwiIzdBOTJBNVwiXG4gZDQ6XCIjRDlFMUU4XCJcbiBkNTpcIiNGMEYzRjVcIlxuIGQ2OlwiI0ZGRkZGRlwiXG4gZDF4OlwiIzdBN0E3QVwiXG4gZDJ4OlwiIzkzOTM5M1wiXG4gZDN4OlwiI0JDQkNCQ1wiXG4gZDR4OlwiI0VDRUNFQ1wiXG4gZDV4OlwiI0YwRjBGMFwiXG4gYjE6XCIjMzg5OUVDXCJcbiBiMjpcIiM0RUI3RjVcIlxuIGIzOlwiIzdGQ0NGN1wiXG4gYjQ6XCIjRDNFREZGXCJcbiBiNTpcIiNFQUY3RkZcIlxuIGIxeDpcIiNCQ0JDQkNcIlxuIGIyeDpcIiNDOEM4QzhcIlxuIGIzeDpcIiNENUQ1RDVcIlxuIGI0eDpcIiNFMkUyRTJcIlxuIGI1eDpcIiNGMEYwRjBcIlxuIGUxOlwiIzJCODFDQlwiXG4gZTI6XCIjMEQ0ODdGXCJcbiBlMzpcInJnYmEoMjU1LCAyNTUsIDI1NSwgOTYpXCJcbiBlNDpcIiMyRDQxNTBcIlxuIGU1OlwiI0IxRERGOFwiXG4gZTY6XCIjQjZDMUNEXCJcbiBlNzpcIiM1RUZGRkZcIlxuIGU4OlwiIzE4RDJERVwiXG4gZTk6XCIjMEE2MzYzXCJcbiBlMTA6XCIjNDJDNUJGXCJcbiBlMTE6XCIjRDA0MjdEXCJcbiBlMTI6XCIjQzM1MDREXCJcbiBlMTM6XCIjOTQyQjI4XCJcbiBlMTQ6XCIjRjdGQkZGXCJcbiBlMTU6XCIjMkI2QjlFXCJcbiBlMTY6XCIjQkY1NzI3XCJcbiBnMTpcIiM2MEJDNTdcIiIsImNsYXNzIGV4cG9ydHMudG9wYmFyIGV4dGVuZHMgTGF5ZXJcbiAgICBFdmVudHMuZHJhZ0VuZCA9IFwiZHJhZ0VuZFwiXG4gICAgY29uc3RydWN0b3I6IChAb3B0aW9ucz17fSkgLT5cblx0XHQgXHRcdFx0XHRcdFx0XHRcdFxuICAgICAgICAgICAgQG9wdGlvbnMuaGVpZ2h0ID89NDhcblxuICAgICAgICAgICAgc3VwZXIgQG9wdGlvbnNcblxuICAgICAgICAgICAgc3R5bGVzPSByZXF1aXJlIFwid2l4U3R5bGVzXCJcbiAgICAgICAgICAgIGNvbG9ycz0gcmVxdWlyZSBcIndpeENvbG9yc1wiXG4gICAgICAgICAgICBALmhlaWdodCA9IDQ4XG4gICAgICAgICAgICBALmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIlxuICAgICAgICAgICAgQC5zdHlsZSA9IFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOlwicmVsYXRpdmVcIlxuICAgICAgICAgICAgICAgIHdpZHRoOlwiMTAwJVwiXG4gICAgICAgICAgICAgICAgYm94U2hhZG93OiBcIjAgMCAxNXB4IDAgcmdiYSgyMiwgNDUsIDYxLCAwLjUpXCJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OlwiZmxleFwiXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGVmdFNlY3Rpb24gPSBuZXcgTGF5ZXJcbiAgICAgICAgICAgICAgICBwYXJlbnQ6dGhpc1xuICAgICAgICAgICAgICAgIHN0eWxlOlxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjpcInJlbGF0aXZlXCJcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgd2l4QnRuID0gbmV3IExheWVyXG4gICAgICAgICAgICAgICAgcGFyZW50OmxlZnRTZWN0aW9uXG4gICAgICAgICAgICAgICAgd2lkdGg6NzVcbiAgICAgICAgICAgICAgICBoZWlnaHQ6NDhcbiAgICAgICAgICAgICAgICBzdHlsZTpcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmlnaHQ6IFwiMXB4ICNlYWY3ZmYgc29saWRcIlxuICAgICAgICAgICAgd2l4TG9nbyA9IG5ldyBTVkdMYXllclxuICAgICAgICAgICAgICAgIHg6MTBcbiAgICAgICAgICAgICAgICB5OjEyXG4gICAgICAgICAgICAgICAgcGFyZW50OndpeEJ0blxuICAgICAgICAgICAgICAgIHN2ZzonPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCI1MFwiIGhlaWdodD1cIjE5XCI+PHBhdGggZmlsbD1cIiMwMDBcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0yOS41Ni4zNDdDMzAuNDMzLS4wMzUgMzIgLjAwMSAzMiAuMDAxYzAgMS4yNzItLjE0OCAyLjAyOC0xLjEwOSAyLjYxNS0uMzA4LjE4Ny0uODM5LjQ3NC0xLjQ2Mi42NjJBNC42MjggNC42MjggMCAwIDAgMjggNGMwLTIuMzE3LjQyMy0zLjE1NiAxLjU2LTMuNjUzem0tNS40OTIuODEyQzI1LjQ1Ni4wNDUgMjcuNTM2LjI4MyAyNy41MzYuMjgzbC01LjQyNCAxOC42N3MtMS43OS4xMTctMi42ODUtLjI5OWMtMS4xNzYtLjU0NS0xLjczNi0uOTY2LTIuNDQ4LTMuNTA2LS42MzQtMi4yNjUtMi40MTEtOC45MTYtMi41NzQtOS4zOS0uMDgtLjIzNS0uMTc1LS43OTQtLjYzNy0uNzk0LS40NTEgMC0uNTU1LjU2LS42MzcuNzk0LS4xNjYuNDczLTEuOTQgNy4xMjUtMi41NzQgOS4zOS0uNzEyIDIuNTQtMS4yNzIgMi45Ni0yLjQ0OCAzLjUwNi0uODk1LjQxNi0yLjY4NS4yOTktMi42ODUuMjk5TDAgLjI4M3MyLjA4LS4yMzggMy40NjguODc2Yy44NTUuNjg2IDEuMTA1IDEuNzggMS4xMDUgMS43OGwyLjgzMyA5Ljk5TDkuNzYgNC43NTNjLjIzLS44Ny42NDQtMS45NDQgMS4yOTgtMi42Ny44MzQtLjkyNiAyLjUyOS0uOTg0IDIuNzA5LS45ODQuMTggMCAxLjg3NS4wNTggMi43MDkuOTg0LjY1NS43MjYgMS4wNjggMS44IDEuMjk4IDIuNjdsMi4zNTYgOC4xNzYgMi44MzItOS45OXMuMjUtMS4wOTQgMS4xMDUtMS43OHpNMzEuOTk4IDR2LjY0OEgzMnYxMC44NDVjLS4wMTEgMi4yMjUtLjI5OCAyLjcyLTEuNTQ3IDMuMjMyLS45Ny4zOTgtMi40NTMuMjQ3LTIuNDUzLjI0N1Y2LjgyNmMwLS42MS4yNTItMS4wMSAxLjE4Mi0xLjM3LjU1NC0uMjE0IDEuMDctLjM3OCAxLjYxLS42MkMzMS42MyA0LjQ1NiAzMS45OTggNCAzMS45OTggNHptMTIuMTIzIDYuMDMxbDUuODYzIDguOTI0cy0yLjUzOS4zMzQtMy43NjctLjgxMWMtLjc4Ny0uNzMzLTEuNTkyLTEuOTI0LTEuNTkyLTEuOTI0bC0yLjE2My0zLjE5MmMtLjEwNS0uMTY2LS4yNDMtLjM0Ni0uNDYyLS4zNDYtLjIyIDAtLjM1Ny4xOC0uNDYyLjM0NmwtMi4xNjMgMy4xOTJzLS43NjEgMS4xOTEtMS41NDcgMS45MjRjLTEuMjI5IDEuMTQ1LTMuODEzLjgxLTMuODEzLjgxbDUuODY0LTguOTIzTDM0IDEuMDgxczIuNDgxLS40MzQgMy43MS43MTFjLjc4Ni43MzMgMS42NjUgMi4wNSAxLjY2NSAyLjA1bDIuMTYzIDMuMTkyYy4xMDUuMTY2LjI0My4zNDcuNDYyLjM0Ny4yMiAwIC4zNTctLjE4LjQ2Mi0uMzQ3bDIuMTYzLTMuMTkycy44NzktMS4zMTcgMS42NjUtMi4wNUM0Ny41Mi42NDcgNTAgMS4wOCA1MCAxLjA4bC01Ljg4IDguOTUxelwiLz48L3N2Zz4nXG5cbiAgICAgICAgICAgIHBhZ2VzTmF2ID0gbmV3IExheWVyXG4gICAgICAgICAgICAgICAgcGFyZW50OmxlZnRTZWN0aW9uXG4gICAgICAgICAgICAgICAgeDogNzVcbiAgICAgICAgICAgICAgICB3aWR0aDogMjIyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0OFxuICAgICAgICAgICAgICAgIHN0eWxlOlxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSaWdodDogXCIxcHggI2VhZjdmZiBzb2xpZFwiXG5cbiAgICAgICAgICAgIHBhZ2VOYW1lID0gbmV3IFRleHRMYXllclxuICAgICAgICAgICAgICAgIHBhcmVudDogcGFnZXNOYXZcbiAgICAgICAgICAgICAgICB4OiA3MVxuICAgICAgICAgICAgICAgIHk6IDE1XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwOVxuICAgICAgICAgICAgICAgIHRleHQ6IFwiSG9tZVwiXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDE0XG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZSBXMDEgNTUgUm9tYW5cIlxuICAgICAgICAgICAgICAgIGxldHRlclNwYWNpbmc6IDAuMFxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDEuMjg1NzE0Mjg1NzE0Mjg1OFxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCJcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJyZ2JhKDU2LDE1MywyMzYsMSlcIlxuXG4gICAgICAgICAgICBwYWdlcyA9IG5ldyBUZXh0TGF5ZXJcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IHBhZ2VzTmF2XG4gICAgICAgICAgICAgICAgeDogMjRcbiAgICAgICAgICAgICAgICB5OiAxNVxuICAgICAgICAgICAgICAgIHRleHQ6IFwiUGFnZXM6XCJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogMTRcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIkhlbHZldGljYSBOZXVlIFcwMSA1NSBSb21hblwiXG4gICAgICAgICAgICAgICAgbGluZUhlaWdodDogMS4yODU3MTQyODU3MTQyODU4XG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImxlZnRcIlxuICAgICAgICAgICAgICAgIGNvbG9yOiBcInJnYmEoMjIsNDUsNjEsMSlcIlxuXG4gICAgICAgICAgICBjb21iaW5lZFNoYXBlID0gbmV3IFNWR0xheWVyXG4gICAgICAgICAgICAgICAgcGFyZW50OiBwYWdlc05hdlxuICAgICAgICAgICAgICAgIHg6IDE4OFxuICAgICAgICAgICAgICAgIHk6IDIwXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1LjVcbiAgICAgICAgICAgICAgICBzdmc6JzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCI2XCI+PHBhdGggZmlsbD1cIiMzODk5RUNcIiBmaWxsLXJ1bGU9XCJub256ZXJvXCIgZD1cIk01IDMuODUxTDguOTA4LjE3NWEuNjI3LjYyNyAwIDAgMSAuOTMuMDY3Ljc0NS43NDUgMCAwIDEtLjA2My45OTlMNS40NDEgNS4zMThhLjYyNS42MjUgMCAwIDEtLjg4MiAwTC4yMjUgMS4yNDFhLjc0NS43NDUgMCAwIDEtLjA2Mi0xIC42MjcuNjI3IDAgMCAxIC45My0uMDY2TDUgMy44NTF6XCIvPjwvc3ZnPidcblxuICAgICAgICAgICAgbWVudSA9IG5ldyBMYXllclxuICAgICAgICAgICAgICAgIHBhcmVudDpsZWZ0U2VjdGlvblxuICAgICAgICAgICAgICAgIHg6IDI5NlxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMyNVxuICAgICAgICAgICAgICAgIGhlaWdodDogNDhcblxuICAgICAgICAgICAgdG9wYmFyTWVudUl0ZW1EZWZhdWx0ID0gbmV3IExheWVyXG4gICAgICAgICAgICAgICAgcGFyZW50OiBtZW51XG4gICAgICAgICAgICAgICAgeDogMFxuICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICAgICAgICAgICAgICAgIHdpZHRoOiA3OVxuICAgICAgICAgICAgICAgIGhlaWdodDogNDhcbiAgICAgICAgICAgIFNpdGUgPSBuZXcgVGV4dExheWVyXG4gICAgICAgICAgICAgICAgcGFyZW50OiB0b3BiYXJNZW51SXRlbURlZmF1bHRcbiAgICAgICAgICAgICAgICB4OiAzNlxuICAgICAgICAgICAgICAgIHk6IDE1XG4gICAgICAgICAgICAgICAgdGV4dDogXCJTaXRlXCJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogMTRcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIkhlbHZldGljYSBOZXVlIFcwMSA1NSBSb21hblwiXG4gICAgICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogMC4wXG4gICAgICAgICAgICAgICAgbGluZUhlaWdodDogMS4yODU3MTQyODU3MTQyODU4XG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImxlZnRcIlxuICAgICAgICAgICAgICAgIGNvbG9yOiBcInJnYmEoMjIsNDUsNjEsMSlcIlxuXG4gICAgICAgICAgICB0b3BiYXJNZW51SXRlbURlZmF1bHRfMiA9IG5ldyBMYXllclxuICAgICAgICAgICAgICAgIHBhcmVudDogbWVudVxuICAgICAgICAgICAgICAgIHg6IDc5XG4gICAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgICAgd2lkdGg6IDcxXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0OFxuXG4gICAgICAgICAgICB0b29scyA9IG5ldyBUZXh0TGF5ZXJcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IHRvcGJhck1lbnVJdGVtRGVmYXVsdF8yXG4gICAgICAgICAgICAgICAgeDogMThcbiAgICAgICAgICAgICAgICB5OiAxNVxuICAgICAgICAgICAgICAgIHdpZHRoOiA0My4xMzk1MzQ4ODM3MjA5M1xuICAgICAgICAgICAgICAgIHRleHQ6IFwiVG9vbHNcIlxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNFxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWUgVzAxIDU1IFJvbWFuXCJcbiAgICAgICAgICAgICAgICBsZXR0ZXJTcGFjaW5nOiAwLjBcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAxLjI4NTcxNDI4NTcxNDI4NThcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiXG4gICAgICAgICAgICAgICAgY29sb3I6IFwicmdiYSgyMiw0NSw2MSwxKVwiXG5cbiAgICAgICAgICAgIHRvcGJhck1lbnVJdGVtRGVmYXVsdF8zID0gbmV3IExheWVyXG4gICAgICAgICAgICAgICAgcGFyZW50OiBtZW51XG4gICAgICAgICAgICAgICAgeDogMTUwXG4gICAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgICAgd2lkdGg6IDY2XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0OFxuXG5cbiAgICAgICAgICAgIGhlbHAgPSBuZXcgVGV4dExheWVyXG4gICAgICAgICAgICAgICAgcGFyZW50OiB0b3BiYXJNZW51SXRlbURlZmF1bHRfM1xuICAgICAgICAgICAgICAgIHg6IDE4XG4gICAgICAgICAgICAgICAgeTogMTVcbiAgICAgICAgICAgICAgICB3aWR0aDogMzMuNDg4MzcyMDkzMDIzMjZcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkhlbHBcIlxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNFxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWUgVzAxIDU1IFJvbWFuXCJcbiAgICAgICAgICAgICAgICBsZXR0ZXJTcGFjaW5nOiAwLjBcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAxLjI4NTcxNDI4NTcxNDI4NThcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiXG4gICAgICAgICAgICAgICAgY29sb3I6IFwicmdiYSgyMiw0NSw2MSwxKVwiXG5cbiAgICAgICAgICAgIHRvcGJhck1lbnVJdGVtRGVmYXVsdF80ID0gbmV3IExheWVyXG4gICAgICAgICAgICAgICAgcGFyZW50OiBtZW51XG4gICAgICAgICAgICAgICAgeDogMjE2XG4gICAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwOVxuICAgICAgICAgICAgICAgIGhlaWdodDogNDhcblxuXG5cbiAgICAgICAgICAgIHVwZ3JhZGUgPSBuZXcgVGV4dExheWVyXG4gICAgICAgICAgICAgICAgcGFyZW50OiB0b3BiYXJNZW51SXRlbURlZmF1bHRfNFxuICAgICAgICAgICAgICAgIHg6IDE4XG4gICAgICAgICAgICAgICAgeTogMTVcbiAgICAgICAgICAgICAgICB3aWR0aDogODIuMDQ5MTgwMzI3ODY4ODVcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlVwZ3JhZGVcIlxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNFxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWUgVzAxIDU1IFJvbWFuXCJcbiAgICAgICAgICAgICAgICBsZXR0ZXJTcGFjaW5nOiAwLjBcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAxLjI4NTcxNDI4NTcxNDI4NThcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiXG4gICAgICAgICAgICAgICAgY29sb3I6IFwicmdiYSgyMiw0NSw2MSwxKVwiXG5cbiAgICAgICAgICAgIHJpZ2h0U2lkZSA9IG5ldyBMYXllclxuICAgICAgICAgICAgICAgIHBhcmVudDp0aGlzXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTIzXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0OFxuICAgICAgICAgICAgICAgIHN0eWxlOlxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjpcInJlbGF0aXZlXCJcblxuXG4gICAgICAgICAgICB0b3BiYXJJY29uc1JlZG8gPSBuZXcgTGF5ZXJcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IHJpZ2h0U2lkZVxuICAgICAgICAgICAgICAgIHg6IDk4XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDhcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ4XG4gICAgICAgICAgICAgICAgc3R5bGU6XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckxlZnQ6IFwiMXB4ICNlYWY3ZmYgc29saWRcIlxuXG4gICAgICAgICAgICByZWRvSWNvbiA9IG5ldyBTVkdMYXllclxuICAgICAgICAgICAgICAgIHBhcmVudDogdG9wYmFySWNvbnNSZWRvXG4gICAgICAgICAgICAgICAgeDogMTdcbiAgICAgICAgICAgICAgICB5OiAxNlxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMy4yMTE2MjM3NzIwMDkzNFxuICAgICAgICAgICAgICAgIGhlaWdodDogMTZcbiAgICAgICAgICAgICAgICBzdmc6JzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTRcIiBoZWlnaHQ9XCIxNlwiPjxwYXRoIGZpbGw9XCIjMTYyRDNEXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTAuMDc3IDBMOS4yNi41MDdsMi4yNzMgMy42NjQtMi40MjctLjU2NGMtMS45MTYtLjQ0My0zLjg5NC0uMTU3LTUuNTcuODE2LTEuNzA2Ljk5LTIuODkgMi41NzgtMy4zMyA0LjQ3LS42NCAyLjc1My4yMiA1LjQxIDIuMjk5IDcuMTA3bC42MDgtLjc0NUMxLjMyNiAxMy43OTYuNTg5IDExLjQ5OSAxLjE0NCA5LjExYy43NzUtMy4zMzEgNC4yNS01LjM4NCA3Ljc0NS00LjU2NmwyLjQyNi41NjNMNy42NiA3LjM5NGwuNTA4LjgxNCA1LjA0NC0zLjE1M0wxMC4wNzcgMHpcIi8+PC9zdmc+J1xuXG4gICAgICAgICAgICB0b3BiYXJJY29uc1VuZG8gPSBuZXcgTGF5ZXJcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IHJpZ2h0U2lkZVxuICAgICAgICAgICAgICAgIHg6IDQ5XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDhcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ4XG4gICAgICAgICAgICAgICAgc3R5bGU6XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckxlZnQ6IFwiMXB4ICNlYWY3ZmYgc29saWRcIlxuXG5cbiAgICAgICAgICAgIHVuZG9JY29uID0gbmV3IFNWR0xheWVyXG4gICAgICAgICAgICAgICAgcGFyZW50OiB0b3BiYXJJY29uc1VuZG9cbiAgICAgICAgICAgICAgICB4OiAxN1xuICAgICAgICAgICAgICAgIHk6IDE2XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEzLjIxMTczNTEyNTE3NzI0XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNlxuICAgICAgICAgICAgICAgIHN2ZzonPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNFwiIGhlaWdodD1cIjE2XCI+PHBhdGggZmlsbD1cIiMxNjJEM0RcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xMy4wMDQgOC44OTNjLS44OTYtMy44NDgtNC44OTEtNi4yMTgtOC44OTktNS4yODVsLTIuNDI2LjU2M0wzLjk1Mi41MDcgMy4xMzUgMCAwIDUuMDU1bDUuMDQ0IDMuMTUzLjUwOS0uODE0LTMuNjU1LTIuMjg2IDIuNDI0LS41NjRjMy40OTQtLjgxNSA2Ljk3MiAxLjIzNiA3Ljc0NSA0LjU2Ny41NTYgMi4zODgtLjE4MSA0LjY4NS0xLjk2OSA2LjE0NGwuNjA4Ljc0NWMyLjA3OS0xLjY5NyAyLjkzOC00LjM1MyAyLjI5OC03LjEwN1wiLz48L3N2Zz4nXG5cbiAgICAgICAgICAgIHRvcGJhckljb25zWm9vbSA9IG5ldyBMYXllclxuICAgICAgICAgICAgICAgIHBhcmVudDogcmlnaHRTaWRlXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDhcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ4XG4gICAgICAgICAgICAgICAgc3R5bGU6XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckxlZnQ6IFwiMXB4ICNlYWY3ZmYgc29saWRcIlxuXG4gICAgICAgICAgICB6b29tSWNvbiA9IG5ldyBTVkdMYXllclxuICAgICAgICAgICAgICAgIHBhcmVudDogdG9wYmFySWNvbnNab29tXG4gICAgICAgICAgICAgICAgeDogMTVcbiAgICAgICAgICAgICAgICB5OiAxNlxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNy4wMjFcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE2LjAyMVxuICAgICAgICAgICAgICAgIHN2ZzonPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxN1wiIGhlaWdodD1cIjE2XCI+PHBhdGggZmlsbD1cIiMxNjJEM0RcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk03LjUgMTRBNi41MDggNi41MDggMCAwIDEgMSA3LjVDMSAzLjkxNiAzLjkxNiAxIDcuNSAxUzE0IDMuOTE2IDE0IDcuNSAxMS4wODQgMTQgNy41IDE0em05LjUyMSAxLjMxM2wtMy40NDEtMy40NEE3LjQ0MiA3LjQ0MiAwIDAgMCAxNSA3LjVDMTUgMy4zNjQgMTEuNjM2IDAgNy41IDBTMCAzLjM2NCAwIDcuNSAzLjM2NCAxNSA3LjUgMTVhNy40NjcgNy40NjcgMCAwIDAgNS40NC0yLjM1M2wzLjM3MyAzLjM3NC43MDgtLjcwOHpNNS4wMjEgOGg1VjdoLTV2MXpcIi8+PC9zdmc+J1xuXG4gICAgICAgICAgICB0b3BiYXJCdXR0b25zU2F2ZURlZmF1bHQgPSBuZXcgTGF5ZXJcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IHJpZ2h0U2lkZVxuICAgICAgICAgICAgICAgIHg6IDI0OFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0OFxuICAgICAgICAgICAgICAgIHN0eWxlOlxuICAgICAgICAgICAgICAgICAgICBib3JkZXJMZWZ0OiBcIjFweCAjZWFmN2ZmIHNvbGlkXCJcblxuXG4gICAgICAgICAgICBsYXllcl8xNTI0MTUyNFNhdmUgPSBuZXcgVGV4dExheWVyXG4gICAgICAgICAgICAgICAgcGFyZW50OiB0b3BiYXJCdXR0b25zU2F2ZURlZmF1bHRcbiAgICAgICAgICAgICAgICB4OiAyNFxuICAgICAgICAgICAgICAgIHk6IDE1XG4gICAgICAgICAgICAgICAgdGV4dDogXCJTYXZlXCJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogMTRcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIkhlbHZldGljYSBOZXVlIFcwMSA1NSBSb21hblwiXG4gICAgICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogMC4wXG4gICAgICAgICAgICAgICAgbGluZUhlaWdodDogMS4yODU3MTQyODU3MTQyODU4XG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImxlZnRcIlxuICAgICAgICAgICAgICAgIGNvbG9yOiBcInJnYmEoMjIsNDUsNjEsMSlcIlxuXG4gICAgICAgICAgICB0b3BiYXJCdXR0b25zUHJldmlld0RlZmF1bHQgPSBuZXcgTGF5ZXJcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IHJpZ2h0U2lkZVxuICAgICAgICAgICAgICAgIHg6IDMyOVxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgICAgd2lkdGg6IDk4XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0OFxuICAgICAgICAgICAgICAgIHN0eWxlOlxuICAgICAgICAgICAgICAgICAgICBib3JkZXJMZWZ0OiBcIjFweCAjZWFmN2ZmIHNvbGlkXCJcblxuXG4gICAgICAgICAgICBsYXllcl8xNTI0MTUyNFByZXZpZXcgPSBuZXcgVGV4dExheWVyXG4gICAgICAgICAgICAgICAgcGFyZW50OiB0b3BiYXJCdXR0b25zUHJldmlld0RlZmF1bHRcbiAgICAgICAgICAgICAgICB4OiAyNFxuICAgICAgICAgICAgICAgIHk6IDE1XG4gICAgICAgICAgICAgICAgdGV4dDogXCJQcmV2aWV3XCJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogMTRcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIkhlbHZldGljYSBOZXVlIFcwMSA1NSBSb21hblwiXG4gICAgICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogMC4wXG4gICAgICAgICAgICAgICAgbGluZUhlaWdodDogMS4yODU3MTQyODU3MTQyODU4XG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImxlZnRcIlxuICAgICAgICAgICAgICAgIGNvbG9yOiBcInJnYmEoMjIsNDUsNjEsMSlcIlxuXG4gICAgICAgICAgICB0b3BiYXJCdXR0b25zUHVibGlzaERlZmF1bHQgPSBuZXcgTGF5ZXJcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IHJpZ2h0U2lkZVxuICAgICAgICAgICAgICAgIHg6IDQyOFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgICAgd2lkdGg6IDk1XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0OFxuICAgICAgICAgICAgICAgIHN0eWxlOlxuICAgICAgICAgICAgICAgICAgICBib3JkZXJMZWZ0OiBcIjFweCAjZWFmN2ZmIHNvbGlkXCJcblxuICAgICAgICAgICAgYkdfMyA9IG5ldyBMYXllclxuICAgICAgICAgICAgICAgIHBhcmVudDogdG9wYmFyQnV0dG9uc1B1Ymxpc2hEZWZhdWx0XG4gICAgICAgICAgICAgICAgeDogMFxuICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgICAgICB3aWR0aDogOTVcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ4XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoNTYsMTUzLDIzNiwxKVwiXG5cbiAgICAgICAgICAgIGxheWVyXzE1MjQxNTI0UHVibGlzaCA9IG5ldyBUZXh0TGF5ZXJcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IHRvcGJhckJ1dHRvbnNQdWJsaXNoRGVmYXVsdFxuICAgICAgICAgICAgICAgIHg6IDI0XG4gICAgICAgICAgICAgICAgeTogMTVcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlB1Ymxpc2hcIlxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNFxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWUgVzAxIDU1IFJvbWFuXCJcbiAgICAgICAgICAgICAgICBsZXR0ZXJTcGFjaW5nOiAwLjBcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAxLjI4NTcxNDI4NTcxNDI4NThcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiXG4gICAgICAgICAgICAgICAgY29sb3I6IFwicmdiYSgyNTUsMjU1LDI1NSwxKVwiXG5cbiAgICAgICAgICAgIHRvcGJhckljb25zTW9iaWxlVGV4dCA9IG5ldyBMYXllclxuICAgICAgICAgICAgICAgIHBhcmVudDogcmlnaHRTaWRlXG4gICAgICAgICAgICAgICAgeDogMTQ3XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0OFxuICAgICAgICAgICAgICAgIHN0eWxlOlxuICAgICAgICAgICAgICAgICAgICBib3JkZXJMZWZ0OiBcIjFweCAjZWFmN2ZmIHNvbGlkXCJcblxuXG5cbiAgICAgICAgICAgIGxheWVyXzE1MzkxNTE4TW9iaWxlID0gbmV3IFRleHRMYXllclxuICAgICAgICAgICAgICAgIHBhcmVudDogdG9wYmFySWNvbnNNb2JpbGVUZXh0XG4gICAgICAgICAgICAgICAgeDogMzlcbiAgICAgICAgICAgICAgICB5OiAxNVxuICAgICAgICAgICAgICAgIHRleHQ6IFwiTW9iaWxlXCJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogMTRcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIkhlbHZldGljYSBOZXVlIFcwMSA1NSBSb21hblwiXG4gICAgICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogMC4wXG4gICAgICAgICAgICAgICAgbGluZUhlaWdodDogMS4yODU3MTQyODU3MTQyODU4XG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImxlZnRcIlxuICAgICAgICAgICAgICAgIGNvbG9yOiBcInJnYmEoMjIsNDUsNjEsMSlcIlxuXG4gICAgICAgICAgICBtb2JpbGVJY29uID0gbmV3IFNWR0xheWVyXG4gICAgICAgICAgICAgICAgcGFyZW50OiB0b3BiYXJJY29uc01vYmlsZVRleHRcbiAgICAgICAgICAgICAgICB4OiAxOFxuICAgICAgICAgICAgICAgIHk6IDEzXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEzXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMlxuICAgICAgICAgICAgICAgIHN2ZzonPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxM1wiIGhlaWdodD1cIjIyXCI+PHBhdGggZmlsbD1cIiMxRDJEM0NcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xIDE3aDExVjNIMXYxNHptMTEgMmMwIDEuMTAzLS44OTcgMi0yIDJIM2MtMS4xMDMgMC0yLS44OTctMi0ydi0xaDExdjF6TTIuODk4IDFoNy4yMDRjLjg1MiAwIDEuNTg1LjQxMyAxLjg5OCAxSDFjLjMxMy0uNTg3IDEuMDQ2LTEgMS44OTgtMXpNMyAwYTMgMyAwIDAgMC0zIDN2MTZhMyAzIDAgMCAwIDMgM2g3YTMgMyAwIDAgMCAzLTNWM2EzIDMgMCAwIDAtMy0zSDN6XCIvPjwvc3ZnPiciLCJjbGFzcyBleHBvcnRzLnJhZGlvQnRucyBleHRlbmRzIExheWVyXG4gICAgXG4gICAgRXZlbnRzLkNoZWNrZWQgID0gXCJyYWRpb0J0bnMuT25DaGVja2VkXCJcblxuXG4gICAgY29uc3RydWN0b3I6IChAb3B0aW9ucz17fSkgLT5cblx0XHQgXHRcdFx0XHRcdFx0XHRcdFxuICAgICAgICAgICAgQG9wdGlvbnMuaXRlbXMgPz1bJ2l0ZW0xJywnaXRlbTInLCdpdGVtMyddXG4gICAgICAgICAgICBAb3B0aW9ucy5jaGVja2VkID89MFxuICAgICAgICAgICAgQG9wdGlvbnMudGl0bGUgPz1cIkRvIGltYWdlcyBzaG93IHRleHQ/XCJcbiAgICAgICAgICAgIEBpdGVtTWNzID0gW11cbiAgICAgICAgICAgIHN1cGVyIEBvcHRpb25zXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHN0eWxlcz0gcmVxdWlyZSBcIndpeFN0eWxlc1wiXG4gICAgICAgICAgICBjb2xvcnM9IHJlcXVpcmUgXCJ3aXhDb2xvcnNcIlxuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFV0aWxzLmluc2VydENTUyhcIlxuICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhTmV1ZVcwMS01NVJvbWFuLEhlbHZldGljYU5ldWVXMDItNTVSb21hbixIZWx2ZXRpY2FOZXVlVzEwLTU1Um9tYW4sc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjoje2NvbG9ycy5kMX07XG4gIGxpbmVIZWlnaHQ6IDE4cHg7XG4gIHRleHRUcmFuc2Zvcm06IG5vbmU7XG4gIHRleHRSZW5kZXJpbmc6IGdlb21ldHJpY1ByZWNpc2lvbjtcblxufVxuLmNvbnRhaW5lciBpbnB1dCB7XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICB3aWR0aDoxMDAlO1xuICBoZWlnaHQ6MTAwJTtcblxufVxuLmNoZWNrbWFyayB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNXB4O1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICN7Y29sb3JzLmIxfTtcbn1cbi5jb250YWluZXI6aG92ZXIgaW5wdXQgfiAuY2hlY2ttYXJrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAje2NvbG9ycy5iNH07XG59XG4uY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrIHtcbiAgXG59XG4uY2hlY2ttYXJrOmFmdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBjb250ZW50OicnO1xuICAgXG59XG4uY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrOmFmdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi5jb250YWluZXIgLmNoZWNrbWFyazphZnRlciB7XG4gXHR0b3A6IDNweDtcblx0bGVmdDogM3B4O1xuXHR3aWR0aDogMTBweDtcblx0aGVpZ2h0OiAxMHB4O1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdGJhY2tncm91bmQ6ICN7Y29sb3JzLmIxfTtcbn1cbiBcIilcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGluZSA9IFwiXCJcbiAgICAgICAgICAgIGZvciBpdGVtLGkgaW4gQG9wdGlvbnMuaXRlbXNcbiAgICAgICAgICAgICAgICBjaGVjayA9IGlmIEBvcHRpb25zLmNoZWNrZWQgPT0gaSB0aGVuIFwiY2hlY2tlZFwiIGVsc2UgXCJcIlxuICAgICAgICAgICAgICAgIGxpbmUgKz0gXCI8bGFiZWwgY2xhc3M9J2NvbnRhaW5lcic+I3tAb3B0aW9ucy5pdGVtc1tpXX1cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ncmFkaW8nIG5hbWU9J3JhZGlvJyAje2NoZWNrfT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nY2hlY2ttYXJrJz48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cIlxuXG4gICAgICAgICAgICB0aXRsZSA9IG5ldyBMYXllclxuICAgICAgICAgICAgICBwYXJlbnQ6dGhpc1xuICAgICAgICAgICAgICBodG1sOkBvcHRpb25zLnRpdGxlXG4gICAgICAgICAgICAgIHN0eWxlOnN0eWxlcy50MDJcbiAgICAgICAgICAgIHRpdGxlLnN0eWxlW1wiY29sb3JcIl0gPSBjb2xvcnMuZDJcblxuICAgICAgICAgICAgY29udGFpbmVyID0gbmV3IExheWVyXG4gICAgICAgICAgICAgICAgcGFyZW50OnRoaXNcbiAgICAgICAgICAgICAgICBodG1sOmxpbmVcbiAgICAgICAgICAgICAgICB5OjMwXG4gICAgICAgICAgICAgICAgc3R5bGU6XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjpcInJlbGF0aXZlXCJcblxuIiwiY2xhc3MgZXhwb3J0cy5wYW5lbEJvZHkgZXh0ZW5kcyBMYXllclxuICAgIEV2ZW50cy5kcmFnRW5kID0gXCJkcmFnRW5kXCJcbiAgICBjb25zdHJ1Y3RvcjogKEBvcHRpb25zPXt9KSAtPlxuXHRcdCBcdFx0XHRcdFx0XHRcdFx0XG4gICAgICAgICAgICBAb3B0aW9ucy5oZWlnaHQgPz01NThcbiAgICAgICAgICAgIEBvcHRpb25zLndpZHRoID89Mjg4XG4gICAgICAgICAgICBAb3B0aW9ucy50aXRsZSA/PVwiUGFuZWwgVGl0bGVcIlxuICAgICAgICAgICAgQG9wdGlvbnMuaGVhZGVyQ29sb3IgPz1cImJsdWVcIlxuICAgICAgICAgICAgc3VwZXIgQG9wdGlvbnNcblxuICAgICAgICAgICAgc3R5bGVzPSByZXF1aXJlIFwid2l4U3R5bGVzXCJcbiAgICAgICAgICAgIGNvbG9ycz0gcmVxdWlyZSBcIndpeENvbG9yc1wiXG4gICAgICAgICAgICAjIGljb25zPSByZXF1aXJlIFwiaWNvbnNcIlxuXG5cbiAgICAgICAgICAgIGhDb2xvciA9IGNvbG9ycy5iMVxuICAgICAgICAgICAgbWMgPSB0aGlzXG4gICAgICAgICAgICBALnByb3BzPVxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcIndoaXRlXCJcbiAgICAgICAgICAgICAgICBzaGFkb3dCbHVyOiAxNFxuICAgICAgICAgICAgICAgIHNoYWRvd0NvbG9yOiBcInJnYmEoMjIsNDUsNjEsMC4zNilcIlxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czo4XG4gICAgICAgICAgICAgICAgY2xpcDp0cnVlXG4gICAgICAgICAgICAgICAgc3R5bGU6XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6XCI1NHB4XCJcbiAgICAgICAgICBcblxuICAgICAgICAgICAgc3dpdGNoIEBvcHRpb25zLmhlYWRlckNvbG9yXG4gICAgICAgICAgICAgICAgd2hlbiBcImJsdWVcIlxuICAgICAgICAgICAgICAgICAgICBoQ29sb3IgPSBjb2xvcnMuYjFcbiAgICAgICAgICAgICAgICAgICAgY2lyY2xlPSBjb2xvcnMuZTFcbiAgICAgICAgICAgICAgICAgICAgaWNvbiA9IFwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICB0ZXh0Q29sb3IgPSBcIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyU3R5bGU9XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOlwiMThweCAyNHB4XCJcblxuICAgICAgICAgICAgICAgIHdoZW4gXCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgIGhDb2xvciA9IFwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICBjaXJjbGU9IGNvbG9ycy5iNVxuICAgICAgICAgICAgICAgICAgICBpY29uPWNvbG9ycy5iMVxuICAgICAgICAgICAgICAgICAgICB0ZXh0Q29sb3IgPSBjb2xvcnMuZDFcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyU3R5bGU9XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOlwiMThweCAyNHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbTpcIjFweCBzb2xpZCAjRDlFMUU4XCJcblxuICAgICAgICAgICAgaGVscEljb24gPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjI1XCIgdmlld0JveD1cIjAgMCAyNSAyNVwiPjxkZXNjPiAgQ3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+PGcgZmlsbD1cIm5vbmVcIj48Y2lyY2xlIGN4PVwiMTIuNVwiIGN5PVwiMTIuNVwiIHI9XCIxMi41XCIgZmlsbD1cIicrY2lyY2xlKydcIi8+PGcgZmlsbD1cIicraWNvbisnXCI+PHBhdGggZD1cIk0xNSA2LjhDMTUuMyA3LjEgMTUuNiA3LjQgMTUuNyA3LjggMTUuOSA4LjEgMTYgOC42IDE2IDkgMTYgOS43IDE1LjkgMTAuMiAxNS42IDEwLjYgMTUuMyAxMSAxNSAxMS41IDE0LjYgMTEuOCAxNC4yIDEyLjIgMTMuOSAxMi40IDEzLjcgMTIuNiAxMy41IDEyLjggMTMuNCAxMi45IDEzLjMgMTMuMSAxMy4yIDEzLjMgMTMuMSAxMy40IDEzLjEgMTMuNyAxMy4xIDEzLjkgMTMgMTQuNiAxMyAxNC42TDEyLjEgMTQuNkMxMi4xIDEzIDEyLjUgMTIuNiAxMyAxMi4xIDEzLjIgMTEuOCAxMy41IDExLjUgMTMuOSAxMS4yIDE0LjIgMTAuOSAxNC40IDEwLjYgMTQuNyAxMC4zIDE0LjkgOS45IDE1IDkuNSAxNSA5LjEgMTUgOC41IDE0LjcgNy45IDE0LjMgNy41IDE0IDcuMyAxMy44IDcuMSAxMy41IDcgMTMuMiA2LjkgMTIuOSA2LjkgMTIuNiA2LjkgMTIuMSA2LjkgMTEuNyA3IDExLjQgNy4xIDExLjEgNy4zIDEwLjggNy41IDEwLjYgNy43IDEwLjMgOCAxMC4yIDguMyAxMC4xIDguNyAxMCA5LjEgOS45IDkuOSA5LjkgOS45TDkgOS45QzkgOC4yIDkuNiA3LjQgOS45IDcuMSAxMC4yIDYuNyAxMC42IDYuNSAxMSA2LjMgMTEuNSA2LjEgMTIgNiAxMi42IDYgMTMuMSA2IDEzLjUgNi4xIDEzLjkgNi4yIDE0LjMgNi4zIDE0LjcgNi41IDE1IDYuOFpNMTIuMSAxOEwxMi4xIDE2LjIgMTMgMTYuMiAxMyAxOCAxMi4xIDE4WlwiLz48L2c+PC9nPjwvc3ZnPidcblxuICAgICAgICAgICAgY2xvc2VJY29uID0gJzxzdmcgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjI1XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxnIGZpbGw9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPjxjaXJjbGUgZmlsbD1cIicrY2lyY2xlKydcIiBjeD1cIjEyLjVcIiBjeT1cIjEyLjVcIiByPVwiMTIuNVwiLz48cGF0aCBkPVwiTTggOGgxdjFIOFY4em0xIDFoMXYxSDlWOXptMSAxaDF2MWgtMXYtMXptMSAxaDF2MWgtMXYtMXptMSAxaDF2MWgtMXYtMXptMSAxaDF2MWgtMXYtMXptMSAxaDF2MWgtMXYtMXptMSAxaDF2MWgtMXYtMXptMSAxaDF2MWgtMXYtMXptMC04aDF2MWgtMVY4em0tMSAxaDF2MWgtMVY5em0tMSAxaDF2MWgtMXYtMXptLTEgMWgxdjFoLTF2LTF6bS0yIDJoMXYxaC0xdi0xem0tMSAxaDF2MWgtMXYtMXptLTEgMWgxdjFIOXYtMXptLTEgMWgxdjFIOHYtMXpcIiBmaWxsPVwiJytpY29uKydcIi8+PC9nPjwvc3ZnPidcblxuICAgICAgICAgICAgaGVhZGVyID0gbmV3IExheWVyXG4gICAgICAgICAgICAgICAgcGFyZW50Om1jXG4gICAgICAgICAgICAgICAgd2lkdGg6QG9wdGlvbnMud2lkdGhcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6aENvbG9yXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjU0XG4gICAgICAgICAgICAgICAgc3R5bGU6aGVhZGVyU3R5bGUgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGhlYWRlci5vbk1vdXNlRG93biAtPlxuICAgICAgICAgICAgICAgIG1jLmRyYWdnYWJsZS5lbmFibGVkID0gdHJ1ZVxuXG5cbiAgICAgICAgICAgIGhlYWRlci5vbk1vdXNlVXAgLT5cbiAgICAgICAgICAgICAgICBtYy5kcmFnZ2FibGUuZW5hYmxlZCA9IGZhbHNlXG5cbiAgICAgICAgICAgIGhUaXRsZSA9IG5ldyBMYXllclxuICAgICAgICAgICAgICAgIHBhcmVudDpoZWFkZXJcbiAgICAgICAgICAgICAgICBodG1sOkBvcHRpb25zLnRpdGxlXG4gICAgICAgICAgICAgICAgc3R5bGU6c3R5bGVzLnQwNVxuICAgICAgICAgICAgaFRpdGxlLnN0eWxlPVxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOlwicmVsYXRpdmVcIlxuICAgICAgICAgICAgICAgIGNvbG9yOnRleHRDb2xvclxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjbG9zZSA9IG5ldyBMYXllclxuICAgICAgICAgICAgICAgIHBhcmVudDpoZWFkZXJcbiAgICAgICAgICAgICAgICB4OkBvcHRpb25zLndpZHRoLTQzXG4gICAgICAgICAgICAgICAgeToxNVxuICAgICAgICAgICAgICAgIGh0bWw6Y2xvc2VJY29uXG4gICAgICAgICAgICAgICAgd2lkdGg6MjVcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MjVcbiAgICAgICAgICAgICAgICBzdHlsZTpcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOlwicG9pbnRlclwiXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNsb3NlLm9uQ2xpY2sgLT5cbiAgICAgICAgICAgICAgICBtYy5kZXN0cm95KClcblxuICAgICAgICAgICAgaGVscCA9IG5ldyBMYXllclxuICAgICAgICAgICAgICAgIHBhcmVudDpoZWFkZXJcbiAgICAgICAgICAgICAgICB4OkBvcHRpb25zLndpZHRoLTc3XG4gICAgICAgICAgICAgICAgeToxNVxuICAgICAgICAgICAgICAgIHdpZHRoOjI1XG4gICAgICAgICAgICAgICAgaGVpZ2h0OjI1XG4gICAgICAgICAgICAgICAgaHRtbDpoZWxwSWNvbiIsIiMgQWRkIHRoZSBmb2xsb3dpbmcgbGluZSB0byB5b3VyIHByb2plY3QgaW4gRnJhbWVyIFN0dWRpby4gXG4jIG15TW9kdWxlID0gcmVxdWlyZSBcIm15TW9kdWxlXCJcbiMgUmVmZXJlbmNlIHRoZSBjb250ZW50cyBieSBuYW1lLCBsaWtlIG15TW9kdWxlLm15RnVuY3Rpb24oKSBvciBteU1vZHVsZS5teVZhclxuXG5leHBvcnRzLm15VmFyID0gXCJteVZhcmlhYmxlXCJcblxuZXhwb3J0cy5teUZ1bmN0aW9uID0gLT5cblx0cHJpbnQgXCJteUZ1bmN0aW9uIGlzIHJ1bm5pbmdcIlxuXG5leHBvcnRzLm15QXJyYXkgPSBbMSwgMiwgM10iLCJleHBvcnRzLmNvbG9ycz0gY29sb3JzPXJlcXVpcmUgXCJ3aXhDb2xvcnNcIlxuZXhwb3J0cy5zdHlsZXM9c3R5bGVzPSByZXF1aXJlIFwid2l4U3R5bGVzXCJcbmV4cG9ydHMuaWNvbnM9aWNvbnM9IHJlcXVpcmUgXCJpY29uc1wiXG4jIGV4cG9ydHMuaWNvbnM9aWNvbnM9IHJlcXVpcmUgXCJpY29uc1wiXG5cbntwYW5lbEJvZHl9PSByZXF1aXJlIFwicGFuZWxCb2R5XCJcbmV4cG9ydHMucGFuZWxCb2R5ID0gcGFuZWxCb2R5XG5cblxue2Ryb3BEb3dufT0gcmVxdWlyZSBcImRyb3BEb3duXCJcbmV4cG9ydHMuZHJvcERvd24gPSBkcm9wRG93blxuXG57aW5wdXRDb21wfT0gcmVxdWlyZSBcImlucHV0Q29tcFwiXG5leHBvcnRzLmlucHV0Q29tcCA9IGlucHV0Q29tcFxuXG57ZGF0YXNldEljb259PSByZXF1aXJlIFwiZGF0YXNldEljb25cIlxuZXhwb3J0cy5kYXRhc2V0SWNvbiA9IGRhdGFzZXRJY29uXG5cbntidXR0b25MaW5rfT0gcmVxdWlyZSBcImJ1dHRvbkxpbmtcIlxuZXhwb3J0cy5idXR0b25MaW5rID0gYnV0dG9uTGlua1xuXG57cmFkaW9CdG5zfT0gcmVxdWlyZSBcInJhZGlvQnRuc1wiXG5leHBvcnRzLnJhZGlvQnRucyA9IHJhZGlvQnRuc1xuXG57dG9wYmFyfT0gcmVxdWlyZSBcInRvcGJhclwiXG5leHBvcnRzLnRvcGJhciA9IHRvcGJhclxuXG57bGVmdE1lbnVCdG59PSByZXF1aXJlIFwibGVmdE1lbnVCdG5cIlxuZXhwb3J0cy5sZWZ0TWVudUJ0biA9IGxlZnRNZW51QnRuXG5cbntsZWZ0TWVudX09IHJlcXVpcmUgXCJsZWZ0TWVudVwiXG5leHBvcnRzLmxlZnRNZW51ID0gbGVmdE1lbnUiLCJjbGFzcyBleHBvcnRzLmxlZnRNZW51IGV4dGVuZHMgTGF5ZXJcblxuICAgIGNvbnN0cnVjdG9yOiAoQG9wdGlvbnM9e30pIC0+XG5cdFx0IFx0XHRcdFx0XHRcdFx0XHRcbiAgICAgICAgICAgIEBvcHRpb25zLmljb25zID89IFtcImhvbWVcIixcImJhY2tncm91bmRcIixcImFkZFwiLFwiYXBwTWFya2V0XCIsXCJtZWRpYVwiLFwiYmxvZ1wiLFwiZGF0YVwiXVxuICAgICAgICAgICAgc3VwZXIgQG9wdGlvbnNcbiAgICAgICAgICAgIFxuICAgICAgICAgICAge2xlZnRNZW51QnRufT0gcmVxdWlyZSBcImxlZnRNZW51QnRuXCJcbiAgICAgICAgICAgIGJ0bnMgPSBAb3B0aW9ucy5pY29uc1xuICAgICAgICAgICAgbWMgPSB0aGlzXG4gICAgICAgICAgICBALnByb3BzPSBcbiAgICAgICAgICAgICAgICB3aWR0aDozMlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IgbWVudUJ0bixpIGluIGJ0bnMgXG4gICAgICAgICAgICAgICAgYnRuID0gbmV3IGxlZnRNZW51QnRuXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDptY1xuICAgICAgICAgICAgICAgICAgICB5OmkqNjBcbiAgICAgICAgICAgICAgICAgICAgaWNvbjptZW51QnRuXG5cbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICBcbiIsImNsYXNzIGV4cG9ydHMubGVmdE1lbnVCdG4gZXh0ZW5kcyBMYXllclxuXG4gICAgY29uc3RydWN0b3I6IChAb3B0aW9ucz17fSkgLT5cblx0XHQgXHRcdFx0XHRcdFx0XHRcdFxuICAgICAgICAgICAgQG9wdGlvbnMuaWNvbiA/PSBcImhvbWVcIlxuICAgICAgICAgICAgc3VwZXIgQG9wdGlvbnNcbiAgICAgICAgICAgIHN0eWxlcz0gcmVxdWlyZSBcIndpeFN0eWxlc1wiXG5cbiAgICAgICAgICAgIGhvbWUgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgd2lkdGg9XCIyMlwiIGhlaWdodD1cIjI2XCI+PGRlZnM+PHBhdGggaWQ9XCJhXCIgZD1cIk0yMiAzYTUgNSAwIDAgMSA1IDV2MTZhNSA1IDAgMCAxLTUgNUgxMGE1IDUgMCAwIDEtNS01VjhhNSA1IDAgMCAxIDUtNWgxMnptMCAyMFY5YTEgMSAwIDAgMC0xLTFIMTFhMSAxIDAgMCAwLTEgMXYxNGExIDEgMCAwIDAgMSAxaDEwYTEgMSAwIDAgMCAxLTF6bS05LTEwdi0yaDZ2MmgtNnptMCA0di0yaDZ2MmgtNnptMCA0di0yaDZ2MmgtNnpcIi8+PC9kZWZzPjx1c2UgIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTUgLTMpXCIgeGxpbms6aHJlZj1cIiNhXCIvPjwvc3ZnPidcbiAgICAgICAgICAgIGJhY2tncm91bmQgPSc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48ZGVmcz48cGF0aCBpZD1cImFcIiBkPVwiTTUgMTloMTRWNUg1djE0ek0xOSAwSDVhNSA1IDAgMCAwLTUgNXYxNGE1IDUgMCAwIDAgNSA1aDE0YTUgNSAwIDAgMCA1LTVWNWE1IDUgMCAwIDAtNS01elwiLz48L2RlZnM+PHVzZSBmaWxsLXJ1bGU9XCJldmVub2RkXCIgeGxpbms6aHJlZj1cIiNhXCIvPjwvc3ZnPidcbiAgICAgICAgICAgIGFkZCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48ZGVmcz48cGF0aCBpZD1cImFcIiBkPVwiTTE4LjQgMTMuNDRoLTQuOHY0LjhoLTIuODh2LTQuOGgtNC44di0yLjg4aDQuOHYtNC44aDIuODh2NC44aDQuOHYyLjg4ek0xMS45OSAwQzUuNDU2IDAgMCA1LjQ1MyAwIDExLjk4IDAgMTguNTA4IDUuNDU2IDI0IDExLjk5IDI0UzI0IDE4LjUzIDI0IDEyIDE4LjUyNCAwIDExLjk5IDB6XCIvPjwvZGVmcz48dXNlICBmaWxsLXJ1bGU9XCJldmVub2RkXCIgeGxpbms6aHJlZj1cIiNhXCIvPjwvc3ZnPidcbiAgICAgICAgICAgIGFwcE1hcmtldCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48ZGVmcz48cGF0aCBpZD1cImFcIiBkPVwiTTE4IDZWM2gtMnYzaC0zdjJoM3YzaDJWOGgzVjZoLTN6TTAgNy45OThDMCA2Ljg5NS44ODcgNiAxLjk5OCA2aDQuMDA0QzcuMTA1IDYgOCA2Ljg4NyA4IDcuOTk4djQuMDA0QTEuOTkzIDEuOTkzIDAgMCAxIDYuMDAyIDE0SDEuOTk4QTEuOTkzIDEuOTkzIDAgMCAxIDAgMTIuMDAyVjcuOTk4em0wIDEwQzAgMTYuODk1Ljg4NyAxNiAxLjk5OCAxNmg0LjAwNEM3LjEwNSAxNiA4IDE2Ljg4NyA4IDE3Ljk5OHY0LjAwNEExLjk5MyAxLjk5MyAwIDAgMSA2LjAwMiAyNEgxLjk5OEExLjk5MyAxLjk5MyAwIDAgMSAwIDIyLjAwMnYtNC4wMDR6bTEwIDBjMC0xLjEwMy44ODctMS45OTggMS45OTgtMS45OThoNC4wMDRjMS4xMDMgMCAxLjk5OC44ODcgMS45OTggMS45OTh2NC4wMDRBMS45OTMgMS45OTMgMCAwIDEgMTYuMDAyIDI0aC00LjAwNEExLjk5MyAxLjk5MyAwIDAgMSAxMCAyMi4wMDJ2LTQuMDA0em0wLTE1Ljk5MkMxMCAuODk4IDEwLjg5NyAwIDEyLjAwNiAwaDkuOTg4QzIzLjEwMiAwIDI0IC44OTcgMjQgMi4wMDZ2OS45ODhBMi4wMDUgMi4wMDUgMCAwIDEgMjEuOTk0IDE0aC05Ljk4OEEyLjAwNSAyLjAwNSAwIDAgMSAxMCAxMS45OTRWMi4wMDZ6XCIvPjwvZGVmcz48dXNlIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiB4bGluazpocmVmPVwiI2FcIi8+PC9zdmc+J1xuICAgICAgICAgICAgbWVkaWEgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgd2lkdGg9XCIyOFwiIGhlaWdodD1cIjIxXCI+PGRlZnM+PHBhdGggaWQ9XCJhXCIgZD1cIk0yMS41MzYgNi44MkMyMC41NzMgMi45MDYgMTcuMDUgMCAxMi44NCAwIDcuODg4IDAgMS41MyAzLjY0MyAzLjk4OCAxMi4yNjggMy43NzUgMTIuMjMzIDAgMTIuMzkzIDAgMTYuMzk4YzAgMi4yMDUgMS43ODggMy44NyAzLjk5MyAzLjg3aDguNDk1VjExLjFsLTIuNDU1IDIuMTQ1Yy0uNC4zODEtMS4xNDMuOTA2LTEuNzM0LjMxNi0uNTMtLjUzLS4zNzMtMS4yMjkuMDY0LTEuNjk4bDUuMTI1LTQuNTk0IDUuMTQgNC41MzFjLjQwMS4zOC40MzYgMS4wMjMuMDQ2IDEuNDEzLS40MDMuNDAyLTEuMTE3LjU4My0xLjY2My4wMzhsLTIuNTIzLTIuMTV2OS4xNjhoNi42NTRjMy43ODggMCA2Ljg1OC0yLjk0NyA2Ljg1OC02LjczNCAwLTMuNjU0LTIuODYtNi41MS02LjQ2NC02LjcxNFwiLz48L2RlZnM+PHVzZSBmaWxsLXJ1bGU9XCJldmVub2RkXCIgeGxpbms6aHJlZj1cIiNhXCIvPjwvc3ZnPidcbiAgICAgICAgICAgIGJsb2cgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjMwXCI+PGRlZnM+PHBhdGggaWQ9XCJhXCIgZD1cIk0xMy40OTkgMmgtOWEuNS41IDAgMCAxLS41LS41di0xYS41LjUgMCAwIDEgLjUtLjVoOWEuNS41IDAgMCAxIC41LjV2MWEuNS41IDAgMCAxLS41LjVtLjE2MiAySDQuMzM3YS41LjUgMCAwIDAtLjQ2NC4zMTRMMCAxNGw4IDE2aC41VjE2LjkyOWExLjk5NyAxLjk5NyAwIDEgMSAxLjc1LTMuNDkyIDEuOTk2IDEuOTk2IDAgMCAxLS43NDkgMy40OTJWMzBoLjVsOC0xNi0zLjg3OC05LjY4NkEuNS41IDAgMCAwIDEzLjY2MiA0XCIvPjwvZGVmcz48dXNlIGZpbGwtcnVsZT1cIm5vbnplcm9cIiB4bGluazpocmVmPVwiI2FcIi8+PC9zdmc+J1xuICAgICAgICAgICAgZGF0YSA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjJcIj48ZGVmcz48cGF0aCBpZD1cImFcIiBkPVwiTTYuMjg3IDEwLjQxOEM1LjUgMTAuMDcxIDUgOS4yNDEgNSA4LjMzM2MwLS45MDcuNS0xLjczOCAxLjI4Ny0yLjA4NEM4LjAyNyA1LjQ4MiAxMC41MzkgNSAxMy4zMzQgNWMyLjc5MyAwIDUuMzA1LjQ4MiA3LjA0NiAxLjI0OS43ODcuMzQ2IDEuMjg3IDEuMTc3IDEuMjg3IDIuMDg0IDAgLjkwOC0uNSAxLjczOC0xLjI4NyAyLjA4NS0xLjc0MS43NjctNC4yNTMgMS4yNDktNy4wNDYgMS4yNDktMi43OTUgMC01LjMwNi0uNDgyLTcuMDQ3LTEuMjQ5em0tLjAzMiA0LjMzN0ExLjk0MSAxLjk0MSAwIDAgMSA1IDEyLjk1NXYtMS4yODhjMS43NDEgMS4wMTIgNC42MjggMS42OTggOC4xMjYgMS42OTggMS4yNTYgMCAyLjQ0OS0uMDkgMy41NC0uMjUxYTUuNzI2IDUuNzI2IDAgMCAwLTEuODE1IDIuNjZjLS41Ni4wMzYtMS4xMzMuMDYtMS43MjUuMDYtMi43MjQgMC01LjE3My0uNDE3LTYuODcxLTEuMDh6bS4xNTYgNC4yOEM1LjU0OCAxOC43MjUgNSAxNy45ODEgNSAxNy4xNjh2LTEuMzM1YzEuOTU4Ljk3NyA0Ljc0MyAxLjY1MyA4LjMzMyAxLjc0NC0uNTY0LjU1Ni0xIDEuMjE0LTEuMjQ1IDEuOTQ0YTUuMTUzIDUuMTUzIDAgMCAwLTEuMDI0LjQ3OWMtMS44MDktLjE4My0zLjQxMi0uNTE4LTQuNjUzLS45NjV6TTUgMjBjLjcyNC42NSAxLjkyOCAxLjE3NSAzLjMzMyAxLjUwN2E1LjU0IDUuNTQgMCAwIDAtLjQzNiAyLjE2M2MwIC4xNjkuMDI0LjMzMS4wMzguNDk3YTkuMzcgOS4zNyAwIDAgMS0xLjg5Mi0uNzJDNS40MDUgMjMuMTExIDUgMjIuMzExIDUgMjEuNDM2VjIwem0xNS45LTYuNjY3YzQuNCAwIDQuNTUgNC40NDUgNC41NSA0LjQ0NWguMDFjMi41MDcgMCA0LjU0IDEuOTg3IDQuNTQgNC40MzYgMCAyLjQ0Ny0yLjAzIDQuNDM0LTQuNTM1IDQuNDM3bC0xMi43NTIuMDE2aC0uMDA1QzExLjQ4MyAyNi42NjcgMTAgMjYuMTA5IDEwIDI0YzAtMi4xMDggMS45NDctMi42NzcgMi43MjctMi42NzcgMC0xLjc2NyAxLjgwMi0zLjU0NSAzLjYyMi0zLjU0NSAwIDAgLjE0OS00LjQ0NSA0LjU1LTQuNDQ1elwiLz48L2RlZnM+PHVzZSBmaWxsLXJ1bGU9XCJub256ZXJvXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC01IC01KVwiIHhsaW5rOmhyZWY9XCIjYVwiLz48L3N2Zz4nXG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgZ2VuZXJ0YWVMYWJlbCA9KGxhYmVsKS0+XG4gICAgICAgICAgICAgICAgc3dpdGNoIGxhYmVsXG4gICAgICAgICAgICAgICAgICAgIHdoZW4gXCJob21lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTWVudXMgJiBQYWdlc1wiXG4gICAgICAgICAgICAgICAgICAgIHdoZW4gXCJiYWNrZ3JvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQmFja2dyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgIHdoZW4gXCJhZGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBZGRcIlxuICAgICAgICAgICAgICAgICAgICB3aGVuIFwiYXBwTWFya2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQWRkIEFwcHNcIlxuICAgICAgICAgICAgICAgICAgICB3aGVuIFwibWVkaWFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJNeSBVcGxvYWRzXCJcbiAgICAgICAgICAgICAgICAgICAgd2hlbiBcImJsb2dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJNeSBCbG9nXCJcbiAgICAgICAgICAgICAgICAgICAgd2hlbiBcImRhdGFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEYXRhIEFwcFwiXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxhYmVsXG5cbiAgICAgICAgICAgIHRoaXMucHJvcHM9XG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAxMDBcbiAgICAgICAgICAgICAgICBzaGFkb3dDb2xvcjogXCJyZ2JhKDAsMCwwLDAuNTQpXCJcbiAgICAgICAgICAgICAgICBzaGFkb3dYOiAwXG4gICAgICAgICAgICAgICAgc2hhZG93WTogMlxuICAgICAgICAgICAgICAgIHNoYWRvd0JsdXI6IDVcbiAgICAgICAgICAgICAgICBzaGFkb3dTcHJlYWQ6IDBcbiAgICAgICAgICAgICAgICBncmFkaWVudDpcbiAgICAgICAgICAgICAgICAgICAgZW5kOiBcIiNGQ0ZDRkNcIlxuICAgICAgICAgICAgICAgICAgICBzdGFydDogXCIjRjRGNEY0XCJcbiAgICAgICAgICAgICAgICAgICAgYW5nbGU6IDBcbiAgICAgICAgICAgICAgICBzdHlsZTpcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6XCJhdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiYXV0b1wiXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6XCJmbGV4XCJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOlwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgbWluSGVpZ2h0OlwiNDhweFwiXG4gICAgICAgICAgICAgICAgICAgIG1pbldpZHRoOlwiNDhweFwiXG4gIFxuXG4gICAgICAgICAgICBpY29uID0gbmV3IFNWR0xheWVyXG4gICAgICAgICAgICAgICAgcGFyZW50OnRoaXNcbiAgICAgICAgICAgICAgICBzdmc6ZXZhbChAb3B0aW9ucy5pY29uKVxuICAgICAgICAgICAgICAgIGZpbGw6XCIjMkQ0MTUwXCJcbiAgICAgICAgICAgICAgICBzdHlsZTpcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246XCJyZWxhdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOlwiYXV0b1wiXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDpcImF1dG9cIlxuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxhYmVsID0gbmV3IExheWVyXG4gICAgICAgICAgICAgICAgbmFtZTpcImxhYmVsXCJcbiAgICAgICAgICAgICAgICB2aXNpYmxlOmZhbHNlXG4gICAgICAgICAgICAgICAgcGFyZW50OnRoaXNcbiAgICAgICAgICAgICAgICBodG1sOmdlbmVydGFlTGFiZWwoQG9wdGlvbnMuaWNvbilcbiAgICAgICAgICAgICAgICBzdHlsZTpzdHlsZXMudDA1XG4gICAgICAgICAgICBsYWJlbC5zdHlsZT1cbiAgICAgICAgICAgICAgICBwb3NpdGlvbjpcInJlbGF0aXZlXCJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6XCJhdXRvXCJcbiAgICAgICAgICAgICAgICB3aWR0aDpcImF1dG9cIlxuICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDpcIjIwcHhcIlxuICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OlwiMTBweFwiXG4gICAgICAgICAgICAgICAgd2hpdGVTcGFjZTpcIm5vd3JhcFwiXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMub25Nb3VzZU92ZXIgLT5cbiAgICAgICAgICAgICAgICB0aGlzLnN0eWxlID1cbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6XCIxMnB4XCJcbiAgICAgICAgICAgICAgICBsYWJlbCA9IHRoaXMuY2hpbGRyZW5XaXRoTmFtZShcImxhYmVsXCIpWzBdXG4gICAgICAgICAgICAgICAgbGFiZWwudmlzaWJsZSA9IHRydWVcbiAgICAgICAgICAgIHRoaXMub25Nb3VzZU91dCAtPlxuICAgICAgICAgICAgICAgIHRoaXMuc3R5bGUgPVxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDpcImluaXRpYWxcIlxuICAgICAgICAgICAgICAgIGxhYmVsID0gdGhpcy5jaGlsZHJlbldpdGhOYW1lKFwibGFiZWxcIilbMF1cbiAgICAgICAgICAgICAgICBsYWJlbC52aXNpYmxlID0gZmFsc2UiLCJFdmVudHMuRW50ZXJLZXkgPSBcIkVudGVyS2V5XCJcbkV2ZW50cy5TcGFjZUtleSA9IFwiU3BhY2VLZXlcIlxuRXZlbnRzLkJhY2tzcGFjZUtleSA9IFwiQmFja3NwYWNlS2V5XCJcbkV2ZW50cy5DYXBzTG9ja0tleSA9IFwiQ2Fwc0xvY2tLZXlcIlxuRXZlbnRzLlNoaWZ0S2V5ID0gXCJTaGlmdEtleVwiXG5FdmVudHMuVmFsdWVDaGFuZ2UgPSBcIlZhbHVlQ2hhbmdlXCJcbkV2ZW50cy5JbnB1dEZvY3VzID0gXCJJbnB1dEZvY3VzXCJcbkV2ZW50cy5JbnB1dEJsdXIgPSBcIklucHV0Qmx1clwiXG5cbmNsYXNzIGV4cG9ydHMuSW5wdXRMYXllciBleHRlbmRzIFRleHRMYXllclxuXG5cdGNvbnN0cnVjdG9yOiAob3B0aW9ucz17fSkgLT5cblxuXHRcdF8uZGVmYXVsdHMgb3B0aW9ucyxcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCIjRkZGXCJcblx0XHRcdHdpZHRoOiAzNzVcblx0XHRcdGhlaWdodDogNjBcblx0XHRcdHBhZGRpbmc6XG5cdFx0XHRcdGxlZnQ6IDIwXG5cdFx0XHR0ZXh0OiBcIlR5cGUgc29tZXRoaW5nLi4uXCJcblx0XHRcdGZvbnRTaXplOiA0MFxuXHRcdFx0Zm9udFdlaWdodDogMzAwXG5cblx0XHRpZiBvcHRpb25zLm11bHRpTGluZVxuXHRcdFx0b3B0aW9ucy5wYWRkaW5nLnRvcCA/PSAyMFxuXG5cdFx0QF9pbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcblx0XHRAX2lucHV0RWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIlxuXG5cdFx0c3VwZXIgb3B0aW9uc1xuXG5cdFx0IyBHbG9iYWxzXG5cdFx0QF9iYWNrZ3JvdW5kID0gdW5kZWZpbmVkXG5cdFx0QF9wbGFjZWhvbGRlciA9IHVuZGVmaW5lZFxuXHRcdEBfaXNEZXNpZ25MYXllciA9IGZhbHNlXG5cblx0XHQjIExheWVyIGNvbnRhaW5pbmcgaW5wdXQgZWxlbWVudFxuXHRcdEBpbnB1dCA9IG5ldyBMYXllclxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcblx0XHRcdG5hbWU6IFwiaW5wdXRcIlxuXHRcdFx0d2lkdGg6IEB3aWR0aFxuXHRcdFx0aGVpZ2h0OiBAaGVpZ2h0XG5cdFx0XHRwYXJlbnQ6IEBcblxuXHRcdCMgVGV4dCBhcmVhXG5cdFx0aWYgQG11bHRpTGluZVxuXHRcdFx0QF9pbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIilcblxuXHRcdCMgQXBwZW5kIGVsZW1lbnRcblx0XHRAaW5wdXQuX2VsZW1lbnQuYXBwZW5kQ2hpbGQoQF9pbnB1dEVsZW1lbnQpXG5cblx0XHQjIE1hdGNoIFRleHRMYXllciBkZWZhdWx0cyBhbmQgdHlwZSBwcm9wZXJ0aWVzXG5cdFx0QF9zZXRUZXh0UHJvcGVydGllcyhAKVxuXG5cdFx0IyBTZXQgYXR0cmlidXRlc1xuXHRcdEBfaW5wdXRFbGVtZW50LmF1dG9jb21wbGV0ZSA9IFwib2ZmXCJcblx0XHRAX2lucHV0RWxlbWVudC5hdXRvY29ycmVjdCA9IFwib2ZmXCJcblx0XHRAX2lucHV0RWxlbWVudC5zcGVsbGNoZWNrID0gZmFsc2VcblxuXHRcdCMgVGhlIGlkIHNlcnZlcyB0byBkaWZmZXJlbnRpYXRlIG11bHRpcGxlIGlucHV0IGVsZW1lbnRzIGZyb20gb25lIGFub3RoZXIuXG5cdFx0IyBUbyBhbGxvdyBzdHlsaW5nIHRoZSBwbGFjZWhvbGRlciBjb2xvcnMgb2Ygc2VwZXJhdGUgZWxlbWVudHMuXG5cdFx0QF9pbnB1dEVsZW1lbnQuY2xhc3NOYW1lID0gXCJpbnB1dFwiICsgQGlkXG5cblx0XHQjIEFsbCBpbmhlcml0ZWQgcHJvcGVydGllc1xuXHRcdHRleHRQcm9wZXJ0aWVzID1cblx0XHRcdHtAdGV4dCwgQGZvbnRGYW1pbHksIEBmb250U2l6ZSwgQGxpbmVIZWlnaHQsIEBmb250V2VpZ2h0LCBAY29sb3IsIEBiYWNrZ3JvdW5kQ29sb3IsIEB3aWR0aCwgQGhlaWdodCwgQHBhZGRpbmcsIEBwYXJlbnR9XG5cblx0XHRmb3IgcHJvcGVydHksIHZhbHVlIG9mIHRleHRQcm9wZXJ0aWVzXG5cblx0XHRcdEBvbiBcImNoYW5nZToje3Byb3BlcnR5fVwiLCAodmFsdWUpID0+XG5cdFx0XHRcdCMgUmVzZXQgdGV4dExheWVyIGNvbnRlbnRzXG5cdFx0XHRcdEBfZWxlbWVudEhUTUwuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSBcIlwiXG5cblx0XHRcdFx0cmV0dXJuIGlmIEBfaXNEZXNpZ25MYXllclxuXHRcdFx0XHRAX3NldFRleHRQcm9wZXJ0aWVzKEApXG5cdFx0XHRcdEBfc2V0UGxhY2Vob2xkZXJDb2xvcihAX2lkLCBAY29sb3IpXG5cblxuXHRcdCMgU2V0IGRlZmF1bHQgcGxhY2Vob2xkZXJcblx0XHRAX3NldFBsYWNlaG9sZGVyKEB0ZXh0KVxuXHRcdEBfc2V0UGxhY2Vob2xkZXJDb2xvcihAX2lkLCBAY29sb3IpXG5cblx0XHQjIFJlc2V0IHRleHRMYXllciBjb250ZW50c1xuXHRcdEBfZWxlbWVudEhUTUwuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSBcIlwiXG5cblx0XHQjIENoZWNrIGlmIGluIGZvY3VzXG5cdFx0QF9pc0ZvY3VzZWQgPSBmYWxzZVxuXG5cdFx0IyBEZWZhdWx0IGZvY3VzIGludGVyYWN0aW9uXG5cdFx0QF9pbnB1dEVsZW1lbnQub25mb2N1cyA9IChlKSA9PlxuXG5cdFx0XHRAZm9jdXNDb2xvciA/PSBcIiMwMDBcIlxuXG5cdFx0XHQjIEVtaXQgZm9jdXMgZXZlbnRcblx0XHRcdEBlbWl0KEV2ZW50cy5JbnB1dEZvY3VzLCBldmVudClcblxuXHRcdFx0QF9pc0ZvY3VzZWQgPSB0cnVlXG5cblx0XHQjIEVtaXQgYmx1ciBldmVudFxuXHRcdEBfaW5wdXRFbGVtZW50Lm9uYmx1ciA9IChlKSA9PlxuXHRcdFx0QGVtaXQoRXZlbnRzLklucHV0Qmx1ciwgZXZlbnQpXG5cblx0XHRcdEBfaXNGb2N1c2VkID0gZmFsc2VcblxuXHRcdCMgVG8gZmlsdGVyIGlmIHZhbHVlIGNoYW5nZWQgbGF0ZXJcblx0XHRjdXJyZW50VmFsdWUgPSB1bmRlZmluZWRcblxuXHRcdCMgU3RvcmUgY3VycmVudCB2YWx1ZVxuXHRcdEBfaW5wdXRFbGVtZW50Lm9ua2V5ZG93biA9IChlKSA9PlxuXHRcdFx0Y3VycmVudFZhbHVlID0gQHZhbHVlXG5cblx0XHRcdCMgSWYgY2FwcyBsb2NrIGtleSBpcyBwcmVzc2VkIGRvd25cblx0XHRcdGlmIGUud2hpY2ggaXMgMjBcblx0XHRcdFx0QGVtaXQoRXZlbnRzLkNhcHNMb2NrS2V5LCBldmVudClcblxuXHRcdFx0IyBJZiBzaGlmdCBrZXkgaXMgcHJlc3NlZFxuXHRcdFx0aWYgZS53aGljaCBpcyAxNlxuXHRcdFx0XHRAZW1pdChFdmVudHMuU2hpZnRLZXksIGV2ZW50KVxuXG5cdFx0QF9pbnB1dEVsZW1lbnQub25rZXl1cCA9IChlKSA9PlxuXG5cdFx0XHRpZiBjdXJyZW50VmFsdWUgaXNudCBAdmFsdWVcblx0XHRcdFx0QGVtaXQoXCJjaGFuZ2U6dmFsdWVcIiwgQHZhbHVlKVxuXHRcdFx0XHRAZW1pdChFdmVudHMuVmFsdWVDaGFuZ2UsIEB2YWx1ZSlcblxuXHRcdFx0IyBJZiBlbnRlciBrZXkgaXMgcHJlc3NlZFxuXHRcdFx0aWYgZS53aGljaCBpcyAxM1xuXHRcdFx0XHRAZW1pdChFdmVudHMuRW50ZXJLZXksIGV2ZW50KVxuXG5cdFx0XHQjIElmIGJhY2tzcGFjZSBrZXkgaXMgcHJlc3NlZFxuXHRcdFx0aWYgZS53aGljaCBpcyA4XG5cdFx0XHRcdEBlbWl0KEV2ZW50cy5CYWNrc3BhY2VLZXksIGV2ZW50KVxuXG5cdFx0XHQjIElmIHNwYWNlIGtleSBpcyBwcmVzc2VkXG5cdFx0XHRpZiBlLndoaWNoIGlzIDMyXG5cdFx0XHRcdEBlbWl0KEV2ZW50cy5TcGFjZUtleSwgZXZlbnQpXG5cblx0XHRcdCMgSWYgY2FwcyBsb2NrIGtleSBpcyBwcmVzc2VkIHVwXG5cdFx0XHRpZiBlLndoaWNoIGlzIDIwXG5cdFx0XHRcdEBlbWl0KEV2ZW50cy5DYXBzTG9ja0tleSwgZXZlbnQpXG5cblx0X3NldFBsYWNlaG9sZGVyOiAodGV4dCkgPT5cblx0XHRAX2lucHV0RWxlbWVudC5wbGFjZWhvbGRlciA9IHRleHRcblxuXHRfc2V0UGxhY2Vob2xkZXJDb2xvcjogKGlkLCBjb2xvcikgLT5cblx0XHRkb2N1bWVudC5zdHlsZVNoZWV0c1swXS5hZGRSdWxlKFwiLmlucHV0I3tpZH06Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXJcIiwgXCJjb2xvcjogI3tjb2xvcn1cIilcblxuXHRfY2hlY2tEZXZpY2VQaXhlbFJhdGlvOiAtPlxuXHRcdHJhdGlvID0gKFNjcmVlbi53aWR0aCAvIEZyYW1lci5EZXZpY2Uuc2NyZWVuLndpZHRoKVxuXHRcdGlmIFV0aWxzLmlzRGVza3RvcCgpXG5cdFx0XHQjIEAzeFxuXHRcdFx0aWYgcmF0aW8gPCAwLjUgYW5kIHJhdGlvID4gMC4yNVxuXHRcdFx0XHRkcHIgPSAxIC0gcmF0aW9cblx0XHRcdCMgQDR4XG5cdFx0XHRlbHNlIGlmIHJhdGlvIGlzIDAuMjVcblx0XHRcdFx0ZHByID0gMSAtIChyYXRpbyAqIDIpXG5cdFx0XHQjIEAxeCwgQDJ4XG5cdFx0XHRlbHNlXG5cdFx0XHRcdGRwciA9IFV0aWxzLmRldmljZVBpeGVsUmF0aW8oKVxuXHRcdFx0aWYgRnJhbWVyLkRldmljZS5kZXZpY2VUeXBlIGlzIFwiZnVsbHNjcmVlblwiXG5cdFx0XHRcdGRwciA9IDJcblx0XHRlbHNlXG5cdFx0XHQjIEAzeFxuXHRcdFx0aWYgcmF0aW8gPCAwLjUgYW5kIHJhdGlvID4gMC4yNVxuXHRcdFx0XHRkcHIgPSAxIC0gcmF0aW9cblx0XHRcdCMgQDR4XG5cdFx0XHRlbHNlIGlmIHJhdGlvIGlzIDAuMjVcblx0XHRcdFx0ZHByID0gMSAtIChyYXRpbyAqIDIpXG5cdFx0XHQjIEAxeCwgQDJ4XG5cdFx0XHRlbHNlIGlmIHJhdGlvIGlzIDAuNVxuXHRcdFx0XHRkcHIgPSAxXG5cblx0XHRyZXR1cm4gZHByXG5cblx0X3NldFRleHRQcm9wZXJ0aWVzOiAobGF5ZXIpID0+XG5cblx0XHRkcHIgPSBAX2NoZWNrRGV2aWNlUGl4ZWxSYXRpbygpXG5cblx0XHRpZiBub3QgQF9pc0Rlc2lnbkxheWVyXG5cdFx0XHRAX2lucHV0RWxlbWVudC5zdHlsZS5mb250RmFtaWx5ID0gbGF5ZXIuZm9udEZhbWlseVxuXHRcdFx0QF9pbnB1dEVsZW1lbnQuc3R5bGUuZm9udFNpemUgPSBcIiN7bGF5ZXIuZm9udFNpemUgLyBkcHJ9cHhcIlxuXHRcdFx0QF9pbnB1dEVsZW1lbnQuc3R5bGUuZm9udFdlaWdodCA9IGxheWVyLmZvbnRXZWlnaHQgPyBcIm5vcm1hbFwiXG5cdFx0XHRAX2lucHV0RWxlbWVudC5zdHlsZS5wYWRkaW5nVG9wID0gXCIje2xheWVyLnBhZGRpbmcudG9wICogMiAvIGRwcn1weFwiXG5cdFx0XHRAX2lucHV0RWxlbWVudC5zdHlsZS5wYWRkaW5nUmlnaHQgPSBcIiN7bGF5ZXIucGFkZGluZy5ib3R0b20gKiAyIC8gZHByfXB4XCJcblx0XHRcdEBfaW5wdXRFbGVtZW50LnN0eWxlLnBhZGRpbmdCb3R0b20gPSBcIiN7bGF5ZXIucGFkZGluZy5yaWdodCAqIDIgLyBkcHJ9cHhcIlxuXHRcdFx0QF9pbnB1dEVsZW1lbnQuc3R5bGUucGFkZGluZ0xlZnQgPSBcIiN7bGF5ZXIucGFkZGluZy5sZWZ0ICogMiAvIGRwcn1weFwiXG5cblx0XHRAX2lucHV0RWxlbWVudC5zdHlsZS53aWR0aCA9IFwiI3soKGxheWVyLndpZHRoIC0gbGF5ZXIucGFkZGluZy5sZWZ0ICogMikgKiAyIC8gZHByKX1weFwiXG5cdFx0QF9pbnB1dEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gXCIje2xheWVyLmhlaWdodCAqIDIgLyBkcHJ9cHhcIlxuXHRcdEBfaW5wdXRFbGVtZW50LnN0eWxlLm91dGxpbmUgPSBcIm5vbmVcIlxuXHRcdEBfaW5wdXRFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidHJhbnNwYXJlbnRcIlxuXHRcdEBfaW5wdXRFbGVtZW50LnN0eWxlLmN1cnNvciA9IFwiYXV0b1wiXG5cdFx0QF9pbnB1dEVsZW1lbnQuc3R5bGUud2Via2l0QXBwZWFyYW5jZSA9IFwibm9uZVwiXG5cdFx0QF9pbnB1dEVsZW1lbnQuc3R5bGUucmVzaXplID0gXCJub25lXCJcblx0XHRAX2lucHV0RWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCJcblx0XHRAX2lucHV0RWxlbWVudC5zdHlsZS53ZWJraXRGb250U21vb3RoaW5nID0gXCJhbnRpYWxpYXNlZFwiXG5cblx0YWRkQmFja2dyb3VuZExheWVyOiAobGF5ZXIpIC0+XG5cdFx0QF9iYWNrZ3JvdW5kID0gbGF5ZXJcblx0XHRAX2JhY2tncm91bmQucGFyZW50ID0gQFxuXHRcdEBfYmFja2dyb3VuZC5uYW1lID0gXCJiYWNrZ3JvdW5kXCJcblx0XHRAX2JhY2tncm91bmQueCA9IEBfYmFja2dyb3VuZC55ID0gMFxuXHRcdEBfYmFja2dyb3VuZC5fZWxlbWVudC5hcHBlbmRDaGlsZChAX2lucHV0RWxlbWVudClcblxuXHRcdHJldHVybiBAX2JhY2tncm91bmRcblxuXHRhZGRQbGFjZUhvbGRlckxheWVyOiAobGF5ZXIpIC0+XG5cblx0XHRAX2lzRGVzaWduTGF5ZXIgPSB0cnVlXG5cdFx0QF9pbnB1dEVsZW1lbnQuY2xhc3NOYW1lID0gXCJpbnB1dFwiICsgbGF5ZXIuaWRcblx0XHRAcGFkZGluZyA9IGxlZnQ6IDAsIHRvcDogMFxuXG5cdFx0QF9zZXRQbGFjZWhvbGRlcihsYXllci50ZXh0KVxuXHRcdEBfc2V0VGV4dFByb3BlcnRpZXMobGF5ZXIpXG5cdFx0QF9zZXRQbGFjZWhvbGRlckNvbG9yKGxheWVyLmlkLCBsYXllci5jb2xvcilcblxuXHRcdEBvbiBcImNoYW5nZTpjb2xvclwiLCA9PlxuXHRcdFx0QF9zZXRQbGFjZWhvbGRlckNvbG9yKGxheWVyLmlkLCBAY29sb3IpXG5cblx0XHQjIFJlbW92ZSBvcmlnaW5hbCBsYXllclxuXHRcdGxheWVyLnZpc2libGUgPSBmYWxzZVxuXHRcdEBfZWxlbWVudEhUTUwuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSBcIlwiXG5cblx0XHQjIENvbnZlcnQgcG9zaXRpb24gdG8gcGFkZGluZ1xuXHRcdGRwciA9IEBfY2hlY2tEZXZpY2VQaXhlbFJhdGlvKClcblx0XHRAX2lucHV0RWxlbWVudC5zdHlsZS5mb250U2l6ZSA9IFwiI3tsYXllci5mb250U2l6ZSAqIDIgLyBkcHJ9cHhcIlxuXHRcdEBfaW5wdXRFbGVtZW50LnN0eWxlLnBhZGRpbmdUb3AgPSBcIiN7bGF5ZXIueSAqIDIgLyBkcHJ9cHhcIlxuXHRcdEBfaW5wdXRFbGVtZW50LnN0eWxlLnBhZGRpbmdMZWZ0ID0gXCIje2xheWVyLnggKiAyIC8gZHByfXB4XCJcblx0XHRAX2lucHV0RWxlbWVudC5zdHlsZS53aWR0aCA9IFwiI3soQF9iYWNrZ3JvdW5kLndpZHRoIC0gbGF5ZXIueCAqIDIpICogMiAvIGRwcn1weFwiXG5cblx0XHRpZiBAbXVsdGlMaW5lXG5cdFx0XHRAX2lucHV0RWxlbWVudC5zdHlsZS5oZWlnaHQgPSBcIiN7QF9iYWNrZ3JvdW5kLmhlaWdodCAqIDIgLyBkcHJ9cHhcIlxuXG5cdFx0QG9uIFwiY2hhbmdlOnBhZGRpbmdcIiwgPT5cblx0XHRcdEBfaW5wdXRFbGVtZW50LnN0eWxlLnBhZGRpbmdUb3AgPSBcIiN7QHBhZGRpbmcudG9wICogMiAvIGRwcn1weFwiXG5cdFx0XHRAX2lucHV0RWxlbWVudC5zdHlsZS5wYWRkaW5nTGVmdCA9IFwiI3tAcGFkZGluZy5sZWZ0ICogMiAvIGRwcn1weFwiXG5cblx0XHRyZXR1cm4gQF9wbGFjZWhvbGRlclxuXG5cdGZvY3VzOiAtPlxuXHRcdEBfaW5wdXRFbGVtZW50LmZvY3VzKClcblxuXHRAZGVmaW5lIFwidmFsdWVcIixcblx0XHRnZXQ6IC0+IEBfaW5wdXRFbGVtZW50LnZhbHVlXG5cdFx0c2V0OiAodmFsdWUpIC0+XG5cdFx0XHRAX2lucHV0RWxlbWVudC52YWx1ZSA9IHZhbHVlXG5cblx0QGRlZmluZSBcImZvY3VzQ29sb3JcIixcblx0XHRnZXQ6IC0+XG5cdFx0XHRAX2lucHV0RWxlbWVudC5zdHlsZS5jb2xvclxuXHRcdHNldDogKHZhbHVlKSAtPlxuXHRcdFx0QF9pbnB1dEVsZW1lbnQuc3R5bGUuY29sb3IgPSB2YWx1ZVxuXG5cdEBkZWZpbmUgXCJtdWx0aUxpbmVcIiwgQHNpbXBsZVByb3BlcnR5KFwibXVsdGlMaW5lXCIsIGZhbHNlKVxuXG5cdCMgTmV3IENvbnN0cnVjdG9yXG5cdEB3cmFwID0gKGJhY2tncm91bmQsIHBsYWNlaG9sZGVyLCBvcHRpb25zKSAtPlxuXHRcdHJldHVybiB3cmFwSW5wdXQobmV3IEAob3B0aW9ucyksIGJhY2tncm91bmQsIHBsYWNlaG9sZGVyLCBvcHRpb25zKVxuXG5cdG9uRW50ZXJLZXk6IChjYikgLT4gQG9uKEV2ZW50cy5FbnRlcktleSwgY2IpXG5cdG9uU3BhY2VLZXk6IChjYikgLT4gQG9uKEV2ZW50cy5TcGFjZUtleSwgY2IpXG5cdG9uQmFja3NwYWNlS2V5OiAoY2IpIC0+IEBvbihFdmVudHMuQmFja3NwYWNlS2V5LCBjYilcblx0b25DYXBzTG9ja0tleTogKGNiKSAtPiBAb24oRXZlbnRzLkNhcHNMb2NrS2V5LCBjYilcblx0b25TaGlmdEtleTogKGNiKSAtPiBAb24oRXZlbnRzLlNoaWZ0S2V5LCBjYilcblx0b25WYWx1ZUNoYW5nZTogKGNiKSAtPiBAb24oRXZlbnRzLlZhbHVlQ2hhbmdlLCBjYilcblx0b25JbnB1dEZvY3VzOiAoY2IpIC0+IEBvbihFdmVudHMuSW5wdXRGb2N1cywgY2IpXG5cdG9uSW5wdXRCbHVyOiAoY2IpIC0+IEBvbihFdmVudHMuSW5wdXRCbHVyLCBjYilcblxud3JhcElucHV0ID0gKGluc3RhbmNlLCBiYWNrZ3JvdW5kLCBwbGFjZWhvbGRlcikgLT5cblx0aWYgbm90IChiYWNrZ3JvdW5kIGluc3RhbmNlb2YgTGF5ZXIpXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW5wdXRMYXllciBleHBlY3RzIGEgYmFja2dyb3VuZCBsYXllci5cIilcblxuXHRpZiBub3QgKHBsYWNlaG9sZGVyIGluc3RhbmNlb2YgVGV4dExheWVyKVxuXHRcdHRocm93IG5ldyBFcnJvcihcIklucHV0TGF5ZXIgZXhwZWN0cyBhIHRleHQgbGF5ZXIuXCIpXG5cblx0aW5wdXQgPSBpbnN0YW5jZVxuXG5cdGlucHV0Ll9fZnJhbWVySW5zdGFuY2VJbmZvID89IHt9XG5cdGlucHV0Ll9fZnJhbWVySW5zdGFuY2VJbmZvPy5uYW1lID0gaW5zdGFuY2UuY29uc3RydWN0b3IubmFtZVxuXG5cdGlucHV0LmZyYW1lID0gYmFja2dyb3VuZC5mcmFtZVxuXHRpbnB1dC5wYXJlbnQgPSBiYWNrZ3JvdW5kLnBhcmVudFxuXHRpbnB1dC5pbmRleCA9IGJhY2tncm91bmQuaW5kZXhcblxuXHRpbnB1dC5hZGRCYWNrZ3JvdW5kTGF5ZXIoYmFja2dyb3VuZClcblx0aW5wdXQuYWRkUGxhY2VIb2xkZXJMYXllcihwbGFjZWhvbGRlcilcblxuXHRyZXR1cm4gaW5wdXQiLCJjbGFzcyBleHBvcnRzLmlucHV0Q29tcCBleHRlbmRzIExheWVyXG5cdFxuXHQjIEV2ZW50cy52YWx1ZUNoYW5nZSAgPSBcImlucHV0Lk9uQ2hhbmdlXCJcblx0RXZlbnRzLlZhbHVlQ2hhbmdlID0gXCJWYWx1ZUNoYW5nZVwiXG5cdFxuXHRjb25zdHJ1Y3RvcjogKEBvcHRpb25zPXt9KSAtPlxuXHRcdEBvcHRpb25zLmNMYWJlbCA/PVwiTGFiZWxcIlxuXHRcdEBvcHRpb25zLnBsYWNlaG9sZGVyID89XCJOb3QgY29ubmVjdGVkXCJcblx0XHRAb3B0aW9ucy5wbGFjZUhvbGRlckNvbG9yID89XCJyZWRcIlxuXHRcdHN1cGVyIEBvcHRpb25zXG5cdFx0c3R5bGVzPSByZXF1aXJlIFwid2l4U3R5bGVzXCJcblx0XHRjb2xvcnM9IHJlcXVpcmUgXCJ3aXhDb2xvcnNcIlxuXHRcdGN1cnJlbnRWYWx1ZSA9IHVuZGVmaW5lZFxuXHRcdGlzRm9jdXNlZCA9IGZhbHNlXG5cblx0XHR0aGlzLmJhY2tncm91bmRDb2xvcj1cInRyYW5zcGFyZW50XCJcblxuXHRcdEAuc3R5bGU9XG5cdFx0XHRwb3NpdGlvbjpcInJlbGF0aXZlXCJcblx0XHRcdHdpZHRoOlwiMTAwJVwiXG5cdFx0XHRoZWlnaHQ6XCI4NHB4XCJcblx0XHRcdGJvcmRlckJvdHRvbTpcIjFweCBzb2xpZCAjRDlFMUU4XCJcblx0XHRcdGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCJcblxuXHRcdGVuYWJsZXIgPSB0cnVlXG5cdFx0bWM9dGhpc1xuXHRcdGxhYmVsPSBuZXcgTGF5ZXJcblx0XHRcdHBhcmVudDpAXG5cdFx0XHRodG1sOkBvcHRpb25zLmNMYWJlbFxuXHRcdFx0c3R5bGU6c3R5bGVzLnQwMlxuXG5cdFxuXHRcdGxhYmVsLnN0eWxlPVxuXHRcdFx0aGVpZ2h0OlwiYXV0b1wiXG5cdFx0XHR3aWR0aDpcImF1dG9cIlxuXHRcdFx0cG9zaXRpb246XCJyZWxhdGl2ZVwiXG5cdFx0XHRjb2xvcjpjb2xvcnMuZDJcblx0XHRcdHBhZGRpbmc6XCIxNnB4IDI0cHggN3B4IDI0cHhcIlxuXHRcdFx0YmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHRcdFxuXHRcdFxuXHRcdGlucHV0U3R5bGU9XG5cdFx0XHRhcHBlYXJhbmNlOiBcIm5vbmVcIlxuXHRcdFx0Ym9yZGVyOlwiMXB4IHNvbGlkICNmZmZmZmZcIlxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjZweFwiXG5cdFx0XHRiYWNrZ3JvdW5kOlwiI2ZmZmZmZlwiXG5cdFx0XHRwb3NpdGlvbjpcInJlbGF0aXZlXCJcblx0XHRcdGhlaWdodDpcIjM2cHhcIlxuXHRcdFx0bWFyZ2luOlwiMzVweCAxMnB4XCJcblx0XHRcdHBhZGRpbmc6XCIwcHggMTJweFwiXG5cdFx0XHR0ZXh0QWxpZ246IFwibGVmdFwiXG5cdFx0XHRmb250RmFtaWx5OlwiZm9udC1mYW1pbHk6IEhlbHZldGljYU5ldWVXMDEtNTVSb21hLEhlbHZldGljYU5ldWVXMDItNTVSb21hLEhlbHZldGljYU5ldWVXMTAtNTVSb21hLEhlbHZldGljYSBOZXVlLEhlbHZldGljYSxBcmlhbCzjg6HjgqTjg6rjgqosbWVpcnlvLOODkuODqeOCruODjuinkuOCtCBwcm8gdzMsaGlyYWdpbm8ga2FrdSBnb3RoaWMgcHJvLHNhbnMtc2VyaWY7XCJcblx0XHRcdGZvbnRTaXplOlwiMThweFwiXG5cdFx0XHRcIi13ZWJraXQtYXBwZWFyYW5jZVwiOiBcIm5vbmVcIlxuXHRcdFx0b3V0bGluZTogXCJub25lXCJcblxuXHRcdFxuXHRcdEBwaWNrZXIgPW5ldyBMYXllclxuXHRcdFx0cGFyZW50OnRoaXNcblx0XHRcdHdpZHRoOjI4OFxuXHRcdFx0aGVpZ2h0OjBcblx0XHRcdGh0bWw6JzxpbnB1dCAgdHlwZT1cInRleHRcIiBuYW1lPVwiZGVtb1wiPjxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIj46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIgeyBjb2xvcjogcmdiKDEyMiwgMTIyLCAxMjIpIH07PC9zdHlsZT4nXG5cblx0XHRcblx0XHRAaW5wdXQgPSBAcGlja2VyLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKVxuXG5cdFx0QHBpY2tlci5vbk1vdXNlT3ZlciA9PlxuXHRcdFx0aWYgIWlzRm9jdXNlZFxuXHRcdFx0XHRAaW5wdXQuc3R5bGUuYmFja2dyb3VuZENvbG9yPWNvbG9ycy5iNFxuXG5cdFx0QHBpY2tlci5vbk1vdXNlT3V0ID0+XG5cdFx0XHRAaW5wdXQuc3R5bGUuYmFja2dyb3VuZENvbG9yPVwiI2ZmZmZmZlwiXG5cblx0XHRAaW5wdXQucGxhY2Vob2xkZXIgPSBAb3B0aW9ucy5wbGFjZWhvbGRlciBcblx0XHRAaW5wdXQuc3R5bGVba2V5XSAgPSB2YWwgZm9yIGtleSwgdmFsIG9mIGlucHV0U3R5bGVcblx0XHRAaW5wdXQub25mb2N1cyA9ID0+XG5cdFx0XHRAaW5wdXQuc3R5bGUuYm9yZGVyQ29sb3I9XCIjQzFFNEZFXCJcblx0XHRcdEBpbnB1dC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCIjZmZmZmZmXCJcblx0XHRcdGlzRm9jdXNlZCA9IHRydWVcblx0XHRAaW5wdXQub25ibHVyID0gPT5cblx0XHRcdEBpbnB1dC5zdHlsZS5ib3JkZXJDb2xvcj1cIiNmZmZmZmZcIlxuXHRcdFx0aXNGb2N1c2VkID0gZmFsc2Vcblx0XHRAaW5wdXQub25rZXlkb3duID0gKGUpIC0+XG5cdFx0XHRjdXJyZW50VmFsdWUgPSBAdmFsdWVcblx0XHRcblx0XHRAaW5wdXQub25rZXl1cCA9IChlKSA9PlxuXHRcdFx0aWYgY3VycmVudFZhbHVlIGlzbnQgQHZhbHVlXG5cdFx0XHRcdEBlbWl0KEV2ZW50cy5WYWx1ZUNoYW5nZSwgQHZhbHVlKSIsIiMgQWRkIHRoZSBmb2xsb3dpbmcgbGluZSB0byB5b3VyIHByb2plY3QgaW4gRnJhbWVyIFN0dWRpby4gXG4jIG15TW9kdWxlID0gcmVxdWlyZSBcIm15TW9kdWxlXCJcbiMgUmVmZXJlbmNlIHRoZSBjb250ZW50cyBieSBuYW1lLCBsaWtlIG15TW9kdWxlLm15RnVuY3Rpb24oKSBvciBteU1vZHVsZS5teVZhclxuXG5leHBvcnRzLmNsb3NlSWNvbiA9ICdcbjxzdmcgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjI1XCIgPjxkZWZzPjxwYXRoIGQ9XCJNMCAwaDF2MUgwVjB6bTEgMWgxdjFIMVYxem0xIDFoMXYxSDJWMnptMSAxaDF2MUgzVjN6bTEgMWgxdjFINFY0em0xIDFoMXYxSDVWNXptMSAxaDF2MUg2VjZ6bTEgMWgxdjFIN1Y3em0xIDFoMXYxSDhWOHptMC04aDF2MUg4VjB6TTcgMWgxdjFIN1Yxek02IDJoMXYxSDZWMnpNNSAzaDF2MUg1VjN6TTMgNWgxdjFIM1Y1ek0yIDZoMXYxSDJWNnpNMSA3aDF2MUgxVjd6TTAgOGgxdjFIMFY4elwiIC8+PC9kZWZzPjxnIGZpbGw9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPjxjaXJjbGUgZmlsbD1cIiMyQjgxQ0JcIiBjeD1cIjEyLjVcIiBjeT1cIjEyLjVcIiByPVwiMTIuNVwiLz48ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoOCA4KVwiPjxtYXNrICBmaWxsPVwiI2ZmZlwiPjx1c2UgeGxpbms6aHJlZj1cIiNhXCIvPjwvbWFzaz48dXNlIGZpbGw9XCIjMTYyRDNEXCIgeGxpbms6aHJlZj1cIiNhXCIvPjxnIG1hc2s9XCJ1cmwoI2IpXCIgZmlsbD1cIiNGRkZcIj48cGF0aCBkPVwiTTAgMGg5djlIMHpcIi8+PC9nPjwvZz48L2c+PC9zdmc+J1xuXG5leHBvcnRzLmhlbHBJY29uID0gJ1xuPHN2ZyB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjVcIiA+PGRlZnM+PHBhdGggZD1cIk02LjAwOS44MDVjLjMwOS4yNjQuNTUyLjU4My43MjkuOTYuMTc0LjM4LjI2Mi44MDIuMjYyIDEuMjczIDAgLjYxNS0uMTM1IDEuMTI5LS40MDMgMS41NTdhNi4zNzcgNi4zNzcgMCAwIDEtMS4wMzQgMS4yMmMtLjM1NS4zNS0uNjI5LjU5LS44MjcuNzc3LS4yLjE4Ny0uMzQ4LjMxNy0uNDQ4LjUxLS4wOTguMTkyLS4xNjYuMzAzLS4xOTkuNTY4LS4wMzIuMjYyLS4wNTUuOTE4LS4wNjUuOTE4SDMuMWMwLTEuNTguNDAxLTEuOTg0Ljg5LTIuNTE0LjI0LS4yNTcuNTQtLjUzNy44OTMtLjg1NmE0LjExIDQuMTEgMCAwIDAgLjc3Mi0uOTU0Yy4yMDMtLjM1LjMwNC0uNzQxLjMwNC0xLjE3YTIuMTA1IDIuMTA1IDAgMCAwLS43MDMtMS42MDUgMi40MjkgMi40MjkgMCAwIDAtLjc1My0uNDUgMi41MzEgMi41MzEgMCAwIDAtLjkxLS4xNjVjLS40NTIgMC0uODQ2LjA3OC0xLjE4Mi4yMzJhMi4zMSAyLjMxIDAgMCAwLS44MzYuNjM1IDIuNzggMi43OCAwIDAgMC0uNDk2Ljk1Qy45NyAzLjA1NS45MiAzLjg4Ni45MyAzLjg4NkgwYzAtMS42OS41NTgtMi40ODguODczLTIuODIzQTMuMjI0IDMuMjI0IDAgMCAxIDIuMDUuMjhjLjQ2Ny0uMTg2IDEtLjI4IDEuNTk0LS4yOC40NjQgMCAuODk1LjA2OSAxLjMuMjA1LjQwMi4xMzcuNzU2LjMzNyAxLjA2Ni42ek0zLjEgMTJ2LTEuNzk3aC45MjRWMTJIMy4xelwiIC8+PC9kZWZzPjxnIGZpbGw9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPjxjaXJjbGUgZmlsbD1cIiMyQjgxQ0JcIiBjeD1cIjEyLjVcIiBjeT1cIjEyLjVcIiByPVwiMTIuNVwiLz48ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoOSA2KVwiPjxtYXNrICBmaWxsPVwiI2ZmZlwiPjx1c2UgeGxpbms6aHJlZj1cIiNhXCIvPjwvbWFzaz48dXNlIGZpbGw9XCIjMTYyRDNEXCIgeGxpbms6aHJlZj1cIiNhXCIvPjxnIG1hc2s9XCJ1cmwoI2IpXCIgZmlsbD1cIiNGRkZcIj48cGF0aCBkPVwiTTAgMGg3djEySDB6XCIvPjwvZz48L2c+PC9nPjwvc3ZnPlxuJ1xuIFxuZXhwb3J0cy5kcm9wZG93bj0nPHN2ZyB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGcgZmlsbD1cIm5vbmVcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCI+PGNpcmNsZSBzdHJva2U9XCIjQjFEREY4XCIgc3Ryb2tlLXdpZHRoPVwiMlwiIGN4PVwiMTIuNVwiIGN5PVwiMTIuNVwiIHI9XCIxMS41XCIvPjxwYXRoIGQ9XCJNNy4zMjUgMTEuMDNjMCAuMTkuMDguMzcyLjIyMi41bDQuNzQgNC4zOTVhLjc5NC43OTQgMCAwIDAgMS4wNjEgMGw0Ljc0LTQuNmEuNjY4LjY2OCAwIDAgMCAwLS45OTIuNzkxLjc5MSAwIDAgMC0xLjA2NCAwbC00LjIxIDQuMTEtNC4yMTEtMy45MDVhLjc5MS43OTEgMCAwIDAtMS4wNjQgMCAuNjcyLjY3MiAwIDAgMC0uMjE0LjQ5MnpcIiBmaWxsPVwiIzM4OTlFQ1wiLz48L2c+PC9zdmc+J1xuXG5leHBvcnRzLmRhdGFzZXQgPSAnXG48c3ZnIHdpZHRoPVwiMzBcIiBoZWlnaHQ9XCIyNlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48ZyBmaWxsLXJ1bGU9XCJub256ZXJvXCIgZmlsbD1cIiMzRDNEM0RcIj48cGF0aCBkPVwiTTEuNTQ0IDYuNTAyQzMuNjM0IDcuNDIyIDYuNjQ3IDggMTAgOGMzLjM1MiAwIDYuMzY2LS41NzggOC40NTUtMS40OThDMTkuNCA2LjA4NiAyMCA1LjA4OSAyMCA0YzAtMS4wOS0uNi0yLjA4Ni0xLjU0NC0yLjUwMkMxNi4zNjYuNTc4IDEzLjM1MyAwIDEwLjAwMSAwIDYuNjQ3IDAgMy42MzMuNTc4IDEuNTQ0IDEuNDk4LjYgMS45MTQgMCAyLjkxMSAwIDRjMCAxLjA5LjYgMi4wODYgMS41NDQgMi41MDJNMS41MDYgMTEuNzA2QzMuNTQzIDEyLjUgNi40ODIgMTMgOS43NTIgMTNjLjcxIDAgMS4zOTgtLjAyOCAyLjA3LS4wNzJBNi44NzEgNi44NzEgMCAwIDEgMTQgOS43MzZjLTEuMzEuMTkzLTIuNzQyLjMwMi00LjI0OC4zMDJDNS41NTMgMTAuMDM4IDIuMDkgOS4yMTUgMCA4djEuNTQ1YzAgLjk0LjU4NSAxLjgwMSAxLjUwNiAyLjE2TTEuNjkzIDE1Ljg0MmMxLjQ5LjUzNyAzLjQxMy45MzkgNS41ODMgMS4xNThhNi4xODQgNi4xODQgMCAwIDEgMS4yMy0uNTc0Yy4yOTMtLjg3Ny44MTctMS42NjcgMS40OTQtMi4zMzQtNC4zMDktLjEwOC03LjY1LS45Mi0xMC0yLjA5MnYxLjYwMmMwIC45NzUuNjU4IDEuODY4IDEuNjkzIDIuMjRNMCAxOHYxLjcyNGMwIDEuMDUuNDg2IDIuMDEgMS4yNTIgMi40MTEuNjUzLjM0MyAxLjQyLjYzNSAyLjI3Ljg2NS0uMDE3LS4xOTgtLjA0Ni0uMzkzLS4wNDYtLjU5Ni4wMDEtLjk0LjE5NS0xLjgyLjUyNC0yLjU5NUMyLjMxNCAxOS40MS44NjkgMTguNzggMCAxOE05LjE5MSAyMy45MjJjLjE3NC4wMDMuMzQ2LjAxNS41MTkuMDE1aC0uMDA1Yy0uMTcyIDAtLjM0MS0uMDEyLS41MTQtLjAxNXptLjYwNy0zLjE4NnYuMDAxbC0uMDA3LS4wMDFoLjAwN3pNMTkuMDggMTBjLTUuMjgyIDAtNS40NiA1LjMzMy01LjQ2IDUuMzMzLTIuMTg0IDAtNC4zNDYgMi4xMzQtNC4zNDYgNC4yNTRDOC4zMzcgMTkuNTg3IDYgMjAuMjcgNiAyMi44IDYgMjUuMzMxIDcuNzggMjYgOS4yNSAyNmguMDA1bDE1LjMwMy0uMDJDMjcuNTY1IDI1Ljk3OSAzMCAyMy41OTUgMzAgMjAuNjU4YzAtMi45MzktMi40NC01LjMyNC01LjQ0OC01LjMyNGgtLjAxMlMyNC4zNiAxMCAxOS4wOCAxMHpcIi8+PC9nPjwvc3ZnPicgICBcblxuZXhwb3J0cy5nYWxsZXJ5ID0gJzxzdmcgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMTggMTMuNjNsLTIuOTY4LTMuN2EuNDk1LjQ5NSAwIDAgMC0uMzYyLS4xODYuNDU2LjQ1NiAwIDAgMC0uMzguMTQ1bC00LjA4NSA0LjA2NC0xLjYzNi0xLjExN2EuNTAxLjUwMSAwIDAgMC0uNTk3LjAyNUw2IDE0LjQ2VjcuNWEuNS41IDAgMCAxIC41LS41aDExYS41LjUgMCAwIDEgLjUuNXY2LjEzem0wIDIuODdhLjUuNSAwIDAgMS0uNS41SDZ2LTEuMjUxbDIuMzEzLTEuODc2IDEuNjcgMS4xMzlhLjQ5OS40OTkgMCAwIDAgLjYzNC0uMDZMMTQuNiAxMC45OWwzLjQgNC4yNHYxLjI3em0tMTMtOXY3LjM2N2wtLjk2OS4xMjljLS4yOC4wMzQtLjU1LS4xNDMtLjU4OS0uMzkyTDIuMDA1IDUuMDY3YS40MS40MSAwIDAgMSAuMDgxLS4zMTIuNTIyLjUyMiAwIDAgMSAuMzU0LS4ybDExLjYwNy0xLjU0MmMuMjU3IDAgLjQ3Ni4xNy41MTEuMzk3bC4zOSAyLjU5SDYuNUExLjUgMS41IDAgMCAwIDUgNy41ek0xNy41IDZoLTEuNTRsLS40MTMtMi43NGMtLjExOC0uNzc1LS43MTQtMS4zNTgtMS41NDctMS4yNDZMMi4zMDggMy41NjZhMS41MjYgMS41MjYgMCAwIDAtMS4wMi41OSAxLjM5OSAxLjM5OSAwIDAgMC0uMjcyIDEuMDZsMS40MzcgOS41MzdjLjEwOC43MS43NTMgMS4yNDcgMS41IDEuMjQ3LjA3IDAgLjE0LS4wMDUuMjEtLjAxNUw1IDE1Ljg3NHYuNjI2QTEuNSAxLjUgMCAwIDAgNi41IDE4aDExYTEuNSAxLjUgMCAwIDAgMS41LTEuNXYtOUExLjUgMS41IDAgMCAwIDE3LjUgNnpNOSA4Yy0uNTMgMC0xIC40Ny0xIDFzLjQ3IDEgMSAxYy41MzEgMCAxLS40NyAxLTFzLS40NjktMS0xLTF6XCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiLz48L3N2Zz4nIFxuXG5leHBvcnRzLm51bWJlciA9ICc8c3ZnIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTEzLjk0IDNsLS40OTQgMy45NTMtNS4wMTUuMDZMOC45MzMgM2gtLjk5Mkw3LjQ0IDcuMDA4IDQgNy4wMDFWOGgzLjMxNmwtLjYyNSA1SDR2MS4wMDFoMi41NjdMNi4wNjcgMThoLjk5MmwuNS0zLjk5OWg1LjAwOEwxMi4wNjYgMThoLjk5M2wuNS0zLjk5OUgxN1YxM2gtMy4zMTZsLjYyMy01SDE3di0uOTk5bC0yLjU2OC4wMDEuNS00LjAwMmgtLjk5MnptLTEuMTkyIDVoLjU2NmwtLjYyMiA1SDcuNjk4bC41LTVIMTIuNzQ4elwiICBmaWxsLXJ1bGU9XCJldmVub2RkXCIvPjwvc3ZnPidcblxuZXhwb3J0cy5hZGRyZXNzID0gJzxzdmcgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMTAuNSAxNi43ODZDOS4yODQgMTUuOSA1IDEyLjM0NSA1IDguODA3YzAtMi41MzYgMi41MTQtNC44MzkgNS41LTQuODM5czUuNDE3IDIuMzAzIDUuNDE3IDQuODM5YzAgMy41MzItNC4yMDMgNy4wOTItNS40MTcgNy45NzlNMTAuNSAzQzYuOTE2IDMgNCA1Ljc0MSA0IDguODA3YzAgNC41OSA1LjkyMyA4LjgwOSA2LjE3NSA4Ljk3N0wxMC41IDE4bC4zMjUtLjIxNkMxMS4wNzcgMTcuNjE2IDE3IDEzLjM5NyAxNyA4LjgwNyAxNyA1Ljc0MSAxNC4wODQgMyAxMC41IDNtMCA4LjIyM2MtMS4xMDMgMC0yLS44OTgtMi0yIDAtMS4xMDMuODk3LTIgMi0yczIgLjg5NyAyIDJjMCAxLjEwMi0uODk3IDItMiAybTAtNWMtMS42NTQgMC0zIDEuMzQ1LTMgMyAwIDEuNjU0IDEuMzQ2IDMgMyAzczMtMS4zNDYgMy0zYzAtMS42NTUtMS4zNDYtMy0zLTNcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIvPjwvc3ZnPidcblxuZXhwb3J0cy50ZXh0ID0nPHN2ZyB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0xNS43IDRINS4zQzQuNTgzIDQgNCA0LjU3NyA0IDUuMjg2djNoLjg2N3YtM2MwLS4yMzcuMTk1LS40MjkuNDMzLS40MjloNC43Njd2MTAuMjg2aC0yLjZWMTZoNi4wNjZ2LS44NTdoLTIuNlY0Ljg1N0gxNS43Yy4yMzggMCAuNDMzLjE5Mi40MzMuNDI5djNIMTd2LTNDMTcgNC41NzYgMTYuNDE3IDQgMTUuNyA0XCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiLz48L3N2Zz4nXG5cbmV4cG9ydHMudXNlciA9ICc8c3ZnIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTUgMTYuNWMwLTIuNjg4IDEuNjYzLTQuODg0IDMuODk1LTUuNTZhLjQ5OS40OTkgMCAwIDAgLjM1NS0uNDY2Yy4wMDQtLjE4NC4wMTItLjM2Ny4wMy0uNTQyQS41MDEuNTAxIDAgMCAwIDkgOS40MzRhMi44NTUgMi44NTUgMCAwIDEtMS42MzItMi41OEM3LjM2OCA1LjI2NiA4LjY2IDQgMTAuMjQ2IDRjMS41ODcgMCAyLjg4IDEuMjY2IDIuODggMi44NTRhMi44NTUgMi44NTUgMCAwIDEtMS42MzMgMi41OC41MDEuNTAxIDAgMCAwLS4yOC41Yy4wMTguMTc0LjAyNS4zNTYuMDMuNTM5YS41LjUgMCAwIDAgLjM1NC40NjZDMTMuODMgMTEuNjE3IDE2IDEzLjc5MiAxNiAxNi41SDV6bTcuMzEtNi4zNzNhMy44NDEgMy44NDEgMCAwIDAgMS44MjMtMy4yNzQgMy44NTUgMy44NTUgMCAwIDAtMy44Ny0zLjg1MmMtLjYwOCAwLTEuMTcyLjE1MS0xLjY3OS40MDMtLjQxMy4yMy0uOTYyLjU2My0xLjQyMiAxLjE3NmEzLjUyMiAzLjUyMiAwIDAgMC0uMjguNDM0Yy0uMDA3LjAxMy0uMDE1LjAyMy0uMDIyLjAzN2EzLjc3MSAzLjc3MSAwIDAgMC0uNDU5IDEuODAzYzAgMS4zNDYuNzIxIDIuNTY3IDEuODUyIDMuMjcyLTEuOTc2Ljc2OC0zLjQyMiAyLjI5LTMuOTg2IDQuMzc1aC0uMDA0YTUuMzIyIDUuMzIyIDAgMCAwLS4yMDQgMWguMDFhNy44OSA3Ljg5IDAgMCAwLS4wNjkgMWMwIC4yNzQuMDYzIDEgLjUgMWgxMmMuNTIxIDAgLjUtMSAuNS0xIDAtMy4xMjItMi4xMjYtNS4zOC00LjY5LTYuMzc1elwiICBmaWxsLXJ1bGU9XCJldmVub2RkXCIvPjwvc3ZnPidcblxuZXhwb3J0cy5maWx0ZXIgPSc8c3ZnIHdpZHRoPVwiMzBcIiBoZWlnaHQ9XCIzMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTE4Ljg5OCA5aC4wNjJjLjgxNCAwIDEuMzUuOTE5Ljg3NyAxLjU4MUwxNi4xNTEgMTZ2NWgtMnYtNWwtMy45MzgtNS40MTlDOS43NDEgOS45MTkgMTAuMDg4IDkgMTAuOTAzIDloNy45OTV6bS0zLjc0NyA3bDQtNmgtOC4yNDlsNC4yNSA2elwiIC8+PC9zdmc+J1xuXG5leHBvcnRzLnNvcnQgPSAnPHN2ZyB3aWR0aD1cIjMwXCIgaGVpZ2h0PVwiMzBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0xOCAxMVY5aDJ2MmgtMnptMCA1di0yaDJ2MmgtMnptMCA1di0yaDJ2MmgtMnptLTIuNjI1LTRsLjYyNS44MDRMMTIuNSAyMSA5IDE3LjgwNCA5LjYyNSAxNyAxMiAxOS4yNzFWOWgxdjEwLjI3MUwxNS4zNzUgMTd6XCIgLz48L3N2Zz4nXG5cbmV4cG9ydHMubWVudT0nPHN2ZyB3aWR0aD1cIjJcIiBoZWlnaHQ9XCIxMlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIj48ZGVmcz48cGF0aCBkPVwiTTAgMlYwaDJ2Mkgwem0wIDVWNWgydjJIMHptMCA1di0yaDJ2MkgwelwiIC8+PC9kZWZzPjx1c2UgeGxpbms6aHJlZj1cIiNhXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiLz48L3N2Zz4nXG5cbmV4cG9ydHMudGFibGUgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNnB4XCIgaGVpZ2h0PVwiMTJweFwiIHZpZXdCb3g9XCIwIDAgMTYgMTJcIj48cmVjdCBpZD1cIlJlY3RhbmdsZVwiIGZpbGw9XCIjRkZGRkZGXCIgb3BhY2l0eT1cIjBcIiB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCI+PC9yZWN0PlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTYsNCBDMTcuMSw0IDE4LDQuOSAxOCw2IEwxOCwxNCBDMTgsMTUuMSAxNy4xLDE2IDE2LDE2IEw0LDE2IEMyLjksMTYgMiwxNS4xIDIsMTQgTDIsNiBDMiw0LjkgMi45LDQgNCw0IEwxNiw0IFogTTE3LDcgTDE3LDYgQzE3LDUuNCAxNi42LDUgMTYsNSBMNCw1IEMzLjQsNSAzLDUuNCAzLDYgTDMsNyBMMTcsNyBaIE04LDE1IEwxMi4yLDE1IEwxMi4yLDExLjggTDgsMTEuOCBMOCwxNSBaIE0xMywxMSBMMTcsMTEgTDE3LDcuOCBMMTMsNy44IEwxMywxMSBaIE0xNywxNCBMMTcsMTEuOCBMMTMsMTEuOCBMMTMsMTUgTDE2LDE1IEMxNi42LDE1IDE3LDE0LjYgMTcsMTQgWiBNNCwxNSBMNy4yLDE1IEw3LjIsMTEuOCBMMywxMS44IEwzLDE0IEMzLDE0LjYgMy40LDE1IDQsMTUgWiBNOCwxMSBMMTIuMiwxMSBMMTIuMiw3LjggTDgsNy44IEw4LDExIFogTTMsMTEgTDcuMiwxMSBMNy4yLDcuOCBMMyw3LjggTDMsMTEgWlwiIGlkPVwiU2hhcGVcIiAgZmlsbC1ydWxlPVwibm9uemVyb1wiPjwvcGF0aD48L3N2Zz4nIiwiIyBBZGQgdGhlIGZvbGxvd2luZyBsaW5lIHRvIHlvdXIgcHJvamVjdCBpbiBGcmFtZXIgU3R1ZGlvLiBcbiMgbXlNb2R1bGUgPSByZXF1aXJlIFwibXlNb2R1bGVcIlxuIyBSZWZlcmVuY2UgdGhlIGNvbnRlbnRzIGJ5IG5hbWUsIGxpa2UgbXlNb2R1bGUubXlGdW5jdGlvbigpIG9yIG15TW9kdWxlLm15VmFyXG5cblxuXG5leHBvcnRzLmFkZEdGUFAgPSAobWMsbGFiZWw9XCJDaGFuZ2UgVGV4dFwiLGJ0bnM9W1wic2V0dGluZ3NcIixcImRlc2lnblwiLFwiaGVscFwiLFwiZGF0YVwiXSkgLT5cblx0ZnJhbWUgPSBtYy5mcmFtZVxuXHRjb250YWluZXIgPSBuZXcgTGF5ZXJcblx0XHRwYXJlbnQ6bWNcblxuXHR7Z2ZwcEJ0bn0gPSByZXF1aXJlIFwiZ2ZwcEJ0blwiXG5cblxuXHRibHVlQm9yZGVyID0gbmV3IExheWVyXG5cdFx0cGFyZW50OmNvbnRhaW5lclxuXHRcdHdpZHRoOmZyYW1lLndpZHRoKzJcblx0XHRoZWlnaHQ6ZnJhbWUuaGVpZ2h0KzJcblx0XHRib3JkZXJXaWR0aDoxXG5cdFx0Ym9yZGVyQ29sb3I6XCIjMDBBQkY2XCJcblx0XHR4Oi0xXG5cdFx0eTotMVxuXHRcblx0Zm9yIGkgaW4gWzAuLjddXG5cdFx0Y2lyY2xlID0gbmV3IExheWVyXG5cdFx0XHR3aWR0aDo5XG5cdFx0XHRoZWlnaHQ6OVxuXHRcdFx0YmFja2dyb3VuZENvbG9yOlwiI2ZmZlwiXG5cdFx0XHRib3JkZXJDb2xvcjpcIiMwMEFCRjZcIlxuXHRcdFx0Ym9yZGVyV2lkdGg6MVxuXHRcdFx0cGFyZW50OmNvbnRhaW5lclxuXHRcdFx0Ym9yZGVyUmFkaXVzOjEwMFxuXG5cdFx0c3dpdGNoIGlcblx0XHRcdHdoZW4gMFxuXHRcdFx0XHRjaXJjbGUueD1ibHVlQm9yZGVyLm1pblgtNFxuXHRcdFx0XHRjaXJjbGUueT1ibHVlQm9yZGVyLm1pblktNFxuXHRcdFx0d2hlbiAxXG5cdFx0XHRcdGNpcmNsZS54PWJsdWVCb3JkZXIubWlkWC00XG5cdFx0XHRcdGNpcmNsZS55PWJsdWVCb3JkZXIubWluWS00XG5cdFx0XHR3aGVuIDJcblx0XHRcdFx0Y2lyY2xlLng9Ymx1ZUJvcmRlci5tYXhYLTVcblx0XHRcdFx0Y2lyY2xlLnk9Ymx1ZUJvcmRlci5taW5ZLTRcblx0XHRcdHdoZW4gM1xuXHRcdFx0XHRjaXJjbGUueD1ibHVlQm9yZGVyLm1pblgtNFxuXHRcdFx0XHRjaXJjbGUueT1ibHVlQm9yZGVyLm1heFktNFxuXHRcdFx0d2hlbiA0XG5cdFx0XHRcdGNpcmNsZS54PWJsdWVCb3JkZXIubWlkWC00XG5cdFx0XHRcdGNpcmNsZS55PWJsdWVCb3JkZXIubWF4WS00XG5cdFx0XHR3aGVuIDVcblx0XHRcdFx0Y2lyY2xlLng9Ymx1ZUJvcmRlci5tYXhYLTVcblx0XHRcdFx0Y2lyY2xlLnk9Ymx1ZUJvcmRlci5tYXhZLTRcblx0XHRcdHdoZW4gNlxuXHRcdFx0XHRjaXJjbGUueD1ibHVlQm9yZGVyLm1heFgtNVxuXHRcdFx0XHRjaXJjbGUueT1ibHVlQm9yZGVyLm1pZFktNFxuXHRcdFx0d2hlbiA3XG5cdFx0XHRcdGNpcmNsZS54PWJsdWVCb3JkZXIubWluWC00XG5cdFx0XHRcdGNpcmNsZS55PWJsdWVCb3JkZXIubWlkWS00XG5cdFxuXHRnZnBwQ29udGFpbmVyID0gbmV3IExheWVyXG5cdFx0cGFyZW50OiBjb250YWluZXJcblx0XHR5Oi01MFxuXHRcdGhlaWdodDozMlxuXHRcdHN0eWxlOlxuXHRcdFx0ZGlzcGxheTpcImZsZXhcIlxuXHRcdFx0cG9zaXRpb246XCJyZWxhdGl2ZVwiXG5cdFxuXHRmb3IgYnRuIGluIGJ0bnNcblx0XHRidCA9IG5ldyBnZnBwQnRuXG5cdFx0XHRwYXJlbnQ6Z2ZwcENvbnRhaW5lclxuXHRcdFx0aWNvbjpidG5cbiIsImNsYXNzIGV4cG9ydHMuZ2ZwcEJ0biBleHRlbmRzIExheWVyXG5cbiAgICBjb25zdHJ1Y3RvcjogKEBvcHRpb25zPXt9KSAtPlxuXHRcdCBcdFx0XHRcdFx0XHRcdFx0XG4gICAgICAgICAgICBAb3B0aW9ucy5pY29uID89IFwic2V0dGluZ3NcIlxuICAgICAgICAgICAgc3VwZXIgQG9wdGlvbnNcblxuICAgICAgICAgICAgc2V0dGluZ3MgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCI+PGRlZnM+PHBhdGggaWQ9XCJhXCIgZD1cIk04Ljg3NCAxMS42MjdhMi43MSAyLjcxIDAgMSAxIDAtNS40MjEgMi43MTEgMi43MTEgMCAxIDEgMCA1LjQyMW04LjAzNy00LjU3MmwtMS43MDYtLjM0MmE2LjY3MSA2LjY3MSAwIDAgMC0uMjk4LS43MTdsLjk2Ni0xLjQ0OWExLjExMyAxLjExMyAwIDAgMC0uMTQtMS40MDRsLTEuMDctMS4wNzFhMS4xMTQgMS4xMTQgMCAwIDAtMS40MDQtLjEzOWwtMS40NDguOTY1YTcuMTggNy4xOCAwIDAgMC0uNzE4LS4yOThMMTAuNzUxLjg5NUExLjExMiAxLjExMiAwIDAgMCA5LjY2IDBIOC4xNDZhMS4xMSAxLjExIDAgMCAwLTEuMDkxLjg5NUw2LjcxMyAyLjZhNy4zMDQgNy4zMDQgMCAwIDAtLjcxNy4yOThsLTEuNDQ5LS45NjVhMS4xMTIgMS4xMTIgMCAwIDAtMS40MDQuMTM5TDIuMDcyIDMuMTQzYTEuMTEyIDEuMTEyIDAgMCAwLS4xMzggMS40MDRsLjk2NCAxLjQ0OWMtLjExMS4yMzItLjIxMS40Ny0uMjk3LjcxN2wtMS43MDYuMzQyQy4zNzUgNy4xNTggMCA3LjYxNSAwIDguMTQ2VjkuNjZjMCAuNTMuMzc1Ljk4Ny44OTUgMS4wOTFsMS43MDYuMzQxYy4wODYuMjQ3LjE4Ni40ODYuMjk3LjcxOGwtLjk2NCAxLjQ0OGExLjExMyAxLjExMyAwIDAgMCAuMTM4IDEuNDA1bDEuMDcxIDEuMDdhMS4xMTIgMS4xMTIgMCAwIDAgMS40MDQuMTM5bDEuNDQ5LS45NjVjLjIzMi4xMTIuNDcxLjIxMi43MTguMjk4bC4zNDEgMS43MDZjLjEwMy41Mi41Ni44OTUgMS4wOTEuODk1SDkuNjZjLjUzIDAgLjk4Ny0uMzc1IDEuMDkxLS44OTVsLjM0Mi0xLjcwNmMuMjQ3LS4wODYuNDg1LS4xODYuNzE4LS4yOThsMS40NDguOTY1YTEuMTE0IDEuMTE0IDAgMCAwIDEuNDA0LS4xMzlsMS4wNy0xLjA3Yy4zNzUtLjM3NS40MzQtLjk2My4xNC0xLjQwNWwtLjk2Ni0xLjQ0OGMuMTEzLS4yMzIuMjEyLS40NzIuMjk4LS43MThsMS43MDYtLjM0MWMuNTIxLS4xMDQuODk1LS41NjEuODk1LTEuMDkxVjguMTQ2YTEuMTEgMS4xMSAwIDAgMC0uODk1LTEuMDkxXCIvPjwvZGVmcz48dXNlIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiB4bGluazpocmVmPVwiI2FcIi8+PC9zdmc+J1xuICAgICAgICAgICAgZGVzaWduID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxNlwiPjxkZWZzPjxwYXRoIGlkPVwiYVwiIGQ9XCJNNi42MzQgMTEuNjc1Yy0uMDI0LjQwMy0uMjQ5LjgyLS42MzEgMS4xNzMtLjgwMi43NC0xLjk5MyAxLjE4LTIuOTg1IDEuMzU5LjMxNy0uNjI4LjQyMS0xLjE5OC4zNDUtMS44MjgtLjA3Ni0uNjE1LS4xMjItMS4wMjIuNDUyLTEuNTUyYTEuODA5IDEuODA5IDAgMCAxIDEuMjQ5LS40OCAyIDIgMCAwIDEgLjI5OS4wMjdjLS4yOTcuNjkzLS41MSAxLjI2Mi0uNjExIDEuNjA4LjM5Mi0uMDk3IDEuMDQyLS4zMDUgMS44MzctLjYuMDIuMDk3LjA1Mi4xODkuMDQ1LjI5M00xNi44NzIuNzg1Yy0xLjAzMy0uOTItMi43Ni0xLjcyLTYuNTk1IDEuODIzQzguNDk4IDQuMjUgNi44NDkgNy4xNjcgNS44MDggOS4zODVhMy4yMzUgMy4yMzUgMCAwIDAtLjc0NC0uMDk3Yy0uNzI0IDAtMS40NjkuMjQyLTIuMDYxLjc4OS0yLjI1MyAyLjA4IDEuMjM1IDMuMjItMy4wMDMgNS4yIDAgMCAuNTI1LjA3NCAxLjMxMy4wNzQgMS40NzggMCAzLjg4NC0uMjYgNS41MDItMS43NTQuODY2LS44IDEuMTI4LTEuNzk2Ljg1OS0yLjYzNSAyLjM4Ny0uOTYzIDUuNDc2LTIuNDY2IDcuMjI3LTQuMDgzIDMuODM1LTMuNTQzIDIuOTY4LTUuMTM4IDEuOTcxLTYuMDkzXCIvPjwvZGVmcz48dXNlIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiB4bGluazpocmVmPVwiI2FcIi8+PC9zdmc+J1xuICAgICAgICAgICAgaGVscCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIj48ZGVmcz48cGF0aCBpZD1cImFcIiBkPVwiTTExLjM0NiA2LjMzOWEyLjM2NiAyLjM2NiAwIDAgMS0uNjQ0IDEuMTJjLS4xNC4xMzYtLjI4NS4yNTktLjQzNC4zNzEtLjE1LjExMi0uMjk5LjIyMi0uNDQ4LjMyOS0uMTUuMTA4LS4yODcuMjI0LS40MTMuMzUtLjEyNi4xMjYtLjE5LjI2Ni0uMjgzLjQyYTEuMDIxIDEuMDIxIDAgMCAwLS4xMzUuNTM5VjEwaC0ydi0uNjNjMC0uMzA4LjA3Ni0uNTc0LjE1NS0uNzk4LjA3OS0uMjI0LjE4LS40MjIuMjkyLS41OTUuMTExLS4xNzIuMjM3LS4zMjIuMzczLS40NDhhNy41NCA3LjU0IDAgMCAxIC40MTQtLjM1N2wuMzkzLS4zMTVjLjEyMS0uMDk4LjIyOS0uMjA1LjMyMi0uMzIyYTEuMzEzIDEuMzEzIDAgMCAwIC4zMDgtLjg3NWMwLS40MjktLjEwNS0uNzQ2LS4zMTUtLjk1Mi0uMjEtLjIwNS0uNTAyLS4zMDgtLjg3NS0uMzA4LS4yNTIgMC0uNDY5LjA0OS0uNjUxLjE0N2ExLjMwNSAxLjMwNSAwIDAgMC0uNDQ4LjM5MmMtLjExNy4xNjQtLjIwMy4yNDUtLjI1OS40NjQtLjA1Ni4yMTktLjA4NC41OTctLjA4NC41OTdINC41NTZjLjAwOSAwIC4wOTYtLjg1Ni4yNTktMS4yNzYuMTYzLS40Mi4zOTItLjcyOS42ODYtMS4wMzcuMjk0LS4zMDguNjQ5LS41MiAxLjA2NC0uNjkzLjQxNS0uMTczLjg4LS4yNDUgMS4zOTMtLjI0NS42NjIgMCAxLjIxNS4wOTcgMS42NTkuMjc5LjQ0NC4xODMuOC40MTIgMS4wNzIuNjgzYTIuNTE1IDIuNTE1IDAgMCAxIC43NTUgMS43NTJjMCAuMzM2LS4wMzMuNjI5LS4wOTguODc2ek02Ljk4OSAxM2gydi0yaC0ydjJ6TTggMGE4IDggMCAxIDAgMCAxNkE4IDggMCAwIDAgOCAwelwiLz48L2RlZnM+PHVzZSBmaWxsLXJ1bGU9XCJldmVub2RkXCIgeGxpbms6aHJlZj1cIiNhXCIvPjwvc3ZnPidcbiAgICAgICAgICAgIGRhdGEgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgd2lkdGg9XCIxNFwiIGhlaWdodD1cIjE2XCI+PGRlZnM+PHBhdGggaWQ9XCJhXCIgZD1cIk0wIDEyLjM0OGMxLjM2NC45NSAzLjk4NiAxLjU5NCA3IDEuNTk0czUuNjM2LS42NDQgNy0xLjU5NHYxLjA4MmMwIC42NTYtLjM3OCAxLjI0Ny0uOTY0IDEuNTA3QzExLjU3IDE1LjU4OCA5LjQxMSAxNiA3IDE2Yy0yLjQxIDAtNC41Ny0uNDEyLTYuMDM2LTEuMDYzQTEuNjQxIDEuNjQxIDAgMCAxIDAgMTMuNDN2LTEuMDgyek03IDBjMi40MTEgMCA0LjU3LjQxMiA2LjAzNiAxLjA2My41ODYuMjYuOTY0Ljg1MS45NjQgMS41MDd2LjAwNWMwIC42NTYtLjM3OCAxLjI0Ny0uOTY0IDEuNTA3QzExLjU3IDQuNzMzIDkuNDExIDUuMTQ1IDcgNS4xNDVjLTIuNDExIDAtNC41Ny0uNDEyLTYuMDM2LTEuMDYzQTEuNjQxIDEuNjQxIDAgMCAxIDAgMi41NzVWMi41N2MwLS42NTYuMzc4LTEuMjQ3Ljk2NC0xLjUwN0MyLjQzLjQxMiA0LjU4OSAwIDcgMHpNMCA4LjY5NmMxLjM2NC45NSAzLjk4NiAxLjU5NCA3IDEuNTk0czUuNjM2LS42NDQgNy0xLjU5NHYxLjA4MmMwIC42NTYtLjM3OCAxLjI0Ny0uOTY0IDEuNTA3LTEuNDY2LjY1MS0zLjYyNSAxLjA2My02LjAzNiAxLjA2My0yLjQxIDAtNC41Ny0uNDEyLTYuMDM2LTEuMDYzQTEuNjQxIDEuNjQxIDAgMCAxIDAgOS43NzhWOC42OTZ6bTAtMy41NTFjMS4zNjQuOTUgMy45ODYgMS41OTQgNyAxLjU5NHM1LjYzNi0uNjQ0IDctMS41OTR2MS4wODJjMCAuNjU2LS4zNzggMS4yNDctLjk2NCAxLjUwN0MxMS41NyA4LjM4NSA5LjQxMSA4Ljc5NyA3IDguNzk3Yy0yLjQxIDAtNC41Ny0uNDEyLTYuMDM2LTEuMDYzQTEuNjQxIDEuNjQxIDAgMCAxIDAgNi4yMjdWNS4xNDV6XCIvPjwvZGVmcz48dXNlIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiB4bGluazpocmVmPVwiI2FcIi8+PC9zdmc+J1xuXG4gICAgICAgICAgICB0aGlzLnByb3BzPVxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMTAwXG4gICAgICAgICAgICAgICAgc2hhZG93Q29sb3I6IFwicmdiYSgwLDAsMCwwLjU0KVwiXG4gICAgICAgICAgICAgICAgc2hhZG93WDogMFxuICAgICAgICAgICAgICAgIHNoYWRvd1k6IDJcbiAgICAgICAgICAgICAgICBzaGFkb3dCbHVyOiA1XG4gICAgICAgICAgICAgICAgc2hhZG93U3ByZWFkOiAwXG4gICAgICAgICAgICAgICAgZ3JhZGllbnQ6XG4gICAgICAgICAgICAgICAgICAgIGVuZDogXCIjRkNGQ0ZDXCJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IFwiI0Y0RjRGNFwiXG4gICAgICAgICAgICAgICAgICAgIGFuZ2xlOiAwXG4gICAgICAgICAgICAgICAgc3R5bGU6XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOlwiYXV0b1wiXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDpcImF1dG9cIlxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OlwiZmxleFwiXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOlwicmVsYXRpdmVcIlxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6XCIzMnB4XCJcbiAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6XCIzMnB4XCJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6XCIxMHB4XCJcbiAgXG5cbiAgICAgICAgICAgIGljb24gPSBuZXcgU1ZHTGF5ZXJcbiAgICAgICAgICAgICAgICBuYW1lOlwiaWNvblwiXG4gICAgICAgICAgICAgICAgcGFyZW50OnRoaXNcbiAgICAgICAgICAgICAgICBzdmc6ZXZhbChAb3B0aW9ucy5pY29uKVxuICAgICAgICAgICAgICAgIGZpbGw6XCIjMkQ0MTUwXCJcbiAgICAgICAgICAgICAgICBzdHlsZTpcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246XCJyZWxhdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOlwiYXV0b1wiXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDpcImF1dG9cIlxuXG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLm9uTW91c2VPdmVyIC0+XG4gICAgICAgICAgICAgICAgaWNvbiA9IHRoaXMuY2hpbGRyZW5XaXRoTmFtZShcImljb25cIilbMF1cbiAgICAgICAgICAgICAgICBpY29uLmZpbGwgPSBcIiMwMEFCRjZcIlxuICAgICAgICAgICAgdGhpcy5vbk1vdXNlT3V0IC0+XG4gICAgICAgICAgICAgICAgaWNvbiA9IHRoaXMuY2hpbGRyZW5XaXRoTmFtZShcImljb25cIilbMF1cbiAgICAgICAgICAgICAgICBpY29uLmZpbGwgPSBcIiMyRDQxNTBcIiIsImNsYXNzIGV4cG9ydHMuZHJvcERvd24gZXh0ZW5kcyBMYXllclxuXHRzZWxlY3RUZXh0ID0gbnVsbFxuXHRpY29uID0gbnVsbFxuXHRFdmVudHMuU2VsZWN0ZWQgID0gXCJkcm9wRG93bi5PblNlbGVjdGVkXCJcblx0aWNvbnM9IHJlcXVpcmUgXCJpY29uc1wiXG5cdGNvbG9ycz0gcmVxdWlyZSBcIndpeENvbG9yc1wiXG5cblx0Y29uc3RydWN0b3I6IChAb3B0aW9ucz17fSkgLT5cblx0XHRAb3B0aW9ucy5pdGVtcyA/PVtcIk9uZVwiLFwiVHdvXCIsXCJUaHJlZVwiXVxuXHRcdEBvcHRpb25zLmNMYWJlbCA/PVwiTGFiZWxcIlxuXHRcdEBvcHRpb25zLnBsYWNlaG9sZGVyID89XCJOb3QgY29ubmVjdGVkXCJcblx0XHRAb3B0aW9ucy5pY29ucyA/PWZhbHNlXG5cdFx0c3VwZXIgQG9wdGlvbnNcblx0XHRzdHlsZXM9IHJlcXVpcmUgXCJ3aXhTdHlsZXNcIlxuXHRcdFxuXHRcdFxuXHRcdHRoaXMuYmFja2dyb3VuZENvbG9yPVwidHJhbnNwYXJlbnRcIlxuXHRcdFxuXHRcdEAuc3R5bGU9XG5cdFx0XHRwb3NpdGlvbjpcInJlbGF0aXZlXCJcblx0XHRcdHdpZHRoOlwiMTAwJVwiXG5cdFx0XHRtaW5IZWlnaHQ6XCIzMHB4XCJcblx0XHRcdGhlaWdodDpcIjg0cHhcIlxuXHRcdFx0IyBwYWRkaW5nOlwiMTZweCAyNHB4XCJcblx0XHRcblx0XHRlbmFibGVyID0gdHJ1ZVxuXHRcdG1jPXRoaXNcblx0XHRsYWJlbD0gbmV3IExheWVyXG5cdFx0XHRwYXJlbnQ6QFxuXHRcdFx0aHRtbDpAb3B0aW9ucy5jTGFiZWxcblx0XHRcdHN0eWxlOnN0eWxlcy50MDJcblx0XHRsYWJlbC5zdHlsZT1cblx0XHRcdGhlaWdodDpcImF1dG9cIlxuXHRcdFx0d2lkdGg6XCJhdXRvXCJcblx0XHRcdHBvc2l0aW9uOlwicmVsYXRpdmVcIlxuXHRcdFx0Y29sb3I6Y29sb3JzLmQyXG5cdFx0XHRwYWRkaW5nOlwiMTZweCAyNHB4IDdweCAyNHB4XCJcblxuXHRcdHNlbGVjdCA9IG5ldyBMYXllclxuXHRcdFx0cGFyZW50OkBcblxuXHRcdHNlbGVjdC5zdHlsZT1cblx0XHRcdFx0d2lkdGg6XCIxMDAlXCJcblx0XHRcdFx0aGVpZ2h0OlwiaW5pdGlhbFwiXG5cdFx0XHRcdHBvc2l0aW9uOlwicmVsYXRpdmVcIlxuXHRcdFx0XHRkaXNwbGF5OlwiZmxleFwiXG5cdFx0XHRcdHBhZGRpbmc6XCIwcHggMjRweCAxOHB4IDI0cHhcIlxuXHRcdFx0XHRib3JkZXJCb3R0b206XCIxcHggc29saWQgI0Q5RTFFOFwiXG5cdFx0XHRcdFxuXHRcdGlmIEBvcHRpb25zLmljb25zXG5cdFx0XHRpY29uID1uZXcgU1ZHTGF5ZXJcblx0XHRcdFx0cGFyZW50OnNlbGVjdFxuXHRcdFx0XHR3aWR0aDowXG5cdFx0XHRcdGhlaWdodDowXG5cdFx0XHRcdGZpbGw6Y29sb3JzLmQyXG5cdFx0XHRcdHN0eWxlOlxuXHRcdFx0XHRcdHBvc2l0aW9uOlwicmVsYXRpdmVcIlxuXHRcdFx0XHRcdHBhZGRpbmdUb3A6XCIycHhcIlxuXG5cdFx0c2VsZWN0VGV4dCA9IG5ldyBMYXllclxuXHRcdFx0cGFyZW50OnNlbGVjdFxuXHRcdFx0bmFtZTpcInNlbGVjdFRleHRcIlxuXHRcdFx0c3R5bGU6c3R5bGVzLnQwM1xuXHRcdFx0aHRtbDpAb3B0aW9ucy5wbGFjZWhvbGRlclxuXHRcdFxuXHRcdHNlbGVjdFRleHQuc3R5bGU9XG5cdFx0XHRcdHdpZHRoOlwiYXV0b1wiXG5cdFx0XHRcdGhlaWdodDpcImluaXRpYWxcIlxuXHRcdFx0XHRwb3NpdGlvbjpcInJlbGF0aXZlXCJcblx0XHRcdFx0Y29sb3I6Y29sb3JzLmQyXG5cdFx0XHRcdHRleHRUcmFuc2Zvcm06XCJjYXBpdGFsaXplXCJcblxuXG5cdFx0c2VsZWN0VGV4dC5vbiBcImNoYW5nZTpodG1sXCIsIC0+XG4gICAgXHRcdFx0IyBtYy52YWx1ZSA9IHNlbGVjdC5odG1sXG4gICAgICAgICAgICAgICAgbWMuYnRuRGlzcGF0Y2goc2VsZWN0VGV4dC5odG1sKVxuXHRcdFxuXHRcdHNlbGVjdC5vbkNsaWNrIC0+XHRcblx0XHRcdGlmIGVuYWJsZXJcblx0XHRcdFx0ZHJvcC52aXNpYmxlPXRydWVcblx0XHRcdFx0ZW5hYmxlciA9IGZhbHNlXG5cdFx0XHRcdHNldEl0ZW1zKClcblx0XHRcdFx0dGhpcy5wYXJlbnQuYnJpbmdUb0Zyb250KClcblx0XHRcblxuXHRcdGRyb3BJY29uID0gbmV3IFNWR0xheWVyXG5cdFx0XHRzdmc6aWNvbnMuZHJvcGRvd25cblx0XHRcdHBhcmVudDpzZWxlY3Rcblx0XHRcdHg6MjQwXG5cdFx0XHRzdHlsZTpcblx0XHRcdFx0d2lkdGg6XCJhdXRvXCJcblx0XHRcdFx0aGVpZ2h0OlwiYXV0b1wiXG5cblx0XHRcdFx0XHRcdFx0XHRcblxuXG5cdFx0c2V0SXRlbXM9ICgpIC0+XG5cdFx0XHRpdGVtcz1kcm9wLmNoaWxkcmVuXG5cdFx0XHRzZWxlY3RUZXh0ID0gc2VsZWN0LmNoaWxkcmVuV2l0aE5hbWUoXCJzZWxlY3RUZXh0XCIpWzBdXG5cdFx0XHR2YWx1ZT1zZWxlY3RUZXh0Lmh0bWxcblx0XHRcdFxuXHRcdFx0Zm9yIGl0ZW0gaW4gaXRlbXNcblx0XHRcdFx0bGFiZWwgPSBpdGVtLmNoaWxkcmVuV2l0aE5hbWUoXCJsYWJlbFwiKVswXVxuXHRcdFx0XHRpZiBsYWJlbC5odG1sIGlzIHZhbHVlXG5cdFx0XHRcdFx0aXRlbS5zdGF0ZVN3aXRjaChcInNlbGVjdGVkXCIpXG5cdFx0XHRcdFx0bGFiZWwuc3R5bGVbXCJjb2xvclwiXT1cIndoaXRlXCJcblx0XHRcdFx0XHRpdGVtLmlnbm9yZUV2ZW50cyA9IHRydWVcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGl0ZW0uc3RhdGVTd2l0Y2goXCJkZWZhdWx0XCIpXG5cdFx0XHRcdFx0bGFiZWwuc3R5bGVbXCJjb2xvclwiXT1cIiMxNjJEM0RcIlxuXHRcdFx0XHRcdGl0ZW0uaWdub3JlRXZlbnRzID0gZmFsc2Vcblx0XHRcdFxuXG5cblx0XHRcblx0XHRkcm9wID0gbmV3IExheWVyXG5cdFx0XHRwYXJlbnQ6c2VsZWN0XG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6XCJ3aGl0ZVwiXG5cdFx0XHRzaGFkb3dCbHVyOjE2XG5cdFx0XHRzaGFkb3dDb2xvcjpcInJnYmEoMCwwLDAsLjE0KVwiXG5cdFx0XHRjbGlwOnRydWVcblx0XHRcdHZpc2libGU6ZmFsc2Vcblx0XHRcdHN0eWxlOlxuXHRcdFx0XHR3aWR0aDpcIjg1JVwiXG5cdFx0XHRcdG1hcmdpbjpcIjBweCAyNHB4XCJcblx0XHRcdFx0aGVpZ2h0OlwiYXV0b1wiXG5cdFx0XHRcdGJvcmRlclJhZGl1czpcIjhweFwiXG5cdFx0XG5cdFx0Zm9yIG9wdGlvbiBpbiBAb3B0aW9ucy5pdGVtc1xuXHRcdFx0XG5cdFx0XHRsaXN0SXRlbSA9IG5ldyBMYXllclxuXHRcdFx0XHRwYXJlbnQ6ZHJvcFxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6XCJ3aGl0ZVwiXG5cdFx0XHRcdGhlaWdodDozNlxuXG5cblx0XHRcdGxpc3RJdGVtLnN0eWxlPVxuXHRcdFx0XHRcdHBvc2l0aW9uOlwicmVsYXRpdmVcIlxuXHRcdFx0XHRcdHdpZHRoOlwiMTAwJVwiXG5cdFx0XHRcdFx0cGFkZGluZzpcIjZweCAyNHB4XCJcblx0XHRcdFx0XHRcblx0XHRcdFxuXHRcdFx0bGlzdExhYmVsID0gbmV3IExheWVyXG5cdFx0XHRcdHBhcmVudDpsaXN0SXRlbVxuXHRcdFx0XHRodG1sOm9wdGlvblxuXHRcdFx0XHRuYW1lOlwibGFiZWxcIlxuXHRcdFx0XHRzdHlsZTpzdHlsZXMudDAxXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCJcblx0XHRcdFx0aGVpZ2h0OjM2XG5cdFx0XHRcblx0XHRcdGxpc3RMYWJlbC5zdHlsZT1cblx0XHRcdFx0cG9zaXRpb246XCJyZWxhdGl2ZVwiXG5cdFx0XHRcdHdpZHRoOlwiaW5pdGlhbFwiXG5cdFx0XHRcdHRleHRUcmFuc2Zvcm06XCJjYXBpdGFsaXplXCJcblx0XHRcdFx0bGVmdDpcIjBweFwiXG5cblx0XHRcdGlmIEBvcHRpb25zLmljb25zXG5cdFx0XHRcdGxpc3RMYWJlbC5zdHlsZVtcImxlZnRcIl09XCIyNHB4XCJcblx0XHRcdFx0bGlzdEljb24gPSBuZXcgU1ZHTGF5ZXJcblx0XHRcdFx0XHRwYXJlbnQ6bGlzdEl0ZW1cblx0XHRcdFx0XHRzdmc6aWNvbnNbb3B0aW9uXVxuXHRcdFx0XHRcdGhlaWdodDoyMFxuXHRcdFx0XHRcdHdpZHRoOjIwXG5cdFx0XHRcdFx0ZmlsbDpjb2xvcnMuZDJcblx0XHRcdFx0XHR4OjE4XG5cdFx0XHRcdGxpc3RJY29uLmNlbnRlclkoKVxuXG5cblx0XHRcdGxpc3RJdGVtLnN0YXRlcy5ob3Zlcj1cblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOmNvbG9ycy5iNFxuXHRcdFx0XG5cdFx0XHRsaXN0SXRlbS5zdGF0ZXMuc2VsZWN0ZWQ9XG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjpjb2xvcnMuYjFcblxuXG5cdFx0XHRsaXN0SXRlbS5vbk1vdXNlT3ZlciAtPlxuXHRcdFx0XHR0aGlzLnN0YXRlU3dpdGNoKFwiaG92ZXJcIilcblx0XHRcdGxpc3RJdGVtLm9uTW91c2VPdXQgLT5cblx0XHRcdFx0dGhpcy5zdGF0ZVN3aXRjaChcImRlZmF1bHRcIilcblx0XHRcdFxuXHRcdFx0bGlzdEl0ZW0ub25DbGljayAtPlxuXHRcdFx0XHR0aGlzLnBhcmVudC52aXNpYmxlID0gZmFsc2Vcblx0XHRcdFx0bGFiZWwgPSB0aGlzLmNoaWxkcmVuV2l0aE5hbWUoXCJsYWJlbFwiKVswXVxuXHRcdFx0XHRtYy5zZXRTZWxlY3QobGFiZWwuaHRtbClcblx0XHRcdFx0VXRpbHMuZGVsYXkgMC4yLCAtPlxuXHRcdFx0XHRcdGVuYWJsZXI9dHJ1ZVxuXHRcdFx0XHRcblxuXG5cblx0YnRuRGlzcGF0Y2g6ICh2YWx1ZSkgLT5cblx0XHRAZW1pdChFdmVudHMuU2VsZWN0ZWQsIHZhbHVlLCBAKVxuXHRcblx0c2V0U2VsZWN0OiAoc3RyaW5nKSAtPlxuXHRcdHNlbGVjdFRleHQuaHRtbCA9IHN0cmluZ1xuXHRcdGlmIEBvcHRpb25zLmljb25zXG5cdFx0XHRpY29uLnByb3BzPVxuXHRcdFx0XHRzdmc6aWNvbnNbc3RyaW5nXVxuXHRcdFx0XHR3aWR0aDoyNVxuXHRcdFx0XHRoZWlnaHQ6MjVcblx0XHRcdFx0ZmlsbDpjb2xvcnMuZDJcblx0Z2V0U2VsZWN0aW9uOiAoKSAtPlxuXHRcdHJldHVybiBzZWxlY3RUZXh0Lmh0bWxcblxuXHQjIGZpZWxkVHlwZS5vbiBFdmVudHMuU2VsZWN0ZWQsICh2YWx1ZSkgLT4iLCJjbGFzcyBleHBvcnRzLmRhdGFzZXRJY29uIGV4dGVuZHMgTGF5ZXJcbiAgICBcbiAgICBjb25zdHJ1Y3RvcjogKEBvcHRpb25zPXt9KSAtPlxuICAgICAgICAgICAgQG9wdGlvbnMuc2V0TmFtZSA/PVwiUHJvcGVydGllcyBMaXN0XCJcdFx0XHRcdFx0XHRcdFxuICAgICAgICAgICAgc3VwZXIgQG9wdGlvbnNcblxuICAgICAgICAgICAgc3R5bGVzPSByZXF1aXJlIFwid2l4U3R5bGVzXCJcbiAgICAgICAgICAgIGNvbG9ycz0gcmVxdWlyZSBcIndpeENvbG9yc1wiXG4gICAgICAgICAgICBpY29ucz0gcmVxdWlyZSBcImljb25zXCJcbiAgICAgICAgICAgIG1jID0gdGhpc1xuICAgICAgICAgICAgQC5wcm9wcz1cbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgc2hhZG93Qmx1cjogMTRcbiAgICAgICAgICAgICAgICBzaGFkb3dDb2xvcjogXCJyZ2JhKDIyLDQ1LDYxLDAuMzYpXCJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6OFxuICAgICAgICAgICAgICAgIHdpZHRoOjUwXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjUwXG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWNvbiA9IG5ldyBTVkdMYXllclxuICAgICAgICAgICAgICAgIHBhcmVudDptY1xuICAgICAgICAgICAgICAgIHN2ZzppY29ucy5kYXRhc2V0XG4gICAgICAgICAgICAgICAgd2lkdGg6MzBcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MjZcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGFiZWwgPSBuZXcgVGV4dExheWVyXG4gICAgICAgICAgICAgICAgcGFyZW50Omljb25cbiAgICAgICAgICAgICAgICB0ZXh0OkBvcHRpb25zLnNldE5hbWVcbiAgICAgICAgICAgICAgICB5OjQ1XG4gICAgICAgICAgICAgICAgZm9udFNpemU6MTJcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA3MDBcbiAgICAgICAgICAgICAgICBzaGFkb3dDb2xvcjpcInJnYmEoMCwwLDAsMC43KVwiXG4gICAgICAgICAgICAgICAgc2hhZG93Qmx1cjozXG4gICAgICAgICAgICAgICAgY29sb3I6XCJ3aGl0ZVwiXG4gICAgICAgICAgICBsYWJlbC5jZW50ZXJYKClcblxuXG5cbiAgICAgICAgICAgIGljb24uY2VudGVyKClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBALm9uTW91c2VEb3duIC0+XG4gICAgICAgICAgICAgICAgQC5kcmFnZ2FibGUuZW5hYmxlZCA9IHRydWVcblxuXG4gICAgICAgICAgICBALm9uTW91c2VVcCAtPlxuICAgICAgICAgICAgICAgIEAuZHJhZ2dhYmxlLmVuYWJsZWQgPSBmYWxzZVxuXG4iLCJjbGFzcyBleHBvcnRzLmJ1dHRvbkxpbmsgZXh0ZW5kcyBMYXllclxuICAgIEV2ZW50cy5PbkNsaWNrZWQgID0gXCJPbkNsaWNrZWRcIlxuICAgIGNvbnN0cnVjdG9yOiAoQG9wdGlvbnM9e30pIC0+XG5cdFx0IFx0XHRcdFx0XHRcdFx0XHRcbiAgICAgICAgICAgIEBvcHRpb25zLndpZHRoID89Mjg4XG4gICAgICAgICAgICBAb3B0aW9ucy5idG5MYWJlbCA/PVwiUHJpbWFyeSBidG5cIlxuICAgICAgICAgICAgQG9wdGlvbnMuYnRuVHlwZSA/PVwibWFpblwiXG4gICAgICAgICAgICBAb3B0aW9ucy5saW5rID89XCJ0cnVlXCJcbiAgICAgICAgICAgIEBvcHRpb25zLmxpbmtMYWJlbCA/PVwiTGlua1wiXG4gICAgICAgICAgICBzdXBlciBAb3B0aW9uc1xuXG4gICAgICAgICAgICBzdHlsZXM9IHJlcXVpcmUgXCJ3aXhTdHlsZXNcIlxuICAgICAgICAgICAgY29sb3JzPSByZXF1aXJlIFwid2l4Q29sb3JzXCJcbiAgICAgICAgICAgIGljb25zPSByZXF1aXJlIFwiaWNvbnNcIlxuICAgICAgICAgICAgcGFuZWwgPSBALnBhcmVudFxuICAgICAgICAgICAgbWMgPSB0aGlzXG5cbiAgICAgICAgICAgIGJ0blR5cGUgPSB7bWFpbjp7aG92ZXI6Y29sb3JzLmIyLCBpZGxlOmNvbG9ycy5iMX0sc2Vjb25kYXJ5Ontob3Zlcjpjb2xvcnMuYjQsIGlkbGU6Y29sb3JzLmI1fX1cbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICBALnByb3BzPVxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KVwiXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjEwOFxuICAgICAgICAgICAgICAgIHdpZHRoOkBvcHRpb25zLndpZHRoXG4gICAgICAgICAgICAgICAgeTpwYW5lbC5oZWlnaHQgLSAxMDdcbiAgICAgICAgICAgICAgICBzdHlsZTpcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDpcIjI0cHhcIlxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46XCJhdXRvXCJcblxuICAgICAgICAgICAgcGFuZWwub24gXCJjaGFuZ2U6aGVpZ2h0XCIsIC0+XG4gICAgICAgICAgICAgICAgbWMueT1wYW5lbC5oZWlnaHQgLSAxMDdcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYnRuID0gbmV3IExheWVyXG4gICAgICAgICAgICAgICAgcGFyZW50OkBcbiAgICAgICAgICAgICAgICBodG1sOkBvcHRpb25zLmJ0bkxhYmVsXG4gICAgICAgICAgICAgICAgc3R5bGU6c3R5bGVzLnQwMVxuICAgICAgICAgICAgICAgIG5hbWU6XCJidG5cIlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBidG4uc3R5bGU9XG4gICAgICAgICAgICAgICAgcG9zaXRpb246XCJyZWxhdGl2ZVwiXG4gICAgICAgICAgICAgICAgY29sb3I6XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOmJ0blR5cGVbQG9wdGlvbnMuYnRuVHlwZV0uaWRsZVxuICAgICAgICAgICAgICAgIGhlaWdodDpcIjM2cHhcIlxuICAgICAgICAgICAgICAgIHdpZHRoOlwiYXV0b1wiXG4gICAgICAgICAgICAgICAgcGFkZGluZzpcIjZweCAyNHB4XCJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6XCIzMHB4XCJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIGRpc3BsYXk6XCJpbmxpbmUtYmxvY2tcIlxuICAgICAgICAgICAgICAgIGN1cnNvcjpcInBvaW50ZXJcIlxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIGJ0bi5zdGF0ZXMuaG92ZXI9XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOmJ0blR5cGVbQG9wdGlvbnMuYnRuVHlwZV0uaG92ZXJcbiAgICAgICAgICAgIGJ0bi5zdGF0ZXMuaWRsZT1cbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6YnRuVHlwZVtAb3B0aW9ucy5idG5UeXBlXS5pZGxlXG5cblxuICAgICAgICAgICAgYnRuLm9uTW91c2VPdmVyIC0+XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZVN3aXRjaChcImhvdmVyXCIpXG4gICAgICAgICAgICBidG4ub25Nb3VzZU91dCAtPlxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVTd2l0Y2goXCJpZGxlXCIpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGJ0bi5vbkNsaWNrIC0+IFxuICAgICAgICAgICAgICAgIG1jLmVtaXQoRXZlbnRzLk9uQ2xpY2tlZCwgbWMpXG4gICAgICAgICAgIFxuICAgICAgICAgICAgaWYgQG9wdGlvbnMubGlua1xuICAgICAgICAgICAgICAgIGxpbmsgPSBuZXcgTGF5ZXJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OkBcbiAgICAgICAgICAgICAgICAgICAgaHRtbDpAb3B0aW9ucy5saW5rTGFiZWxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6c3R5bGVzLnQwMlxuICAgICAgICAgICAgICAgIGxpbmsuc3R5bGU9XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOlwicmVsYXRpdmVcIlxuICAgICAgICAgICAgICAgICAgICBjb2xvcjpjb2xvcnMuYjFcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMzZweFwiXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDpcIjEwcHhcIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aDpcImF1dG9cIlxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246XCJjZW50ZXJcIlxuICAgICAgICAgICIsIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBaUJBQTtBREFBLElBQUE7OztBQUFNLE9B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
