/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
// need to specify domains when importing images 
  images: {

    domains:['links.papareact.com','avatars.dicebear.com','logomakercdn.truic.com'],
  }
}
