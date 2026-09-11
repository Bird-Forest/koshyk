/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "online-koshyk.in.ua",
        port: "",
        pathname: "/public/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
