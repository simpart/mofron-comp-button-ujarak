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
const Border = require('mofron-effect-border');

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
                    style: { 'background': 'none' }, speed: 150, eid: 2,
                    tag: this.name() + 'hover-true'
                }),
                new Style({
                    style: { 'background': 'none' }, speed: 150, eid: 3,
                    tag: this.name() + 'hover-false'
                }),
                new Border({ color: [120,120,120] })
            ]);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    text (prm) {
        try {
            if (true === mf.func.isInclude(prm, "Text")) {
                prm.style({
                    'position' : 'relative',
                    'z-index'  : '1'
                });
            }
            return super.text(prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    band (prm) {
        try {
            if (undefined !== prm) {
                prm.option({
                    visible: false, size: ['100%', '100%'],
                    style: {
                        'position': 'absolute',
                        'top'     : '0px',
                        'left'    : '0px',
                    },
                    effect: [
                        new Fade({ value: true, speed: 100 }),
                        new Fade({ value: false, speed: 100, eid: 1 }),
                        new Scale({ value: [1, 1, 1],   eid: 0 }),
                        new Scale({ value: [0.7, 1, 1], eid: 1 })
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
                this.effect(['Style', this.name() + 'hover-true']).style({
                    'background' : this.tgtColor('background')
                });
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
            this.band().option({ baseColor: prm });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.UjarakBtn;
