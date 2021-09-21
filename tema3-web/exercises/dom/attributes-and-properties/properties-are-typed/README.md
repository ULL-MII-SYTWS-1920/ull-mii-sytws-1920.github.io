DOM properties are not always strings. For instance, the `input.checked` 
property (for checkboxes) is a `boolean`.

The `style` attribute is a `string`, but the `style` property is an `object`.

Quite rarely, even if a DOM property type is a `string`, it may differ from the attribute. For instance, the `href` DOM property is always a full URL