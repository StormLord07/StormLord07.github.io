document.addEventListener("DOMContentLoaded", function () {
    const footerContent = `
        <footer>
            <p>© 2023 Ilya "StormLord07" Repnev | Connect with me on:
            <a href="https://github.com/StormLord07"><i class="fab fa-github"></i> GitHub</a> | 
            <a href="https://t.me/sigunused"><i class="fab fa-telegram-plane"></i> Telegram</a> | 
            <a href="mailto:iljusha1@gmail.com"><i class="fas fa-envelope"></i>Gmail(mailto)</a> | 
            <a href="https://vk.com/stormlord07"><i class="fab fa-vk"></i> VK</a> 
            <!--<a href="YOUR_LINKEDIN_LINK"><i class="fab fa-linkedin-in"></i> LinkedIn</a> |--!>
            <!--<a href="YOUR_HH_LINK"><i class="fas fa-briefcase"></i> HH</a>--!>
            </p>
        </footer>
    `;

    document.body.innerHTML += footerContent;
});
