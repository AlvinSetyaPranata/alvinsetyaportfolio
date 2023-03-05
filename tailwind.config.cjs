/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.jsx", "./src/components/*.jsx", "./src/pages/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        'headings' : ['Satisfy', 'cursive']
      },
      colors: {
        'lavender-600': '#7871EE',
        'lavender-500': '#9690F3',
        'lavender-400': '#B1ADFB',
        'blur-white' : 'linear-gradient(180deg, rgba(255, 255, 255, 0.53) 9.72%, rgba(255, 255, 255, 0) 100%);'
      },
      'animation' : {
        'navIconActive' : 'nav_icon_active 500ms forwards ease-in',
        'navIconLeave' : 'nav_icon_deactive 500ms forwards ease-out',
        'spin-slow' : 'spin 2s linear infinite',
        'spin-slow-reverse' : 'spin_slow_reverse 2s linear infinite 500ms',
        'scale' : 'scale_animate 1s linear infinite alternate'
      },
      'keyframes' : {
        'scale_animate' : {
          'to' : {
            'transform' : 'scale(105%)'
          }
        },

        'spin_slow_reverse' : {
          'to' : {
            'transform': 'rotate(-360deg)'
          }
        },
        'nav_icon_active' : {
          'from' : {
            'opacity' : '0',
            'transform' : 'translateY(-100px)',
          }, 
          'to' : {
            'opacity' : '1',
            'transform' : 'translateY(0)',
          }
        },

        'nav_icon_deactive' : {
          'from' : {
            'opacity' : '1',
            'transform' : 'translateY(0)',
          },
          'to' : {
            'opacity' : '0',
            'transform' : 'translateY(-100px)',
          }
        },
        'page_leave' : {
          'from' : {
            'opacity' : '0'
          },
          'to' : {
            'opacity' : '1'
          }
        }
 
      }
    },
  },
  plugins: [],
}
