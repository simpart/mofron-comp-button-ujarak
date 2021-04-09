/**
 * @file mofron-comp-ujarak/index.js
 * @brief ujarak button component for mofron
 *        this source based on the codrops: https://github.com/codrops/ButtonStylesInspiration
 * @license MIT
 */
const Button  = require('mofron-comp-button');
const Hover   = require('mofron-event-hover');
const Style   = require('mofron-effect-style');
const comutl  = mofron.util.common;
const ConfArg = mofron.class.ConfArg;

module.exports = class extends Button {
    /**
     * initialize component
     *
     * @param (mixed) string: button text contents
     *                dict: button component config
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.modname('Ujarak');
            this.confmng().add("base-color-buf", { type: "Color" });
            this.confmng().add("invert", { type: "boolean", init: true });
            
	    if (0 < arguments.length) {
                this.config(p1);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contens
     * 
     * @type private
     */
    initDomConts() {
        try {
            super.initDomConts();
            this.style({ "z-index" : "100" });

            this.style({
                'background': 'none',        // disabled button style
                'position'  : 'relative',
		'-webkit-transition-timing-function': 'cubic-bezier(0.2, 1, 0.3, 1)',
		'transition-timing-function': 'cubic-bezier(0.2, 1, 0.3, 1)'
   
            });
            
	    let bef = {
                "-webkit-transition-timing-function": "cubic-bezier(0.2, 1, 0.3, 1)",
		"transition-timing-function":         "cubic-bezier(0.2, 1, 0.3, 1)",
                "content":            '""',
	        "position":           "absolute",
                "top":                "0",
                "left":               "0",
                "width":              "100%",
                "height":             "100%",
                "z-index":            "-1",
                "opacity":            "0",
                "-webkit-transform":  "scale3d(0.7, 1, 1)",
                "transform":          "scale3d(0.7, 1, 1)",
                "-webkit-transition": "-webkit-transform 0.4s, opacity 0.4s",
                "transition":         "transform 0.4s, opacity 0.4s",
                "-webkit-transition-timing-function": "cubic-bezier(0.2, 1, 0.3, 1)",
                "transition-timing-function":         "cubic-bezier(0.2, 1, 0.3, 1)"
	    };
	    let hovbef = {
                "opacity":           "1",
                "-webkit-transform": "translate3d(0, 0, 0)",
                "transform":         "translate3d(0, 0, 0)"
	    }

            let addstyle = comutl.obj2style("#" + this.rootDom()[0].id() + "::before", bef) + "\n";
	    addstyle += comutl.obj2style("#" + this.rootDom()[0].id() + ":hover::before", hovbef) + "\n";
	    comutl.addhead("style", {id: this.id() + "_style"}, addstyle);
            
            this.accentColor("#37474f",{ private:true });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    beforeRender () {
        try {
	    this.text().effect(
	        new Style({ "style" : { "color" : this.text().mainColor() }, eid:3, speed:400 })
            );
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * button text contents setter/getter
     * 
     * @param (mixed) string: button text contents
     *                mofron-comp-text: button text component
     *                undefined: call as getter
     * @return (mofron-comp-text) button text contents 
     * @type parameter
     */
    text (prm) {
        try {
            if (true === comutl.isinc(prm, "Text")) {
                prm.style({ 'position': 'relative', 'z-index': '1' });
                let invert = (h1,h2,h3) => {
                    try {
                        let chk_clr = h3.baseColor();
                        if (false === h3.invert()) {
                            return;
                        } else if (null === chk_clr) {
                            return;
                        } else if (true !== h3.invert()) {
                            let rgb = chk_clr.rgb();
                            let rgb_sum = rgb[0] + rgb[1] + rgb[2];
                            if (450 <= rgb_sum) {
                                return;
                            }
                        }
                        /* execute invert */
                        h3.text().execEffect((true === h2) ? 2 : 3);
                    } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                }
                prm.event(new Hover(new ConfArg(invert,this)));
                prm.effect(
                    new Style({ "style" : { "color" : "rgb(255,255,255)" }, eid:2, speed:400 }),
                );
            }
            return super.text(prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * invert flag for button text
     * 
     * @param (boolean) true: invert text color when cursor is overed on button
     *                  false: not invert
     * @return (boolean) invert flag
     * @type parameter
     */
    invert (prm) {
        try {
            return this.confmng("invert", prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * button text color setter/getter
     * 
     * @param (mixed (color)) string: button text color name, #hex
     *                        array: [red, green, blue, (alpha)]
     *                        undefined: calla as getter
     * @param (dict) style option
     * @return (mixed) button text color
     *                 null: not set yet
     * @type parameter
     */
    mainColor (prm,opt) {
        try {
	    let eff_sty = this.text().effect({ modname: "Style", eid: 3 });
	    if (null !== eff_sty) {
	        eff_sty.style({ "color" : comutl.getcolor(prm).toString() });
            }
	    return this.text().mainColor(prm,opt);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    /**
     * hover base color setter/getter
     * 
     * @param (mixed (color)) string: hover color name, #hex
     *                        array: [red, green, blue, (alpha)]
     *                        undefined: calla as getter
     * @param (dict) style option
     * @return (mixed) hover color
     *                 null: not set yet
     * @type parameter
     */
    accentColor (prm) {
        try {
	    if (undefined === prm) {
                return this.confmng("base-color-buf");
	    }
	    let clr = comutl.getcolor(prm);
            this.confmng("base-color-buf", clr);

	    let bef = { "background" : clr.toString() };
            let addstyle = comutl.obj2style("#" + this.rootDom()[0].id() + "::before", bef) + "\n";
            comutl.addhead("style", {id: this.id() + "_basecolor"}, addstyle);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
