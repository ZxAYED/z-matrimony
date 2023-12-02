import Banner from "./Banner";
import mar from "../../assets/mar.png";
import Banner2 from "../../assets/banner2.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Marquee from "react-fast-marquee";


import Rating from '@mui/material/Rating';


import 'swiper/css'
import useData from "../Hooks/useData";
import Cards from "../Shared/Cards";
import useReview from "../Hooks/useReview";
import Stat from "./Stat";


import usePremium from "../Hooks/usePremium";
import { useEffect } from "react";
import { useState } from "react";



const Home = () => {
const [male,setMale]=useState()
const[female,setFemale]=useState()
    const[ items ] = useData()
  useEffect(()=>{
    const male =items.filter(item=>{
     
        return item.biodataType === 'Male'
         
     })
     const female =items.filter(item=>{
     
        return item.biodataType === 'Female'
         
     })
     setFemale(female)
     setMale(male);

  },[items])

    const [premiumData]=usePremium()
  

    const [reviews,  ] = useReview()
 



    return (
     
        <div>
               <Banner></Banner>
             <Stat   male={male}   premiumData={premiumData} female={female}></Stat> 
            
            <div className="max-w-7xl mx-auto mt-10">
                <h1 className="text-4xl text-center font-bold text-[#ff3366]">Elite Connections: Premium Member Profiles</h1>
                <p className="text-center text-xl py-4">Embark on a refined journey towards matrimony with our exclusive Premium Biodatas. Handpicked from a pool of exceptional individuals, these profiles showcase the epitome of commitment, compatibility, and genuine intent for a lifelong union. Our premium members represent a community of individuals who value the sanctity of marriage and are dedicated to finding their perfect match. Elevate your matrimony experience with these meticulously curated profiles, where quality meets compatibility, and love stories are crafted with precision. Explore the epitome of matrimonial excellence in our Premium Biodatas section.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-4">

                    {
                        premiumData.map(item =>


                            <Cards item={item} key={item._id}></Cards>)

                    }</div>
                <div className="my-20">
                    <img src={Banner2} alt="" />
                </div>

                <div>
                    <h1 className="text-4xl font-bold mt-20  mb-16 text-[#ff3366]  text-center">Voices of Love: User Reviews Unveiled</h1>
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={3}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >{
                            reviews.map(review => {

                                const { coupleImageLink, gender, marriageDate, reviewStar, successStoryText } = review
                                return <SwiperSlide key={review._id} >


                                    <Card sx={{ maxWidth: 345 }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                className="h-[30vh]"
                                                image={coupleImageLink}
                                                alt={successStoryText}
                                            />
                                            <CardContent>
                                                <div className="text-xl text-center font-bold py-5 text-[#ff3366]  ">
                                                    Gender: {gender}
                                                </div>
                                                <Typography variant="body2" color="text.secondary">
                                                    <span className="text-[#ff3366] font-semibold"> Our story : </span>
                                                    {successStoryText}
                                                </Typography>
                                                <div className="my-5 text-center">

                                                    <Rating name="read-only" value={reviewStar} readOnly />
                                                </div>
                                                <div className="my-5 text-slate-600 " >
                                                    Marriage Date:
                                                    <span className="text-[#ff3366] text-center font-semibold"> {marriageDate}  </span>

                                                </div>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card></SwiperSlide>
                            })
                        }



                    </Swiper>

                </div>
                <div className="my-20">
                    <h1 className="text-4xl font-bold mb-8  text-[#ff3366]  text-center">Dating Tips & Advice</h1>
                    <p className="text-center text-xl py-4">Here are some of our latest dating articles written by our staff. We hope these tips will help you get more confident and find what you are looking for on GO.

5 Reasons You’re Still Lonely Even Though You Use Dating Apps

April 24, 2019
Can You Text Your Way into a Successful Relationship?

May 12, 2019
9 Awesome Things Men Can Do to Score Points With Women

May 14, 2019
</p>
                    <Marquee className="">
                        <img src={mar} alt="" />
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default Home;