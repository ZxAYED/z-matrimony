import React from 'react';
import Headings from './Headings';
import BiodataForm from './Inside/BiodataForm';


const EditBioData = () => {
    return (
        <div>
            <Headings heading="Manage Your Biodata" subheading={"Take control of your profile information. In this section, you can easily upload or edit your biodata to ensure that your profile reflects your true self. Whether you have new details to add or want to update existing information, managing your biodata is simple and straightforward. Your profile is a key part of your journey, and keeping it up-to-date ensures that you make meaningful connections on your path to finding a life partner"}></Headings>
           <BiodataForm></BiodataForm>
        </div>

    );
};

export default EditBioData;