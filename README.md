# mofron-comp-button-ujarak
extends component of ujarak button for mofron

# Install

```bash
npm install mofron-comp-button-ujarak
```

# Quick Start
please see [here](https://github.com/simpart/mofron) about an overview of mofron

example
```javascript
require('mofron');
let Button = require('mofron-comp-button-ujarak');

new Button({
    param      : 'TEST',  // require
    clickEvent : function () {alert('click');},
    width      : 150,
    height     : 40,
    color      : new mofron.Color(185,214,228),
    visible    : true
});
```

#class specification
please see [button component spacification](https://github.com/simpart/mofron-comp-button)
