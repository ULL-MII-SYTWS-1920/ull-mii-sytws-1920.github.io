When a standard attribute changes, the corresponding property is auto-updated, and (with some exceptions) viceversa.

But there are exclusions, for instance `input.value` synchronizes only from attribute → to property, but not back

That *feature* may actually come in handy, because the user actions may lead to value changes, and then after them, if we want to recover the *original* value from HTML, it’s in the attribute.