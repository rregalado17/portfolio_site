
import React, { useState, useEffect } from "react";
// import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Row, Col } from "reactstrap";
// var moment = require("moment");
import styles from "../style";

const Blog = () => {
  const [mediumData, setMediumData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@rregalado17`)
      .then(res => res.json())
      .then(response => {
        setMediumData(response.items);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, []);

  const finalData = mediumData.slice(0, 6);

  return (
    <div id="blog" className="container mt-3">
      <h3 className="ui horizontal header divider mt-5">
        Blog
      </h3>
      
      {isLoading && <p>Fetching data from Medium!</p>}
      <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} flex flex-wrap sm:justify-start justify-center w-full relative z-[1] feedback-container bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <h2 className={`${styles.heading2}`}>Techstack</h2>
        
        {finalData.map(article => (
        <div md="4" className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
            

<div className='flex-1 flex flex-col'>

                <img top width="100%" src={article.thumbnail} alt="img" />
                  <div>
                    <a href={article.link}>{article.title}</a>
                    </div>
                  <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    Published:{" "}
                    {/* {moment(article.pubDate).format("dddd, MMMM Do YYYY")} */}
                    (article.pubDate).format("dddd, MMMM Do YYYY")

                  </p>

            </div>
          </div>
        ))}
        </section>
    </div>
  );
};

export default Blog;