import React from "react";
import Banner from "./Banner";
import Section from "./Section";
import jsonData from "./data.json";
import Card from "./Card";
import "./App.css"
// Import the provided JSON data

const App = () => {
  return (
    <div className="dashboard">
      <h1>Assignment</h1>
      <div className="banners">
        {jsonData.bannerData.map((banner) => (
          <Banner key={banner.id} bannerData={banner} />
        ))}
      </div>
      <div className="sections">
        {jsonData.section.map((sectionData) => (
          <Section
            key={sectionData.id}
            sectionData={sectionData}

          />

        ))}

      </div>


    </div>
  );
};

export default App;