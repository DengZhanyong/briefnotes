"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//import GroupItem from './groupitem'
_core["default"].component({
  props: {
    grouplist: {},
    index: {}
  },
  methods: {
    tap: function tap() {
      this.grouplist.name = "Parent Random(".concat(Math.random(), ")");
      var groups = this.$parent.$children.filter(function (com) {
        return com.$is === 'components/group';
      });
      var index = groups.indexOf(this);
      console.log("Clicked Group ".concat(index, ", ID is ").concat(this.grouplist.id));
    },
    chenge: function chenge(data) {
      console.log(data);
      this.$emit('chenge', data);
    }
  }
}, {info: {"components":{"groupitem":{"path":"groupitem"}},"on":{"12-3":["chenge"]}}, handlers: {'12-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.tap($event)
      })();
    
  }},'12-3': {"chenge": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.chenge($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"groupitem":{"path":"groupitem"}},"on":{"12-3":["chenge"]}}, handlers: {'12-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.tap($event)
      })();
    
  }},'12-3': {"chenge": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.chenge($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"groupitem":{"path":"groupitem"}},"on":{"12-3":["chenge"]}}, handlers: {'12-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.tap($event)
      })();
    
  }},'12-3': {"chenge": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.chenge($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"groupitem":{"path":"groupitem"}},"on":{"12-3":["chenge"]}}, handlers: {'12-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.tap($event)
      })();
    
  }},'12-3': {"chenge": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.chenge($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"groupitem":{"path":"groupitem"}},"on":{"12-3":["chenge"]}}, handlers: {'12-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.tap($event)
      })();
    
  }},'12-3': {"chenge": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.chenge($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"groupitem":{"path":"groupitem"}},"on":{"12-3":["chenge"]}}, handlers: {'12-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.tap($event)
      })();
    
  }},'12-3': {"chenge": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.chenge($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"groupitem":{"path":"groupitem"}},"on":{"12-3":["chenge"]}}, handlers: {'12-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.tap($event)
      })();
    
  }},'12-3': {"chenge": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.chenge($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"groupitem":{"path":"groupitem"}},"on":{"12-3":["chenge"]}}, handlers: {'12-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.tap($event)
      })();
    
  }},'12-3': {"chenge": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.chenge($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"groupitem":{"path":"groupitem"}},"on":{"12-3":["chenge"]}}, handlers: {'12-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.tap($event)
      })();
    
  }},'12-3': {"chenge": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.chenge($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"groupitem":{"path":"groupitem"}},"on":{"12-3":["chenge"]}}, handlers: {'12-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.tap($event)
      })();
    
  }},'12-3': {"chenge": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.chenge($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"groupitem":{"path":"groupitem"}},"on":{"12-3":["chenge"]}}, handlers: {'12-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.tap($event)
      })();
    
  }},'12-3': {"chenge": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.chenge($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"groupitem":{"path":"groupitem"}},"on":{"12-3":["chenge"]}}, handlers: {'12-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.tap($event)
      })();
    
  }},'12-3': {"chenge": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.chenge($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"groupitem":{"path":"groupitem"}},"on":{"12-3":["chenge"]}}, handlers: {'12-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.tap($event)
      })();
    
  }},'12-3': {"chenge": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.chenge($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"groupitem":{"path":"groupitem"}},"on":{"12-3":["chenge"]}}, handlers: {'12-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.tap($event)
      })();
    
  }},'12-3': {"chenge": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.chenge($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"groupitem":{"path":"groupitem"}},"on":{"12-3":["chenge"]}}, handlers: {'12-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.tap($event)
      })();
    
  }},'12-3': {"chenge": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.chenge($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"groupitem":{"path":"groupitem"}},"on":{"12-3":["chenge"]}}, handlers: {'12-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.tap($event)
      })();
    
  }},'12-3': {"chenge": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.chenge($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"groupitem":{"path":"groupitem"}},"on":{"12-3":["chenge"]}}, handlers: {'12-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.tap($event)
      })();
    
  }},'12-3': {"chenge": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.chenge($event)
      })();
    
  }}}, models: {} });