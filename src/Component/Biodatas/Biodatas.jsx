import React, { useEffect, useState } from 'react';
import useData from '../Hooks/useData';
import BioCard from './BioCard';
import Butoon from '../Shared/Butoon';

const Biodatas = () => {
    const [items,loading,refetch,premiumData,male,female]=useData()
    const [data,setData] =useState(items)
  
    const [sortBy, setSortBy] = useState(true);
    const [sortBy1, setSortBy1] = useState(true);
   

    const handleAge = () => {
      
        if (sortBy) {
           const data2 = [...items].sort((a, b) => a.age - b.age);
          setData(data2)
        } else if (!sortBy) {
            const data2= [...items].sort((a, b) => b.age - a.age);
            setData(data2)
        }
      
 
      };
    const handleDivision =()=>{
       
            if (sortBy1) {
                const data2 =[...data].sort((a, b) => a.presentDivision.localeCompare(b.presentDivision));
                setData(data2)
            } else if (!sortBy1) {
                const data2 = [...data].sort((a, b) => b.presentDivision.localeCompare(a.presentDivision));
                setData(data2)
            }
      
         
    }
 
    return (
        <div className='max-w-7xl mx-auto my-10  '>
           <h1 className="text-center text-4xl text-bold"></h1>
           <p className='py-2 text-lg'></p>

        <div className=' flex flex-col md:flex-row  '>
           
          <section className='w-[20%]'>
           
            <div>
            <h1 className=' font-semibold' > Sort By Age :</h1>
            <div className='divider mx-left w-1/2'></div>
            {
                sortBy?<button onClick={()=>handleAge(setSortBy(!sortBy))} ><Butoon heading=" ASC TO DESC"></Butoon></button>
                :<button onClick={()=>handleAge(setSortBy(!sortBy))} ><Butoon heading=" DESC TO ASC"></Butoon></button>
                
            }
            </div>
            <div className='mt-0 lg:mt-8'>
            <h1 className=' font-semibold' > Sort By Division:</h1>
            <div className='divider mx-left w-1/2'></div>
            {
                sortBy1?<button onClick={()=>handleDivision(setSortBy1(!sortBy1))} ><Butoon heading=" ASC TO DESC"></Butoon></button>
                :<button onClick={()=>handleAge(setSortBy1(!sortBy1))} ><Butoon heading=" DESC TO ASC"></Butoon></button>
                
            }
            </div>
         </section>
          <section className='w-[80%] grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3'>
            {
        data.length ?data.map(item=><BioCard key={item._id} item={item}></BioCard>) :items.map(item=><BioCard key={item._id} item={item}></BioCard>)
            
            
         
            }
          </section>
        </div>
        </div>
    );
};

export default Biodatas;