import Content from "./components/Content"
import Header from "./components/Header"
import Navigator from "./components/Navigator"

function App() {
 
  return (
    <>
      <Header />
      <Navigator />
      {/* <Content /> */}
      <div className="">
          <h1 className=" content p-4 bg-rose-200 text-black "> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda corporis corrupti doloremque inventore, expedita rem maiores ducimus eaque sed rerum eum reiciendis dolor hic facilis nulla modi animi? Dignissimos, dolores!
          </h1>
      </div>
    </>
  )
}

export default App
