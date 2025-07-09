import { Link } from 'react-router-dom'

const MobileNavigation = () => {
    return (
        <div className="md:hidden fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600">
            <div className="grid h-full max-w-lg grid-cols-4  mx-auto">
                <Link to="/" title="Home" className="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <svg className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                    </svg>
                    <span className="sr-only">Home</span>
                </Link>

                <Link to="/usage" title="Usage" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <svg className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-2H6.5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15Z" />
                        <path d="M8 6h10v2H8V6Zm0 4h10v2H8v-2Zm0 4h7v2H8v-2Z" />
                    </svg>
                    <span className="sr-only">Usage</span>
                </Link>


                <Link to="/animations" title="Animations" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <svg className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2" />
                    </svg>
                    <span className="sr-only">Animations</span>
                </Link>

                <Link to="/playground" title="Playground" className="inline-flex items-center justify-center m-auto w-12 h-12 font-medium bg-blue-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
                    <svg className="w-6 h-6 text-white" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.5 5.5v9l8-4.5-8-4.5Z" />
                    </svg>
                    <span className="sr-only">Playground</span>
                </Link>
            </div>
        </div>
    )
}

export default MobileNavigation