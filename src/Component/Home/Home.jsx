import Banner from "./Banner";

import useData from "../Hooks/useData";
import Card from "../Shared/Card";
import { useState } from "react";


const Home = () => {
    const [items, loading, refetch, premiumData] = useData()
refetch()

console.log(premiumData );




    return (
        <div>
            <Banner></Banner>
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl text-center font-bold text-[#ff3366]">Elite Connections: Premium Member Profiles</h1>
                <p className="text-center py-4">Embark on a refined journey towards matrimony with our exclusive Premium Biodatas. Handpicked from a pool of exceptional individuals, these profiles showcase the epitome of commitment, compatibility, and genuine intent for a lifelong union. Our premium members represent a community of individuals who value the sanctity of marriage and are dedicated to finding their perfect match. Elevate your matrimony experience with these meticulously curated profiles, where quality meets compatibility, and love stories are crafted with precision. Explore the epitome of matrimonial excellence in our Premium Biodatas section.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-4">

                    {
                        premiumData.map(item =>


                            <Card item={item} key={item._id}></Card>)

                    }</div>
            </div>
        </div>
    );
};

export default Home;