const path = require('path');

module.exports = {
    title: 'jsl components',
    showCode: false,
    showUsage: true,
    showSidebar: true,
    components: './src/components/**/[A-Z]*.js',
    highlightTheme: 'pastel-on-dark',
    theme: {
        color: {
            base: '#333',
            light: '#999',
            lightest: '#ccc',
            link: '#068dcc',
            linkHover: '#068dcc',
            border: '#BDBDBD',
            name: '#FF467E',
            type: '#333',
            error: '#fff',
            baseBackground: '#f7f7f7',
            codeBackground: '#fff',
            errorBackground: '#E6003D',
            sidebarBackground: '#fff'
        },
        fontFamily: {
            base: ['Open Sans', 'Helvetica Neue', 'Helvetica', 'sans-serif']
        }
    }
};
