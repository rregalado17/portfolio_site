
import React, { useState, useEffect } from "react";
// import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Row, Col } from "reactstrap";
// var moment = require("moment");

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
        <p>Blog</p>
      </h3>
      {isLoading && <p>Fetching data from Medium!</p>}

        {finalData.map(article => (
          <div md="4" className="mb-3" key={article.guid}>
            <div>
                <img top width="100%" src={article.thumbnail} alt="img" />
                  <div>
                    <a href={article.link}>{article.title}</a>
                    </div>
       
                  <p>
                    Published:{" "}
                    (article.pubDate).format("dddd, MMMM Do YYYY")d
                  </p>

            </div>
          </div>
        ))}
    </div>
  );
};

export default Blog;