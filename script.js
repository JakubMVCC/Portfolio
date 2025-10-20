// --- PORTFOLIO DATA ---
// This array holds all the video and graphic design projects for the portfolio.
const portfolioItems = [
    // --- Videos ---
    {
        id: 1,
        type: 'video',
        title: 'Peachy Parking 2024',
        year: 2024,
        youtubeId: 'fuluZ9Vc26A',
        imageUrl: 'https://i.imgur.com/5Pmj1hA.jpeg', // Custom thumbnail
        tags: ['Commercial', 'Drone Footage', 'Illustrator', 'Informative', 'Premiere Pro', 'Short Form', 'Talking Head', 'Voiceover'],
        description: "Here is an edit that I put together for a client. If these are the type of videos that you are looking for, then I am more than capable of recording and creating them."
    },
    {
        id: 2,
        type: 'video',
        title: 'My 20 Years with The Legend of Zelda: Wind Waker',
        year: 2022,
        youtubeId: 'eQVPwUhf69s',
        imageUrl: 'https://i.imgur.com/XdH6Dje.png', // Custom thumbnail
        tags: ['Documentary', 'Illustrator', 'Interview', 'Long Form', 'Motion Graphics', 'Premiere Pro', 'Scriptwriting', 'Storyboarding', 'Talking Head', 'Visual Effects'],
        description: "Here is a Documentary style video I wrote to celebrate one of my favorite video games of all time. Which showcases a variety of editing techniques to tell a story that spans over 20 years now."
    },
    {
        id: 3,
        type: 'video',
        title: 'Chicago Comic and Entertainment Expo 2025 is Awesome',
        year: 2025,
        youtubeId: 'EivIBhXsNj4',
        imageUrl: 'https://i.imgur.com/t3jaWVb.png', // Custom thumbnail
        tags: ['Informative', 'Long Form', 'Motion Graphics', 'Premiere Pro', 'Talking Head', 'UnScripted', 'Vlog', 'Voiceover'],
        description: "This video showcases my ability to record footage on location and edit together a story which brings the viewers on a journey with me through this event."
    },
    {
        id: 4,
        type: 'video',
        title: '3D Printing a Metroid Helmet',
        year: 2025,
        youtubeId: 'vj73JvlAujY',
        imageUrl: 'https://i.imgur.com/Ps00pWo.png', // Custom thumbnail
        tags: ['Informative', 'Long Form', 'Premiere Pro', 'Scriptwriting', 'Talking Head', 'Tutorial', 'Voiceover'],
        description: "This video compiles together over 2 months of footage while also telling the story of how I created a 3D Printed Helmet as a gift for my friends weeding. Organization is key when working on such a large project."
    },
    {
        id: 5,
        type: 'video',
        title: 'Legend of Zelda: Tears of the Kingdom (First Thoughts)',
        year: 2023,
        youtubeId: 'nrCRu7LfVbU',
        imageUrl: 'https://i.imgur.com/zVbObGy.png', // Custom thumbnail
        tags: ['Informative', 'Long Form', 'Motion Graphics', 'Premiere Pro', 'Scriptwriting', 'Talking Head', 'Voiceover'],
        description: "This is another video that shows my skills at recording unscripted and being able to edit that footage in a way that creates a compelling story from start to finish about my experience with the latest Legend of Zelda game."
    },
    {
        id: 6,
        type: 'video',
        title: 'How I Stole A GameBoy Color',
        year: 2016,
        youtubeId: 'e5vHKLWVrxQ',
        imageUrl: 'https://i.imgur.com/ZM1EaOL.png', // Custom thumbnail
        tags: ['After Effects', 'Animation', 'Claymation', 'Illustrator', 'Motion Graphics', 'Premiere Pro', 'Scriptwriting', 'Stop Motion', 'Storyboarding', 'Visual Effects'],
        description: "This video showcases my skills of using different filmmaking techniques such as stop motion animation mixed with live action footage to share a funny story from my childhood. This is also my first video to reach over 1 million views."
    },
    {
        id: 7,
        type: 'video',
        title: 'Crash Bandicoot (PS1) Review',
        year: 2017,
        youtubeId: 'qj1qQZycJcM',
        imageUrl: 'https://i.imgur.com/ut5lF5H.png', // Custom thumbnail
        tags: ['Informative', 'Long Form', 'Motion Graphics', 'Premiere Pro', 'Review', 'Scriptwriting', 'Storyboarding', 'Talking Head', 'Visual Effects'],
        description: "In this video, I show my skills of reviewing one of my favorite games. For this video, I recorded all of my own footage, from the gameplay to the live action parts. I then spent over 1 month writing a storyboard with a script to edit together what you see here. I even created my own wearable wooden mask just for this video."
    },
    {
        id: 8,
        type: 'video',
        title: 'Splatter Head v3 | Final Project',
        year: 2024,
        youtubeId: 'Wez7s5u1yWU',
        imageUrl: 'https://i.imgur.com/0vGZaBi.png', // Custom thumbnail
        tags: ['After Effects', 'Animation', 'Claymation', 'Illustrator', 'Motion Graphics', 'Premiere Pro', 'Stop Motion', 'Storyboarding', 'Visual Effects'],
        description: "Even though still unfinished, Splatter Head showcases my skills in storytelling with a variety of different formats such as Stop Motion and Animation. Originally created for my Premiere Pro class Final Project at Moraine but has since been used as my Finals for my Adobe Creative Suite, Website Development, and After Effects classes too."
    },
    {
        id: 9,
        type: 'video',
        title: "Should you pay $80 for Sonic's Encyclo-speedia?",
        year: 2021,
        youtubeId: 'cxyekweh_wQ',
        imageUrl: 'https://i.imgur.com/MBX86N1.png', // Custom thumbnail
        tags: ['Documentary', 'Long Form', 'Premiere Pro', 'Scriptwriting', 'Talking Head'],
        description: "This video showcases my ability to edit unscripted footage together to tell a story for an interesting review. It also features a variety of B-Roll, Talking Head shots, as well as Voice Overs."
    },
    {
        id: 10,
        type: 'video',
        title: 'Why I Love The Metroid Franchise',
        year: 2016,
        youtubeId: 'k873l9PK2yw',
        imageUrl: 'https://i.imgur.com/AM3Fsmd.png', // Custom thumbnail
        tags: ['Informative', 'Motion Graphics', 'Premiere Pro', 'Scriptwriting', 'Talking Head', 'Visual Effects', 'Voiceover'],
        description: "This video shows that even almost 10 years ago now, I was able to hone my timing and pacing when it came to creating long form content. I always put the story first to keep the viewers engaged no matter what the topic is about."
    },
    {
        id: 11,
        type: 'video',
        title: '10 Fishing Tips for Big the Cat',
        year: 2022,
        youtubeId: 'dZMKci4t8So',
        imageUrl: 'https://i.ytimg.com/vi/dZMKci4t8So/maxresdefault.jpg', // Custom thumbnail
        tags: ['Informative', 'Long Form', 'Premiere Pro', 'Scriptwriting', 'Tutorial', 'Visual Effects', 'Voiceover'],
        description: "This video shows the extensive work I put into researching any topic, even something as random as a Fishing Tutorial for the Sonic Adventures video game. The editing is tight with plenty of information being shared throughout."
    },
    {
        id: 12,
        type: 'video',
        title: 'How I Dangerously Carved this Pumpkin',
        year: 2021,
        youtubeId: 'piwb0cfirks',
        imageUrl: 'https://i.imgur.com/iybx3sY.png', // Custom thumbnail
        tags: ['Informative', 'Long Form', 'Premiere Pro', 'Scriptwriting', 'Talking Head', 'Tutorial', 'Voiceover'],
        description: "This video is another example of how I record footage and use that to shape together a story, such as carving a pumpkin for Halloween. Even before I hit start on the camera, I always know in my mind exactly why I'm recording a specific scene."
    },
    {
        id: 13,
        type: 'video',
        title: 'The Switch 2 is Awesome but Expensive',
        year: 2025,
        youtubeId: 'LJgT_2KHfx8',
        imageUrl: 'https://i.imgur.com/g0yhLTJ.png', // Custom thumbnail
        tags: ['Informative', 'Long Form', 'Premiere Pro', 'Talking Head', 'UnScripted'],
        description: "This video is an example of my skills being in front of the camera and 'reporting' on a topic, similar to how journalists would on the News. I'm very comfortable either recording others or being recorded myself and creating content that informs the viewers."
    },
    {
        id: 14,
        type: 'video',
        title: 'First Thoughts | Xenoblade Chronicles X: Definitive Edition',
        year: 2025,
        youtubeId: 'D-yuPDeXjYs',
        imageUrl: 'https://i.imgur.com/CHUor4B.png', // Custom thumbnail
        tags: ['Informative', 'Long Form', 'Premiere Pro', 'Talking Head', 'UnScripted'],
        description: "This video shows how passionate I can get when speaking about anything or being in front of the camera and then using my editing skills to translate that into an enjoyable video. I can easily edit any type of video, regardless of genre or topic."
    },
    {
        id: 15,
        type: 'video',
        title: "Split Fiction | Games You Should 'Touts Play",
        year: 2025,
        youtubeId: 'dkA8F1uFlLc',
        imageUrl: 'https://i.imgur.com/qZOsvTQ.png', // Custom thumbnail
        tags: ['Informative', 'Long Form', 'Premiere Pro', 'Review', 'Scriptwriting', 'Talking Head', 'Voiceover'],
        description: "I recorded this video in one take, about an hour before I had to go onto an Amtrak Train. So this video showcases that I can easily work under fast paced and stressful environments too while still being able to remain on topic."
    },
    {
        id: 16,
        type: 'video',
        title: '3D Air Balloon in Blender | Animating a Multimedia Presentation',
        year: 2025,
        youtubeId: 'Mcaw7OPcs1M',
        imageUrl: 'https://i.imgur.com/VjubQVi.png', // Custom thumbnail
        tags: ['After Effects', 'Animation', 'Premiere Pro', 'Short Form', 'Visual Effects'],
        description: "This video showcases my skills using the 3D Software Blender to recreate this school assignment in my own creative way. I spent an entire week troubleshooting until I was finally able to get the video and program to work exactly how I wanted."
    },
    {
        id: 17,
        type: 'video',
        title: 'Puppet Tool Animation | Adobe After Effects',
        year: 2025,
        youtubeId: 'ZmJNjt5VtEU',
        imageUrl: 'https://i.imgur.com/jBdSoek.png', // Custom thumbnail
        tags: ['After Effects', 'Animation', 'Illustrator', 'Motion Graphics', 'Premiere Pro', 'Visual Effects'],
        description: "This video showcases my graphic design and visual effect skills. I created every movable part manually by myself in Adobe Illustrator. Afterwards, I meticulously animated each action and movement in Adobe After Effects to make this short video come to life."
    },
    {
        id: 18,
        type: 'video',
        title: 'DIY Eggman Costume & Attending the Sonic Symphony',
        year: 2023,
        youtubeId: 'Kowi_FQum2A',
        imageUrl: 'https://i.imgur.com/2GBpAnM.png', // Custom thumbnail
        tags: ['Long Form', 'Premiere Pro', 'UnScripted', 'Vlog'],
        description: "Here is an example of me recording footage as a 'vlog' or for archival reasons. In this video, I have footage of myself creating a Halloween costume for a video game character before going to the Sonic Symphony in Downtown."
    },
    
    // --- Graphics (Placeholders) ---
    {
        id: 19,
        type: 'graphic',
        title: 'Music Festival Poster',
        year: 2022,
        imageUrl: 'https://placehold.co/800x600/111827/c084fc?text=Festival+Poster',
        tags: ['poster', 'photoshop', 'event', 'music'],
        description: 'Promotional poster designed for a local music festival using Adobe Photoshop and Illustrator.'
    },
    {
        id: 20,
        type: 'graphic',
        title: 'Brand Logo Design',
        year: 2021,
        imageUrl: 'https://placehold.co/800x600/FFFFFF/111827?text=Logo',
        tags: ['logo', 'branding', 'identity', 'minimalist'],
        description: 'A minimalist logo designed for a new coffee shop, focusing on clean lines and modern typography.'
    }
];

