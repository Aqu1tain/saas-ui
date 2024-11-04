// eslint.config.js
export default {
  ignores: [
    // Ajoute ici les fichiers et dossiers à ignorer
    'node_modules/',
    'dist/',
    'build/',
    '.nuxt',
    'coverage',
    '*.log',
    '.DS_Store',
    '.code',
    '*.iml',
    'package-lock.json',
    'templates/*',
    'sw.js',
    // Templates
    'src/templates',
    // Ajoute les autres chemins de ton .eslintignore ici
  ],
  // Ta configuration ESLint existante
  rules: {
    // Tes règles ici
  },
};
