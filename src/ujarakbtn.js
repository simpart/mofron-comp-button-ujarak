/**
 * @file   UjarakBtn.js
 * @brief  ujarak button class
 * @author simpart
 */

mofron.parts.UjarakBtn = class extends mofron.parts.Button {
    
    constructor (txt, clr, hvr_clr) {
        try {
            var _clr     = (clr === undefined) ? null : clr;
            var _hvr_clr = (hvr_clr === undefined) ? null : hvr_clr;
            
            if ( ((null !== _clr)     && ('object' !== (typeof _clr))) ||
                 ((null !== _hvr_clr) && ('object' !== (typeof _hvr_clr))) ) {
                throw new Error('invalid parameter');
            }
            
            super([txt, _clr, _hvr_clr]);
            
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    initContents(vd, prm) {
        try {
            var clr     = prm[1];
            if (null === prm[1]) {
                clr = new mofron.util.Color();
            }
            var hvr_clr = prm[2];
            if (null === prm[2]) {
                hvr_clr = new mofron.util.Color(55, 71, 79);
            }
            
            var rgb = clr.getRgba();
            if ( (null !== rgb) &&
                 (290 > (rgb[0]+rgb[1]+rgb[2])) ) {
                var txt = null;
                if ('string' === (typeof prm[0])) {
                    txt = new mofron.parts.Text(prm[0]);
                } else if ('object' === (typeof prm[0])) {
                    txt = prm[1];
                }
                txt.color(new mofron.util.Color(255,255,255));
            }
            super.initContents(vd, prm[0]);
            
            if (false === mofron.parts.UjarakBtn_exec) {
                this.addStyleTag(clr, hvr_clr);
                mofron.parts.UjarakBtn_exec = true;
            }
            
            this.getTarget().addClname('mof-parts-ujarakbtn');
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    addStyleTag (clr, hvr_clr) {
        try {
            var hc = new mofron.util.HeadConts('style');
            hc.addConts(
                mofron.util.getStyleConts(
                    '.mof-parts-ujarakbtn',
                    {
                        'display'    : 'block'    ,
                        'margin'     : '0px'      ,
                        'border'     : '1px solid',
                        'background' : clr.getStyle(),
                        'position'   : 'relative' ,
                        'z-index'    : '1'        ,
                        
                        '-webkit-backface-visibility' : 'hidden',
                        '-moz-backface-visibility'    : 'hidden',
                        'backface-visibility'         : 'hidden',
                        
                        //'-moz-osx-font-smoothing' : 'grayscale'  ,
                        //'-webkit-font-smoothing'  : 'antialiased',
                        
                        '-webkit-transition' : 'border-color 0.4s, color 0.4s',
                        '-moz-transition'    : 'border-color 0.4s, color 0.4s',
                        '-o-transition'      : 'border-color 0.4s, color 0.4s',
                        'transition'         : 'border-color 0.4s, color 0.4s',
                        
                        '-webkit-transition-timing-function' : 'cubic-bezier(0.2, 1, 0.3, 1)',
                        '-moz-transition-timing-function'    : 'cubic-bezier(0.2, 1, 0.3, 1)',
                        '-o-transition-timing-function'      : 'cubic-bezier(0.2, 1, 0.3, 1)',
                        '-ms-transition-timing-function'     : 'cubic-bezier(0.2, 1, 0.3, 1)',
                        'transition-timing-function'         : 'cubic-bezier(0.2, 1, 0.3, 1)',
                    }
                )
            );
            
            hc.addConts(
                mofron.util.getStyleConts(
                    '.mof-parts-ujarakbtn:focus',
                    { 'outline' : 'none' }
                )
            );
            
            hc.addConts(
                mofron.util.getStyleConts(
                    '.mof-parts-ujarakbtn:before',
                    { 
                        'content'     : "''"      ,
                        'position'    : 'absolute',
                        'top'         : '0'       ,
                        'left'        : '0'       ,
                        'width'       : '100%'    ,
                        'height'      : '100%'    ,
                        'background'  : hvr_clr.getStyle() ,
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
                )
            );
            
            var rgb         = hvr_clr.getRgba();
            var hvr_txt_clr = null;
            if ( (null !== rgb) &&
                 (290 > (rgb[0]+rgb[1]+rgb[2])) ) {
                hvr_txt_clr = new mofron.util.Color(255,255,255);
            } else {
                hvr_txt_clr = new mofron.util.Color(0,0,0);
            }
            hc.addConts(
                mofron.util.getStyleConts(
                    '.mof-parts-ujarakbtn:hover',
                    {
                        'color'        : hvr_txt_clr.getStyle(),
                        'border-color' : hvr_clr.getStyle()
                    }
                )
            );
            
            hc.addConts(
                mofron.util.getStyleConts(
                    '.mof-parts-ujarakbtn:hover::before',
                    {
                        'opacity'            : '1',
                        '-webkit-transform'  : 'translate3d(0, 0, 0)',
                        '-moz-transition'    : 'translate3d(0, 0, 0)',
                        '-o-transition'      : 'translate3d(0, 0, 0)',
                        'transform'          : 'translate3d(0, 0, 0)',
                    }
                )
            );
            
            hc.pushTag();
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    width (val) {
        try {
            var _val = (val === undefined) ? null : val;
            var btn  = this.getTarget();
            if (null === _val) {
                return btn.getStyle('min-width');
            }
            if ('number' != (typeof _val)) {
                throw new Error('invalid parameter');
            }
            btn.setStyle('min-width', _val + 'px');
            btn.setStyle('max-width', _val + 'px');
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}

mofron.parts.UjarakBtn_exec = false;
