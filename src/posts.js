fetch('content/posts.json')
    .then(response => response.json())
    .then(posts => {
        const blogContainer = document.getElementById('blog-container');

        posts.forEach(post => {
            const postLink = document.createElement('a');
            postLink.innerText = post.title + "\n";
            postLink.href = `#${post.filename}`;
            postLink.classList.add('post-link');

            blogContainer.appendChild(postLink);
        });

        // Check for hash changes (user clicks a blog title)
        window.onhashchange = function () {
            const filename = location.hash.substring(1);
            // console.log("Fetching:", filename); // Log the filename to check
            fetch(filename)
                .then(response => {
                    // console.log("Response:", response); // Log the response to verify it's OK
                    return response.text();
                })
                .then(markdown => {
                    const contentContainer = document.getElementById('content-container');
                    contentContainer.innerHTML = marked.marked(markdown);
                })
                .catch(err => console.error("Error fetching markdown:", err)); // Catch and log any errors
        };


    })
    .catch(error => console.error('Error fetching posts:', error));
