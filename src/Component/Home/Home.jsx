import Banner from "./Banner";
import mar from "../../assets/mar.png";
import Banner2 from "../../assets/banner2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Marquee from "react-fast-marquee";
import AOS from "aos";
import website from "../../../public/website.json";
import "aos/dist/aos.css";

import Rating from "@mui/material/Rating";

import "swiper/css";
import useData from "../Hooks/useData";
import Cards from "../Shared/Cards";
import useReview from "../Hooks/useReview";
import Stat from "./Stat";

import usePremium from "../Hooks/usePremium";
import { useEffect } from "react";
import { useState } from "react";
import Lottie from "lottie-react";

const Home = () => {
  const [male, setMale] = useState();
  const [female, setFemale] = useState();
  const [items] = useData();
  useEffect(() => {
    const male = items.filter((item) => {
      return item.biodataType === "Male";
    });
    const female = items.filter((item) => {
      return item.biodataType === "Female";
    });
    setFemale(female);
    setMale(male);
  }, [items]);

  const [premiumData] = usePremium();

  const [reviews] = useReview();
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Banner></Banner>
      <Stat male={male} premiumData={premiumData} female={female}></Stat>

      <div className=" mt-10">
        <h1 className="text-4xl text-center max-w-7xl mx-auto font-bold text-[#ff3366]">
          Elite Connections: Premium Member Profiles
        </h1>
        <p className="text-center text-xl py-4 max-w-7xl mx-auto">
          Embark on a refined journey towards matrimony with our exclusive
          Premium Biodatas. Handpicked from a pool of exceptional individuals,
          these profiles showcase the epitome of commitment, compatibility, and
          genuine intent for a lifelong union. Our premium members represent a
          community of individuals who value the sanctity of marriage and are
          dedicated to finding their perfect match. Elevate your matrimony
          experience with these meticulously curated profiles, where quality
          meets compatibility, and love stories are crafted with precision.
          Explore the epitome of matrimonial excellence in our Premium Biodatas
          section.
        </p>

        <div className="grid max-w-7xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-4">
          {premiumData.map((item) => (
            <Cards item={item} key={item._id}></Cards>
          ))}
        </div>

        <div className="max-w-7xl mx-auto mt-16  text-gray-500 ">
          <h1 className=" text-4xl text-center  font-bold text-[#ff3366]">
            {" "}
            Discover the Perfect Match with Ease and Confidence
          </h1>
          <p className=" py-4 text-xl text-center">
            Welcome to our matrimonial website, your ultimate destination for
            finding a life partner. In the bustling world of online matrimony,
            our platform stands out by offering a seamless, user-friendly, and
            ad-free experience. We understand the importance of finding a
            compatible partner and aim to make this journey as smooth and
            enjoyable as possible. Here's why you should choose us and how our
            website can solve real-world problems efficiently.
          </p>
          <div className=" flex  gap-4 w-full">
            <aside classname="w-[10%] flex gap-4  ">
              <section className="">
                <h1 className=" text-2xl py-2  font-bold text-[#ff3366]">
                  Why Choose Our Matrimonial Platform ?
                </h1>
                <ul classname=" list-decimal py-1">
                  Our website is designed with you in mind, providing a clean,
                  intuitive, and engaging interface. Unlike other platforms, we
                  ensure a clutter-free experience without intrusive ads or
                  overwhelming data. Our goal is to make your search for a life
                  partner as straightforward and enjoyable as possible. Here's
                  what sets us apart:
                  <li>
                    1. Eye-catching Design: A visually appealing website that
                    keeps you engaged.
                  </li>
                  <li>
                    2. User-friendly Interface: Easy to navigate, making your
                    search hassle-free.
                  </li>
                  <li>
                    3. Privacy and Security: Your data is safe with us, giving
                    you peace of mind.
                  </li>
                </ul>
              </section>
              <section>
                {" "}
                <h1 className=" text-2xl py-2  font-bold text-[#ff3366]">
                  Solving Real-World Matrimonial Challenges{" "}
                </h1>
                <ul classname=" list-disc py-1">
                  In a world full of choices, finding the right partner can be
                  daunting. Our website addresses this challenge by offering a
                  streamlined and effective platform. It's better than other
                  websites because it's clean, free from excessive ads, and
                  focuses on providing the best user experience. Here's how we
                  solve your problems:
                  <li>
                    1. Focused Search: Efficient matching algorithms to find
                    compatible partners.
                  </li>
                  <li>
                    2. Ad-Free Experience: Enjoy a clean, distraction-free
                    environment.
                  </li>
                  <li>
                    3. Data Privacy: No sharing of your personal information
                    without consent.
                  </li>
                </ul>
              </section>
              <section>
                {" "}
                <h1 className=" text-2xl py-2  font-bold text-[#ff3366]">
                  {" "}
                  How to Use This Website{" "}
                </h1>
                <ol classname=" list-disc py-1">
                  Using our matrimonial website is simple and straightforward.
                  Here’s a step-by-step guide to help you get started and make
                  the most of our features:
                  <li>
                    {" "}
                    Visit the Website: Start by exploring some profiles.
                    However, to access full details, you need to register and
                    log in.
                  </li>
                  <li>
                    {" "}
                    Registration and Login: Create an account to see detailed
                    biodatas. Without logging in, you can only view limited
                    information.
                  </li>
                  <li>
                    {" "}
                    Premium Access: Upgrade to a premium membership to view
                    contact information. Purchase individual contact info for
                    each biodata you're interested in.
                  </li>
                  <p className="font-medium py-1">Dashboard Features:</p>
                  <li>
                    Contact Requests: View requested contact details in the
                    'Contact Request' section.
                  </li>
                  <li>
                    Favorite Biodatas: Bookmark your favorite profiles, which
                    can be accessed in the 'Favorite Biodata' section.
                  </li>
                  <li>
                    Manage Biodata: Upload, view, edit, and delete your biodata
                    from the dashboard.
                  </li>
                  <li>
                    Success Stories: After finding a partner, share your success
                    story and review to be featured on the homepage.
                  </li>
                  <p className="font-medium py-1">Admin Functions:</p>
                  <li>
                    Approve Premium Memberships: Admins can approve premium
                    requests after payment verification.
                  </li>
                  <li>
                    Manage Users: Admins can manage and delete users as needed.
                  </li>
                  By following these steps, you can efficiently navigate our
                  website and maximize your chances of finding the perfect
                  match.
                </ol>
              </section>
            </aside>
            <aside className="w-[60%] ">
              <Lottie animationData={website} loop={true} />;
            </aside>
          </div>
        </div>
        <div className="my-20">
          <img src={Banner2} alt="" />
        </div>
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mt-20  mb-16 text-[#ff3366]  text-center">
            Voices of Love: User Reviews Unveiled
          </h1>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {reviews.map((review) => {
              const {
                coupleImageLink,
                gender,
                marriageDate,
                reviewStar,
                successStoryText,
              } = review;
              return (
                <SwiperSlide key={review._id}>
                  <Card
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-easing="ease-in-sine"
                    sx={{ maxWidth: 345 }}
                  >
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
                          <span className="text-[#ff3366] font-semibold">
                            {" "}
                            Our story :{" "}
                          </span>
                          {successStoryText}
                        </Typography>
                        <div className="my-5 text-center">
                          <Rating
                            name="read-only"
                            value={reviewStar}
                            readOnly
                          />
                        </div>
                        <div className="my-5 text-slate-600 ">
                          Marriage Date:
                          <span className="text-[#ff3366] text-center font-semibold">
                            {" "}
                            {marriageDate}{" "}
                          </span>
                        </div>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="my-20 max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold   text-[#ff3366]  text-center">
            Dating Tips & Advice
          </h1>
          <p className="text-center text-xl py-4">
            Here are some of our latest dating articles written by our staff. We
            hope these tips will help you get more confident and find what you
            are looking for on GO. 5 Reasons You’re Still Lonely Even Though You
            Use Dating Apps April 24, 2019 Can You Text Your Way into a
            Successful Relationship? May 12, 2019 9 Awesome Things Men Can Do to
            Score Points With Women May 14, 2019
          </p>
          <Marquee className="max-w-7xl mx-auto">
            <img src={mar} alt="" />
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Home;
