import Carousel from 'react-bootstrap/Carousel'
const Slider = () => {
    return ( 
        <div>
      <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../images/slide1.png"
      alt="First slide"
      height = "400px"
      width = "200px"  
        />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../images/slide2.jpg"
      alt="Second slide"
      height = "400px" 
      width = "200px"  
      
    />

   
  </Carousel.Item>
  <Carousel.Item>
    <img 

      className="d-block w-100"
      src="../images/main2.jpg"
      alt="Third slide"
      height = "400px" 
      width = "200px"  
    />

   
  </Carousel.Item>
</Carousel>
      </div>
     );
}
 
export default Slider ;
