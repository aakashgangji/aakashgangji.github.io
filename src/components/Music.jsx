import React, { useState, useEffect } from 'react';
import './music.css';

const Music = () => {
  const [backgroundClass, setBackgroundClass] = useState('dark-space');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackgroundClass(backgroundClasses[Math.floor(Math.random() * backgroundClasses.length)]);
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  const songs = [
    {
      title: "Thoda Karlo Mujhse Pyaar",
      featuring: "Syed Mavahid & Abhishek Kanti",
      releaseDate: "August 11, 2024",
      spotifyLink: "https://open.spotify.com/track/5SqUc5g7fyafZhD55j2g8i?si=78fa11bda26c4bbc",
      appleMusicLink: "https://music.apple.com/us/album/thoda-karlo-mujhse-pyaar-feat-syed-mavahid-abhishek-kanti/1762187354?i=1762187355",
      youtubeLink:"https://www.youtube.com/watch?v=2zvngEL9KjU",
      posterUrl: "/src/images/poster.png",
      cdUrl: "/src/images/cd.png"
    },
    {
      title: "The RCB Song",
      releaseDate: "2019",
      youtubeLink: "https://www.youtube.com/watch?v=ZDOuwi85-uQ",
      posterUrl: "/src/images/rcb.png",
      cdUrl: "/src/images/cd.png"
    }
  ];

  return (
    <div className={`music-portfolio min-h-screen p-4 md:p-8 ${backgroundClass} transition-all duration-1000 ease-in-out`}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="relative z-10">
        <header className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-8 gap-4">
          <button 
            onClick={() => window.location.href='/'} 
            className="btn px-3 py-1 md:px-4 md:py-2 rounded-md hover:text-gray-300 transition duration-300 text-sm md:text-base"
          >
            Home
          </button>
          <h1 className="text-2xl md:text-4xl font-bold text-center text-white animate-pulse">
            Aakash Gangji
          </h1>
          <div className="flex space-x-2 md:space-x-4">
            <a href="https://instagram.com/aakashgangji" target="_blank" rel="noopener noreferrer">
              <img src="src/images/instagram.svg" alt="Instagram" className="w-6 h-6 md:w-8 md:h-8 inline-block" />
            </a>
            <a href="https://snapchat.com/t/EhlZc8d2" target="_blank" rel="noopener noreferrer">
              <img src="src/images/snapchat.svg" alt="Snapchat" className="w-6 h-6 md:w-8 md:h-8 inline-block" />
            </a>
            <a href="https://www.youtube.com/channel/UCjm7O7W-NUrjSUq0pVUm8Dg" target="_blank" rel="noopener noreferrer">
              <img src="/src/images/youtube.svg" alt="youtube" className="w-6 h-6 md:w-8 md:h-8 inline-block" rx="15%" ry="15%" />
            </a>
          </div>
        </header>
        
        <div className="hidden md:block absolute top-10 left-10 text-6xl text-white opacity-20 animate-bounce">♪</div>
        <div className="hidden md:block absolute top-10 right-40 text-6xl text-white opacity-10 animate-bounce">♫</div>
        <div className="hidden md:block absolute bottom-10 right-10 text-6xl text-white opacity-20 animate-bounce delay-1000">♫</div>

        <section className="biography bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-md p-4 md:p-6 mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">About Aakash Gangji</h2>
          <p className="text-gray-300 text-sm md:text-base mb-3 md:mb-4">
            Born on July 4, 2000, I am a pop artist from Kalaburagi, Karnataka, India. My musical journey began in 2019 with the release of "The RCB Song," a Kannada rap parody supporting my favorite IPL team.
          </p>
          <p className="text-gray-300 text-sm md:text-base">
            My debut single "Thoda Karlo Mujhse Pyaar" features Syed Mavahid and Abhishek Kanti Prod by. Saikumar Hodalur. The song captures the raw, heartfelt emotions of love and longing, showcasing my growth as an artist.
          </p>
        </section>
        
        <section className="latest-release bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-md p-4 md:p-6 mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">Latest Release</h2>
          <div className="release-info flex flex-col md:flex-row items-center gap-4">
            <div className="poster-container relative md:mr-8">
              <a href={songs[0].youtubeLink} target="_blank" rel="noopener noreferrer">
                <img 
                  src={songs[0].cdUrl} 
                  alt="CD" 
                  className="cd-image absolute top-0 left-0 w-20 h-20 md:w-24 md:h-24 object-cover rounded-full cursor-pointer"
                />
              </a>
              <img 
                src={songs[0].posterUrl} 
                alt={songs[0].title} 
                className="poster-image w-20 h-20 md:w-24 md:h-24 object-cover rounded-lg"
              />
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-lg md:text-xl font-medium text-indigo-300">{songs[0].title}</h3>
              <p className="text-gray-300 text-sm md:text-base">feat. {songs[0].featuring}</p>
              <p className="text-xs md:text-sm text-gray-400 mt-1 md:mt-2">Release Date: {songs[0].releaseDate}</p>
              <div className="mt-3 md:mt-4 flex flex-col sm:flex-row gap-2 justify-center md:justify-start">
                <a 
                  href={songs[0].spotifyLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-green-500 text-white px-3 py-1 md:px-4 md:py-2 rounded-full hover:bg-green-600 transition duration-300 text-sm md:text-base"
                >
                  Spotify
                </a>
                <a 
                  href={songs[0].appleMusicLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-pink-500 text-white px-3 py-1 md:px-4 md:py-2 rounded-full hover:bg-pink-600 transition duration-300 text-sm md:text-base"
                >
                  Apple Music
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="discography bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-md p-4 md:p-6 mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">Discography</h2>
          <ul className="space-y-4">
            {songs.map((song, index) => (
              <li key={index} className="border-b border-gray-600 pb-4 last:border-b-0 flex flex-col sm:flex-row items-center gap-4">
                <div className="poster-container relative md:mr-8">
                  <img src={song.posterUrl} alt={song.title} className="poster-image w-20 h-20 md:w-24 md:h-24 object-cover rounded-lg" />
                  <img src={song.cdUrl} alt="CD" className="cd-image absolute top-0 left-0 w-20 h-20 md:w-24 md:h-24 object-cover rounded-full" />
                </div>
                <div className="flex-grow text-center sm:text-left">
                  <h3 className="text-base md:text-lg font-medium text-indigo-300">{song.title}</h3>
                  {song.featuring && <p className="text-xs md:text-sm text-gray-300">feat. {song.featuring}</p>}
                  <p className="text-xs md:text-sm text-gray-400">Release Date: {song.releaseDate}</p>
                  <div className="mt-2 flex flex-wrap gap-2 justify-center sm:justify-start">
                    {song.spotifyLink && (
                      <a href={song.spotifyLink} target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white p-1 md:p-2 rounded-full hover:bg-green-600 transition duration-300">
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                        </svg>
                      </a>
                    )}
                    {song.appleMusicLink && (
                      <a href={song.appleMusicLink} target="_blank" rel="noopener noreferrer" className="bg-[#FA243C] text-white p-1 md:p-2 rounded-full hover:bg-[#D9210D] transition duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 md:w-5 md:h-5">
                          <circle cx="12" cy="12" r="12" fill="#FA243C"/>
                          <path fill="#ffffff" d="M7.05 16.85v-7.6c0-.43.48-.52.48-.52l6.55-1.33c.52-.1.57.47.57.47v5.8c0 .71-2.14.95-2.14.95-2.7.43-2.28 4.99 1.43 3.75 1.42-.52 1.66-1.9 1.66-3.28V6.18s0-.95-.81-.71l-8.08 1.66s-.62.1-.62.86v9.65c0 .71-2.14.95-2.14.95-2.7.43-2.28 4.99 1.43 3.75 1.42-.52 1.66-1.9 1.66-3.28"/>
                        </svg>
                      </a>
                    )}
                    {song.youtubeLink && (
                      <a href={song.youtubeLink} target="_blank" rel="noopener noreferrer" className="bg-red-500 text-white p-1 md:p-2 rounded-full hover:bg-red-600 transition duration-300">
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="influences bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-md p-4 md:p-6 mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">Music Videos</h2>
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="aspect-w-16 aspect-h-9 w-full">
              <iframe 
                src="https://www.youtube.com/embed/2zvngEL9KjU" 
                allowFullScreen
                className="w-full h-48 md:h-64"
              />
            </div>
            <div className="aspect-w-16 aspect-h-9 w-full">
              <iframe 
                src="https://www.youtube.com/embed/ZDOuwi85-uQ" 
                allowFullScreen
                className="w-full h-48 md:h-64"
              />
            </div>
          </div>
        </section>

        <section className="streaming-platforms bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-md p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">Listen to my songs on</h2>
          <ul className="flex flex-wrap gap-2 justify-center md:justify-start">
            <li>
              <a 
                href="https://music.apple.com/in/artist/aakash-gangji/1762185699" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-pink-600 text-white px-3 py-1 md:px-4 md:py-2 rounded-full hover:bg-pink-400 transition duration-300 text-sm md:text-base"
              >
                Apple Music
              </a>
            </li>
            <li>
              <a 
                href="https://open.spotify.com/artist/0q8iGRi1gXSAMj7PhdZsVn?si=WJ6KmS4xR4aioj4XXbngkw" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-green-600 text-white px-3 py-1 md:px-4 md:py-2 rounded-full hover:bg-green-400 transition duration-300 text-sm md:text-base"
              >
                Spotify
              </a>
            </li>
            <li>
              <a 
                href="https://music.youtube.com/channel/UCjm7O7W-NUrjSUq0pVUm8Dg?si=L_bYmruB2S8Gs9UW" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-red-600 text-white px-3 py-1 md:px-4 md:py-2 rounded-full hover:bg-red-400 transition duration-300 text-sm md:text-base"
              >
                YouTube Music
              </a>
            </li>
            <li>
              <a 
                href="https://amazon.com/music/player/artists/B0DCNR3YYJ/aakash-gangji?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_1iWT9eHKYgJjIlMYx9ilokyLy" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-blue-600 text-white px-3 py-1 md:px-4 md:py-2 rounded-full hover:bg-blue-400 transition duration-300 text-sm md:text-base"
              >
                Amazon Music
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Music;
