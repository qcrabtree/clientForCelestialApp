import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Container, Col, Row} from 'reactstrap';





const CelestialCarousel = (props) => {
console.log(props.celestials)
return (
  <div className="planetName">
  <Container>
      <Row>
        <Col md="12">
    <Carousel showThumbs={true} autoplay>
      {
        props.celestials.map((celestial, id) => {
          return (
            <div key={id}>
              <data>{celestial.planetName}</data>
              <img src={celestial.image} />
              <div className="description">
              <p>{celestial.description}</p>
              </div>
              </div>
          )
        })
      }
    </Carousel>
    </Col>
    <Col>
    
    </Col>
      </Row>
    </Container>
  </div>
);
    }




export default CelestialCarousel;


















// import React, { Component } from 'react';
// import '../App.css';
// import Card from '../Card';
// import logo from '../assets/logo.svg';



//   nextProperty = (props) => {
//     const newIndex = this.state.property.index+1;
//     this.setState({
//       property: CelestialCreate.properties[newIndex]
//     })
//   }

//   prevProperty = () => {
//     const newIndex = this.state.property.index-1;
//     this.setState({
//       property: CelestialCreate.properties[newIndex]
//     })
//   }

//   render() {
//     const {properties, property} = this.state;
//     return (
//       <div className="App">

//         <button 
//           onClick={() => this.nextProperty()} 
//           disabled={property.index === data.properties.length-1}
//         >Next</button>
//         <button 
//           onClick={() => this.prevProperty()} 
//           disabled={property.index === 0}
//         >Prev</button>

//         <div className="page">
//             <section>
//                 <img src={logo} className="App-logo" alt="logo" />
//                 <h1>Celestial Carousel</h1>
//             </section>

//             <div className="col">
//               <div className={`cards-slider active-slide-${property.index}`}>
//                 <div className="cards-slider-wrapper" style={{
//                   'transform': `translateX(-${property.index*(100/properties.length)}%)`
//                 }}>
//                   {
//                     properties.map(property => <Card key={property._id} property={property} />)
//                   }
//                 </div>
//               </div>
//             </div>

//         </div>
//       </div>
//     );
//   }
// }

// export default CelestialCarousel;



// import React, {Component} from 'react';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';

// class CelestialCarousel extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       id: '',
//       planetName: '',
//       description: '',
//       habitable: '',
//       image: ''
//     };
//   }


// }

// CelestialCarousel = (props) => (
//   <Carousel autoPlay>
//     <div>
//       <img src= {this.props.image} />
//       <p className = "planetName" {this.props.planetName}></p>
//     </div>
//   </Carousel>
// )


// class CelestialCarousel extends Component {
//   render() {
//       return (
//           <Carousel>
//               <div>
//                   <img src="assets/1.jpeg" />
//                   <p className="legend">Legend 1</p>
//               </div>
//               <div>
//                   <img src="assets/2.jpeg" />
//                   <p className="legend">Legend 2</p>
//               </div>
//               <div>
//                   <img src="assets/3.jpeg" />
//                   <p className="legend">Legend 3</p>
//               </div>
//           </Carousel>
//       );
//   }
// };


// export default CelestialCarousel;


     



















// import React, { Component } from 'react';
// import { render } from 'react-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css"
// import { Carousel } from 'react-responsive-carousel';

// const CelestialCarousel = (props) => {
//     return (
//     <Carousel>
//         <div>
//             {props.celestials}
//         </div>
//         </Carousel>
//     )
// }

// render(<CelestialCarousel />, document.getElementById("root"));

// export default CelestialCarousel;

// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';

// const CelestialCarousel = (props) => {

//   return(
//     <div>
//   {

// props.celestials.map (celestial, id) => {
//     <Carousel autoPlay>
//     <div>
//       <img src={props.image} />
//       <p className = "planetName">{props.planetName}</p>
//     </div>
//     <div>
//       <img src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
//       <p className="legend">Legend 2</p>
//     </div>
//     <div>
//       <img src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
//       <p className="legend">Legend 3</p>
//     </div>
//     <div>
//       <img src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg" />
//       <p className="legend">Legend 4</p>
//     </div>
//     }
//   </Carousel>
// );
//     </div>
//   );
// }

// export default CelestialCarousel;

    





  // const CelestialCarousel = (props) => {

  //   return (
  //     <div>
  //       {
  //         props.celestials.map((celestial,id) => {
  //           return (
  //             <Carousel img src= {celestial.image} autoPlay>
  //             {celestial.planetName}
  //             </Carousel>
  //           )
  //         })
  //       }
  //     </div>
  //   )
  // }

    

//     props.celestials.map((celestial) => {

      
//       return (
//         <Carousel autoPlay>
//  <div>
//       <img src= {celestial.image} />
//       <p className="planetName"> {celestial.planetName}</p>
//     </div>
//     </Carousel>
//     )
//   }
// })
// //   }
//   export default CelestialCarousel; 


// import React from 'react'
// import AliceCarousel from 'react-alice-carousel'
// import 'react-alice-carousel/lib/alice-carousel.css'

// export default (props) => {
//   const handleOnDragStart = e => e.preventDefault()
//   return (
//     <AliceCarousel mouseDragEnabled >
//       <img src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" onDragStart={handleOnDragStart} className="yours-custom-class" />
//       <img src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" onDragStart={handleOnDragStart} className="yours-custom-class" />
//       <img src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" onDragStart={handleOnDragStart} className="yours-custom-class" />
//       <img src="/img4" onDragStart={handleOnDragStart} className="yours-custom-class" />
//       <img src="/img5" onDragStart={handleOnDragStart} className="yours-custom-class" />
//     </AliceCarousel>
//   )
// }




