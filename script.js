document.addEventListener('DOMContentLoaded', function () {
    // Fetching the repositories from GitHub
    fetch('https://api.github.com/users/StormLord07/repos')
        .then(response => response.json())
        .then(data => {
            const sortedRepos = data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

            const projectContainer = document.getElementById('github-projects');

            function fetchReadme(owner, repoName) {
                return fetch(`https://api.github.com/repos/${owner}/${repoName}/readme`, {
                    headers: {
                        'Accept': 'application/vnd.github.VERSION.html',
                    }
                })
                    .then(response => response.text());
            }

            function truncateText(content, maxLength) {
                if (content.length <= maxLength) {
                    return content;
                }
                return content.substr(0, maxLength) + '...';
            }

            function removeRepoNameAndChainImage(content, repoName) {
                const parser = new DOMParser();
                const doc = parser.parseFromString(content, 'text/html');

                // Remove h1 with repo name
                const repoNameHeader = doc.querySelector(`h1`);
                if (repoNameHeader && repoNameHeader.innerText.trim() === repoName) {
                    repoNameHeader.remove();
                }

                // Remove chain (anchor) images
                const anchorLinks = doc.querySelectorAll('a.anchor');
                anchorLinks.forEach(link => {
                    const chainImage = link.querySelector('img');
                    if (chainImage) {
                        link.remove();
                    }
                });

                return doc.body.innerHTML;
            }


            function generateSampleTags(projectTagsContainer, numberOfTags) {
                const sampleTagNames = ['React', 'JavaScript', 'CSS', 'NodeJS', 'TypeScript', 'GraphQL', 'D3', 'Sass', 'Webpack', 'Vue'];

                for (let i = 0; i < numberOfTags; i++) {
                    const tag = document.createElement('span');
                    tag.textContent = sampleTagNames[Math.floor(Math.random() * sampleTagNames.length)];
                    projectTagsContainer.appendChild(tag);
                }
            }

            sortedRepos.forEach(repo => {
                const projectBox = document.createElement('a');
                projectBox.classList.add('project-box');
                projectBox.href = repo.html_url; // Set the repository URL as href
                projectBox.target = "_blank"; // This makes the link open in a new tab

                const projectImage = document.createElement('img');
                projectImage.classList.add('project-image');
                projectImage.src = 'neiroset-dlya-razrabotchikov-C.png'; // Or you could use repo-specific data if available

                const projectContent = document.createElement('div');
                projectContent.classList.add('project-content');

                const projectTitle = document.createElement('h3');
                projectTitle.textContent = repo.name;

                fetchReadme('StormLord07', repo.name)
                    .then(content => {
                        const cleanedContent = removeRepoNameAndChainImage(content, repo.name);
                        const truncatedContent = truncateText(cleanedContent, 200); // Limit to 300 characters, adjust as needed
                        const projectDescription = document.createElement('div');
                        projectDescription.classList.add('project-description');
                        projectDescription.innerHTML = truncatedContent;
                        projectContent.appendChild(projectDescription);
                    });

                const projectTags = document.createElement('div');
                projectTags.classList.add('tags');
                generateSampleTags(projectTags, Math.floor(Math.random() * 8) + 20);

                // Sample tags using repo data
                const tagLanguage = document.createElement('span');
                tagLanguage.textContent = repo.language;

                projectTags.appendChild(tagLanguage);

                projectContent.appendChild(projectTitle);
                projectContent.appendChild(projectTags);

                projectBox.appendChild(projectImage);
                projectBox.appendChild(projectContent);

                projectContainer.appendChild(projectBox);
            });
        });
});
