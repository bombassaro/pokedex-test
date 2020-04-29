const nextConfig = {
  experimental: {
    publicDirectory: true
  },
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.(gif|png|jpe?g)$/i,
        use: [
          {
            loader: "file-loader"
          },
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            }
          }
        ]
      }
    )
    return config;
  }
}
module.exports = nextConfig