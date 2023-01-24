module.exports = {
	root: true,
	extends: ['eslint:recommended', 'prettier'],
	plugins: ['svelte3'],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	rules: {
		'spaced-comment': 'off',
		'no-tabs': ['error', { allowIndentationTabs: true }],
		indent: ['error', 'tab'],
		semi: ['error', 'always'],
		'no-console': ['warn', { allow: ['warn', 'error'] }],
		'no-alert': 'warn'
	}
};
