import Footer from './Footer'
import Navbar from './Navbar'

const MainLayout = ({ children }) => {
  return (
    <div className="bg-[#101322] w-full h-screen relative">
      <Navbar />
      <div className="w-full flex flex-1 h-full flex-col pt-24 pb-10 items-center justify-center">
        {children}
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default MainLayout
