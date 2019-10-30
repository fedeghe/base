/**
 * Autoexecuted closure that allows to create namespaces,
 * the autocall is used to put the function itself in a namespace
 * 
 */
(function () {
    // this is due, to test all implications see
    // http://www.jmvc.org/test_strict?ga=false
    // (the ga=false params inhibits google analytics tracking)
    "use strict";

    var allowLog = true,
        allowDebug = true;

    /**
     * Creates a namespace
     * @param  {String} str     dot or slash separated path for the namespace
     * @param  {Object literal} [{}]obj optional: the object to be inserted in the ns, or a function that returns the desired object
     * @param  {[type]} ctx     [W] the context object where the namespace will be created
     * @return {[type]}         the brand new ns
     *
     * @hint This method is DESTRUCTIVE if the obj param is passed,
     *       a conservative version is straight-forward
     * @sample
     *     makens('SM', {hello: ...});
     *     makens('SM', {hi: ...}); // now hello exists no more
     *
     *     //use
     *     makens('SM', {hello: ..., hi: })
     
     *     // or if in different files
     *     // file1     
     *     makens('SM')
     *     SM.hello = ...
     *     //
     *     // file2
     *     makens('SM')
     *     SM.hi = ...
     *
     *     makens('SM/proto', function () {
     *
     *          // some private stuff
     *          //
     *          
     *          return {
     *              foo0 : function () {...},
     *              foo1 : function () {...}
     *          }
     *     })
     *     
     */
    
    function makens(str, obj, ctx) {
        /**
         * cleanup the first part of the namespace if starts with /
         */
        str = str.replace(/^\//, '');

        /**
         * get all components of the desired namspace
         * splitting with . or /
         */
        var els = str.split(/\.|\//),

            /**
             * ho many elements has the splitted namespace?
             */
            l = els.length,
            undef = 'undefined',
            ret;

        /**
         * if not given the context will be window
         */
        (typeof ctx === undef) && (ctx = this); // base
        /**
         * if not given the default will be an empty object
         */
        (typeof obj === undef) && (obj = {});

        /**
         * if a fucntion is given then assume it return an object,
         * use it to fill the namesapce
         */
        (typeof obj === 'function') && (obj = obj());

        /**
         * if in the context the first element of the namespace
         */
        if (!ctx[els[0]]) {
            ctx[els[0]] = (l === 1) ? obj : {};
        }
        ret = ctx[els[0]];
        return (l > 1) ? makens(els.slice(1).join('.'), obj, ctx[els[0]]) : ret;
    }

    // const compose0 = (...fs) => a => fs.reduceRight((v, f) => f(v), a)
    function compose(){
        var funcs = Array.prototype.slice.call(arguments, 0)
        return function(a) {
            return funcs.reduceRight(function (arg, func) { return func(arg)}, a)
        }
    }

    // const pipe = (...fs) => a => fs.reduce((v, f) => f(v), a)
    function pipe(){
        var funcs = Array.prototype.slice.call(arguments, 0)
        return function(a) {
            return funcs.reduce(function (arg, func) { return func(arg)}, a)
        }
    }

    base.makens = makens;
    base.compose = compose;
    base.pipe = pipe;


    // base ns 
})();
