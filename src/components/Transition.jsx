import { motion } from "framer-motion";
import React from "react";



const variants = {  
  'animate' : {
    'opacity' : 1,
    'transition' : {
      'ease' : 'easeIn',
      'duration' : 1
    },
    'transitionEnd': {
      'opacity' : 0,
      'display': 'none'
    }
  }
}

function Transition() {
  return (
      <motion.div 
      className="w-screen h-screen absolute inset-0 z-10 bg-lavender-700"
      animate = 'animate'
      variants={variants}
      >
        <div className="relative top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-h-[200px] w-fit overflow-y-hidden py-2">
          <div className="relative top-[51px] z-30">
            <svg
              width="108"
              height="62"
              viewBox="0 0 108 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Group 4">
                <circle
                  id="Ellipse 2"
                  r="31"
                  transform="matrix(0.866025 -0.5 0.866025 0.5 53.6936 31)"
                  fill="#7871EE"
                />
                <path
                  id="A"
                  d="M53.5377 44.09L41.5346 25.82L45.5252 23.516L77.201 30.428L72.9609 32.876L44.8393 26.396L46.4605 25.46L57.7154 41.678L53.5377 44.09ZM53.0077 38.564L50.9188 36.098L62.7037 29.294L66.9749 30.5L53.0077 38.564Z"
                  fill="#FFFFFD"
                />
              </g>
            </svg>
          </div>
          <div className="relative z-20 animate-testa">
            <svg
              width="108"
              height="62"
              viewBox="0 0 108 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                r="31"
                transform="matrix(0.866025 -0.5 0.866025 0.5 53.6936 31)"
                fill="#9590F3"
              />
              <path
                d="M63.7014 38.582C61.997 39.566 60.1264 40.37 58.0895 40.994C56.0318 41.606 54.1612 41.954 52.4777 42.038L50.7318 39.41C52.2906 39.302 53.943 39.008 55.6889 38.528C57.4348 38.048 58.9833 37.418 60.3343 36.638C61.4774 35.978 62.2776 35.372 62.7349 34.82C63.1921 34.268 63.3792 33.776 63.2961 33.344C63.1921 32.9 62.87 32.522 62.3296 32.21C61.6645 31.826 60.8954 31.658 60.0225 31.706C59.1288 31.742 58.1831 31.916 57.1854 32.228C56.1877 32.516 55.1173 32.87 53.9742 33.29C52.8518 33.698 51.6879 34.094 50.4824 34.478C49.2768 34.838 48.0713 35.114 46.8658 35.306C45.6603 35.474 44.4444 35.48 43.2181 35.324C41.9918 35.168 40.7967 34.754 39.6328 34.082C38.4481 33.398 37.679 32.594 37.3257 31.67C36.9724 30.722 37.149 29.708 37.8557 28.628C38.5624 27.524 39.9134 26.396 41.9087 25.244C43.2181 24.488 44.6835 23.834 46.3047 23.282C47.9259 22.73 49.5263 22.358 51.1059 22.166L52.9765 24.722C51.4177 24.95 49.9835 25.286 48.6741 25.73C47.3439 26.162 46.2007 26.654 45.2446 27.206C44.1223 27.854 43.3428 28.46 42.9064 29.024C42.4907 29.576 42.3348 30.074 42.4387 30.518C42.5634 30.95 42.9064 31.328 43.4676 31.652C44.1327 32.036 44.9017 32.216 45.7746 32.192C46.6476 32.144 47.5725 31.97 48.5494 31.67C49.547 31.358 50.6278 30.998 51.7918 30.59C52.9349 30.17 54.0989 29.774 55.2836 29.402C56.4891 29.018 57.6842 28.736 58.8689 28.556C60.0745 28.364 61.28 28.352 62.4855 28.52C63.7118 28.676 64.8965 29.084 66.0396 29.744C67.2036 30.416 67.9622 31.226 68.3156 32.174C68.6689 33.098 68.4922 34.112 67.7855 35.216C67.0581 36.308 65.6967 37.43 63.7014 38.582Z"
                fill="#FFFFFD"
              />
            </svg>
          </div>
          <div className="relative bottom-[53px] z-10 animate-testa">
            <svg
              width="108"
              height="62"
              viewBox="0 0 108 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Group 26">
                <g id="Group 7">
                  <circle
                    id="Ellipse 2"
                    r="31"
                    transform="matrix(0.866025 -0.5 0.866025 0.5 53.6936 31)"
                    fill="#B1ADFB"
                  />
                  <path
                    id="P"
                    d="M56.6242 42.308L34.8004 29.708L43.7793 24.524C45.7123 23.408 47.6764 22.634 49.6718 22.202C51.6879 21.758 53.652 21.656 55.5642 21.896C57.4764 22.136 59.2327 22.718 60.8331 23.642C62.4335 24.566 63.4416 25.58 63.8573 26.684C64.2729 27.788 64.0963 28.922 63.3272 30.086C62.579 31.238 61.2384 32.372 59.3054 33.488L52.5712 37.376L52.4777 35.234L60.6772 39.968L56.6242 42.308ZM52.9142 35.486L49.1418 35.396L55.6889 31.616C57.4764 30.584 58.4429 29.594 58.5884 28.646C58.7338 27.674 58.1207 26.792 56.7489 26C55.3563 25.196 53.8287 24.842 52.1659 24.938C50.5239 25.022 48.8092 25.58 47.0217 26.612L40.4746 30.392L40.2875 28.196L52.9142 35.486Z"
                    fill="#FFFFFD"
                  />
                </g>
              </g>
            </svg>
            <h1>Design</h1>
          </div>
        </div>
      </motion.div>
  );
}

export default Transition;
