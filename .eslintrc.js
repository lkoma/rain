module.exports = {
    "root": true,
    "parser": "vue-eslint-parser",
    "parserOptions": {
        "parser": "babel-eslint",
        "sourceType": "module",
        "allowImportExportEverywhere": false
    },
    "env": {
        "browser": true
    },
    "extends": ["airbnb-base"],
    "plugins": [
        "vue"
    ],
    "settings": {
        "import/resolver": {
            "webpack": {
                "config": "build/webpack.base.conf.js"
            }
        }
    },
    "rules": {
        "import/extensions": ["error", "always", {
            "js": "never",
            "vue": "never"
        }],
        "import/no-extraneous-dependencies": 0,
        "max-len": [1, {
            "code": 120,
            "ignoreUrls": true,
            "ignoreStrings": true,
            "ignoreTemplateLiterals": true,
            "ignoreRegExpLiterals": true
        }],
        "no-new": 0,
        "no-debugger": 2,
        "comma-dangle": ["error", "never"],
        "indent": ["error", 4, {
            "SwitchCase": 1
        }],
        "no-extend-native": ["error", { "exceptions": ["Object", "Date"] }],
        "quotes": ["error", "single"],
        "semi": ["error", "always"],
        "brace-style": ["error", "stroustrup"],
        "global-require": 0,
        "no-param-reassign": 0,
        "no-unused-expressions": ["error", { "allowShortCircuit": true, "allowTernary": true }],
        "no-lonely-if": 2,
        "prefer-const": ["error", {
            "destructuring": "any",
            "ignoreReadBeforeAssign": false
        }],
        "no-constant-condition": ["error", { "checkLoops": false }],
        "quote-props": ["error", "consistent-as-needed"],
        "prefer-destructuring": 0,
        "arrow-parens": ["error", "as-needed"],
        "no-confusing-arrow": ["error", {"allowParens": true}],
        "function-paren-newline": [2, "consistent"],
        "curly": ["error", "all"],
        "no-multiple-empty-lines": ["error", { "max": 1, "maxBOF": 1, "maxEOF": 1 }],
        "id-length": ["error", {"min": 1, "max": 32, "exceptions": ["i", "j", "k", "u", "_", "$", "t", "r", "l"]}],
        "no-plusplus": 0,
        "no-restricted-syntax": [2,
            "LabeledStatement",
            "WithStatement"
        ],
        "no-restricted-globals": 0,
        "linebreak-style": 0
    }
}
