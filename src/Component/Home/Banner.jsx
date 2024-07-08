import img1 from '../../assets/m4.jpg'
import img2 from '../../assets/m6.jpg'
import img3 from '../../assets/m2.jpg'
import img4 from '../../assets/m1.jpg'
import img5 from '../../assets/m3.jpg'
import { useState, useEffect } from 'react';


const Banner = () => {




        const images = [
            img1,
            img2,
            img3,
            img4,
            img5,
        ];
        
        

          const [currentIndex, setCurrentIndex] = useState(0);
        
        
          useEffect(() => {
            const interval = setInterval(() => {
              setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
            }, 3000); 
        
        
            return () => clearInterval(interval);
          }, []);
             return (
               <div>
               <div className="relative w-full h-[80vh]  mb-10 ">
                 {images.map((image, index) => (
                   <div
                     key={index}
                     className={`absolute w-full h-full transition-opacity  duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                       }`}
                   >
                     <img
                       src={image}
                       alt={`Slide ${index}`}
                       className="w-full h-full object-fit"
                     />
                    
                   </div>
                 ))}
                 </div>
               </div>
             );
           };
        
        
        
        

        
        


export default Banner;