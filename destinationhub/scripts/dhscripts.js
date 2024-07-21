const allImages = {
    arizona: [
        { src: 'images/az-1.jpeg', headline: 'Grand Canyon National Park', description: 'One of the Seven Natural Wonders of the World.' },
        { src: 'images/az-2.jpg', headline: 'Monument Valley', description: 'Towering sandstone formations, backdrop for many Western movies.' },
        { src: 'images/az-3.jpg', headline: 'Antelope Canyon', description: 'Beautiful swirling sandstone formations and light beams at midday.' },
        { src: 'images/az-4.jpg', headline: 'Horseshoe Bend', description: 'Horseshoe-shaped bend in the Colorado River, popular for photography.' },
        { src: 'images/az-5.png', headline: 'Sedona', description: 'Red rock formations, spiritual vortexes, popular for hiking, biking, and jeep tours.' },
        { src: 'images/az-6.jpg', headline: 'Mogollon Rim', description: 'Escarpment separating the Colorado Plateau and Mogollon Highlands, popular for camping, hiking, and fishing.' },
        { src: 'images/az-7.jpg', headline: 'Saguaro National Park', description: 'Park dedicated to the protection of the saguaro cactus.' },
        { src: 'images/az-8.jpg', headline: 'Chiricahua National Monument', description: 'Unique rock formations, balancing rocks and hoodoos, popular for hiking and rock climbing.' },
        { src: 'images/az-9.jpg', headline: 'Petrified Forest National Park', description: 'Park known for its petrified trees and other geologic features.' },
        { src: 'images/az-10.jpg', headline: 'Walnut Canyon National Monument', description: 'Park known for its cliff dwellings built by the Sinagua people.' },
    ],
    idaho: [
        { src: 'images/id-1.jpg', headline: 'Shoshone Falls', description: 'Nicknamed "The Niagara of the West", these powerful waterfalls offer a spectacular natural wonder.' },
        { src: 'images/id-2.jpg', headline: 'Sawtooth National Recreation Area', description: 'Stunning mountain scenery with jagged peaks, pristine lakes, and opportunities for hiking, fishing, and camping.' },
        { src: 'images/id-3.jpg', headline: 'Craters of the Moon National Monument & Preserve', description: 'A volcanic landscape with lava caves, cinder cones, and spatter cones, offering a glimpse into a unique geological formation.' },
        { src: 'images/id-4.jpg', headline: 'Hells Canyon National Recreation Area', description: 'The deepest river gorge in North America, offering whitewater rafting, hiking, and stunning scenery.' },
        { src: 'images/id-5.jpg', headline: 'Boise', description: 'Idaho\'s capital city with a vibrant downtown, lively arts scene, and easy access to outdoor recreation.' },
        { src: 'images/id-6.png', headline: 'Coeur d\'Alene', description: 'A beautiful resort town on Lake Coeur d\'Alene, offering scenic cruises, hiking trails, and a charming downtown area.' },
        { src: 'images/id-7.jpg', headline: 'World Center for Birds of Prey', description: 'A unique facility dedicated to raptor conservation and rehabilitation, offering visitors the chance to see eagles, hawks, falcons, and owls.' },
        { src: 'images/id-8.jpg', headline: 'Whitewater Rafting on the Salmon River', description: 'An exhilarating adventure through a scenic canyon with rapids ranging from mild to wild.' },
        { src: 'images/id-9.jpg', headline: 'Silverwood Theme Park', description: 'A popular amusement park with roller coasters, water rides, shows, and live entertainment, perfect for a fun-filled day with family.' },
        { src: 'images/id-10.jpg', headline: 'Snake River Canyon', description: 'A vast canyon carved by the Snake River, offering dramatic views and opportunities for hiking, camping, and whitewater rafting.' },
    ],
    utah: [
        { src: 'images/ut-1.jpg', headline: 'Arches National Park', description: 'Home to over 2,000 natural sandstone arches.' },
        { src: 'images/ut-2.avif', headline: 'Canyonlands National Park', description: 'Vast area of canyons, mesas, buttes, and spires.' },
        { src: 'images/ut-3.jpg', headline: 'Capitol Reef National Park', description: 'Colorful sandstone cliffs and canyons, archaeological sites.' },
        { src: 'images/ut-4.jpeg', headline: 'Bryce Canyon National Park', description: 'Famous for hoodoos, tall, thin rock spires.' },
        { src: 'images/ut-5.jpg', headline: 'Zion National Park', description: 'Towering cliffs, waterfalls, and slot canyons.' },
        { src: 'images/ut-6.jpg', headline: 'Monument Valley', description: 'Towering sandstone formations, backdrop for many Western movies.' }, 
        { src: 'images/ut-7.jpeg', headline: 'Natural Bridges National Monument', description: 'Park known for natural bridges: Kachina, Sipapu, Arched Rock.' },
        { src: 'images/ut-8.jpg', headline: 'Hovenweep National Monument', description: 'Ancestral Puebloan cliff dwellings built between 600 and 1300 AD.' },
        { src: 'images/ut-9.jpg', headline: 'Timpanogos Cave National Monument', description: 'Cave system accessible only by guided tour.' },
        { src: 'images/ut-10.jpg', headline: 'The Great Salt Lake', description: 'Largest saltwater lake in the Western Hemisphere, allows floating.' },
    ],
    washington: [
        { src: 'images/wa-1.jpg', headline: 'Mount Rainier National Park', description: 'Home to the iconic Mount Rainier volcano, this park offers stunning scenery, hiking trails, and wildlife viewing.' },
        { src: 'images/wa-2.jpg', headline: 'Seattle', description: 'Washington\'s largest city with a vibrant culture, famous for the Space Needle, Pike Place Market, and scenic waterfront.' },
        { src: 'images/wa-3.avif', headline: 'Olympic National Park', description: 'Diverse landscapes with glacier-capped mountains, temperate rainforests, and dramatic coastline.' },
        { src: 'images/wa-4.avif', headline: 'San Juan Islands', description: 'An archipelago in the Salish Sea, known for its natural beauty, charming towns, and opportunities for whale watching and kayaking.' },
        { src: 'images/wa-5.jpg', headline: 'North Cascades National Park', description: 'Rugged mountains, glaciers, and pristine lakes for hiking, camping, and backpacking.' },
        { src: 'images/wa-6.jpg', headline: 'Leavenworth', description: 'A Bavarian-themed village in the Cascade Mountains, offering a unique atmosphere, festivals, and outdoor activities.' },
        { src: 'images/wa-7.jpeg', headline: 'Snoqualmie Falls', description: 'A powerful waterfall cascading 270 feet, easily accessible for a scenic day trip.' },
        { src: 'images/wa-8.jpg', headline: 'Deception Pass State Park', description: 'Located on Whidbey Island, this park features dramatic cliffs, beaches, and opportunities for camping and kayaking.' },
        { src: 'images/wa-9.jpg', headline: 'Port Townsend Victorian Seaport', description: 'A charming town with a historic waterfront district, offering shops, restaurants, and a glimpse into the Victorian era.' },
        { src: 'images/wa-10.jpg', headline: 'Palouse Falls State Park', description: 'Unique waterfalls cascading over a basalt cliff into the Palouse River.' },
    ]
};

document.addEventListener('DOMContentLoaded', function() {
    var menubutton = document.getElementById('threebars');
    var menu = document.querySelector('.navibar');
    
    menubutton.addEventListener('click', function() {
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }
    });

    let state = document.body.dataset.state;
    let images = allImages[state] || [];
    let currentIndex = 0;
    const galleryImage = document.getElementById('gallery-image');
    const imageHeadline = document.getElementById('image-headline');
    const imageDescription = document.getElementById('image-description');

    function showImage(index) {
        galleryImage.classList.add('hidden');
        setTimeout(() => {
            galleryImage.src = images[index].src;
            imageHeadline.textContent = images[index].headline;
            imageDescription.textContent = images[index].description;
            galleryImage.classList.remove('hidden');
        }, 500);
    }

    showImage(currentIndex);

    window.prevImage = function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
        scrollToBottom();
    }

    window.nextImage = function() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
        scrollToBottom();
    }


    if (document.body.dataset.scroll === 'auto') {
        scrollToBottom();
    }
});

