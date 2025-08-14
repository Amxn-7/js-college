async function getData() {
    const topic = document.getElementById('search-text').value;
    const videosDiv = document.getElementById('videos-div');
    const loading = document.getElementById('loading');
    const errorMessage = document.getElementById('error-message');
    const API_KEY = "AIzaSyBKtYKYDN6Sgy5So9l3L8vLQKBCF8L7sQk";

    try {
        const res = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${topic}&key=${API_KEY}&type=video&maxResults=20`);
        
        
        const data = await res.json();
        const videos = data.items;
        
        videos.forEach(video => {
            const videoId = video.id.videoId;
            const thumbnailUrl = video.snippet.thumbnails.high.url;
            const title = video.snippet.title;
            const channelTitle = video.snippet.channelTitle;
            const videoCardHTML = `
                <div class="bg-[#181818] rounded-xl overflow-hidden cursor-pointer hover:bg-gray-800 transition-colors" onclick="window.open('https://www.youtube.com/watch?v=${videoId}', '_blank')">
                    <img src="${thumbnailUrl}" alt="${title}" class="w-full h-48 object-cover" onerror="this.onerror=null;this.src='https://placehold.co/680x400/000000/ffffff?text=Video';">
                    <div class="p-3">
                        <h3 class="text-sm font-semibold mb-1 truncate" title="${title}">${title}</h3>
                        <p class="text-xs text-gray-400">${channelTitle}</p>
                    </div>
                </div>
            `;
            videosDiv.innerHTML += videoCardHTML;
        });
    } catch (error) {
        console.error("Failed to fetch data:", error);
        errorMessage.textContent = `Error: ${error.message}`;
        errorMessage.classList.remove('hidden');
    } finally {
        loading.classList.add('hidden');
    }
}

document.getElementById('search-text').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        getData();
    }
});
window.onload = () => {
     document.getElementById('search-text').value = 'latest tech';
     getData();
}