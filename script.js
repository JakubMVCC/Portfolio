const portfolioItems = [
    {
        id: 1,
        type: 'video',
        title: 'Restore Masters | Peachy Airport Parking',
        year: 2024,
        youtubeId: 'fuluZ9Vc26A',
        imageUrl: 'https://i.imgur.com/ML4yFnt.jpeg',
        tags: ['Adobe Illustrator', 'Adobe Premiere Pro', 'Commercial', 'Drone Footage', 'Informative', 'Short Form', 'Talking Head', 'Voiceover'],
        description: "This project was a video I edited for a client showcasing a massive commercial roofing project at Peachy Airport Parking in Atlanta, Georgia. My role was to take the raw footage and craft a clear, compelling narrative that highlighted the client's expertise and unique solution to a severe hail damage problem. I structured the edit to tell a complete story of the initial damage, what repairs were made, and the successful outcome. The final piece features a strong testimonial, effectively building trust and demonstrating the value Restore Masters provides."
    },
    {
        id: 2,
        type: 'video',
        title: 'My 20 Years with The Legend of Zelda: Wind Waker',
        year: 2022,
        youtubeId: 'eQVPwUhf69s',
        imageUrl: 'https://i.imgur.com/XdH6Dje.png',
        tags: ['Adobe Illustrator', 'Adobe Premiere Pro', 'Documentary', 'Interview', 'Long Form', 'Motion Graphics', 'Scriptwriting', 'Storyboarding', 'Talking Head', 'Visual Effects'],
        description: "Here is a Documentary style video I wrote to celebrate one of my favorite video games of all time. Which showcases a variety of editing techniques to tell a story that spans over 20 years now."
    },
    {
        id: 3,
        type: 'video',
        title: 'C2E2 is AWESOME | Chicago Comic and Entertainment Expo 2025',
        year: 2025,
        youtubeId: 'EivIBhXsNj4',
        imageUrl: 'https://i.imgur.com/t3jaWVb.png',
        tags: ['Adobe Premiere Pro', 'Informative', 'Long Form', 'Motion Graphics', 'Talking Head', 'UnScripted', 'Vlog', 'Voiceover'],
        description: "This video showcases my ability to record footage on location and edit together a story which brings the viewers on a journey with me through this event."
    },
    {
        id: 4,
        type: 'video',
        title: 'I 3D Printed a Metroid Wedding Helmet',
        year: 2025,
        youtubeId: 'vj73JvlAujY',
        imageUrl: 'https://i.imgur.com/Ps00pWo.png',
        tags: ['Adobe Premiere Pro', 'Informative', 'Long Form', 'Scriptwriting', 'Talking Head', 'Tutorial', 'Voiceover'],
        description: "This video compiles together over 2 months of footage while also telling the story of how I created a 3D Printed Helmet as a gift for my friends weeding. Organization is key when working on such a large project."
    },
    {
        id: 5,
        type: 'video',
        title: 'Legend of Zelda: Tears of the Kingdom (First Thoughts)',
        year: 2023,
        youtubeId: 'nrCRu7LfVbU',
        imageUrl: 'https://i.imgur.com/zVbObGy.png',
        tags: ['Adobe Premiere Pro', 'Informative', 'Long Form', 'Motion Graphics', 'Scriptwriting', 'Talking Head', 'Voiceover'],
        description: "This is another video that shows my skills at recording unscripted and being to edit that footage in a way that creates a compelling story from start to finish about my experience with the latest Legend of Zelda game."
    },
    {
        id: 6,
        type: 'video',
        title: 'How I Stole A GameBoy Color',
        year: 2016,
        youtubeId: 'e5vHKLWVrxQ',
        imageUrl: 'https://i.imgur.com/ZM1EaOL.png',
        tags: ['Adobe Illustrator', 'Adobe Premiere Pro', 'After Effects', 'Animation', 'Claymation', 'Motion Graphics', 'Scriptwriting', 'Stop Motion', 'Storyboarding', 'Visual Effects'],
        description: "This video showcases my skills of using different filmmaking techniques such as stop motion animation mixed with live action footage to share a funny story from my childhood. This is also my first video to reach over 1 million views."
    },
    {
        id: 7,
        type: 'video',
        title: 'Crash Bandicoot (PS1) Review',
        year: 2017,
        youtubeId: 'qj1qQZycJcM',
        imageUrl: 'https://i.imgur.com/ut5lF5H.png',
        tags: ['Adobe Premiere Pro', 'Informative', 'Long Form', 'Motion Graphics', 'Review', 'Scriptwriting', 'Storyboarding', 'Talking Head', 'Visual Effects'],
        description: "In this video, I show my skills of reviewing one of my favorite games. For this video, I recorded all of my own footage, from the gameplay to the live action parts. I then spent over 1 month writing a storyboard with a script to edit together what you see here. I even created my own wearable wooden mask just for this video."
    },
    {
        id: 8,
        type: 'video',
        title: 'Splatter Head | A Claymation Short Film',
        year: 2024,
        localVideo: 'extra/SplatterHead.mp4',
        imageUrl: 'https://i.imgur.com/0vGZaBi.png',
        tags: ['Adobe Illustrator', 'Adobe Premiere Pro', 'After Effects', 'Animation', 'Claymation', 'Motion Graphics', 'Stop Motion', 'Storyboarding', 'Visual Effects'],
        description: "Even though still unfinished, Splatter Head showcases my skills in storytelling with a variety of different formats such as Stop Motion and Animation. Originally created for my Premiere Pro class Final Project at Moraine but has since been used as my Finals for my Adobe Creative Suite, Website Development, and After Effects classes too."
    },
    {
        id: 9,
        type: 'video',
        title: "Should you pay $80 for Sonic's Encyclospeedia?",
        year: 2021,
        youtubeId: 'cxyekweh_wQ',
        imageUrl: 'https://i.imgur.com/MBX86N1.png',
        tags: ['Adobe Premiere Pro', 'Documentary', 'Long Form', 'Scriptwriting', 'Talking Head'],
        description: "This video showcases my ability to edit unscripted footage together to tell a story for an interesting review. It also features a variety of B-Roll, Talking Head shots, as well as Voice Overs."
    },
    {
        id: 10,
        type: 'video',
        title: 'Why I Love The Metroid Franchise',
        year: 2016,
        youtubeId: 'k873l9PK2yw',
        imageUrl: 'https://i.imgur.com/AM3Fsmd.png',
        tags: ['Adobe Premiere Pro', 'Informative', 'Motion Graphics', 'Scriptwriting', 'Talking Head', 'Visual Effects', 'Voiceover'],
        description: "This video shows that even almost 10 years ago now, I was able to hone my timing and pacing when it came to creating long form content. I always put the story first to keep the viewers engaged no matter what the topic is about. There are transitions, visual effects, B-Roll, gameplay footage, and everything in between to get my point across. Most of my scripted work has evolved from this style of editing throughout the years."
    },
    {
        id: 11,
        type: 'video',
        title: '10 Fishing Tips for Big the Cat',
        year: 2022,
        youtubeId: 'dZMKci4t8So',
        imageUrl: 'https://i.ytimg.com/vi/dZMKci4t8So/maxresdefault.jpg',
        tags: ['Adobe Premiere Pro', 'Informative', 'Long Form', 'Scriptwriting', 'Tutorial', 'Visual Effects', 'Voiceover'],
        description: "This video shows the extensive work I put into researching any topic, even something as random as a Fishing Tutorial for the Sonic Adventures video game. The editing is tight with plenty of information being shared throughout the entire 10 minutes. With my experience, I know how to tell when every graphic, text, sound effect, clip, and footage has a reason or purpose to be in the final render or to be edited out."
    },
    {
        id: 12,
        type: 'video',
        title: 'How I Dangerously Carved this Pumpkin',
        year: 2021,
        youtubeId: 'piwb0cfirks',
        imageUrl: 'https://i.imgur.com/iybx3sY.png',
        tags: ['Adobe Premiere Pro', 'Informative', 'Long Form', 'Scriptwriting', 'Talking Head', 'Tutorial', 'Voiceover'],
        description: "This video is another example of how I record footage and use that to shape together a story, such as carving a pumpkin for Halloween. Even before I hit start on the camera, I always know in my mind exactly why I'm recording a specific scene and how it will be used in the final edit."
    },
    {
        id: 13,
        type: 'video',
        title: 'The Switch 2 is AWESOME, but… EXPENSIVE!',
        year: 2025,
        youtubeId: 'LJgT_2KHfx8',
        imageUrl: 'https://i.imgur.com/g0yhLTJ.png',
        tags: ['Adobe Premiere Pro', 'Informative', 'Long Form', 'Talking Head', 'UnScripted'],
        description: "This video is an example of my skills being in front of the camera and \"reporting\" on a topic, similar to how journalists would on the News. I'm very comfortable either recording others or being recorded myself and creating content that informs the viewers about any subject. I always use relevant footage or graphics throughout my edits, even on long form content."
    },
    {
        id: 14,
        type: 'video',
        title: 'First Thoughts | Xenoblade Chronicles X: Definitive Edition',
        year: 2025,
        youtubeId: 'D-yuPDeXjYs',
        imageUrl: 'https://i.imgur.com/CHUor4B.png',
        tags: ['Adobe Premiere Pro', 'Informative', 'Long Form', 'Talking Head', 'UnScripted'],
        description: "This video shows how passionate I can get when speaking about anything or being in front of the camera and then using my editing skills to translate that into an enjoyable video. I can easily edit any type of video, regardless of genre or topic."
    },
    {
        id: 15,
        type: 'video',
        title: "Split Fiction | Games You Should 'Touts Play",
        year: 2025,
        youtubeId: 'dkA8F1uFlLc',
        imageUrl: 'https://i.imgur.com/qZOsvTQ.png',
        tags: ['Adobe Premiere Pro', 'Informative', 'Long Form', 'Review', 'Scriptwriting', 'Talking Head', 'Voiceover'],
        description: "I recorded this video in one take, about an hour before I had to go onto an Amtrak Train. So this video showcases that I can easily work under fast paced and stressful environments too while still being able to remain on topic. Just like most of my videos, I use a huge amount of my own B-Roll and footage to enhance the video in anyway I feel is right for the edit."
    },
    {
        id: 16,
        type: 'video',
        title: '3D Air Balloon in Blender | Animating a Multimedia Presentation',
        year: 2025,
        youtubeId: 'Mcaw7OPcs1M',
        imageUrl: 'https://i.imgur.com/VjubQVi.png',
        tags: ['Adobe Premiere Pro', 'After Effects', 'Animation', 'Short Form', 'Visual Effects'],
        description: "This video showcases my skills using the 3D Software Blender to recreate this school assignment in my own creative way. I spent an entire week troubleshooting until I was finally able to get the video and program to work exactly how I wanted. That goes for every video I work on too, I always go above and beyond."
    },
    {
        id: 17,
        type: 'video',
        title: 'Puppet Tool Animation | Adobe After Effects',
        year: 2025,
        youtubeId: 'ZmJNjt5VtEU',
        imageUrl: 'https://i.imgur.com/jBdSoek.png',
        tags: ['Adobe Illustrator', 'Adobe Premiere Pro', 'After Effects', 'Animation', 'Motion Graphics', 'Visual Effects'],
        description: "This video showcases my graphic design and visual effect skills. I created every movable part manually by myself in Adobe Illustrator. Afterwards, I meticulously animated each action and movement in Adobe After Effects to make this short video come to life for my school assignment. Did I have to put that much effort into a 20 second video? No, but I did because it made the final project so much better and memorable."
    },
    {
        id: 18,
        type: 'video',
        title: 'DIY Eggman Costume & Attending the Sonic Symphony',
        year: 2023,
        youtubeId: 'Kowi_FQum2A',
        imageUrl: 'https://i.imgur.com/2GBpAnM.png',
        tags: ['Adobe Premiere Pro', 'Long Form', 'UnScripted', 'Vlog'],
        description: "Here is an example of me recording footage as a \"vlog\" or for archival reasons. In this video, I have footage of myself creating a Halloween costume for a video game character before going to the Sonic Symphony in Downtown. This showcases my ability to record and edit extremely long form content. I record everything that I do no matter what the occasion."
    },
    {
        id: 19,
        type: 'video',
        title: 'The Chase Down',
        year: 2011,
        youtubeId: 'bKs8PU376t8',
        imageUrl: '',
        tags: ['Adobe Premiere Pro', 'Scriptwriting', 'Short Form', 'Skit', 'Storyboarding'],
        description: "The Chase Down was one of my first major video projects, where I handled nearly every aspect of production from concept to completion. The process started with writing a full storyboard and creating all the props, including hand-made cardboard weapons. I also designed the villain's outfit, filmed all the action, and then taught myself how to edit in Adobe Premiere Pro, where I created the custom muzzle flare effects to complete the scene."
    },
    {
        id: 20,
        type: 'video',
        title: 'How To Catch A Thief',
        year: 2010,
        youtubeId: 'mnlqmapm4-8',
        imageUrl: '',
        tags: ['Adobe Premiere Pro', 'After Effects', 'Short Form', 'Skit', 'Storyboarding'],
        description: "This project was another of my early videos, where I focused on blending action with a comedic story. Following a detailed storyboard, I got creative with props, using a guitar as a weapon and created Raul (my handmade stunt dummy), which I made by duct taping myself and stuffing the shell with old homework. It was also a personal milestone as one of the first times I acted and spoke on camera, all tied together with intentionally cheesy special effects to enhance the humor."
    },
    {
        id: 21,
        type: 'graphic',
        title: '"Paps\' Birthday" Digital Wallpaper',
        year: 2018,
        imageUrl: 'https://i.imgur.com/vvictNe.png',
        tags: ['Adobe Photoshop', 'Character Design', 'Digital Illustration', 'Wallpaper Design'],
        description: "This highly detailed and personalized wallpaper was created as a birthday gift for my brother. The entire piece was meticulously illustrated in Adobe Photoshop over a year, totaling more than 100 hours of work. Every line and color was drawn using only a standard PC mouse, making this a significant demonstration of patience and digital illustration skill."
    },
    {
        id: 22,
        type: 'graphic',
        title: 'Hawaii Island Paradise Postcard',
        year: 2025,
        imageUrl: 'https://i.imgur.com/hwxy67w.png',
        tags: ['Adobe Photoshop', 'Compositing', 'Digital Collage', 'Graphic Design', 'Postcard Design'],
        description: "This Hawaiian postcard is a digital composite created in Adobe Photoshop. The project involved skillfully layering multiple source images, including the pineapple, hibiscus flowers, and beach scene. Techniques such as layer masking, color correction, and custom typography with text effects were used to blend the separate elements into a cohesive and vibrant final piece."
    },
    {
        id: 23,
        type: 'graphic',
        title: 'Kuzco Double Exposure Poster',
        year: 2025,
        imageUrl: 'https://i.imgur.com/AcAP70k.png',
        tags: ['Adobe Illustrator', 'Adobe Photoshop', 'Double Exposure', 'Fan Art', 'Poster Design'],
        description: "This poster, created as a final project, combines vector illustration from Illustrator with compositing techniques in Photoshop. The primary effect was achieved by using Kuzco's silhouette as a clipping mask, a technique where an object's shape masks other artwork so only areas within the shape are visible. Multiple landscape elements were then layered within the mask to build a scene with depth and narrative."
    },
    {
        id: 24,
        type: 'graphic',
        title: 'Pacha Double Exposure Poster',
        year: 2025,
        imageUrl: 'https://i.imgur.com/BhMOsoj.png',
        tags: ['Adobe Illustrator', 'Adobe Photoshop', 'Double Exposure', 'Fan Art', 'Poster Design'],
        description: "This is the second piece in my final project series, combining vector assets from Illustrator with Photoshop for the final composition. The main effect uses Pacha's silhouette as a clipping mask, which is an object whose shape masks other artwork so that only areas within it are visible. Various scenes and characters from the film were then layered within the silhouette to create a cohesive narrative with a distinct color palette."
    },
    {
        id: 25,
        type: 'graphic',
        title: 'Learn to Cook Flyer Design',
        year: 2025,
        imageUrl: 'https://i.imgur.com/lNo2PrE.png',
        tags: ['Adobe Illustrator', 'Flyer Design', 'Layout', 'Typographic Design', 'Vector Illustration'],
        description: "This flyer was created in Adobe Illustrator, focusing on the typographic design techniques. The main headlines were created using point type and styled with an envelope warp, while the body copy was imported from a text file and formatted into columns using area type. Character and paragraph formatting, including fonts, sizes, leading, and spacing, were applied throughout to establish a clear visual hierarchy and professional layout."
    },
    {
        id: 26,
        type: 'graphic',
        title: 'Deku Link Miiverse Illustration',
        year: 2013,
        imageUrl: 'https://i.imgur.com/xPw6FsV.jpeg',
        tags: ['Miiverse Art', 'Pixel Art', 'Fan Art', 'Wii U'],
        description: "This digital illustration of Deku Link from The Legend of Zelda: Majora's Mask was created using the unique and restrictive tools of the Nintendo Wii U Gamepad and its Miiverse application. Every line was drawn by hand on the gamepad's screen, resulting in a distinct pixel art style that reflects the limitations and charm of the platform."
    },
    {
        id: 27,
        type: 'graphic',
        title: 'Stylized Birthday Invitation',
        year: 2025,
        imageUrl: 'https://i.imgur.com/a3C9fBR.png',
        tags: ['Adobe Illustrator', 'Graphic Design', 'Invitation Design', 'Live Effects', 'Typography'],
        description: "For this birthday party invitation, I had fun exploring Adobe Illustrator's creative effects. The text was styled by layering multiple fills and strokes in the Appearance panel to create the custom polka dot and striped patterns. To give the main \"BIRTHDAY PARTY\" text its fun, arched shape, I applied a live Warp effect, and finished the design with other effects like glows and shadows to make the elements pop."
    },
    {
        id: 28,
        type: 'graphic',
        title: 'Alice Cooper "He\'s Back" Miiverse Illustration',
        year: 2014,
        imageUrl: 'https://i.imgur.com/CX7OW68.png',
        tags: ['Miiverse Art', 'Pixel Art', 'Fan Art', 'Wii U'],
        description: "This illustration, featuring rock icon Alice Cooper with the Jason Voorhees mask from Friday the 13th: Part VI, was drawn entirely by hand on a Nintendo Wii U Gamepad. Created within the restrictive pixel art environment of the Miiverse application, the piece captures a detailed likeness using only the platform's basic tools."
    },
    {
        id: 29,
        type: 'graphic',
        title: 'Shenron Miiverse Drawing',
        year: 2014,
        imageUrl: 'https://i.imgur.com/PeaDL7m.jpeg',
        tags: ['Miiverse Art', 'Pixel Art', 'Fan Art', 'Wii U'],
        description: "As a huge Dragon Ball fan, I really wanted to challenge myself by recreating the mighty Shenron. This was drawn entirely by hand on the Wii U Gamepad using the Miiverse app. It was a real test of patience to get all those details right with just the simple pixel tools, but I'm really happy with how the powerful look of the eternal dragon came through."
    },
    {
        id: 30,
        type: 'graphic',
        title: 'Sailor Moon Miiverse Drawing',
        year: 2014,
        imageUrl: 'https://i.imgur.com/7eHNYpf.jpeg',
        tags: ['Miiverse Art', 'Pixel Art', 'Fan Art', 'Wii U'],
        description: "I've always loved the art style of Sailor Moon, so I wanted to see if I could capture Usagi's classic look on the Wii U. This was drawn completely by hand on the gamepad for the Miiverse app. It was a fun challenge to recreate her expressive features and iconic hairstyle using only the simple black and white pixel tools available on the platform."
    },
    {
        id: 31,
        type: 'graphic',
        title: 'A Link Between Worlds Miiverse Drawing',
        year: 2013,
        imageUrl: 'https://i.imgur.com/xJb8Yri.jpeg',
        tags: ['Miiverse Art', 'Pixel Art', 'Fan Art', 'Wii U'],
        description: "As a big Zelda fan, I really enjoyed tackling this piece from A Link Between Worlds. I drew this entirely by hand on the Wii U Gamepad using the Miiverse app's simple tools. It was a fun challenge to recreate the details of Link's gear, like the Master Sword and Hylian Shield, in that classic pixelated style."
    },
    {
        id: 32,
        type: 'graphic',
        title: 'Trek Outdoors Badge',
        year: 2025,
        imageUrl: 'https://i.imgur.com/5tVxUFd.png',
        tags: ['Adobe Illustrator', 'Flat Design', 'Graphic Design', 'Logo Design', 'Vector Illustration'],
        description: "This vector logo was created in Adobe Illustrator by assembling basic shapes to form a complex scene. The bear's body was created from edited rectangles with rounded corners, while the mountains and sun were built using the Polygon and Ellipse tools."
    },
    {
        id: 33,
        type: 'graphic',
        title: 'Bowser & Vegeta | Miiverse Doodle',
        year: 2015,
        imageUrl: 'https://i.imgur.com/nyu8kdb.jpeg',
        tags: ['Miiverse Art', 'Pixel Art', 'Fan Art', 'Wii U'],
        description: "After finally conquering a brutal Super Mario Maker level, I felt like I needed to draw something to celebrate my victory. I was watching a lot of Dragon Ball Z at the time, so the idea to fuse Bowser with Vegeta just made perfect sense to capture that \"Over 9000\" intensity. This was a really fun piece to create entirely by hand on the Wii U Gamepad for Miiverse."
    },
    {
        id: 34,
        type: 'graphic',
        title: 'EarthBound Miiverse Drawing',
        year: 2015,
        imageUrl: 'https://i.imgur.com/cfqq7gw.jpeg',
        tags: ['Miiverse Art', 'Pixel Art', 'Fan Art', 'Wii U'],
        description: "EarthBound is one of my all time favorite games, and I wanted to capture that feeling of victory and friendship from the end of the story. I drew this piece entirely by hand on the Wii U Gamepad using the Miiverse app. Getting all four heroes: Ness, Paula, Jeff, and Poo with the simple pixel art tools, especially adding the color, was a really rewarding challenge."
    },
    {
        id: 35,
        type: 'graphic',
        title: 'Skiing Magazine Cover',
        year: 2025,
        imageUrl: 'https://i.imgur.com/NZUpzrp.png',
        tags: ['Magazine Design', 'Cover Design', 'Typographic Design', 'Clipping Mask'],
        description: "This magazine cover was created in Adobe Photoshop by combining multiple images and typographic elements. The main \"SKIING\" title was made by converting text into a clipping mask, allowing the mountain image to show through. All text and graphic elements were then arranged on separate layers to build a dynamic and professional layout."
    },
    {
        id: 36,
        type: 'graphic',
        title: 'Donkey Kong Digital Illustration',
        year: 2023,
        imageUrl: 'https://i.imgur.com/CtFznfv.jpeg',
        tags: ['Character Art', 'Digital Illustration', 'Drawing Tablet', 'Fan Art', 'Krita'],
        description: "This digital illustration of Nintendo's Donkey Kong was created in Krita using a drawing tablet. The process involved building up the character from a foundational sketch, followed by clean line art and flat color application. Simple shading and highlights were then added to give the character depth and bring the energetic pose to life."
    },
    {
        id: 37,
        type: 'graphic',
        title: 'Mountain Explorer Graphic',
        year: 2025,
        imageUrl: 'https://i.imgur.com/M6BYV16.png',
        tags: ['Adobe Illustrator', 'Graphic Design', 'Symbols', 'T Shirt Design'],
        description: "This \"Mountain Explorer\" illustration was created in Adobe Illustrator with a focus on efficiency and time-saving techniques. Key elements like the trees and birds were converted into symbols, which allowed me to quickly populate the scene with multiple instances. This workflow is great because if I needed to change the original tree design, every copy would instantly update, saving a lot of time."
    },
    {
        id: 38,
        type: 'graphic',
        title: 'Sleepy Cats Cafe Logo',
        year: 2025,
        imageUrl: 'https://i.imgur.com/sIcylNT.png',
        tags: ['Badge Design', 'Logo Design', 'Vector Art'],
        description: "This logo for a cat cafe was created in Adobe Illustrator, focusing on the techniques from the basic drawing tools chapter. The Curvature tool was used to draw the smooth, clean paths for the cat's face and the circular arrows. The decorative details were finished by adding arrowheads to the arrow paths and applying the dashed line feature to create the radial pattern behind the cat."
    },
    {
        id: 39,
        type: 'graphic',
        title: '"Splatter Head" Magazine Cover Design',
        year: 2025,
        imageUrl: 'https://i.imgur.com/1ncjrZL.png',
        tags: ['Adobe Illustrator', 'Adobe Photoshop', 'Cover Design', 'Magazine Design'],
        description: "This magazine cover was the final project for my \"Intro to Adobe Creative Suite\" class, designed using Adobe Photoshop and Illustrator. The composition centers on a photograph of an original character from my own stop-motion claymation film, which was layered with custom typography and graphic elements to emulate a real publication. The final file was meticulously organized with named layers and prepared with professional specifications for high-quality printing."
    },
    {
        id: 40,
        type: 'graphic',
        title: 'Typographic Self Portrait',
        year: 2025,
        imageUrl: 'https://i.imgur.com/Sw1ChM1.png',
        tags: ['Adobe Photoshop', 'Photo Manipulation', 'Typographic Portrait'],
        description: "This self portrait was created in Adobe Photoshop by combining a photograph with typography. To create the effect, I applied a custom layer mask shaped like my portrait to a solid text block, which reveals the letterforms that create the lights and shadows of my face. The final composition contrasts this text based half with the original photograph for a split face design."
    },
    {
        id: 41,
        type: 'graphic',
        title: 'Newport Aquarium Vector Logo',
        year: 2025,
        imageUrl: 'https://i.imgur.com/y5laGox.png',
        tags: ['Adobe Illustrator', 'Graphic Design', 'Logo Design', 'Vector Illustration'],
        description: "I recreated the Newport Aquarium logo as a clean vector graphic in Adobe Illustrator for a class project. The goal was to produce a scalable SVG asset that could be easily imported and animated for a motion graphics assignment in Adobe After Effects."
    },
    {
        id: 42,
        type: 'graphic',
        title: 'Podcast Social Ad Graphic',
        year: 2025,
        imageUrl: 'https://i.imgur.com/TjPZS9D.png',
        tags: ['Adobe Illustrator', 'Flat Design', 'Graphic Design', 'Podcast Art', 'Vector Illustration'],
        description: "This social ad graphic for a podcast was created in Adobe Illustrator, with a focus on transforming and arranging various vector objects into a clean composition. I used tools like the bounding box and the Properties panel to precisely scale, rotate, and position each element, like the microphone and shakers, to build the final layout."
    },
    {
        id: 43,
        type: 'graphic',
        title: 'Silent Hill Postcard Design',
        year: 2025,
        imageUrl: 'https://i.imgur.com/LphAvXC.png',
        tags: ['Adobe Photoshop', 'Fan Art', 'Photo Manipulation', 'Postcard Design'],
        description: "This postcard was designed by compositing multiple elements in Adobe Photoshop. The central \"SILENT HILL\" title was achieved by using the text as a clipping mask, allowing the atmospheric background image to show through the letters. Additional typographic elements and game-specific iconography were then layered and blended into the scene, with various filters and textures applied to create the final gritty, vintage postcard aesthetic."
    },
    {
        id: 44,
        type: 'graphic',
        title: 'Green Energy Illustration',
        year: 2025,
        imageUrl: 'https://i.imgur.com/dVqu45U.png',
        tags: ['Adobe Illustrator', 'Graphic Design', 'Vector Illustration'],
        description: "This \"Green Energy\" illustration was created in Adobe Illustrator, with a focus on creating rich, dynamic color using gradients and blends. I used linear and radial gradients to create the smooth transitions in the sky and rolling hills. To achieve the multi color effect on the cyclist's jersey, I applied a freeform gradient, which allows for a more organic and natural blend of colors within a shape."
    },
    {
        id: 45,
        type: 'graphic',
        title: 'Zelda: The Wind Waker Vector Poster',
        year: 2025,
        imageUrl: 'https://i.imgur.com/NT7SD1w.png',
        tags: ['Adobe Illustrator', 'Fan Art', 'Poster Design', 'Vector Illustration'],
        description: "This poster is a complete vector recreation of art from The Legend of Zelda: The Wind Waker, created entirely in Adobe Illustrator. Each element was meticulously redrawn, one line at a time, using vector drawing tools like the Pen tool to capture the game's iconic cel-shaded art style. The final result is a clean, scalable illustration that honors the original design while showcasing precise vector pathing skills."
    },
    {
        id: 46,
        type: 'graphic',
        title: 'Photoshop Textbook Cover Design 1',
        year: 2025,
        imageUrl: 'https://i.imgur.com/4Zir7n5.png',
        tags: ['Adobe Photoshop', 'Compositing', 'Graphic Design', 'Layout'],
        description: "This project involved redesigning the cover for an Adobe Photoshop textbook, created entirely within Photoshop. The central visual was developed by compositing a dramatic sunset with a silhouetted landscape to establish a strong focal point. All required typographic and branding elements were then integrated into the layout, and the final file was prepared to meet commercial printing specifications."
    },
    {
        id: 47,
        type: 'graphic',
        title: 'Self Portrait Composite: Egypt',
        year: 2025,
        imageUrl: 'https://i.imgur.com/coTgjHY.jpeg',
        tags: ['Compositing', 'Photo Manipulation', 'Self Portrait'],
        description: "This self portrait composite was created in Adobe Photoshop by skillfully blending two separate images. I first isolated my portrait from its original background using the Select and Mask workspace to create a precise layer mask. The portrait was then composited into the new background, with careful adjustments to color and lighting to ensure the final image was seamless and believable."
    },
    {
        id: 48,
        type: 'graphic',
        title: "Octopus's Garden Typographic Portrait",
        year: 2025,
        imageUrl: 'https://i.imgur.com/EcxN5QG.png',
        tags: ['Adobe Illustrator', 'Graphic Design', 'Text Art', 'Typography', 'Vector Illustration'],
        description: "This intricate typographic portrait of an octopus was created in Adobe Illustrator using lyrics from The Beatles' song \"Octopus's Garden\" as the primary visual element. Each section of the creature was drawn as a vector shape, which was then filled with text using the Area Type tool to construct the final image. The result is a complex illustration where the song's lyrics literally form the subject."
    },
    {
        id: 49,
        type: 'graphic',
        title: '"Shrek 2" Script Portrait',
        year: 2025,
        imageUrl: 'https://i.imgur.com/dlz5rtF.png',
        tags: ['Typographic Portrait', 'Text Art', 'Photo Manipulation', 'Fan Art'],
        description: "This typographic portrait of Shrek and Donkey was created in Adobe Photoshop using the entire script from the film Shrek 2. The text was applied over a silhouette of the characters and manipulated with a Displacement Map to make the words conform to their facial features. A layer mask was then used to separate the characters from the background, resulting in a detailed image built entirely from typography."
    },
    {
        id: 50,
        type: 'graphic',
        title: '"Bond 007" Stylized Self Portrait',
        year: 2025,
        imageUrl: 'https://i.imgur.com/X4G2Amb.png',
        tags: ['Self Portrait', 'Poster Design', 'Graphic Design', 'Stylized Portrait'],
        description: "This self portrait was created in Adobe Photoshop, drawing inspiration from the iconic graphic style of Shepard Fairey's \"Hope\" poster. I transformed a photograph by applying the Posterize adjustment to reduce it to a limited, high contrast color palette. The final piece merges this stylized portraiture with bold typography to create a unique James Bond themed design."
    },
    {
        id: 51,
        type: 'graphic',
        title: 'DJ Professor K Digital Painting',
        year: 2025,
        imageUrl: 'https://i.imgur.com/dsSr44g.png',
        tags: ['Digital Painting', 'Fan Art', 'Character Art'],
        description: "This digital painting of DJ Professor K was created in Adobe Photoshop, applying the principles of digital brushwork to a stylized, high energy illustration. Using custom brush settings, I created expressive, jagged line art and then layered flat colors to capture the iconic aesthetic of Jet Set Radio Future."
    },
    {
        id: 52,
        type: 'graphic',
        title: '"The Legend of Zelda" Stylized Movie Poster',
        year: 2025,
        imageUrl: 'https://i.imgur.com/I08MntU.png',
        tags: ['Poster Design', 'Compositing', 'Fan Art', 'Graphic Design'],
        description: "This movie poster concept for The Legend of Zelda was created in Adobe Photoshop, integrating a self portrait to meet the project's requirements. The high contrast, graphic look was achieved using tonal adjustments to create a posterized effect, and the portrait was isolated from its original background with a layer mask. Finally, all elements like including the logo, Triforce, and castle were composited on separate layers to build the dramatic, high impact final design."
    },
    {
        id: 53,
        type: 'graphic',
        title: 'Photo Restoration & Colorization',
        year: 2025,
        imageUrl: 'https://i.imgur.com/xrhRPMz.png',
        tags: ['Photo Restoration', 'Retouching', 'Colorization'],
        description: "This project involved restoring a damaged, vintage black and white photograph and bringing it to life with color using Adobe Photoshop. I used retouching tools like the Remove tool to repair the scratch on the original image , and then applied the Colorize Neural Filter to add realistic skin tones, hair, and clothing color."
    },
    {
        id: 54,
        type: 'graphic',
        title: 'Photoshop Textbook Cover Design 2',
        year: 2025,
        imageUrl: 'https://i.imgur.com/O8zxdwD.png',
        tags: ['Book Cover Design', 'Graphic Design', 'Layout Design', 'Compositing'],
        description: "This is an alternative cover design for an Adobe Photoshop textbook, created to meet commercial printing specifications. The composition is built around a dramatic background illustration, which is overlaid with a strong, angled graphic element to house the title and create a modern layout. All required typographic and branding elements were carefully positioned on separate layers to complete the professional design."
    },
    {
        id: 55,
        type: 'graphic',
        title: '"Shrek" Script Portrait',
        year: 2025,
        imageUrl: 'https://i.imgur.com/SYos12X.png',
        tags: ['Typographic Portrait', 'Text Art', 'Photo Manipulation', 'Fan Art'],
        description: "This typographic portrait was created in Adobe Photoshop by using the entire script from the movie Shrek. To form the image, the text was warped to the character's features using a Displacement Map, and then isolated from the background with a layer mask."
    },
    {
        id: 56,
        type: 'graphic',
        title: 'Sephiroth Miiverse Drawing',
        year: 2014,
        imageUrl: 'https://i.imgur.com/InOVwuM.jpeg',
        tags: ['Miiverse Art', 'Pixel Art', 'Fan Art', 'Wii U'],
        description: "As my favorite villain and the character that got me into RPGs, I had to do a tribute to Sephiroth. I created this portrait entirely by hand on the Wii U Gamepad using the Miiverse application. It was a great challenge trying to capture his intimidating presence and iconic flowing hair with the simple black and white pixel art tools of the platform."
    },
    {
        id: 57,
        type: 'graphic',
        title: 'Bobobo-bo Bo-bobo Miiverse Drawing',
        year: 2014,
        imageUrl: 'https://i.imgur.com/XnPMgOz.jpeg',
        tags: ['Miiverse Art', 'Pixel Art', 'Fan Art', 'Wii U'],
        description: "Watching Toonami growing up, Bobobo-bo Bo-bobo was one of those wild shows I'll never forget. I wanted to capture his iconic look, so I drew this piece completely by hand on the Wii U Gamepad using the Miiverse app. Getting his signature nose hairs and stern expression right with just the gamepad was difficult."
    },
    {
        id: 58,
        type: 'graphic',
        title: 'Mega Man X & Zero Miiverse Drawing',
        year: 2014,
        imageUrl: 'https://i.imgur.com/IyTTjiv.jpeg',
        tags: ['Miiverse Art', 'Pixel Art', 'Fan Art', 'Wii U'],
        description: "I'm a huge fan of the Mega Man X series, and I really wanted to capture the partnership between X and Zero. This piece was drawn entirely by hand on the Wii U Gamepad using the Miiverse app."
    },
    {
        id: 59,
        type: 'graphic',
        title: 'Link & Epona (Ocarina of Time) Miiverse Doodle',
        year: 2013,
        imageUrl: 'https://i.imgur.com/qmwOoel.jpeg',
        tags: ['Miiverse Art', 'Pixel Art', 'Fan Art', 'Wii U'],
        description: "Ocarina of Time is such a legendary game, and I wanted to capture that classic feeling of adventure with Link and Epona. I drew this scene entirely by hand on the Wii U Gamepad for the Miiverse app."
    },
    {
        id: 60,
        type: 'graphic',
        title: 'Helmaroc King (Wind Waker) Miiverse Doodle',
        year: 2014,
        imageUrl: 'https://i.imgur.com/WeKEiSl.jpeg',
        tags: ['Miiverse Art', 'Pixel Art', 'Fan Art', 'Wii U'],
        description: "The Wind Waker has such a unique art style, and I wanted to do justice to the imposing Helmaroc King. I drew this completely by hand on the Wii U Gamepad within the Miiverse app. Capturing the detail of its mask and the texture of its feathers was a fantastic challenge, and a lot of fun to work on."
    },
    {
        id: 61,
        type: 'graphic',
        title: 'See You Next Mission: A Miiverse Farewell',
        year: 2017,
        imageUrl: 'https://i.imgur.com/9TlCaWk.png',
        tags: ['Miiverse Art', 'Pixel Art', 'Fan Art', 'Wii U'],
        description: "This piece was my final drawing for Miiverse before Nintendo shut the service down in 2017. Over four years, I logged more than 600 hours drawing on my Wii U Gamepad, and I wanted to create something special to say goodbye. This mashup of Tingle and Samus Aran's Varia Suit represents all the fun and creativity I had on the platform, and it's a tribute to the wonderful community we lost."
    },
    {
        id: 62,
        type: 'graphic',
        title: 'Zora (Majora\'s Mask) Miiverse Doodle',
        year: 2013,
        imageUrl: 'https://i.imgur.com/O66bBjl.jpeg',
        tags: ['Miiverse Art', 'Pixel Art', 'Fan Art', 'Wii U'],
        description: "The Zora form in Majora's Mask has such a sleek and cool design. I wanted to capture that look in this piece, which I drew completely by hand on the Wii U Gamepad for the Miiverse app."
    },
    {
        id: 63,
        type: 'graphic',
        title: 'Wobbuffet (Pokemon) Miiverse Doodle',
        year: 2014,
        imageUrl: 'https://i.imgur.com/IujLgT3.jpeg',
        tags: ['Miiverse Art', 'Pixel Art', 'Fan Art', 'Wii U'],
        description: "I just had to draw one of Pokémon's funniest characters, Wobbuffet. I created this piece entirely by hand on the Wii U Gamepad for Miiverse."
    },
    {
        id: 64,
        type: 'graphic',
        title: 'Mojo Jojo (PowerPuff Girls) Miiverse Doodle',
        year: 2014,
        imageUrl: 'https://i.imgur.com/PTLuq7J.jpeg',
        tags: ['Miiverse Art', 'Pixel Art', 'Fan Art', 'Wii U'],
        description: "Growing up with The PowerPuff Girls, I couldn't resist drawing the iconic villain Mojo Jojo. This was all done by hand on the Wii U Gamepad for the Miiverse app. I had a blast trying to capture his menacing glare and oversized brain with just the simple drawing tools."
    },
    {
        id: 65,
        type: 'graphic',
        title: 'Ultros (Final Fantasy VI) Miiverse Doodle',
        year: 2014,
        imageUrl: 'https://i.imgur.com/uPFtTnp.jpeg',
        tags: ['Miiverse Art', 'Pixel Art', 'Fan Art', 'Wii U'],
        description: "I've always loved the villains from Final Fantasy VI, and the goofy but persistent Ultros is a classic. This was all drawn by hand on the Wii U Gamepad for the Miiverse app. It was a lot of fun trying to capture his personality and the detail of his tentacles using the gamepad."
    },
    {
        id: 66,
        type: 'graphic',
        title: 'Darbus (Twilight Princess) Miiverse Doodle',
        year: 2013,
        imageUrl: 'https://i.imgur.com/sRTBfPi.jpeg',
        tags: ['Miiverse Art', 'Pixel Art', 'Fan Art', 'Wii U'],
        description: "I've always been a fan of the Gorons, and the transformed Darbus from Twilight Princess has such a cool, intimidating design. This was drawn completely by hand on the Wii U's Gamepad for the Miiverse community."
    },
    {
        id: 67,
        type: 'graphic',
        title: 'Ganon (Twilight Princess) Miiverse Doodle',
        year: 2013,
        imageUrl: 'https://i.imgur.com/3CmWe8P.png',
        tags: ['Miiverse Art', 'Pixel Art', 'Fan Art', 'Wii U'],
        description: "The Twilight Princess version of Ganon is one of his most monstrous forms, and I really wanted to capture that raw power. I created this piece entirely by hand on the Wii U Gamepad for Miiverse."
    },
    {
        id: 68,
        type: 'graphic',
        title: 'Gleeok (The Legend Of Zelda) Miiverse Doodle',
        year: 2013,
        imageUrl: 'https://i.imgur.com/CCS1qqZ.jpeg',
        tags: ['Miiverse Art', 'Pixel Art', 'Fan Art', 'Wii U'],
        description: "I decided to tackle one of the classic bosses from the original Legend of Zelda, the multi headed dragon Gleeok. This was a really intricate piece to create by hand on the Wii U Gamepad for Miiverse. It took a lot of patience to get all the scales and sharp details just right using the simple pixel art tools, but I'm proud of how ferocious it turned out."
    },
    {
        id: 69,
        type: 'graphic',
        title: 'Skull Kid (Majora\'s Mask) Miiverse Doodle',
        year: 2013,
        imageUrl: 'https://i.imgur.com/UdiQ35i.jpeg',
        tags: ['Miiverse Art', 'Pixel Art', 'Fan Art', 'Wii U'],
        description: "Majora's Mask has some of the most memorable character designs, and I really wanted to capture the mysterious and chaotic energy of Skull Kid. This was drawn completely by hand on the Wii U Gamepad for the Miiverse app. It was a really intricate piece to work on, especially trying to get all the details of Majora's Mask right using the platform's pixelated style."
    },
    {
        id: 70,
        type: 'graphic',
        title: 'Egg of the King (Berserk) Miiverse Doodle',
        year: 2014,
        imageUrl: 'https://i.imgur.com/zKOf1xG.png',
        tags: ['Miiverse Art', 'Pixel Art', 'Fan Art', 'Wii U'],
        description: "Berserk has some of the most haunting imagery in all of manga, and the Behelit, or the Egg of the King, is unforgettable. I wanted to see if I could recreate its creepy, detailed face, so I drew this entirely by hand on the Wii U Gamepad for Miiverse."
    },
    {
        id: 71,
        type: 'graphic',
        title: 'Sailor Sephiroth Miiverse Drawing',
        year: 2014,
        imageUrl: 'https://i.imgur.com/iPaIhdu.png',
        tags: ['Fan Art', 'Miiverse Art', 'Pixel Art', 'Wii U'],
        description: "This Sailor Sephiroth drawing was created on the Wii U GamePad for Miiverse, combining the iconic aesthetics of Final Fantasy's ultimate villain and Sailor Moon."
    },
    {
        id: 72,
        type: 'graphic',
        title: 'Steven Universe Miiverse Doodle',
        year: 2013,
        imageUrl: 'https://i.imgur.com/yzVtaKd.png',
        tags: ['Fan Art', 'Miiverse Art', 'Pixel Art', 'Wii U'],
        description: "A fan art drawing for Steven Universe, created on the Wii U's Gamepad for Miiverse not long after the show's debut."
    },
    {
        id: 73,
        type: 'graphic',
        title: 'Choose Your Pokémon Miiverse Drawing',
        year: 2016,
        imageUrl: 'https://i.imgur.com/ryH9xHd.png',
        tags: ['Fan Art', 'Miiverse Art', 'Pixel Art', 'Wii U'],
        description: "Choose Your Pokémon... screen from Pokémon Red and Blue, drawn entirely on the Wii U Gamepad for Miiverse. Any time I add the dithering effect, each dot has to be placed manually and evenly on the GamePad which is extremely tedious but worth it in the end."
    },
    {
        id: 74,
        type: 'graphic',
        title: 'Animal Crossing: Eternal | DOOM Horizons',
        year: 2020,
        imageUrl: 'https://i.imgur.com/UFbuN8U.gif',
        tags: ['Adobe Animate', 'Animation', 'Crossover', 'Fan Art', 'Gif', 'Mashup', 'Vector Art'],
        description: "This Adobe Illustrator animation captures the iconic shared 2020 release date of Animal Crossing: New Horizons and DOOM Eternal. The GIF playfully morphs Tom Nook into a DOOM demon, celebrating the gaming community's joke about swapping slaying Demons for collecting Bells."
    },
    {
        id: 75,
        type: 'graphic',
        title: 'Wind Waker x Pokémon Animation',
        year: 2022,
        imageUrl: 'https://i.imgur.com/9uMh8nh.gif',
        tags: ['Adobe Animate', 'Animation', 'Crossover', 'Fan Art', 'Game Art', 'Gif'],
        description: "This animation pays homage to The Legend of Zelda: The Wind Waker for its 20th anniversary. It reimagines the classic Outset Island pig lifting by swapping the pig with Pokémons LeChonk."
    },
    {
        id: 76,
        type: 'graphic',
        title: 'Fitness with Monchi',
        year: 2021,
        imageUrl: 'https://i.imgur.com/SO460Fl.gif',
        tags: ['Adobe Animate', 'Animation', 'Crossover', 'Fan Art', 'Gif'],
        description: "This looping animation, \"Fitness with Monchi,\" was created in just four days as an entry for a Twitter contest hosted by the creators of The Mitchells vs. The Machines. As a huge fan of the film, I animated this piece featuring Monchi getting a wild workout on the treadmill while a special guest, Waddles from Gravity Falls, pumps some serious iron."
    },
    {
        id: 77,
        type: 'graphic',
        title: 'Tomba! 1 & 2 Artwork',
        year: 2022,
        imageUrl: 'https://i.imgur.com/UiZVYYN.jpeg',
        tags: ['Graphic Design', 'Adobe Photoshop', 'Fan Art', 'Digital Art', 'Anniversary', 'Game Art'],
        description: "To celebrate the 25th Anniversary of the Tomba! series (one of my favorite games of all time), I redrew one of the cutscenes in PhotoShop as a tribute to this awesome game."
    },
    {
        id: 78,
        type: 'graphic',
        title: 'Stone by Day, Warriors by Night',
        year: 2023,
        imageUrl: 'https://i.imgur.com/paPrGOr.gif',
        tags: ['Adobe Animate', 'Animation', 'Character Art', 'Digital Art', 'Fan Art', 'Gif'],
        description: "An animation capturing the iconic look and feel of Goliath, the leader of the Manhattan Clan from the classic animated series Gargoyles made with Adobe Illustrator."
    },
    {
        id: 79,
        type: 'graphic',
        title: 'Super Mario Maker Pin Stop Motion',
        year: 2016,
        imageUrl: 'https://i.imgur.com/oD2ZcnN.gif',
        tags: ['Stop Motion', 'Animation', 'Fan Art', 'Gif'],
        description: "A stop motion animation created as a tribute to the Super Mario Maker community and the now rare Best Buy Limited Edition Button Set. This project was a labor of love, requiring significant time to animate the pins and bring them to life, all set against the game's iconic yellow background pattern."
    },
    {
        id: 80,
        type: 'graphic',
        title: 'Pac Man Meltdown',
        year: 2019,
        imageUrl: 'https://i.imgur.com/8FW6Pt4.gif',
        tags: ['Adobe Animate', 'Animation', 'Fan Art', 'Game Art', 'Gif', 'Hand Drawn'],
        description: "A fluid, hand drawn animation inspired by the action of Super Smash Bros. Ultimate. This piece depicts Pac Man's face melting away."
    }
];

