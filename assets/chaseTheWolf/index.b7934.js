System.register("chunks:///chaseTheWolf.js", ['./rollupPluginModLoBabelHelpers-5fba63c8.js', 'cc', './utls-d7efc6a9.js', './env-b4e7c627.js'], function () {
  var _inheritsLoose, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, _createClass, _createForOfIteratorHelperLoose, _extends, _asyncToGenerator, _regeneratorRuntime, cclegacy, AudioClip, resources, _decorator, Node, NodeEventType, Component, Button, Sprite, UITransform, tween, Vec3, Prefab, instantiate, Label, input, Input, KeyCode, sys, JsonAsset, v3, settings, profiler, ResLoader, AudioEngine, SingletonMgr, StorageManager, message, PopupBase, PopupManager, utils, Logger, BaseScene;
  return {
    setters: [function (module) {
      _inheritsLoose = module.a;
      _applyDecoratedDescriptor = module._;
      _initializerDefineProperty = module.b;
      _assertThisInitialized = module.c;
      _createClass = module.d;
      _createForOfIteratorHelperLoose = module.e;
      _extends = module.i;
      _asyncToGenerator = module.f;
      _regeneratorRuntime = module.g;
    }, function (module) {
      cclegacy = module.cclegacy;
      AudioClip = module.AudioClip;
      resources = module.resources;
      _decorator = module._decorator;
      Node = module.Node;
      NodeEventType = module.NodeEventType;
      Component = module.Component;
      Button = module.Button;
      Sprite = module.Sprite;
      UITransform = module.UITransform;
      tween = module.tween;
      Vec3 = module.Vec3;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      Label = module.Label;
      input = module.input;
      Input = module.Input;
      KeyCode = module.KeyCode;
      sys = module.sys;
      JsonAsset = module.JsonAsset;
      v3 = module.v3;
      settings = module.settings;
      profiler = module.profiler;
    }, function (module) {
      ResLoader = module.R;
      AudioEngine = module.A;
      SingletonMgr = module.S;
      StorageManager = module.a;
      message = module.m;
      PopupBase = module.b;
      PopupManager = module.P;
      utils = module.u;
      Logger = module.L;
      BaseScene = module.B;
    }, null],
    execute: function () {
      cclegacy._RF.push({}, "b2281AMsHZOUIhHGQmUgQCG", "GameSound", undefined);
      var GameSound = /*#__PURE__*/function (_SingletonMgr) {
        _inheritsLoose(GameSound, _SingletonMgr);
        function GameSound() {
          return _SingletonMgr.apply(this, arguments) || this;
        }
        var _proto = GameSound.prototype;
        _proto.playEffect = function playEffect(url, bundle, loop) {
          if (bundle === void 0) {
            bundle = resources;
          }
          if (loop === void 0) {
            loop = false;
          }
          console.log("playEffect:", url);
          if (bundle == null) {
            bundle = resources;
          }
          ResLoader.ins.load(bundle.name, url, AudioClip, function (err, clip) {
            if (err) {
              console.error(err);
              return;
            }
            AudioEngine.getInstance().playEffect(clip, loop);
          });
        };
        _proto.playMusic = function playMusic(url, bundle) {
          if (bundle === void 0) {
            bundle = resources;
          }
          console.log("playMusic:", url);
          if (bundle == null) {
            bundle = resources;
          }
          ResLoader.ins.load(bundle.name, url, AudioClip, function (err, clip) {
            if (err) {
              console.error(err);
              return;
            }
            AudioEngine.getInstance().stopMusic(); // Stop any currently playing music
            AudioEngine.getInstance().playMusic(clip);
          });
        };
        return GameSound;
      }(SingletonMgr);
      cclegacy._RF.pop();
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "ba36dfRR8hL3qlwiXF2J4Mv", "BtnSwtich", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BtnSwtich = (_dec = ccclass('BtnSwtich'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BtnSwtich, _Component);
        function BtnSwtich() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "m_spriteOpen", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "m_spriteClose", _descriptor2, _assertThisInitialized(_this));
          _this.m_isSwitched = true;
          _this.m_cb = null;
          return _this;
        }
        var _proto = BtnSwtich.prototype;
        _proto.onEnable = function onEnable() {
          this.node.on(NodeEventType.TOUCH_END, this["switch"], this);
        };
        _proto.onDisable = function onDisable() {
          this.node.off(NodeEventType.TOUCH_END, this["switch"], this);
        };
        _proto["switch"] = function _switch() {
          if (this.m_isSwitched == true) {
            this.isSwitched = false;
          } else {
            this.isSwitched = true;
          }
          GameSound.getInstance().playEffect('click');
          this.m_cb && this.m_cb(this.isSwitched);
        };
        _proto.setChangeCB = function setChangeCB(callback) {
          this.m_cb = callback;
          // this.node.on(NodeEventType.TOUCH_END, callback, this);
        };

        _proto.start = function start() {};
        _proto.update = function update(deltaTime) {};
        _createClass(BtnSwtich, [{
          key: "isSwitched",
          get: function get() {
            return this.m_isSwitched;
          },
          set: function set(value) {
            this.m_isSwitched = value;
            if (this.m_isSwitched == true) {
              this.m_spriteOpen.active = true;
              this.m_spriteClose.active = false;
            } else {
              this.m_spriteOpen.active = false;
              this.m_spriteClose.active = true;
            }
          }
        }]);
        return BtnSwtich;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "m_spriteOpen", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "m_spriteClose", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class);
      cclegacy._RF.pop();
      var _dec$1, _class$1;
      cclegacy._RF.push({}, "1ad22SBjClA0oUnyEhMBjnt", "GameEvent", undefined);
      var ccclass$1 = _decorator.ccclass,
        property$1 = _decorator.property;
      var GameEventEnum = /*#__PURE__*/function (GameEventEnum) {
        GameEventEnum["gameState"] = "gameState";
        GameEventEnum["restartGame"] = "RestartGame";
        GameEventEnum["backHome"] = "BackHome";
        GameEventEnum["nextLv"] = "NextLv";
        GameEventEnum["updateTime"] = "UpdateTime";
        GameEventEnum["PAUSED"] = "Paused";
        return GameEventEnum;
      }({});
      var GameEvent = (_dec$1 = ccclass$1('GameEvent'), _dec$1(_class$1 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameEvent, _Component);
        function GameEvent() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = GameEvent.prototype;
        _proto.start = function start() {};
        _proto.update = function update(deltaTime) {};
        return GameEvent;
      }(Component)) || _class$1);
      cclegacy._RF.pop();
      var _dec$2, _dec2$1, _dec3$1, _dec4, _dec5, _class$2, _class2$1, _descriptor$1, _descriptor2$1, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "4a4f7VkXbtAgIp7Bb9WUWBF", "SettingView", undefined);
      var ccclass$2 = _decorator.ccclass,
        property$2 = _decorator.property;
      var SettingView = (_dec$2 = ccclass$2('SettingView'), _dec2$1 = property$2(BtnSwtich), _dec3$1 = property$2(BtnSwtich), _dec4 = property$2(BtnSwtich), _dec5 = property$2(Button), _dec$2(_class$2 = (_class2$1 = /*#__PURE__*/function (_PopupBase) {
        _inheritsLoose(SettingView, _PopupBase);
        function SettingView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _PopupBase.call.apply(_PopupBase, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "btnEffect", _descriptor$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnMusic", _descriptor2$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnShake", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnClose", _descriptor4, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = SettingView.prototype;
        _proto.onLoad = function onLoad() {
          _PopupBase.prototype.onLoad.call(this);
          this.btnClose.node.on(Button.EventType.CLICK, this.onClose, this);
          this.btnEffect.isSwitched = AudioEngine.getInstance().getAllEffectsVolume() > 0;
          this.btnMusic.isSwitched = AudioEngine.getInstance().getMusicVolume() > 0;
          this.btnShake.isSwitched = StorageManager.ins.getNumber("isShakeOpen", 1) === 1;
          this.btnEffect.setChangeCB(function (value) {
            StorageManager.ins.set("isEffectOpen", value ? 1 : 0);
            AudioEngine.getInstance().setAllEffectsVolume(value ? 1 : 0);
          });
          this.btnMusic.setChangeCB(function (value) {
            StorageManager.ins.set("isMusicOpen", value ? 1 : 0);
            AudioEngine.getInstance().setMusicVolume(value ? 1 : 0);
          });
          this.btnShake.setChangeCB(function (value) {
            StorageManager.ins.set("isShakeOpen", value ? 1 : 0);
          });
        };
        _proto.onClose = function onClose() {
          GameSound.getInstance().playEffect('click');
          this.node.active = false;
        };
        _proto.onEnable = function onEnable() {
          // message.on(GameEventEnum.PAUSED, this.pauseGame, this)
          message.dispatchEvent(GameEventEnum.PAUSED, true);
        };
        _proto.onDisable = function onDisable() {
          message.dispatchEvent(GameEventEnum.PAUSED, false);
        };
        return SettingView;
      }(PopupBase), (_descriptor$1 = _applyDecoratedDescriptor(_class2$1.prototype, "btnEffect", [_dec2$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2$1 = _applyDecoratedDescriptor(_class2$1.prototype, "btnMusic", [_dec3$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2$1.prototype, "btnShake", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2$1.prototype, "btnClose", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2$1)) || _class$2);
      cclegacy._RF.pop();
      var _dec$3, _dec2$2, _dec3$2, _dec4$1, _class$3, _class2$2, _descriptor$2, _descriptor2$2, _descriptor3$1, _descriptor4$1, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "a1b2cPU5fZ4kKvN7xI0VniQ", "Vehicle", undefined);
      var ccclass$3 = _decorator.ccclass,
        property$3 = _decorator.property;
      var VehicleType = /*#__PURE__*/function (VehicleType) {
        VehicleType[VehicleType["POLICE"] = 0] = "POLICE";
        VehicleType[VehicleType["OBSTACLE"] = 1] = "OBSTACLE";
        VehicleType[VehicleType["CAR"] = 2] = "CAR";
        return VehicleType;
      }({});
      var Direction = /*#__PURE__*/function (Direction) {
        Direction[Direction["HORIZONTAL"] = 0] = "HORIZONTAL";
        Direction[Direction["VERTICAL"] = 1] = "VERTICAL";
        return Direction;
      }({});
      var Vehicle = (_dec$3 = ccclass$3('Vehicle'), _dec2$2 = property$3(Sprite), _dec3$2 = property$3(Sprite), _dec4$1 = property$3(Sprite), _dec$3(_class$3 = (_class2$2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Vehicle, _Component);
        function Vehicle() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "vehicleType", _descriptor$2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "width", _descriptor2$2, _assertThisInitialized(_this));
          // 车辆宽度（格子数）
          _initializerDefineProperty(_this, "height", _descriptor3$1, _assertThisInitialized(_this));
          // 车辆高度（格子数）
          _initializerDefineProperty(_this, "gridX", _descriptor4$1, _assertThisInitialized(_this));
          // 网格X坐标
          _initializerDefineProperty(_this, "gridY", _descriptor5, _assertThisInitialized(_this));
          // 网格Y坐标
          _initializerDefineProperty(_this, "cattle", _descriptor6, _assertThisInitialized(_this));
          // 
          _initializerDefineProperty(_this, "wolf", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sheep", _descriptor8, _assertThisInitialized(_this));
          _this.m_parentSize = null;
          _this.m_direction = Direction.HORIZONTAL;
          _this.cellWidth = 100;
          _this.cellHeight = 100;
          return _this;
        }
        var _proto = Vehicle.prototype;
        _proto.start = function start() {
          this.updateDirection();
          this.updateVisual();
        }

        // 初始化车辆
        ;

        _proto.init = function init(type, w, h, x, y, cellWidth, cellHeight, parentSize) {
          this.vehicleType = type;
          this.width = w;
          this.height = h;
          this.gridX = x;
          this.gridY = y;
          this.cellWidth = cellWidth;
          this.cellHeight = cellHeight;
          this.m_parentSize = parentSize;
          if (w > h) {
            for (var index = 0; index < this.node.children.length; index++) {
              var anim = this.node.children[index];
              anim.angle = 90;
            }
            // this.node.children[0].angle = 90;
            this.direction = Direction.HORIZONTAL;
          } else {
            for (var _index = 0; _index < this.node.children.length; _index++) {
              var _anim = this.node.children[_index];
              _anim.angle = 0;
            }
            // this.node.children[0].angle = 0;
            this.direction = Direction.VERTICAL;
          }
          this.updateCar();
          this.updateDirection();
          this.updateVisual();
          this.updatePosition(false);
        };
        _proto.updateCar = function updateCar() {
          if (this.vehicleType == VehicleType.POLICE) {
            this.cattle.node.active = false;
            this.sheep.node.active = false;
            this.wolf.node.active = true;
          } else {
            if (this.width == 3 || this.height == 3) {
              this.cattle.node.active = true;
              this.sheep.node.active = false;
            } else {
              this.cattle.node.active = false;
              this.sheep.node.active = true;
            }
            // this.cattle.node.active = true;
            this.wolf.node.active = false;
          }
        } // this.updateVisual();

        // 更新方向
        ;

        _proto.updateDirection = function updateDirection() {
          this.direction = this.width > this.height ? Direction.HORIZONTAL : Direction.VERTICAL;
          console.log("Vehicle (" + this.vehicleType + ") size: " + this.width + "x" + this.height + ", direction: " + (this.direction === Direction.HORIZONTAL ? 'HORIZONTAL' : 'VERTICAL'));
        }

        // 更新视觉效果
        ;

        _proto.updateVisual = function updateVisual() {
          var sprite = this.node.getComponent(Sprite);

          // 设置节点大小
          var transform = this.node.getComponent(UITransform);
          if (transform) {
            transform.width = this.width * this.cellWidth;
            transform.height = this.height * this.cellHeight;
          }
        }

        // 更新位置
        ;

        _proto.updatePosition = function updatePosition(animated) {
          if (animated === void 0) {
            animated = true;
          }
          var worldX = (this.gridX + this.width / 2) * this.cellWidth;
          var worldY = (this.gridY + this.height / 2) * this.cellHeight;
          if (animated) {
            tween(this.node).to(0.2, {
              position: new Vec3(worldX - this.m_parentSize.width * 0.5, worldY - this.m_parentSize.height * 0.5, 0)
            }).start();
          } else {
            this.node.setPosition(worldX - this.m_parentSize.width * 0.5, worldY - this.m_parentSize.height * 0.5, 0);
          }
        }

        // 移动车辆
        ;

        _proto.move = function move(deltaX, deltaY) {
          this.gridX += deltaX;
          this.gridY += deltaY;
          this.updatePosition(true);
          return true;
        }

        // 旋转车辆90度
        ;

        _proto.rotate = function rotate() {
          if (this.vehicleType === VehicleType.OBSTACLE) {
            return false; // 障碍物不能旋转
          }

          // 交换宽高
          var temp = this.width;
          this.width = this.height;
          this.height = temp;
          this.updateDirection();
          this.updateVisual();
          this.updatePosition(true);
          return true;
        }

        // 检查是否可以移动到指定位置
        ;

        _proto.canMoveTo = function canMoveTo(newX, newY, gridWidth, gridHeight) {
          // 检查边界
          if (newX < 0 || newY < 0 || newX + this.width > gridWidth || newY + this.height > gridHeight) {
            return false;
          }
          return true;
        }

        // 获取车辆占据的所有格子
        ;

        _proto.getOccupiedCells = function getOccupiedCells() {
          var cells = [];
          for (var i = 0; i < this.width; i++) {
            for (var j = 0; j < this.height; j++) {
              cells.push({
                x: this.gridX + i,
                y: this.gridY + j
              });
            }
          }
          return cells;
        }

        // 检查是否在出口位置
        ;

        _proto.isAtExit = function isAtExit(exitX, exitY) {
          if (this.vehicleType !== VehicleType.POLICE) {
            return false;
          }

          // 检查警车是否在出口的同一行或同一列
          var cells = this.getOccupiedCells();
          for (var _iterator = _createForOfIteratorHelperLoose(cells), _step; !(_step = _iterator()).done;) {
            var cell = _step.value;
            if (cell.x === exitX && cell.y === exitY) {
              return true;
            }
          }
          return false;
        };
        _createClass(Vehicle, [{
          key: "direction",
          get:
          //水平移动

          function get() {
            return this.m_direction;
          },
          set: function set(value) {
            this.m_direction = value;
          }
        }]);
        return Vehicle;
      }(Component), (_descriptor$2 = _applyDecoratedDescriptor(_class2$2.prototype, "vehicleType", [property$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return VehicleType.CAR;
        }
      }), _descriptor2$2 = _applyDecoratedDescriptor(_class2$2.prototype, "width", [property$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor3$1 = _applyDecoratedDescriptor(_class2$2.prototype, "height", [property$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor4$1 = _applyDecoratedDescriptor(_class2$2.prototype, "gridX", [property$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2$2.prototype, "gridY", [property$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2$2.prototype, "cattle", [_dec2$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2$2.prototype, "wolf", [_dec3$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2$2.prototype, "sheep", [_dec4$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2$2)) || _class$3);
      cclegacy._RF.pop();
      var _dec$4, _dec2$3, _dec3$3, _class$4, _class2$3, _descriptor$3, _descriptor2$3, _descriptor3$2, _descriptor4$2, _descriptor5$1, _descriptor6$1, _descriptor7$1, _descriptor8$1;
      cclegacy._RF.push({}, "b2c3dTl9niQq83vEjRWeJAS", "GridManager", undefined);
      var ccclass$4 = _decorator.ccclass,
        property$4 = _decorator.property;
      var GridManager = (_dec$4 = ccclass$4('GridManager'), _dec2$3 = property$4(Prefab), _dec3$3 = property$4(Prefab), _dec$4(_class$4 = (_class2$3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GridManager, _Component);
        function GridManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "gridWidth", _descriptor$3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gridHeight", _descriptor2$3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cellWidth", _descriptor3$2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cellHeight", _descriptor4$2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "vehiclePrefab", _descriptor5$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cellPrefab", _descriptor6$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "exitX", _descriptor7$1, _assertThisInitialized(_this));
          // 出口X坐标
          _initializerDefineProperty(_this, "exitY", _descriptor8$1, _assertThisInitialized(_this));
          // 出口Y坐标
          _this.time = 300;
          //通关所需要时间
          _this.vehicles = [];
          _this.grid = [];
          // 0表示空，其他数字表示车辆ID
          _this.selectedVehicle = null;
          _this.gridContainer = null;
          return _this;
        }
        var _proto = GridManager.prototype;
        _proto.start = function start() {
          this.initGrid();
          this.createGridVisual();
        }

        // 初始化网格
        ;

        _proto.initGrid = function initGrid() {
          this.grid = [];
          for (var i = 0; i < this.gridWidth; i++) {
            this.grid[i] = [];
            for (var j = 0; j < this.gridHeight; j++) {
              this.grid[i][j] = 0;
            }
          }
        }

        // 创建网格视觉效果
        ;

        _proto.createGridVisual = function createGridVisual() {
          this.gridContainer = new Node('GridContainer');
          this.gridContainer.setParent(this.node);
          var gridTransform = this.gridContainer.addComponent(UITransform);
          gridTransform.width = this.gridWidth * this.cellWidth;
          gridTransform.height = this.gridHeight * this.cellHeight;
          var nodeTransform = this.node.getComponent(UITransform);
          nodeTransform.width = this.gridWidth * this.cellWidth;
          nodeTransform.height = this.gridHeight * this.cellHeight;
          // nodeTransform
          // 创建网格背景
          for (var i = 0; i < this.gridWidth; i++) {
            for (var j = 0; j < this.gridHeight; j++) {
              var cell = instantiate(this.cellPrefab);
              cell.setParent(this.gridContainer);
              var x = (i + 0.5) * this.cellWidth;
              var y = (j + 0.5) * this.cellHeight;
              cell.setPosition(x - gridTransform.width * 0.5, y - gridTransform.height * 0.5, 0);
              var transform = cell.getComponent(UITransform);
              if (transform) {
                transform.width = this.cellWidth;
                transform.height = this.cellHeight;
              }
            }
          }
        }

        // 加载关卡（支持 LevelData 或直接传入 VehicleData[]）
        ;

        _proto.loadLevel = function loadLevel(levelOrVehicles) {
          // 如果传入的是数组，则当作老格式：只有车辆数据
          var level;
          if (Array.isArray(levelOrVehicles)) {
            level = {
              vehicles: levelOrVehicles,
              time: 300
            };
          } else {
            level = levelOrVehicles;
          }

          // 应用关卡配置（可选）
          if (typeof level.gridWidth === 'number') this.gridWidth = level.gridWidth;
          if (typeof level.gridHeight === 'number') this.gridHeight = level.gridHeight;
          if (typeof level.cellWidth === 'number') this.cellWidth = level.cellWidth;
          if (typeof level.cellHeight === 'number') this.cellHeight = level.cellHeight;
          if (typeof level.exitX === 'number') this.exitX = level.exitX;
          if (typeof level.exitY === 'number') this.exitY = level.exitY;
          if (typeof level.time === 'number') this.time = level.time;
          message.dispatchEvent(GameEventEnum.updateTime, this.time);
          this.clearVehicles();
          this.initGrid();

          // 重建网格视觉，确保出口标记和尺寸正确
          this.clearGridVisual();
          this.createGridVisual();
          var vehicleId = 1;
          for (var _iterator = _createForOfIteratorHelperLoose(level.vehicles), _step; !(_step = _iterator()).done;) {
            var data = _step.value;
            var vehicle = this.createVehicle(data, vehicleId);
            if (vehicle) {
              this.vehicles.push(vehicle);
              this.updateGridForVehicle(vehicle, vehicleId);
              vehicleId++;
            }
          }
          console.warn('loadLevel  for vehicle:', this.grid);
        };
        _proto.clearGridVisual = function clearGridVisual() {
          if (this.gridContainer) {
            this.gridContainer.destroy();
            this.gridContainer = null;
          }
        }

        // 创建车辆
        ;

        _proto.createVehicle = function createVehicle(data, id) {
          if (!this.vehiclePrefab) {
            console.error('Vehicle prefab not set!');
            return null;
          }
          var vehicleNode = instantiate(this.vehiclePrefab);
          vehicleNode.setParent(this.node);
          vehicleNode.name = "Vehicle_" + id;
          var vehicle = vehicleNode.getComponent(Vehicle);
          if (vehicle) {
            var nodeTransform = this.node.getComponent(UITransform);
            vehicle.init(data.type, data.width, data.height, data.x, data.y, this.cellWidth, this.cellHeight, nodeTransform);
          }
          return vehicle;
        }

        // 更新网格中车辆的占用情况
        ;

        _proto.updateGridForVehicle = function updateGridForVehicle(vehicle, id) {
          var cells = vehicle.getOccupiedCells();
          for (var _iterator2 = _createForOfIteratorHelperLoose(cells), _step2; !(_step2 = _iterator2()).done;) {
            var cell = _step2.value;
            if (cell.x >= 0 && cell.x < this.gridWidth && cell.y >= 0 && cell.y < this.gridHeight) {
              this.grid[cell.x][cell.y] = id;
            }
          }
          console.warn('updateGridForVehicle  for vehicle:', vehicle, this.grid);
        }

        // 清除网格中车辆的占用
        ;

        _proto.clearGridForVehicle = function clearGridForVehicle(vehicle) {
          var cells = vehicle.getOccupiedCells();
          for (var _iterator3 = _createForOfIteratorHelperLoose(cells), _step3; !(_step3 = _iterator3()).done;) {
            var cell = _step3.value;
            if (cell.x >= 0 && cell.x < this.gridWidth && cell.y >= 0 && cell.y < this.gridHeight) {
              this.grid[cell.x][cell.y] = 0;
            }
          }
          console.warn('Clear grid for vehicle:', vehicle, this.grid);
        }

        // 检查位置是否被占用
        ;

        _proto.isCellOccupied = function isCellOccupied(x, y, excludeVehicle) {
          if (excludeVehicle === void 0) {
            excludeVehicle = null;
          }
          if (x < 0 || x >= this.gridWidth || y < 0 || y >= this.gridHeight) {
            return true;
          }
          var occupyId = this.grid[x][y];
          if (occupyId === 0) {
            return false;
          }
          if (excludeVehicle) {
            var excludeId = this.vehicles.indexOf(excludeVehicle) + 1;
            return occupyId !== excludeId;
          }
          return true;
        };
        _proto.getVehiclesId = function getVehiclesId(vehicle) {
          var vehicleId = this.vehicles.indexOf(vehicle) + 1;
          return vehicleId;
        }

        // 尝试移动车辆
        ;

        _proto.tryMoveVehicle = function tryMoveVehicle(vehicle, deltaX, deltaY) {
          if (!vehicle || vehicle.vehicleType === VehicleType.OBSTACLE) {
            return false;
          }
          var newX = vehicle.gridX + deltaX;
          var newY = vehicle.gridY + deltaY;

          // 检查新位置是否有效
          if (!vehicle.canMoveTo(newX, newY, this.gridWidth, this.gridHeight)) {
            return false;
          }

          // 检查新位置是否被其他车辆占用
          var vehicleId = this.vehicles.indexOf(vehicle) + 1;
          this.clearGridForVehicle(vehicle);
          for (var i = 0; i < vehicle.width; i++) {
            for (var j = 0; j < vehicle.height; j++) {
              if (this.isCellOccupied(newX + i, newY + j, vehicle)) {
                // 恢复原来的网格状态
                this.updateGridForVehicle(vehicle, vehicleId);
                return false;
              }
            }
          }
          GameSound.getInstance().playEffect('move');
          // 移动车辆
          vehicle.move(deltaX, deltaY);
          this.updateGridForVehicle(vehicle, vehicleId);
          return true;
        }

        // 尝试旋转车辆
        ;

        _proto.tryRotateVehicle = function tryRotateVehicle(vehicle) {
          if (!vehicle || vehicle.vehicleType === VehicleType.OBSTACLE) {
            return false;
          }
          var vehicleId = this.vehicles.indexOf(vehicle) + 1;
          var oldWidth = vehicle.width;
          var oldHeight = vehicle.height;

          // 计算旋转所需的最小空间
          // 对于 W×H 的车辆，需要 max(W,H) × max(W,H) 的空间才能旋转
          var requiredSpace = Math.max(oldWidth, oldHeight);

          // 清除当前占用
          this.clearGridForVehicle(vehicle);

          // 检查是否有足够的空间进行旋转
          // 需要检查 requiredSpace × requiredSpace 的区域是否都可用
          if (vehicle.gridX + requiredSpace > this.gridWidth || vehicle.gridY + requiredSpace > this.gridHeight) {
            this.updateGridForVehicle(vehicle, vehicleId);
            return false;
          }

          // 检查旋转所需的整个空间是否被占用
          for (var i = 0; i < requiredSpace; i++) {
            for (var j = 0; j < requiredSpace; j++) {
              if (this.isCellOccupied(vehicle.gridX + i, vehicle.gridY + j, vehicle)) {
                this.updateGridForVehicle(vehicle, vehicleId);
                return false;
              }
            }
          }

          // 执行旋转
          vehicle.rotate();
          this.updateGridForVehicle(vehicle, vehicleId);
          return true;
        }

        // 检查是否胜利
        ;

        _proto.checkWin = function checkWin() {
          for (var _iterator4 = _createForOfIteratorHelperLoose(this.vehicles), _step4; !(_step4 = _iterator4()).done;) {
            var vehicle = _step4.value;
            if (vehicle.vehicleType === VehicleType.POLICE) {
              if (vehicle.isAtExit(this.exitX, this.exitY)) {
                return true;
              }
            }
          }
          return false;
        }

        // 清除所有车辆
        ;

        _proto.clearVehicles = function clearVehicles() {
          for (var _iterator5 = _createForOfIteratorHelperLoose(this.vehicles), _step5; !(_step5 = _iterator5()).done;) {
            var vehicle = _step5.value;
            if (vehicle && vehicle.node) {
              vehicle.node.destroy();
            }
          }
          this.vehicles = [];
        }

        // 获取点击位置的车辆（使用世界坐标）
        ;

        _proto.getVehicleAtPosition = function getVehicleAtPosition(worldPos) {
          for (var _iterator6 = _createForOfIteratorHelperLoose(this.vehicles), _step6; !(_step6 = _iterator6()).done;) {
            var vehicle = _step6.value;
            var vehicleWorldPos = new Vec3();
            vehicle.node.getWorldPosition(vehicleWorldPos);
            var transform = vehicle.node.getComponent(UITransform);
            if (transform) {
              var halfWidth = transform.width / 2;
              var halfHeight = transform.height / 2;
              console.log("Checking vehicle at world pos (" + vehicleWorldPos.x + ", " + vehicleWorldPos.y + ") with size (" + transform.width + ", " + transform.height + ")");
              if (worldPos.x >= vehicleWorldPos.x - halfWidth && worldPos.x <= vehicleWorldPos.x + halfWidth && worldPos.y >= vehicleWorldPos.y - halfHeight && worldPos.y <= vehicleWorldPos.y + halfHeight) {
                console.log("Found vehicle at (" + vehicleWorldPos.x + ", " + vehicleWorldPos.y + ")");
                return vehicle;
              }
            }
          }
          console.log("No vehicle found at world pos (" + worldPos.x + ", " + worldPos.y + ")");
          return null;
        }

        // 获取所有车辆（用于求解算法）
        ;

        _proto.getVehicles = function getVehicles() {
          return this.vehicles;
        };
        return GridManager;
      }(Component), (_descriptor$3 = _applyDecoratedDescriptor(_class2$3.prototype, "gridWidth", [property$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 6;
        }
      }), _descriptor2$3 = _applyDecoratedDescriptor(_class2$3.prototype, "gridHeight", [property$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 6;
        }
      }), _descriptor3$2 = _applyDecoratedDescriptor(_class2$3.prototype, "cellWidth", [property$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 110;
        }
      }), _descriptor4$2 = _applyDecoratedDescriptor(_class2$3.prototype, "cellHeight", [property$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 110;
        }
      }), _descriptor5$1 = _applyDecoratedDescriptor(_class2$3.prototype, "vehiclePrefab", [_dec2$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6$1 = _applyDecoratedDescriptor(_class2$3.prototype, "cellPrefab", [_dec3$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7$1 = _applyDecoratedDescriptor(_class2$3.prototype, "exitX", [property$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      }), _descriptor8$1 = _applyDecoratedDescriptor(_class2$3.prototype, "exitY", [property$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2;
        }
      })), _class2$3)) || _class$4);
      cclegacy._RF.pop();
      var _dec$5, _dec2$4, _dec3$4, _class$5, _class2$4, _descriptor$4, _descriptor2$4, _descriptor3$3;
      cclegacy._RF.push({}, "c3d4eX2eJCrze8SNFZ4kKvN", "GameManager", undefined);
      var ccclass$5 = _decorator.ccclass,
        property$5 = _decorator.property;

      // 游戏状态数据结构

      var GameStateEnum = /*#__PURE__*/function (GameStateEnum) {
        GameStateEnum[GameStateEnum["READY"] = 0] = "READY";
        GameStateEnum[GameStateEnum["PLAYING"] = 1] = "PLAYING";
        GameStateEnum[GameStateEnum["PAUSED"] = 2] = "PAUSED";
        GameStateEnum[GameStateEnum["WIN"] = 3] = "WIN";
        GameStateEnum[GameStateEnum["LOSE"] = 4] = "LOSE";
        GameStateEnum[GameStateEnum["RESULT"] = 5] = "RESULT";
        return GameStateEnum;
      }({});
      var GameManager = (_dec$5 = ccclass$5('GameManager'), _dec2$4 = property$5(GridManager), _dec3$4 = property$5(Label), _dec$5(_class$5 = (_class2$4 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameManager, _Component);
        function GameManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "gridManager", _descriptor$4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "levelLabel", _descriptor2$4, _assertThisInitialized(_this));
          // public  gameManager: GameManager = null!;
          // public GameStateEnum = GameStateEnum;
          _this.m_gameState = GameStateEnum.READY;
          _initializerDefineProperty(_this, "levelsResourcePath", _descriptor3$3, _assertThisInitialized(_this));
          _this.currentLevel = 0;
          _this.moveCount = 0;
          _this.selectedVehicle = null;
          _this.levels = [];
          _this.dragStartPos = new Vec3();
          _this.isDragging = false;
          // 保存路径的数据结构
          _this.solutionPath = [];
          _this.currentHintStep = 0;
          _this.allStr = '';
          return _this;
        }
        var _proto = GameManager.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          this.gameState = GameStateEnum.READY;
          // this.gameManager = this;

          message.on(GameEventEnum.backHome, this.onBackHome, this);
          message.on(GameEventEnum.nextLv, this.nextLevel, this);
          message.on(GameEventEnum.restartGame, this.resetLevel, this);
          message.on(GameEventEnum.PAUSED, this.pauseGame, this);
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          this.loadLevelsFromResourcesOrDefault(function () {
            // this.loadLevel(this.currentLevel);
            _this2.updateUI();
          });
        };
        _proto.onKeyDown = function onKeyDown(event) {
          // debugger
          if (event.keyCode === KeyCode.SPACE) {
            // this.pauseGame();
            if (sys.isBrowser && window.location.hostname.includes('localhost')) {
              this.testAllLevels();
            }
          }
        };
        _proto.onBackHome = function onBackHome() {};
        _proto.onGameOver = function onGameOver(isWin) {
          if (isWin) {
            this.gameState = GameStateEnum.WIN;
            this.scheduleOnce(function () {
              PopupManager.instance.show({
                path: "res/dialog/SucDialog",
                bundleName: "chaseTheWolf"
              });
            }, 0.5);
          } else {
            this.gameState = GameStateEnum.LOSE;
            this.scheduleOnce(function () {
              PopupManager.instance.show({
                path: "res/dialog/FailDialog",
                bundleName: "chaseTheWolf"
              });
            }, 0.5);
          }
        };
        _proto.start = function start() {
          this.setupInput();
          // 异步从 resources 加载，如果失败将使用默认关卡
        };

        _proto.onDestroy = function onDestroy() {
          // 清理输入监听
          this.node.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
          this.node.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.node.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          this.node.off(Input.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
          message.offObj(this);
        }

        // 设置输入
        ;

        _proto.setupInput = function setupInput() {
          // 使用全局输入系统
          this.node.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
          this.node.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.node.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          this.node.on(Input.EventType.TOUCH_CANCEL, this.onTouchEnd, this);

          // if (this.rotateButton) {
          //     this.rotateButton.node.on(Button.EventType.CLICK, this.rotateSelectedVehicle, this);
          // }
        }

        // 触摸开始
        ;

        _proto.onTouchStart = function onTouchStart(event) {
          console.log('onTouchStart');
          if (this.gameState != GameStateEnum.PLAYING) {
            return;
          }

          // 获取触摸的世界坐标
          var worldPos = this.getTouchWorldPosition(event);
          console.log('Touch world pos:', worldPos.x, worldPos.y);
          this.selectedVehicle = this.gridManager.getVehicleAtPosition(worldPos);
          if (this.selectedVehicle && this.selectedVehicle.vehicleType !== VehicleType.OBSTACLE) {
            // 检测双击
            // const currentTime = Date.now();
            this.isDragging = true;
            this.dragStartPos.set(worldPos);
            console.log('id =', this.gridManager.getVehiclesId(this.selectedVehicle));
          }
        }

        // 触摸移动
        ;

        _proto.onTouchMove = function onTouchMove(event) {
          console.log('onTouchMove');
          if (!this.isDragging || !this.selectedVehicle) {
            return;
          }
          if (this.gameState != GameStateEnum.PLAYING) {
            return;
          }
          console.log('onTouchMove0');

          // 获取触摸的世界坐标
          var worldPos = this.getTouchWorldPosition(event);
          var delta = worldPos.subtract(this.dragStartPos);

          // 根据车辆方向判断移动
          console.log("Vehicle direction: " + this.selectedVehicle.direction + ", delta: (" + delta.x.toFixed(1) + ", " + delta.y.toFixed(1) + ")");
          if (this.selectedVehicle.direction === Direction.HORIZONTAL) {
            // 横向车辆只能左右移动
            if (Math.abs(delta.x) > this.gridManager.cellWidth / 2) {
              var direction = delta.x > 0 ? 1 : -1;
              console.log("Trying to move HORIZONTAL vehicle, deltaX: " + direction);
              if (this.gridManager.tryMoveVehicle(this.selectedVehicle, direction, 0)) {
                this.dragStartPos.set(worldPos);
                this.selectedVehicle = null;
                this.moveCount++;
                this.updateUI();
              }
            }
          } else if (this.selectedVehicle.direction === Direction.VERTICAL) {
            // 纵向车辆只能上下移动
            if (Math.abs(delta.y) > this.gridManager.cellHeight / 2) {
              var _direction = delta.y > 0 ? 1 : -1;
              console.log("Trying to move VERTICAL vehicle, deltaY: " + _direction);
              if (this.gridManager.tryMoveVehicle(this.selectedVehicle, 0, _direction)) {
                this.dragStartPos.set(worldPos);
                this.selectedVehicle = null;
                this.moveCount++;
                this.updateUI();
              }
            }
          }
        }

        // 触摸结束
        ;

        _proto.onTouchEnd = function onTouchEnd() {
          var _this3 = this;
          this.checkWin();
          this.isDragging = false;
          this.selectedVehicle = null;

          // 玩家移动后重新计算路径
          if (this.moveCount > 0) {
            this.scheduleOnce(function () {
              _this3.createSavePath(_this3.currentLevel);
            }, 0.1);
          }
        }

        // 获取触摸事件的世界坐标
        ;

        _proto.getTouchWorldPosition = function getTouchWorldPosition(event) {
          // 获取不同的坐标进行对比
          var location = event.getLocation(); // 视图坐标
          var uiLocation = event.getUILocation(); // UI 坐标

          console.log('event.getLocation():', location.x, location.y);
          console.log('event.getUILocation():', uiLocation.x, uiLocation.y);

          // 使用 UI 坐标（这是屏幕坐标，左下角为原点）
          return new Vec3(uiLocation.x, uiLocation.y, 0);
        };
        _proto.loadLevelsFromResourcesOrDefault = function loadLevelsFromResourcesOrDefault(onLoaded) {
          var _this4 = this;
          ResLoader.ins.load("chaseTheWolf", this.levelsResourcePath, JsonAsset, function (err, asset) {
            if (err) {
              console.warn('无法从 resources 加载关卡，使用默认关卡：', err);
              // this.levels = this.getDefaultLevels();
              if (onLoaded) onLoaded();
              return;
            }
            try {
              var raw = asset.json;
              _this4.levels = raw;
            } catch (e) {
              console.error('解析资源中的关卡 JSON 失败，使用默认关卡', e);
              // this.levels = this.getDefaultLevels();
            }

            if (onLoaded) onLoaded();
          });
        }

        // 加载关卡
        ;

        _proto.loadLevel = function loadLevel(level, isTest) {
          var _this5 = this;
          if (isTest === void 0) {
            isTest = false;
          }
          var levelData = this.getLevelData(level);
          if (!levelData) return;
          console.log("Loading level " + level + "...");
          console.log("\u6821\u51C6\u51FA\u53E3\u4F4D\u7F6E\u5230\u8B66\u8F66\u6240\u5728\u884C/\u5217\uFF1AexitX=" + levelData.exitX + ", exitY=" + levelData.exitY);
          this.gridManager.loadLevel(levelData);
          this.moveCount = 0;
          this.updateUI();
          this.gameState = GameStateEnum.READY;
          this.scheduleOnce(function () {
            _this5.gameState = GameStateEnum.PLAYING;
            _this5.updateUI();
          }, 3);
          if (isTest == true) {
            this.createSavePath(level);
            return;
          }
          // 加载关卡后计算拯救路径
          this.scheduleOnce(function () {
            _this5.createSavePath(level);
          }, 0.1);
        }

        // 获取关卡数据：优先使用 `this.levels`（来自 JSON），否则返回内置默认关卡
        ;

        _proto.getLevelData = function getLevelData(level) {
          if (this.levels && this.levels.length > 0) {
            if (level >= 0 && level < this.levels.length) {
              return this.levels[level];
            }
            return this.levels[0];
          }
          return null;
        }

        // 更新UI
        ;

        _proto.updateUI = function updateUI() {
          if (this.levelLabel) {
            this.levelLabel.string = '' + (" " + (this.currentLevel + 1)) + '';
          }
        }

        // 检查胜利
        ;

        _proto.checkWin = function checkWin() {
          if (this.gridManager.checkWin()) {
            // this.gameState = GameStateEnum.WIN;
            this.onGameOver(true);
            console.log('游戏胜利！');
            this.onLevelComplete();
          }
        }

        // 关卡完成
        ;

        _proto.onLevelComplete = function onLevelComplete() {
          console.log('Level Complete!');

          // this.scheduleOnce(()=>{
          //     this.currentLevel++;
          //     this.loadLevel(this.currentLevel);
          // },2)
        }

        // 重置关卡
        ;

        _proto.resetLevel = function resetLevel() {
          this.loadLevel(this.currentLevel);
        };
        _proto.pauseGame = function pauseGame(event, isPause) {
          if (isPause == true) {
            if (this.gameState == GameStateEnum.PLAYING || this.gameState == GameStateEnum.READY) {
              this.gameState = GameStateEnum.PAUSED;
            }
          } else {
            // if (this.onGameOver(false);
            if (this.gameState == GameStateEnum.PAUSED) {
              this.gameState = GameStateEnum.PLAYING;
            }
          }
          console.log('游戏暂停！');
        }

        // 下一关
        ;

        _proto.nextLevel = function nextLevel(str, lv) {
          if (lv != undefined) {
            this.currentLevel = lv;
          } else {
            this.currentLevel++;
          }
          this.loadLevel(this.currentLevel);
        };
        // 提示功能：执行下一步提示
        _proto.showNextHint = function showNextHint() {
          if (this.solutionPath.length === 0) {
            console.log('还没有计算出解法，正在计算...');
            this.createSavePath(this.currentLevel);
            return false;
          }
          if (this.currentHintStep >= this.solutionPath.length) {
            console.log('已经是最后一步了！');
            return false;
          }
          var step = this.solutionPath[this.currentHintStep];
          var vehicles = this.gridManager.getVehicles();
          var vehicle = vehicles[step.vehicleIndex];
          if (vehicle && this.gridManager.tryMoveVehicle(vehicle, step.deltaX, step.deltaY)) {
            this.currentHintStep++;
            this.moveCount++;
            this.updateUI();
            this.checkWin();
            console.log("\u63D0\u793A\u6B65\u9AA4 " + this.currentHintStep + "/" + this.solutionPath.length);
            return true;
          }
          return false;
        };
        _proto.testAllLevels = /*#__PURE__*/function () {
          var _testAllLevels = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var i;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  this.allStr = '';
                  i = 0;
                case 2:
                  if (!(i < this.levels.length)) {
                    _context.next = 9;
                    break;
                  }
                  // this.loadLevel(i);
                  // let data = this.getLevelData(i);
                  this.loadLevel(i, true);
                  _context.next = 6;
                  return new Promise(function (resolve) {
                    return setTimeout(resolve, 300);
                  });
                case 6:
                  i++;
                  _context.next = 2;
                  break;
                case 9:
                  console.log(this.allStr);
                case 10:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function testAllLevels() {
            return _testAllLevels.apply(this, arguments);
          }
          return testAllLevels;
        }() // 创建拯救路径（BFS 算法求解）
        ;

        _proto.createSavePath = function createSavePath(level) {
          console.log('开始计算拯救路径...');
          this.solutionPath = [];
          this.currentHintStep = 0;

          // 获取当前状态
          var initialState = this.captureGameState();

          // BFS 搜索
          var queue = [];
          var visited = new Set();
          queue.push({
            state: initialState,
            path: []
          });
          visited.add(this.stateToString(initialState));
          while (queue.length > 0) {
            var current = queue.shift();

            // 检查是否胜利
            if (this.isWinningState(current.state)) {
              this.solutionPath = current.path;
              var str = level + "\u5173\u627E\u5230\u89E3\u6CD5\uFF01\u5171\u9700 " + this.solutionPath.length + " \u6B65";
              console.log(str);
              this.allStr += str + '\n';
              return true;
            }

            // 尝试所有可能的移动
            for (var i = 0; i < current.state.vehicles.length; i++) {
              var vehicle = current.state.vehicles[i];

              // 跳过障碍物
              if (vehicle.type === VehicleType.OBSTACLE) {
                continue;
              }

              // 尝试四个方向的移动
              var moves = [{
                dx: 1,
                dy: 0
              },
              // 右
              {
                dx: -1,
                dy: 0
              },
              // 左
              {
                dx: 0,
                dy: 1
              },
              // 上
              {
                dx: 0,
                dy: -1
              } // 下
              ];

              for (var _i = 0, _moves = moves; _i < _moves.length; _i++) {
                var move = _moves[_i];
                var newState = this.tryMove(current.state, i, move.dx, move.dy);
                if (newState) {
                  var stateStr = this.stateToString(newState);
                  if (!visited.has(stateStr)) {
                    visited.add(stateStr);
                    var newPath = [].concat(current.path, [{
                      vehicleIndex: i,
                      deltaX: move.dx,
                      deltaY: move.dy
                    }]);
                    queue.push({
                      state: newState,
                      path: newPath
                    });
                  }
                }
              }
            }
          }
          console.log('未找到解法！');
          return false;
        }

        // 捕获当前游戏状态
        ;

        _proto.captureGameState = function captureGameState() {
          var vehicles = this.gridManager.getVehicles().map(function (v) {
            return {
              type: v.vehicleType,
              x: v.gridX,
              y: v.gridY,
              width: v.width,
              height: v.height
            };
          });
          return {
            time: this.gridManager.time,
            vehicles: vehicles,
            gridWidth: this.gridManager.gridWidth,
            gridHeight: this.gridManager.gridHeight,
            exitX: this.gridManager.exitX,
            exitY: this.gridManager.exitY
          };
        }

        // 将状态转换为字符串（用于去重）
        ;

        _proto.stateToString = function stateToString(state) {
          return state.vehicles.map(function (v) {
            return v.x + "," + v.y;
          }).join('|');
        }

        // 检查是否为胜利状态
        ;

        _proto.isWinningState = function isWinningState(state) {
          var policeVehicle = state.vehicles.find(function (v) {
            return v.type === VehicleType.POLICE;
          });
          if (!policeVehicle) return false;

          // 检查警车是否占据出口位置
          for (var i = 0; i < policeVehicle.width; i++) {
            for (var j = 0; j < policeVehicle.height; j++) {
              if (policeVehicle.x + i === state.exitX && policeVehicle.y + j === state.exitY) {
                return true;
              }
            }
          }
          return false;
        }

        // 尝试移动并返回新状态
        ;

        _proto.tryMove = function tryMove(state, vehicleIndex, deltaX, deltaY) {
          var vehicle = state.vehicles[vehicleIndex];

          // 检查车辆方向限制
          var isHorizontal = vehicle.width > vehicle.height;
          var isVertical = vehicle.height > vehicle.width;

          // 横向车辆只能左右移动
          if (isHorizontal && deltaY !== 0) {
            return null;
          }

          // 纵向车辆只能上下移动
          if (isVertical && deltaX !== 0) {
            return null;
          }
          var newX = vehicle.x + deltaX;
          var newY = vehicle.y + deltaY;

          // 检查边界
          if (newX < 0 || newY < 0 || newX + vehicle.width > state.gridWidth || newY + vehicle.height > state.gridHeight) {
            return null;
          }

          // 检查碰撞
          for (var i = 0; i < state.vehicles.length; i++) {
            if (i === vehicleIndex) continue;
            var other = state.vehicles[i];

            // 检查是否重叠
            if (this.checkOverlap(newX, newY, vehicle.width, vehicle.height, other.x, other.y, other.width, other.height)) {
              return null;
            }
          }

          // 创建新状态
          var newState = _extends({}, state, {
            vehicles: state.vehicles.map(function (v, i) {
              return i === vehicleIndex ? _extends({}, v, {
                x: newX,
                y: newY
              }) : _extends({}, v);
            })
          });
          return newState;
        }

        // 检查两个矩形是否重叠
        ;

        _proto.checkOverlap = function checkOverlap(x1, y1, w1, h1, x2, y2, w2, h2) {
          return !(x1 + w1 <= x2 || x2 + w2 <= x1 || y1 + h1 <= y2 || y2 + h2 <= y1);
        };
        _createClass(GameManager, [{
          key: "gameState",
          get: function get() {
            return this.m_gameState;
          },
          set: function set(value) {
            console.log('gameState', value);
            message.dispatchEvent("gameState", value);
            if (this.gameState === value) {
              return;
            }
            this.m_gameState = value;
          }
        }]);
        return GameManager;
      }(Component), (_descriptor$4 = _applyDecoratedDescriptor(_class2$4.prototype, "gridManager", [_dec2$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2$4 = _applyDecoratedDescriptor(_class2$4.prototype, "levelLabel", [_dec3$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3$3 = _applyDecoratedDescriptor(_class2$4.prototype, "levelsResourcePath", [property$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'levels';
        }
      })), _class2$4)) || _class$5);
      cclegacy._RF.pop();
      var _dec$6, _class$6, _class2$5, _descriptor$5, _descriptor2$5, _descriptor3$4, _descriptor4$3, _descriptor5$2;
      cclegacy._RF.push({}, "cedd5Ao0npOO7zy/zf87+Fl", "SheepMove", undefined);
      var ccclass$6 = _decorator.ccclass,
        property$6 = _decorator.property;
      var SheepMove = (_dec$6 = ccclass$6('SheepMove'), _dec$6(_class$6 = (_class2$5 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SheepMove, _Component);
        function SheepMove() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "moveSpeed", _descriptor$5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "minY", _descriptor2$5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "maxY", _descriptor3$4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "leftX", _descriptor4$3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rightX", _descriptor5$2, _assertThisInitialized(_this));
          _this.baseY = 0;
          _this.direction = 1;
          _this.baseScaleX = 1;
          _this.baseScaleY = 1;
          return _this;
        }
        var _proto = SheepMove.prototype;
        _proto.start = function start() {
          this.baseY = this.node.position.y;
          this.baseScaleX = Math.abs(this.node.scale.x);
          this.baseScaleY = this.node.scale.y;
          this.randomizeStart();
          this.startWalkMotion();
        };
        _proto.update = function update(deltaTime) {
          var pos = this.node.position.clone();
          pos.x += this.direction * this.moveSpeed * deltaTime;
          if (pos.x > this.rightX) {
            this.direction = -1;
            pos.x = this.rightX;
            this.randomizeY();
            this.flipByDirection();
          }
          if (pos.x < this.leftX) {
            this.direction = 1;
            pos.x = this.leftX;
            this.randomizeY();
            this.flipByDirection();
          }
          this.node.setPosition(pos);

          // 根据 Y 坐标决定层级
          this.node.setSiblingIndex(Math.floor(10000 - pos.y));
        };
        _proto.randomizeStart = function randomizeStart() {
          // const randomX = this.leftX + Math.random() * (this.rightX - this.leftX);
          // const randomY = this.minY + Math.random() * (this.maxY - this.minY);
          // this.direction = Math.random() > 0.5 ? 1 : -1;

          // this.node.setPosition(new Vec3(randomX, randomY, 0));
          // this.baseY = randomY;

          // this.moveSpeed = 25 + Math.random() * 35;

          this.flipByDirection();
        };
        _proto.randomizeY = function randomizeY() {
          var pos = this.node.position;
          var randomY = this.minY + Math.random() * (this.maxY - this.minY);
          this.baseY = randomY;
          this.node.setPosition(new Vec3(pos.x, randomY, 0));
        };
        _proto.flipByDirection = function flipByDirection() {
          var sx = this.direction > 0 ? this.baseScaleX : -this.baseScaleX;
          this.node.setScale(new Vec3(sx, this.baseScaleY, 1));
        };
        _proto.startWalkMotion = function startWalkMotion() {
          var jumpHeight = 4 + Math.random() * 3;
          var duration = 0.35 + Math.random() * 0.15;
          tween(this.node).repeatForever(tween().by(duration, {
            position: new Vec3(0, jumpHeight, 0)
          }).by(duration, {
            position: new Vec3(0, -jumpHeight, 0)
          })).start();
        };
        return SheepMove;
      }(Component), (_descriptor$5 = _applyDecoratedDescriptor(_class2$5.prototype, "moveSpeed", [property$6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 45;
        }
      }), _descriptor2$5 = _applyDecoratedDescriptor(_class2$5.prototype, "minY", [property$6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return -120;
        }
      }), _descriptor3$4 = _applyDecoratedDescriptor(_class2$5.prototype, "maxY", [property$6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 120;
        }
      }), _descriptor4$3 = _applyDecoratedDescriptor(_class2$5.prototype, "leftX", [property$6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return -420;
        }
      }), _descriptor5$2 = _applyDecoratedDescriptor(_class2$5.prototype, "rightX", [property$6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 420;
        }
      })), _class2$5)) || _class$6);
      cclegacy._RF.pop();
      var _dec$7, _dec2$5, _dec3$5, _dec4$2, _dec5$1, _dec6, _dec7, _dec8, _class$7, _class2$6, _descriptor$6, _descriptor2$6, _descriptor3$5, _descriptor4$4, _descriptor5$3, _descriptor6$2, _descriptor7$2;
      cclegacy._RF.push({}, "7fc11W8NKJAXpm1Z9OD29CX", "gameUI", undefined);
      var ccclass$7 = _decorator.ccclass,
        property$7 = _decorator.property;
      var gameUI = (_dec$7 = ccclass$7('gameUI'), _dec2$5 = property$7(Node), _dec3$5 = property$7(Label), _dec4$2 = property$7(Label), _dec5$1 = property$7(GameManager), _dec6 = property$7(Label), _dec7 = property$7(Button), _dec8 = property$7(Node), _dec$7(_class$7 = (_class2$6 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(gameUI, _Component);
        function gameUI() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "m_pro", _descriptor$6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "m_timeLabel", _descriptor2$6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "m_levelLabel", _descriptor3$5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gameManager", _descriptor4$4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "aniLabel", _descriptor5$3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "m_btnSetting", _descriptor6$2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "m_setNode", _descriptor7$2, _assertThisInitialized(_this));
          _this.m_proMax = 623;
          _this.m_curTime = 0;
          _this.m_totalTime = 10 * 60;
          _this.m_isPlayTime = false;
          _this.m_progress = null;
          return _this;
        }
        var _proto = gameUI.prototype;
        _proto.onLoad = function onLoad() {
          this.m_progress = this.m_pro.getComponent(UITransform);
          // message.dispatchEvent("gameState",value)
          message.on('gameState', this.onGameState, this);
          message.on(GameEventEnum.updateTime, this.onUpdateTime, this);
          this.m_btnSetting.node.on(Button.EventType.CLICK, this.onBtnSetting, this);
        };
        _proto.onUpdateTime = function onUpdateTime(event, time) {
          var _this2 = this;
          this.m_totalTime = time;
          this.m_curTime = 0;
          this.m_progress.width = (1 - this.m_curTime / this.m_totalTime) * this.m_proMax;
          this.m_timeLabel.string = utils.secToMin(this.m_totalTime - this.m_curTime);
          this.aniLabel.string = '3';
          tween(this.aniLabel.node).to(0.5, {
            scale: v3(2, 2, 2)
          }).to(0.5, {
            scale: Vec3.ONE
          }).call(function () {
            _this2.aniLabel.string = '2';
          }).to(0.5, {
            scale: v3(2, 2, 2)
          }).to(0.5, {
            scale: Vec3.ONE
          }).call(function () {
            _this2.aniLabel.string = '1';
          }).to(0.5, {
            scale: v3(2, 2, 2)
          }).to(0.5, {
            scale: Vec3.ONE
          }).call(function () {
            _this2.aniLabel.string = '';
          }).start();
        };
        _proto.onGameState = function onGameState(event, gameState) {
          // this.time
          if (gameState == GameStateEnum.READY) {
            this.m_curTime = 0;
          }
          if (gameState == GameStateEnum.PLAYING) {
            this.m_totalTime = this.gameManager.gridManager.time;
            this.m_isPlayTime = true;
            this.m_progress.width = this.m_proMax;
            // this.m_curTime = 0 
          } else if (gameState == GameStateEnum.PAUSED) {
            this.m_isPlayTime = false;
          } else {
            this.m_isPlayTime = false;
            this.m_progress.width = this.m_proMax;
            this.m_curTime = 0;
          }
        };
        _proto.onDestroy = function onDestroy() {
          message.offObj(this);
        };
        _proto.update = function update(dt) {
          if (this.m_isPlayTime == true) {
            if (this.m_curTime + dt >= this.m_totalTime) {
              this.m_isPlayTime = false;
              this.m_timeLabel.string = "00:00";
              this.m_curTime = 0;
              this.gameManager.onGameOver(false);
              return;
            }
            this.m_curTime += dt;
            if (this.m_progress) {
              this.m_progress.width = (1 - this.m_curTime / this.m_totalTime) * this.m_proMax;
              this.m_timeLabel.string = utils.secToMin(this.m_totalTime - this.m_curTime);
            }
          }
        };
        _proto.onBtnSetting = function onBtnSetting() {
          GameSound.getInstance().playEffect('click');
          this.m_setNode.active = !this.m_setNode.active;
        };
        _proto.onBtnTip = function onBtnTip() {
          if (!this.gameManager) {
            console.error('GameManager 未设置！');
            return;
          }
          if (this.m_isPlayTime == false) {
            // ToastMgr.showToast('游戏未开始，不能提示！');
            return;
          }

          // 显示下一步提示
          var success = this.gameManager.showNextHint();
          if (!success) {
            PopupManager.instance.showToast("没有更多提示了！");
            // console.log('');
          } else {
            GameSound.getInstance().playEffect('click');
          }
        };
        _proto.onBtnRemove = function onBtnRemove() {
          PopupManager.instance.showToast("功能未开放！");
        };
        return gameUI;
      }(Component), (_descriptor$6 = _applyDecoratedDescriptor(_class2$6.prototype, "m_pro", [_dec2$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2$6 = _applyDecoratedDescriptor(_class2$6.prototype, "m_timeLabel", [_dec3$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3$5 = _applyDecoratedDescriptor(_class2$6.prototype, "m_levelLabel", [_dec4$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4$4 = _applyDecoratedDescriptor(_class2$6.prototype, "gameManager", [_dec5$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5$3 = _applyDecoratedDescriptor(_class2$6.prototype, "aniLabel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6$2 = _applyDecoratedDescriptor(_class2$6.prototype, "m_btnSetting", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7$2 = _applyDecoratedDescriptor(_class2$6.prototype, "m_setNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2$6)) || _class$7);
      cclegacy._RF.pop();
      var _dec$8, _dec2$6, _dec3$6, _dec4$3, _dec5$2, _dec6$1, _class$8, _class2$7, _descriptor$7, _descriptor2$7, _descriptor3$6, _descriptor4$5, _descriptor5$4;
      cclegacy._RF.push({}, "bc6c8w5xkxCk6NiIF0kxLRt", "MainPage", undefined);
      var ccclass$8 = _decorator.ccclass,
        property$8 = _decorator.property;
      settings.overrideSettings('splashScreen', 'totalTime', '0');
      var MainPage = (_dec$8 = ccclass$8('MainPage'), _dec2$6 = property$8(Node), _dec3$6 = property$8(Node), _dec4$3 = property$8(Label), _dec5$2 = property$8(JsonAsset), _dec6$1 = property$8(Node), _dec$8(_class$8 = (_class2$7 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MainPage, _Component);
        function MainPage() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "m_bg", _descriptor$7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "m_btnStart", _descriptor2$7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "m_lvLabel", _descriptor3$6, _assertThisInitialized(_this));
          _this.m_lv = 0;
          _initializerDefineProperty(_this, "lvData", _descriptor4$5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "m_tipUI", _descriptor5$4, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = MainPage.prototype;
        _proto.onLoad = function onLoad() {
          if (profiler.isShowingStats()) {
            profiler.hideStats();
          }
          this.m_tipUI.active = false;
          message.on(GameEventEnum.backHome, this.onBackHome, this);
          // message.dispatchEvent("gameState", value)
          message.on("gameState", this.onGameState, this);
          //  message.dispatchEvent(GameEventEnum.backHome)

          var currentLv = StorageManager.ins.getNumber("currentLv", 0);
          this.m_lv = currentLv != null ? currentLv : 0;
          this.m_lvLabel.string = "第" + (this.m_lv + 1) + '关';
        };
        _proto.onBackHome = function onBackHome() {
          this.m_bg.active = true;
          GameSound.getInstance().playEffect('click');
        };
        _proto.onBtnStart = function onBtnStart() {
          GameSound.getInstance().playEffect('click');

          // this.m_lv = this.lvData!.json!.length;

          if (this.m_lv < this.lvData.json.length) {
            message.dispatchEvent(GameEventEnum.nextLv, this.m_lv);
            this.m_bg.active = false;
          } else {
            this.m_tipUI.active = true;
          }
        };
        _proto.onBtnCloseTip = function onBtnCloseTip() {
          this.m_tipUI.active = false;
        };
        _proto.onGameState = function onGameState(str, value) {
          // this.m_lv = value.lv;f
          if (value == GameStateEnum.WIN) {
            // this.m_lv = message.get("level");
            this.m_lv++;
            Logger.info("before win", this.m_lv);
            StorageManager.ins.set("currentLv", this.m_lv);
          }
          this.m_lvLabel.string = "第" + (this.m_lv + 1) + '关';
        };
        return MainPage;
      }(Component), (_descriptor$7 = _applyDecoratedDescriptor(_class2$7.prototype, "m_bg", [_dec2$6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2$7 = _applyDecoratedDescriptor(_class2$7.prototype, "m_btnStart", [_dec3$6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3$6 = _applyDecoratedDescriptor(_class2$7.prototype, "m_lvLabel", [_dec4$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4$5 = _applyDecoratedDescriptor(_class2$7.prototype, "lvData", [_dec5$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5$4 = _applyDecoratedDescriptor(_class2$7.prototype, "m_tipUI", [_dec6$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2$7)) || _class$8);
      cclegacy._RF.pop();
      var _dec$9, _dec2$7, _dec3$7, _dec4$4, _dec5$3, _class$9, _class2$8, _descriptor$8, _descriptor2$8, _descriptor3$7, _descriptor4$6;
      cclegacy._RF.push({}, "a3667jeTutHCaJIoYZdOM0G", "chaseTheWolf", undefined);
      var ccclass$9 = _decorator.ccclass,
        property$9 = _decorator.property;
      var chaseTheWolf = (_dec$9 = ccclass$9('chaseTheWolf'), _dec2$7 = property$9(MainPage), _dec3$7 = property$9(gameUI), _dec4$4 = property$9(GameManager), _dec5$3 = property$9(JsonAsset), _dec$9(_class$9 = (_class2$8 = /*#__PURE__*/function (_BaseScene) {
        _inheritsLoose(chaseTheWolf, _BaseScene);
        function chaseTheWolf() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseScene.call.apply(_BaseScene, [this].concat(args)) || this;
          _this.m_firstEnter = true;
          _initializerDefineProperty(_this, "m_startPage", _descriptor$8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "m_gamePage", _descriptor2$8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "m_gameManager", _descriptor3$7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lvData", _descriptor4$6, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = chaseTheWolf.prototype;
        _proto.onLoad = function onLoad() {
          this.m_firstEnter = true;
          this.m_startPage.node.active = true;
          this.m_gamePage.node.active = true;
          // this.m_gameManager.loadLevel(this.lvData);
          // if(this.lvData && this.lvData.json)
          // {
          //     console.log(this.lvData.json);
          // }

          // debugger
        };

        _proto.start = function start() {
          GameSound.getInstance().playMusic('bgm');
        };
        _proto.getMaxLevel = function getMaxLevel() {
          return this.m_gameManager.levels.length;
        };
        _proto.update = function update(deltaTime) {};
        _proto.onDestroy = function onDestroy() {
          // GameSound.getInstance().stopMusic();
          this.m_firstEnter = false;
        };
        return chaseTheWolf;
      }(BaseScene), (_descriptor$8 = _applyDecoratedDescriptor(_class2$8.prototype, "m_startPage", [_dec2$7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2$8 = _applyDecoratedDescriptor(_class2$8.prototype, "m_gamePage", [_dec3$7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3$7 = _applyDecoratedDescriptor(_class2$8.prototype, "m_gameManager", [_dec4$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4$6 = _applyDecoratedDescriptor(_class2$8.prototype, "lvData", [_dec5$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2$8)) || _class$9);
      cclegacy._RF.pop();
      var _dec$a, _class$a;
      cclegacy._RF.push({}, "35146y0KhNPSLzSjb/7FkUk", "FailDialog", undefined);
      var ccclass$a = _decorator.ccclass,
        property$a = _decorator.property;
      var FailDialog = (_dec$a = ccclass$a('FailDialog'), _dec$a(_class$a = /*#__PURE__*/function (_PopupBase) {
        _inheritsLoose(FailDialog, _PopupBase);
        function FailDialog() {
          return _PopupBase.apply(this, arguments) || this;
        }
        var _proto = FailDialog.prototype;
        _proto.onLoad = function onLoad() {
          _PopupBase.prototype.onLoad.call(this);
        };
        _proto.start = function start() {};
        _proto.update = function update(deltaTime) {}

        /**
        * 第一次创建将会在onLoad之前创建，后续将会在onEnable之前执行
        * @param data 传入数据
        */;
        _proto.init = function init(data) {};
        _proto.onBtnRestart = function onBtnRestart(event) {
          // debugger
          // Tween.stopAllByTarget(event.target as Node)
          // tween(event.target as Node)
          //     .by(0.1, { scale: v3(0.9, 0.9, 0.9) })
          //     .by(0.1, { scale: v3(1.0, 1.0, 1.0) })
          //     .start();
          GameSound.getInstance().playEffect('click', resources); // Changed from GameSound.playSound to GameSound.playEffect
          message.dispatchEvent(GameEventEnum.restartGame);
          // GameManager.gameManager.resetLevel();
          Logger.warn('点击了重新开始');
          this.hideUI();
        };
        _proto.onBtnBackHome = function onBtnBackHome(event) {
          // debugger
          // event.target
          // Tween.stopAllByTarget(event.target as Node)
          // tween(event.target as Node)
          //     .by(0.1, { scale: v3(0.9, 0.9, 0.9) })
          //     .by(0.1, { scale: v3(1.0, 1.0, 1.0) })
          //     .start();
          GameSound.getInstance().playEffect('click'); // Changed from GameSound.playSound to GameSound.playEffect
          message.dispatchEvent(GameEventEnum.backHome);
          message.dispatchEvent('BackHome');
          Logger.warn('点击了返回首页');
          this.hideUI();
        };
        return FailDialog;
      }(PopupBase)) || _class$a);
      cclegacy._RF.pop();
      var _dec$b, _class$b;
      cclegacy._RF.push({}, "0c6b1eJHchLwayeiYM56bFZ", "SucDialog", undefined);
      var ccclass$b = _decorator.ccclass,
        property$b = _decorator.property;
      var SucDialog = (_dec$b = ccclass$b('SucDialog'), _dec$b(_class$b = /*#__PURE__*/function (_PopupBase) {
        _inheritsLoose(SucDialog, _PopupBase);
        function SucDialog() {
          return _PopupBase.apply(this, arguments) || this;
        }
        var _proto = SucDialog.prototype;
        _proto.onLoad = function onLoad() {
          _PopupBase.prototype.onLoad.call(this);
        };
        _proto.start = function start() {};
        _proto.update = function update(deltaTime) {}

        /**
        * 第一次创建将会在onLoad之前创建，后续将会在onEnable之前执行
        * @param data 传入数据
        */;
        _proto.init = function init(data) {};
        _proto.onBtnNextLv = function onBtnNextLv(event) {
          // Tween.stopAllByTarget(event.target as Node)
          // tween(event.target as Node)
          //     .by(0.1, { scale: v3(0.9, 0.9, 0.9) })
          //     .by(0.1, { scale: v3(1.0, 1.0, 1.0) })
          //     .start();
          GameSound.getInstance().playEffect('click');
          Logger.warn('点击了下一关');
          message.dispatchEvent(GameEventEnum.nextLv);
          this.hideUI();
        };
        _proto.onBtnBackHome = function onBtnBackHome(event) {
          GameSound.getInstance().playEffect('click');
          message.dispatchEvent(GameEventEnum.backHome);
          Logger.warn('点击了返回首页');
          this.hideUI();
        };
        return SucDialog;
      }(PopupBase)) || _class$b);
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/chaseTheWolf', 'chunks:///chaseTheWolf.js'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});