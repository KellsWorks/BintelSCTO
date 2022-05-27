import CarouselView from '../components/CarouselView'
import Packages from '../components/Packages'
import Footer from '../layouts/Footer'
import Header from '../layouts/Header'

export default function Home() {
  return (
    <div>
        <Header/>
        <CarouselView/>
        <Packages/>
        <Footer/>
    </div>
  )
}
