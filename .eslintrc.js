module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
	},
	plugins: ['react', 'import', 'react-hooks', 'unicorn', 'sonarjs'],
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	settings: {
		react: {
			version: '17.0.2'
		}
	},
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 2020,
		ecmaFeatures: {
			jsx: true,
			impliedStrict: true
		},
		sourceType: 'module'
	},
	rules: {
		'no-unused-vars': ['error', {args: 'none'}],
		'no-console': 'off',
		'semi': ['error', 'always'],
		'no-new-object': 'error',
		'no-var': 'error',
		'no-const-assign': 'error',
		'no-array-constructor': 'error',
		'array-callback-return': 'error',
		'prefer-destructuring': [
			'error',
			{
				VariableDeclarator: {
					array: false,
					object: true
				},
				AssignmentExpression: {
					array: true,
					object: false
				}
			},
			{
				enforceForRenamedProperties: false
			}
		],
		'no-useless-escape': 'error',
		'space-before-function-paren': [
			'error',
			{
				anonymous: 'never',
				named: 'never',
				asyncArrow: 'always'
			}
		],
		'space-before-blocks': [
			'error',
			{
				functions: 'always',
				keywords: 'always',
				classes: 'always'
			}
		],
		'no-param-reassign': 'error',
		'arrow-spacing': ['error', {before: true, after: true}],
		'arrow-parens': ['error', 'as-needed'],
		'arrow-body-style': ['error', 'as-needed'],
		'no-useless-constructor': 'error',
		'no-duplicate-imports': 'error',
		'dot-notation': 'error',
		'no-multi-assign': 'error',
		'eqeqeq': 'error',
		'no-case-declarations': 'error',
		'no-nested-ternary': 'error',
		'no-unneeded-ternary': 'error',
		'space-infix-ops': 'error',
		'no-whitespace-before-property': 'error',
		'comma-spacing': ['error', {before: false, after: true}],
		'computed-property-spacing': ['error', 'never'],
		'func-call-spacing': ['error', 'never'],
		'key-spacing': [
			'error',
			{
				singleLine: {
					beforeColon: false,
					afterColon: true
				},
				multiLine: {
					beforeColon: false,
					afterColon: true
				}
			}
		],
		'comma-style': ['error', 'last'],
		'object-shorthand': 'error',
		'no-eval': 'error',
		'no-implied-eval': 'error',
		'no-lone-blocks': 'error',
		'no-multi-spaces': 'error',
		'no-redeclare': 'error',
		'no-self-compare': 'error',
		'no-dupe-args': 'error',
		'no-dupe-keys': 'error',
		'no-duplicate-case': 'error',
		'no-empty': 'error',
		'no-unreachable': 'error',
		'no-implicit-coercion': 'error',
		'lines-between-class-members': ['error', 'always'],
		'prefer-template': 'error',
		'no-useless-computed-key': 'error',
		'no-await-in-loop': 'error',
		'no-useless-rename': 'error',
		'no-template-curly-in-string': 'error',
		'block-scoped-var': 'error',
		'no-eq-null': 'error',
		'no-loop-func': 'error',
		'no-return-await': 'error',
		'no-return-assign': ['error', 'always'],
		'no-unmodified-loop-condition': 'error',
		'no-useless-concat': 'error',
		'require-await': 'error',
		'prefer-arrow-callback': 'error',
		'prefer-const': 'error',
		'no-useless-return': 'error',
		'curly': ['error', 'all'],
		'consistent-return': ['error', {treatUndefinedAsUnspecified: true}],
		'no-empty-function': 'error',

		// import specific eslint rules
		'import/no-useless-path-segments': 'error',
		'import/exports-last': 'error',
		'import/order': [
			'error',
			{groups: ['builtin', 'external', 'internal', 'parent', 'sibling'], 'newlines-between': 'always'}
		],
		'import/newline-after-import': 'error',

		// react specific eslint rules
		'react/display-name': 'error',
		'react/prop-types': 'off',//['error', {ignore: ['style']}],
		'react/boolean-prop-naming': ['error', {rule: '^(is|has|should)[A-Z]([A-Za-z0-9]?)+', validateNested: true}],
		'react/forbid-prop-types': ['error', {forbid: ['any'], checkContextTypes: true, checkChildContextTypes: true}],
		'react/no-access-state-in-setstate': 'error',
		'react/no-direct-mutation-state': 'error',
		'react/no-typos': 'error',
		'react/no-this-in-sfc': 'error',
		'react/no-unused-prop-types': 'error',
		'react/no-unused-state': 'error',
		'react/prefer-read-only-props': 'error',
		'react/prefer-stateless-function': ['warn', {ignorePureComponents: true}],
		'react/jsx-handler-names': 'error',
		'react/jsx-key': 'error',
		'react/jsx-no-duplicate-props': 'error',
		'react/jsx-no-undef': 'error',
		'react/jsx-curly-brace-presence': 'error',
		'react/jsx-no-useless-fragment': 'error',
		'react/react-in-jsx-scope': 'off',

		// react hooks eslint rules
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',

		// unicorn eslint rules
		'unicorn/better-regex': 'error',
		'unicorn/catch-error-name': 'error',
		'unicorn/consistent-function-scoping': 'error',
		'unicorn/custom-error-definition': 'error',
		'unicorn/error-message': 'error',
		'unicorn/escape-case': 'error',
		'unicorn/filename-case': [
			'error',
			{
				case: 'kebabCase'
			}
		],
		'unicorn/import-index': 'error',
		'unicorn/no-abusive-eslint-disable': 'error',
		'unicorn/no-array-instanceof': 'error',
		'unicorn/no-console-spaces': 'error',
		'unicorn/no-for-loop': 'error',
		'unicorn/no-object-as-default-parameter': 'error',
		'unicorn/no-unreadable-array-destructuring': 'error',
		'unicorn/no-unsafe-regex': 'error',
		'unicorn/no-unused-properties': 'error',
		'unicorn/number-literal-case': 'error',
		'unicorn/prefer-add-event-listener': 'error',
		'unicorn/prefer-array-find': 'error',
		'unicorn/prefer-flat-map': 'error',
		'unicorn/prefer-includes': 'error',
		'unicorn/prefer-negative-index': 'error',
		'unicorn/prefer-number-properties': 'error',
		'unicorn/prefer-replace-all': 'error',
		'unicorn/prefer-set-has': 'error',
		'unicorn/prefer-spread': 'error',
		'unicorn/prefer-starts-ends-with': 'error',
		'unicorn/prefer-string-slice': 'error',
		'unicorn/prefer-trim-start-end': 'error',
		'unicorn/prefer-type-error': 'error',
		'unicorn/string-content': 'error',
		'unicorn/throw-new-error': 'error',
		'unicorn/prefer-array-flat': 'error',

		// sonar eslint rules
		'sonarjs/cognitive-complexity': 'error',
		'sonarjs/max-switch-cases': 'error',
		'sonarjs/no-all-duplicated-branches': 'error',
		'sonarjs/no-collapsible-if': 'error',
		'sonarjs/no-collection-size-mischeck': 'error',
		'sonarjs/no-duplicated-branches': 'error',
		'sonarjs/no-element-overwrite': 'error',
		'sonarjs/no-extra-arguments': 'error',
		'sonarjs/no-identical-conditions': 'error',
		'sonarjs/no-identical-expressions': 'error',
		'sonarjs/no-identical-functions': 'error',
		'sonarjs/no-inverted-boolean-check': 'error',
		'sonarjs/no-one-iteration-loop': 'error',
		'sonarjs/no-redundant-boolean': 'error',
		'sonarjs/no-redundant-jump': 'error',
		'sonarjs/no-same-line-conditional': 'error',
		'sonarjs/no-small-switch': 'error',
		'sonarjs/no-unused-collection': 'error',
		'sonarjs/no-use-of-empty-return-value': 'error',
		'sonarjs/no-useless-catch': 'error',
		'sonarjs/prefer-immediate-return': 'error',
		'sonarjs/prefer-object-literal': 'error',
		'sonarjs/prefer-single-boolean-return': 'error',
		'sonarjs/prefer-while': 'error'
	}
};