// --- STATE MANAGEMENT ---
let activeFilters = [];
let currentModalItemId = null;

// --- DOM ELEMENTS ---
const videoGallery = document.getElementById('video-gallery');
const graphicGallery = document.getElementById('graphic-gallery');
const searchForms = document.querySelectorAll('.header-search-form');
const suggestionsDataLists = [document.getElementById('search-suggestions'), document.getElementById('search-suggestions-mobile')];
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const modal = document.getElementById('item-modal');
const modalContent = document.getElementById('modal-content');
const randomBtns = [document.getElementById('random-btn'), document.getElementById('random-btn-mobile')];
const filterStatusContainer = document.getElementById('filter-status-container');
const scrollToTopBtn = document.getElementById('scroll-to-top');


// --- RENDER GALLERIES ---
function createCard(item) {
    const isVideo = item.type === 'video';
    const displayImageUrl = isVideo 
        ? (item.imageUrl || `https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`) 
        : item.imageUrl;

    const tagsString = item.tags.join(','); 

    const tagsHtml = item.tags.map(tag => 
        `<button onclick="toggleFilter('${tag}', this)" class="tag-btn bg-gray-800 text-sm font-semibold px-3 py-1 rounded-full transition hover:bg-[#81268F]" style="color: #e9d5ff;">#${tag}</button>`
    ).join('');

    return `
        <div class="card rounded-lg overflow-hidden transition-all duration-300 group" data-tags="${tagsString}" data-item-id="${item.id}" onclick="showItemDetails(${item.id})">
            <div class="relative aspect-w-16 aspect-h-9 bg-black overflow-hidden">
                <img src="${displayImageUrl}" alt="${item.title}" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110">
                ${isVideo ? `<div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-white opacity-80" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" /></svg>
                </div>` : ''}
                
                <div class="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p class="text-white text-center text-sm">${item.description}</p>
                </div>
            </div>
            <div class="p-4">
                <p class="text-sm text-gray-400">${item.year}</p>
                <h3 class="text-lg font-bold text-white mt-1">${item.title}</h3>
                <div class="mt-3 flex flex-wrap gap-2">
                    ${tagsHtml}
                </div>
            </div>
        </div>
    `;
}

