/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{html,js,ejs}"],
  theme: {
    extend: {
      fontFamily: {
       'outfit':"outfit,cursive"
      },
      backgroundImage: {
        'bgImg': "url('/images/login-bg-pattern.png')",
      },
      backgroundColor: {
        bgColor: "#121212"
      },
     
    },
  },
  plugins: [],
}

