
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function CarouselView() {
  
  return (
    <div className='max-w-7xl mx-auto bg-sky-700 shadow'>
      <Carousel autoPlay={true} showIndicators={true} showStatus={true}>
        <div>
            <img src="https://d1y8sb8igg2f8e.cloudfront.net/images/12287513903_a725b73908_o.2e16d0ba.fill-1200x630.jpg" />
            <p className="legend text-2xl">Enroll to our training programs</p>
        </div>
        <div>
            <img src="https://images.theconversation.com/files/139951/original/image-20160930-6248-1p8gjs6.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop" />
            <p className="legend text-2xl">Check out all the packages to get started</p>
        </div>
        <div>
            <img src="https://archive.discoversociety.org/wp-content/uploads/2013/11/Blackness2.jpg" />
            <p className="legend text-2xl">Have any questions? Contact us now</p>
        </div>
      </Carousel>
    </div>
  )
}
