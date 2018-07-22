require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"Pointer":[function(require,module,exports){
exports.Pointer = (function() {
  var clientCoords, coords, offsetArgumentError, offsetCoords, screenArgumentError;

  function Pointer() {}

  Pointer.screen = function(event, layer) {
    var e, screenCoords;
    if (!((event != null) && (layer != null))) {
      screenArgumentError();
    }
    e = offsetCoords(event);
    if (e.x && e.y) {
      screenCoords = layer.screenFrame;
      e.x += screenCoords.x;
      e.y += screenCoords.y;
    } else {
      e = clientCoords(event);
    }
    return e;
  };

  Pointer.offset = function(event, layer) {
    var e, targetScreenCoords;
    if (!((event != null) && (layer != null))) {
      offsetArgumentError();
    }
    e = offsetCoords(event);
    if (!((e.x != null) && (e.y != null))) {
      e = clientCoords(event);
      targetScreenCoords = layer.screenFrame;
      e.x -= targetScreenCoords.x;
      e.y -= targetScreenCoords.y;
    }
    return e;
  };

  offsetCoords = function(ev) {
    var e;
    e = Events.touchEvent(ev);
    return coords(e.offsetX, e.offsetY);
  };

  clientCoords = function(ev) {
    var e;
    e = Events.touchEvent(ev);
    return coords(e.clientX, e.clientY);
  };

  coords = function(x, y) {
    return {
      x: x,
      y: y
    };
  };

  screenArgumentError = function() {
    error(null);
    return console.error("Pointer.screen() Error: You must pass event & layer arguments. \n\nExample: layer.on Events.TouchStart,(event,layer) -> Pointer.screen(event, layer)");
  };

  offsetArgumentError = function() {
    error(null);
    return console.error("Pointer.offset() Error: You must pass event & layer arguments. \n\nExample: layer.on Events.TouchStart,(event,layer) -> Pointer.offset(event, layer)");
  };

  return Pointer;

})();


},{}],"buttonLink":[function(require,module,exports){
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


},{"icons":"icons","wixColors":"wixColors","wixStyles":"wixStyles"}],"icons":[function(require,module,exports){
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


},{}],"master":[function(require,module,exports){
var buttonLink, colors, datasetIcon, dropDown, icons, inputComp, panelBody, radioBtns, styles;

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


},{"buttonLink":"buttonLink","datasetIcon":"datasetIcon","dropDown":"dropDown","icons":"icons","inputComp":"inputComp","panelBody":"panelBody","radioBtns":"radioBtns","wixColors":"wixColors","wixStyles":"wixStyles"}],"myModule":[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3VkaWcvRG9jdW1lbnRzL0dpdEh1Yi9iYXNlVUkvbmV3UHJvamVjdC5mcmFtZXIvbW9kdWxlcy93aXhTdHlsZXMuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvdWRpZy9Eb2N1bWVudHMvR2l0SHViL2Jhc2VVSS9uZXdQcm9qZWN0LmZyYW1lci9tb2R1bGVzL3dpeENvbG9ycy5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy91ZGlnL0RvY3VtZW50cy9HaXRIdWIvYmFzZVVJL25ld1Byb2plY3QuZnJhbWVyL21vZHVsZXMvcmFkaW9CdG5zLmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3VkaWcvRG9jdW1lbnRzL0dpdEh1Yi9iYXNlVUkvbmV3UHJvamVjdC5mcmFtZXIvbW9kdWxlcy9wYW5lbEJvZHkuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvdWRpZy9Eb2N1bWVudHMvR2l0SHViL2Jhc2VVSS9uZXdQcm9qZWN0LmZyYW1lci9tb2R1bGVzL215TW9kdWxlLmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3VkaWcvRG9jdW1lbnRzL0dpdEh1Yi9iYXNlVUkvbmV3UHJvamVjdC5mcmFtZXIvbW9kdWxlcy9tYXN0ZXIuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvdWRpZy9Eb2N1bWVudHMvR2l0SHViL2Jhc2VVSS9uZXdQcm9qZWN0LmZyYW1lci9tb2R1bGVzL2lucHV0LmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3VkaWcvRG9jdW1lbnRzL0dpdEh1Yi9iYXNlVUkvbmV3UHJvamVjdC5mcmFtZXIvbW9kdWxlcy9pbnB1dENvbXAuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvdWRpZy9Eb2N1bWVudHMvR2l0SHViL2Jhc2VVSS9uZXdQcm9qZWN0LmZyYW1lci9tb2R1bGVzL2ljb25zLmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3VkaWcvRG9jdW1lbnRzL0dpdEh1Yi9iYXNlVUkvbmV3UHJvamVjdC5mcmFtZXIvbW9kdWxlcy9kcm9wRG93bi5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy91ZGlnL0RvY3VtZW50cy9HaXRIdWIvYmFzZVVJL25ld1Byb2plY3QuZnJhbWVyL21vZHVsZXMvZGF0YXNldEljb24uY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvdWRpZy9Eb2N1bWVudHMvR2l0SHViL2Jhc2VVSS9uZXdQcm9qZWN0LmZyYW1lci9tb2R1bGVzL2J1dHRvbkxpbmsuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvdWRpZy9Eb2N1bWVudHMvR2l0SHViL2Jhc2VVSS9uZXdQcm9qZWN0LmZyYW1lci9tb2R1bGVzL1BvaW50ZXIuY29mZmVlIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxubW9kdWxlLmV4cG9ydHMgPVxuICAgIHQwMTpcbiAgICAgICAgZm9udEZhbWlseTpcIkhlbHZldGljYU5ldWVXMDEtNDVMaWdoLEhlbHZldGljYU5ldWVXMDItNDVMaWdoLEhlbHZldGljYU5ldWVXMTAtNDVMaWdoLHNhbnMtc2VyaWZcIlxuICAgICAgICBmb250U2l6ZTpcIjE2cHhcIlxuICAgICAgICBjb2xvcjpcIiMxNjJEM0RcIlxuICAgICAgICBsaW5lSGVpZ2h0OlwiMjRweFwiXG4gICAgICAgIHRleHRUcmFuc2Zvcm06IFwibm9uZVwiXG4gICAgICAgIHRleHRSZW5kZXJpbmc6IFwiZ2VvbWV0cmljUHJlY2lzaW9uXCJcbiAgICB0MDI6XG4gICAgICAgIGZvbnRGYW1pbHk6XCJIZWx2ZXRpY2FOZXVlVzAxLTQ1TGlnaCxIZWx2ZXRpY2FOZXVlVzAyLTQ1TGlnaCxIZWx2ZXRpY2FOZXVlVzEwLTQ1TGlnaCxzYW5zLXNlcmlmXCJcbiAgICAgICAgZm9udFNpemU6XCIxNHB4XCJcbiAgICAgICAgY29sb3I6XCIjMTYyRDNEXCJcbiAgICAgICAgbGluZUhlaWdodDpcIjE4cHhcIlxuICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcIm5vbmVcIlxuICAgICAgICB0ZXh0UmVuZGVyaW5nOiBcImdlb21ldHJpY1ByZWNpc2lvblwiXG4gICAgdDAzOlxuICAgICAgICBmb250RmFtaWx5OlwiSGVsdmV0aWNhTmV1ZVcwMS01NVJvbWFuLEhlbHZldGljYU5ldWVXMDItNTVSb21hbixIZWx2ZXRpY2FOZXVlVzEwLTU1Um9tYW4sc2Fucy1zZXJpZlwiXG4gICAgICAgIGZvbnRTaXplOlwiMThweFwiXG4gICAgICAgIGNvbG9yOlwiIzE2MkQzRFwiXG4gICAgICAgIGxpbmVIZWlnaHQ6XCIyNHB4XCJcbiAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJub25lXCJcbiAgICAgICAgdGV4dFJlbmRlcmluZzogXCJnZW9tZXRyaWNQcmVjaXNpb25cIlxuICAgIHQwNDpcbiAgICAgICAgZm9udEZhbWlseTpcIkhlbHZldGljYU5ldWVXMDEtNTVSb21hbixIZWx2ZXRpY2FOZXVlVzAyLTU1Um9tYW4sSGVsdmV0aWNhTmV1ZVcxMC01NVJvbWFuLHNhbnMtc2VyaWZcIlxuICAgICAgICBmb250U2l6ZTpcIjEycHhcIlxuICAgICAgICBjb2xvcjpcIiMxNjJEM0RcIlxuICAgICAgICBsaW5lSGVpZ2h0OlwiMThweFwiXG4gICAgICAgIHRleHRUcmFuc2Zvcm06IFwibm9uZVwiXG4gICAgICAgIHRleHRSZW5kZXJpbmc6IFwiZ2VvbWV0cmljUHJlY2lzaW9uXCJcbiAgICB0MDU6XG4gICAgICAgIGZvbnRGYW1pbHk6XCJIZWx2ZXRpY2FOZXVlVzAxLTQ1TGlnaCxIZWx2ZXRpY2FOZXVlVzAyLTQ1TGlnaCxIZWx2ZXRpY2FOZXVlVzEwLTQ1TGlnaCxzYW5zLXNlcmlmXCJcbiAgICAgICAgZm9udFNpemU6XCIxNnB4XCJcbiAgICAgICAgY29sb3I6XCIjMTYyRDNEXCJcbiAgICAgICAgbGluZUhlaWdodDpcIjE4cHhcIlxuICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcIm5vbmVcIlxuICAgICAgICB0ZXh0UmVuZGVyaW5nOiBcImdlb21ldHJpY1ByZWNpc2lvblwiXG4gICAgdDA2OlxuICAgICAgICBmb250RmFtaWx5OlwiSGVsdmV0aWNhTmV1ZVcwMS01NVJvbWFuLEhlbHZldGljYU5ldWVXMDItNTVSb21hbixIZWx2ZXRpY2FOZXVlVzEwLTU1Um9tYW4sc2Fucy1zZXJpZlwiXG4gICAgICAgIGZvbnRTaXplOlwiMTZweFwiXG4gICAgICAgIGNvbG9yOlwiIzE2MkQzRFwiXG4gICAgICAgIGxpbmVIZWlnaHQ6XCIyNHB4XCJcbiAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJub25lXCJcbiAgICAgICAgdGV4dFJlbmRlcmluZzogXCJnZW9tZXRyaWNQcmVjaXNpb25cIlxuICAgIHQwNzpcbiAgICAgICAgZm9udEZhbWlseTpcIkhlbHZldGljYU5ldWVXMDEtNTVSb21hbixIZWx2ZXRpY2FOZXVlVzAyLTU1Um9tYW4sSGVsdmV0aWNhTmV1ZVcxMC01NVJvbWFuLHNhbnMtc2VyaWZcIlxuICAgICAgICBmb250U2l6ZTpcIjE0cHhcIlxuICAgICAgICBjb2xvcjpcIiMxNjJEM0RcIlxuICAgICAgICBsaW5lSGVpZ2h0OlwiMThweFwiXG4gICAgICAgIHRleHRUcmFuc2Zvcm06IFwibm9uZVwiXG4gICAgICAgIHRleHRSZW5kZXJpbmc6IFwiZ2VvbWV0cmljUHJlY2lzaW9uXCJcbiAgICB0MDg6XG4gICAgICAgIGZvbnRGYW1pbHk6XCJIZWx2ZXRpY2FOZXVlVzAxLTU1Um9tYW4sSGVsdmV0aWNhTmV1ZVcwMi01NVJvbWFuLEhlbHZldGljYU5ldWVXMTAtNTVSb21hbixzYW5zLXNlcmlmXCJcbiAgICAgICAgZm9udFNpemU6XCIyMHB4XCJcbiAgICAgICAgY29sb3I6XCIjMTYyRDNEXCJcbiAgICAgICAgbGluZUhlaWdodDpcIjI0cHhcIlxuICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcIm5vbmVcIlxuICAgICAgICB0ZXh0UmVuZGVyaW5nOiBcImdlb21ldHJpY1ByZWNpc2lvblwiXG4gICAgdDA5OlxuICAgICAgICBmb250RmFtaWx5OlwiSGVsdmV0aWNhTmV1ZVcwMS02NVJvbWFubixIZWx2ZXRpY2FOZXVlVzAyLTY1Um9tYW5uLEhlbHZldGljYU5ldWVXMTAtNjVSb21hbm4sc2Fucy1zZXJpZlwiXG4gICAgICAgIGZvbnRTaXplOlwiMThweFwiXG4gICAgICAgIGNvbG9yOlwiIzE2MkQzRFwiXG4gICAgICAgIGxpbmVIZWlnaHQ6XCIyNHB4XCJcbiAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJub25lXCJcbiAgICAgICAgdGV4dFJlbmRlcmluZzogXCJnZW9tZXRyaWNQcmVjaXNpb25cIlxuICAgIHQxMDpcbiAgICAgICAgZm9udEZhbWlseTpcIkhlbHZldGljYU5ldWVXMDEtNDVMaWdoLEhlbHZldGljYU5ldWVXMDItNDVMaWdoLEhlbHZldGljYU5ldWVXMTAtNDVMaWdoLHNhbnMtc2VyaWZcIlxuICAgICAgICBmb250U2l6ZTpcIjEzcHhcIlxuICAgICAgICBjb2xvcjpcIiMxNjJEM0RcIlxuICAgICAgICBsaW5lSGVpZ2h0OlwiMjRweFwiXG4gICAgICAgIHRleHRUcmFuc2Zvcm06IFwibm9uZVwiXG4gICAgICAgIHRleHRSZW5kZXJpbmc6IFwiZ2VvbWV0cmljUHJlY2lzaW9uXCJcbiAgICB0MTE6XG4gICAgICAgIGZvbnRGYW1pbHk6XCJIZWx2ZXRpY2FOZXVlVzAxLTQ1TGlnaCxIZWx2ZXRpY2FOZXVlVzAyLTQ1TGlnaCxIZWx2ZXRpY2FOZXVlVzEwLTQ1TGlnaCxzYW5zLXNlcmlmXCJcbiAgICAgICAgZm9udFNpemU6XCIxOHB4XCJcbiAgICAgICAgY29sb3I6XCIjMTYyRDNEXCJcbiAgICAgICAgbGluZUhlaWdodDpcIjI0cHhcIlxuICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcIm5vbmVcIlxuICAgICAgICB0ZXh0UmVuZGVyaW5nOiBcImdlb21ldHJpY1ByZWNpc2lvblwiXG4gICAgdDEyOlxuICAgICAgICBmb250RmFtaWx5OlwiSGVsdmV0aWNhTmV1ZVcwMS00NUxpZ2gsSGVsdmV0aWNhTmV1ZVcwMi00NUxpZ2gsSGVsdmV0aWNhTmV1ZVcxMC00NUxpZ2gsc2Fucy1zZXJpZlwiXG4gICAgICAgIGZvbnRTaXplOlwiMTJweFwiXG4gICAgICAgIGNvbG9yOlwiIzE2MkQzRFwiXG4gICAgICAgIGxpbmVIZWlnaHQ6XCIxNHB4XCJcbiAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJub25lXCJcbiAgICAgICAgdGV4dFJlbmRlcmluZzogXCJnZW9tZXRyaWNQcmVjaXNpb25cIlxuICAgIHQxMzpcbiAgICAgICAgZm9udEZhbWlseTpcIkhlbHZldGljYU5ldWVXMDEtNDVMaWdoLEhlbHZldGljYU5ldWVXMDItNDVMaWdoLEhlbHZldGljYU5ldWVXMTAtNDVMaWdoLHNhbnMtc2VyaWZcIlxuICAgICAgICBmb250U2l6ZTpcIjMwcHhcIlxuICAgICAgICBjb2xvcjpcIiMxNjJEM0RcIlxuICAgICAgICBsaW5lSGVpZ2h0OlwiMzZweFwiXG4gICAgICAgIHRleHRUcmFuc2Zvcm06IFwibm9uZVwiXG4gICAgICAgIHRleHRSZW5kZXJpbmc6IFwiZ2VvbWV0cmljUHJlY2lzaW9uXCJcbiAgICB0MTQ6XG4gICAgICAgIGZvbnRGYW1pbHk6XCJIZWx2ZXRpY2FOZXVlVzAxLTQ1TGlnaCxIZWx2ZXRpY2FOZXVlVzAyLTQ1TGlnaCxIZWx2ZXRpY2FOZXVlVzEwLTQ1TGlnaCxzYW5zLXNlcmlmXCJcbiAgICAgICAgZm9udFNpemU6XCIxMnB4XCJcbiAgICAgICAgY29sb3I6XCIjMTYyRDNEXCJcbiAgICAgICAgbGluZUhlaWdodDpcIjI0cHhcIlxuICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcIm5vbmVcIlxuICAgICAgICB0ZXh0UmVuZGVyaW5nOiBcImdlb21ldHJpY1ByZWNpc2lvblwiXG4gICAgdDE1OlxuICAgICAgICBmb250RmFtaWx5OlwiSGVsdmV0aWNhTmV1ZVcwMS00NUxpZ2gsSGVsdmV0aWNhTmV1ZVcwMi00NUxpZ2gsSGVsdmV0aWNhTmV1ZVcxMC00NUxpZ2gsc2Fucy1zZXJpZlwiXG4gICAgICAgIGZvbnRTaXplOlwiMTJweFwiXG4gICAgICAgIGNvbG9yOlwiIzE2MkQzRFwiXG4gICAgICAgIGxpbmVIZWlnaHQ6XCIxOHB4XCJcbiAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJub25lXCJcbiAgICAgICAgdGV4dFJlbmRlcmluZzogXCJnZW9tZXRyaWNQcmVjaXNpb25cIlxuICAgIHQxNjpcbiAgICAgICAgZm9udEZhbWlseTpcIkhlbHZldGljYU5ldWVXMDEtNTVSb21hbixIZWx2ZXRpY2FOZXVlVzAyLTU1Um9tYW4sSGVsdmV0aWNhTmV1ZVcxMC01NVJvbWFuLHNhbnMtc2VyaWZcIlxuICAgICAgICBmb250U2l6ZTpcIjI2cHhcIlxuICAgICAgICBjb2xvcjpcIiMxNjJEM0RcIlxuICAgICAgICBsaW5lSGVpZ2h0OlwiMzZweFwiXG4gICAgICAgIHRleHRUcmFuc2Zvcm06IFwibm9uZVwiXG4gICAgICAgIHRleHRSZW5kZXJpbmc6IFwiZ2VvbWV0cmljUHJlY2lzaW9uXCJcbiAgICB0MTc6XG4gICAgICAgIGZvbnRGYW1pbHk6XCJIZWx2ZXRpY2FOZXVlVzAxLTU1Um9tYW4sSGVsdmV0aWNhTmV1ZVcwMi01NVJvbWFuLEhlbHZldGljYU5ldWVXMTAtNTVSb21hbixzYW5zLXNlcmlmXCJcbiAgICAgICAgZm9udFNpemU6XCIxM3B4XCJcbiAgICAgICAgY29sb3I6XCIjMTYyRDNEXCJcbiAgICAgICAgbGluZUhlaWdodDpcIjI0cHhcIlxuICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcIm5vbmVcIlxuICAgICAgICB0ZXh0UmVuZGVyaW5nOiBcImdlb21ldHJpY1ByZWNpc2lvblwiXG4gICAgdDE4OlxuICAgICAgICBmb250RmFtaWx5OlwiSGVsdmV0aWNhTmV1ZVcwMS01NVJvbWFuLEhlbHZldGljYU5ldWVXMDItNTVSb21hbixIZWx2ZXRpY2FOZXVlVzEwLTU1Um9tYW4sc2Fucy1zZXJpZlwiXG4gICAgICAgIGZvbnRTaXplOlwiMTBweFwiXG4gICAgICAgIGNvbG9yOlwiIzE2MkQzRFwiXG4gICAgICAgIGxpbmVIZWlnaHQ6XCIyNHB4XCJcbiAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJub25lXCJcbiAgICAgICAgdGV4dFJlbmRlcmluZzogXCJnZW9tZXRyaWNQcmVjaXNpb25cIlxuICAgIHQxOTpcbiAgICAgICAgZm9udEZhbWlseTpcIkhlbHZldGljYU5ldWVXMDEtNjVSb21hbm4sSGVsdmV0aWNhTmV1ZVcwMi02NVJvbWFubixIZWx2ZXRpY2FOZXVlVzEwLTY1Um9tYW5uLHNhbnMtc2VyaWZcIlxuICAgICAgICBmb250U2l6ZTpcIjE4cHhcIlxuICAgICAgICBjb2xvcjpcIiMxNjJEM0RcIlxuICAgICAgICBsaW5lSGVpZ2h0OlwiMjRweFwiXG4gICAgICAgIHRleHRUcmFuc2Zvcm06IFwibm9uZVwiXG4gICAgICAgIHRleHRSZW5kZXJpbmc6IFwiZ2VvbWV0cmljUHJlY2lzaW9uXCJcbiAgICB0MjA6XG4gICAgICAgIGZvbnRGYW1pbHk6XCJIZWx2ZXRpY2FOZXVlVzAxLTY1Um9tYW5uLEhlbHZldGljYU5ldWVXMDItNjVSb21hbm4sSGVsdmV0aWNhTmV1ZVcxMC02NVJvbWFubixzYW5zLXNlcmlmXCJcbiAgICAgICAgZm9udFNpemU6XCIxNnB4XCJcbiAgICAgICAgY29sb3I6XCIjMTYyRDNEXCJcbiAgICAgICAgbGluZUhlaWdodDpcIjI0cHhcIlxuICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcIm5vbmVcIlxuICAgICAgICB0ZXh0UmVuZGVyaW5nOiBcImdlb21ldHJpY1ByZWNpc2lvblwiXG4gICAgdDIxOlxuICAgICAgICBmb250RmFtaWx5OlwiSGVsdmV0aWNhTmV1ZVcwMS01NVJvbWFuLEhlbHZldGljYU5ldWVXMDItNTVSb21hbixIZWx2ZXRpY2FOZXVlVzEwLTU1Um9tYW4sc2Fucy1zZXJpZlwiXG4gICAgICAgIGZvbnRTaXplOlwiMTNweFwiXG4gICAgICAgIGNvbG9yOlwiIzE2MkQzRFwiXG4gICAgICAgIGxpbmVIZWlnaHQ6XCIxOHB4XCJcbiAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJub25lXCJcbiAgICAgICAgdGV4dFJlbmRlcmluZzogXCJnZW9tZXRyaWNQcmVjaXNpb25cIiIsIm1vZHVsZS5leHBvcnRzID1cbiBkMTpcIiMxNjJEM0RcIlxuIGQyOlwiIzJCNTY3MlwiXG4gZDM6XCIjN0E5MkE1XCJcbiBkNDpcIiNEOUUxRThcIlxuIGQ1OlwiI0YwRjNGNVwiXG4gZDY6XCIjRkZGRkZGXCJcbiBkMXg6XCIjN0E3QTdBXCJcbiBkMng6XCIjOTM5MzkzXCJcbiBkM3g6XCIjQkNCQ0JDXCJcbiBkNHg6XCIjRUNFQ0VDXCJcbiBkNXg6XCIjRjBGMEYwXCJcbiBiMTpcIiMzODk5RUNcIlxuIGIyOlwiIzRFQjdGNVwiXG4gYjM6XCIjN0ZDQ0Y3XCJcbiBiNDpcIiNEM0VERkZcIlxuIGI1OlwiI0VBRjdGRlwiXG4gYjF4OlwiI0JDQkNCQ1wiXG4gYjJ4OlwiI0M4QzhDOFwiXG4gYjN4OlwiI0Q1RDVENVwiXG4gYjR4OlwiI0UyRTJFMlwiXG4gYjV4OlwiI0YwRjBGMFwiXG4gZTE6XCIjMkI4MUNCXCJcbiBlMjpcIiMwRDQ4N0ZcIlxuIGUzOlwicmdiYSgyNTUsIDI1NSwgMjU1LCA5NilcIlxuIGU0OlwiIzJENDE1MFwiXG4gZTU6XCIjQjFEREY4XCJcbiBlNjpcIiNCNkMxQ0RcIlxuIGU3OlwiIzVFRkZGRlwiXG4gZTg6XCIjMThEMkRFXCJcbiBlOTpcIiMwQTYzNjNcIlxuIGUxMDpcIiM0MkM1QkZcIlxuIGUxMTpcIiNEMDQyN0RcIlxuIGUxMjpcIiNDMzUwNERcIlxuIGUxMzpcIiM5NDJCMjhcIlxuIGUxNDpcIiNGN0ZCRkZcIlxuIGUxNTpcIiMyQjZCOUVcIlxuIGUxNjpcIiNCRjU3MjdcIlxuIGcxOlwiIzYwQkM1N1wiIiwiY2xhc3MgZXhwb3J0cy5yYWRpb0J0bnMgZXh0ZW5kcyBMYXllclxuICAgIFxuICAgIEV2ZW50cy5DaGVja2VkICA9IFwicmFkaW9CdG5zLk9uQ2hlY2tlZFwiXG5cblxuICAgIGNvbnN0cnVjdG9yOiAoQG9wdGlvbnM9e30pIC0+XG5cdFx0IFx0XHRcdFx0XHRcdFx0XHRcbiAgICAgICAgICAgIEBvcHRpb25zLml0ZW1zID89WydpdGVtMScsJ2l0ZW0yJywnaXRlbTMnXVxuICAgICAgICAgICAgQG9wdGlvbnMuY2hlY2tlZCA/PTBcbiAgICAgICAgICAgIEBvcHRpb25zLnRpdGxlID89XCJEbyBpbWFnZXMgc2hvdyB0ZXh0P1wiXG4gICAgICAgICAgICBAaXRlbU1jcyA9IFtdXG4gICAgICAgICAgICBzdXBlciBAb3B0aW9uc1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBzdHlsZXM9IHJlcXVpcmUgXCJ3aXhTdHlsZXNcIlxuICAgICAgICAgICAgY29sb3JzPSByZXF1aXJlIFwid2l4Q29sb3JzXCJcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICBVdGlscy5pbnNlcnRDU1MoXCJcbiAgICAgICAgICAgIC5jb250YWluZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYU5ldWVXMDEtNTVSb21hbixIZWx2ZXRpY2FOZXVlVzAyLTU1Um9tYW4sSGVsdmV0aWNhTmV1ZVcxMC01NVJvbWFuLHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6I3tjb2xvcnMuZDF9O1xuICBsaW5lSGVpZ2h0OiAxOHB4O1xuICB0ZXh0VHJhbnNmb3JtOiBub25lO1xuICB0ZXh0UmVuZGVyaW5nOiBnZW9tZXRyaWNQcmVjaXNpb247XG5cbn1cbi5jb250YWluZXIgaW5wdXQge1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgd2lkdGg6MTAwJTtcbiAgaGVpZ2h0OjEwMCU7XG5cbn1cbi5jaGVja21hcmsge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDVweDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMTZweDtcbiAgICB3aWR0aDogMTZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAje2NvbG9ycy5iMX07XG59XG4uY29udGFpbmVyOmhvdmVyIGlucHV0IH4gLmNoZWNrbWFyayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI3tjb2xvcnMuYjR9O1xufVxuLmNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XG4gIFxufVxuLmNoZWNrbWFyazphZnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgY29udGVudDonJztcbiAgIFxufVxuLmNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazphZnRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4uY29udGFpbmVyIC5jaGVja21hcms6YWZ0ZXIge1xuIFx0dG9wOiAzcHg7XG5cdGxlZnQ6IDNweDtcblx0d2lkdGg6IDEwcHg7XG5cdGhlaWdodDogMTBweDtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRiYWNrZ3JvdW5kOiAje2NvbG9ycy5iMX07XG59XG4gXCIpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxpbmUgPSBcIlwiXG4gICAgICAgICAgICBmb3IgaXRlbSxpIGluIEBvcHRpb25zLml0ZW1zXG4gICAgICAgICAgICAgICAgY2hlY2sgPSBpZiBAb3B0aW9ucy5jaGVja2VkID09IGkgdGhlbiBcImNoZWNrZWRcIiBlbHNlIFwiXCJcbiAgICAgICAgICAgICAgICBsaW5lICs9IFwiPGxhYmVsIGNsYXNzPSdjb250YWluZXInPiN7QG9wdGlvbnMuaXRlbXNbaV19XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3JhZGlvJyBuYW1lPSdyYWRpbycgI3tjaGVja30+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2NoZWNrbWFyayc+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XCJcblxuICAgICAgICAgICAgdGl0bGUgPSBuZXcgTGF5ZXJcbiAgICAgICAgICAgICAgcGFyZW50OnRoaXNcbiAgICAgICAgICAgICAgaHRtbDpAb3B0aW9ucy50aXRsZVxuICAgICAgICAgICAgICBzdHlsZTpzdHlsZXMudDAyXG4gICAgICAgICAgICB0aXRsZS5zdHlsZVtcImNvbG9yXCJdID0gY29sb3JzLmQyXG5cbiAgICAgICAgICAgIGNvbnRhaW5lciA9IG5ldyBMYXllclxuICAgICAgICAgICAgICAgIHBhcmVudDp0aGlzXG4gICAgICAgICAgICAgICAgaHRtbDpsaW5lXG4gICAgICAgICAgICAgICAgeTozMFxuICAgICAgICAgICAgICAgIHN0eWxlOlxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246XCJyZWxhdGl2ZVwiXG5cbiIsImNsYXNzIGV4cG9ydHMucGFuZWxCb2R5IGV4dGVuZHMgTGF5ZXJcbiAgICBFdmVudHMuZHJhZ0VuZCA9IFwiZHJhZ0VuZFwiXG4gICAgY29uc3RydWN0b3I6IChAb3B0aW9ucz17fSkgLT5cblx0XHQgXHRcdFx0XHRcdFx0XHRcdFxuICAgICAgICAgICAgQG9wdGlvbnMuaGVpZ2h0ID89NTU4XG4gICAgICAgICAgICBAb3B0aW9ucy53aWR0aCA/PTI4OFxuICAgICAgICAgICAgQG9wdGlvbnMudGl0bGUgPz1cIlBhbmVsIFRpdGxlXCJcbiAgICAgICAgICAgIEBvcHRpb25zLmhlYWRlckNvbG9yID89XCJibHVlXCJcbiAgICAgICAgICAgIHN1cGVyIEBvcHRpb25zXG5cbiAgICAgICAgICAgIHN0eWxlcz0gcmVxdWlyZSBcIndpeFN0eWxlc1wiXG4gICAgICAgICAgICBjb2xvcnM9IHJlcXVpcmUgXCJ3aXhDb2xvcnNcIlxuICAgICAgICAgICAgIyBpY29ucz0gcmVxdWlyZSBcImljb25zXCJcblxuXG4gICAgICAgICAgICBoQ29sb3IgPSBjb2xvcnMuYjFcbiAgICAgICAgICAgIG1jID0gdGhpc1xuICAgICAgICAgICAgQC5wcm9wcz1cbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgc2hhZG93Qmx1cjogMTRcbiAgICAgICAgICAgICAgICBzaGFkb3dDb2xvcjogXCJyZ2JhKDIyLDQ1LDYxLDAuMzYpXCJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6OFxuICAgICAgICAgICAgICAgIGNsaXA6dHJ1ZVxuICAgICAgICAgICAgICAgIHN0eWxlOlxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOlwiNTRweFwiXG4gICAgICAgICAgXG5cbiAgICAgICAgICAgIHN3aXRjaCBAb3B0aW9ucy5oZWFkZXJDb2xvclxuICAgICAgICAgICAgICAgIHdoZW4gXCJibHVlXCJcbiAgICAgICAgICAgICAgICAgICAgaENvbG9yID0gY29sb3JzLmIxXG4gICAgICAgICAgICAgICAgICAgIGNpcmNsZT0gY29sb3JzLmUxXG4gICAgICAgICAgICAgICAgICAgIGljb24gPSBcIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgdGV4dENvbG9yID0gXCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlclN0eWxlPVxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzpcIjE4cHggMjRweFwiXG5cbiAgICAgICAgICAgICAgICB3aGVuIFwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICBoQ29sb3IgPSBcIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgY2lyY2xlPSBjb2xvcnMuYjVcbiAgICAgICAgICAgICAgICAgICAgaWNvbj1jb2xvcnMuYjFcbiAgICAgICAgICAgICAgICAgICAgdGV4dENvbG9yID0gY29sb3JzLmQxXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlclN0eWxlPVxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzpcIjE4cHggMjRweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJCb3R0b206XCIxcHggc29saWQgI0Q5RTFFOFwiXG5cbiAgICAgICAgICAgIGhlbHBJY29uID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyNVwiIHZpZXdCb3g9XCIwIDAgMjUgMjVcIj48ZGVzYz4gIENyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPjxnIGZpbGw9XCJub25lXCI+PGNpcmNsZSBjeD1cIjEyLjVcIiBjeT1cIjEyLjVcIiByPVwiMTIuNVwiIGZpbGw9XCInK2NpcmNsZSsnXCIvPjxnIGZpbGw9XCInK2ljb24rJ1wiPjxwYXRoIGQ9XCJNMTUgNi44QzE1LjMgNy4xIDE1LjYgNy40IDE1LjcgNy44IDE1LjkgOC4xIDE2IDguNiAxNiA5IDE2IDkuNyAxNS45IDEwLjIgMTUuNiAxMC42IDE1LjMgMTEgMTUgMTEuNSAxNC42IDExLjggMTQuMiAxMi4yIDEzLjkgMTIuNCAxMy43IDEyLjYgMTMuNSAxMi44IDEzLjQgMTIuOSAxMy4zIDEzLjEgMTMuMiAxMy4zIDEzLjEgMTMuNCAxMy4xIDEzLjcgMTMuMSAxMy45IDEzIDE0LjYgMTMgMTQuNkwxMi4xIDE0LjZDMTIuMSAxMyAxMi41IDEyLjYgMTMgMTIuMSAxMy4yIDExLjggMTMuNSAxMS41IDEzLjkgMTEuMiAxNC4yIDEwLjkgMTQuNCAxMC42IDE0LjcgMTAuMyAxNC45IDkuOSAxNSA5LjUgMTUgOS4xIDE1IDguNSAxNC43IDcuOSAxNC4zIDcuNSAxNCA3LjMgMTMuOCA3LjEgMTMuNSA3IDEzLjIgNi45IDEyLjkgNi45IDEyLjYgNi45IDEyLjEgNi45IDExLjcgNyAxMS40IDcuMSAxMS4xIDcuMyAxMC44IDcuNSAxMC42IDcuNyAxMC4zIDggMTAuMiA4LjMgMTAuMSA4LjcgMTAgOS4xIDkuOSA5LjkgOS45IDkuOUw5IDkuOUM5IDguMiA5LjYgNy40IDkuOSA3LjEgMTAuMiA2LjcgMTAuNiA2LjUgMTEgNi4zIDExLjUgNi4xIDEyIDYgMTIuNiA2IDEzLjEgNiAxMy41IDYuMSAxMy45IDYuMiAxNC4zIDYuMyAxNC43IDYuNSAxNSA2LjhaTTEyLjEgMThMMTIuMSAxNi4yIDEzIDE2LjIgMTMgMTggMTIuMSAxOFpcIi8+PC9nPjwvZz48L3N2Zz4nXG5cbiAgICAgICAgICAgIGNsb3NlSWNvbiA9ICc8c3ZnIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyNVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48ZyBmaWxsPVwibm9uZVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIj48Y2lyY2xlIGZpbGw9XCInK2NpcmNsZSsnXCIgY3g9XCIxMi41XCIgY3k9XCIxMi41XCIgcj1cIjEyLjVcIi8+PHBhdGggZD1cIk04IDhoMXYxSDhWOHptMSAxaDF2MUg5Vjl6bTEgMWgxdjFoLTF2LTF6bTEgMWgxdjFoLTF2LTF6bTEgMWgxdjFoLTF2LTF6bTEgMWgxdjFoLTF2LTF6bTEgMWgxdjFoLTF2LTF6bTEgMWgxdjFoLTF2LTF6bTEgMWgxdjFoLTF2LTF6bTAtOGgxdjFoLTFWOHptLTEgMWgxdjFoLTFWOXptLTEgMWgxdjFoLTF2LTF6bS0xIDFoMXYxaC0xdi0xem0tMiAyaDF2MWgtMXYtMXptLTEgMWgxdjFoLTF2LTF6bS0xIDFoMXYxSDl2LTF6bS0xIDFoMXYxSDh2LTF6XCIgZmlsbD1cIicraWNvbisnXCIvPjwvZz48L3N2Zz4nXG5cbiAgICAgICAgICAgIGhlYWRlciA9IG5ldyBMYXllclxuICAgICAgICAgICAgICAgIHBhcmVudDptY1xuICAgICAgICAgICAgICAgIHdpZHRoOkBvcHRpb25zLndpZHRoXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOmhDb2xvclxuICAgICAgICAgICAgICAgIGhlaWdodDo1NFxuICAgICAgICAgICAgICAgIHN0eWxlOmhlYWRlclN0eWxlICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBoZWFkZXIub25Nb3VzZURvd24gLT5cbiAgICAgICAgICAgICAgICBtYy5kcmFnZ2FibGUuZW5hYmxlZCA9IHRydWVcblxuXG4gICAgICAgICAgICBoZWFkZXIub25Nb3VzZVVwIC0+XG4gICAgICAgICAgICAgICAgbWMuZHJhZ2dhYmxlLmVuYWJsZWQgPSBmYWxzZVxuXG4gICAgICAgICAgICBoVGl0bGUgPSBuZXcgTGF5ZXJcbiAgICAgICAgICAgICAgICBwYXJlbnQ6aGVhZGVyXG4gICAgICAgICAgICAgICAgaHRtbDpAb3B0aW9ucy50aXRsZVxuICAgICAgICAgICAgICAgIHN0eWxlOnN0eWxlcy50MDVcbiAgICAgICAgICAgIGhUaXRsZS5zdHlsZT1cbiAgICAgICAgICAgICAgICBwb3NpdGlvbjpcInJlbGF0aXZlXCJcbiAgICAgICAgICAgICAgICBjb2xvcjp0ZXh0Q29sb3JcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY2xvc2UgPSBuZXcgTGF5ZXJcbiAgICAgICAgICAgICAgICBwYXJlbnQ6aGVhZGVyXG4gICAgICAgICAgICAgICAgeDpAb3B0aW9ucy53aWR0aC00M1xuICAgICAgICAgICAgICAgIHk6MTVcbiAgICAgICAgICAgICAgICBodG1sOmNsb3NlSWNvblxuICAgICAgICAgICAgICAgIHdpZHRoOjI1XG4gICAgICAgICAgICAgICAgaGVpZ2h0OjI1XG4gICAgICAgICAgICAgICAgc3R5bGU6XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjpcInBvaW50ZXJcIlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjbG9zZS5vbkNsaWNrIC0+XG4gICAgICAgICAgICAgICAgbWMuZGVzdHJveSgpXG5cbiAgICAgICAgICAgIGhlbHAgPSBuZXcgTGF5ZXJcbiAgICAgICAgICAgICAgICBwYXJlbnQ6aGVhZGVyXG4gICAgICAgICAgICAgICAgeDpAb3B0aW9ucy53aWR0aC03N1xuICAgICAgICAgICAgICAgIHk6MTVcbiAgICAgICAgICAgICAgICB3aWR0aDoyNVxuICAgICAgICAgICAgICAgIGhlaWdodDoyNVxuICAgICAgICAgICAgICAgIGh0bWw6aGVscEljb24iLCIjIEFkZCB0aGUgZm9sbG93aW5nIGxpbmUgdG8geW91ciBwcm9qZWN0IGluIEZyYW1lciBTdHVkaW8uIFxuIyBteU1vZHVsZSA9IHJlcXVpcmUgXCJteU1vZHVsZVwiXG4jIFJlZmVyZW5jZSB0aGUgY29udGVudHMgYnkgbmFtZSwgbGlrZSBteU1vZHVsZS5teUZ1bmN0aW9uKCkgb3IgbXlNb2R1bGUubXlWYXJcblxuZXhwb3J0cy5teVZhciA9IFwibXlWYXJpYWJsZVwiXG5cbmV4cG9ydHMubXlGdW5jdGlvbiA9IC0+XG5cdHByaW50IFwibXlGdW5jdGlvbiBpcyBydW5uaW5nXCJcblxuZXhwb3J0cy5teUFycmF5ID0gWzEsIDIsIDNdIiwiZXhwb3J0cy5jb2xvcnM9IGNvbG9ycz1yZXF1aXJlIFwid2l4Q29sb3JzXCJcbmV4cG9ydHMuc3R5bGVzPXN0eWxlcz0gcmVxdWlyZSBcIndpeFN0eWxlc1wiXG5leHBvcnRzLmljb25zPWljb25zPSByZXF1aXJlIFwiaWNvbnNcIlxuIyBleHBvcnRzLmljb25zPWljb25zPSByZXF1aXJlIFwiaWNvbnNcIlxuXG57cGFuZWxCb2R5fT0gcmVxdWlyZSBcInBhbmVsQm9keVwiXG5leHBvcnRzLnBhbmVsQm9keSA9IHBhbmVsQm9keVxuXG5cbntkcm9wRG93bn09IHJlcXVpcmUgXCJkcm9wRG93blwiXG5leHBvcnRzLmRyb3BEb3duID0gZHJvcERvd25cblxue2lucHV0Q29tcH09IHJlcXVpcmUgXCJpbnB1dENvbXBcIlxuZXhwb3J0cy5pbnB1dENvbXAgPSBpbnB1dENvbXBcblxue2RhdGFzZXRJY29ufT0gcmVxdWlyZSBcImRhdGFzZXRJY29uXCJcbmV4cG9ydHMuZGF0YXNldEljb24gPSBkYXRhc2V0SWNvblxuXG57YnV0dG9uTGlua309IHJlcXVpcmUgXCJidXR0b25MaW5rXCJcbmV4cG9ydHMuYnV0dG9uTGluayA9IGJ1dHRvbkxpbmtcblxue3JhZGlvQnRuc309IHJlcXVpcmUgXCJyYWRpb0J0bnNcIlxuZXhwb3J0cy5yYWRpb0J0bnMgPSByYWRpb0J0bnMiLCJFdmVudHMuRW50ZXJLZXkgPSBcIkVudGVyS2V5XCJcbkV2ZW50cy5TcGFjZUtleSA9IFwiU3BhY2VLZXlcIlxuRXZlbnRzLkJhY2tzcGFjZUtleSA9IFwiQmFja3NwYWNlS2V5XCJcbkV2ZW50cy5DYXBzTG9ja0tleSA9IFwiQ2Fwc0xvY2tLZXlcIlxuRXZlbnRzLlNoaWZ0S2V5ID0gXCJTaGlmdEtleVwiXG5FdmVudHMuVmFsdWVDaGFuZ2UgPSBcIlZhbHVlQ2hhbmdlXCJcbkV2ZW50cy5JbnB1dEZvY3VzID0gXCJJbnB1dEZvY3VzXCJcbkV2ZW50cy5JbnB1dEJsdXIgPSBcIklucHV0Qmx1clwiXG5cbmNsYXNzIGV4cG9ydHMuSW5wdXRMYXllciBleHRlbmRzIFRleHRMYXllclxuXG5cdGNvbnN0cnVjdG9yOiAob3B0aW9ucz17fSkgLT5cblxuXHRcdF8uZGVmYXVsdHMgb3B0aW9ucyxcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCIjRkZGXCJcblx0XHRcdHdpZHRoOiAzNzVcblx0XHRcdGhlaWdodDogNjBcblx0XHRcdHBhZGRpbmc6XG5cdFx0XHRcdGxlZnQ6IDIwXG5cdFx0XHR0ZXh0OiBcIlR5cGUgc29tZXRoaW5nLi4uXCJcblx0XHRcdGZvbnRTaXplOiA0MFxuXHRcdFx0Zm9udFdlaWdodDogMzAwXG5cblx0XHRpZiBvcHRpb25zLm11bHRpTGluZVxuXHRcdFx0b3B0aW9ucy5wYWRkaW5nLnRvcCA/PSAyMFxuXG5cdFx0QF9pbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcblx0XHRAX2lucHV0RWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIlxuXG5cdFx0c3VwZXIgb3B0aW9uc1xuXG5cdFx0IyBHbG9iYWxzXG5cdFx0QF9iYWNrZ3JvdW5kID0gdW5kZWZpbmVkXG5cdFx0QF9wbGFjZWhvbGRlciA9IHVuZGVmaW5lZFxuXHRcdEBfaXNEZXNpZ25MYXllciA9IGZhbHNlXG5cblx0XHQjIExheWVyIGNvbnRhaW5pbmcgaW5wdXQgZWxlbWVudFxuXHRcdEBpbnB1dCA9IG5ldyBMYXllclxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcblx0XHRcdG5hbWU6IFwiaW5wdXRcIlxuXHRcdFx0d2lkdGg6IEB3aWR0aFxuXHRcdFx0aGVpZ2h0OiBAaGVpZ2h0XG5cdFx0XHRwYXJlbnQ6IEBcblxuXHRcdCMgVGV4dCBhcmVhXG5cdFx0aWYgQG11bHRpTGluZVxuXHRcdFx0QF9pbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIilcblxuXHRcdCMgQXBwZW5kIGVsZW1lbnRcblx0XHRAaW5wdXQuX2VsZW1lbnQuYXBwZW5kQ2hpbGQoQF9pbnB1dEVsZW1lbnQpXG5cblx0XHQjIE1hdGNoIFRleHRMYXllciBkZWZhdWx0cyBhbmQgdHlwZSBwcm9wZXJ0aWVzXG5cdFx0QF9zZXRUZXh0UHJvcGVydGllcyhAKVxuXG5cdFx0IyBTZXQgYXR0cmlidXRlc1xuXHRcdEBfaW5wdXRFbGVtZW50LmF1dG9jb21wbGV0ZSA9IFwib2ZmXCJcblx0XHRAX2lucHV0RWxlbWVudC5hdXRvY29ycmVjdCA9IFwib2ZmXCJcblx0XHRAX2lucHV0RWxlbWVudC5zcGVsbGNoZWNrID0gZmFsc2VcblxuXHRcdCMgVGhlIGlkIHNlcnZlcyB0byBkaWZmZXJlbnRpYXRlIG11bHRpcGxlIGlucHV0IGVsZW1lbnRzIGZyb20gb25lIGFub3RoZXIuXG5cdFx0IyBUbyBhbGxvdyBzdHlsaW5nIHRoZSBwbGFjZWhvbGRlciBjb2xvcnMgb2Ygc2VwZXJhdGUgZWxlbWVudHMuXG5cdFx0QF9pbnB1dEVsZW1lbnQuY2xhc3NOYW1lID0gXCJpbnB1dFwiICsgQGlkXG5cblx0XHQjIEFsbCBpbmhlcml0ZWQgcHJvcGVydGllc1xuXHRcdHRleHRQcm9wZXJ0aWVzID1cblx0XHRcdHtAdGV4dCwgQGZvbnRGYW1pbHksIEBmb250U2l6ZSwgQGxpbmVIZWlnaHQsIEBmb250V2VpZ2h0LCBAY29sb3IsIEBiYWNrZ3JvdW5kQ29sb3IsIEB3aWR0aCwgQGhlaWdodCwgQHBhZGRpbmcsIEBwYXJlbnR9XG5cblx0XHRmb3IgcHJvcGVydHksIHZhbHVlIG9mIHRleHRQcm9wZXJ0aWVzXG5cblx0XHRcdEBvbiBcImNoYW5nZToje3Byb3BlcnR5fVwiLCAodmFsdWUpID0+XG5cdFx0XHRcdCMgUmVzZXQgdGV4dExheWVyIGNvbnRlbnRzXG5cdFx0XHRcdEBfZWxlbWVudEhUTUwuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSBcIlwiXG5cblx0XHRcdFx0cmV0dXJuIGlmIEBfaXNEZXNpZ25MYXllclxuXHRcdFx0XHRAX3NldFRleHRQcm9wZXJ0aWVzKEApXG5cdFx0XHRcdEBfc2V0UGxhY2Vob2xkZXJDb2xvcihAX2lkLCBAY29sb3IpXG5cblxuXHRcdCMgU2V0IGRlZmF1bHQgcGxhY2Vob2xkZXJcblx0XHRAX3NldFBsYWNlaG9sZGVyKEB0ZXh0KVxuXHRcdEBfc2V0UGxhY2Vob2xkZXJDb2xvcihAX2lkLCBAY29sb3IpXG5cblx0XHQjIFJlc2V0IHRleHRMYXllciBjb250ZW50c1xuXHRcdEBfZWxlbWVudEhUTUwuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSBcIlwiXG5cblx0XHQjIENoZWNrIGlmIGluIGZvY3VzXG5cdFx0QF9pc0ZvY3VzZWQgPSBmYWxzZVxuXG5cdFx0IyBEZWZhdWx0IGZvY3VzIGludGVyYWN0aW9uXG5cdFx0QF9pbnB1dEVsZW1lbnQub25mb2N1cyA9IChlKSA9PlxuXG5cdFx0XHRAZm9jdXNDb2xvciA/PSBcIiMwMDBcIlxuXG5cdFx0XHQjIEVtaXQgZm9jdXMgZXZlbnRcblx0XHRcdEBlbWl0KEV2ZW50cy5JbnB1dEZvY3VzLCBldmVudClcblxuXHRcdFx0QF9pc0ZvY3VzZWQgPSB0cnVlXG5cblx0XHQjIEVtaXQgYmx1ciBldmVudFxuXHRcdEBfaW5wdXRFbGVtZW50Lm9uYmx1ciA9IChlKSA9PlxuXHRcdFx0QGVtaXQoRXZlbnRzLklucHV0Qmx1ciwgZXZlbnQpXG5cblx0XHRcdEBfaXNGb2N1c2VkID0gZmFsc2VcblxuXHRcdCMgVG8gZmlsdGVyIGlmIHZhbHVlIGNoYW5nZWQgbGF0ZXJcblx0XHRjdXJyZW50VmFsdWUgPSB1bmRlZmluZWRcblxuXHRcdCMgU3RvcmUgY3VycmVudCB2YWx1ZVxuXHRcdEBfaW5wdXRFbGVtZW50Lm9ua2V5ZG93biA9IChlKSA9PlxuXHRcdFx0Y3VycmVudFZhbHVlID0gQHZhbHVlXG5cblx0XHRcdCMgSWYgY2FwcyBsb2NrIGtleSBpcyBwcmVzc2VkIGRvd25cblx0XHRcdGlmIGUud2hpY2ggaXMgMjBcblx0XHRcdFx0QGVtaXQoRXZlbnRzLkNhcHNMb2NrS2V5LCBldmVudClcblxuXHRcdFx0IyBJZiBzaGlmdCBrZXkgaXMgcHJlc3NlZFxuXHRcdFx0aWYgZS53aGljaCBpcyAxNlxuXHRcdFx0XHRAZW1pdChFdmVudHMuU2hpZnRLZXksIGV2ZW50KVxuXG5cdFx0QF9pbnB1dEVsZW1lbnQub25rZXl1cCA9IChlKSA9PlxuXG5cdFx0XHRpZiBjdXJyZW50VmFsdWUgaXNudCBAdmFsdWVcblx0XHRcdFx0QGVtaXQoXCJjaGFuZ2U6dmFsdWVcIiwgQHZhbHVlKVxuXHRcdFx0XHRAZW1pdChFdmVudHMuVmFsdWVDaGFuZ2UsIEB2YWx1ZSlcblxuXHRcdFx0IyBJZiBlbnRlciBrZXkgaXMgcHJlc3NlZFxuXHRcdFx0aWYgZS53aGljaCBpcyAxM1xuXHRcdFx0XHRAZW1pdChFdmVudHMuRW50ZXJLZXksIGV2ZW50KVxuXG5cdFx0XHQjIElmIGJhY2tzcGFjZSBrZXkgaXMgcHJlc3NlZFxuXHRcdFx0aWYgZS53aGljaCBpcyA4XG5cdFx0XHRcdEBlbWl0KEV2ZW50cy5CYWNrc3BhY2VLZXksIGV2ZW50KVxuXG5cdFx0XHQjIElmIHNwYWNlIGtleSBpcyBwcmVzc2VkXG5cdFx0XHRpZiBlLndoaWNoIGlzIDMyXG5cdFx0XHRcdEBlbWl0KEV2ZW50cy5TcGFjZUtleSwgZXZlbnQpXG5cblx0XHRcdCMgSWYgY2FwcyBsb2NrIGtleSBpcyBwcmVzc2VkIHVwXG5cdFx0XHRpZiBlLndoaWNoIGlzIDIwXG5cdFx0XHRcdEBlbWl0KEV2ZW50cy5DYXBzTG9ja0tleSwgZXZlbnQpXG5cblx0X3NldFBsYWNlaG9sZGVyOiAodGV4dCkgPT5cblx0XHRAX2lucHV0RWxlbWVudC5wbGFjZWhvbGRlciA9IHRleHRcblxuXHRfc2V0UGxhY2Vob2xkZXJDb2xvcjogKGlkLCBjb2xvcikgLT5cblx0XHRkb2N1bWVudC5zdHlsZVNoZWV0c1swXS5hZGRSdWxlKFwiLmlucHV0I3tpZH06Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXJcIiwgXCJjb2xvcjogI3tjb2xvcn1cIilcblxuXHRfY2hlY2tEZXZpY2VQaXhlbFJhdGlvOiAtPlxuXHRcdHJhdGlvID0gKFNjcmVlbi53aWR0aCAvIEZyYW1lci5EZXZpY2Uuc2NyZWVuLndpZHRoKVxuXHRcdGlmIFV0aWxzLmlzRGVza3RvcCgpXG5cdFx0XHQjIEAzeFxuXHRcdFx0aWYgcmF0aW8gPCAwLjUgYW5kIHJhdGlvID4gMC4yNVxuXHRcdFx0XHRkcHIgPSAxIC0gcmF0aW9cblx0XHRcdCMgQDR4XG5cdFx0XHRlbHNlIGlmIHJhdGlvIGlzIDAuMjVcblx0XHRcdFx0ZHByID0gMSAtIChyYXRpbyAqIDIpXG5cdFx0XHQjIEAxeCwgQDJ4XG5cdFx0XHRlbHNlXG5cdFx0XHRcdGRwciA9IFV0aWxzLmRldmljZVBpeGVsUmF0aW8oKVxuXHRcdFx0aWYgRnJhbWVyLkRldmljZS5kZXZpY2VUeXBlIGlzIFwiZnVsbHNjcmVlblwiXG5cdFx0XHRcdGRwciA9IDJcblx0XHRlbHNlXG5cdFx0XHQjIEAzeFxuXHRcdFx0aWYgcmF0aW8gPCAwLjUgYW5kIHJhdGlvID4gMC4yNVxuXHRcdFx0XHRkcHIgPSAxIC0gcmF0aW9cblx0XHRcdCMgQDR4XG5cdFx0XHRlbHNlIGlmIHJhdGlvIGlzIDAuMjVcblx0XHRcdFx0ZHByID0gMSAtIChyYXRpbyAqIDIpXG5cdFx0XHQjIEAxeCwgQDJ4XG5cdFx0XHRlbHNlIGlmIHJhdGlvIGlzIDAuNVxuXHRcdFx0XHRkcHIgPSAxXG5cblx0XHRyZXR1cm4gZHByXG5cblx0X3NldFRleHRQcm9wZXJ0aWVzOiAobGF5ZXIpID0+XG5cblx0XHRkcHIgPSBAX2NoZWNrRGV2aWNlUGl4ZWxSYXRpbygpXG5cblx0XHRpZiBub3QgQF9pc0Rlc2lnbkxheWVyXG5cdFx0XHRAX2lucHV0RWxlbWVudC5zdHlsZS5mb250RmFtaWx5ID0gbGF5ZXIuZm9udEZhbWlseVxuXHRcdFx0QF9pbnB1dEVsZW1lbnQuc3R5bGUuZm9udFNpemUgPSBcIiN7bGF5ZXIuZm9udFNpemUgLyBkcHJ9cHhcIlxuXHRcdFx0QF9pbnB1dEVsZW1lbnQuc3R5bGUuZm9udFdlaWdodCA9IGxheWVyLmZvbnRXZWlnaHQgPyBcIm5vcm1hbFwiXG5cdFx0XHRAX2lucHV0RWxlbWVudC5zdHlsZS5wYWRkaW5nVG9wID0gXCIje2xheWVyLnBhZGRpbmcudG9wICogMiAvIGRwcn1weFwiXG5cdFx0XHRAX2lucHV0RWxlbWVudC5zdHlsZS5wYWRkaW5nUmlnaHQgPSBcIiN7bGF5ZXIucGFkZGluZy5ib3R0b20gKiAyIC8gZHByfXB4XCJcblx0XHRcdEBfaW5wdXRFbGVtZW50LnN0eWxlLnBhZGRpbmdCb3R0b20gPSBcIiN7bGF5ZXIucGFkZGluZy5yaWdodCAqIDIgLyBkcHJ9cHhcIlxuXHRcdFx0QF9pbnB1dEVsZW1lbnQuc3R5bGUucGFkZGluZ0xlZnQgPSBcIiN7bGF5ZXIucGFkZGluZy5sZWZ0ICogMiAvIGRwcn1weFwiXG5cblx0XHRAX2lucHV0RWxlbWVudC5zdHlsZS53aWR0aCA9IFwiI3soKGxheWVyLndpZHRoIC0gbGF5ZXIucGFkZGluZy5sZWZ0ICogMikgKiAyIC8gZHByKX1weFwiXG5cdFx0QF9pbnB1dEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gXCIje2xheWVyLmhlaWdodCAqIDIgLyBkcHJ9cHhcIlxuXHRcdEBfaW5wdXRFbGVtZW50LnN0eWxlLm91dGxpbmUgPSBcIm5vbmVcIlxuXHRcdEBfaW5wdXRFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidHJhbnNwYXJlbnRcIlxuXHRcdEBfaW5wdXRFbGVtZW50LnN0eWxlLmN1cnNvciA9IFwiYXV0b1wiXG5cdFx0QF9pbnB1dEVsZW1lbnQuc3R5bGUud2Via2l0QXBwZWFyYW5jZSA9IFwibm9uZVwiXG5cdFx0QF9pbnB1dEVsZW1lbnQuc3R5bGUucmVzaXplID0gXCJub25lXCJcblx0XHRAX2lucHV0RWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCJcblx0XHRAX2lucHV0RWxlbWVudC5zdHlsZS53ZWJraXRGb250U21vb3RoaW5nID0gXCJhbnRpYWxpYXNlZFwiXG5cblx0YWRkQmFja2dyb3VuZExheWVyOiAobGF5ZXIpIC0+XG5cdFx0QF9iYWNrZ3JvdW5kID0gbGF5ZXJcblx0XHRAX2JhY2tncm91bmQucGFyZW50ID0gQFxuXHRcdEBfYmFja2dyb3VuZC5uYW1lID0gXCJiYWNrZ3JvdW5kXCJcblx0XHRAX2JhY2tncm91bmQueCA9IEBfYmFja2dyb3VuZC55ID0gMFxuXHRcdEBfYmFja2dyb3VuZC5fZWxlbWVudC5hcHBlbmRDaGlsZChAX2lucHV0RWxlbWVudClcblxuXHRcdHJldHVybiBAX2JhY2tncm91bmRcblxuXHRhZGRQbGFjZUhvbGRlckxheWVyOiAobGF5ZXIpIC0+XG5cblx0XHRAX2lzRGVzaWduTGF5ZXIgPSB0cnVlXG5cdFx0QF9pbnB1dEVsZW1lbnQuY2xhc3NOYW1lID0gXCJpbnB1dFwiICsgbGF5ZXIuaWRcblx0XHRAcGFkZGluZyA9IGxlZnQ6IDAsIHRvcDogMFxuXG5cdFx0QF9zZXRQbGFjZWhvbGRlcihsYXllci50ZXh0KVxuXHRcdEBfc2V0VGV4dFByb3BlcnRpZXMobGF5ZXIpXG5cdFx0QF9zZXRQbGFjZWhvbGRlckNvbG9yKGxheWVyLmlkLCBsYXllci5jb2xvcilcblxuXHRcdEBvbiBcImNoYW5nZTpjb2xvclwiLCA9PlxuXHRcdFx0QF9zZXRQbGFjZWhvbGRlckNvbG9yKGxheWVyLmlkLCBAY29sb3IpXG5cblx0XHQjIFJlbW92ZSBvcmlnaW5hbCBsYXllclxuXHRcdGxheWVyLnZpc2libGUgPSBmYWxzZVxuXHRcdEBfZWxlbWVudEhUTUwuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSBcIlwiXG5cblx0XHQjIENvbnZlcnQgcG9zaXRpb24gdG8gcGFkZGluZ1xuXHRcdGRwciA9IEBfY2hlY2tEZXZpY2VQaXhlbFJhdGlvKClcblx0XHRAX2lucHV0RWxlbWVudC5zdHlsZS5mb250U2l6ZSA9IFwiI3tsYXllci5mb250U2l6ZSAqIDIgLyBkcHJ9cHhcIlxuXHRcdEBfaW5wdXRFbGVtZW50LnN0eWxlLnBhZGRpbmdUb3AgPSBcIiN7bGF5ZXIueSAqIDIgLyBkcHJ9cHhcIlxuXHRcdEBfaW5wdXRFbGVtZW50LnN0eWxlLnBhZGRpbmdMZWZ0ID0gXCIje2xheWVyLnggKiAyIC8gZHByfXB4XCJcblx0XHRAX2lucHV0RWxlbWVudC5zdHlsZS53aWR0aCA9IFwiI3soQF9iYWNrZ3JvdW5kLndpZHRoIC0gbGF5ZXIueCAqIDIpICogMiAvIGRwcn1weFwiXG5cblx0XHRpZiBAbXVsdGlMaW5lXG5cdFx0XHRAX2lucHV0RWxlbWVudC5zdHlsZS5oZWlnaHQgPSBcIiN7QF9iYWNrZ3JvdW5kLmhlaWdodCAqIDIgLyBkcHJ9cHhcIlxuXG5cdFx0QG9uIFwiY2hhbmdlOnBhZGRpbmdcIiwgPT5cblx0XHRcdEBfaW5wdXRFbGVtZW50LnN0eWxlLnBhZGRpbmdUb3AgPSBcIiN7QHBhZGRpbmcudG9wICogMiAvIGRwcn1weFwiXG5cdFx0XHRAX2lucHV0RWxlbWVudC5zdHlsZS5wYWRkaW5nTGVmdCA9IFwiI3tAcGFkZGluZy5sZWZ0ICogMiAvIGRwcn1weFwiXG5cblx0XHRyZXR1cm4gQF9wbGFjZWhvbGRlclxuXG5cdGZvY3VzOiAtPlxuXHRcdEBfaW5wdXRFbGVtZW50LmZvY3VzKClcblxuXHRAZGVmaW5lIFwidmFsdWVcIixcblx0XHRnZXQ6IC0+IEBfaW5wdXRFbGVtZW50LnZhbHVlXG5cdFx0c2V0OiAodmFsdWUpIC0+XG5cdFx0XHRAX2lucHV0RWxlbWVudC52YWx1ZSA9IHZhbHVlXG5cblx0QGRlZmluZSBcImZvY3VzQ29sb3JcIixcblx0XHRnZXQ6IC0+XG5cdFx0XHRAX2lucHV0RWxlbWVudC5zdHlsZS5jb2xvclxuXHRcdHNldDogKHZhbHVlKSAtPlxuXHRcdFx0QF9pbnB1dEVsZW1lbnQuc3R5bGUuY29sb3IgPSB2YWx1ZVxuXG5cdEBkZWZpbmUgXCJtdWx0aUxpbmVcIiwgQHNpbXBsZVByb3BlcnR5KFwibXVsdGlMaW5lXCIsIGZhbHNlKVxuXG5cdCMgTmV3IENvbnN0cnVjdG9yXG5cdEB3cmFwID0gKGJhY2tncm91bmQsIHBsYWNlaG9sZGVyLCBvcHRpb25zKSAtPlxuXHRcdHJldHVybiB3cmFwSW5wdXQobmV3IEAob3B0aW9ucyksIGJhY2tncm91bmQsIHBsYWNlaG9sZGVyLCBvcHRpb25zKVxuXG5cdG9uRW50ZXJLZXk6IChjYikgLT4gQG9uKEV2ZW50cy5FbnRlcktleSwgY2IpXG5cdG9uU3BhY2VLZXk6IChjYikgLT4gQG9uKEV2ZW50cy5TcGFjZUtleSwgY2IpXG5cdG9uQmFja3NwYWNlS2V5OiAoY2IpIC0+IEBvbihFdmVudHMuQmFja3NwYWNlS2V5LCBjYilcblx0b25DYXBzTG9ja0tleTogKGNiKSAtPiBAb24oRXZlbnRzLkNhcHNMb2NrS2V5LCBjYilcblx0b25TaGlmdEtleTogKGNiKSAtPiBAb24oRXZlbnRzLlNoaWZ0S2V5LCBjYilcblx0b25WYWx1ZUNoYW5nZTogKGNiKSAtPiBAb24oRXZlbnRzLlZhbHVlQ2hhbmdlLCBjYilcblx0b25JbnB1dEZvY3VzOiAoY2IpIC0+IEBvbihFdmVudHMuSW5wdXRGb2N1cywgY2IpXG5cdG9uSW5wdXRCbHVyOiAoY2IpIC0+IEBvbihFdmVudHMuSW5wdXRCbHVyLCBjYilcblxud3JhcElucHV0ID0gKGluc3RhbmNlLCBiYWNrZ3JvdW5kLCBwbGFjZWhvbGRlcikgLT5cblx0aWYgbm90IChiYWNrZ3JvdW5kIGluc3RhbmNlb2YgTGF5ZXIpXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW5wdXRMYXllciBleHBlY3RzIGEgYmFja2dyb3VuZCBsYXllci5cIilcblxuXHRpZiBub3QgKHBsYWNlaG9sZGVyIGluc3RhbmNlb2YgVGV4dExheWVyKVxuXHRcdHRocm93IG5ldyBFcnJvcihcIklucHV0TGF5ZXIgZXhwZWN0cyBhIHRleHQgbGF5ZXIuXCIpXG5cblx0aW5wdXQgPSBpbnN0YW5jZVxuXG5cdGlucHV0Ll9fZnJhbWVySW5zdGFuY2VJbmZvID89IHt9XG5cdGlucHV0Ll9fZnJhbWVySW5zdGFuY2VJbmZvPy5uYW1lID0gaW5zdGFuY2UuY29uc3RydWN0b3IubmFtZVxuXG5cdGlucHV0LmZyYW1lID0gYmFja2dyb3VuZC5mcmFtZVxuXHRpbnB1dC5wYXJlbnQgPSBiYWNrZ3JvdW5kLnBhcmVudFxuXHRpbnB1dC5pbmRleCA9IGJhY2tncm91bmQuaW5kZXhcblxuXHRpbnB1dC5hZGRCYWNrZ3JvdW5kTGF5ZXIoYmFja2dyb3VuZClcblx0aW5wdXQuYWRkUGxhY2VIb2xkZXJMYXllcihwbGFjZWhvbGRlcilcblxuXHRyZXR1cm4gaW5wdXQiLCJjbGFzcyBleHBvcnRzLmlucHV0Q29tcCBleHRlbmRzIExheWVyXG5cdFxuXHQjIEV2ZW50cy52YWx1ZUNoYW5nZSAgPSBcImlucHV0Lk9uQ2hhbmdlXCJcblx0RXZlbnRzLlZhbHVlQ2hhbmdlID0gXCJWYWx1ZUNoYW5nZVwiXG5cdFxuXHRjb25zdHJ1Y3RvcjogKEBvcHRpb25zPXt9KSAtPlxuXHRcdEBvcHRpb25zLmNMYWJlbCA/PVwiTGFiZWxcIlxuXHRcdEBvcHRpb25zLnBsYWNlaG9sZGVyID89XCJOb3QgY29ubmVjdGVkXCJcblx0XHRAb3B0aW9ucy5wbGFjZUhvbGRlckNvbG9yID89XCJyZWRcIlxuXHRcdHN1cGVyIEBvcHRpb25zXG5cdFx0c3R5bGVzPSByZXF1aXJlIFwid2l4U3R5bGVzXCJcblx0XHRjb2xvcnM9IHJlcXVpcmUgXCJ3aXhDb2xvcnNcIlxuXHRcdGN1cnJlbnRWYWx1ZSA9IHVuZGVmaW5lZFxuXHRcdGlzRm9jdXNlZCA9IGZhbHNlXG5cblx0XHR0aGlzLmJhY2tncm91bmRDb2xvcj1cInRyYW5zcGFyZW50XCJcblxuXHRcdEAuc3R5bGU9XG5cdFx0XHRwb3NpdGlvbjpcInJlbGF0aXZlXCJcblx0XHRcdHdpZHRoOlwiMTAwJVwiXG5cdFx0XHRoZWlnaHQ6XCI4NHB4XCJcblx0XHRcdGJvcmRlckJvdHRvbTpcIjFweCBzb2xpZCAjRDlFMUU4XCJcblx0XHRcdGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCJcblxuXHRcdGVuYWJsZXIgPSB0cnVlXG5cdFx0bWM9dGhpc1xuXHRcdGxhYmVsPSBuZXcgTGF5ZXJcblx0XHRcdHBhcmVudDpAXG5cdFx0XHRodG1sOkBvcHRpb25zLmNMYWJlbFxuXHRcdFx0c3R5bGU6c3R5bGVzLnQwMlxuXG5cdFxuXHRcdGxhYmVsLnN0eWxlPVxuXHRcdFx0aGVpZ2h0OlwiYXV0b1wiXG5cdFx0XHR3aWR0aDpcImF1dG9cIlxuXHRcdFx0cG9zaXRpb246XCJyZWxhdGl2ZVwiXG5cdFx0XHRjb2xvcjpjb2xvcnMuZDJcblx0XHRcdHBhZGRpbmc6XCIxNnB4IDI0cHggN3B4IDI0cHhcIlxuXHRcdFx0YmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHRcdFxuXHRcdFxuXHRcdGlucHV0U3R5bGU9XG5cdFx0XHRhcHBlYXJhbmNlOiBcIm5vbmVcIlxuXHRcdFx0Ym9yZGVyOlwiMXB4IHNvbGlkICNmZmZmZmZcIlxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjZweFwiXG5cdFx0XHRiYWNrZ3JvdW5kOlwiI2ZmZmZmZlwiXG5cdFx0XHRwb3NpdGlvbjpcInJlbGF0aXZlXCJcblx0XHRcdGhlaWdodDpcIjM2cHhcIlxuXHRcdFx0bWFyZ2luOlwiMzVweCAxMnB4XCJcblx0XHRcdHBhZGRpbmc6XCIwcHggMTJweFwiXG5cdFx0XHR0ZXh0QWxpZ246IFwibGVmdFwiXG5cdFx0XHRmb250RmFtaWx5OlwiZm9udC1mYW1pbHk6IEhlbHZldGljYU5ldWVXMDEtNTVSb21hLEhlbHZldGljYU5ldWVXMDItNTVSb21hLEhlbHZldGljYU5ldWVXMTAtNTVSb21hLEhlbHZldGljYSBOZXVlLEhlbHZldGljYSxBcmlhbCzjg6HjgqTjg6rjgqosbWVpcnlvLOODkuODqeOCruODjuinkuOCtCBwcm8gdzMsaGlyYWdpbm8ga2FrdSBnb3RoaWMgcHJvLHNhbnMtc2VyaWY7XCJcblx0XHRcdGZvbnRTaXplOlwiMThweFwiXG5cdFx0XHRcIi13ZWJraXQtYXBwZWFyYW5jZVwiOiBcIm5vbmVcIlxuXHRcdFx0b3V0bGluZTogXCJub25lXCJcblxuXHRcdFxuXHRcdEBwaWNrZXIgPW5ldyBMYXllclxuXHRcdFx0cGFyZW50OnRoaXNcblx0XHRcdHdpZHRoOjI4OFxuXHRcdFx0aGVpZ2h0OjBcblx0XHRcdGh0bWw6JzxpbnB1dCAgdHlwZT1cInRleHRcIiBuYW1lPVwiZGVtb1wiPjxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIj46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIgeyBjb2xvcjogcmdiKDEyMiwgMTIyLCAxMjIpIH07PC9zdHlsZT4nXG5cblx0XHRcblx0XHRAaW5wdXQgPSBAcGlja2VyLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKVxuXG5cdFx0QHBpY2tlci5vbk1vdXNlT3ZlciA9PlxuXHRcdFx0aWYgIWlzRm9jdXNlZFxuXHRcdFx0XHRAaW5wdXQuc3R5bGUuYmFja2dyb3VuZENvbG9yPWNvbG9ycy5iNFxuXG5cdFx0QHBpY2tlci5vbk1vdXNlT3V0ID0+XG5cdFx0XHRAaW5wdXQuc3R5bGUuYmFja2dyb3VuZENvbG9yPVwiI2ZmZmZmZlwiXG5cblx0XHRAaW5wdXQucGxhY2Vob2xkZXIgPSBAb3B0aW9ucy5wbGFjZWhvbGRlciBcblx0XHRAaW5wdXQuc3R5bGVba2V5XSAgPSB2YWwgZm9yIGtleSwgdmFsIG9mIGlucHV0U3R5bGVcblx0XHRAaW5wdXQub25mb2N1cyA9ID0+XG5cdFx0XHRAaW5wdXQuc3R5bGUuYm9yZGVyQ29sb3I9XCIjQzFFNEZFXCJcblx0XHRcdEBpbnB1dC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCIjZmZmZmZmXCJcblx0XHRcdGlzRm9jdXNlZCA9IHRydWVcblx0XHRAaW5wdXQub25ibHVyID0gPT5cblx0XHRcdEBpbnB1dC5zdHlsZS5ib3JkZXJDb2xvcj1cIiNmZmZmZmZcIlxuXHRcdFx0aXNGb2N1c2VkID0gZmFsc2Vcblx0XHRAaW5wdXQub25rZXlkb3duID0gKGUpIC0+XG5cdFx0XHRjdXJyZW50VmFsdWUgPSBAdmFsdWVcblx0XHRcblx0XHRAaW5wdXQub25rZXl1cCA9IChlKSA9PlxuXHRcdFx0aWYgY3VycmVudFZhbHVlIGlzbnQgQHZhbHVlXG5cdFx0XHRcdEBlbWl0KEV2ZW50cy5WYWx1ZUNoYW5nZSwgQHZhbHVlKSIsIiMgQWRkIHRoZSBmb2xsb3dpbmcgbGluZSB0byB5b3VyIHByb2plY3QgaW4gRnJhbWVyIFN0dWRpby4gXG4jIG15TW9kdWxlID0gcmVxdWlyZSBcIm15TW9kdWxlXCJcbiMgUmVmZXJlbmNlIHRoZSBjb250ZW50cyBieSBuYW1lLCBsaWtlIG15TW9kdWxlLm15RnVuY3Rpb24oKSBvciBteU1vZHVsZS5teVZhclxuXG5leHBvcnRzLmNsb3NlSWNvbiA9ICdcbjxzdmcgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjI1XCIgPjxkZWZzPjxwYXRoIGQ9XCJNMCAwaDF2MUgwVjB6bTEgMWgxdjFIMVYxem0xIDFoMXYxSDJWMnptMSAxaDF2MUgzVjN6bTEgMWgxdjFINFY0em0xIDFoMXYxSDVWNXptMSAxaDF2MUg2VjZ6bTEgMWgxdjFIN1Y3em0xIDFoMXYxSDhWOHptMC04aDF2MUg4VjB6TTcgMWgxdjFIN1Yxek02IDJoMXYxSDZWMnpNNSAzaDF2MUg1VjN6TTMgNWgxdjFIM1Y1ek0yIDZoMXYxSDJWNnpNMSA3aDF2MUgxVjd6TTAgOGgxdjFIMFY4elwiIC8+PC9kZWZzPjxnIGZpbGw9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPjxjaXJjbGUgZmlsbD1cIiMyQjgxQ0JcIiBjeD1cIjEyLjVcIiBjeT1cIjEyLjVcIiByPVwiMTIuNVwiLz48ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoOCA4KVwiPjxtYXNrICBmaWxsPVwiI2ZmZlwiPjx1c2UgeGxpbms6aHJlZj1cIiNhXCIvPjwvbWFzaz48dXNlIGZpbGw9XCIjMTYyRDNEXCIgeGxpbms6aHJlZj1cIiNhXCIvPjxnIG1hc2s9XCJ1cmwoI2IpXCIgZmlsbD1cIiNGRkZcIj48cGF0aCBkPVwiTTAgMGg5djlIMHpcIi8+PC9nPjwvZz48L2c+PC9zdmc+J1xuXG5leHBvcnRzLmhlbHBJY29uID0gJ1xuPHN2ZyB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjVcIiA+PGRlZnM+PHBhdGggZD1cIk02LjAwOS44MDVjLjMwOS4yNjQuNTUyLjU4My43MjkuOTYuMTc0LjM4LjI2Mi44MDIuMjYyIDEuMjczIDAgLjYxNS0uMTM1IDEuMTI5LS40MDMgMS41NTdhNi4zNzcgNi4zNzcgMCAwIDEtMS4wMzQgMS4yMmMtLjM1NS4zNS0uNjI5LjU5LS44MjcuNzc3LS4yLjE4Ny0uMzQ4LjMxNy0uNDQ4LjUxLS4wOTguMTkyLS4xNjYuMzAzLS4xOTkuNTY4LS4wMzIuMjYyLS4wNTUuOTE4LS4wNjUuOTE4SDMuMWMwLTEuNTguNDAxLTEuOTg0Ljg5LTIuNTE0LjI0LS4yNTcuNTQtLjUzNy44OTMtLjg1NmE0LjExIDQuMTEgMCAwIDAgLjc3Mi0uOTU0Yy4yMDMtLjM1LjMwNC0uNzQxLjMwNC0xLjE3YTIuMTA1IDIuMTA1IDAgMCAwLS43MDMtMS42MDUgMi40MjkgMi40MjkgMCAwIDAtLjc1My0uNDUgMi41MzEgMi41MzEgMCAwIDAtLjkxLS4xNjVjLS40NTIgMC0uODQ2LjA3OC0xLjE4Mi4yMzJhMi4zMSAyLjMxIDAgMCAwLS44MzYuNjM1IDIuNzggMi43OCAwIDAgMC0uNDk2Ljk1Qy45NyAzLjA1NS45MiAzLjg4Ni45MyAzLjg4NkgwYzAtMS42OS41NTgtMi40ODguODczLTIuODIzQTMuMjI0IDMuMjI0IDAgMCAxIDIuMDUuMjhjLjQ2Ny0uMTg2IDEtLjI4IDEuNTk0LS4yOC40NjQgMCAuODk1LjA2OSAxLjMuMjA1LjQwMi4xMzcuNzU2LjMzNyAxLjA2Ni42ek0zLjEgMTJ2LTEuNzk3aC45MjRWMTJIMy4xelwiIC8+PC9kZWZzPjxnIGZpbGw9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPjxjaXJjbGUgZmlsbD1cIiMyQjgxQ0JcIiBjeD1cIjEyLjVcIiBjeT1cIjEyLjVcIiByPVwiMTIuNVwiLz48ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoOSA2KVwiPjxtYXNrICBmaWxsPVwiI2ZmZlwiPjx1c2UgeGxpbms6aHJlZj1cIiNhXCIvPjwvbWFzaz48dXNlIGZpbGw9XCIjMTYyRDNEXCIgeGxpbms6aHJlZj1cIiNhXCIvPjxnIG1hc2s9XCJ1cmwoI2IpXCIgZmlsbD1cIiNGRkZcIj48cGF0aCBkPVwiTTAgMGg3djEySDB6XCIvPjwvZz48L2c+PC9nPjwvc3ZnPlxuJ1xuIFxuZXhwb3J0cy5kcm9wZG93bj0nPHN2ZyB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGcgZmlsbD1cIm5vbmVcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCI+PGNpcmNsZSBzdHJva2U9XCIjQjFEREY4XCIgc3Ryb2tlLXdpZHRoPVwiMlwiIGN4PVwiMTIuNVwiIGN5PVwiMTIuNVwiIHI9XCIxMS41XCIvPjxwYXRoIGQ9XCJNNy4zMjUgMTEuMDNjMCAuMTkuMDguMzcyLjIyMi41bDQuNzQgNC4zOTVhLjc5NC43OTQgMCAwIDAgMS4wNjEgMGw0Ljc0LTQuNmEuNjY4LjY2OCAwIDAgMCAwLS45OTIuNzkxLjc5MSAwIDAgMC0xLjA2NCAwbC00LjIxIDQuMTEtNC4yMTEtMy45MDVhLjc5MS43OTEgMCAwIDAtMS4wNjQgMCAuNjcyLjY3MiAwIDAgMC0uMjE0LjQ5MnpcIiBmaWxsPVwiIzM4OTlFQ1wiLz48L2c+PC9zdmc+J1xuXG5leHBvcnRzLmRhdGFzZXQgPSAnXG48c3ZnIHdpZHRoPVwiMzBcIiBoZWlnaHQ9XCIyNlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48ZyBmaWxsLXJ1bGU9XCJub256ZXJvXCIgZmlsbD1cIiMzRDNEM0RcIj48cGF0aCBkPVwiTTEuNTQ0IDYuNTAyQzMuNjM0IDcuNDIyIDYuNjQ3IDggMTAgOGMzLjM1MiAwIDYuMzY2LS41NzggOC40NTUtMS40OThDMTkuNCA2LjA4NiAyMCA1LjA4OSAyMCA0YzAtMS4wOS0uNi0yLjA4Ni0xLjU0NC0yLjUwMkMxNi4zNjYuNTc4IDEzLjM1MyAwIDEwLjAwMSAwIDYuNjQ3IDAgMy42MzMuNTc4IDEuNTQ0IDEuNDk4LjYgMS45MTQgMCAyLjkxMSAwIDRjMCAxLjA5LjYgMi4wODYgMS41NDQgMi41MDJNMS41MDYgMTEuNzA2QzMuNTQzIDEyLjUgNi40ODIgMTMgOS43NTIgMTNjLjcxIDAgMS4zOTgtLjAyOCAyLjA3LS4wNzJBNi44NzEgNi44NzEgMCAwIDEgMTQgOS43MzZjLTEuMzEuMTkzLTIuNzQyLjMwMi00LjI0OC4zMDJDNS41NTMgMTAuMDM4IDIuMDkgOS4yMTUgMCA4djEuNTQ1YzAgLjk0LjU4NSAxLjgwMSAxLjUwNiAyLjE2TTEuNjkzIDE1Ljg0MmMxLjQ5LjUzNyAzLjQxMy45MzkgNS41ODMgMS4xNThhNi4xODQgNi4xODQgMCAwIDEgMS4yMy0uNTc0Yy4yOTMtLjg3Ny44MTctMS42NjcgMS40OTQtMi4zMzQtNC4zMDktLjEwOC03LjY1LS45Mi0xMC0yLjA5MnYxLjYwMmMwIC45NzUuNjU4IDEuODY4IDEuNjkzIDIuMjRNMCAxOHYxLjcyNGMwIDEuMDUuNDg2IDIuMDEgMS4yNTIgMi40MTEuNjUzLjM0MyAxLjQyLjYzNSAyLjI3Ljg2NS0uMDE3LS4xOTgtLjA0Ni0uMzkzLS4wNDYtLjU5Ni4wMDEtLjk0LjE5NS0xLjgyLjUyNC0yLjU5NUMyLjMxNCAxOS40MS44NjkgMTguNzggMCAxOE05LjE5MSAyMy45MjJjLjE3NC4wMDMuMzQ2LjAxNS41MTkuMDE1aC0uMDA1Yy0uMTcyIDAtLjM0MS0uMDEyLS41MTQtLjAxNXptLjYwNy0zLjE4NnYuMDAxbC0uMDA3LS4wMDFoLjAwN3pNMTkuMDggMTBjLTUuMjgyIDAtNS40NiA1LjMzMy01LjQ2IDUuMzMzLTIuMTg0IDAtNC4zNDYgMi4xMzQtNC4zNDYgNC4yNTRDOC4zMzcgMTkuNTg3IDYgMjAuMjcgNiAyMi44IDYgMjUuMzMxIDcuNzggMjYgOS4yNSAyNmguMDA1bDE1LjMwMy0uMDJDMjcuNTY1IDI1Ljk3OSAzMCAyMy41OTUgMzAgMjAuNjU4YzAtMi45MzktMi40NC01LjMyNC01LjQ0OC01LjMyNGgtLjAxMlMyNC4zNiAxMCAxOS4wOCAxMHpcIi8+PC9nPjwvc3ZnPicgICBcblxuZXhwb3J0cy5nYWxsZXJ5ID0gJzxzdmcgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMTggMTMuNjNsLTIuOTY4LTMuN2EuNDk1LjQ5NSAwIDAgMC0uMzYyLS4xODYuNDU2LjQ1NiAwIDAgMC0uMzguMTQ1bC00LjA4NSA0LjA2NC0xLjYzNi0xLjExN2EuNTAxLjUwMSAwIDAgMC0uNTk3LjAyNUw2IDE0LjQ2VjcuNWEuNS41IDAgMCAxIC41LS41aDExYS41LjUgMCAwIDEgLjUuNXY2LjEzem0wIDIuODdhLjUuNSAwIDAgMS0uNS41SDZ2LTEuMjUxbDIuMzEzLTEuODc2IDEuNjcgMS4xMzlhLjQ5OS40OTkgMCAwIDAgLjYzNC0uMDZMMTQuNiAxMC45OWwzLjQgNC4yNHYxLjI3em0tMTMtOXY3LjM2N2wtLjk2OS4xMjljLS4yOC4wMzQtLjU1LS4xNDMtLjU4OS0uMzkyTDIuMDA1IDUuMDY3YS40MS40MSAwIDAgMSAuMDgxLS4zMTIuNTIyLjUyMiAwIDAgMSAuMzU0LS4ybDExLjYwNy0xLjU0MmMuMjU3IDAgLjQ3Ni4xNy41MTEuMzk3bC4zOSAyLjU5SDYuNUExLjUgMS41IDAgMCAwIDUgNy41ek0xNy41IDZoLTEuNTRsLS40MTMtMi43NGMtLjExOC0uNzc1LS43MTQtMS4zNTgtMS41NDctMS4yNDZMMi4zMDggMy41NjZhMS41MjYgMS41MjYgMCAwIDAtMS4wMi41OSAxLjM5OSAxLjM5OSAwIDAgMC0uMjcyIDEuMDZsMS40MzcgOS41MzdjLjEwOC43MS43NTMgMS4yNDcgMS41IDEuMjQ3LjA3IDAgLjE0LS4wMDUuMjEtLjAxNUw1IDE1Ljg3NHYuNjI2QTEuNSAxLjUgMCAwIDAgNi41IDE4aDExYTEuNSAxLjUgMCAwIDAgMS41LTEuNXYtOUExLjUgMS41IDAgMCAwIDE3LjUgNnpNOSA4Yy0uNTMgMC0xIC40Ny0xIDFzLjQ3IDEgMSAxYy41MzEgMCAxLS40NyAxLTFzLS40NjktMS0xLTF6XCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiLz48L3N2Zz4nIFxuXG5leHBvcnRzLm51bWJlciA9ICc8c3ZnIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTEzLjk0IDNsLS40OTQgMy45NTMtNS4wMTUuMDZMOC45MzMgM2gtLjk5Mkw3LjQ0IDcuMDA4IDQgNy4wMDFWOGgzLjMxNmwtLjYyNSA1SDR2MS4wMDFoMi41NjdMNi4wNjcgMThoLjk5MmwuNS0zLjk5OWg1LjAwOEwxMi4wNjYgMThoLjk5M2wuNS0zLjk5OUgxN1YxM2gtMy4zMTZsLjYyMy01SDE3di0uOTk5bC0yLjU2OC4wMDEuNS00LjAwMmgtLjk5MnptLTEuMTkyIDVoLjU2NmwtLjYyMiA1SDcuNjk4bC41LTVIMTIuNzQ4elwiICBmaWxsLXJ1bGU9XCJldmVub2RkXCIvPjwvc3ZnPidcblxuZXhwb3J0cy5hZGRyZXNzID0gJzxzdmcgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMTAuNSAxNi43ODZDOS4yODQgMTUuOSA1IDEyLjM0NSA1IDguODA3YzAtMi41MzYgMi41MTQtNC44MzkgNS41LTQuODM5czUuNDE3IDIuMzAzIDUuNDE3IDQuODM5YzAgMy41MzItNC4yMDMgNy4wOTItNS40MTcgNy45NzlNMTAuNSAzQzYuOTE2IDMgNCA1Ljc0MSA0IDguODA3YzAgNC41OSA1LjkyMyA4LjgwOSA2LjE3NSA4Ljk3N0wxMC41IDE4bC4zMjUtLjIxNkMxMS4wNzcgMTcuNjE2IDE3IDEzLjM5NyAxNyA4LjgwNyAxNyA1Ljc0MSAxNC4wODQgMyAxMC41IDNtMCA4LjIyM2MtMS4xMDMgMC0yLS44OTgtMi0yIDAtMS4xMDMuODk3LTIgMi0yczIgLjg5NyAyIDJjMCAxLjEwMi0uODk3IDItMiAybTAtNWMtMS42NTQgMC0zIDEuMzQ1LTMgMyAwIDEuNjU0IDEuMzQ2IDMgMyAzczMtMS4zNDYgMy0zYzAtMS42NTUtMS4zNDYtMy0zLTNcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIvPjwvc3ZnPidcblxuZXhwb3J0cy50ZXh0ID0nPHN2ZyB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0xNS43IDRINS4zQzQuNTgzIDQgNCA0LjU3NyA0IDUuMjg2djNoLjg2N3YtM2MwLS4yMzcuMTk1LS40MjkuNDMzLS40MjloNC43Njd2MTAuMjg2aC0yLjZWMTZoNi4wNjZ2LS44NTdoLTIuNlY0Ljg1N0gxNS43Yy4yMzggMCAuNDMzLjE5Mi40MzMuNDI5djNIMTd2LTNDMTcgNC41NzYgMTYuNDE3IDQgMTUuNyA0XCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiLz48L3N2Zz4nXG5cbmV4cG9ydHMudXNlciA9ICc8c3ZnIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTUgMTYuNWMwLTIuNjg4IDEuNjYzLTQuODg0IDMuODk1LTUuNTZhLjQ5OS40OTkgMCAwIDAgLjM1NS0uNDY2Yy4wMDQtLjE4NC4wMTItLjM2Ny4wMy0uNTQyQS41MDEuNTAxIDAgMCAwIDkgOS40MzRhMi44NTUgMi44NTUgMCAwIDEtMS42MzItMi41OEM3LjM2OCA1LjI2NiA4LjY2IDQgMTAuMjQ2IDRjMS41ODcgMCAyLjg4IDEuMjY2IDIuODggMi44NTRhMi44NTUgMi44NTUgMCAwIDEtMS42MzMgMi41OC41MDEuNTAxIDAgMCAwLS4yOC41Yy4wMTguMTc0LjAyNS4zNTYuMDMuNTM5YS41LjUgMCAwIDAgLjM1NC40NjZDMTMuODMgMTEuNjE3IDE2IDEzLjc5MiAxNiAxNi41SDV6bTcuMzEtNi4zNzNhMy44NDEgMy44NDEgMCAwIDAgMS44MjMtMy4yNzQgMy44NTUgMy44NTUgMCAwIDAtMy44Ny0zLjg1MmMtLjYwOCAwLTEuMTcyLjE1MS0xLjY3OS40MDMtLjQxMy4yMy0uOTYyLjU2My0xLjQyMiAxLjE3NmEzLjUyMiAzLjUyMiAwIDAgMC0uMjguNDM0Yy0uMDA3LjAxMy0uMDE1LjAyMy0uMDIyLjAzN2EzLjc3MSAzLjc3MSAwIDAgMC0uNDU5IDEuODAzYzAgMS4zNDYuNzIxIDIuNTY3IDEuODUyIDMuMjcyLTEuOTc2Ljc2OC0zLjQyMiAyLjI5LTMuOTg2IDQuMzc1aC0uMDA0YTUuMzIyIDUuMzIyIDAgMCAwLS4yMDQgMWguMDFhNy44OSA3Ljg5IDAgMCAwLS4wNjkgMWMwIC4yNzQuMDYzIDEgLjUgMWgxMmMuNTIxIDAgLjUtMSAuNS0xIDAtMy4xMjItMi4xMjYtNS4zOC00LjY5LTYuMzc1elwiICBmaWxsLXJ1bGU9XCJldmVub2RkXCIvPjwvc3ZnPidcblxuZXhwb3J0cy5maWx0ZXIgPSc8c3ZnIHdpZHRoPVwiMzBcIiBoZWlnaHQ9XCIzMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTE4Ljg5OCA5aC4wNjJjLjgxNCAwIDEuMzUuOTE5Ljg3NyAxLjU4MUwxNi4xNTEgMTZ2NWgtMnYtNWwtMy45MzgtNS40MTlDOS43NDEgOS45MTkgMTAuMDg4IDkgMTAuOTAzIDloNy45OTV6bS0zLjc0NyA3bDQtNmgtOC4yNDlsNC4yNSA2elwiIC8+PC9zdmc+J1xuXG5leHBvcnRzLnNvcnQgPSAnPHN2ZyB3aWR0aD1cIjMwXCIgaGVpZ2h0PVwiMzBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0xOCAxMVY5aDJ2MmgtMnptMCA1di0yaDJ2MmgtMnptMCA1di0yaDJ2MmgtMnptLTIuNjI1LTRsLjYyNS44MDRMMTIuNSAyMSA5IDE3LjgwNCA5LjYyNSAxNyAxMiAxOS4yNzFWOWgxdjEwLjI3MUwxNS4zNzUgMTd6XCIgLz48L3N2Zz4nXG5cbmV4cG9ydHMubWVudT0nPHN2ZyB3aWR0aD1cIjJcIiBoZWlnaHQ9XCIxMlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIj48ZGVmcz48cGF0aCBkPVwiTTAgMlYwaDJ2Mkgwem0wIDVWNWgydjJIMHptMCA1di0yaDJ2MkgwelwiIC8+PC9kZWZzPjx1c2UgeGxpbms6aHJlZj1cIiNhXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiLz48L3N2Zz4nXG5cbmV4cG9ydHMudGFibGUgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNnB4XCIgaGVpZ2h0PVwiMTJweFwiIHZpZXdCb3g9XCIwIDAgMTYgMTJcIj48cmVjdCBpZD1cIlJlY3RhbmdsZVwiIGZpbGw9XCIjRkZGRkZGXCIgb3BhY2l0eT1cIjBcIiB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCI+PC9yZWN0PlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTYsNCBDMTcuMSw0IDE4LDQuOSAxOCw2IEwxOCwxNCBDMTgsMTUuMSAxNy4xLDE2IDE2LDE2IEw0LDE2IEMyLjksMTYgMiwxNS4xIDIsMTQgTDIsNiBDMiw0LjkgMi45LDQgNCw0IEwxNiw0IFogTTE3LDcgTDE3LDYgQzE3LDUuNCAxNi42LDUgMTYsNSBMNCw1IEMzLjQsNSAzLDUuNCAzLDYgTDMsNyBMMTcsNyBaIE04LDE1IEwxMi4yLDE1IEwxMi4yLDExLjggTDgsMTEuOCBMOCwxNSBaIE0xMywxMSBMMTcsMTEgTDE3LDcuOCBMMTMsNy44IEwxMywxMSBaIE0xNywxNCBMMTcsMTEuOCBMMTMsMTEuOCBMMTMsMTUgTDE2LDE1IEMxNi42LDE1IDE3LDE0LjYgMTcsMTQgWiBNNCwxNSBMNy4yLDE1IEw3LjIsMTEuOCBMMywxMS44IEwzLDE0IEMzLDE0LjYgMy40LDE1IDQsMTUgWiBNOCwxMSBMMTIuMiwxMSBMMTIuMiw3LjggTDgsNy44IEw4LDExIFogTTMsMTEgTDcuMiwxMSBMNy4yLDcuOCBMMyw3LjggTDMsMTEgWlwiIGlkPVwiU2hhcGVcIiAgZmlsbC1ydWxlPVwibm9uemVyb1wiPjwvcGF0aD48L3N2Zz4nIiwiY2xhc3MgZXhwb3J0cy5kcm9wRG93biBleHRlbmRzIExheWVyXG5cdHNlbGVjdFRleHQgPSBudWxsXG5cdGljb24gPSBudWxsXG5cdEV2ZW50cy5TZWxlY3RlZCAgPSBcImRyb3BEb3duLk9uU2VsZWN0ZWRcIlxuXHRpY29ucz0gcmVxdWlyZSBcImljb25zXCJcblx0Y29sb3JzPSByZXF1aXJlIFwid2l4Q29sb3JzXCJcblxuXHRjb25zdHJ1Y3RvcjogKEBvcHRpb25zPXt9KSAtPlxuXHRcdEBvcHRpb25zLml0ZW1zID89W1wiT25lXCIsXCJUd29cIixcIlRocmVlXCJdXG5cdFx0QG9wdGlvbnMuY0xhYmVsID89XCJMYWJlbFwiXG5cdFx0QG9wdGlvbnMucGxhY2Vob2xkZXIgPz1cIk5vdCBjb25uZWN0ZWRcIlxuXHRcdEBvcHRpb25zLmljb25zID89ZmFsc2Vcblx0XHRzdXBlciBAb3B0aW9uc1xuXHRcdHN0eWxlcz0gcmVxdWlyZSBcIndpeFN0eWxlc1wiXG5cdFx0XG5cdFx0XG5cdFx0dGhpcy5iYWNrZ3JvdW5kQ29sb3I9XCJ0cmFuc3BhcmVudFwiXG5cdFx0XG5cdFx0QC5zdHlsZT1cblx0XHRcdHBvc2l0aW9uOlwicmVsYXRpdmVcIlxuXHRcdFx0d2lkdGg6XCIxMDAlXCJcblx0XHRcdG1pbkhlaWdodDpcIjMwcHhcIlxuXHRcdFx0aGVpZ2h0OlwiODRweFwiXG5cdFx0XHQjIHBhZGRpbmc6XCIxNnB4IDI0cHhcIlxuXHRcdFxuXHRcdGVuYWJsZXIgPSB0cnVlXG5cdFx0bWM9dGhpc1xuXHRcdGxhYmVsPSBuZXcgTGF5ZXJcblx0XHRcdHBhcmVudDpAXG5cdFx0XHRodG1sOkBvcHRpb25zLmNMYWJlbFxuXHRcdFx0c3R5bGU6c3R5bGVzLnQwMlxuXHRcdGxhYmVsLnN0eWxlPVxuXHRcdFx0aGVpZ2h0OlwiYXV0b1wiXG5cdFx0XHR3aWR0aDpcImF1dG9cIlxuXHRcdFx0cG9zaXRpb246XCJyZWxhdGl2ZVwiXG5cdFx0XHRjb2xvcjpjb2xvcnMuZDJcblx0XHRcdHBhZGRpbmc6XCIxNnB4IDI0cHggN3B4IDI0cHhcIlxuXG5cdFx0c2VsZWN0ID0gbmV3IExheWVyXG5cdFx0XHRwYXJlbnQ6QFxuXG5cdFx0c2VsZWN0LnN0eWxlPVxuXHRcdFx0XHR3aWR0aDpcIjEwMCVcIlxuXHRcdFx0XHRoZWlnaHQ6XCJpbml0aWFsXCJcblx0XHRcdFx0cG9zaXRpb246XCJyZWxhdGl2ZVwiXG5cdFx0XHRcdGRpc3BsYXk6XCJmbGV4XCJcblx0XHRcdFx0cGFkZGluZzpcIjBweCAyNHB4IDE4cHggMjRweFwiXG5cdFx0XHRcdGJvcmRlckJvdHRvbTpcIjFweCBzb2xpZCAjRDlFMUU4XCJcblx0XHRcdFx0XG5cdFx0aWYgQG9wdGlvbnMuaWNvbnNcblx0XHRcdGljb24gPW5ldyBTVkdMYXllclxuXHRcdFx0XHRwYXJlbnQ6c2VsZWN0XG5cdFx0XHRcdHdpZHRoOjBcblx0XHRcdFx0aGVpZ2h0OjBcblx0XHRcdFx0ZmlsbDpjb2xvcnMuZDJcblx0XHRcdFx0c3R5bGU6XG5cdFx0XHRcdFx0cG9zaXRpb246XCJyZWxhdGl2ZVwiXG5cdFx0XHRcdFx0cGFkZGluZ1RvcDpcIjJweFwiXG5cblx0XHRzZWxlY3RUZXh0ID0gbmV3IExheWVyXG5cdFx0XHRwYXJlbnQ6c2VsZWN0XG5cdFx0XHRuYW1lOlwic2VsZWN0VGV4dFwiXG5cdFx0XHRzdHlsZTpzdHlsZXMudDAzXG5cdFx0XHRodG1sOkBvcHRpb25zLnBsYWNlaG9sZGVyXG5cdFx0XG5cdFx0c2VsZWN0VGV4dC5zdHlsZT1cblx0XHRcdFx0d2lkdGg6XCJhdXRvXCJcblx0XHRcdFx0aGVpZ2h0OlwiaW5pdGlhbFwiXG5cdFx0XHRcdHBvc2l0aW9uOlwicmVsYXRpdmVcIlxuXHRcdFx0XHRjb2xvcjpjb2xvcnMuZDJcblx0XHRcdFx0dGV4dFRyYW5zZm9ybTpcImNhcGl0YWxpemVcIlxuXG5cblx0XHRzZWxlY3RUZXh0Lm9uIFwiY2hhbmdlOmh0bWxcIiwgLT5cbiAgICBcdFx0XHQjIG1jLnZhbHVlID0gc2VsZWN0Lmh0bWxcbiAgICAgICAgICAgICAgICBtYy5idG5EaXNwYXRjaChzZWxlY3RUZXh0Lmh0bWwpXG5cdFx0XG5cdFx0c2VsZWN0Lm9uQ2xpY2sgLT5cdFxuXHRcdFx0aWYgZW5hYmxlclxuXHRcdFx0XHRkcm9wLnZpc2libGU9dHJ1ZVxuXHRcdFx0XHRlbmFibGVyID0gZmFsc2Vcblx0XHRcdFx0c2V0SXRlbXMoKVxuXHRcdFx0XHR0aGlzLnBhcmVudC5icmluZ1RvRnJvbnQoKVxuXHRcdFxuXG5cdFx0ZHJvcEljb24gPSBuZXcgU1ZHTGF5ZXJcblx0XHRcdHN2ZzppY29ucy5kcm9wZG93blxuXHRcdFx0cGFyZW50OnNlbGVjdFxuXHRcdFx0eDoyNDBcblx0XHRcdHN0eWxlOlxuXHRcdFx0XHR3aWR0aDpcImF1dG9cIlxuXHRcdFx0XHRoZWlnaHQ6XCJhdXRvXCJcblxuXHRcdFx0XHRcdFx0XHRcdFxuXG5cblx0XHRzZXRJdGVtcz0gKCkgLT5cblx0XHRcdGl0ZW1zPWRyb3AuY2hpbGRyZW5cblx0XHRcdHNlbGVjdFRleHQgPSBzZWxlY3QuY2hpbGRyZW5XaXRoTmFtZShcInNlbGVjdFRleHRcIilbMF1cblx0XHRcdHZhbHVlPXNlbGVjdFRleHQuaHRtbFxuXHRcdFx0XG5cdFx0XHRmb3IgaXRlbSBpbiBpdGVtc1xuXHRcdFx0XHRsYWJlbCA9IGl0ZW0uY2hpbGRyZW5XaXRoTmFtZShcImxhYmVsXCIpWzBdXG5cdFx0XHRcdGlmIGxhYmVsLmh0bWwgaXMgdmFsdWVcblx0XHRcdFx0XHRpdGVtLnN0YXRlU3dpdGNoKFwic2VsZWN0ZWRcIilcblx0XHRcdFx0XHRsYWJlbC5zdHlsZVtcImNvbG9yXCJdPVwid2hpdGVcIlxuXHRcdFx0XHRcdGl0ZW0uaWdub3JlRXZlbnRzID0gdHJ1ZVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0aXRlbS5zdGF0ZVN3aXRjaChcImRlZmF1bHRcIilcblx0XHRcdFx0XHRsYWJlbC5zdHlsZVtcImNvbG9yXCJdPVwiIzE2MkQzRFwiXG5cdFx0XHRcdFx0aXRlbS5pZ25vcmVFdmVudHMgPSBmYWxzZVxuXHRcdFx0XG5cblxuXHRcdFxuXHRcdGRyb3AgPSBuZXcgTGF5ZXJcblx0XHRcdHBhcmVudDpzZWxlY3Rcblx0XHRcdGJhY2tncm91bmRDb2xvcjpcIndoaXRlXCJcblx0XHRcdHNoYWRvd0JsdXI6MTZcblx0XHRcdHNoYWRvd0NvbG9yOlwicmdiYSgwLDAsMCwuMTQpXCJcblx0XHRcdGNsaXA6dHJ1ZVxuXHRcdFx0dmlzaWJsZTpmYWxzZVxuXHRcdFx0c3R5bGU6XG5cdFx0XHRcdHdpZHRoOlwiODUlXCJcblx0XHRcdFx0bWFyZ2luOlwiMHB4IDI0cHhcIlxuXHRcdFx0XHRoZWlnaHQ6XCJhdXRvXCJcblx0XHRcdFx0Ym9yZGVyUmFkaXVzOlwiOHB4XCJcblx0XHRcblx0XHRmb3Igb3B0aW9uIGluIEBvcHRpb25zLml0ZW1zXG5cdFx0XHRcblx0XHRcdGxpc3RJdGVtID0gbmV3IExheWVyXG5cdFx0XHRcdHBhcmVudDpkcm9wXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjpcIndoaXRlXCJcblx0XHRcdFx0aGVpZ2h0OjM2XG5cblxuXHRcdFx0bGlzdEl0ZW0uc3R5bGU9XG5cdFx0XHRcdFx0cG9zaXRpb246XCJyZWxhdGl2ZVwiXG5cdFx0XHRcdFx0d2lkdGg6XCIxMDAlXCJcblx0XHRcdFx0XHRwYWRkaW5nOlwiNnB4IDI0cHhcIlxuXHRcdFx0XHRcdFxuXHRcdFx0XG5cdFx0XHRsaXN0TGFiZWwgPSBuZXcgTGF5ZXJcblx0XHRcdFx0cGFyZW50Omxpc3RJdGVtXG5cdFx0XHRcdGh0bWw6b3B0aW9uXG5cdFx0XHRcdG5hbWU6XCJsYWJlbFwiXG5cdFx0XHRcdHN0eWxlOnN0eWxlcy50MDFcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHRcdFx0XHRoZWlnaHQ6MzZcblx0XHRcdFxuXHRcdFx0bGlzdExhYmVsLnN0eWxlPVxuXHRcdFx0XHRwb3NpdGlvbjpcInJlbGF0aXZlXCJcblx0XHRcdFx0d2lkdGg6XCJpbml0aWFsXCJcblx0XHRcdFx0dGV4dFRyYW5zZm9ybTpcImNhcGl0YWxpemVcIlxuXHRcdFx0XHRsZWZ0OlwiMHB4XCJcblxuXHRcdFx0aWYgQG9wdGlvbnMuaWNvbnNcblx0XHRcdFx0bGlzdExhYmVsLnN0eWxlW1wibGVmdFwiXT1cIjI0cHhcIlxuXHRcdFx0XHRsaXN0SWNvbiA9IG5ldyBTVkdMYXllclxuXHRcdFx0XHRcdHBhcmVudDpsaXN0SXRlbVxuXHRcdFx0XHRcdHN2ZzppY29uc1tvcHRpb25dXG5cdFx0XHRcdFx0aGVpZ2h0OjIwXG5cdFx0XHRcdFx0d2lkdGg6MjBcblx0XHRcdFx0XHRmaWxsOmNvbG9ycy5kMlxuXHRcdFx0XHRcdHg6MThcblx0XHRcdFx0bGlzdEljb24uY2VudGVyWSgpXG5cblxuXHRcdFx0bGlzdEl0ZW0uc3RhdGVzLmhvdmVyPVxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6Y29sb3JzLmI0XG5cdFx0XHRcblx0XHRcdGxpc3RJdGVtLnN0YXRlcy5zZWxlY3RlZD1cblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOmNvbG9ycy5iMVxuXG5cblx0XHRcdGxpc3RJdGVtLm9uTW91c2VPdmVyIC0+XG5cdFx0XHRcdHRoaXMuc3RhdGVTd2l0Y2goXCJob3ZlclwiKVxuXHRcdFx0bGlzdEl0ZW0ub25Nb3VzZU91dCAtPlxuXHRcdFx0XHR0aGlzLnN0YXRlU3dpdGNoKFwiZGVmYXVsdFwiKVxuXHRcdFx0XG5cdFx0XHRsaXN0SXRlbS5vbkNsaWNrIC0+XG5cdFx0XHRcdHRoaXMucGFyZW50LnZpc2libGUgPSBmYWxzZVxuXHRcdFx0XHRsYWJlbCA9IHRoaXMuY2hpbGRyZW5XaXRoTmFtZShcImxhYmVsXCIpWzBdXG5cdFx0XHRcdG1jLnNldFNlbGVjdChsYWJlbC5odG1sKVxuXHRcdFx0XHRVdGlscy5kZWxheSAwLjIsIC0+XG5cdFx0XHRcdFx0ZW5hYmxlcj10cnVlXG5cdFx0XHRcdFxuXG5cblxuXHRidG5EaXNwYXRjaDogKHZhbHVlKSAtPlxuXHRcdEBlbWl0KEV2ZW50cy5TZWxlY3RlZCwgdmFsdWUsIEApXG5cdFxuXHRzZXRTZWxlY3Q6IChzdHJpbmcpIC0+XG5cdFx0c2VsZWN0VGV4dC5odG1sID0gc3RyaW5nXG5cdFx0aWYgQG9wdGlvbnMuaWNvbnNcblx0XHRcdGljb24ucHJvcHM9XG5cdFx0XHRcdHN2ZzppY29uc1tzdHJpbmddXG5cdFx0XHRcdHdpZHRoOjI1XG5cdFx0XHRcdGhlaWdodDoyNVxuXHRcdFx0XHRmaWxsOmNvbG9ycy5kMlxuXHRnZXRTZWxlY3Rpb246ICgpIC0+XG5cdFx0cmV0dXJuIHNlbGVjdFRleHQuaHRtbFxuXG5cdCMgZmllbGRUeXBlLm9uIEV2ZW50cy5TZWxlY3RlZCwgKHZhbHVlKSAtPiIsImNsYXNzIGV4cG9ydHMuZGF0YXNldEljb24gZXh0ZW5kcyBMYXllclxuICAgIFxuICAgIGNvbnN0cnVjdG9yOiAoQG9wdGlvbnM9e30pIC0+XG4gICAgICAgICAgICBAb3B0aW9ucy5zZXROYW1lID89XCJQcm9wZXJ0aWVzIExpc3RcIlx0XHRcdFx0XHRcdFx0XG4gICAgICAgICAgICBzdXBlciBAb3B0aW9uc1xuXG4gICAgICAgICAgICBzdHlsZXM9IHJlcXVpcmUgXCJ3aXhTdHlsZXNcIlxuICAgICAgICAgICAgY29sb3JzPSByZXF1aXJlIFwid2l4Q29sb3JzXCJcbiAgICAgICAgICAgIGljb25zPSByZXF1aXJlIFwiaWNvbnNcIlxuICAgICAgICAgICAgbWMgPSB0aGlzXG4gICAgICAgICAgICBALnByb3BzPVxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcIndoaXRlXCJcbiAgICAgICAgICAgICAgICBzaGFkb3dCbHVyOiAxNFxuICAgICAgICAgICAgICAgIHNoYWRvd0NvbG9yOiBcInJnYmEoMjIsNDUsNjEsMC4zNilcIlxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czo4XG4gICAgICAgICAgICAgICAgd2lkdGg6NTBcbiAgICAgICAgICAgICAgICBoZWlnaHQ6NTBcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpY29uID0gbmV3IFNWR0xheWVyXG4gICAgICAgICAgICAgICAgcGFyZW50Om1jXG4gICAgICAgICAgICAgICAgc3ZnOmljb25zLmRhdGFzZXRcbiAgICAgICAgICAgICAgICB3aWR0aDozMFxuICAgICAgICAgICAgICAgIGhlaWdodDoyNlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBsYWJlbCA9IG5ldyBUZXh0TGF5ZXJcbiAgICAgICAgICAgICAgICBwYXJlbnQ6aWNvblxuICAgICAgICAgICAgICAgIHRleHQ6QG9wdGlvbnMuc2V0TmFtZVxuICAgICAgICAgICAgICAgIHk6NDVcbiAgICAgICAgICAgICAgICBmb250U2l6ZToxMlxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDcwMFxuICAgICAgICAgICAgICAgIHNoYWRvd0NvbG9yOlwicmdiYSgwLDAsMCwwLjcpXCJcbiAgICAgICAgICAgICAgICBzaGFkb3dCbHVyOjNcbiAgICAgICAgICAgICAgICBjb2xvcjpcIndoaXRlXCJcbiAgICAgICAgICAgIGxhYmVsLmNlbnRlclgoKVxuXG5cblxuICAgICAgICAgICAgaWNvbi5jZW50ZXIoKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEAub25Nb3VzZURvd24gLT5cbiAgICAgICAgICAgICAgICBALmRyYWdnYWJsZS5lbmFibGVkID0gdHJ1ZVxuXG5cbiAgICAgICAgICAgIEAub25Nb3VzZVVwIC0+XG4gICAgICAgICAgICAgICAgQC5kcmFnZ2FibGUuZW5hYmxlZCA9IGZhbHNlXG5cbiIsImNsYXNzIGV4cG9ydHMuYnV0dG9uTGluayBleHRlbmRzIExheWVyXG4gICAgRXZlbnRzLk9uQ2xpY2tlZCAgPSBcIk9uQ2xpY2tlZFwiXG4gICAgY29uc3RydWN0b3I6IChAb3B0aW9ucz17fSkgLT5cblx0XHQgXHRcdFx0XHRcdFx0XHRcdFxuICAgICAgICAgICAgQG9wdGlvbnMud2lkdGggPz0yODhcbiAgICAgICAgICAgIEBvcHRpb25zLmJ0bkxhYmVsID89XCJQcmltYXJ5IGJ0blwiXG4gICAgICAgICAgICBAb3B0aW9ucy5idG5UeXBlID89XCJtYWluXCJcbiAgICAgICAgICAgIEBvcHRpb25zLmxpbmsgPz1cInRydWVcIlxuICAgICAgICAgICAgQG9wdGlvbnMubGlua0xhYmVsID89XCJMaW5rXCJcbiAgICAgICAgICAgIHN1cGVyIEBvcHRpb25zXG5cbiAgICAgICAgICAgIHN0eWxlcz0gcmVxdWlyZSBcIndpeFN0eWxlc1wiXG4gICAgICAgICAgICBjb2xvcnM9IHJlcXVpcmUgXCJ3aXhDb2xvcnNcIlxuICAgICAgICAgICAgaWNvbnM9IHJlcXVpcmUgXCJpY29uc1wiXG4gICAgICAgICAgICBwYW5lbCA9IEAucGFyZW50XG4gICAgICAgICAgICBtYyA9IHRoaXNcblxuICAgICAgICAgICAgYnRuVHlwZSA9IHttYWluOntob3Zlcjpjb2xvcnMuYjIsIGlkbGU6Y29sb3JzLmIxfSxzZWNvbmRhcnk6e2hvdmVyOmNvbG9ycy5iNCwgaWRsZTpjb2xvcnMuYjV9fVxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIEAucHJvcHM9XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpXCJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MTA4XG4gICAgICAgICAgICAgICAgd2lkdGg6QG9wdGlvbnMud2lkdGhcbiAgICAgICAgICAgICAgICB5OnBhbmVsLmhlaWdodCAtIDEwN1xuICAgICAgICAgICAgICAgIHN0eWxlOlxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOlwiMjRweFwiXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjpcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjpcImF1dG9cIlxuXG4gICAgICAgICAgICBwYW5lbC5vbiBcImNoYW5nZTpoZWlnaHRcIiwgLT5cbiAgICAgICAgICAgICAgICBtYy55PXBhbmVsLmhlaWdodCAtIDEwN1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBidG4gPSBuZXcgTGF5ZXJcbiAgICAgICAgICAgICAgICBwYXJlbnQ6QFxuICAgICAgICAgICAgICAgIGh0bWw6QG9wdGlvbnMuYnRuTGFiZWxcbiAgICAgICAgICAgICAgICBzdHlsZTpzdHlsZXMudDAxXG4gICAgICAgICAgICAgICAgbmFtZTpcImJ0blwiXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGJ0bi5zdHlsZT1cbiAgICAgICAgICAgICAgICBwb3NpdGlvbjpcInJlbGF0aXZlXCJcbiAgICAgICAgICAgICAgICBjb2xvcjpcIndoaXRlXCJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6YnRuVHlwZVtAb3B0aW9ucy5idG5UeXBlXS5pZGxlXG4gICAgICAgICAgICAgICAgaGVpZ2h0OlwiMzZweFwiXG4gICAgICAgICAgICAgICAgd2lkdGg6XCJhdXRvXCJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOlwiNnB4IDI0cHhcIlxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czpcIjMwcHhcIlxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjpcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgZGlzcGxheTpcImlubGluZS1ibG9ja1wiXG4gICAgICAgICAgICAgICAgY3Vyc29yOlwicG9pbnRlclwiXG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgYnRuLnN0YXRlcy5ob3Zlcj1cbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6YnRuVHlwZVtAb3B0aW9ucy5idG5UeXBlXS5ob3ZlclxuICAgICAgICAgICAgYnRuLnN0YXRlcy5pZGxlPVxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpidG5UeXBlW0BvcHRpb25zLmJ0blR5cGVdLmlkbGVcblxuXG4gICAgICAgICAgICBidG4ub25Nb3VzZU92ZXIgLT5cbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlU3dpdGNoKFwiaG92ZXJcIilcbiAgICAgICAgICAgIGJ0bi5vbk1vdXNlT3V0IC0+XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZVN3aXRjaChcImlkbGVcIilcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYnRuLm9uQ2xpY2sgLT4gXG4gICAgICAgICAgICAgICAgbWMuZW1pdChFdmVudHMuT25DbGlja2VkLCBtYylcbiAgICAgICAgICAgXG4gICAgICAgICAgICBpZiBAb3B0aW9ucy5saW5rXG4gICAgICAgICAgICAgICAgbGluayA9IG5ldyBMYXllclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6QFxuICAgICAgICAgICAgICAgICAgICBodG1sOkBvcHRpb25zLmxpbmtMYWJlbFxuICAgICAgICAgICAgICAgICAgICBzdHlsZTpzdHlsZXMudDAyXG4gICAgICAgICAgICAgICAgbGluay5zdHlsZT1cbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246XCJyZWxhdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOmNvbG9ycy5iMVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIzNnB4XCJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOlwiMTBweFwiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOlwiYXV0b1wiXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjpcImNlbnRlclwiXG4gICAgICAgICAgIiwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4jIENyZWF0ZWQgYnkgSm9yZGFuIFJvYmVydCBEb2Jzb24gb24gMTQgQXVndXN0IDIwMTVcbiMgXG4jIFVzZSB0byBub3JtYWxpemUgc2NyZWVuICYgb2Zmc2V0IHgseSB2YWx1ZXMgZnJvbSBjbGljayBvciB0b3VjaCBldmVudHMuXG4jXG4jIFRvIEdldCBTdGFydGVkLi4uXG4jXG4jIDEuIFBsYWNlIHRoaXMgZmlsZSBpbiBGcmFtZXIgU3R1ZGlvIG1vZHVsZXMgZGlyZWN0b3J5XG4jXG4jIDIuIEluIHlvdXIgcHJvamVjdCBpbmNsdWRlOlxuIyAgICAge1BvaW50ZXJ9ID0gcmVxdWlyZSBcIlBvaW50ZXJcIlxuI1xuIyAzLiBGb3Igc2NyZWVuIGNvb3JkaW5hdGVzOiBcbiMgICAgIGJ0bi5vbiBFdmVudHMuQ2xpY2ssIChldmVudCwgbGF5ZXIpIC0+IHByaW50IFBvaW50ZXIuc2NyZWVuKGV2ZW50LCBsYXllcilcbiMgXG4jIDQuIEZvciBsYXllciBvZmZzZXQgY29vcmRpbmF0ZXM6IFxuIyAgICAgYnRuLm9uIEV2ZW50cy5DbGljaywgKGV2ZW50LCBsYXllcikgLT4gcHJpbnQgUG9pbnRlci5vZmZzZXQoZXZlbnQsIGxheWVyKVxuI1xuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5cbmNsYXNzIGV4cG9ydHMuUG9pbnRlclxuXG5cdCMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuXHQjIFB1YmxpYyBNZXRob2RzICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcblxuXHRAc2NyZWVuID0gKGV2ZW50LCBsYXllcikgLT5cblx0XHRzY3JlZW5Bcmd1bWVudEVycm9yKCkgdW5sZXNzIGV2ZW50PyBhbmQgbGF5ZXI/XG5cdFx0ZSA9IG9mZnNldENvb3JkcyBldmVudFxuXHRcdGlmIGUueCBhbmQgZS55XG5cdFx0XHQjIE1vdXNlIEV2ZW50XG5cdFx0XHRzY3JlZW5Db29yZHMgPSBsYXllci5zY3JlZW5GcmFtZVxuXHRcdFx0ZS54ICs9IHNjcmVlbkNvb3Jkcy54XG5cdFx0XHRlLnkgKz0gc2NyZWVuQ29vcmRzLnlcblx0XHRlbHNlXG5cdFx0XHQjIFRvdWNoIEV2ZW50XG5cdFx0XHRlID0gY2xpZW50Q29vcmRzIGV2ZW50XG5cdFx0cmV0dXJuIGVcblx0XHRcdFxuXHRAb2Zmc2V0ID0gKGV2ZW50LCBsYXllcikgLT5cblx0XHRvZmZzZXRBcmd1bWVudEVycm9yKCkgdW5sZXNzIGV2ZW50PyBhbmQgbGF5ZXI/XG5cdFx0ZSA9IG9mZnNldENvb3JkcyBldmVudFxuXHRcdHVubGVzcyBlLng/IGFuZCBlLnk/XG5cdFx0XHQjIFRvdWNoIEV2ZW50XG5cdFx0XHRlID0gY2xpZW50Q29vcmRzIGV2ZW50XG5cdFx0XHR0YXJnZXRTY3JlZW5Db29yZHMgPSBsYXllci5zY3JlZW5GcmFtZVxuXHRcdFx0ZS54IC09IHRhcmdldFNjcmVlbkNvb3Jkcy54XG5cdFx0XHRlLnkgLT0gdGFyZ2V0U2NyZWVuQ29vcmRzLnlcblx0XHRyZXR1cm4gZVxuXHRcblx0IyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5cdCMgUHJpdmF0ZSBIZWxwZXIgTWV0aG9kcyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuXHRcblx0b2Zmc2V0Q29vcmRzID0gKGV2KSAgLT4gZSA9IEV2ZW50cy50b3VjaEV2ZW50IGV2OyByZXR1cm4gY29vcmRzIGUub2Zmc2V0WCwgZS5vZmZzZXRZXG5cdGNsaWVudENvb3JkcyA9IChldikgIC0+IGUgPSBFdmVudHMudG91Y2hFdmVudCBldjsgcmV0dXJuIGNvb3JkcyBlLmNsaWVudFgsIGUuY2xpZW50WVxuXHRjb29yZHMgICAgICAgPSAoeCx5KSAtPiByZXR1cm4geDp4LCB5Onlcblx0XG5cdCMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuXHQjIEVycm9yIEhhbmRsZXIgTWV0aG9kcyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcblx0XG5cdHNjcmVlbkFyZ3VtZW50RXJyb3IgPSAtPlxuXHRcdGVycm9yIG51bGxcblx0XHRjb25zb2xlLmVycm9yIFwiXCJcIlxuXHRcdFx0UG9pbnRlci5zY3JlZW4oKSBFcnJvcjogWW91IG11c3QgcGFzcyBldmVudCAmIGxheWVyIGFyZ3VtZW50cy4gXFxuXG5cdFx0XHRFeGFtcGxlOiBsYXllci5vbiBFdmVudHMuVG91Y2hTdGFydCwoZXZlbnQsbGF5ZXIpIC0+IFBvaW50ZXIuc2NyZWVuKGV2ZW50LCBsYXllcilcIlwiXCJcblx0XHRcdFxuXHRvZmZzZXRBcmd1bWVudEVycm9yID0gLT5cblx0XHRlcnJvciBudWxsXG5cdFx0Y29uc29sZS5lcnJvciBcIlwiXCJcblx0XHRcdFBvaW50ZXIub2Zmc2V0KCkgRXJyb3I6IFlvdSBtdXN0IHBhc3MgZXZlbnQgJiBsYXllciBhcmd1bWVudHMuIFxcblxuXHRcdFx0RXhhbXBsZTogbGF5ZXIub24gRXZlbnRzLlRvdWNoU3RhcnQsKGV2ZW50LGxheWVyKSAtPiBQb2ludGVyLm9mZnNldChldmVudCwgbGF5ZXIpXCJcIlwiIiwiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFhQUE7QURvQk0sT0FBTyxDQUFDO0FBS2IsTUFBQTs7OztFQUFBLE9BQUMsQ0FBQSxNQUFELEdBQVUsU0FBQyxLQUFELEVBQVEsS0FBUjtBQUNULFFBQUE7SUFBQSxJQUFBLENBQUEsQ0FBNkIsZUFBQSxJQUFXLGVBQXhDLENBQUE7TUFBQSxtQkFBQSxDQUFBLEVBQUE7O0lBQ0EsQ0FBQSxHQUFJLFlBQUEsQ0FBYSxLQUFiO0lBQ0osSUFBRyxDQUFDLENBQUMsQ0FBRixJQUFRLENBQUMsQ0FBQyxDQUFiO01BRUMsWUFBQSxHQUFlLEtBQUssQ0FBQztNQUNyQixDQUFDLENBQUMsQ0FBRixJQUFPLFlBQVksQ0FBQztNQUNwQixDQUFDLENBQUMsQ0FBRixJQUFPLFlBQVksQ0FBQyxFQUpyQjtLQUFBLE1BQUE7TUFPQyxDQUFBLEdBQUksWUFBQSxDQUFhLEtBQWIsRUFQTDs7QUFRQSxXQUFPO0VBWEU7O0VBYVYsT0FBQyxDQUFBLE1BQUQsR0FBVSxTQUFDLEtBQUQsRUFBUSxLQUFSO0FBQ1QsUUFBQTtJQUFBLElBQUEsQ0FBQSxDQUE2QixlQUFBLElBQVcsZUFBeEMsQ0FBQTtNQUFBLG1CQUFBLENBQUEs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
