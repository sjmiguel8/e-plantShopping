import '@babel/register';
import './src/CartItem.jsx';

// Configure Babel to handle .js and .jsx files
import { register } from '@babel/register';

register({
  extensions: ['.js', '.jsx'],
});

// Import the CartItem component
import './src/CartItem.jsx';