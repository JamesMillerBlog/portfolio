/*! For license information please see video.js.LICENSE */
exports.ids=["video"],exports.modules={"./src/client/components/locs/GridContainer/ItemContainer/Video/Video.js":function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactYoutubePlayer = __webpack_require__(/*! react-youtube-player */ \"react-youtube-player\");\n\nvar _reactYoutubePlayer2 = _interopRequireDefault(_reactYoutubePlayer);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _actions = __webpack_require__(/*! ./../../../../../actions */ \"./src/client/actions/index.js\");\n\n__webpack_require__(/*! ./assets/scss */ \"./src/client/components/locs/GridContainer/ItemContainer/Video/assets/scss/index.js\");\n\n__webpack_require__(/*! ./assets/images */ \"./src/client/components/locs/GridContainer/ItemContainer/Video/assets/images/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*eslint-env browser*/\n\n\nvar Video = function (_Component) {\n\t_inherits(Video, _Component);\n\n\tfunction Video(props) {\n\t\t_classCallCheck(this, Video);\n\n\t\tvar _this = _possibleConstructorReturn(this, (Video.__proto__ || Object.getPrototypeOf(Video)).call(this, props));\n\n\t\t_this.escFunction = _this.escFunction.bind(_this);\n\t\treturn _this;\n\t}\n\n\t_createClass(Video, [{\n\t\tkey: 'componentDidMount',\n\t\tvalue: function componentDidMount() {\n\t\t\tdocument.addEventListener('keydown', this.escFunction, false);\n\t\t}\n\t}, {\n\t\tkey: 'componentWillUnmount',\n\t\tvalue: function componentWillUnmount() {\n\t\t\tdocument.removeEventListener('keydown', this.escFunction, false);\n\t\t}\n\t}, {\n\t\tkey: 'getDeviceType',\n\t\tvalue: function getDeviceType() {\n\t\t\t// if (this.props.deviceType === 'laptop') return 'playing';\n\t\t\treturn 'paused';\n\t\t}\n\t}, {\n\t\tkey: 'escFunction',\n\t\tvalue: function escFunction(event) {\n\t\t\tif (event.keyCode === 27 && this.props.activeItem !== 'hidden') this.exitVideo();\n\t\t}\n\t}, {\n\t\tkey: 'playing',\n\t\tvalue: function playing() {\n\t\t\t// test\n\t\t}\n\t}, {\n\t\tkey: 'videoContent',\n\t\tvalue: function videoContent(selectedVideo, playerState) {\n\t\t\tvar videoContent = this.props.content.itemVideo;\n\t\t\tif (selectedVideo === 'hidden') return null;\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'videoPlayer video' + selectedVideo },\n\t\t\t\t_react2.default.createElement('div', { className: 'exitBtn', onClick: this.exitVideo }),\n\t\t\t\t_react2.default.createElement(_reactYoutubePlayer2.default, {\n\t\t\t\t\tvideoId: videoContent[selectedVideo].videoID\n\t\t\t\t\t// MAKE THIS DEPENDENT ON DEVICE TYPE\n\t\t\t\t\t// IF LAPTOP START PLAYING ELSE PAUSED\n\t\t\t\t\t, playbackState: playerState,\n\t\t\t\t\tonPlay: this.playing,\n\t\t\t\t\tonEnd: this.exitVideo,\n\t\t\t\t\tconfiguration: {\n\t\t\t\t\t\tshowinfo: 0,\n\t\t\t\t\t\tcontrols: 1,\n\t\t\t\t\t\tframeborder: 0,\n\t\t\t\t\t\trel: 0,\n\t\t\t\t\t\tfs: 0,\n\t\t\t\t\t\torigin: 'https://www.youtube.com'\n\t\t\t\t\t}\n\t\t\t\t})\n\t\t\t);\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar _this2 = this;\n\n\t\t\tvar item = this.props.activeItem;\n\n\t\t\tthis.exitVideo = function () {\n\t\t\t\t_this2.props.fetchActiveItem('hidden');\n\t\t\t};\n\n\t\t\treturn this.videoContent(item, this.getDeviceType());\n\t\t}\n\t}]);\n\n\treturn Video;\n}(_react.Component);\n\n// player.getPlayerState():Number\n\n// map the state of data called from fetchUsers to users[state.users]\n\n\nvar mapStateToProps = function mapStateToProps(state) {\n\treturn {\n\t\tactiveItem: state.activeItem,\n\t\tdeviceType: state.deviceType,\n\t\tcontent: state.content\n\t};\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchActiveItem: _actions.fetchActiveItem })(Video);\n\n//# sourceURL=webpack:///./src/client/components/locs/GridContainer/ItemContainer/Video/Video.js?")},"./src/client/components/locs/GridContainer/ItemContainer/Video/assets/images/exitIcon.png":function(module,exports){eval("\n\n//# sourceURL=webpack:///./src/client/components/locs/GridContainer/ItemContainer/Video/assets/images/exitIcon.png?")},"./src/client/components/locs/GridContainer/ItemContainer/Video/assets/images/index.js":function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _exitIcon = __webpack_require__(/*! ./exitIcon.png */ "./src/client/components/locs/GridContainer/ItemContainer/Video/assets/images/exitIcon.png");\n\nObject.defineProperty(exports, \'exitIcon\', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_exitIcon).default;\n  }\n});\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//# sourceURL=webpack:///./src/client/components/locs/GridContainer/ItemContainer/Video/assets/images/index.js?')},"./src/client/components/locs/GridContainer/ItemContainer/Video/assets/scss/Video.scss":function(module,exports){eval("\n\n//# sourceURL=webpack:///./src/client/components/locs/GridContainer/ItemContainer/Video/assets/scss/Video.scss?")},"./src/client/components/locs/GridContainer/ItemContainer/Video/assets/scss/index.js":function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _Video = __webpack_require__(/*! ./Video.scss */ "./src/client/components/locs/GridContainer/ItemContainer/Video/assets/scss/Video.scss");\n\nObject.defineProperty(exports, \'Video\', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_Video).default;\n  }\n});\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//# sourceURL=webpack:///./src/client/components/locs/GridContainer/ItemContainer/Video/assets/scss/index.js?')}};