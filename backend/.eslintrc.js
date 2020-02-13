module.exports = {
    "extends": "airbnb-base",
    "rules": {
        "comma-dangle": ["error", {
            "arrays": "never",
            "objects": "never",
            "imports": "never",
            "exports": "never",
            "functions": "ignore"
        }],
        "no-unused-vars": "off",
        "func-names": "off",
        "newline-per-chained-call": "off",
        "import/prefer-default-export": "off",
        "class-methods-use-this": "off",
        "arrow-body-style": "off",
        "no-param-reassign": "off",
        "no-underscore-dangle": "off",
        "no-return-await": "off"
    }
};