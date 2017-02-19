/**
 * @file   mofron-comp-button-ujarak/index.js
 * @author simpart
 */
require('mofron-comp-button');
require('mofron-event-mouseover');
require('mofron-event-mouseout');

/**
 * @class mofron.comp.button.Ujarak
 * @brief ujarak button class
 */
mofron.comp.button.Ujarak = class extends mofron.comp.Button {
    
    /**
     * initialize component
     *
     * @param prm (string,option) : button contents
     * @param opt (array) : option
     */
    constructor (prm_opt) {
        try {
            super();
            this.name('Ujarak');
            
            this.m_color  = new mofron.Color(37,113,130);
            this.selector = 'ujarak-btn';
            /* set option */
            this.prmOpt(prm_opt);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    initDomConts(prm) {
        try {
            super.initDomConts(prm);
            this.initStyleTag();
            this.color(this.color(), true);
            this.initTxtColor();
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    initStyleTag () {
        try {
            this.target().className(this.selector);
            if (true === mofron.comp.button.Ujarak_exec) {
                return;
            }
            mofron.comp.button.Ujarak_exec = true;
            var hc  = new mofron.HeadConts('style');
            hc.contents(mofron.func.getStyleConts(
                '.' + this.selector,
                {
                    'display'    : 'block'    ,
                    'margin'     : '0px'      ,
                    'border'     : '1px solid',
                    'background' : 'none'     ,
                    'position'   : 'relative' ,
                    'z-index'    : '1'        ,
                    
                    '-webkit-backface-visibility' : 'hidden',
                    '-moz-backface-visibility'    : 'hidden',
                    'backface-visibility'         : 'hidden',
                                    
                    '-webkit-transition' : 'border-color 0.4s, color 0.4s',
                    '-moz-transition'    : 'border-color 0.4s, color 0.4s',
                    '-o-transition'      : 'border-color 0.4s, color 0.4s',
                    'transition'         : 'border-color 0.4s, color 0.4s',
                    
                    '-webkit-transition-timing-function' : 'cubic-bezier(0.2, 1, 0.3, 1)',
                    '-moz-transition-timing-function'    : 'cubic-bezier(0.2, 1, 0.3, 1)',
                    '-o-transition-timing-function'      : 'cubic-bezier(0.2, 1, 0.3, 1)',
                    '-ms-transition-timing-function'     : 'cubic-bezier(0.2, 1, 0.3, 1)',
                    'transition-timing-function'         : 'cubic-bezier(0.2, 1, 0.3, 1)'
                }
            ));
            hc.pushTag();
            
            hc.contents(mofron.func.getStyleConts(
                '.' + this.selector + ':focus',
                { 'outline' : 'none' }
            ));
            hc.pushTag();
            
            hc.contents(mofron.func.getStyleConts(
                '.' + this.selector + ':before',
                { 
                    'content'     : "''"      ,
                    'position'    : 'absolute',
                    'top'         : '0'       ,
                    'left'        : '0'       ,
                    'width'       : '100%'    ,
                    'height'      : '100%'    ,
                    'z-index'     : '-1'      ,
                    'opacity'     : '0'       ,
                    
                    '-webkit-transform'  : 'scale3d(0.7, 1, 1)',
                    '-moz-transition'    : 'scale3d(0.7, 1, 1)',
                    '-o-transition'      : 'scale3d(0.7, 1, 1)',
                    'transform'          : 'scale3d(0.7, 1, 1)',
                    '-webkit-transition' : '-webkit-transform 0.4s, opacity 0.4s',
                    '-moz-transition'    : '-moz-transform 0.4s, opacity 0.4s'   ,
                    '-o-transition'      : '-o-transform 0.4s, opacity 0.4s'     ,
                    'transition'         : 'transform 0.4s, opacity 0.4s'        ,
                                 
                    '-webkit-transition-timing-function' : 'cubic-bezier(0.2, 1, 0.3, 1)',
                    '-moz-transition-timing-function'    : 'cubic-bezier(0.2, 1, 0.3, 1)',
                    '-o-transition-timing-function'      : 'cubic-bezier(0.2, 1, 0.3, 1)',
                    '-ms-transition-timing-function'     : 'cubic-bezier(0.2, 1, 0.3, 1)',
                    'transition-timing-function'         : 'cubic-bezier(0.2, 1, 0.3, 1)'
                }
            ));
            hc.pushTag();
            
            hc.contents(mofron.func.getStyleConts(
                '.' + this.selector + ':hover::before',
                {
                    'opacity'            : '1',
                    '-webkit-transform'  : 'translate3d(0, 0, 0)',
                    '-moz-transition'    : 'translate3d(0, 0, 0)',
                    '-o-transition'      : 'translate3d(0, 0, 0)',
                    'transform'          : 'translate3d(0, 0, 0)'
                }
            ));
            hc.pushTag();
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    initTxtColor () {
        try {
            this.child()[0].color(
                new mofron.Color(0,0,0)
            );
            
            var rgb = this.color().rgba();
            if (290 <= (rgb[0]+rgb[1]+rgb[2])) {
                return;
            }
            
            this.addEvent(
                new mofron.event.MouseOver(
                    function (own_obj) {
                        try {
                            var rgb = own_obj.color().rgba();
                            if (290 > (rgb[0]+rgb[1]+rgb[2])) {
                                own_obj.child()[0].color(
                                    new mofron.Color(255,255,255)
                                );
                            }
                        } catch (e) {
                            console.error(e.stack);
                            throw e;
                        }
                    },this
                )
            );
            
            this.addEvent(
                new mofron.event.MouseOut(
                    function (own_obj) {
                        try {
                            var rgb = own_obj.color().rgba();
                            if (290 > (rgb[0]+rgb[1]+rgb[2])) {
                                own_obj.child()[0].color(
                                    new mofron.Color(0,0,0)
                                );
                            }
                        } catch (e) {
                            console.error(e.stack);
                            throw e;
                        }
                    },this
                )
            );
            
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    color (clr, init) {
        try {
            var _clr = (clr === undefined) ?  null  : clr;
            var _ini = (init === undefined) ? false : init;
            if (null === _clr) {
                return this.m_color;
            }
            
            this.m_color = clr;
            if ((true === this.isRendered()) || (true === _ini)) {
                var hc = new mofron.HeadConts('style');
                hc.contents(
                    mofron.func.getStyleConts(
                        '#'+ this.styleTgt().getId() + ':before',
                        { 'background'  : this.m_color.getStyle() }
                    )
                );
                hc.pushTag();
                
                var rgb         = this.color().rgba();
                var hvr_txt_clr = null;
                if (290 > (rgb[0]+rgb[1]+rgb[2])) {
                    hvr_txt_clr = new mofron.Color(255,255,255);
                } else {
                    hvr_txt_clr = new mofron.Color(0,0,0);
                }
                hc.contents(
                    mofron.func.getStyleConts(
                        '#'+ this.styleTgt().getId() + ':hover',
                        { 'border-color' : this.m_color.getStyle() }
                    )
                );
                hc.pushTag();
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    width (val) {
        try {
            var _val = (val === undefined) ? null : val;
            if (null === _val) {
                return this.style('min-width');
            }
            if ('number' === (typeof _val)) {
                this.style('min-width', _val + 'px');
                this.style('max-width', _val + 'px');
            } else if ('string' === (typeof _val)) {
                this.style('min-width', _val);
                this.style('max-width', _val);
            } else {
                throw new Error('invalid parameter');
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
mofron.comp.button.Ujarak_exec = false;
module.exports = mofron.comp.button.Ujarak;
