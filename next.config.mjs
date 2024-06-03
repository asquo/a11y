/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'i0.wp.com',
				port: '',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'courses.edx.org',
				port: '',
				pathname: '/**',
			},

			{
				protocol: 'https',
				hostname: 'upload.wikimedia.org',
				port: '',
				pathname: '/**',
			},
		],
	},
};

export default nextConfig;
