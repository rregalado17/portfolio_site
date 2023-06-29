import React, { useState, useEffect } from 'react';

const GitHubLanguages = ({ username }) => {
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        let page = 1;
        let repositories = [];
        let response;

        do {
          response = await fetch(`https://api.github.com/users/rregalado17/repos?page=${page}&per_page=100`);
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
    <div>
      <h2>Languages used in {username}'s repositories:</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {languages.map(({ language, count }, index) => (
            <li key={index}>
              {language} - {count} repositories
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GitHubLanguages;
