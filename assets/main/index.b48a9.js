System.register("chunks:///main.js", ['cc', './utls-d7efc6a9.js', './rollupPluginModLoBabelHelpers-5fba63c8.js', './env-b4e7c627.js'], function () {
  var cclegacy, _decorator, sys, AssetManager, NodePool, instantiate, assetManager, director, Director, Component, isValid, js, find, Node, screen, view, UITransform, v3, Label, resources, Sprite, SingletonMgr, BaseScene, PopupManager, _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, _createClass, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      sys = module.sys;
      AssetManager = module.AssetManager;
      NodePool = module.NodePool;
      instantiate = module.instantiate;
      assetManager = module.assetManager;
      director = module.director;
      Director = module.Director;
      Component = module.Component;
      isValid = module.isValid;
      js = module.js;
      find = module.find;
      Node = module.Node;
      screen = module.screen;
      view = module.view;
      UITransform = module.UITransform;
      v3 = module.v3;
      Label = module.Label;
      resources = module.resources;
      Sprite = module.Sprite;
    }, function (module) {
      SingletonMgr = module.S;
      BaseScene = module.B;
      PopupManager = module.P;
    }, function (module) {
      _inheritsLoose = module.a;
      _asyncToGenerator = module.f;
      _regeneratorRuntime = module.g;
      _createClass = module.d;
      _applyDecoratedDescriptor = module._;
      _initializerDefineProperty = module.b;
      _assertThisInitialized = module.c;
    }, null],
    execute: function () {
      cclegacy._RF.push({}, "ecd789BOLtB5rDcGgz3iAWs", "AsyncQueue", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "e2c423bjHdGeZ4+GTRfU76f", "EncryptionTool", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var EncryptionTool = /*#__PURE__*/function (_SingletonMgr) {
        _inheritsLoose(EncryptionTool, _SingletonMgr);
        function EncryptionTool() {
          var _this;
          _this = _SingletonMgr.call(this) || this;
          // 预计算密钥字节数组
          _this.m_key = 'jiami';
          _this.xxxx = 'xxx';
          _this.m_sigh = _this.xxxx + '112' + _this.xxxx + '1';
          // 缓存密钥字节数组，避免重复转换
          _this.keyBytes = void 0;
          // 缓存签名字符码数组，避免重复计算
          _this.sighCodes = void 0;
          // 异步加载管理
          _this.loadingQueue = new Map();
          _this.maxConcurrentLoads = 20;
          // 最大并发加载数
          _this.currentLoads = 0;
          _this.keyBytes = new Uint8Array(_this.m_key.length);
          for (var i = 0; i < _this.m_key.length; i++) {
            _this.keyBytes[i] = _this.m_key.charCodeAt(i);
          }

          // 预计算签名字符码数组
          _this.sighCodes = [];
          for (var _i = 0; _i < _this.m_sigh.length; _i++) {
            _this.sighCodes.push(_this.m_sigh.charCodeAt(_i));
          }
          _this.registerGlobalZipLoaders();
          return _this;
        }
        // 通过文件头判断
        var _proto = EncryptionTool.prototype;
        _proto.checkByHeader = function checkByHeader(data, key) {
          if (data.length < key.length) return false;
          for (var i = 0; i < key.length; i++) {
            if (data[i] !== key.charCodeAt(i)) {
              return false;
            }
          }
          return true;
        }

        // 加密图像数据（内存优化版）
        ;

        _proto.encryptImageData = function encryptImageData(data) {
          // 直接创建最终大小的数组，减少中间数组分配
          var finalEncryptedData = new Uint8Array(this.keyBytes.length + data.length);

          // 设置密钥标识
          finalEncryptedData.set(this.keyBytes, 0);

          // 直接在目标数组中复制和加密数据，避免中间数组
          var dataStartIndex = this.keyBytes.length;
          for (var i = 0; i < data.length; i++) {
            if (i < 200) {
              // 对前200字节进行XOR加密
              finalEncryptedData[dataStartIndex + i] = data[i] ^ this.sighCodes[i % this.sighCodes.length];
            } else {
              // 后面的数据直接复制
              finalEncryptedData[dataStartIndex + i] = data[i];
            }
          }
          return finalEncryptedData;
        }

        //解密（内存优化版）
        ;

        _proto.decryptImageData = function decryptImageData(data) {
          if (this.checkByHeader(data, this.m_key) == false) {
            return data;
          }

          // 使用subarray代替slice，避免创建新数组
          var dataToDecrypt = data.subarray(this.m_key.length);
          var decryptLength = Math.min(dataToDecrypt.length, 200);

          // 直接在原数组上解密
          for (var i = 0; i < decryptLength; i++) {
            dataToDecrypt[i] ^= this.sighCodes[i % this.sighCodes.length];
          }
          return dataToDecrypt;
        };
        _proto.registerGlobalZipLoaders = function registerGlobalZipLoaders() {
          var _this2 = this;
          if (sys.isNative == false) {
            // PNG
            AssetManager.Downloader.instance.register('.png', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url, options, onComplete) {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _this2.loadEncryptedImage(url, 'image/png', onComplete);
                  case 1:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            })));

            // jpg
            AssetManager.Downloader.instance.register('.jpg', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(url, options, onComplete) {
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _this2.loadEncryptedImage(url, 'image/jpeg', onComplete);
                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2);
            })));

            // jpeg
            AssetManager.Downloader.instance.register('.jpeg', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(url, options, onComplete) {
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    _this2.loadEncryptedImage(url, 'image/jpeg', onComplete);
                  case 1:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3);
            })));
          }
        }

        /**
         * 加载加密图片（支持多种加载模式）
         */;
        _proto.loadEncryptedImage = /*#__PURE__*/
        function () {
          var _loadEncryptedImage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(url, mimeType, onComplete) {
            var _imageData, loadPromise, imageData;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.prev = 0;
                  if (!this.loadingQueue.has(url)) {
                    _context4.next = 7;
                    break;
                  }
                  _context4.next = 4;
                  return this.loadingQueue.get(url);
                case 4:
                  _imageData = _context4.sent;
                  this.processImageData(_imageData, mimeType, onComplete);
                  return _context4.abrupt("return");
                case 7:
                  _context4.next = 9;
                  return this.waitForLoadSlot();
                case 9:
                  // 开始加载
                  loadPromise = this.loadImageDirect(url, 4);
                  this.loadingQueue.set(url, loadPromise);
                  this.currentLoads++;
                  _context4.next = 14;
                  return loadPromise;
                case 14:
                  imageData = _context4.sent;
                  // 清理队列
                  this.loadingQueue["delete"](url);
                  this.currentLoads--;

                  // 处理图片数据
                  this.processImageData(imageData, mimeType, onComplete);
                  _context4.next = 26;
                  break;
                case 20:
                  _context4.prev = 20;
                  _context4.t0 = _context4["catch"](0);
                  // 清理队列
                  this.loadingQueue["delete"](url);
                  this.currentLoads--;
                  console.error('加载加密图片失败:', _context4.t0, url);
                  onComplete(_context4.t0);
                case 26:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this, [[0, 20]]);
          }));
          function loadEncryptedImage(_x10, _x11, _x12) {
            return _loadEncryptedImage.apply(this, arguments);
          }
          return loadEncryptedImage;
        }()
        /**
         * 等待加载槽位
         */;

        _proto.waitForLoadSlot = /*#__PURE__*/
        function () {
          var _waitForLoadSlot = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  if (!(this.currentLoads >= this.maxConcurrentLoads)) {
                    _context5.next = 5;
                    break;
                  }
                  _context5.next = 3;
                  return new Promise(function (resolve) {
                    return setTimeout(resolve, 50);
                  });
                case 3:
                  _context5.next = 0;
                  break;
                case 5:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this);
          }));
          function waitForLoadSlot() {
            return _waitForLoadSlot.apply(this, arguments);
          }
          return waitForLoadSlot;
        }()
        /**
         * 处理图片数据（异步解密和创建图片）
         */;

        _proto.processImageData = /*#__PURE__*/
        function () {
          var _processImageData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(imageData, mimeType, onComplete) {
            var _this3 = this;
            var processData;
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  // 使用 requestIdleCallback 在空闲时解密
                  processData = function processData() {
                    try {
                      // 解密图片数据
                      var decryptedData = _this3.decryptImageData(imageData);

                      // 创建Blob和图片对象
                      var blob = new Blob([decryptedData], {
                        type: mimeType
                      });
                      var imageUrl = URL.createObjectURL(blob);
                      var img = new Image();
                      img.onload = function () {
                        URL.revokeObjectURL(imageUrl);
                        onComplete(null, img);
                      };
                      img.onerror = function () {
                        URL.revokeObjectURL(imageUrl);
                        onComplete(new Error('Failed to load decrypted image'));
                      };
                      img.src = imageUrl;
                    } catch (error) {
                      onComplete(error);
                    }
                  }; // 优先使用 requestIdleCallback
                  if (typeof requestIdleCallback !== 'undefined') {
                    requestIdleCallback(processData, {
                      timeout: 50
                    });
                  } else {
                    setTimeout(processData, 0);
                  }
                case 2:
                case "end":
                  return _context6.stop();
              }
            }, _callee6);
          }));
          function processImageData(_x13, _x14, _x15) {
            return _processImageData.apply(this, arguments);
          }
          return processImageData;
        }()
        /**
         * 直接加载图片（真正异步版本，不阻塞UI，支持重试机制）
         */;

        _proto.loadImageDirect = /*#__PURE__*/
        function () {
          var _loadImageDirect = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(url, maxRetries) {
            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  if (maxRetries === void 0) {
                    maxRetries = 3;
                  }
                  return _context7.abrupt("return", new Promise(function (resolve, reject) {
                    var retryCount = 0;
                    var scheduleLoad = function scheduleLoad() {
                      var xhr = new XMLHttpRequest();
                      xhr.open('GET', url, true);
                      xhr.responseType = 'arraybuffer';
                      xhr.timeout = 30000;
                      xhr.onprogress = function (event) {
                        if (event.lengthComputable) {
                          var percentComplete = event.loaded / event.total * 100;
                          // console.log(`[${retryCount > 0 ? `重试${retryCount}` : '首次'}] 加载进度: ${percentComplete.toFixed(1)}%`);
                        }
                      };

                      xhr.onload = function () {
                        if (xhr.status === 200) {
                          setTimeout(function () {
                            resolve(new Uint8Array(xhr.response));
                          }, 0);
                        } else if (retryCount < maxRetries) {
                          retryCount++;
                          console.warn("[" + url + "] HTTP " + xhr.status + " \u52A0\u8F7D\u5931\u8D25\uFF0C\u51C6\u5907\u7B2C " + retryCount + "/" + maxRetries + " \u6B21\u91CD\u8BD5...");
                          setTimeout(scheduleLoad, 500 * retryCount);
                        } else {
                          reject(new Error("HTTP " + xhr.status + ": " + xhr.statusText));
                        }
                      };
                      xhr.onerror = function () {
                        if (retryCount < maxRetries) {
                          retryCount++;
                          console.warn("[" + url + "] \u7F51\u7EDC\u9519\u8BEF\uFF0C\u51C6\u5907\u7B2C " + retryCount + "/" + maxRetries + " \u6B21\u91CD\u8BD5...");
                          setTimeout(scheduleLoad, 500 * retryCount);
                        } else {
                          reject(new Error('Network error'));
                        }
                      };
                      xhr.ontimeout = function () {
                        if (retryCount < maxRetries) {
                          retryCount++;
                          console.warn("[" + url + "] \u8BF7\u6C42\u8D85\u65F6\uFF0C\u51C6\u5907\u7B2C " + retryCount + "/" + maxRetries + " \u6B21\u91CD\u8BD5...");
                          setTimeout(scheduleLoad, 500 * retryCount);
                        } else {
                          reject(new Error('Request timeout'));
                        }
                      };
                      xhr.onabort = function () {
                        if (retryCount < maxRetries) {
                          retryCount++;
                          console.warn("[" + url + "] \u8BF7\u6C42\u88AB\u4E2D\u6B62\uFF0C\u51C6\u5907\u7B2C " + retryCount + "/" + maxRetries + " \u6B21\u91CD\u8BD5...");
                          setTimeout(scheduleLoad, 500 * retryCount);
                        } else {
                          reject(new Error('Request aborted'));
                        }
                      };
                      setTimeout(function () {
                        xhr.send();
                      }, 0);
                    };
                    if (typeof requestIdleCallback !== 'undefined') {
                      requestIdleCallback(scheduleLoad, {
                        timeout: 100
                      });
                    } else {
                      setTimeout(scheduleLoad, 0);
                    }
                  }));
                case 2:
                case "end":
                  return _context7.stop();
              }
            }, _callee7);
          }));
          function loadImageDirect(_x16, _x17) {
            return _loadImageDirect.apply(this, arguments);
          }
          return loadImageDirect;
        }();
        _createClass(EncryptionTool, [{
          key: "key",
          set: function set(keystr) {
            this.m_key = keystr;
            this.keyBytes = new Uint8Array(this.m_key.length);
            for (var i = 0; i < this.m_key.length; i++) {
              this.keyBytes[i] = this.m_key.charCodeAt(i);
            }
          }
        }, {
          key: "sign",
          set: function set(signStr) {
            this.m_sigh = signStr;
            // 预计算签名字符码数组
            this.sighCodes = [];
            for (var i = 0; i < this.m_sigh.length; i++) {
              this.sighCodes.push(this.m_sigh.charCodeAt(i));
            }
          }
        }]);
        return EncryptionTool;
      }(SingletonMgr);
      var EncryptionToolIns = EncryptionTool.getInstance();
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "f1accTIB9JJcqfSDa9tOVoL", "HttpRequest", undefined);
      cclegacy._RF.pop();
      var _dec, _class;
      cclegacy._RF.push({}, "e4f217WrCBKfJe6yYtT4dcg", "Jiami", undefined);
      var ccclass$1 = _decorator.ccclass,
        property$1 = _decorator.property;
      var jiami = (_dec = ccclass$1('jiami'), _dec(_class = /*#__PURE__*/function (_SingletonMgr) {
        _inheritsLoose(jiami, _SingletonMgr);
        function jiami() {
          return _SingletonMgr.apply(this, arguments) || this;
        }
        return jiami;
      }(SingletonMgr)) || _class);
      var jiamiCtrl = jiami.getInstance();
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "c3da6VVwAxBe7SO6MfIBLX+", "PoolManager", undefined);
      var PoolManager = /*#__PURE__*/function () {
        function PoolManager() {
          this._dictPool = new Map();
          this._dictPool = new Map();
        }
        PoolManager.getInstance = function getInstance() {
          if (!this._instance) {
            this._instance = new PoolManager();
          }
          return this._instance;
        }

        /**
         * 获取预制体名称
         */;
        var _proto = PoolManager.prototype;
        _proto.getPrefabName = function getPrefabName(prefab) {
          var _prefab$data;
          // @ts-ignore
          return ((_prefab$data = prefab.data) == null ? void 0 : _prefab$data.name) || prefab.name;
        }

        /**
         * 获取或创建对象池
         */;
        _proto.getOrCreatePool = function getOrCreatePool(name) {
          var pool = this._dictPool.get(name);
          if (!pool) {
            pool = new NodePool();
            this._dictPool.set(name, pool);
          }
          return pool;
        }

        /**
         * 根据预设从对象池中获取对应节点
         */;
        _proto.getNode = function getNode(prefab, parent) {
          var name = this.getPrefabName(prefab);
          var pool = this.getOrCreatePool(name);
          var node = null;

          // 从对象池获取节点
          if (pool.size() > 0) {
            node = pool.get();
          }

          // 如果对象池为空或节点无效，创建新节点
          if (!node || !node.isValid) {
            node = instantiate(prefab);
          }
          if (parent) {
            node.parent = parent;
          }
          node.active = true;
          return node;
        }

        /**
         * 将对应节点放回对象池中
         */;
        _proto.putNode = function putNode(node) {
          if (!node || !node.isValid) {
            return;
          }
          var name = node.name;
          var pool = this.getOrCreatePool(name);

          // 重置节点状态
          node.active = false;
          node.parent = null;
          pool.put(node);
        }

        /**
         * 根据名称，清除对应对象池
         */;
        _proto.clearPool = function clearPool(name) {
          var pool = this._dictPool.get(name);
          if (pool) {
            pool.clear();
            this._dictPool["delete"](name);
          }
        }

        /**
         * 清除所有对象池
         */;
        _proto.clearAllPools = function clearAllPools() {
          this._dictPool.forEach(function (pool) {
            return pool.clear();
          });
          this._dictPool.clear();
        }

        /**
         * 获取对象池大小
         */;
        _proto.getPoolSize = function getPoolSize(name) {
          var pool = this._dictPool.get(name);
          return pool ? pool.size() : 0;
        }

        /**
         * 预生成对象池
         * @param prefab 预制体
         * @param num 需要预加载的数量
         */;
        _proto.preloadPool = function preloadPool(prefab, num) {
          if (num <= 0) return;
          var name = this.getPrefabName(prefab);
          var pool = this.getOrCreatePool(name);
          for (var i = 0; i < num; i++) {
            var node = instantiate(prefab);
            node.active = false;
            pool.put(node);
          }
        };
        return PoolManager;
      }();
      // 使用 Map 替代普通对象
      PoolManager._instance = void 0;
      var poolMgr = PoolManager.getInstance();
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "d91e19aNhRLrq/Q3UzZpT+k", "SubGameMgr", undefined);
      var SubGameMgr = /*#__PURE__*/function (_SingletonMgr) {
        _inheritsLoose(SubGameMgr, _SingletonMgr);
        function SubGameMgr() {
          return _SingletonMgr.apply(this, arguments) || this;
        }
        var _proto = SubGameMgr.prototype;
        _proto.enterSubGame = /*#__PURE__*/function () {
          var _enterSubGame = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(subGame, param, onCompleteCallback, onProgressCallback) {
            var _this = this;
            var onComplete;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (onProgressCallback === void 0) {
                    onProgressCallback = null;
                  }
                  if (!(subGame == SubGameMgr.current)) {
                    _context.next = 4;
                    break;
                  }
                  if (onCompleteCallback) onCompleteCallback(false, null);
                  return _context.abrupt("return");
                case 4:
                  onComplete = function onComplete(err, bundle) {
                    if (err) {
                      console.error("onBtnGoToDecryGame Decryption", err);
                      if (onCompleteCallback) onCompleteCallback(err, bundle);
                      return;
                    }
                    SubGameMgr.gameRes.set(subGame, bundle);
                    bundle.loadScene(subGame, onProgressCallback, function (err, scene) {
                      if (err) {
                        console.error("error enter ", subGame, err);
                        if (onCompleteCallback) onCompleteCallback(err, bundle);
                        return;
                      }
                      director.runScene(scene, function () {
                        //加载场景前的回调
                        SubGameMgr.current = subGame;
                        if (onCompleteCallback) onCompleteCallback(err, bundle);
                        _this.deleteOtherGame();
                      }, function () {
                        // PoolMgr.ins().clearDict()

                        //加载场景后的回调
                        var ts = Director.instance.getScene().getComponentInChildren(subGame);
                        //用于不同场景传递参数
                        //@ts-ignore
                        if (ts && ts.addParam) {
                          //@ts-ignore
                          ts.addParam(param);
                        }
                      });
                    });
                  };
                  _context.next = 7;
                  return this.loadSubGameBundleSync(subGame, onComplete, onProgressCallback);
                case 7:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function enterSubGame(_x, _x2, _x3, _x4) {
            return _enterSubGame.apply(this, arguments);
          }
          return enterSubGame;
        }();
        _proto.deleteOtherGame = function deleteOtherGame() {
          var _this2 = this;
          // ResLoader.ins.dump();
          // console.log("before deleteOtherGame");
          SubGameMgr.gameRes.forEach(function (value, key) {
            if (key != SubGameMgr.current && SubGameMgr.comCache.get(key) == null) {
              console.log("delete bundle:", value);
              _this2.unloadSubGameBundle(key);
              SubGameMgr.gameRes["delete"](key);
            }
          });
          // ResLoader.ins.dump();
          // console.log("after deleteOtherGame");
        };

        _proto.exitSubGame = function exitSubGame() {
          if (SubGameMgr.current) {
            SubGameMgr.gameRes["delete"](SubGameMgr.current);
            this.unloadSubGameBundle(SubGameMgr.current);
            SubGameMgr.current = null;
          }
        };
        _proto.loadSubGameBundleSync = function loadSubGameBundleSync(bundleName, onComplete, onProgressCallback) {
          if (onComplete === void 0) {
            onComplete = null;
          }
          if (onProgressCallback === void 0) {
            onProgressCallback = null;
          }
          return new Promise(function (resolve, reject) {
            assetManager.loadBundle(bundleName, onProgressCallback, function (err, bundle) {
              if (onComplete) {
                onComplete(err, bundle);
              }
              resolve(!err);
            });
          });
        };
        _proto.unloadSubGameBundle = function unloadSubGameBundle(gameName) {
          var bundle = assetManager.getBundle(gameName);
          if (bundle) {
            bundle.releaseAll();
            assetManager.removeBundle(bundle);
          }
        };
        return SubGameMgr;
      }(SingletonMgr);
      SubGameMgr.current = null;
      SubGameMgr.gameRes = new Map();
      SubGameMgr.comCache = new Map();
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "2b12as/RalGqLUSu6P8kF5m", "ToastMgr", undefined);
      var ccclass$2 = _decorator.ccclass,
        property$2 = _decorator.property;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "38184htAlZNULxGQdycQm37", "engineEx", undefined);

      //动态合图
      // macro.CLEANUP_IMAGE_CACHE = false;
      // DynamicAtlasManager.instance.enabled = true;
      // DynamicAtlasManager.instance.maxFrameSize = 512;
      // DynamicAtlasManager.instance.maxAtlasCount = 10;

      //固定帧率
      // game.frameRate = 50;

      // console.log('xsxs',macro.CLEANUP_IMAGE_CACHE)
      // console.log('xsxs',DynamicAtlasManager.instance.enabled)
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "bbb89vN2XhPt6h3mgR/Bw1c", "EventDispatcher", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "c4d57vTmPtHqIF+CnyIsWix", "Decorators", undefined);
      var _FIND_OPTIONS_ = "_FIND_OPTIONS_";
      function __find(path, node, type) {
        var temp = find(path, node);
        if (js.isChildClassOf(type, Component)) {
          var comp = temp == null ? void 0 : temp.getComponent(type);
          return comp;
        }
        return temp;
      }

      /**
       * @description 当onLoad时，自动对所有注入的成员变量设置set&get方法,当成员变量首次调用时对成员变量赋值
       * @param path 相对于当前脚本this.node的搜索路径,当rootPath非空，则以rootPath为根节点查找
       * @param type 查找组件类型
       * @param rootPath 相对于this.node 的搜索路径，不传入时，以当的this.node为根节点进行查找
       * @returns 
       */
      function injectComp(path, type, rootPath) {
        return function (target, member) {
          if (!(target instanceof Component)) {
            console.error("无法注入,仅支持 Component 组件");
            return;
          }
          var obj = target;
          if (!Reflect.has(target, _FIND_OPTIONS_)) {
            var __onLoad = obj.onLoad;
            obj.onLoad = function () {
              var self = this;
              var fOption = Reflect.get(self, _FIND_OPTIONS_);
              var _loop = function _loop(key) {
                var ele = Reflect.get(fOption, key);
                if (!Reflect.get(self, ele.member)) {
                  Reflect.defineProperty(self, ele.member, {
                    enumerable: true,
                    configurable: true,
                    get: function get() {
                      var node = self.node;
                      if (ele.root) {
                        var rootMemberName = "__" + ele.root.replace(/\//g, "_");
                        if (!isValid(self[rootMemberName])) {
                          self[rootMemberName] = __find(ele.root, node, Node);
                        }
                        node = self[rootMemberName];
                        if (!isValid(node)) {
                          console.error(js.getClassName(self) + "." + ele.root + "\u8282\u70B9\u4E0D\u5B58\u5728!!!");
                        }
                      }
                      if (!isValid(self[key])) {
                        self[key] = __find(ele.path, node, ele.type);
                      }
                      return self[key];
                    },
                    set: function set(v) {
                      self[key] = v;
                    }
                  });
                }
              };
              for (var key in fOption) {
                _loop(key);
              }
              __onLoad && Reflect.apply(__onLoad, this, arguments);
            };
            var __onDestroy = obj.onDestroy;
            obj.onDestroy = function () {
              var self = this;
              var fOption = Reflect.get(self, _FIND_OPTIONS_);
              for (var key in fOption) {
                var ele = Reflect.get(fOption, key);
                Reflect.deleteProperty(self, ele.member);
              }
              __onDestroy && Reflect.apply(__onDestroy, this, arguments);
            };
            Reflect.defineProperty(target, _FIND_OPTIONS_, {
              value: {}
            });
          }
          var option = {
            path: path,
            type: type,
            member: member,
            root: rootPath
          };
          var attribute = "__" + member;
          var fOption = Reflect.get(target, _FIND_OPTIONS_);
          Reflect.defineProperty(fOption, attribute, {
            value: option,
            enumerable: true
          });
        };
      }
      cclegacy._RF.pop();
      var _dec$1, _class$1;
      cclegacy._RF.push({}, "79e71Mw7d9JBJ5N4SnucO5V", "BigBgFit", undefined);
      var ccclass$3 = _decorator.ccclass,
        property$3 = _decorator.property;
      var BigBgFit = (_dec$1 = ccclass$3('comm/BigBgFit'), _dec$1(_class$1 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BigBgFit, _Component);
        function BigBgFit() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.m_cb = null;
          return _this;
        }
        var _proto = BigBgFit.prototype;
        _proto.onLoad = function onLoad() {
          this.m_cb = this.resize.bind(this);
          window.addEventListener("resize", this.m_cb);
          screen.on('orientation-change', this.resize, this);
        };
        _proto.start = function start() {
          this.resize();
        };
        _proto.onDestroy = function onDestroy() {
          window.removeEventListener("resize", this.m_cb);
          screen.off('orientation-change', this.resize, this);
          // screen.off("window-resize", this.resize);
          // screen.off("orientation-change", this.resize);
          // screen.off("fullscreen-change", this.resize);
        };

        _proto.resize = function resize() {
          var size = view.getVisibleSize();
          var nodeSize = this.node.getComponent(UITransform);
          var maxSize = Math.max((size == null ? void 0 : size.width) / nodeSize.width, size.height / nodeSize.height);
          if (maxSize < 1) {
            maxSize = 1;
          }
          this.node.setScale(v3(maxSize, maxSize, maxSize));
        };
        return BigBgFit;
      }(Component)) || _class$1);
      cclegacy._RF.pop();
      var _dec$2, _class$2;
      cclegacy._RF.push({}, "cc1dbQePbhChrW1504Dbzf2", "MaskFit", undefined);
      var ccclass$4 = _decorator.ccclass,
        property$4 = _decorator.property;
      var MaskFit = (_dec$2 = ccclass$4('MaskFit'), _dec$2(_class$2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MaskFit, _Component);
        function MaskFit() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.m_cb = null;
          return _this;
        }
        var _proto = MaskFit.prototype;
        _proto.onLoad = function onLoad() {
          this.m_cb = this.resize.bind(this);
          window.addEventListener("resize", this.m_cb);
          screen.on('orientation-change', this.resize, this);
        };
        _proto.start = function start() {
          this.resize();
        };
        _proto.resize = function resize() {
          var size = view.getVisibleSize();
          var nodeSize = this.node.getComponent(UITransform);
          nodeSize.setContentSize(size);
        };
        _proto.onDestroy = function onDestroy() {
          window.removeEventListener("resize", this.m_cb);
          screen.off('orientation-change', this.resize, this);
        };
        return MaskFit;
      }(Component)) || _class$2);
      cclegacy._RF.pop();
      var _dec$3, _dec2, _dec3, _class$3, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "8f3ecwjUphOarfOLpN9QQTa", "loading", undefined);
      var ccclass$5 = _decorator.ccclass,
        property$5 = _decorator.property;
      var err = {};
      function handleError(errorMessage, file, line, message, error) {
        if (!err[errorMessage]) {
          var stackStr = new Error().stack;
          console.trace("上报错误", stackStr, errorMessage, file, line, message, error);
          // M.http.postError(JSON.stringify({ err: errorMessage }))
          err[errorMessage] = errorMessage;
        }
      }
      if (sys.isNative) {
        var __handler = null;
        //@ts-ignore
        if (window['__errorHandler']) {
          //@ts-ignore
          __handler = window['__errorHandler'];
        }
        //@ts-ignore
        window['__errorHandler'] = function (errorMessage, file, line, message, error) {
          // my.log('游戏报错,原生系统')
          handleError(errorMessage, file, line, message, error);
          if (__handler) {
            __handler(errorMessage, file, line, message, error);
          }
        };
      }
      if (sys.isBrowser) {
        var _handler = null;
        if (window.onerror) {
          _handler = window.onerror;
        }
        window.onerror = function (errorMessage, file, line, message, error) {
          // my.log('游戏报错,浏览器')
          handleError(errorMessage, file, line, message, error);
          if (_handler) {
            _handler(errorMessage, file, line, message, error);
          }
        };
        window.addEventListener('unhandledrejection', function (event) {
          // console.error(`UNHANDLED PROMISE REJECTION: ${event.reason}`);
          handleError(event.reason, '', 0, '', event.reason);
        });
      }

      // if (DEBUG) profiler.showStats();
      var version = "1.0.1";
      var loading = (_dec$3 = ccclass$5('loading'), _dec2 = property$5(Label), _dec3 = injectComp("bgNode/bg", Sprite), _dec$3(_class$3 = (_class2 = /*#__PURE__*/function (_BaseScene) {
        _inheritsLoose(loading, _BaseScene);
        function loading() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseScene.call.apply(_BaseScene, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "m_label", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bg", _descriptor2, _assertThisInitialized(_this));
          _this.m_progress = 0;
          _this.m_total = 0;
          _this.m_percent = 0;
          return _this;
        }
        var _proto = loading.prototype;
        _proto.start = function start() {
          console.log("version", version);

          //    GameSound.getInstance().playMusic('bgm');
          this.enterGame();
        };
        _proto.enterGame = function enterGame() {
          var _this2 = this;
          var onCompleteCallback = function onCompleteCallback(err, bundle) {
            if (err) {
              console.error("onCompleteCallback", err);
              PopupManager.instance.showToast('加载资源失败,请重试');
              return;
            }
            console.log("进入场景成功");
            assetManager.loadBundle(resources.name, function (err, bundle) {
              // if (onComplete) {
              //     onComplete(err, bundle);
              // }
              // resolve(!err);
            });
          };
          var onProgressCallback = function onProgressCallback(progress, total) {
            // console.log("加载进度", progress, total);
            _this2.m_progress = progress;
            _this2.m_total = total;
            var curPercent = progress / total * 100;
            if (curPercent > _this2.m_percent) {
              _this2.m_percent = curPercent;
            }
            _this2.m_label.string = _this2.m_percent.toFixed(2) + "%";
          };

          // PopupManager.instance.show({ path: "res/dialog/SucDialog", bundleName: "chaseTheWolf" })

          SubGameMgr.getInstance().enterSubGame("chaseTheWolf", null, onCompleteCallback, onProgressCallback);
        };
        return loading;
      }(BaseScene), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "m_label", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class$3);
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///main.js'); 
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