webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\n__webpack_require__(39);\n\nvar _react = __webpack_require__(59);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _indexJs = __webpack_require__(60);\n\nvar _indexJs2 = _interopRequireDefault(_indexJs);\n\nvar DialogContent = _react2['default'].createClass({\n  displayName: 'DialogContent',\n\n  getInitialState: function getInitialState() {\n    return {\n      value: ''\n    };\n  },\n\n  onChange: function onChange(e) {\n    this.props.onChange(e.target.value);\n    this.setState({\n      value: e.target.value\n    });\n  },\n\n  render: function render() {\n    return _react2['default'].createElement(\n      'div',\n      null,\n      _react2['default'].createElement('input', { onChange: this.onChange, value: this.state.value, className: 'kuma-input' }),\n      _react2['default'].createElement(\n        'p',\n        null,\n        '第二个弹出框内容'\n      ),\n      _react2['default'].createElement(\n        'p',\n        null,\n        '第二个弹出框内容'\n      ),\n      _react2['default'].createElement(\n        'p',\n        null,\n        '第二个弹出框内容'\n      ),\n      _react2['default'].createElement(\n        'p',\n        null,\n        '第二个弹出框内容'\n      ),\n      _react2['default'].createElement(\n        'p',\n        null,\n        '第二个弹出框内容'\n      ),\n      _react2['default'].createElement(\n        'p',\n        null,\n        '第二个弹出框内容'\n      ),\n      _react2['default'].createElement(\n        'p',\n        null,\n        '第二个弹出框内容'\n      ),\n      _react2['default'].createElement(\n        'div',\n        { className: 'modal-footer' },\n        _react2['default'].createElement(\n          'button',\n          { className: 'kuma-button kuma-button-mwhite', onClick: this.props.onClose },\n          'Close'\n        ),\n        _react2['default'].createElement(\n          'button',\n          { className: 'kuma-button kuma-button-mwhite', onClick: this.props.onDestroy },\n          'destroy'\n        ),\n        _react2['default'].createElement(\n          'button',\n          { className: 'kuma-button kuma-button-mblue', onClick: this.props.handleSave },\n          'Save changes'\n        )\n      )\n    );\n  }\n});\n\nvar MyControl = _react2['default'].createClass({\n  displayName: 'MyControl',\n\n  getInitialState: function getInitialState() {\n    return {\n      visible: false,\n      closable: true\n    };\n  },\n\n  onChange: function onChange(v) {\n    this.dialogContentInput = v;\n  },\n\n  handleClose: function handleClose() {\n    this.setState({\n      visible: false\n    });\n  },\n\n  handleDestroy: function handleDestroy() {\n    this.setState({\n      destroy: true\n    });\n  },\n\n  handleTrigger: function handleTrigger() {\n    var _this = this;\n\n    this.setState({\n      visible: true\n    });\n\n    // test rerender\n    setTimeout(function () {\n      _this.setState({\n        visible: true\n      });\n    }, 100);\n  },\n\n  toggleClosable: function toggleClosable() {\n    this.setState({\n      closable: !this.state.closable\n    });\n  },\n\n  render: function render() {\n    if (this.state.destroy) {\n      return null;\n    }\n    return _react2['default'].createElement(\n      'div',\n      null,\n      _react2['default'].createElement(\n        'button',\n        { className: 'kuma-button kuma-button-mblue', onClick: this.handleTrigger },\n        'show dialog'\n      ),\n      '   ',\n      _react2['default'].createElement(\n        'label',\n        null,\n        _react2['default'].createElement('input', { type: 'checkbox', checked: this.state.closable, onChange: this.toggleClosable }),\n        'closable'\n      ),\n      '   ',\n      _react2['default'].createElement(\n        'button',\n        { className: 'kuma-button kuma-button-mblue', onClick: this.handleDestroy },\n        'destroy'\n      ),\n      _react2['default'].createElement(\n        _indexJs2['default'],\n        {\n          ref: 'dialog',\n          title: '第二个弹框',\n          mask: true,\n          closable: this.state.closable,\n          visible: this.state.visible,\n          onClose: this.handleClose,\n          style: { width: 600 }\n        },\n        _react2['default'].createElement(DialogContent, { onChange: this.onChange, onClose: this.handleClose,\n          onDestroy: this.handleDestroy })\n      )\n    );\n  }\n});\n\n_react2['default'].render(_react2['default'].createElement(\n  'div',\n  null,\n  _react2['default'].createElement(\n    'h2',\n    null,\n    'render dialog inside component'\n  ),\n  _react2['default'].createElement(MyControl, null)\n), document.getElementById('content'));//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2V4YW1wbGUvaW5saW5lLmpzeD9iZTJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGUva3VtYS9zcmMvbGVzcy9rdW1hLmxlc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEaWFsb2cgZnJvbSAnLi4vaW5kZXguanMnO1xuXG5sZXQgRGlhbG9nQ29udGVudCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogJydcbiAgICB9O1xuICB9LFxuXG4gIG9uQ2hhbmdlKGUpIHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZhbHVlOiBlLnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGRpdj5cbiAgICAgIDxpbnB1dCBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9IGNsYXNzTmFtZT1cImt1bWEtaW5wdXRcIi8+XG4gICAgICA8cD7nrKzkuozkuKrlvLnlh7rmoYblhoXlrrk8L3A+XG4gICAgICA8cD7nrKzkuozkuKrlvLnlh7rmoYblhoXlrrk8L3A+XG4gICAgICA8cD7nrKzkuozkuKrlvLnlh7rmoYblhoXlrrk8L3A+XG4gICAgICA8cD7nrKzkuozkuKrlvLnlh7rmoYblhoXlrrk8L3A+XG4gICAgICA8cD7nrKzkuozkuKrlvLnlh7rmoYblhoXlrrk8L3A+XG4gICAgICA8cD7nrKzkuozkuKrlvLnlh7rmoYblhoXlrrk8L3A+XG4gICAgICA8cD7nrKzkuozkuKrlvLnlh7rmoYblhoXlrrk8L3A+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImt1bWEtYnV0dG9uIGt1bWEtYnV0dG9uLW13aGl0ZVwiIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbG9zZX0+Q2xvc2U8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJrdW1hLWJ1dHRvbiBrdW1hLWJ1dHRvbi1td2hpdGVcIiBvbkNsaWNrPXt0aGlzLnByb3BzLm9uRGVzdHJveX0gPmRlc3Ryb3k8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJrdW1hLWJ1dHRvbiBrdW1hLWJ1dHRvbi1tYmx1ZVwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuaGFuZGxlU2F2ZX0+U2F2ZSBjaGFuZ2VzPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj47XG4gIH1cbn0pO1xuXG52YXIgTXlDb250cm9sID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgY2xvc2FibGU6IHRydWVcbiAgICB9O1xuICB9LFxuXG4gIG9uQ2hhbmdlKHYpIHtcbiAgICB0aGlzLmRpYWxvZ0NvbnRlbnRJbnB1dCA9IHY7XG4gIH0sXG5cbiAgaGFuZGxlQ2xvc2UoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2aXNpYmxlOiBmYWxzZVxuICAgIH0pO1xuICB9LFxuXG4gIGhhbmRsZURlc3Ryb3koKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkZXN0cm95OiB0cnVlXG4gICAgfSk7XG4gIH0sXG5cbiAgaGFuZGxlVHJpZ2dlcigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpc2libGU6IHRydWVcbiAgICB9KTtcblxuICAgIC8vIHRlc3QgcmVyZW5kZXJcbiAgICBzZXRUaW1lb3V0KCgpPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHZpc2libGU6IHRydWVcbiAgICAgIH0pO1xuICAgIH0sIDEwMCk7XG4gIH0sXG5cbiAgdG9nZ2xlQ2xvc2FibGUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjbG9zYWJsZTogIXRoaXMuc3RhdGUuY2xvc2FibGVcbiAgICB9KTtcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuZGVzdHJveSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImt1bWEtYnV0dG9uIGt1bWEtYnV0dG9uLW1ibHVlXCIgb25DbGljaz17dGhpcy5oYW5kbGVUcmlnZ2VyfT5zaG93IGRpYWxvZzwvYnV0dG9uPlxuICAgICAgJm5ic3A7Jm5ic3A7Jm5ic3A7XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17dGhpcy5zdGF0ZS5jbG9zYWJsZX0gb25DaGFuZ2U9e3RoaXMudG9nZ2xlQ2xvc2FibGV9Lz5cbiAgICAgICAgICBjbG9zYWJsZVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgJm5ic3A7Jm5ic3A7Jm5ic3A7XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwia3VtYS1idXR0b24ga3VtYS1idXR0b24tbWJsdWVcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZURlc3Ryb3l9PmRlc3Ryb3k8L2J1dHRvbj5cbiAgICAgICAgPERpYWxvZ1xuICAgICAgICAgIHJlZj0nZGlhbG9nJ1xuICAgICAgICAgIHRpdGxlPSBcIuesrOS6jOS4quW8ueahhlwiXG4gICAgICAgICAgbWFzaz17dHJ1ZX1cbiAgICAgICAgICBjbG9zYWJsZT17dGhpcy5zdGF0ZS5jbG9zYWJsZX1cbiAgICAgICAgICB2aXNpYmxlPXt0aGlzLnN0YXRlLnZpc2libGV9XG4gICAgICAgICAgb25DbG9zZT17dGhpcy5oYW5kbGVDbG9zZX1cbiAgICAgICAgICBzdHlsZT17e3dpZHRoOiA2MDB9fVxuICAgICAgICA+XG4gICAgICAgICAgPERpYWxvZ0NvbnRlbnQgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IG9uQ2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2V9XG4gICAgICAgICAgICBvbkRlc3Ryb3k9e3RoaXMuaGFuZGxlRGVzdHJveX0vPlxuICAgICAgICA8L0RpYWxvZz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5SZWFjdC5yZW5kZXIoXG4gIDxkaXY+XG4gICAgPGgyPnJlbmRlciBkaWFsb2cgaW5zaWRlIGNvbXBvbmVudDwvaDI+XG4gICAgPE15Q29udHJvbC8+XG4gIDwvZGl2PixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxuKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZXhhbXBsZS9pbmxpbmUuanN4XG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7QUFBQTtBQUNBOzs7O0FBQUE7QUFDQTs7OztBQUFBO0FBQ0E7Ozs7QUFBQTtBQUNBOzs7O0FBQUE7QUFDQTs7OztBQUFBO0FBQ0E7Ozs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7O0FBQUE7O0FBQUE7QUFDQTs7QUFBQTs7QUFBQTtBQUNBOztBQUFBOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7O0FBQUE7O0FBQUE7O0FBRUE7OztBQUNBOztBQUVBOztBQUVBOztBQUFBOztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBOzs7O0FBQUE7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }
]);