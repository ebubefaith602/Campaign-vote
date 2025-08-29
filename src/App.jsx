import React from "react";
import Bannar from './component/Bannar'
import Sponsor from './component/Sponsor'
import Candidate from './component/Candidate'
import Support from './component/Support '
import Vote from './component/Vote'

import Footer from "./component/Footer";

const App = () => {
  return (
    <div>
     <Bannar/>
<Candidate/>
<Vote/>
<Support/>
<Sponsor/>
      <Footer />
    </div>
  );
};

export default App;
