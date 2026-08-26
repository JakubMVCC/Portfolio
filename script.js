const portfolioItems = [
    {
        id: 1,
        type: 'video',
        title: 'Restore Masters | Peachy Airport Parking',
        year: 2024,
        youtubeId: 'fuluZ9Vc26A',
        imageUrl: 'https://i.imgur.com/ML4yFnt.jpeg',
        tags: ['Adobe Illustrator', 'Adobe Premiere Pro', 'Commercial', 'Drone Footage', 'Informative', 'Short Form', 'Talking Head', 'Voiceover'],
        description: "A commercial I edited showcasing a massive roofing project at Peachy Airport Parking in Atlanta. My goal was to take the raw drone and ground footage and shape it into a clear, compelling story about how Restore Masters tackled this severe hail damage problem from start to finish."
    },
    {
        id: 2,
        type: 'video',
        title: 'My 20 Years with The Legend of Zelda: Wind Waker',
        year: 2022,
        youtubeId: 'eQVPwUhf69s',
        imageUrl: 'https://i.imgur.com/XdH6Dje.png',
        tags: ['Adobe Illustrator', 'Adobe Premiere Pro', 'Documentary', 'Interview', 'Long Form', 'Motion Graphics', 'Scriptwriting', 'Storyboarding', 'Talking Head', 'Visual Effects'],
        description: "Here is a Documentary-style video I wrote to celebrate one of my favorite video games of all time. It showcases a variety of editing techniques to tell a story that spans over 20 years now."
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
        description: "This video compiles together over 2 months of footage while also telling the story of how I created a 3D Printed Helmet as a gift for my friend's wedding. Organization is key when working on such a large project."
    },
    {
        id: 5,
        type: 'video',
        title: 'Legend of Zelda: Tears of the Kingdom (First Thoughts)',
        year: 2023,
        youtubeId: 'nrCRu7LfVbU',
        imageUrl: 'https://i.imgur.com/zVbObGy.png',
        tags: ['Adobe Premiere Pro', 'Informative', 'Long Form', 'Motion Graphics', 'Scriptwriting', 'Talking Head', 'Voiceover'],
        description: "This is another video that shows my skills at recording unscripted and being able to edit that footage in a way that creates a compelling story from start to finish about my experience with the latest Legend of Zelda game."
    },
    {
        id: 6,
        type: 'video',
        title: 'How I Stole A GameBoy Color',
        year: 2016,
        youtubeId: 'e5vHKLWVrxQ',
        imageUrl: 'https://i.imgur.com/ZM1EaOL.png',
        tags: ['Adobe Illustrator', 'Adobe Premiere Pro', 'After Effects', 'Animation', 'Claymation', 'Motion Graphics', 'Scriptwriting', 'Stop Motion', 'Storyboarding', 'Visual Effects'],
        description: "This video showcases my skills of using different filmmaking techniques like stop-motion animation mixed with live-action footage to share a funny story from my childhood. This is also my first video to reach over 1 million views!"
    },
    {
        id: 7,
        type: 'video',
        title: 'Crash Bandicoot (PS1) Review',
        year: 2017,
        youtubeId: 'qj1qQZycJcM',
        imageUrl: 'https://i.imgur.com/ut5lF5H.png',
        tags: ['Adobe Premiere Pro', 'Informative', 'Long Form', 'Motion Graphics', 'Review', 'Scriptwriting', 'Storyboarding', 'Talking Head', 'Visual Effects'],
        description: "In this video, I review one of my favorite games. I recorded all of my own footage from the gameplay to the live action parts, spent over a month writing a storyboard and script, and even built my own wearable wooden mask just for the video."
    },
    {
        id: 8,
        type: 'video',
        title: 'Splatter Head | A Claymation Short Film',
        year: 2024,
        localVideo: 'extra/SplatterHead.mp4',
        imageUrl: 'https://i.imgur.com/0vGZaBi.png',
        tags: ['Adobe Illustrator', 'Adobe Premiere Pro', 'After Effects', 'Animation', 'Claymation', 'Motion Graphics', 'Stop Motion', 'Storyboarding', 'Visual Effects'],
        description: "Even though it's still unfinished, Splatter Head showcases my skills in storytelling using stop-motion and animation. I originally created it for my Premiere Pro class Final Project, but I eventually expanded it into my finals for Website Development and After Effects too."
    },
    {
        id: 9,
        type: 'video',
        title: "Should you pay $80 for Sonic's Encyclospeedia?",
        year: 2021,
        youtubeId: 'cxyekweh_wQ',
        imageUrl: 'https://i.imgur.com/MBX86N1.png',
        tags: ['Adobe Premiere Pro', 'Documentary', 'Long Form', 'Scriptwriting', 'Talking Head'],
        description: "This video shows off my ability to edit unscripted footage together to tell an interesting review story. It features a good mix of B-Roll, talking head shots, and voiceovers."
    },
    {
        id: 10,
        type: 'video',
        title: 'Why I Love The Metroid Franchise',
        year: 2016,
        youtubeId: 'k873l9PK2yw',
        imageUrl: 'https://i.imgur.com/AM3Fsmd.png',
        tags: ['Adobe Premiere Pro', 'Informative', 'Motion Graphics', 'Scriptwriting', 'Talking Head', 'Visual Effects', 'Voiceover'],
        description: "Even almost 10 years ago, I loved refining my timing and pacing for long-form content. I always put the story first to keep viewers engaged. Most of my scripted work today actually evolved from this specific style of editing."
    },
    {
        id: 11,
        type: 'video',
        title: '10 Fishing Tips for Big the Cat',
        year: 2022,
        youtubeId: 'dZMKci4t8So',
        imageUrl: 'https://i.ytimg.com/vi/dZMKci4t8So/maxresdefault.jpg',
        tags: ['Adobe Premiere Pro', 'Informative', 'Long Form', 'Scriptwriting', 'Tutorial', 'Visual Effects', 'Voiceover'],
        description: "This video shows the extensive work I put into researching topics—even something as random as a fishing tutorial for Sonic Adventure! The editing is tight, making sure every graphic, text, and sound effect has a clear purpose."
    },
    {
        id: 12,
        type: 'video',
        title: 'How I Dangerously Carved this Pumpkin',
        year: 2021,
        youtubeId: 'piwb0cfirks',
        imageUrl: 'https://i.imgur.com/iybx3sY.png',
        tags: ['Adobe Premiere Pro', 'Informative', 'Long Form', 'Scriptwriting', 'Talking Head', 'Tutorial', 'Voiceover'],
        description: "Another example of how I record footage to shape a story, like carving a Halloween pumpkin. Even before I hit record, I always have a plan in my head for exactly how a scene will be used in the final edit."
    },
    {
        id: 13,
        type: 'video',
        title: 'The Switch 2 is AWESOME, but… EXPENSIVE!',
        year: 2025,
        youtubeId: 'LJgT_2KHfx8',
        imageUrl: 'https://i.imgur.com/g0yhLTJ.png',
        tags: ['Adobe Premiere Pro', 'Informative', 'Long Form', 'Talking Head', 'UnScripted'],
        description: "This is an example of my skills in front of the camera, reporting on a topic almost like the news. I'm totally comfortable recording others or being recorded myself to inform viewers about any subject."
    },
    {
        id: 14,
        type: 'video',
        title: 'First Thoughts | Xenoblade Chronicles X: Definitive Edition',
        year: 2025,
        youtubeId: 'D-yuPDeXjYs',
        imageUrl: 'https://i.imgur.com/CHUor4B.png',
        tags: ['Adobe Premiere Pro', 'Informative', 'Long Form', 'Talking Head', 'UnScripted'],
        description: "This video shows how passionate I can get when speaking about something in front of the camera, and how I use editing to translate that energy into a fun, enjoyable video."
    },
    {
        id: 15,
        type: 'video',
        title: "Split Fiction | Games You Should 'Touts Play",
        year: 2025,
        youtubeId: 'dkA8F1uFlLc',
        imageUrl: 'https://i.imgur.com/qZOsvTQ.png',
        tags: ['Adobe Premiere Pro', 'Informative', 'Long Form', 'Review', 'Scriptwriting', 'Talking Head', 'Voiceover'],
        description: "I recorded this video in one take just an hour before I had to catch an Amtrak train! It shows I can easily work under fast-paced, stressful environments while remaining totally on topic."
    },
    {
        id: 16,
        type: 'video',
        title: '3D Air Balloon in Blender | Animating a Multimedia Presentation',
        year: 2025,
        youtubeId: 'Mcaw7OPcs1M',
        imageUrl: 'https://i.imgur.com/VjubQVi.png',
        tags: ['Adobe Premiere Pro', 'After Effects', 'Animation', 'Short Form', 'Visual Effects'],
        description: "This video showcases my skills using Blender to recreate a school assignment in my own creative way. I spent an entire week troubleshooting until I finally got it working exactly how I wanted. I always go above and beyond."
    },
    {
        id: 17,
        type: 'video',
        title: 'Puppet Tool Animation | Adobe After Effects',
        year: 2025,
        youtubeId: 'ZmJNjt5VtEU',
        imageUrl: 'https://i.imgur.com/jBdSoek.png',
        tags: ['Adobe Illustrator', 'Adobe Premiere Pro', 'After Effects', 'Animation', 'Motion Graphics', 'Visual Effects'],
        description: "I created every movable part for this character manually in Illustrator, then meticulously animated the actions in After Effects for a school project. Did I have to put that much effort into a 20-second video? No, but it made the final result so much more memorable."
    },
    {
        id: 18,
        type: 'video',
        title: 'DIY Eggman Costume & Attending the Sonic Symphony',
        year: 2023,
        youtubeId: 'Kowi_FQum2A',
        imageUrl: 'https://i.imgur.com/2GBpAnM.png',
        tags: ['Adobe Premiere Pro', 'Long Form', 'UnScripted', 'Vlog'],
        description: "Here's an example of a more vlog-style project where I documented making a Dr. Eggman Halloween costume and attending the Sonic Symphony. I literally record everything I do, no matter the occasion."
    },
    {
        id: 19,
        type: 'video',
        title: 'The Chase Down',
        year: 2011,
        youtubeId: 'bKs8PU376t8',
        imageUrl: '',
        tags: ['Adobe Premiere Pro', 'Scriptwriting', 'Short Form', 'Skit', 'Storyboarding'],
        description: "One of my very first major video projects! I handled everything from the storyboard to making the cardboard props. I filmed all the action and essentially taught myself Premiere Pro just so I could add in the custom muzzle flare effects."
    },
    {
        id: 20,
        type: 'video',
        title: 'How To Catch A Thief',
        year: 2010,
        youtubeId: 'mnlqmapm4-8',
        imageUrl: '',
        tags: ['Adobe Premiere Pro', 'After Effects', 'Short Form', 'Skit', 'Storyboarding'],
        description: "Another early video blending action with a comedic story. I got super creative with the props, using a guitar as a weapon and building a handmade stunt dummy out of duct tape and old homework. It's totally cheesy, but it was a great learning experience."
    },
    {
        id: 21,
        type: 'graphic',
        title: '"Paps\' Birthday" Digital Wallpaper',
        year: 2018,
        imageUrl: 'https://i.imgur.com/vvictNe.png',
        tags: ['Adobe Photoshop', 'Character Design', 'Digital Illustration', 'Wallpaper Design'],
        description: "I made this highly detailed wallpaper as a birthday gift for my brother. It took over a year and 100+ hours of work in Photoshop. Believe it or not, every line and color was drawn using just a standard PC mouse!"
    },
    {
        id: 22,
        type: 'graphic',
        title: 'Hawaii Island Paradise Postcard',
        year: 2025,
        imageUrl: 'https://i.imgur.com/hwxy67w.png',
        tags: ['Adobe Photoshop', 'Compositing', 'Digital Collage', 'Graphic Design', 'Postcard Design'],
        description: "I designed this Hawaiian postcard by blending together different images in Photoshop. I layered the pineapple, hibiscus flowers, and the beach, then used color correction and custom text to tie it all together into a fun, tropical vibe."
    },
    {
        id: 23,
        type: 'graphic',
        title: 'Kuzco Double Exposure Poster',
        year: 2025,
        imageUrl: 'https://i.imgur.com/AcAP70k.png',
        tags: ['Adobe Illustrator', 'Adobe Photoshop', 'Double Exposure', 'Fan Art', 'Poster Design'],
        description: "For my final project, I wanted to play around with double exposure in Photoshop using Kuzco's silhouette. I used Illustrator to prep the vector shape, then layered in different scenes and landscapes to build out the story inside the mask."
    },
    {
        id: 24,
        type: 'graphic',
        title: 'Pacha Double Exposure Poster',
        year: 2025,
        imageUrl: 'https://i.imgur.com/BhMOsoj.png',
        tags: ['Adobe Illustrator', 'Adobe Photoshop', 'Double Exposure', 'Fan Art', 'Poster Design'],
        description: "This is the second part of my double exposure series. Just like Kuzco, I used Pacha's silhouette as a clipping mask and filled it with moments from the movie to give it that warm, nostalgic feeling."
    },
    {
        id: 25,
        type: 'graphic',
        title: 'Learn to Cook Flyer Design',
        year: 2025,
        imageUrl: 'https://i.imgur.com/lNo2PrE.png',
        tags: ['Adobe Illustrator', 'Flyer Design', 'Layout', 'Typographic Design', 'Vector Illustration'],
        description: "A flyer I designed in Illustrator to practice typographic layouts. I had a lot of fun warping the headlines and organizing the body text to make sure the information was super easy to read while still looking professional."
    },
    {
        id: 26,
        type: 'graphic',
        title: 'Deku Link Miiverse Illustration',
        year: 2013,
        imageUrl: 'https://i.imgur.com/xPw6FsV.jpeg',
        tags: ['Miiverse Art', 'Pixel Art', 'Fan Art', 'Wii U'],
        description: "I drew Deku Link entirely by hand using just the Nintendo Wii U Gamepad for the Miiverse app! Working with those basic pixel tools was definitely a challenge, but I love how it turned out."
    },
    {
        id: 27,
        type: 'graphic',
        title: 'Stylized Birthday Invitation',
        year: 2025,
        imageUrl: 'https://i.imgur.com/a3C9fBR.png',
        tags: ['Adobe Illustrator', 'Graphic Design', 'Invitation Design', 'Live Effects', 'Typography'],
        description: "I went all out with Illustrator's live effects for this birthday invite. I layered strokes and fills to get those polka dot and striped patterns, then used a warp effect on the main text to give it that bouncy, fun shape."
    },
    {
        id: 28,
        type: 'graphic',
        title: 'Alice Cooper "He\'s Back" Miiverse Illustration',
        year: 2014,
        imageUrl: 'https://i.imgur.com/CX7OW68.png',
        tags: ['Miiverse Art', 'Pixel Art', 'Fan Art', 'Wii U'],
        description: "A tribute to rock icon Alice Cooper wearing the Jason mask, drawn completely on the Wii U Gamepad. The Miiverse pixel tools are super restrictive, but it forced me to focus on the raw details to get his likeness right."
    },
    {
        id: 29,
        type: 'graphic',
        title: 'Shenron Miiverse Drawing',
        year: 2014,
        imageUrl: 'https://i.imgur.com/PeaDL7m.jpeg',
        tags: ['Miiverse Art', 'Pixel Art', 'Fan Art', 'Wii U'],
        description: "As a huge Dragon Ball fan, I just had to try drawing Shenron on the Wii U Gamepad. It was a serious test of patience to get all those scales and details right with just black and white pixels, but the end result was totally worth it."
    },
    {
        id: 30,
        type: 'graphic',
        title: 'Sailor Moon Miiverse Drawing',
        year: 2014,
        imageUrl: 'https://i.imgur.com/7eHNYpf.jpeg',
        tags: ['Miiverse Art', 'Pixel Art', 'Fan Art', 'Wii U'],
        description: "I've always loved the Sailor Moon art style, so I gave Usagi a shot on Miiverse. Capturing her iconic hair and expressions with just the basic gamepad pixel tools was a really fun challenge."
    },
    {
        id: 31,
        type: 'graphic',
        title: 'A Link Between Worlds Miiverse Drawing',
        year: 2013,
        imageUrl: 'https://i.imgur.com/xJb8Yri.jpeg',
        tags: ['Miiverse Art', 'Pixel Art', 'Fan Art', 'Wii U'],
        description: "A hand-drawn Miiverse piece celebrating A Link Between Worlds. I really enjoyed recreating the Master Sword and Hylian Shield using the Wii U Gamepad's simple pixel interface."
    },
    {
        id: 32,
        type: 'graphic',
        title: 'Trek Outdoors Badge',
        year: 2025,
        imageUrl: 'https://i.imgur.com/5tVxUFd.png',
        tags: ['Adobe Illustrator', 'Flat Design', 'Graphic Design', 'Logo Design', 'Vector Illustration'],
        description: "A clean, vector-based logo I built in Illustrator. I kept things simple, building the bear, mountains, and sun entirely out of basic shapes to give it that modern flat-design feel."
    },
    {
        id: 33,
        type: 'graphic',
        title: 'Bowser & Vegeta | Miiverse Doodle',
        year: 2015,
        imageUrl: 'https://i.imgur.com/nyu8kdb.jpeg',
        tags: ['Miiverse Art', 'Pixel Art', 'Fan Art', 'Wii U'],
        description: "I drew this on the Wii U Gamepad right after beating a brutal Super Mario Maker level. Fusing Bowser with Vegeta just made perfect sense to capture that 'Over 9000' level of intensity I was feeling at the time!"
    },
    {
        id: 34,
        type: 'graphic',
        title: 'EarthBound Miiverse Drawing',
        year: 2015,
        imageUrl: 'https://i.imgur.com/cfqq7gw.jpeg',
        tags: ['Miiverse Art', 'Pixel Art', 'Fan Art', 'Wii U'],
        description: "EarthBound is easily one of my favorite games of all time. Getting all four heroes onto the Wii U Gamepad canvas was tough, but I wanted to capture that triumphant feeling from the end of their journey."
    },
    {
        id: 35,
        type: 'graphic',
        title: 'Skiing Magazine Cover',
        year: 2025,
        imageUrl: 'https://i.imgur.com/NZUpzrp.png',
        tags: ['Magazine Design', 'Cover Design', 'Typographic Design', 'Clipping Mask'],
        description: "A magazine cover I threw together in Photoshop. I used a clipping mask on the 'SKIING' title so the mountain peaks pop through the text, giving it a dynamic, professional layout."
    },
    {
        id: 36,
        type: 'graphic',
        title: 'Donkey Kong Digital Illustration',
        year: 2023,
        imageUrl: 'https://i.imgur.com/CtFznfv.jpeg',
        tags: ['Character Art', 'Digital Illustration', 'Drawing Tablet', 'Fan Art', 'Krita'],
        description: "A digital drawing of DK I did in Krita using a drawing tablet. I started with a rough sketch, added clean lines, and brought it to life with some vibrant flat colors and simple shading."
    },
    {
        id: 37,
        type: 'graphic',
        title: 'Mountain Explorer Graphic',
        year: 2025,
        imageUrl: 'https://i.imgur.com/M6BYV16.png',
        tags: ['Adobe Illustrator', 'Graphic Design', 'Symbols', 'T Shirt Design'],
        description: "I built this illustration in Illustrator to practice efficiency. I turned the trees and birds into symbols so I could quickly build out the forest scene—super helpful if I ever need to tweak the design later!"
    },
    {
        id: 38,
        type: 'graphic',
        title: 'Sleepy Cats Cafe Logo',
        year: 2025,
        imageUrl: 'https://i.imgur.com/sIcylNT.png',
        tags: ['Badge Design', 'Logo Design', 'Vector Art'],
        description: "A cozy cat cafe logo I made using Illustrator's Curvature tool to get those super smooth lines. I finished it off with some fun dashed patterns for the background."
    },
    {
        id: 39,
        type: 'graphic',
        title: '"Splatter Head" Magazine Cover Design',
        year: 2025,
        imageUrl: 'https://i.imgur.com/1ncjrZL.png',
        tags: ['Adobe Illustrator', 'Adobe Photoshop', 'Cover Design', 'Magazine Design'],
        description: "My final project for an Intro to Adobe Creative Suite class. I took a photo of the main character from my claymation short film and gave it the full magazine cover treatment using Photoshop and Illustrator."
    },
    {
        id: 40,
        type: 'graphic',
        title: 'Typographic Self Portrait',
        year: 2025,
        imageUrl: 'https://i.imgur.com/Sw1ChM1.png',
        tags: ['Adobe Photoshop', 'Photo Manipulation', 'Typographic Portrait'],
        description: "A self-portrait made entirely out of text in Photoshop! I used a layer mask shaped like my face over a block of text, which naturally creates all the highlights and shadows."
    },
    {
        id: 41,
        type: 'graphic',
        title: 'Newport Aquarium Vector Logo',
        year: 2025,
        imageUrl: 'https://i.imgur.com/y5laGox.png',
        tags: ['Adobe Illustrator', 'Graphic Design', 'Logo Design', 'Vector Illustration'],
        description: "I recreated the Newport Aquarium logo from scratch as a crisp vector graphic in Illustrator. The goal was to prep a clean SVG file that I could easily import and animate later in After Effects."
    },
    {
        id: 42,
        type: 'graphic',
        title: 'Podcast Social Ad Graphic',
        year: 2025,
        imageUrl: 'https://i.imgur.com/TjPZS9D.png',
        tags: ['Adobe Illustrator', 'Flat Design', 'Graphic Design', 'Podcast Art', 'Vector Illustration'],
        description: "A clean social media ad graphic I designed in Illustrator. I focused heavily on layout and composition, making sure the microphone, shakers, and text all balanced each other out nicely."
    },
    {
        id: 43,
        type: 'graphic',
        title: 'Silent Hill Postcard Design',
        year: 2025,
        imageUrl: 'https://i.imgur.com/LphAvXC.png',
        tags: ['Adobe Photoshop', 'Fan Art', 'Photo Manipulation', 'Postcard Design'],
        description: "A gritty, vintage postcard for Silent Hill. I used a clipping mask on the title text to let the fog bleed through, then blended in some game iconography and textures in Photoshop to give it that creepy aesthetic."
    },
    {
        id: 44,
        type: 'graphic',
        title: 'Green Energy Illustration',
        year: 2025,
        imageUrl: 'https://i.imgur.com/dVqu45U.png',
        tags: ['Adobe Illustrator', 'Graphic Design', 'Vector Illustration'],
        description: "I designed this in Illustrator to really push dynamic gradients and blends. I used freeform gradients on the cyclist's jersey to get that vibrant, organic mix of colors to pop against the background."
    },
    {
        id: 45,
        type: 'graphic',
        title: 'Zelda: The Wind Waker Vector Poster',
        year: 2025,
        imageUrl: 'https://i.imgur.com/NT7SD1w.png',
        tags: ['Adobe Illustrator', 'Fan Art', 'Poster Design', 'Vector Illustration'],
        description: "A complete vector recreation of Wind Waker art, drawn line-by-line in Illustrator. Replicating the iconic cel-shaded style with the Pen tool took a lot of patience, but I love how clean and scalable it is."
    },
    {
        id: 46,
        type: 'graphic',
        title: 'Photoshop Textbook Cover Design 1',
        year: 2025,
        imageUrl: 'https://i.imgur.com/4Zir7n5.png',
        tags: ['Adobe Photoshop', 'Compositing', 'Graphic Design', 'Layout'],
        description: "A custom textbook cover I designed in Photoshop. I blended a dramatic sunset with a silhouetted landscape to make it pop, keeping all the typography clean and ready for print."
    },
    {
        id: 47,
        type: 'graphic',
        title: 'Self Portrait Composite: Egypt',
        year: 2025,
        imageUrl: 'https://i.imgur.com/coTgjHY.jpeg',
        tags: ['Compositing', 'Photo Manipulation', 'Self Portrait'],
        description: "A fun Photoshop composite where I dropped myself into an Egyptian landscape. I used the Select and Mask workspace to cut myself out cleanly, then spent time tweaking the lighting to make it look somewhat believable."
    },
    {
        id: 48,
        type: 'graphic',
        title: "Octopus's Garden Typographic Portrait",
        year: 2025,
        imageUrl: 'https://i.imgur.com/EcxN5QG.png',
        tags: ['Adobe Illustrator', 'Graphic Design', 'Text Art', 'Typography', 'Vector Illustration'],
        description: "This one was wild—I drew an octopus in Illustrator where every single shape is filled with lyrics from The Beatles' 'Octopus's Garden'. The words literally form the creature!"
    },
    {
        id: 49,
        type: 'graphic',
        title: '"Shrek 2" Script Portrait',
        year: 2025,
        imageUrl: 'https://i.imgur.com/dlz5rtF.png',
        tags: ['Typographic Portrait', 'Text Art', 'Photo Manipulation', 'Fan Art'],
        description: "A portrait of Shrek and Donkey built out of the entire Shrek 2 script. I used a Displacement Map in Photoshop to warp the text around their facial features to give it 3D volume."
    },
    {
        id: 50,
        type: 'graphic',
        title: '"Bond 007" Stylized Self Portrait',
        year: 2025,
        imageUrl: 'https://i.imgur.com/X4G2Amb.png',
        tags: ['Self Portrait', 'Poster Design', 'Graphic Design', 'Stylized Portrait'],
        description: "A Shepard Fairey-inspired self-portrait. I posterized a photo of myself in Photoshop to get that high-contrast, limited color palette, then framed it up like a classic 007 poster."
    },
    {
        id: 51,
        type: 'graphic',
        title: 'DJ Professor K Digital Painting',
        year: 2025,
        imageUrl: 'https://i.imgur.com/dsSr44g.png',
        tags: ['Digital Painting', 'Fan Art', 'Character Art'],
        description: "A digital painting of DJ Professor K I did in Photoshop. I used some custom jagged brushes and high-energy flat colors to capture that awesome Jet Set Radio Future vibe."
    },
    {
        id: 52,
        type: 'graphic',
        title: '"The Legend of Zelda" Stylized Movie Poster',
        year: 2025,
        imageUrl: 'https://i.imgur.com/I08MntU.png',
        tags: ['Poster Design', 'Compositing', 'Fan Art', 'Graphic Design'],
        description: "A dramatic Legend of Zelda movie poster concept. I posterized a self-portrait, masked it out, and composited in the Triforce and Hyrule Castle to give it an epic, cinematic feel."
    },
    {
        id: 53,
        type: 'graphic',
        title: 'Photo Restoration & Colorization',
        year: 2025,
        imageUrl: 'https://i.imgur.com/xrhRPMz.png',
        tags: ['Photo Restoration', 'Retouching', 'Colorization'],
        description: "For this project, I took a badly damaged, vintage black-and-white photo and brought it back to life in Photoshop. I repaired the scratches and used the Colorize Neural Filter to add realistic skin tones and colors."
    },
    {
        id: 54,
        type: 'graphic',
        title: 'Photoshop Textbook Cover Design 2',
        year: 2025,
        imageUrl: 'https://i.imgur.com/O8zxdwD.png',
        tags: ['Book Cover Design', 'Graphic Design', 'Layout Design', 'Compositing'],
        description: "Another textbook cover concept. I overlaid a dramatic background illustration with a sharp, angled graphic to house the title, keeping the whole layout modern and bold."
    },
    {
        id: 55,
        type: 'graphic',
        title: '"Shrek" Script Portrait',
        year: 2025,
        imageUrl: 'https://i.imgur.com/SYos12X.png',
        tags: ['Typographic Portrait', 'Text Art', 'Photo Manipulation', 'Fan Art'],
        description: "Similar to my Shrek 2 piece, this portrait is built from the script of the first movie, using a displacement map in Photoshop to wrap the words around his face."
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
        `<button onclick="toggleFilter('${tag}', event)" class="tag-btn hover:text-cyan-400">#${tag}</button>`
    ).join('');

    const mobileDescriptionHtml = `<p class="text-sm text-gray-400 mt-2 mb-3 md:hidden">${item.description}</p>`;
    const hoverDescriptionHtml = `
        <div class="absolute inset-0 bg-black/80 items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex">
           <p class="text-white text-center text-sm">${item.description}</p>
        </div>
    `;

    let imageContainerHtml = '';
    const playIconSvg = `<svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-white opacity-80" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" /></svg>`;

    if (isVideo) {
        imageContainerHtml = `
            <div class="relative aspect-w-16 aspect-h-9 bg-black overflow-hidden group">
                <img src="${displayImageUrl}" loading="lazy" alt="${item.title} - ${item.type} project" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110">
                <div class="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    ${playIconSvg}
                </div>
                ${hoverDescriptionHtml}
            </div>
        `;
    } else {
        imageContainerHtml = `
            <div class="relative bg-black overflow-hidden group">
                <img src="${displayImageUrl}" loading="lazy" alt="${item.title} - ${item.type} project" class="w-full h-auto transition-transform duration-300 group-hover:scale-110">
                ${hoverDescriptionHtml}
            </div>
        `;
    }

     return `
        <div class="card rounded-lg overflow-hidden transition-all duration-300 group bg-[#111827]" data-tags="${tagsString}" data-item-id="${item.id}" onclick="showItemDetails(${item.id}, event)">
            ${imageContainerHtml}
            <div class="p-4">
                <p class="text-sm text-gray-400">${item.year}</p>
                <h3 class="text-lg font-bold text-white mt-1 group-hover:text-cyan-400 transition-colors">${item.title}</h3>
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
                 `<span class="inline-flex items-center bg-[#81268F] text-white text-sm font-semibold pl-3 pr-2 py-1 rounded-full border border-[#81268F]">
                    #${tag}
                    <button onclick="removeFilter('${tag}', this)" class="ml-2 -mr-1 text-gray-300 hover:text-white">&times;</button>
                </span>`
            ).join('');

            currentFilterContainer.innerHTML = `
                <div class="flex items-center justify-center flex-wrap gap-2">
                    <span class="text-gray-400">Filtering by:</span>
                    ${tagsHtml}
                    <button onclick="clearAllFilters(this)" class="ml-2 text-sm text-cyan-400 hover:underline">Clear All</button>
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
            } else {
                btn.classList.remove('active-filter');
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

async function showItemDetails(itemId, event, updateUrl = true) {
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
    
    if (updateUrl) {
        const newUrl = new URL(window.location);
        newUrl.searchParams.set('item', itemId);
        window.history.pushState({ modalItem: itemId }, '', newUrl);
    }

    modalContent.innerHTML = `<div class="flex justify-center items-center h-64"><div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-cyan-400"></div></div>`;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    const tagsHtml = item.tags.map(tag =>
        `<a href="search.html?tag=${encodeURIComponent(tag)}" class="tag-btn hover:text-cyan-400">#${tag}</a>`
    ).join('');

    const closeButtonHtml = `
        <button onclick="closeModal()" class="absolute top-2 right-2 p-2 text-gray-400 hover:text-cyan-400 md:hidden z-10" aria-label="Close modal">
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
                <h2 class="text-2xl lg:text-3xl font-bold mb-2 text-white">${item.title}</h2>
                <p class="text-md text-cyan-400 mb-4">${item.year}</p>
                <p class="text-gray-300 mb-6">${item.description}</p>
                <div class="flex flex-wrap gap-2">${tagsHtml}</div>
            </div>
        `;

    } else {
        try {
            modalContent.innerHTML = `<div class="flex justify-center items-center h-64"><div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-cyan-400"></div></div>`;

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
                                <img src="${item.imageUrl}" alt="${item.title} - ${item.type} project" class="max-w-full max-h-[80vh] object-contain rounded-lg shadow-md">
                            </div>
                            <div class="md:col-span-2 flex flex-col">
                                <div>
                                    <h2 class="text-2xl lg:text-3xl font-bold mb-2 text-white">${item.title}</h2>
                                    <p class="text-md text-cyan-400 mb-4">${item.year}</p>
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
                                <img src="${item.imageUrl}" alt="${item.title} - ${item.type} project" class="max-w-full max-h-[70vh] object-contain rounded-lg shadow-md">
                            </div>
                            <div class="text-left mt-4">
                                <h2 class="text-2xl lg:text-3xl font-bold mb-2 text-white">${item.title}</h2>
                                <p class="text-md text-cyan-400 mb-4">${item.year}</p>
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

    modalContent.innerHTML = `
        ${closeButtonHtml}
        <div>${finalHtmlContent}</div>
    `;
}

function closeModal(updateUrl = true) {
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
     
     if (updateUrl) {
         const newUrl = new URL(window.location);
         newUrl.searchParams.delete('item');
         window.history.pushState({}, '', newUrl);
     }
}

function handleScroll() {
    if (scrollToTopBtn) {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', handleScroll);

window.addEventListener('popstate', (event) => {
    if (event.state && event.state.modalItem) {
        showItemDetails(event.state.modalItem, null, false);
    } else {
        closeModal(false);
    }
});

window.addEventListener('keydown', (e) => {
    if (modal && !modal.classList.contains('hidden') && e.key === 'Escape') {
        closeModal();
    }
});

if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target.id === 'item-modal') {
            closeModal();
        }
    });
}

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
    
    const urlParams = new URLSearchParams(window.location.search);
    const itemId = urlParams.get('item');
    if (itemId) {
        showItemDetails(parseInt(itemId), null, false);
    }
    
    const header = document.getElementById('main-header');

    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.style.transform = 'translateY(-100%)';
                header.style.opacity = '0';
            } else {
                header.style.transform = 'translateY(0)';
                header.style.opacity = '1';
            }
        });
    }
	
    const sizzleTriggers = document.querySelectorAll('.sizzle-trigger');
    const sizzleModal = document.getElementById('sizzle-modal');
    const sizzleModalContent = document.getElementById('sizzle-modal-content');
    const sizzleIframeFs = document.getElementById('sizzle-iframe-fullscreen');
    const closeSizzleBtn = document.getElementById('close-sizzle');

    if (sizzleTriggers.length > 0 && sizzleModal && sizzleIframeFs) {
        
        sizzleTriggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
                const videoUrl = trigger.getAttribute('data-video-url');
                
                sizzleModal.classList.remove('hidden');
                
                setTimeout(() => {
                    sizzleModal.classList.remove('opacity-0');
                    sizzleModalContent.classList.remove('scale-95');
                    sizzleModalContent.classList.add('scale-100');
                }, 10);
                
                sizzleIframeFs.src = videoUrl;
            });
        });

        const closeSizzleModal = () => {
            sizzleModal.classList.add('opacity-0');
            sizzleModalContent.classList.remove('scale-100');
            sizzleModalContent.classList.add('scale-95');
            
            setTimeout(() => {
                sizzleModal.classList.add('hidden');
                sizzleIframeFs.src = "";
            }, 300);
        };

        closeSizzleBtn.addEventListener('click', closeSizzleModal);
        
        sizzleModal.addEventListener('click', (e) => {
            if (e.target === sizzleModal) closeSizzleModal();
        });
        
        window.addEventListener('keydown', (e) => {
            if (!sizzleModal.classList.contains('hidden') && e.key === 'Escape') {
                closeSizzleModal();
            }
        });
    }
});