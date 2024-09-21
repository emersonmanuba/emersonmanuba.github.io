
function Navigator() {
 
    return (
      <>
        <nav className="bg-gray-800 fixed top-0 w-full p-4 z-50">
          <div className="container mx-auto flex justify-between items-center">
            {/* Logo on the left side */}
            <div className="text-white text-xl font-bold">
              <a href="/"><img src="images/white-hacker-male.svg" alt="male" className="size-8 hover:bg-gray-300 rounded p-1"/></a>
            </div>

            {/* Buttons on the right side */}
            <div className="space-x-2">
              {/*<a href="#" className="text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-300 hover:text-blue-900">
                Home
              </a>*/}
              <a href="#" className="text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-300 hover:text-blue-900">
                About
              </a>
              <a href="#" className="text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-300 hover:text-blue-900">
                Career
              </a>
              <a href="#" className="text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-300 hover:text-blue-900">
                Contact
              </a>
            </div>
          </div>
        </nav>
      </>
    )
  }
  
  export default Navigator