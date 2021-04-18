import React from 'react';
import ClientsFeedback from './ClientsFeedback/ClientsFeedback';
import HomeMain from './HomeMain/HomeMain';
import ProjectForm from './ProjectForm/ProjectForm';
import Services from './Services/Services';
import Works from './Works/Works';
import WithUs from './WithUs/WithUs';
import Support from './Support/Support';


const Home = () => {
    return (
        <main>
            <HomeMain/>           
            {/* Our Services */}
            <Services/>
            {/* Our Works */}
            <Works/>
            {/* Clients Feedback */}
            <ClientsFeedback/>
            {/* Handle Project By Creating A Form */}
            <WithUs/>
             {/*People Connected With Us*/}
            <Support/>
            {/*Support Team  */}
            
            <ProjectForm/>
        </main>
    );
};

export default Home;