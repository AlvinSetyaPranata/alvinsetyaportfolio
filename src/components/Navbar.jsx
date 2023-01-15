import { Link } from "react-router-dom"

function Navbar({ state, activeController }) {

  const svg_base_class = 'p-2 xl:hidden rounded-md stroke-lavender-500 con '
  
  const borderLink =  'before:absolute before:w-0 before:border-b-lavender-600 before:h-full before:border-b-4 before:py-[13px] before:hover:w-full rounded-md before:hover:transition-all before:hover:duration-300 before:hover:ease-in before:transition-all before:ease-out before:duration-300'

  return (
    <div className='w-full flex justify-between items-center py-6 px-4 xl:p-6 box-border max-w-[1200px] sticky xl:mx-auto z-30 top-0 bg-white'>
      <img src="/logo.png" alt="logo" width={60} />
      <div className={state === "active" ? svg_base_class + "active" : svg_base_class } onClick={() => activeController()}>
        <svg viewBox='0 -10 100 100' className='w-[30px]' fill="none">
          <path d="m 20 20 h 60 " className="ham-path-1"></path>
          <path d="m 20 40 h 60 " className="ham-path-2"></path>
          <path d="m 20 60 h 60 " className="ham-path-3"></path>
        </svg>
      </div>
      <div className='hidden xl:flex gap-x-16 box-border'>
          <Link to="/" className={`font-semibold cursor pointer relative text-lavender-400 text-lg ${borderLink}`}>Home</Link>
          <Link to="/about" className={`font-semibold cursor pointer relative text-lavender-400 text-lg ${borderLink}`}>About</Link>
          <Link to="/projects" className={`font-semibold cursor pointer relative text-lavender-400 text-lg ${borderLink}`}>Projects</Link>
      </div>
    </div>
  )
}

export default Navbar