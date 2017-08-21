/**
 * @file   mofron-comp-button-ujarak/index.js
 * @author simpart
 */
let mf     = require('mofron');
let Button = require('mofron-comp-button');
let Mover  = require('mofron-event-mouseover');
let Mout   = require('mofron-event-mouseout');

/**
 * @class mofron.comp.button.Ujarak
 * @brief ujarak button class
 */
mofron.comp.button.Ujarak = class extends Button {
    
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
            
            this.style({
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
            });
            
            this.color();
            this.initTxtColor();
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    initStyleTag () {
        try {
            let selector = 'button-ujarak';
            this.target().className(selector);
            if (true === mf.comp.button.Ujarak_init) {
                return;
            }
            mf.comp.button.Ujarak_init = true;
            
            mf.func.addHeadConts({
                tag      : 'style',
                contents : [
                    mf.func.getStyleConts(
                        '.' + selector + ':focus',
                        { 'outline' : 'none' }
                    ),
                    mf.func.getStyleConts(
                        '.' + selector + ':before',
                        { 'content'     : "''"      ,
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
                          'transition-timing-function'         : 'cubic-bezier(0.2, 1, 0.3, 1)' }
                    ),
                    mf.func.getStyleConts(
                        '.' + selector + ':hover::before',
                        { 'opacity'            : '1',
                          '-webkit-transform'  : 'translate3d(0, 0, 0)',
                          '-moz-transition'    : 'translate3d(0, 0, 0)',
                          '-o-transition'      : 'translate3d(0, 0, 0)',
                          'transform'          : 'translate3d(0, 0, 0)' }
                    )
                ]
            });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    initTxtColor () {
        try {
            this.text().color(
                new mf.Color(0,0,0)
            );
            
            this.event([
                new Mover(
                    (btn) => {
                        try {
                            var rgb = btn.color().rgba();
                            if (290 > (rgb[0]+rgb[1]+rgb[2])) {
                                btn.child()[0].color(
                                    new mf.Color(255,255,255)
                                );
                            }
                        } catch (e) {
                            console.error(e.stack);
                            throw e;
                        }
                    },this
                ),
                new Mout(
                    (btn) => {
                        try {
                            var rgb = btn.color().rgba();
                            if (290 > (rgb[0]+rgb[1]+rgb[2])) {
                                btn.child()[0].color(
                                    new mf.Color(0,0,0)
                                );
                            }
                        } catch (e) {
                            console.error(e.stack);
                            throw e;
                        }
                    }, this
                )
            ]);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    color (clr) {
        try {
            if (undefined === clr) {
                /* getter */
                if (undefined === this.m_color) {
                    let thm_clr = this.theme().color();
                    this.color(
                        (null === thm_clr) ? new mf.Color(37,113,130) : thm_clr[0]
                    );
                }
                return this.m_color;
            }
            /* setter */
            if (false === mf.func.isInclude(clr, 'Color')) {
                throw new Error('invalid parameter');
            }
            this.m_color = clr;
            this.style({ 'border-color' : this.color().getStyle() });
            mf.func.addHeadConts({
                tag      : 'style',
                contents : [ mf.func.getStyleConts(
                                 '#' + this.styleTgt().getId() + ':before',
                                 { 'background'  : this.color().getStyle() }
                             ),
                             mf.func.getStyleConts(
                                 '#'+ this.styleTgt().getId() + ':hover',
                                 { 'border-color' : this.color().getStyle() }
                             ) ]
            });
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
mofron.comp.button.Ujarak_init = false;
module.exports = mofron.comp.button.Ujarak;
