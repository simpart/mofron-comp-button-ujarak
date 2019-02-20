/**
 * @file   mofron-comp-button-ujarak/index.js
 * @author simpart
 */
const mf     = require('mofron');
const Button = require('mofron-comp-button');
const Hover  = require('mofron-event-hover');
const Fade   = require('mofron-effect-fade');
const Scale  = require('mofron-effect-scale');
const Style  = require('mofron-effect-style');

/**
 * @class mofron.comp.button.Ujarak
 * @brief ujarak button class
 */
mofron.comp.UjarakBtn = class extends Button {
    
    /**
     * initialize component
     *
     * @param prm (string,option) : button contents
     * @param opt (array) : option
     */
    constructor (po) {
        try {
            super();
            this.name('UjarakBtn');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    initDomConts(prm) {
        try {
            super.initDomConts(prm);
            this.style({
                'background': 'none',        // disabled button style
                'position'  : 'relative'
            });
            this.child(this.band());
            
            let hvr_fnc = (cmp, flg) => {
                try {
                    cmp.execEffect((true === flg) ? 2 : 3);
                    cmp.band().visible(flg);
                } catch (e) {
                    console.error(e.stack);
                    throw e;
                }
            }
            this.event([ new Hover(hvr_fnc) ]);
            this.effect([
                new Style({
                    speed: 150,
                    style: [null, null, { 'background': 'none' }, { 'background': 'none' }]
                })
            ]);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    band (prm) {
        try {
            if (undefined !== prm) {
                prm.execOption({
                    visible: false, size: ['100%', '100%'],
                    style: {
                        'position': 'absolute',
                        'top'     : '0px',
                        'left'    : '0px',
                        'z-index' : '-1'
                    },
                    effect: [
                        new Fade(100),
                        new Scale({ x_value: [1, 0.7], y_value: [1, 1], z_value: [1, 1] }),
                    ]
                });
            }
            return this.innerComp('band', prm, mf.Component);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    mainColor (prm) {
        try {
            let ret = this.tgtColor('background', prm);
            if (undefined !== prm) {
                this.effect('Style').styleIndex({ 'background' : this.tgtColor('background') }, 3);
            }
            return ret;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    accentColor (prm) {
        try {
            if (undefined === prm) {
                return this.band().baseColor();
            }
            this.band().execOption({ baseColor: prm });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.UjarakBtn;
/* end of file */
