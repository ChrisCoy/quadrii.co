module.exports = {
	plugins: {
		tailwindcss: {},
		autoprefixer: {},
		//config to minify css only in production
		// ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
	},
};
