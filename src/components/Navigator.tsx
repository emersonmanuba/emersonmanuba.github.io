
function Navigator() {
 
    return (
      <>
        <nav className="bg-gray-800 p-4 z-40">
          <div className="container mx-auto flex justify-between items-center">
            {/* Logo on the left side */}
            <div className="text-white text-xl font-bold">
              <a href="/">Logo</a>
            </div>

            {/* Buttons on the right side */}
            <div className="space-x-4">
              <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                Button 1
              </a>
              <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                Button 2
              </a>
              <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                Button 3
              </a>
              <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                Button 4
              </a>
            </div>
          </div>
        </nav>

        {/*<nav className="nav_bar p-6 z-10 overflow-auto">
            Navigator Bar 
            <div className="buttons right-0">
            <button className="p-2 bg-slate-500 hover:bg-slate-700 align-top"> about me! </button>
            <button className="p-2 bg-slate-500 hover:bg-slate-700 align-super"> Contact me! </button>
            </div>
            
        </nav>*/}
      </>
    )
  }
  
  export default Navigator