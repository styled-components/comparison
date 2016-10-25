# JSS

*[Repo](https://github.com/cssinjs/jss) – [Docs](https://github.com/cssinjs/jss/tree/master/docs)*

```JS
// app.js
import injectSheet from 'react-jss';

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

const App = (props) => (
  <div className={props.sheet.classes.container}>
    <Tweet data={data} />
  </div>
);

export default injectSheet(styles)(App);
```

## Checklist

- ✅ No build requirements
- ✅ Small and lightweight
- 😕 Supports global CSS (requires separate setup)
- ✅ Supports entirety of CSS
- ✅ Colocated
- ✅ Isolated
- ✅ Doesn’t break inline styles
- 😕 Easy to override (inline styles, but no standard mechanism)
- ❌ Theming
- ❌ Pre-build
- ✅ Server side rendering
- ❌ No wrapper components
- ❌ ReactNative support

<sub><i>Legend: ✅ = Yes, ❌ = No, 😕 = Kinda, refer to notes or parentheses</i><sub>

#### Notes

- Has plugin system
- Supports all selectors (nesting, children, siblings,…), _requires_ custom `'&selector'` notation though (e.g. `'&:hover'`, `& div`)
