/**
 * @file   UjarakBtn.js
 * @brief  ujarak button class
 * @author simpart
 */

mofron.parts.UjarakBtn = class extends mofron.parts.Button {
    initContents(vd, prm) {
        try {
            super.initContents(vd, prm);
            var btn = this.getTarget();
            
            //btn.setStyle('height', null);
            //btn.setStyle('width', null);
            
            //btn.setStyle('min-width'     , this.width());
            //btn.setStyle('max-width'     , this.width());
            btn.setStyle('display'       , 'block');
            btn.setStyle('margin'        , '0px');
            //btn.setStyle('padding'       , '1em 2em');
            btn.setStyle('border'        , '1px solid');
            btn.setStyle('background'    , 'none');
            //btn.setStyle('color'         , 'inherit');
                //btn.setStyle('vertical-align', 'middle');
            btn.setStyle('position'      , 'relative');
            btn.setStyle('z-index'       , '1');
            btn.setStyle('-webkit-backface-visibility'       , 'hidden');
            btn.setStyle('-moz-osx-font-smoothing'           , 'grayscale');
            btn.setStyle('-webkit-transition'                , 'border-color 0.4s, color 0.4s');
            btn.setStyle('transition'                        , 'border-color 0.4s, color 0.4s');
            btn.setStyle('-webkit-transition-timing-function', 'cubic-bezier(0.2, 1, 0.3, 1)');
            btn.setStyle('transition-timing-function'        , 'cubic-bezier(0.2, 1, 0.3, 1)');
                //position:       relative;
                //cursor:         pointer;
            if (false === mofron.parts.UjarakBtn_exec) {
                this.addStyleTag();
                mofron.parts.UjarakBtn_exec = true;
            }
            
            btn.addClname('mof-parts-ujarakbtn');
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    addStyleTag () {
        try {
            var style_str = '<style>';
            style_str    +=     '.mof-parts-ujarakbtn:focus{';
            style_str    +=         'outline:' + 'none;';
            style_str    +=     '}';
            
            style_str    +=     '.mof-parts-ujarakbtn::before{';
            style_str    +=         "content:"    + "'';";
            style_str    +=         'position:'   + 'absolute;';
            style_str    +=         'top:'        + '0;';
            style_str    +=         'left:'       + '0;';
            style_str    +=         'width:'      + '100%;';
            style_str    +=         'height:'     + '100%;';
            style_str    +=         'background:' + '#37474f;';
            style_str    +=         'z-index:'    + '-1;';
            style_str    +=         'opacity:'    + '0;';
            style_str    +=         '-webkit-transform:'  + 'scale3d(0.7, 1, 1);';
            style_str    +=         'transform:'          + 'scale3d(0.7, 1, 1);';
            style_str    +=         '-webkit-transition:' + '-webkit-transform 0.4s, opacity 0.4s;';
            style_str    +=         'transition:'         + 'transform 0.4s, opacity 0.4s;';
            style_str    +=         '-webkit-transition-timing-function:' + 'cubic-bezier(0.2, 1, 0.3, 1);';
            style_str    +=         'transition-timing-function:'         + 'cubic-bezier(0.2, 1, 0.3, 1);';
            style_str    +=     '}';
            
            style_str    +=     '.mof-parts-ujarakbtn:hover{';
            style_str    +=         'color:'        + '#fff;';
            style_str    +=         'border-color:' + '#37474f;';
            style_str    +=     '}';
            
            style_str    +=     '.mof-parts-ujarakbtn:hover::before{';
            style_str    +=         'opacity:'           + '1;';
            style_str    +=         '-webkit-transform:' + 'translate3d(0, 0, 0);';
            style_str    +=         'transform:'         + 'translate3d(0, 0, 0);';
            style_str    +=     '}';
            
            style_str    += '</style>'
            var hdr_dom = document.querySelector('head');
            hdr_dom.insertAdjacentHTML('beforeend', style_str);
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
