import React from 'react';
import Headings from './Headings';

const MyContactReq = () => {
    return (
        <div className='max-w-5xl mx-auto'>
            <Headings heading={" My Contact Request"} subheading={"Explore a curated collection of biodatas you've saved in the 'View My Request' section. These profiles have captured your interest and are potential matches for your journey in finding a life partner. Easily manage and keep track of your bookmarked biodatas here. Your saved selections are a personalized gallery, carefully chosen to align with your preferences and aspirations. Dive into this collection to discover profiles that resonate with you, bringing you one step closer to the perfect connection."}></Headings>
          <div className="overflow-x-auto">
  <table className="table table-zebra">
  
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
    
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyContactReq;