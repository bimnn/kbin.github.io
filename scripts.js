document.addEventListener('DOMContentLoaded', function() {
    const trackList = document.getElementById('track-list');
    const addSongButton = document.getElementById('add-song-button');
    const songTitleInput = document.getElementById('song-title');
    const artistNameInput = document.getElementById('artist-name');
    const youtubeUrlInput = document.getElementById('youtube-url');
    const songDescriptionInput = document.getElementById('song-description');
    const recommendedList = document.getElementById('recommended-list');
    const prevPageButton = document.getElementById('prev-page');
    const nextPageButton = document.getElementById('next-page');
    const pageIndicator = document.getElementById('page-indicator');
    const playlistButtons = document.querySelectorAll('.playlist-button');

    let currentPage = 1;
    const songsPerPage = 5;
    let currentPlaylist = 'A';

    const playlists = {
        A: [
            {
                title: "IU - Palette",
                artist: "IU",
                url: "https://www.youtube.com/watch?v=d9IxdwEFk1c",
                description: "A bright and upbeat song by IU, talking about welcoming a new chapter in life.",
                thumbnail: "https://img.youtube.com/vi/d9IxdwEFk1c/0.jpg"
            },
            {
                title: "BTS - Spring Day",
                artist: "BTS",
                url: "https://www.youtube.com/watch?v=xEeFrLSkMm8",
                description: "A song with a lyrical melody and touching lyrics about longing for someone.",
                thumbnail: "https://img.youtube.com/vi/xEeFrLSkMm8/0.jpg"
            },
            // ... add more songs for playlist A
        ],
        B: [
            {
                title: "BLACKPINK - DDU-DU DDU-DU",
                artist: "BLACKPINK",
                url: "https://www.youtube.com/watch?v=IHNzOHi8sJs",
                description: "A song with a strong beat and charismatic performance.",
                thumbnail: "https://img.youtube.com/vi/IHNzOHi8sJs/0.jpg"
            },
            // ... add more songs for playlist B
        ],
        C: [
            {
                title: "BIGBANG - BANG BANG BANG",
                artist: "BIGBANG",
                url: "https://www.youtube.com/watch?v=2ips2mM7Zqw",
                description: "A hit song from BIGBANG featuring explosive energy and an addictive chorus.",
                thumbnail: "https://img.youtube.com/vi/2ips2mM7Zqw/0.jpg"
            },
            // ... add more songs for playlist C
        ],
        D: [
            {
                title: "Red Velvet - Peek-A-Boo",
                artist: "Red Velvet",
                url: "https://www.youtube.com/watch?v=6uJf2IT2Zh8",
                description: "A song by Red Velvet combining a mysterious atmosphere with an upbeat melody.",
                thumbnail: "https://img.youtube.com/vi/6uJf2IT2Zh8/0.jpg"
            },
            // ... add more songs for playlist D
        ],
        E: [
            {
                title: "TWICE - TT",
                artist: "TWICE",
                url: "https://www.youtube.com/watch?v=ePpPVE-GGJw",
                description: "A catchy song by TWICE with a cute and memorable dance.",
                thumbnail: "https://img.youtube.com/vi/ePpPVE-GGJw/0.jpg"
            },
            // ... add more songs for playlist E
        ]
    };

    const recommendedSongs = [
        {
            title: "Dean - instagram",
            artist: "Dean",
            url: "https://www.youtube.com/watch?v=wKyMIrBClYw&pp=ygUT65SYIOyduOyKpO2DgOq3uOueqA%3D%3D",
            description: "A smooth and mellow track by Dean, perfect for relaxing.",
            thumbnail: "https://image.cine21.com/resize/cine21/movie/2018/0731/11_41_10__5b5fcc4636ac1[W578-].jpg"
        },
        {
            title: "Crush - Beautiful",
            artist: "Crush",
            url: "https://www.youtube.com/watch?v=W0cs6ciCt_k&pp=ygUT7YGs65-s7ImsIGJlYXV0aWZ1bA%3D%3D",
            description: "A beautiful ballad by Crush with heartfelt lyrics.",
            thumbnail: "https://image.bugsm.co.kr/album/images/200/200726/20072665.jpg?version=20231026052619.0"
        },
        // ... add more recommended songs
    ];

    function renderSongs(playlist) {
        const songs = playlists[playlist];
        trackList.innerHTML = '';
        const start = (currentPage - 1) * songsPerPage;
        const end = start + songsPerPage;
        const currentSongs = songs.slice(start, end);

        currentSongs.forEach(song => {
            const li = document.createElement('li');
            li.innerHTML = `
                <div class="track-number"></div>
                <div class="track-details">
                    <img src="${song.thumbnail}" alt="${song.title}" class="thumbnail" data-url="${song.url}">
                    <div>
                        <strong>${song.title}</strong>
                        <span>${song.artist}</span>
                        <p>${song.description}</p>
                    </div>
                </div>
            `;
            trackList.appendChild(li);
        });

        prevPageButton.disabled = currentPage === 1;
        nextPageButton.disabled = end >= songs.length;
        pageIndicator.textContent = `Page ${currentPage}`;

        document.querySelectorAll('.thumbnail').forEach(thumbnail => {
            thumbnail.addEventListener('click', function() {
                window.open(this.getAttribute('data-url'), '_blank');
            });
        });
    }

    function renderRecommendedSongs() {
        recommendedList.innerHTML = '';
        recommendedSongs.forEach(song => {
            const li = document.createElement('li');
            li.innerHTML = `
                <div class="track-details">
                    <img src="${song.thumbnail}" alt="${song.title}" class="thumbnail" data-url="${song.url}">
                    <div>
                        <strong>${song.title}</strong>
                        <span>${song.artist}</span>
                        <p>${song.description}</p>
                    </div>
                </div>
            `;
            recommendedList.appendChild(li);
        });

        document.querySelectorAll('.thumbnail').forEach(thumbnail => {
            thumbnail.addEventListener('click', function() {
                window.open(this.getAttribute('data-url'), '_blank');
            });
        });
    }

    playlistButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            currentPlaylist = e.target.getAttribute('data-playlist');
            currentPage = 1;
            renderSongs(currentPlaylist);
        });
    });

    prevPageButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderSongs(currentPlaylist);
        }
    });

    nextPageButton.addEventListener('click', () => {
        if ((currentPage * songsPerPage) < playlists[currentPlaylist].length) {
            currentPage++;
            renderSongs(currentPlaylist);
        }
    });

    addSongButton.addEventListener('click', () => {
        const title = songTitleInput.value;
        const artist = artistNameInput.value;
        const url = youtubeUrlInput.value;
        const description = songDescriptionInput.value;
        const thumbnail = `https://img.youtube.com/vi/${url.split('v=')[1]}/0.jpg`;

        if (title && artist && url && description) {
            playlists[currentPlaylist].push({ title, artist, url, description, thumbnail });
            renderSongs(currentPlaylist);
            songTitleInput.value = '';
            artistNameInput.value = '';
            youtubeUrlInput.value = '';
            songDescriptionInput.value = '';
        }
    });

    // Initially render the first playlist and recommended songs
    renderSongs(currentPlaylist);
    renderRecommendedSongs();
});
