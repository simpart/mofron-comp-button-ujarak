# mofron-comp-ujarak
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

ujarak button component for mofron

this source based on the codrops: https://github.com/codrops/ButtonStylesInspiration


# Install
```
npm install mofron mofron-comp-ujarak
```

# Sample
```html
<setting>
    <tag load="mofron-comp-ujarak">Button</tag>
</setting>

<Button size=(2rem,0.5rem) color=("#787878","#f0e6fa","#af6cf2")>
    <text>Test</text>
</Button>
```

# Parameter

| Short<br>Form | Parameter Name | Type | Description |
|:-------------:|:---------------|:-----|:------------|
| | text | mixed | string: button text contents |
| | | | mofron-comp-text: button text component |
| | | | undefined: call as getter |
| | invert | boolean | true: invert text color when cursor is overed on button |
| | | | false: not invert |
| | | | undefined: call as getter |
| | mainColor | mixed (color) | string: button text color name, #hex |
| | | | array: [red, green, blue, (alpha)] |
| | | | undefined: calla as getter |
| | | dict | style option |
| | baseColor | mixed (color) | string: hover color name, #hex |
| | | | array: [red, green, blue, (alpha)] |
| | | | undefined: calla as getter |
| | | dict | style option |

