module.exports = {
    theme: {
        extend: {
            colors: {
                'regal-blue': '#243c5a',
                'primary-color': '#2ec4b6',
                'primary-text-color': '#333',
                'secondary-text-color': '#aaa',
                'light-gray-color': '#f4f4f4',
                'mid-gray-color': '#e9e9e9',
                'dark-gray-color': '#1a1a1a',
            }
        },
        fontFamily: {
            "base": ["Open Sans", "sans-serif"],
            "alt": ["dosis", "sans-serif"],
        },
    },
    variants: {
        margin: ({after}) => after(['first', 'last', 'odd', 'even']),
    },
    purge: {
        enabled: !process.env.ROLLUP_WATCH,
        mode: 'all',
        content: ['./**/**/*.html', './**/**/*.svelte'],

        options: {
            whitelistPatterns: [/svelte-/],
            defaultExtractor: (content) =>
                [...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => group),
        },
    },
}