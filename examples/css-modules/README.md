# CSS Modules

*[Repo](https://github.com/css-modules/css-modules) – [Docs](https://github.com/css-modules/css-modules)*

```CSS
/* app.css */
.container {
  margin: 0 auto;
  width: 100%;
}

@media screen and (min-width: 360px) {
  .container {
    max-width: 400px;
  }
}
```

```JS
// app.js

import styles from './app.css';

const App = () => (
  <div className={styles.container}>
    <Tweet data={data} />
  </div>
);
```

## Checklist

- ❌ No build requirements
- ✅ Small and lightweight
- ✅ Supports global CSS
- ✅ Supports entirety of CSS
- 😕 Colocated (_has_ to be in a separate file)
- ✅ Isolated
- ✅ Doesn’t break inline styles
- ✅ Easy to override
- 😕 Theming (it's CSS, so it works, but it's custom for each implementation, i.e. no standard way of doing it)
- ✅ Pre-build
- 😕 Server side rendering (requires running webpack on the server)
- ✅ No wrapper components

<sub><i>Legend: ✅ = Yes, ❌ = No, 😕 = Kinda, refer to notes or parentheses</i><sub>

#### Notes

- Requires webpack and the `css-loader` (or PostCSS, but that's more work)
- Adds composition of class names to CSS, which helps with code reuse
