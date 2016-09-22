# Aphrodite

*[Repo](https://github.com/khan/aphrodite) – [Docs](https://github.com/khan/aphrodite)*

```JS
// app.js
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
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
});

const App = () => (
  <div className={css(styles.container)}>
    <Tweet data={data} />
  </div>
);
```

## Checklist

- ✅ No build requirements
- ✅ Small and lightweight
- ❌ Supports global CSS
- ❌ Supports entirety of CSS
- ✅ Colocated
- ✅ Isolated
- 😕 Doesn’t break inline styles (have to use `aphrodite/no-important`)
- 😕 Easy to override (have to use `aphrodite/no-important`)
- ❌ Theming
- ❌ Pre-build
- ✅ Server side rendering
- ✅ No wrapper components

<sub><i>Legend: ✅ = Yes, ❌ = No, 😕 = Kinda, refer to notes or parentheses</i><sub>

#### Notes

- Use `aphrodite/no-important`, it un-breaks inline styles and makes things easier to override
- Doesn't support nesting at all (i.e. no `.element a`)
- Keyframes don't exist, instead you pass an object to `animationName`. The `animation` shorthand property doesn't work (which in turn means no animation chaining), you have to use `animationName` and `animationDuration`, `animationIterationCount`,… separately
- `content` property requires double quotes (e.g. `content: '"Some content"'`)
