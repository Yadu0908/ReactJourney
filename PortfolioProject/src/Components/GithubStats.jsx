import React, { useState, useEffect } from "react";

function GithubStats() {
  const [userData, setUserData] = useState({
    name: "Yadu0908",
    login: "Yadu0908",
    avatar_url: "https://avatars.githubusercontent.com/u/Yadu0908",
    html_url: "https://github.com/Yadu0908",
    public_repos: 28
  });

  const [topRepos, setTopRepos] = useState([
    {
      name: "Repository 1",
      description: "Description for Repository 1",
      stargazers_count: 10,
      forks_count: 5,
      html_url: "https://github.com/Yadu0908/repository-1"
    },
    {
      name: "Repository 2",
      description: "Description for Repository 2",
      stargazers_count: 8,
      forks_count: 3,
      html_url: "https://github.com/Yadu0908/repository-2"
    },
    {
      name: "Repository 3",
      description: "Description for Repository 3",
      stargazers_count: 6,
      forks_count: 2,
      html_url: "https://github.com/Yadu0908/repository-3"
    }
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await fetch("https://api.github.com/users/Yadu0908");
        const userData = await userResponse.json();
        setUserData(userData);

        const reposResponse = await fetch("https://api.github.com/users/Yadu0908/repos?sort=stars&order=desc&per_page=3");
        const reposData = await reposResponse.json();
        setTopRepos(reposData);
      } catch (error) {
        console.error("Failed to fetch latest data. Using offline data.", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div name="Stats" className="max-w-screen-2xl container mx-auto px-4 mb-2 mt-20 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full h-full bg-neutral-900 mt-8 p-4 rounded-lg">
        <div className="flex flex-col items-center justify-center p-4 bg-neutral-800 rounded-lg">
          <img src={userData.avatar_url} alt={userData.name} className="w-16 h-16 rounded-full mb-2" />
          <p className="text-lg font-semibold">{userData.name}</p>
          <p className="text-sm text-gray-400">@{userData.login}</p>
          <p className="text-sm text-gray-400 mt-2">Total Repos: {userData.public_repos}</p>
        </div>
        <div className="col-span-2 flex flex-col p-4 bg-neutral-800 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Top Repositories</h2>
          <ul className="space-y-2">
            {topRepos.map((repo, index) => (
              <li key={index} className="border-b border-gray-700 pb-2">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                  {repo.name}
                </a>
                <p className="text-sm text-gray-400">{repo.description}</p>
                <div className="flex space-x-4 mt-1">
                  <span className="text-xs text-gray-500">⭐ {repo.stargazers_count}</span>
                  <span className="text-xs text-gray-500">🍴 {repo.forks_count}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3 flex justify-center p-4 bg-neutral-800 rounded-lg">
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
            Visit GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
}

export default GithubStats;