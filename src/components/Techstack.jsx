import React, { useState, useEffect } from 'react';
import Tech from './Tech';
import styles from '../style';

const Techstack = ({ username }) => {
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        let page = 1;
        let repositories = [];
        let response;
      do {
          response = await fetch(`https://api.github.com/users/${username}/repos?page=${page}&per_page=100`);
          const data = await response.json();
          repositories = repositories.concat(data);
          page++;
        } while (response.headers.get('Link') && response.headers.get('Link').includes('rel="next"'));
      const languageMap = {};

      repositories.forEach((repo) => {
        if (repo.language) {
        if (languageMap.hasOwnProperty(repo.language)) {
          languageMap[repo.language]++;
            } else {
          languageMap[repo.language] = 1;
          }
        }
      });

      const languageList = Object.entries(languageMap).map(([language, count]) => ({
        language,
        count
      }));

      setLanguages(languageList);
      setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchLanguages();
  }, [username]);

  return (
    <section id="#techstack" className={`${styles.padding} flex-col relative`}>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[40%] rounded-full blue__gradient" />

    <div>
      <h1 className={`${styles.heading2}`}>TechStack</h1><br/>
      <h1 className={`{styles.flexCenter} font-poppins font-normal text-[18px] leading-[32px] text-white my-10}`}>Here are the languages I have experience with. This information is being pulled directly from my GitHub repos utilized across all projects.</h1>
      <section >
      {loading ? (
        <p className={`${styles.heading2} ${styles.flexCenter}`}>Loading...</p>
      ) : (
        <p className="flex justify-center"><Tech languages={languages} /></p>
      )}
      </section>
    </div>
</section>
  );
};

export default Techstack;