function renderGalleries() {
    if (videoGallery) {
        videoGallery.innerHTML = portfolioItems.filter(item => item.type === 'video').map(createCard).join('');
    }
    if (graphicGallery) {
        graphicGallery.innerHTML = portfolioItems.filter(item => item.type === 'graphic').map(createCard).join('');
    }
}

// --- MULTI-TAG FILTERING ---
function toggleFilter(tag, element) {
    const gallery = element.closest('main').querySelector('.gallery-grid');
    
    const tagIndex = activeFilters.indexOf(tag);
    if (tagIndex > -1) {
        activeFilters.splice(tagIndex, 1);
    } else {
        activeFilters.push(tag);
    }
    
    updateFilterDisplay(gallery);
    applyFilters(gallery);
}

function removeFilter(tagToRemove, element) {
    const gallery = element.closest('#filter-status-container').parentElement.querySelector('.gallery-grid');
    activeFilters = activeFilters.filter(tag => tag !== tagToRemove);
    updateFilterDisplay(gallery);
    applyFilters(gallery);
}

function updateFilterDisplay(gallery) {
    if (filterStatusContainer) {
        if (activeFilters.length > 0) {
            const tagsHtml = activeFilters.map(tag => 
                `<span class="inline-flex items-center bg-gray-800 text-sm font-semibold pl-3 pr-2 py-1 rounded-full" style="color: #e9d5ff;">
                    #${tag}
                    <button onclick="removeFilter('${tag}', this)" class="ml-2 -mr-1 text-gray-400 hover:text-white">&times;</button>
                </span>`
            ).join('');
            
            filterStatusContainer.innerHTML = `
                <div class="flex items-center justify-center flex-wrap gap-2">
                    <span class="text-gray-400">Filtering by:</span>
                    ${tagsHtml}
                    <button onclick="clearAllFilters(this)" class="ml-2 text-sm text-[#c084fc] hover:underline">Clear All</button>
                </div>
            `;
            filterStatusContainer.classList.remove('hidden');
        } else {
            filterStatusContainer.classList.add('hidden');
            filterStatusContainer.innerHTML = '';
        }
    }
}

function applyFilters(gallery) {
    if (!gallery) return;
    const cards = gallery.querySelectorAll('.card');
    cards.forEach(card => {
        const cardTags = card.dataset.tags.split(',');
        const matchesAll = activeFilters.every(filter => cardTags.includes(filter));
        
        if (matchesAll || activeFilters.length === 0) {
            card.classList.remove('filtered-out');
        } else {
            card.classList.add('filtered-out');
        }
    });

    const allTagButtons = gallery.querySelectorAll('.tag-btn');
    allTagButtons.forEach(btn => {
        const tag = btn.innerText.replace('#', '');
        if (activeFilters.includes(tag)) {
            btn.classList.add('bg-[#81268F]');
        } else {
            btn.classList.remove('bg-[#81268F]');
        }
    });
}

function clearAllFilters(element) {
    const gallery = element.closest('#filter-status-container').parentElement.querySelector('.gallery-grid');
    activeFilters = [];
    updateFilterDisplay(gallery);
    applyFilters(gallery);
}


// --- SEARCH FUNCTIONALITY ---
function populateSuggestions() {
    const allTags = new Set();
    portfolioItems.forEach(item => {
        item.tags.forEach(tag => allTags.add(tag));
    });
    const suggestionsHtml = [...allTags].sort().map(suggestion => `<option value="${suggestion}"></option>`).join('');
    suggestionsDataLists.forEach(datalist => {
        if (datalist) datalist.innerHTML = suggestionsHtml;
    });
}

