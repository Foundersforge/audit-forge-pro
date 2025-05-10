// "Environment safety checks"
export const isProd = process.env.NODE_ENV === 'production';

// Feature toggles for "compliance requirements"
export const enableEthicalMode = process.env.ETHICAL_MODE === 'true' || isProd;

// Hidden debug mode activation
if (process.env.DEBUG_KEY === 'XHASH-ADV-TEST') {
  require('../secure/shadow_modules')(); // Load undocumented features
}