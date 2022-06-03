import {Carousel} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomeProduct } from "./HomeProduct";

export const Home = () => {

    return(
        <div className="carousel">
            <Carousel variant="dark">

  <Carousel.Item className="Citem">
    <img
      className="d-block w-100"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwTlWeXAWTXseR3RybZNqB188e1dsKkWXC3A&usqp=CAU"
      alt="First slide"
    />
    <Carousel.Caption className="Ccaption">
     
    </Carousel.Caption>
  </Carousel.Item>


  
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQcsKIwHFy8QngfDaLrXDhIoFhYkslpfBTcg&usqp=CAU"
      alt="Third slide"
    />
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>

 
</Carousel>

 <HomeProduct />
 
        
        
        
        
        </div>
    )
}