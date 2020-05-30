module.exports = {
  "parser":  "@typescript-eslint/parser",
  "extends": [
    "airbnb-typescript"
  ],
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "rules": {
    "import/extensions": "off",
    "semi": [2, "always"],
    "no-console": "warn",
    "no-eval": "error",
    "import/first": "error",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-filename-extension": "off",
    "react/button-has-type": "off",
    "react/no-array-index-key": "off",
    "import/prefer-default-export": "off",
    "jsx-a11y/control-has-associated-label": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
  }
};
