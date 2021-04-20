import React from 'react';
import WithUs from '../WithUs/WithUs';
import ClientFeedback from '../ClientFeedback/ClientFeedback';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Works from '../Works/Works';
import Support from '../Support/Support';

const Home = () => {
    return (
        <div>
            <Header />
            <Services />
            <Works />
            <ClientFeedback />
            <WithUs/>
            <Support/>
            <Footer />
        </div>
    );
};

export default Home;


