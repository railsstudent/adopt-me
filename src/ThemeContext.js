import { createContext} from 'react';

// Pass a hook to context
const ThemeContext = createContext([ { backgroundColor: 'green', color: 'black' }, () => {} ]);

export default ThemeContext;
