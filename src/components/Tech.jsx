import React, { useState, useEffect } from "react";
import styles from "../style";

const Tech = () => {
    const [gitData, setGitData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      fetch(`https://api.github.com/users/rregalado17/repos`)
        .then(res => res.json())
        .then(response => {
          setGitData(response);
          setIsLoading(false);
        })
        .catch(err => console.log(err));
    }, []);

    const languages = gitData.map(({language}) => language)
    // console.log(languages)
    
  
    return (
      <div id="blog" className="container mt-3">
        {/* {isLoading && <p>Fetching data from Medium!</p>}
       {console.log(finalData)} */}
      </div>
    );
  };


export default Tech