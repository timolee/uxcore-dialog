webpackJsonp([2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\n__webpack_require__(39);\n\nvar _react = __webpack_require__(59);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _indexJs = __webpack_require__(60);\n\nvar _indexJs2 = _interopRequireDefault(_indexJs);\n\nvar container = undefined;\n\nfunction showDialog(content, props) {\n  if (!container) {\n    container = document.createElement('div');\n    document.body.appendChild(container);\n  }\n  var dialog = _react2['default'].render(_react2['default'].createElement(\n    _indexJs2['default'],\n    _extends({}, props, { renderToBody: false, visible: true }),\n    content\n  ), container);\n  return dialog;\n}\n\nvar DialogContent = _react2['default'].createClass({\n  displayName: 'DialogContent',\n\n  getInitialState: function getInitialState() {\n    return {\n      value: ''\n    };\n  },\n\n  onChange: function onChange(e) {\n    this.props.onChange(e.target.value);\n    this.setState({\n      value: e.target.value\n    });\n  },\n\n  render: function render() {\n    return _react2['default'].createElement(\n      'div',\n      null,\n      _react2['default'].createElement('input', { onChange: this.onChange, value: this.state.value, className: 'kuma-input' }),\n      _react2['default'].createElement(\n        'p',\n        null,\n        '第二个弹出框内容'\n      ),\n      _react2['default'].createElement(\n        'p',\n        null,\n        '第二个弹出框内容'\n      ),\n      _react2['default'].createElement(\n        'p',\n        null,\n        '第二个弹出框内容'\n      ),\n      _react2['default'].createElement(\n        'p',\n        null,\n        '第二个弹出框内容'\n      ),\n      _react2['default'].createElement(\n        'p',\n        null,\n        '第二个弹出框内容'\n      ),\n      _react2['default'].createElement(\n        'p',\n        null,\n        '第二个弹出框内容'\n      ),\n      _react2['default'].createElement(\n        'p',\n        null,\n        '第二个弹出框内容'\n      ),\n      _react2['default'].createElement(\n        'div',\n        { className: 'modal-footer' },\n        _react2['default'].createElement(\n          'button',\n          { className: 'kuma-button kuma-button-mwhite', onClick: this.props.handleClose },\n          'Close'\n        ),\n        _react2['default'].createElement(\n          'button',\n          { className: 'kuma-button kuma-button-mblue', onClick: this.props.handleSave },\n          'Save changes'\n        )\n      )\n    );\n  }\n});\n\nvar MyControl = _react2['default'].createClass({\n  displayName: 'MyControl',\n\n  onChange: function onChange(v) {\n    this.dialogContentInput = v;\n  },\n\n  beforeClose: function beforeClose() {\n    var _this = this;\n\n    return new Promise(function (resolve) {\n      setTimeout(function () {\n        if (!_this.dialogContentInput) {\n          if (confirm('input is empty, decide to close?')) {\n            resolve(true);\n          }\n        }\n      }, 100);\n    });\n  },\n\n  requestClose: function requestClose() {\n    this.d.requestClose();\n  },\n\n  handleTrigger: function handleTrigger() {\n    this.d = showDialog(_react2['default'].createElement(DialogContent, { onChange: this.onChange, handleClose: this.requestClose, handleSave: this.requestClose }), {\n      title: '第二个弹框',\n      onBeforeClose: this.beforeClose,\n      style: { width: 600 }\n    });\n  },\n\n  render: function render() {\n    return _react2['default'].createElement(\n      'div',\n      null,\n      _react2['default'].createElement(\n        'button',\n        { className: 'kuma-button kuma-button-mblue', onClick: this.handleTrigger },\n        'show dialog'\n      )\n    );\n  }\n});\n\n_react2['default'].render(_react2['default'].createElement(\n  'div',\n  null,\n  _react2['default'].createElement(\n    'h1',\n    null,\n    'render dialog standalone'\n  ),\n  _react2['default'].createElement(MyControl, null)\n), document.getElementById('content'));//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2V4YW1wbGUvc3RhbmRhbG9uZS5qc3g/OGM4MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlL2t1bWEvc3JjL2xlc3Mva3VtYS5sZXNzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRGlhbG9nIGZyb20gJy4uL2luZGV4LmpzJztcblxubGV0IGNvbnRhaW5lcjtcblxuZnVuY3Rpb24gc2hvd0RpYWxvZyhjb250ZW50LCBwcm9wcykge1xuICBpZiAoIWNvbnRhaW5lcikge1xuICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgfVxuICB2YXIgZGlhbG9nID0gUmVhY3QucmVuZGVyKFxuICAgIDxEaWFsb2cgey4uLnByb3BzfSByZW5kZXJUb0JvZHk9e2ZhbHNlfSB2aXNpYmxlPXt0cnVlfT57Y29udGVudH08L0RpYWxvZz4sIGNvbnRhaW5lcik7XG4gIHJldHVybiBkaWFsb2c7XG59XG5cbnZhciBEaWFsb2dDb250ZW50ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6ICcnXG4gICAgfTtcbiAgfSxcblxuICBvbkNoYW5nZTogZnVuY3Rpb24gKGUpIHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZhbHVlOiBlLnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoPGRpdj5cbiAgICAgIDxpbnB1dCBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9IGNsYXNzTmFtZT1cImt1bWEtaW5wdXRcIi8+XG4gICAgICA8cD7nrKzkuozkuKrlvLnlh7rmoYblhoXlrrk8L3A+XG4gICAgICA8cD7nrKzkuozkuKrlvLnlh7rmoYblhoXlrrk8L3A+XG4gICAgICA8cD7nrKzkuozkuKrlvLnlh7rmoYblhoXlrrk8L3A+XG4gICAgICA8cD7nrKzkuozkuKrlvLnlh7rmoYblhoXlrrk8L3A+XG4gICAgICA8cD7nrKzkuozkuKrlvLnlh7rmoYblhoXlrrk8L3A+XG4gICAgICA8cD7nrKzkuozkuKrlvLnlh7rmoYblhoXlrrk8L3A+XG4gICAgICA8cD7nrKzkuozkuKrlvLnlh7rmoYblhoXlrrk8L3A+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImt1bWEtYnV0dG9uIGt1bWEtYnV0dG9uLW13aGl0ZVwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuaGFuZGxlQ2xvc2V9ID5DbG9zZTwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImt1bWEtYnV0dG9uIGt1bWEtYnV0dG9uLW1ibHVlXCIgb25DbGljaz17dGhpcy5wcm9wcy5oYW5kbGVTYXZlfT5TYXZlIGNoYW5nZXM8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2Pik7XG4gIH1cbn0pO1xuXG52YXIgTXlDb250cm9sID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBvbkNoYW5nZTogZnVuY3Rpb24gKHYpIHtcbiAgICB0aGlzLmRpYWxvZ0NvbnRlbnRJbnB1dCA9IHY7XG4gIH0sXG5cbiAgYmVmb3JlQ2xvc2U6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCk9PiB7XG4gICAgICAgIGlmICghdGhpcy5kaWFsb2dDb250ZW50SW5wdXQpIHtcbiAgICAgICAgICBpZiAoY29uZmlybSgnaW5wdXQgaXMgZW1wdHksIGRlY2lkZSB0byBjbG9zZT8nKSkge1xuICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIDEwMCk7XG4gICAgfSk7XG4gIH0sXG5cbiAgcmVxdWVzdENsb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5kLnJlcXVlc3RDbG9zZSgpO1xuICB9LFxuXG4gIGhhbmRsZVRyaWdnZXI6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmQgPSBzaG93RGlhbG9nKFxuICAgICAgPERpYWxvZ0NvbnRlbnQgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IGhhbmRsZUNsb3NlPXt0aGlzLnJlcXVlc3RDbG9zZX0gaGFuZGxlU2F2ZT17dGhpcy5yZXF1ZXN0Q2xvc2V9Lz4sIHtcbiAgICAgIHRpdGxlOiBcIuesrOS6jOS4quW8ueahhlwiLFxuICAgICAgb25CZWZvcmVDbG9zZTogdGhpcy5iZWZvcmVDbG9zZSxcbiAgICAgIHN0eWxlOiB7d2lkdGg6IDYwMH1cbiAgICB9KTtcbiAgfSxcblxuXG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImt1bWEtYnV0dG9uIGt1bWEtYnV0dG9uLW1ibHVlXCIgb25DbGljaz17dGhpcy5oYW5kbGVUcmlnZ2VyfT5zaG93IGRpYWxvZzwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG5cblJlYWN0LnJlbmRlcihcbiAgPGRpdj5cbiAgICA8aDE+cmVuZGVyIGRpYWxvZyBzdGFuZGFsb25lPC9oMT5cbiAgICA8TXlDb250cm9sLz5cbiAgPC9kaXY+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXG4pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9leGFtcGxlL3N0YW5kYWxvbmUuanN4XG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBOzs7O0FBQUE7QUFDQTs7OztBQUFBO0FBQ0E7Ozs7QUFBQTtBQUNBOzs7O0FBQUE7QUFDQTs7OztBQUFBO0FBQ0E7Ozs7QUFBQTtBQUNBOzs7O0FBQUE7QUFDQTs7QUFBQTtBQUNBOztBQUFBOztBQUFBO0FBQ0E7O0FBQUE7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQTs7QUFBQTs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBOzs7O0FBQUE7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }
]);