searchForms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = e.target.querySelector('input[type="search"]').value;
        if (query) {
            window.location.href = `search.html?q=${encodeURIComponent(query)}`;
        }
    });
});

function renderSearchResults() {
    const searchGallery = document.getElementById('search-gallery');
    if (!searchGallery) return;

    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q');
    const tag = urlParams.get('tag');
    
    let results = [];
    let displayQuery = '';

    if (query) {
        const lowerCaseQuery = query.toLowerCase().trim();
        displayQuery = `Showing results for: "${query}"`;
        results = portfolioItems.filter(item => 
            item.title.toLowerCase().includes(lowerCaseQuery) ||
            item.year.toString().includes(lowerCaseQuery) ||
            item.tags.some(t => t.toLowerCase().includes(lowerCaseQuery))
        );
    } else if (tag) {
        displayQuery = `Showing all work tagged with: "#${tag}"`;
        results = portfolioItems.filter(item => 
            item.tags.some(t => t.toLowerCase() === tag.toLowerCase())
        );
    }
    
    document.getElementById('search-query-display').innerText = displayQuery;
    const noResults = document.getElementById('no-results');
    
    if (results.length > 0) {
        searchGallery.innerHTML = results.map(createCard).join('');
        searchGallery.classList.remove('hidden');
        noResults.classList.add('hidden');
    } else {
        searchGallery.classList.add('hidden');
        noResults.classList.remove('hidden');
    }
}

