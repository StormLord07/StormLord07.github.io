document.addEventListener('DOMContentLoaded', function() {
    // Fetching the repositories from GitHub
    fetch('https://api.github.com/users/StormLord07/repos')
        .then(response => response.json())
        .then(data => {
             const sortedRepos = data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

            const projectContainer = document.getElementById('github-projects');

	    function generateSampleTags(projectTagsContainer, numberOfTags) {
        const sampleTagNames = ['React', 'JavaScript', 'CSS', 'NodeJS', 'TypeScript', 'GraphQL', 'D3', 'Sass', 'Webpack', 'Vue'];

        for(let i = 0; i < numberOfTags; i++) {
            const tag = document.createElement('span');
            tag.textContent = sampleTagNames[Math.floor(Math.random() * sampleTagNames.length)];
            projectTagsContainer.appendChild(tag);
        }
    }

            sortedRepos.forEach(repo => {
                const projectBox = document.createElement('div');
                projectBox.classList.add('project-box');

                const projectImage = document.createElement('img');
                projectImage.src = 'neiroset-dlya-razrabotchikov-C.png'; // Or you could use repo-specific data if available

                const projectContent = document.createElement('div');
                projectContent.classList.add('project-content');

                const projectTitle = document.createElement('h3');
                projectTitle.textContent = repo.name;

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
