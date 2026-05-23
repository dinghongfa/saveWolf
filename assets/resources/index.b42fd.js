System.register("chunks:///resources.js", ['./rollupPluginModLoBabelHelpers-5fba63c8.js', 'cc', './env-b4e7c627.js'], function () {
  var _createForOfIteratorHelperLoose, _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, gfx, Material, game, Game, sp, director, Director, resources, Texture2D, renderer, Color, Component, StencilManager, assert, VERSION, murmurhash2_32_gc, Label, BitmapFont, Sprite, MotionStreak, TiledLayer, _decorator, JSB;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.e;
      _applyDecoratedDescriptor = module._;
      _inheritsLoose = module.a;
      _initializerDefineProperty = module.b;
      _assertThisInitialized = module.c;
    }, function (module) {
      cclegacy = module.cclegacy;
      gfx = module.gfx;
      Material = module.Material;
      game = module.game;
      Game = module.Game;
      sp = module.sp;
      director = module.director;
      Director = module.Director;
      resources = module.resources;
      Texture2D = module.Texture2D;
      renderer = module.renderer;
      Color = module.Color;
      Component = module.Component;
      StencilManager = module.StencilManager;
      assert = module.assert;
      VERSION = module.VERSION;
      murmurhash2_32_gc = module.murmurhash2_32_gc;
      Label = module.Label;
      BitmapFont = module.BitmapFont;
      Sprite = module.Sprite;
      MotionStreak = module.MotionStreak;
      TiledLayer = module.TiledLayer;
      _decorator = module._decorator;
    }, function (module) {
      JSB = module.J;
    }],
    execute: function () {
      cclegacy._RF.push({}, "4f71ajigRVC9akaYdv+KRlB", "MultSpine", undefined);
      var _uid = 0;
      var _texid = 0;
      var _hash = -1;
      var _texCount = 0;
      var _spineCache = [];

      //是否使用，shader传参变色效果
      //如不需要，请设置false , 节省shader计算
      var useShaderVar = true;
      var _spineTexture = null;
      var _spineBuffers = null;
      var _texMaps = new Map();
      var _materialMaps = new Map();
      var _region = new gfx.BufferTextureCopy();
      _region.texExtent.width = 128;
      _region.texExtent.height = 128;
      _region.texOffset.x = 0;
      _region.texOffset.y = 0;

      //@ts-ignore
      Material.prototype.spineCache = [];
      var SpineBatch = {
        enable: false,
        parent: null,
        next: function next() {
          _texMaps.clear();
          _texCount = 0;
          _texid = 0;
          _hash = -1;
        },
        reset: function reset() {
          this.next();
          _uid = 0;
        },
        active: function active() {
          return this.enable && this.parent;
        },
        update: function update() {
          if (!this.active()) return;
          // _spineTexture?.uploadData(_spineBuffers);
          for (var _iterator = _createForOfIteratorHelperLoose(_materialMaps.values()), _step; !(_step = _iterator()).done;) {
            var value = _step.value;
            if (value) {
              value.n = 0;
            }
          }
          if (_uid > 0 && _spineTexture) {
            //@ts-ignore
            var gfxDevice = _spineTexture._getGFXDevice();
            var gfxTexture = _spineTexture.getGFXTexture();
            var hight = ~~((_uid * 4 - 1) / 128) + 1;
            _region.texExtent.height = hight > 128 ? 128 : hight;
            gfxDevice.copyBuffersToTexture([_spineBuffers], gfxTexture, [_region]);
          }
        }
      };
      var _getMaterialForBlendAndTint = function _getMaterialForBlendAndTint(comp, mat) {
        // _mat = mat; //保存当前
        var key = _hash = mat.hash;
        var caches = _materialMaps.get(key);
        if (caches === undefined) {
          caches = {
            mats: [],
            n: 0
          };
          _materialMaps.set(key, caches);
        }
        var inc = caches.n++;
        var materialCache = caches.mats;
        var inst = materialCache[inc];
        if (inst !== undefined) {
          _spineCache = inst.spineCache;
          return inst;
        }
        var type = key & 0xf;
        var src = key >> 4 & 0xf;
        var dst = key >> 8 & 0xf;
        var material = SpineBatch.parent;
        inst = new renderer.MaterialInstance({
          parent: material
        });
        materialCache[inc] = inst;
        inst.overridePipelineStates({
          blendState: {
            blendColor: Color.WHITE,
            targets: [{
              blendEq: gfx.BlendOp.ADD,
              blendAlphaEq: gfx.BlendOp.ADD,
              blendSrc: src,
              blendDst: dst,
              blendSrcAlpha: src,
              blendDstAlpha: dst
            }]
          }
        });
        inst.recompileShaders({
          TWO_COLORED: type === 1 ? true : false,
          USE_LOCAL: false,
          USE_SHADER_VAR: useShaderVar
        });
        inst.setProperty('spineData', _spineTexture);
        _spineCache = inst['spineCache'] = [];
        inst.addRef();
        return inst;
      };

      //预加载多纹理材质
      var loadMaterial = function loadMaterial() {
        if (SpineBatch.parent) return;
        resources.load("multSpines/Mult-spine", Material, function (err, material) {
          if (!err) {
            //material.passes[0].tryCompile();
            SpineBatch.parent = material;
            material.addRef();
          }
        });
      };
      var initSpineDatas = function initSpineDatas() {
        SpineBatch.enable = false;
        var size = 128;
        var gfxDevice = director.root.device;
        var hasFeatureFloatTexture = gfxDevice.getFormatFeatures(gfx.Format.RGBA32F) & gfx.FormatFeatureBit.SAMPLED_TEXTURE;
        if (hasFeatureFloatTexture) {
          SpineBatch.enable = true;
          _spineTexture = new Texture2D();
          _spineBuffers = new Float32Array(size * size * 4);
          _spineTexture.setFilters(Texture2D.Filter.NEAREST, Texture2D.Filter.NEAREST);
          _spineTexture.reset({
            width: size,
            height: size,
            format: Texture2D.PixelFormat.RGBA32F,
            mipmapLevel: 0
          });
          _spineTexture.uploadData(_spineBuffers);
        }
      };
      var injectSpine = function injectSpine() {
        var Skeleton = sp.Skeleton.prototype;
        Skeleton.shaderVar = 0; //shader自定义参数
        Skeleton.isMult = false; //是否多纹理合批

        //强制关闭合批
        Object.defineProperty(Skeleton, "enableBatch", {
          get: function get() {
            if (this.customMaterial) return this._enableBatch;
            return false;
          },
          set: function set(value) {
            if (this.customMaterial) {
              if (value !== this._enableBatch) {
                this._enableBatch = value;
                this._updateBatch();
              }
            }
          }
        });

        //获取共享材质
        var getMaterialForBlendAndTint = Skeleton.getMaterialForBlendAndTint;
        Skeleton.getMaterialForBlendAndTint = function (src, dst, type) {
          if (!SpineBatch.active() || this.customMaterial) {
            this.isMult = false;
            return getMaterialForBlendAndTint.call(this, src, dst, type);
          }
          var hash = type | src << 4 | dst << 8;
          this.isMult = true;
          return {
            hash: hash
          };
        };

        //绘画数据处理
        var render = Skeleton._render;
        Skeleton._render = function (batcher) {
          if (!this.isMult) return render.call(this, batcher);
          var indicesCount = 0;
          if (this.renderData && this._drawList.length > 0) {
            var rd = this.renderData;
            var chunk = rd.chunk;
            var accessor = chunk.vertexAccessor;
            var meshBuffer = rd.getMeshBuffer();
            var origin = meshBuffer.indexOffset;

            //@ts-ignore
            var floatStride = meshBuffer.vertexFormatBytes >> 2;
            var isMultDraw = this._drawList.length > 1;
            var offset = chunk.vertexOffset;
            var length = rd.vertexCount;
            var vbuff = rd.chunk.vb;
            var ibuff = rd.indices;
            var isCommit = false;

            // Fill index buffer
            for (var i = 0; i < this._drawList.length; i++) {
              var dc = this._drawList.data[i];
              if (dc.texture) {
                batcher.commitMiddleware(this, meshBuffer, origin + dc.indexOffset, dc.indexCount, dc.texture, dc.material, this._enableBatch);
                isCommit = true;
                if (isMultDraw) {
                  var j = dc.indexOffset;
                  length = dc.indexCount;
                  var id = _uid * 10 + _texid;
                  while (length--) {
                    vbuff[(ibuff[j++] - offset) * floatStride + 2] = id; //-offset
                  }
                }
              }

              indicesCount += dc.indexCount;
            }
            if (!isMultDraw && isCommit) {
              var _id = _uid * 10 + _texid;
              for (var _i = 0, _j = 0; _i < length; _i++) {
                vbuff[_j + 2] = _id;
                _j += floatStride;
              }
            }
            if (isCommit) {
              var _i2 = 16 * _uid++;
              var datas = _spineBuffers;
              var m = this.node.worldMatrix;
              datas[_i2] = m.m00;
              datas[_i2 + 1] = m.m01;
              datas[_i2 + 2] = m.m02;
              datas[_i2 + 3] = this.shaderVar; //m.m03;
              datas[_i2 + 4] = m.m04;
              datas[_i2 + 5] = m.m05;
              datas[_i2 + 6] = m.m06;
              datas[_i2 + 7] = m.m07;
              datas[_i2 + 8] = m.m08;
              datas[_i2 + 9] = m.m09;
              datas[_i2 + 10] = m.m10;
              datas[_i2 + 11] = m.m11;
              datas[_i2 + 12] = m.m12;
              datas[_i2 + 13] = m.m13;
              datas[_i2 + 14] = m.m14;
              datas[_i2 + 15] = m.m15;
            }
            var subIndices = rd.indices.subarray(0, indicesCount);
            accessor.appendIndices(chunk.bufferId, subIndices);
            accessor.getMeshBuffer(chunk.bufferId).setDirty();
          }
        };
      };

      //多纹理合批流程
      var injectBatch = function injectBatch() {
        var Batcher2D = cclegacy.internal.Batcher2D.prototype;
        var commitMiddleware = Batcher2D.commitMiddleware;
        Batcher2D.commitMiddleware = function (comp, meshBuffer, indexOffset, indexCount, tex, mat, enableBatch) {
          //@ts-ignore
          if (!comp.isMult) {
            return commitMiddleware.call(this, comp, meshBuffer, indexOffset, indexCount, tex, mat, enableBatch);
          }

          // check if need merge draw batch
          var texture = tex.getGFXTexture();
          var tid = texture.objectID;
          _texid = _texMaps.get(tid);
          var isFlush = _texid === undefined && _texCount >= 8;
          if (!isFlush && this._middlewareBuffer === meshBuffer && _hash === mat.hash && this._middlewareIndexStart + this._middlewareIndexCount === indexOffset && this._currLayer === comp.node.layer) {
            this._middlewareIndexCount += indexCount;
          } else {
            this.autoMergeBatches(this._currComponent);
            this.resetRenderStates();
            this._currComponent = comp;
            this._currTexture = texture;
            this._currSampler = tex.getGFXSampler();
            this._currTextureHash = tex.getHash();
            this._currLayer = comp.node.layer;
            this._currSamplerHash = this._currSampler.hash;
            this._currHash = 0;
            this._currTransform = null; //enableBatch ? null : comp.node;

            this._middlewareEnableBatch = false; //enableBatch;
            this._middlewareBuffer = meshBuffer;
            this._middlewareIndexStart = indexOffset;
            this._middlewareIndexCount = indexCount;
            this._currMaterial = _getMaterialForBlendAndTint(comp, mat);
          }
          this._currIsMiddleware = true;
          if (_texCount === 0 || _texid === undefined) {
            _texid = _texCount++;
            _texMaps.set(tid, _texid);
          }
          if (_spineCache[_texid] !== tid) {
            _spineCache[_texid] = tid;
            this._currMaterial.setProperty("texture" + _texid, tex);
          }
        };
        var mergeBatchesForMiddleware = Batcher2D.mergeBatchesForMiddleware;
        Batcher2D.mergeBatchesForMiddleware = function (renderComp) {
          if (this._currIsMiddleware) SpineBatch.next();
          mergeBatchesForMiddleware.call(this, renderComp);
        };
      };

      //游戏启动前，务必加载多纹理材质
      game.once(Game.EVENT_GAME_INITED, function () {
        if (!sp.Skeleton) return;
        initSpineDatas();
        if (SpineBatch.enable) {
          loadMaterial();
          injectSpine();
          injectBatch();
        }
      });
      game.on(Game.EVENT_RESTART, function () {
        if (!sp.Skeleton) return;
        if (SpineBatch.enable) {
          SpineBatch.parent = null;
          loadMaterial();
        }
      });
      director.on(Director.EVENT_AFTER_DRAW, function (dt) {
        SpineBatch.reset();
      });
      director.on(Director.EVENT_BEFORE_COMMIT, function (dt) {
        SpineBatch.update();
      });

      // */
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "bd7e7vtojdMUJODlbuIb/Yi", "MultTextures", undefined);

      //最大纹理,固定8张
      var MAX_TEX = 8;

      //原生开关,根据需要开启或关闭
      var SUPPORT_NATIVE = true;

      //@ts-ignore
      gfx.Texture.prototype.texID = -1; //当前纹理id
      //@ts-ignore
      Material.prototype.isMult = false; //多纹理材质的标记
      //@ts-ignore
      Component.prototype.useMult = false; //组件多纹理开关(如想排除组件不参与多纹理，请自行设置属性false)

      // 多纹理合批全局开关，网络开关也可在此设置
      var enableMultTextures = function enableMultTextures() {
        if (MultBatch2D["native"]) return false;
        var ver = VERSION.slice();
        var numbers = ver.split('.');
        var n = parseInt(numbers.join(''));
        return true;
      };

      //游戏启动前，务必加载多纹理材质
      game.once(Game.EVENT_GAME_INITED, function () {
        if (!enableMultTextures()) return; //|| JSB
        loadMultTextures();
      });
      var MultBatch2D = {
        "native": !SUPPORT_NATIVE,
        enable: false,
        parent: null,
        incID: 0,
        count: 0,
        hash: 0,
        reset: function reset() {
          this.incID += this.count;
          this.count = 0;
        }
      };

      //预加载多纹理材质
      var loadMultTextures = function loadMultTextures() {
        MultBatch2D.enable = false;
        resources.load("multTextures/Mult-material", Material, function (err, material) {
          if (!err) {
            var mat = cclegacy.builtinResMgr.get('ui-sprite-material');
            if (mat) {
              mat._hash = MultBatch2D.hash = Material.getHash(mat);
              MultBatch2D.parent = material;
              MultBatch2D.enable = true;
              //@ts-ignore
              material.isMult = true;
              material.addRef();
              // console.log(VER);
            }
          }
        });
      };

      //多纹理材质缓存队列
      var _cacheUseCount = 0;
      var _cacheMaterials = [];
      var getMultMaterial = function getMultMaterial(oldMat, rd) {
        if (rd === void 0) {
          rd = null;
        }
        var MB = MultBatch2D;
        MB.reset();
        if (!MB.enable || !oldMat || !rd || !rd.isMult) {
          return oldMat;
        }
        if (!MB.parent || !MB.parent.isValid) {
          loadMultTextures();
          return oldMat;
        }
        var newMat = _cacheMaterials[_cacheUseCount++];
        if (!newMat || !newMat.isValid) {
          var material = {
            parent: MB.parent
          };
          newMat = new renderer.MaterialInstance(material);
          _cacheMaterials[_cacheUseCount - 1] = newMat;
          newMat['cacheTextures'] = [];
          newMat['isMult'] = true;
          newMat.addRef();
        }
        return newMat;
      };

      // game.on(Game.EVENT_RESTART,()=>{
      //     if (!enableMultTextures()) return; //|| JSB
      //     _cacheMaterials.length = 0;
      //     _cacheUseCount = 0;
      //     loadMultTextures();
      // });

      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // 多纹理合批，sprite , label , renderdata ，等其他组件的重写和监听
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      var inject_Renderdata = function inject_Renderdata() {
        var RenderData = cclegacy.UI.RenderData.prototype;
        RenderData.texID = -1;
        RenderData.isMult = false;
        RenderData.matDirty = true;
        RenderData.texDirty = true;
        RenderData.dataDirty = 0x0;

        //兼容多纹理hash计算
        RenderData.updateHash = function () {
          if (this.isMult && MultBatch2D.enable) {
            var bid = this.chunk ? this.chunk.bufferId : -1;
            var hashString = "" + bid + this.layer + '98k';
            this.dataHash = murmurhash2_32_gc(hashString, 666);
            this.hashDirty = false;
          } else {
            var _bid = this.chunk ? this.chunk.bufferId : -1;
            var _hashString = "" + _bid + this.layer + " " + this.textureHash;
            this.dataHash = murmurhash2_32_gc(_hashString, 666);
            this.hashDirty = false;
          }
          this.matDirty = false;
        };

        //监听纹理的变更
        Object.defineProperty(RenderData, "textureDirty", {
          get: function get() {
            return this.texDirty;
          },
          set: function set(val) {
            this.texDirty = val;
            if (val === true) {
              this.texID = -1;
            }
          }
        });
        Object.defineProperty(RenderData, "material", {
          get: function get() {
            return this._material;
          },
          set: function set(val) {
            this._material = val;
            if (this._renderDrawInfo) {
              var mat = this.isMult ? MultBatch2D.parent : val;
              this._renderDrawInfo.setMaterial(mat);
            }
          }
        });

        //检测是否支持多纹理合批
        var isMultTextures = function isMultTextures(rd, uir) {
          var b = rd.isMult;
          rd.isMult = false;
          var material = uir.getRenderMaterial(0);
          if (!material || !MultBatch2D.enable) {
            if (b && !rd.isMult) {
              //@ts-ignore
              uir._updateColor();
            }
            return;
          }

          //@ts-ignore
          //组件控制开关 useMult: 可以开启自定义组件参与多纹理
          if (uir.useMult && !rd._isMeshBuffer) {
            if (!material.hash || rd.passDirty || JSB) {
              material._hash = Material.getHash(material);
            }
            rd.isMult = MultBatch2D.hash == material._hash;
          }
          if (b && !rd.isMult) {
            //@ts-ignore
            uir._updateColor();
          }
        };

        //监听pass变更，检测是否多纹理支持
        var updatePass = RenderData.updatePass;
        RenderData.updatePass = function (comp) {
          isMultTextures(this, comp);
          updatePass.call(this, comp);
        };

        //监听pass变更，检测是否多纹理支持
        var updateRenderData = RenderData.updateRenderData;
        RenderData.updateRenderData = function (comp, frame) {
          isMultTextures(this, comp);
          updateRenderData.call(this, comp, frame);
        };
      };
      var inject_Label = function inject_Label() {
        var tempColor0 = new Color(255, 255, 255, 255);
        var tempColor1 = new Color(255, 255, 255, 255);

        //@ts-ignore
        Label.prototype.useMult = true;
        //监听 Label 的 uv 变更
        var label = Label.Assembler;
        if (label) {
          var getAssembler = label.getAssembler;
          label.getAssembler = function (comp) {
            var assembler = getAssembler.call(this, comp);
            if (assembler.changeColor == undefined) {
              assembler.changeColor = function (s) {
                var rd = s.renderData;
                if (rd && rd.chunk) {
                  rd.dataDirty = 1;
                }
              };
              var flag = comp.font instanceof BitmapFont || comp.cacheMode === Label.CacheMode.CHAR;
              var updateColor = assembler.updateColor;
              assembler.updateColor = function (comp) {
                updateColor.call(this, comp);
                var renderData = comp.renderData;
                if (renderData && !JSB) {
                  this.changeColor(comp);
                  if (!flag) {
                    var vData = renderData.chunk.vb;
                    for (var i = vData.length, j = 5; j < i; j += 9) {
                      vData[j] = vData[j + 1] = vData[j + 2] = vData[j + 3] = 1;
                    }
                  }
                }
              };
              if (flag) {
                // const updateUVs = assembler.updateUVs;
                // assembler.updateUVs = function (comp: Label) {
                //     updateUVs.call(this, comp);
                //     this.changeColor(comp);
                // }

                {
                  var fillBuffers = assembler.fillBuffers;
                  assembler.fillBuffers = function (comp, renderer) {
                    fillBuffers.call(this, comp, renderer);
                    this.changeColor(comp);
                  };
                }
              }
            }
            return assembler;
          };
        }
      };
      var inject_Sprite = function inject_Sprite() {
        //@ts-ignore
        Sprite.prototype.useMult = true;
        //监听 sprite 的 uv 变更
        var sprite = Sprite.Assembler;
        if (sprite) {
          var getAssembler = sprite.getAssembler;
          sprite.getAssembler = function (comp) {
            var assembler = getAssembler.call(this, comp);
            if (assembler.changeColor == undefined) {
              assembler.changeColor = function (s) {
                var rd = s.renderData;
                if (rd && rd.chunk) {
                  rd.dataDirty = 1;
                }
              };
              var updateColorLate = assembler.updateColorLate;
              if (updateColorLate) {
                assembler.updateColorLate = function (comp) {
                  updateColorLate.call(this, comp);
                  this.changeColor(comp);
                };
              } else {
                var updateColor = assembler.updateColor;
                if (updateColor) {
                  assembler.updateColor = function (comp) {
                    updateColor.call(this, comp);
                    this.changeColor(comp);
                  };
                }
              }
            }
            return assembler;
          };
        }
      };
      var inject_MotionStreak = function inject_MotionStreak() {
        if (MotionStreak) {
          var motionStreak = MotionStreak.prototype;
          motionStreak.useMult = true; //参与多纹理合批

          var lateUpdate = motionStreak.lateUpdate;
          motionStreak.lateUpdate = function (dt) {
            lateUpdate.call(this, dt);
            if (this._assembler) {
              if (this.points.length >= 2) {
                var rd = this.renderData;
                //全局标记刷新纹理uv
                rd && (rd.dataDirty = 1);
              }
            }
          };
        }
      };
      var inject_TiledLayer = function inject_TiledLayer() {
        if (TiledLayer && !JSB) {
          var Tiled = TiledLayer.prototype;
          Tiled.useMult = true; //参与多纹理合批
          Tiled.dataDirty = false; //全局标记刷新纹理uv

          var setUserNodeDirty = Tiled.setUserNodeDirty;
          Tiled.setUserNodeDirty = function (dirty) {
            setUserNodeDirty.call(this, dirty);
            if (!dirty) {
              //全局标记刷新纹理uv
              this.dataDirty = true;
            }
          };
          Tiled._render = function (ui) {
            var _this = this;
            var layer = this.node.layer;
            var _loop = function _loop(_j) {
              _this._tiledDataArrayIdx = i;
              var m = _this._tiledDataArray[i];
              var info = _this._drawInfoList[_j];
              if (m.subNodes) {
                // 提前处理 User Nodes
                m.subNodes.forEach(function (c) {
                  if (c) {
                    ui.walk(c.node);
                    _j++;
                  }
                });
              } else {
                var td = m;
                if (td.texture) {
                  var isDirty = false;
                  var rd = td.renderData;
                  rd.material = _this.getRenderMaterial(0);
                  if (rd.texture !== td.texture) {
                    rd.texture = td.texture;
                    // isDirty = true;
                  }

                  if (rd.layer !== layer) {
                    rd.layer = layer;
                    isDirty = true;
                  }
                  rd.isMult = true; //强制参与多纹理

                  // if (JSB) rd._renderDrawInfo = info;

                  //更新renderdata hash
                  isDirty && rd.updateHash();
                  if (_this.dataDirty) rd.dataDirty = 1;

                  // NOTE: 由于 commitComp 只支持单张纹理, 故分多次提交
                  ui.commitComp(_this, td.renderData, td.texture, _this._assembler, null);
                  _j++;
                }
              }
              j = _j;
            };
            for (var i = 0, j = 0; i < this._tiledDataArray.length; i++) {
              _loop(j);
            }
            this.dataDirty = false;
            this.node._static = true;
          };
        }
      };
      game.once(Game.EVENT_ENGINE_INITED, function () {
        if (!enableMultTextures()) return;
        inject_Label();
        inject_Sprite();
        //inject_UIRender();
        inject_Renderdata();
        inject_TiledLayer();
        inject_MotionStreak();
        director.on(Director.EVENT_AFTER_DRAW, function (dt) {
          MultBatch2D.reset();
          _cacheUseCount = 0;
        });

        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // 多纹理合批，合批核心过程修改
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        var Batcher2D = cclegacy.internal.Batcher2D.prototype;
        Batcher2D.isMult = false; //多纹理标记
        Batcher2D.isNative = JSB; //原生的开关
        Batcher2D.cacheTextures = []; //纹理缓存数据
        Batcher2D.currMaterial = null; //当前指定材质
        Object.defineProperty(Batcher2D, "_currMaterial", {
          get: function get() {
            return this.currMaterial;
          },
          set: function set(material) {
            // if (this.currMaterial === material) return;
            //检测多纹理材质，接替 _currMaterial
            var rd = this._currRenderData; //重置检测
            if (material == this._emptyMaterial) rd = null;
            this.currMaterial = getMultMaterial(material, rd);
            this.isMult = false;
            if (MultBatch2D.enable) {
              if (this.currMaterial && this.currMaterial.isMult) {
                this.cacheTextures = this.currMaterial.cacheTextures;
                this.isMult = true; //当前 batcher 多纹理标记
              }
            }
          }
        });

        var Stage_ENTER_LEVEL = 2;
        var Stage_ENTER_LEVEL_INVERTED = 6;
        //@ts-ignore

        Batcher2D.commitComp = function (comp, renderData, frame, assembler, transform) {
          var dataHash = 0;
          var mat = null;
          var bufferID = -1;
          if (renderData && renderData.chunk) {
            if (!renderData.isValid()) return;
            dataHash = renderData.dataHash;
            mat = renderData.material;
            bufferID = renderData.chunk.bufferId;
          }

          // Notice: A little hack, if it is for mask, not need update here, while control by stencilManger
          if (comp.stencilStage === Stage_ENTER_LEVEL || comp.stencilStage === Stage_ENTER_LEVEL_INVERTED) {
            this._insertMaskBatch(comp);
          } else {
            comp.stencilStage = StencilManager.sharedManager.stage;
          }
          var depthStencilStateStage = comp.stencilStage;
          var texID = -1;
          var texture = null;
          var MB = MultBatch2D;
          var flushBatch = false;
          //@ts-ignore
          if (MB.enable && renderData && renderData.isMult) {
            if (frame && frame.isValid) texture = frame.getGFXTexture();
            if (texture) {
              //@ts-ignore
              if (texture.texID === undefined) texture.texID = -1;

              //@ts-ignore
              texID = texture.texID - MB.incID;
              flushBatch = texID < 0 && MB.count >= MAX_TEX;
              if (this.isMult) mat = this._currMaterial;
            }
          }
          if (flushBatch || this._currHash !== dataHash || dataHash === 0 || this._currMaterial !== mat || this._currDepthStencilStateStage !== depthStencilStateStage) {
            // Merge all previous data to a render batch, and update buffer for next render data
            this.autoMergeBatches(this._currComponent);
            if (renderData && !renderData._isMeshBuffer) {
              this.updateBuffer(renderData.vertexFormat, bufferID);
            }
            this._currRenderData = renderData;
            this._currHash = renderData ? renderData.dataHash : 0;
            this._currComponent = comp;
            this._currTransform = transform;
            this._currMaterial = comp.getRenderMaterial(0);
            this._currDepthStencilStateStage = depthStencilStateStage;
            this._currLayer = comp.node.layer;
            if (frame) {
              {
                assert(frame.isValid, 'frame should not be invalid, it may have been released');
              }
              this._currTexture = frame.getGFXTexture();
              this._currSampler = frame.getGFXSampler();
              this._currTextureHash = frame.getHash();
              this._currSamplerHash = this._currSampler.hash;
            } else {
              this._currTexture = null;
              this._currSampler = null;
              this._currTextureHash = 0;
              this._currSamplerHash = 0;
            }
          }
          if (assembler.fillBuffers) assembler.fillBuffers(comp, this);
          if (texture && this.isMult) {
            if (texID < 0 || MB.count === 0) {
              texID = MB.count++;
              //@ts-ignore
              //let id = texture.objectID;
              //@ts-ignore
              texture.texID = texID + MB.incID;
              var caches = this.cacheTextures;
              if (caches[texID] !== texture) {
                caches[texID] = texture;
                //@ts-ignore
                texture = frame.texture;
                if (!texture) texture = frame;
                this._currMaterial.setProperty("texture" + texID, texture);
              }
            }
            this.fillTextureID(renderData, texID);
          }
        };

        //填充多纹理 id 到顶点数据 , 压缩到color.a个位
        Batcher2D.fillTextureID = function (renderData, texID) {
          // if (!renderData) return;
          var vbuf = renderData.chunk.vb;
          var uvX = 0,
            length = vbuf.length;
          if (renderData.dataDirty === 1) {
            //3
            for (var i = 0; i < length; i += 9) {
              uvX = ~~(vbuf[i + 5] * 100000);
              vbuf[i + 5] = uvX * 10 + texID;
            }
          } else {
            if (renderData.texID !== texID) {
              for (var _i2 = 0; _i2 < length; _i2 += 9) {
                uvX = ~~(vbuf[_i2 + 5] * 0.1);
                vbuf[_i2 + 5] = uvX * 10 + texID;
              }
            }
          }
          renderData.dataDirty = 0;
          renderData.texID = texID;
        };
      });

      //*/
      cclegacy._RF.pop();
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "c2616kUcb9Mbaks3EQ6zAX0", "toastUI", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var toastUI = (_dec = ccclass('toastUI'), _dec2 = property(Label), _dec3 = property(Sprite), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(toastUI, _Component);
        function toastUI() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "m_lab", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "m_bg", _descriptor2, _assertThisInitialized(_this));
          _this.m_txt = "";
          return _this;
        }
        var _proto = toastUI.prototype;
        _proto.onEnable = function onEnable() {
          this.m_txt = this.m_lab.string;
        };
        _proto.update = function update(deltaTime) {};
        return toastUI;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "m_lab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "m_bg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class);
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/resources', 'chunks:///resources.js'); 
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