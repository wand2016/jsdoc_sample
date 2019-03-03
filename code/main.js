/**
 * @classdesc ベースクラスです。
 * @class 
 * @constructor
 * @mixes EventDispatchable
 * @borrows EventDispatchable#addEventListener
 * @borrows EventDispatchable#removeEventListener
 */
function Base() {
    /**
     * @description メンバーです
     * @public
     * @type Number
     * @default 3
     */
    this.someMember = 3;
}

(function (BProto) {
    /**
     * @description 何かします。
     * @protected
     * @function
     * @name Base#_someOperation
     * @abstract 
     * @return {Boolean} 成否
     */
    BProto._someOperation = function () {
        console.warn('base');
        return false;
    };
})(Base.prototype);


/**
 * @description Baseのタイプを表します
 * @readonly
 * @enum {String}
 */
Base.TYPE = {
    /**
     * @description HOGEを表します
     */
    HOGE: 'hoge',
    /**
     * @description PIYOを表します
     */
    PIYO: 'piyo'
};

(function(DProto, BProto) {
    Object.setPrototypeOf(DProto, BProto);

    /**
     * @description 何かします。
     * @protected
     * @function
     * @name Derived#_someOperation
     * @override 
     * @return {Boolean} 成否
     */
    DProto._someOperation = function () {
        console.log('derived');
        return true;
    };
})(Derived.prototype, Base.prototype)



/**
 * @classdesc 派生クラスです。
 * @class
 * @constructor 
 * @extends Base
 * 
 */
function Derived() {
    Base.apply(this, arguments);
}


/**
 * @classdesc ミックスインです。
 * @mixin 
 */
function EventDispatchable() {

}

(function (EProto) {
    /**
     * @callback ListenerFunction
     * @param {Event} event イベントオブジェクト
     * @see {@link https://developer.mozilla.org/ja/docs/Web/API/Event}
     */
    /**
     * イベントリスナを登録します
     * @param {String} type イベントのタイプ
     * @param {ListenerFunction} listener リスナー
     * @param {Object} [opt_options] オプション
     * @function
     * @name EventDispatchable#addEventListener
     * @see {@link https://developer.mozilla.org/ja/docs/Web/API/EventTarget/addEventListener}
     */
    EProto.addEventListener = function (type, listener, opt_options) {

    };

    /**
     * イベントリスナを登録します
     * @param {String} type イベントのタイプ
     * @param {ListenerFunction} listener リスナー
     * @param {Object} [opt_options] オプション
     * @function
     * @name EventDispatchable#removeEventListener
     * @see {@link https://developer.mozilla.org/ja/docs/Web/API/EventTarget/removeEventListener}
     */
    EProto.removeEventListener = function (type, listener, opt_options) {

    };
    
})(EventDispatchable.prototype);