let activeFilters = [];
let currentModalItemId = null;

const videoGallery = document.getElementById('video-gallery');
const graphicGallery = document.getElementById('graphic-gallery');
const searchForms = document.querySelectorAll('.header-search-form');
const searchInputs = document.querySelectorAll('.header-search-form input[type="search"]');
const suggestionsDataLists = [document.getElementById('search-suggestions'), document.getElementById('search-suggestions-mobile'), document.getElementById('search-suggestions-md')];
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const modal = document.getElementById('item-modal');
const modalContent = document.getElementById('modal-content');
const randomBtnDesktop = document.getElementById('random-btn');
const randomBtnTablet = document.getElementById('random-btn-md');
const randomBtnMobile = document.getElementById('random-btn-mobile');
const filterStatusContainer = document.getElementById('filter-status-container');
const scrollToTopBtn = document.getElementById('scroll-to-top');

function createCard(item) {
    const isVideo = item.type === 'video';
    let displayImageUrl = item.imageUrl;
    if (!displayImageUrl) {
        if (isVideo && item.youtubeId) {
            displayImageUrl = `https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`;
        } else {
            displayImageUrl = 'https://placehold.co/800x600/111827/c084fc?text=No+Image';
        }
    }

    const tagsString = item.tags.join(',');
    const tagsHtml = item.tags.map(tag =>
        `<button onclick="toggleFilter('${tag}', event)" class="tag-btn text-sm font-semibold px-3 py-1 rounded-full transition hover:bg-[#6b2176] hover:text-white" style="background-color: #374151; color: #c084fc;">#${tag}</button>`
    ).join('');

    const mobileDescriptionHtml = `<p class="text-sm text-gray-400 mt-2 mb-3 md:hidden">${item.description}</p>`;
    const hoverDescriptionHtml = `
        <div class="absolute inset-0 bg-black bg-opacity-80 items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex">
           <p class="text-white text-center text-sm">${item.description}</p>
        </div>
    `;

    let imageContainerHtml = '';
    const playIconSvg = `<svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-white opacity-80" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" /></svg>`;

    if (isVideo) {
        imageContainerHtml = `
            <div class="relative aspect-w-16 aspect-h-9 bg-black overflow-hidden group">
                <img src="${displayImageUrl}" alt="${item.title}" loading="lazy" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110">
                <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    ${playIconSvg}
                </div>
                ${hoverDescriptionHtml}
            </div>
        `;
    } else {
        imageContainerHtml = `
            <div class="relative bg-black overflow-hidden group">
                <img src="${displayImageUrl}" alt="${item.title}" class="w-full h-auto transition-transform duration-300 group-hover:scale-110">
                ${hoverDescriptionHtml}
            </div>
        `;
    }

     return `
        <div class="card rounded-lg overflow-hidden transition-all duration-300 group bg-gray-900" data-tags="${tagsString}" data-item-id="${item.id}" onclick="showItemDetails(${item.id}, event)">
            ${imageContainerHtml}
            <div class="p-4">
                <p class="text-sm text-gray-400">${item.year}</p>
                <h3 class="text-lg font-bold text-white mt-1 group-hover:text-[#81268F] transition-colors">${item.title}</h3>
                ${mobileDescriptionHtml}
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
        const graphicItems = portfolioItems.filter(item => item.type === 'graphic');
        const shuffledGraphics = graphicItems.sort(() => Math.random() - 0.5);
        graphicGallery.innerHTML = shuffledGraphics.map(createCard).join('');
    }
}

function toggleFilter(tag, event) {
    event.stopPropagation();
    const element = event.currentTarget;
    const gallery = document.getElementById('video-gallery') || document.getElementById('graphic-gallery');

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
    const gallery = document.getElementById('video-gallery') || document.getElementById('graphic-gallery');
    activeFilters = activeFilters.filter(tag => tag !== tagToRemove);
    updateFilterDisplay(gallery);
    applyFilters(gallery);
}

function updateFilterDisplay(gallery) {
    const currentFilterContainer = gallery ? gallery.closest('main').querySelector('#filter-status-container') : null;
    if (currentFilterContainer) {
        if (activeFilters.length > 0) {
            const tagsHtml = activeFilters.map(tag =>
                 `<span class="inline-flex items-center bg-[#6b2176] text-white text-sm font-semibold pl-3 pr-2 py-1 rounded-full">
                    #${tag}
                    <button onclick="removeFilter('${tag}', this)" class="ml-2 -mr-1 text-gray-300 hover:text-white">&times;</button>
                </span>`
            ).join('');

            currentFilterContainer.innerHTML = `
                <div class="flex items-center justify-center flex-wrap gap-2">
                    <span class="text-gray-400">Filtering by:</span>
                    ${tagsHtml}
                    <button onclick="clearAllFilters(this)" class="ml-2 text-sm text-[#c084fc] hover:underline">Clear All</button>
                </div>
            `;
            currentFilterContainer.classList.remove('hidden');
        } else {
            currentFilterContainer.classList.add('hidden');
            currentFilterContainer.innerHTML = '';
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
             card.style.opacity = '1';
             card.style.filter = 'none';
             card.style.pointerEvents = 'auto';
        } else {
            card.classList.add('filtered-out');
             card.style.opacity = '0.2';
             card.style.filter = 'grayscale(1)';
             card.style.pointerEvents = 'none';
        }
    });

     const mainElement = gallery.closest('main');
     if (mainElement) {
        mainElement.querySelectorAll('.tag-btn').forEach(btn => {
            const tag = btn.innerText.replace('#', '');
            if (activeFilters.includes(tag)) {
                btn.classList.add('active-filter');
                 btn.style.backgroundColor = '#6b2176';
                 btn.style.color = 'white';
            } else {
                btn.classList.remove('active-filter');
                btn.style.backgroundColor = '#374151';
                 btn.style.color = '#c084fc';
            }
        });
     }
}

function clearAllFilters(element) {
    const gallery = document.getElementById('video-gallery') || document.getElementById('graphic-gallery');
    activeFilters = [];
    updateFilterDisplay(gallery);
    applyFilters(gallery);
}

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
        const inputElement = e.target.querySelector('input[type="search"]');
        const query = inputElement.value;
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


     const queryDisplayElement = document.getElementById('search-query-display');
     if (queryDisplayElement) {
         queryDisplayElement.innerText = displayQuery;
     }
    const noResults = document.getElementById('no-results');

    if (results.length > 0) {
        searchGallery.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12';
        searchGallery.innerHTML = results.map(createCard).join('');
        searchGallery.classList.remove('hidden');
         if (noResults) noResults.classList.add('hidden');
    } else {
        searchGallery.innerHTML = '';
        searchGallery.classList.add('hidden');
        if (noResults) noResults.classList.remove('hidden');
    }
}

function getImageDimensions(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve({ width: img.naturalWidth, height: img.naturalHeight });
        img.onerror = (err) => reject(err);
        img.src = url;
    });
}

async function showItemDetails(itemId, event) {
    if (event && event.target.closest('#modal-content .tag-btn')) {
        return;
    }
    if (event && event.target.closest('.card .tag-btn')) {
        event.stopPropagation();
        return;
    }

    const item = portfolioItems.find(p => p.id === itemId);
    if (!item) return;

    currentModalItemId = itemId;

    modalContent.innerHTML = `<div class="flex justify-center items-center h-64"><div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#81268F]"></div></div>`;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    const tagsHtml = item.tags.map(tag =>
        `<a href="search.html?tag=${encodeURIComponent(tag)}" class="tag-btn text-sm font-semibold px-3 py-1 rounded-full transition hover:bg-[#6b2176] hover:text-white" style="background-color: #374151; color: #c084fc;">#${tag}</a>`
    ).join('');

    const closeButtonHtml = `
        <button onclick="closeModal()" class="absolute top-2 right-2 p-2 text-gray-400 hover:text-white md:hidden z-10" aria-label="Close modal">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
    `;

    let finalHtmlContent = '';

    if (item.type === 'video') {
         modalContent.classList.remove('max-w-6xl');
         modalContent.classList.add('max-w-4xl');

        let mediaHtml = '';
        const youtubeSrc = `https://www.youtube.com/embed/${item.youtubeId}?autoplay=1`;

        if (item.localVideo) {
             mediaHtml = `<div class="relative w-full overflow-hidden mb-4" style="padding-top: 56.25%;"><video controls autoplay class="absolute top-0 left-0 w-full h-full rounded-lg bg-black"><source src="${item.localVideo}" type="video/mp4">Your browser does not support the video tag.</video></div>`;
        } else if (item.youtubeId) {
            mediaHtml = `<div class="relative w-full overflow-hidden mb-4" style="padding-top: 56.25%;"><iframe src="${youtubeSrc}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="absolute top-0 left-0 w-full h-full rounded-lg"></iframe></div>`;
        } else {
             mediaHtml = `<div class="aspect-w-16 aspect-h-9 bg-gray-800 flex items-center justify-center rounded-lg mb-4"><p class="text-gray-400">Video not available</p></div>`;
        }

        finalHtmlContent = `
            ${mediaHtml}
            <div class="text-left mt-4">
                <h2 class="text-2xl lg:text-3xl font-bold mb-2" style="color: #c084fc;">${item.title}</h2>
                <p class="text-md text-gray-400 mb-4">${item.year}</p>
                <p class="text-gray-300 mb-6">${item.description}</p>
                <div class="flex flex-wrap gap-2">${tagsHtml}</div>
            </div>
        `;

    } else {
        try {
            modalContent.innerHTML = `<div class="flex justify-center items-center h-64"><div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#81268F]"></div></div>`;

            const { width, height } = await getImageDimensions(item.imageUrl);
            const forceSideBySide = [37, 42, 40, 27, 38, 51, 53, 36];
            let useSideBySide = (height / width > 1.2) || forceSideBySide.includes(item.id);

            const generateLayout = (isSideBySide) => {
                const maxWidthClass = isSideBySide ? 'max-w-6xl' : 'max-w-4xl';
                modalContent.classList.remove('max-w-4xl', 'max-w-6xl');
                modalContent.classList.add(maxWidthClass);

                if (isSideBySide) {
                    return `
                        <div class="md:grid md:grid-cols-5 md:gap-8">
                            <div class="md:col-span-3 flex justify-center items-start mb-4 md:mb-0">
                                <img src="${item.imageUrl}" alt="${item.title}" class="max-w-full max-h-[80vh] object-contain rounded-lg">
                            </div>
                            <div class="md:col-span-2 flex flex-col">
                                <div>
                                    <h2 class="text-2xl lg:text-3xl font-bold mb-2" style="color: #c084fc;">${item.title}</h2>
                                    <p class="text-md text-gray-400 mb-4">${item.year}</p>
                                    <p class="text-gray-300 mb-6">${item.description}</p>
                                </div>
                                <div class="pt-4 md:pt-8 mt-auto">
                                    <div class="flex flex-wrap gap-2">${tagsHtml}</div>
                                </div>
                            </div>
                        </div>`;
                } else {
                    return `
                        <div>
                            <div class="flex justify-center items-center mb-4">
                                <img src="${item.imageUrl}" alt="${item.title}" class="max-w-full max-h-[70vh] object-contain rounded-lg">
                            </div>
                            <div class="text-left mt-4">
                                <h2 class="text-2xl lg:text-3xl font-bold mb-2" style="color: #c084fc;">${item.title}</h2>
                                <p class="text-md text-gray-400 mb-4">${item.year}</p>
                                <p class="text-gray-300 mb-6">${item.description}</p>
                                <div class="flex flex-wrap gap-2">${tagsHtml}</div>
                            </div>
                        </div>`;
                }
            };
            finalHtmlContent = generateLayout(useSideBySide);

        } catch (error) {
            console.error("Could not load image for modal:", item.imageUrl, error);
            finalHtmlContent = `<div class="text-center text-red-400 p-8">Could not load image. Please try again later.</div>`;
        }
    }

    // Combine close button and content, then update modal
    modalContent.innerHTML = `
        ${closeButtonHtml}
        <div>${finalHtmlContent}</div>
    `;
}

