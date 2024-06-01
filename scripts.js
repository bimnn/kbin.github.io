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

    let currentPage = 1;
    const songsPerPage = 5;
    let songs = [
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
        {
            title: "BLACKPINK - DDU-DU DDU-DU",
            artist: "BLACKPINK",
            url: "https://www.youtube.com/watch?v=IHNzOHi8sJs",
            description: "A song with a strong beat and charismatic performance.",
            thumbnail: "https://img.youtube.com/vi/IHNzOHi8sJs/0.jpg"
        },
        {
            title: "BIGBANG - BANG BANG BANG",
            artist: "BIGBANG",
            url: "https://www.youtube.com/watch?v=2ips2mM7Zqw",
            description: "A hit song from BIGBANG featuring explosive energy and an addictive chorus.",
            thumbnail: "https://img.youtube.com/vi/2ips2mM7Zqw/0.jpg"
        },
        {
            title: "Red Velvet - Peek-A-Boo",
            artist: "Red Velvet",
            url: "https://www.youtube.com/watch?v=6uJf2IT2Zh8",
            description: "A song by Red Velvet combining a mysterious atmosphere with an upbeat melody.",
            thumbnail: "https://img.youtube.com/vi/6uJf2IT2Zh8/0.jpg"
        },
        {
            title: "TWICE - TT",
            artist: "TWICE",
            url: "https://www.youtube.com/watch?v=ePpPVE-GGJw",
            description: "A catchy song by TWICE with a cute and memorable dance.",
            thumbnail: "https://img.youtube.com/vi/ePpPVE-GGJw/0.jpg"
        },
        {
            title: "EXO - Love Shot",
            artist: "EXO",
            url: "https://www.youtube.com/watch?v=pSudEWBAYRE",
            description: "A smooth and sexy song by EXO with a captivating performance.",
            thumbnail: "https://img.youtube.com/vi/pSudEWBAYRE/0.jpg"
        },
        {
            title: "SEVENTEEN - Don't Wanna Cry",
            artist: "SEVENTEEN",
            url: "https://www.youtube.com/watch?v=9M7k9ZV67c0",
            description: "An emotional song by SEVENTEEN with beautiful choreography.",
            thumbnail: "https://img.youtube.com/vi/9M7k9ZV67c0/0.jpg"
        },
        {
            title: "MAMAMOO - HIP",
            artist: "MAMAMOO",
            url: "https://www.youtube.com/watch?v=UReXygX8LYI",
            description: "A fun and empowering song by MAMAMOO with a catchy beat.",
            thumbnail: "https://img.youtube.com/vi/UReXygX8LYI/0.jpg"
        },
        {
            title: "GOT7 - Just Right",
            artist: "GOT7",
            url: "https://www.youtube.com/watch?v=vrdk3IGcau8",
            description: "A feel-good song by GOT7 with an encouraging message.",
            thumbnail: "https://img.youtube.com/vi/vrdk3IGcau8/0.jpg"
        },
        {
            title: "ITZY - WANNABE",
            artist: "ITZY",
            url: "https://www.youtube.com/watch?v=fE2h3lGlOsk",
            description: "A bold and confident song by ITZY with a powerful message.",
            thumbnail: "https://img.youtube.com/vi/fE2h3lGlOsk/0.jpg"
        },
        {
            title: "SHINee - View",
            artist: "SHINee",
            url: "https://www.youtube.com/watch?v=UF53cptEE5k",
            description: "A refreshing and trendy song by SHINee with a cool vibe.",
            thumbnail: "https://img.youtube.com/vi/UF53cptEE5k/0.jpg"
        },
        {
            title: "NCT 127 - Cherry Bomb",
            artist: "NCT 127",
            url: "https://www.youtube.com/watch?v=WkuHLzMMTZM",
            description: "A dynamic and explosive song by NCT 127 with impressive choreography.",
            thumbnail: "https://img.youtube.com/vi/WkuHLzMMTZM/0.jpg"
        },
        {
            title: "GFRIEND - Rough",
            artist: "GFRIEND",
            url: "https://www.youtube.com/watch?v=NGrfLRqkjTQ",
            description: "An emotional and powerful song by GFRIEND with beautiful dance moves.",
            thumbnail: "https://img.youtube.com/vi/NGrfLRqkjTQ/0.jpg"
        },
        {
            title: "MONSTA X - Shoot Out",
            artist: "MONSTA X",
            url: "https://www.youtube.com/watch?v=FzgU3ZMrmA8",
            description: "A fierce and intense song by MONSTA X with strong performances.",
            thumbnail: "https://img.youtube.com/vi/FzgU3ZMrmA8/0.jpg"
        },
        {
            title: "TXT - Crown",
            artist: "TXT",
            url: "https://www.youtube.com/watch?v=W3iSnJ663II",
            description: "A refreshing and upbeat debut song by TXT with a catchy tune.",
            thumbnail: "https://img.youtube.com/vi/W3iSnJ663II/0.jpg"
        },
        {
            title: "ATEEZ - Wonderland",
            artist: "ATEEZ",
            url: "https://www.youtube.com/watch?v=Z_BhMhZpAug",
            description: "A powerful and adventurous song by ATEEZ with an intense vibe.",
            thumbnail: "https://img.youtube.com/vi/Z_BhMhZpAug/0.jpg"
        },
        {
            title: "IZ*ONE - Fiesta",
            artist: "IZ*ONE",
            url: "https://www.youtube.com/watch?v=eDEFolvLn0A",
            description: "A vibrant and celebratory song by IZ*ONE with a colorful concept.",
            thumbnail: "https://img.youtube.com/vi/eDEFolvLn0A/0.jpg"
        },
        {
            title: "OH MY GIRL - Nonstop",
            artist: "OH MY GIRL",
            url: "https://www.youtube.com/watch?v=iDjQSdN_ig8",
            description: "A bright and playful song by OH MY GIRL with a catchy melody.",
            thumbnail: "https://img.youtube.com/vi/iDjQSdN_ig8/0.jpg"
        },
        {
            title: "KARD - Bomb Bomb",
            artist: "KARD",
            url: "https://www.youtube.com/watch?v=8LPjJ1p4dYs",
            description: "A high-energy and addictive song by KARD with a party vibe.",
            thumbnail: "https://img.youtube.com/vi/8LPjJ1p4dYs/0.jpg"
        },
        {
            title: "ASTRO - Blue Flame",
            artist: "ASTRO",
            url: "https://www.youtube.com/watch?v=a8UzFYdX_38",
            description: "A smooth and fiery song by ASTRO with a mesmerizing performance.",
            thumbnail: "https://img.youtube.com/vi/a8UzFYdX_38/0.jpg"
        },
        {
            title: "SF9 - Good Guy",
            artist: "SF9",
            url: "https://www.youtube.com/watch?v=R3Fwdnij49o",
            description: "A sleek and sophisticated song by SF9 with captivating visuals.",
            thumbnail: "https://img.youtube.com/vi/R3Fwdnij49o/0.jpg"
        },
        {
            title: "LOONA - Butterfly",
            artist: "LOONA",
            url: "https://www.youtube.com/watch?v=XEOCbFJjRw0",
            description: "A beautiful and ethereal song by LOONA with intricate choreography.",
            thumbnail: "https://img.youtube.com/vi/XEOCbFJjRw0/0.jpg"
        },
        {
            title: "Apink - Dumhdurum",
            artist: "Apink",
            url: "https://www.youtube.com/watch?v=6VTOZRK6Gx8",
            description: "A catchy and mature song by Apink with an addictive chorus.",
            thumbnail: "https://img.youtube.com/vi/6VTOZRK6Gx8/0.jpg"
        },
        {
            title: "WINNER - Really Really",
            artist: "WINNER",
            url: "https://www.youtube.com/watch?v=4tBnF46ybZk",
            description: "A refreshing and feel-good song by WINNER with a catchy beat.",
            thumbnail: "https://img.youtube.com/vi/4tBnF46ybZk/0.jpg"
        }
    ];

    function renderPage(page) {
        trackList.innerHTML = '';
        const start = (page - 1) * songsPerPage;
        const end = start + songsPerPage;
        const pageSongs = songs.slice(start, end);
        pageSongs.forEach((song, index) => {
            const li = document.createElement('li');
            li.onclick = () => window.open(song.url, '_blank');
            li.innerHTML = `
                <div class="track-number">${start + index + 1}</div>
                <div class="track-details">
                    <img src="${song.thumbnail}" alt="${song.title} thumbnail">
                    <strong>${song.title} - ${song.artist}</strong>
                    <p>${song.description}</p>
                </div>
            `;
            trackList.appendChild(li);
        });
        pageIndicator.textContent = `Page ${page}`;
        prevPageButton.disabled = page === 1;
        nextPageButton.disabled = end >= songs.length;
    }

    addSongButton.addEventListener('click', function() {
        const songTitle = songTitleInput.value;
        const artistName = artistNameInput.value;
        const youtubeUrl = youtubeUrlInput.value;
        const songDescription = songDescriptionInput.value;
        if (songTitle && artistName && youtubeUrl && songDescription) {
            const videoId = youtubeUrl.split('v=')[1];
            const newSong = {
                title: songTitle,
                artist: artistName,
                url: youtubeUrl,
                description: songDescription,
                thumbnail: `https://img.youtube.com/vi/${videoId}/0.jpg`
            };
            songs.push(newSong);
            renderPage(currentPage);
            songTitleInput.value = '';
            artistNameInput.value = '';
            youtubeUrlInput.value = '';
            songDescriptionInput.value = '';
        } else {
            alert("Please fill in all fields");
        }
    });

    prevPageButton.addEventListener('click', function() {
        if (currentPage > 1) {
            currentPage--;
            renderPage(currentPage);
        }
    });

    nextPageButton.addEventListener('click', function() {
        if (currentPage * songsPerPage < songs.length) {
            currentPage++;
            renderPage(currentPage);
        }
    });

    renderPage(currentPage);

    const recommendedSongs = [
        {
            title: "BTS - Dynamite",
            artist: "BTS",
            url: "https://www.youtube.com/watch?v=gdZLi9oWNZg",
            description: "A fun and energetic song by BTS that brings a feel-good vibe.",
            thumbnail: "https://img.youtube.com/vi/gdZLi9oWNZg/0.jpg"
        },
        {
            title: "Red Velvet - Psycho",
            artist: "Red Velvet",
            url: "https://www.youtube.com/watch?v=uR8Mrt1IpXg",
            description: "A dark and captivating song by Red Velvet with stunning visuals.",
            thumbnail: "https://img.youtube.com/vi/uR8Mrt1IpXg/0.jpg"
        },
        {
            title: "IU - Blueming",
            artist: "IU",
            url: "https://www.youtube.com/watch?v=D1PvIWdJ8xo",
            description: "A catchy and cheerful song by IU that talks about love and emotions.",
            thumbnail: "https://img.youtube.com/vi/D1PvIWdJ8xo/0.jpg"
        },
        {
            title: "Stray Kids - God's Menu",
            artist: "Stray Kids",
            url: "https://www.youtube.com/watch?v=TQTlCHxyuu8",
            description: "A powerful and intense song by Stray Kids with an addictive beat.",
            thumbnail: "https://img.youtube.com/vi/TQTlCHxyuu8/0.jpg"
        },
        {
            title: "BLACKPINK - How You Like That",
            artist: "BLACKPINK",
            url: "https://www.youtube.com/watch?v=ioNng23DkIM",
            description: "A bold and confident song by BLACKPINK with a strong message.",
            thumbnail: "https://img.youtube.com/vi/ioNng23DkIM/0.jpg"
        }
    ];
    recommendedSongs.sort(() => 0.5 - Math.random());
    const selectedSongs = recommendedSongs.slice(0, 3);
    selectedSongs.forEach((song, index) => {
        const li = document.createElement('li');
        li.onclick = () => window.open(song.url, '_blank');
        li.innerHTML = `
            <div class="track-number">${index + 1}</div>
            <div class="track-details">
                <img src="${song.thumbnail}" alt="${song.title} thumbnail">
                <strong>${song.title}</strong>
                <p>${song.description}</p>
            </div>
        `;
        recommendedList.appendChild(li);
    });
});
