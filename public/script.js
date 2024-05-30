document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.createElement('button');
    button.classList.add('github-button');

    const img = document.createElement('img');
    img.src = 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png';
    img.alt = 'Github';

    button.appendChild(img);

    button.addEventListener('click', () => {
        window.location.href = 'https://github.com/spowers0409/nodeExpress';
    });
    document.body.appendChild(button)
});
