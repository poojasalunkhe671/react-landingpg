import React from 'react';
import Header from './Component/Header';
import Home from './Component/Home';
 import  Introduction from './Component/Introduction'
 import TargetAudience from './Component/TargetAudience'
 import Immerse from './Component/Immerse';
  import Features from './Component/Feature';
 import UserBenefits from './Component/UserBenefits'
 import ReadyToTransform from './Component/Ready'
import Footer from './Component/Footer'

const App = () => {
    return (
        <div>
            <Header />
            <Home />
            <Introduction/>
            <TargetAudience />
  <Immerse />
          <Features />
            <UserBenefits />
              <ReadyToTransform />
              <Footer />    
        </div>
    );
}

export default App;