function closeModal() {
     const iframe = modalContent.querySelector('iframe');
     const video = modalContent.querySelector('video');

     if (iframe) {
        const currentSrc = iframe.getAttribute('src');
        iframe.setAttribute('src', '');
        if (currentSrc) {
             iframe.setAttribute('src', currentSrc.replace('?autoplay=1', ''));
        }
     } else if (video) {
        video.pause();
        video.removeAttribute('src');
        video.load();
     }

     modalContent.innerHTML = '';

    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
    currentModalItemId = null;
}

function handleScroll() {
    if (scrollToTopBtn) {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
             scrollToTopBtn.classList.remove('opacity-0', 'invisible');
        } else {
            scrollToTopBtn.classList.remove('visible');
             scrollToTopBtn.classList.add('opacity-0', 'invisible');
        }
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('hidden') && e.key === 'Escape') {
        closeModal();
    }
});
modal.addEventListener('click', (e) => {
    if (e.target.id === 'item-modal') {
        closeModal();
    }
});

[randomBtnDesktop, randomBtnTablet, randomBtnMobile].forEach(btn => {
    if (btn) {
        btn.addEventListener('click', (e) => {
            const randomIndex = Math.floor(Math.random() * portfolioItems.length);
            const randomItem = portfolioItems[randomIndex];
            showItemDetails(randomItem.id, e);
             if (btn === randomBtnMobile && !mobileMenu.classList.contains('hidden')) {
                 mobileMenu.classList.add('hidden');
                 mobileMenuButton.setAttribute('aria-expanded', 'false');
             }
        });
    }
});

if (mobileMenuButton) {
     mobileMenuButton.addEventListener('click', () => {
         const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
         mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
         mobileMenu.classList.toggle('hidden');
     });
}

document.addEventListener('DOMContentLoaded', () => {
    if (videoGallery || graphicGallery) {
        renderGalleries();
    }
    if (document.getElementById('search-gallery')) {
        renderSearchResults();
    }
    populateSuggestions();
     handleScroll();
});