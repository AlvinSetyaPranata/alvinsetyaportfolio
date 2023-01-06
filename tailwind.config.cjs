/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.jsx", "./src/components/*.jsx", "./src/pages/**/*.jsx"],
  theme: {
    extend: {
      'colors': {
        'lavender-700': '#634EB7',
        'lavender-600': '#7871EE',
        'lavender-500': '#9690F3',
        'lavender-400': '#B1ADFB',
        'glass' : 'rgba(255, 255, 255, .45)' 
      },
      'animation' : {
        'testa' : 'test 500ms cubic-bezier(0, 0.93, 0.93, 0.93) forwards',
        'navIconActive' : 'nav_icon_active 500ms forwards ease-in',
        'navIconLeave' : 'nav_icon_deactive 500ms forwards ease-out',
      },
      'keyframes' : {
        'test' : {
          'from' : {
            'margin': '400px 0'
          },
          'to' : {
            'margin': '0'
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


// cubic-bezier(0,-0.21, 1, 0.83)