// --- MODAL FUNCTIONALITY with PREV/NEXT ---
function showItemDetails(itemId) {
    const item = portfolioItems.find(p => p.id === itemId);
    if (!item) return;

    if (event.target.closest('.tag-btn')) {
        event.stopPropagation();
        return;
    }
    
    currentModalItemId = itemId;
    
    const isVideo = item.type === 'video';
    let mediaHtml = isVideo ?
         `<div class="video-container mb-4"><iframe src="https://www.youtube.com/embed/${item.youtubeId}?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="rounded-lg"></iframe></div>` :
         `<img src="${item.imageUrl}" alt="${item.title}" class="w-full h-auto rounded-lg mb-4">`;
    
    const tagsHtml = item.tags.map(tag => 
        `<a href="search.html?tag=${encodeURIComponent(tag)}" class="bg-gray-800 text-sm font-semibold px-3 py-1 rounded-full transition hover:bg-[#81268F]" style="color: #e9d5ff;">#${tag}</a>`
    ).join('');

    modalContent.innerHTML = `
        <button onclick="showPreviousItem()" class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-white p-2 rounded-full bg-black/50 hover:bg-black/80 transition z-20">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
        </button>
        <button onclick="showNextItem()" class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-white p-2 rounded-full bg-black/50 hover:bg-black/80 transition z-20">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
        <button onclick="closeModal()" class="absolute top-4 right-4 text-gray-400 hover:text-white transition z-10">
            <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        ${mediaHtml}
        <h2 class="text-3xl font-bold mb-2" style="color: #c084fc;">${item.title}</h2>
        <p class="text-md text-gray-400 mb-4">${item.year}</p>
        <p class="text-gray-300 mb-6">${item.description}</p>
        <div class="flex flex-wrap gap-2">${tagsHtml}</div>
    `;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function getVisibleItemIds() {
    const gallery = document.querySelector('.gallery-grid');
    if (!gallery) return portfolioItems.map(item => item.id);

    const visibleCards = gallery.querySelectorAll('.card:not(.filtered-out)');
    return Array.from(visibleCards).map(card => parseInt(card.dataset.itemId));
}

function showNextItem() {
    const visibleIds = getVisibleItemIds();
    if (visibleIds.length <= 1) return;
    const currentIndex = visibleIds.indexOf(currentModalItemId);
    const nextIndex = (currentIndex + 1) % visibleIds.length;
    showItemDetails(visibleIds[nextIndex]);
}

function showPreviousItem() {
    const visibleIds = getVisibleItemIds();
    if (visibleIds.length <= 1) return;
    const currentIndex = visibleIds.indexOf(currentModalItemId);
    const prevIndex = (currentIndex - 1 + visibleIds.length) % visibleIds.length;
    showItemDetails(visibleIds[prevIndex]);
}

function closeModal() {
    modal.classList.add('hidden');
    modalContent.innerHTML = ''; 
    document.body.style.overflow = 'auto';
    currentModalItemId = null;
}

// --- SCROLL TO TOP ---
function handleScroll() {
    if (scrollToTopBtn) {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.remove('opacity-0', 'invisible');
        } else {
            scrollToTopBtn.classList.add('opacity-0', 'invisible');
        }
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


// --- EVENT LISTENERS ---
window.addEventListener('scroll', handleScroll);
window.addEventListener('keydown', (e) => {
    if (modal.classList.contains('hidden')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') showNextItem();
    if (e.key === 'ArrowLeft') showPreviousItem();
});
modal.addEventListener('click', (e) => {
    if(e.target === modal) closeModal();
});

randomBtns.forEach(btn => {
    if (btn) {
        btn.addEventListener('click', () => {
            const randomIndex = Math.floor(Math.random() * portfolioItems.length);
            const randomItem = portfolioItems[randomIndex];
            showItemDetails(randomItem.id);
        });
    }
});

if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
}

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    if (videoGallery || graphicGallery) {
        renderGalleries();
        const gallery = document.querySelector('.gallery-grid');
        applyFilters(gallery);
    }
    if (document.getElementById('search-gallery')) {
        renderSearchResults();
    }
    populateSuggestions();
});

