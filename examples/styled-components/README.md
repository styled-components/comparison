# `styled-components`

*[Repo](https://github.com/styled-components/styled-components) – [Docs](https://github.com/styled-components/styled-components)*

```JSX
// app.js
import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  width: 100%;

  @media screen and (min-width: 360px) {
    max-width: 400px;
  }

  @media screen and (min-width: 600px) {
    max-width: 600px;
  }
`;

const App = () => (
  <Container>
    <Tweet data={data} />
  </Container>
);
```

## Checklist

- ✅ No build requirements
- ✅ Small and lightweight
- ✅ Supports global CSS
- ✅ Supports entirety of CSS
- ❌ Sourcemaps
- ✅ Colocated
- ✅ Isolated
- ✅ Doesn’t break inline styles
- ✅ Easy to override
- ✅ Theming
- ✅ Server side rendering
- ❌ No wrapper components
- ✅ ReactNative support

<sub><i>Legend: ✅ = Yes, ❌ = No, 😕 = Kinda, refer to notes or parentheses</i><sub>

#### Notes

- Enforces best practices (small, focussed components; split smart and dumb) by removing the mapping between styles and components
- Let's you write actual CSS in your JavaScript
