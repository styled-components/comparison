# Aphrodite

*[Repo](https://github.com/FormidableLabs/radium) – [Docs](https://formidable.com/open-source/radium/)*

```JS
// app.js
import radium from 'radium';

const styles = {
  container: {
    margin: '0 auto',
    width: '100%',
    '@media screen and (min-width: 360px)': {
      maxWidth: '400px',
    },
    '@media screen and (min-width: 600px)': {
      maxWidth: '600px',
    },
  },
};

const App = () => (
  <div style={styles.container}>
    <Tweet data={data} />
  </div>
);

export default radium(App);
```

## Checklist

- ✅ No build requirements
- ✅ Small and lightweight
- ✅ Supports global CSS
- ❌ Supports entirety of CSS
- ✅ Colocated
- ✅ Isolated
- ✅ Doesn’t break inline styles (it _is_ inline styles)
- ✅ Easy to override
- ✅ Theming
- ❌ Pre-build
- ✅ Server side rendering
- ❌ No wrapper components

<sub><i>Legend: ✅ = Yes, ❌ = No, 😕 = Kinda, refer to notes or parentheses</i><sub>

#### Notes

- Doesn't support pseudo selectors (`:checked`, `:last`, `:before`, or `:after`)
- To use keyframes or media queries you have to wrap entire app in `StyleRoot` component
- Has a helper for keyframes, `radium.keyframes`. `animation` shorthand property kinda works, but you _have_ to use `animationName` too and pass in the returned value from `radium.keyframes`. You cannot use `animation` on its own
- Has good support for modifiers
