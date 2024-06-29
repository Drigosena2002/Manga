document.addEventListener('DOMContentLoaded', () => {
  const mangaList = document.querySelector('.manga-list');

  // Simulating fetching data
  const mangas = [
    { title: 'DRUNK BULLET', author: 'YANAGI TAKAKUCHI', views: 155535 },
    { title: 'Hope You\'re Happy, Lei', author: 'MIZUKI KISHIKAWA', views: 114569 },
    // Add more manga items here
  ];

  mangas.forEach(manga => {
    const mangaItem = document.createElement('div');
    mangaItem.classList.add('manga-item');
    mangaItem.innerHTML = `
      <h2>${manga.title}</h2>
      <p>by ${manga.author}</p>
      <p>Views: ${manga.views}</p>
    `;
    mangaList.appendChild(mangaItem);
  });
});
