
import React, { useState, useEffect } from "react";
import moment from 'moment'
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

  const finalData = mediumData.slice(0, 4);


  return (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div className="absolute z-[0] w-[60%] h-[60%] -left-[50%] rounded-full blue__gradient" />     
    {isLoading && <p className={`${styles.heading2}`}>Fetching data from Medium!</p>}
      <h2 className={`${styles.heading2}`}>Medium Blog Posts:</h2>
      <section className={`${styles.padding} flex flex-wrap sm:justify-start justify-center w-full relative z-[1] feedback-container`}>
        {finalData.map(article => (
            <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
            <div className='flex flex-col ml-4 mr6'>
                <img src={article.thumbnail} alt="img" className="w-[50px] h-[50px] rounded-full mb-4" />
                    <div className='font-poppins font-semibold text-[20px] leading-[32px] text-white'>
                        <a href={article.link}>{article.title}</a>
                    </div>
                    <p className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite'>Published:{" "}
                        {moment(article.pubDate).format("dddd, MMMM Do YYYY")}
                    </p>
            </div>
          </div>
        ))}
        </section>

    </section>
  );
};

export default Blog;

