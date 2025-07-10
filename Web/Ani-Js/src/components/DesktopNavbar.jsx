import { Link } from "react-router-dom"

const DesktopNavbar = () => {
    return (
        <nav className={`fixed w-full bg-black/80 backdrop-blur-md z-50 transition-all duration-300 hidden md:block tw-slide-down`}>
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="text-blue-400 text-2xl font-bold tw-pulse">Ani-Js</Link>
                <div className="flex space-x-8">
                    <Link to="/" className="text-blue-200 hover:text-blue-400 transition tw-hoverenlarge">Home</Link>
                    <Link to="/usage" className="text-blue-200 hover:text-blue-400 transition tw-hoverenlarge">Usage</Link>
                    <Link to="/animations" className="text-blue-200 hover:text-blue-400 transition tw-hoverenlarge">Animations</Link>
                    <Link to="/playground" className="text-blue-200 hover:text-blue-400 transition tw-hoverenlarge">Playground</Link>
                </div>
            </div>
        </nav>
    )
}

export default DesktopNavbar