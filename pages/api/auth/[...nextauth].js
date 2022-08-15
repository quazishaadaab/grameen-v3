

import GoogleProvider from "next-auth/providers/google";

import NextAuth from "next-auth"
export default NextAuth({
  // Configure one or more authentication providers
//   problem with the .env.local file
  providers: [
    GoogleProvider({
      clientId: `81954829539-bcrhas8u5ffkuqlpa1thhe1k8pjksf1c.apps.googleusercontent.com` ,
      clientSecret: `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`
    })
  ],
      secret: '"Q!G7s.lpc:xgV;rm3"W' 

})