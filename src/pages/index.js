// /* eslint-disable react-hooks/exhaustive-deps */

// import Newsletter from "@/components/Newsletter";
// import Navbar from "@/components/Navbar";
// import Carousel from "@/components/Carousel";
// import Footer from "@/components/Footer";
// import React from "react";
// import { useState } from "react";
// import Landing from "@/components/Landing";
// import Audiobook from "./audiobook";
// import { Accordion } from "@/components/Accordion";

// export default function Home() {
//   const [chapters, setChapters] = useState([]);
//   const [selectedChapter, setSelectedChapter] = useState(1);
//   const [selected_shlok, setSelectedShlok] = useState(1);
//   const [noofslokens, setNoofslokens] = useState(47);
//   const [isLoading, setIsLoading] = useState(false);
//   const [range, setRange] = useState([]);
//   const [shlok_data, setShlokData] = useState();

//   React.useEffect(() => {
//     let url = "";
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setChapters(data);
//         //   setshow(data["results"]);
//       });
//   }, [selectedChapter]);// eslint-disable-line react-hooks/exhaustive-deps

//   const handleSelectedChapter = (e) => {
//     let current = e.target.value;
//     setSelectedChapter(e.target.value);
//     setVerses(current);
//   };

//   const handleSelectedShlok = (e) => {
//     let c = e.target.value;
//     setSelectedShlok(e.target.value);
//     console.log(c);
//   };

//   React.useEffect(() => {
//     // api call
//     console.log(selectedChapter, selected_shlok);
//     let url = `https://bhagavadgitaapi.in/slok/${selectedChapter}/${selected_shlok}/`;
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => setShlokData(data))
//       .catch((err) => console.log(err));
//   }, [selected_shlok]);

//   // set  no of slokas for given chapter
//   function setVerses(current) {
//     for (let chapter of chapters) {
//       if (current == chapter.chapter_number) {
//         console.log(chapter.verses_count);
//         setNoofslokens(chapter.verses_count);
//         return chapter.verses_count;
//       }
//     };
//   }

//   React.useEffect(() => {
//     console.log(noofslokens, "shlok_options");
//     let range1 = Array.from({ length: noofslokens }, (_, index) => index + 1);
//     setRange(range1);
//   }, [noofslokens]);

//   const nextShlok = () => {
//     console.log(selected_shlok, noofslokens);
//     if (selected_shlok < noofslokens) {
//       setSelectedShlok(parseInt(selected_shlok) + 1);
//     } else {
//       if (selectedChapter < 18) {
//         setVerses(parseInt(selectedChapter) + 1);
//         setSelectedChapter(parseInt(selectedChapter) + 1);
//         setSelectedShlok(1)
//       }
//     }
//   };

//   const prevShlok = () => {
//     console.log(selected_shlok, "PrevShlok");
//     if (selected_shlok > 1) {
//       setSelectedShlok(parseInt(selected_shlok) - 1);
//     } else {
//       if (selectedChapter > 1) {
//         setSelectedChapter(parseInt(selectedChapter) - 1);
//         let c = setVerses(parseInt(selectedChapter) - 1);
//         setSelectedShlok(c)
//       }
//     }
//   };

//   return (
//     <div>
//       <Navbar />
//       <br />
//       <Landing />
//       <div id="shlok">
//         <div className="flex md:container justify-center">
//           <div className="form-control mr-4 w-full max-w-xs">
//             <label className="label">
//               <span className="label-text">Pick the Chapter</span>
//             </label>
//             <select
//               value={selectedChapter}
//               onChange={handleSelectedChapter}
//               className="select select-bordered"
//             >
//               {chapters.map((chapter, index) => (
//                 <option value={chapter.chapter_number} key={index}>
//                   {chapter.chapter_number}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="form-control w-full max-w-xs">
//             <label className="label">
//               <span className="label-text">Pick the Shlok</span>
//             </label>
//             <select
//               value={selected_shlok}
//               onChange={handleSelectedShlok}
//               className="select select-bordered"
//             >
//               {range.map((shlok, index) => (
//                 <option value={shlok} key={index}>
//                   {shlok}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>

//         <br />

//         <div className="container">
//           <div className="prose text-center m-auto max-h-48 p-8 overflow-y-auto">
//             <h2>{shlok_data?.slok}</h2>
//             <p>{shlok_data?.chinmay?.hc}</p>
//           </div>
//         </div>
//         <div className="flex justify-center items-center m-10 ">
//           <div className="btn-group btn-group-vertical lg:btn-group-horizontal">
//             <button onClick={prevShlok} className="btn btn-outline">
//               PREVIOUS PAGE
//             </button>

//             <button onClick={nextShlok} className="btn btn-outline mr-auto">
//               NEXT PAGE
//             </button>
//           </div>
//         </div>

//         <br />
//         <Accordion />
//         <Newsletter/>
//         <Footer />
//       </div>
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Landing from "@/components/Landing";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { Accordion } from "@/components/Accordion";
import Head from "next/head";
import WhatsAppButton from '@/components/WhatsAppButton';
import SkeletonLoader from '@/components/SkeletonLoader'; // Import the SkeletonLoader component

export default function Home() {
  const [chapters, setChapters] = useState([]);
  const [verses, setVerses] = useState([]);
  const [verseDetails, setVerseDetails] = useState(null);
  const [currentChapter, setCurrentChapter] = useState(null);
  const [currentVerse, setCurrentVerse] = useState(null);
  const [showChapters, setShowChapters] = useState(false);
  const [loadingChapters, setLoadingChapters] = useState(true); // Loading state for chapters
  const [loadingVerses, setLoadingVerses] = useState(false); // Loading state for verses
  const [loadingVerseDetails, setLoadingVerseDetails] = useState(false); // Loading state for verse details
  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    fetchChapters();
  }, []);

  useEffect(() => {
    if (query.chapter) {
      fetchVerses(query.chapter);
      setCurrentChapter(query.chapter);
      setVerseDetails(null);
    }
  }, [query.chapter]);

  useEffect(() => {
    if (query.verse) {
      fetchVerseDetails(query.chapter, query.verse);
      setCurrentVerse(query.verse);
    }
  }, [query.chapter, query.verse]);

  const fetchChapters = async () => {
    setLoadingChapters(true);
    const res = await fetch("https://bhagavadgita-api-psi.vercel.app/api/chapters");
    const data = await res.json();
    const chaptersWithVersesCount = await Promise.all(
      data.chapters.map(async (chapter) => {
        const verseRes = await fetch(`https://bhagavadgita-api-psi.vercel.app/api/verses/${chapter.chapter_number}`);
        const verseData = await verseRes.json();
        return { ...chapter, verses_count: verseData.verses.length };
      })
    );
    setChapters(chaptersWithVersesCount);
    setLoadingChapters(false);
  };

  const fetchVerses = async (chapterId) => {
    setLoadingVerses(true);
    const res = await fetch(`https://bhagavadgita-api-psi.vercel.app/api/verses/${chapterId}`);
    const data = await res.json();
    setVerses(data.verses);
    setLoadingVerses(false);
  };

  const fetchVerseDetails = async (chapterId, verseId) => {
    setLoadingVerseDetails(true);
    const res = await fetch(`https://bhagavadgita-api-psi.vercel.app/api/verse/${chapterId}.${verseId}`);
    const data = await res.json();
    setVerseDetails(data.verseDetails);
    setLoadingVerseDetails(false);
  };

  const handleBackToChapters = () => {
    setCurrentChapter(null);
    setCurrentVerse(null);
    router.push("/");
  };

  const handleBackToVerses = () => {
    setCurrentVerse(null);
    router.push(`/?chapter=${currentChapter}`);
  };

  const handleBeginNewLife = () => {
    setShowChapters(true);
    router.push("/");
  };

  return (
    <div>
      
<Head>
<title>Explore Bhagavad Gita Chapters, Verses, Translations, and Audio</title>
<meta
  name="description"
  content="Explore the chapters and verses of the Bhagavad Gita with detailed translations and audio. Discover the profound teachings of this sacred text."
/>
<meta
  name="keywords"
  content="Bhagavad Gita, chapters, verses, translations, audio, Hindu scripture"
/>
<meta name="author" content="Satyam Singh" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta property="og:title" content="Explore Bhagavad Gita Chapters, Verses, Translations, and Audio" />
<meta
  property="og:description"
  content="Explore the chapters and verses of the Bhagavad Gita with detailed translations and audio. Discover the profound teachings of this sacred text."
/>
<meta property="og:image" content="/path/to/your-image.jpg" />
<meta property="og:url" content="https://www.bhagavadgita.site/" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Explore Bhagavad Gita Chapters, Verses, Translations, and Audio" />
<meta
  name="twitter:description"
  content="Explore the chapters and verses of the Bhagavad Gita with detailed translations and audio. Discover the profound teachings of this sacred text."
/>
<meta name="twitter:image" content="/path/to/your-image.jpg" />
<script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Website",
    url: "https://www.bhagavadgita.site/",
    name: "Explore Bhagavad Gita Chapters, Verses, Translations, and Audio",
    description:
      "Explore the chapters and verses of the Bhagavad Gita with detailed translations and audio. Discover the profound teachings of this sacred text.",
    author: {
      "@type": "Person",
      name: "Satyam Singh",
    },
  })}
</script>
<link rel="canonical" href="https://www.bhagavadgita.site/" />
</Head>
  
      <Navbar />
      {!showChapters && <Landing onBeginNewLife={handleBeginNewLife} />}
      {showChapters && (
        <div className="custom-container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Explore Bhagavad Gita Chapters</h1>
  
          {/* Breadcrumbs */}
          <div className="custom-breadcrumbs text-sm mb-4">
            <ul className="flex space-x-2">
              {currentVerse && (
                <>
                  <li>
                    <button
                      onClick={handleBackToVerses}
                      className="text-orange-600 hover:underline"
                    >
                      Back to Verses
                    </button>
                  </li>
                  <li>/</li>
                </>
              )}
              {currentChapter && !currentVerse && (
                <>
                  <li>
                    <button
                      onClick={handleBackToChapters}
                      className="text-orange-600 hover:underline"
                    >
                      Back to Chapters
                    </button>
                  </li>
                  <li>/</li>
                </>
              )}
            </ul>
          </div>
  
          {/* Chapter and Verse Cards */}
          {!currentChapter && !currentVerse && (
            <div>
              <h2 className="text-xl font-bold mb-2">Explore the Chapters</h2>
              {loadingChapters ? (
                <SkeletonLoader />
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {chapters.map((chapter) => (
                    <Link
                      key={chapter.chapter_number}
                      href={`/?chapter=${chapter.chapter_number}`}
                    >
                      <div className="p-4 border rounded shadow-sm hover:shadow-md cursor-pointer custom-h-48 flex flex-col justify-between custom-transition-transform custom-transform hover:custom-hover-scale-105">
                        <div>
                          <h3 className="text-lg font-semibold text-orange-600">
                            Chapter {chapter.chapter_number}
                          </h3>
                          <h3 className="text-lg font-semibold">
                            {chapter.name}
                          </h3>
                        </div>
                        <p className="text-gray-600 mt-2 flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {chapter.verses_count} Verses
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
          {currentChapter && !currentVerse && (
            <div>
              <button
                onClick={handleBackToChapters}
                className="mb-4 p-2 border-black bg-yellow-500 text-black rounded custom-shadow-md"
              >
                Back to Chapters
              </button>
              <h2 className="text-xl font-bold mb-2">
                Chapter {currentChapter} Verses
              </h2>
              {loadingVerses ? (
                <SkeletonLoader />
              ) : (
                <div className="grid grid-cols-1 gap-4">
                  {verses.map((verse, index) => (
                    <Link
                      key={verse.verse_number}
                      href={`/?chapter=${currentChapter}&verse=${verse.verse_number}`}
                    >
                      <div className="p-4 border rounded shadow-sm hover:shadow-md cursor-pointer custom-h-24 flex items-center custom-transition-transform custom-transform hover:custom-hover-scale-105">
                        <button className="w-12 h-12 border border-black bg-yellow-500 text-black rounded-lg flex items-center justify-center mr-2">
                          Verse {index + 1}
                        </button>
                        <h3 className="text-lg truncate">{verse.text}</h3>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
          {verseDetails && (
            <div className="verse-details">
              <button
                onClick={handleBackToVerses}
                className="mb-4 p-2 custom-bg-gray-200 text-black bg-yellow-500 rounded custom-shadow-md"
              >
                Back to Verses
              </button>
              <h2 className="verse-details-heading text-yellow-500">
                Verse {verseDetails.verse_number}
              </h2>
              {loadingVerseDetails ? (
                <SkeletonLoader />
              ) : (
                <div className="verse-details-section">
                  <div className="verse-details-section-title text-yellow-600">
                    Sanskrit:
                  </div>
                  <div className="verse-details-section-content">
                    {verseDetails.sanskrit_shlok}
                  </div>
                  <div className="verse-details-section">
                    <div className="verse-details-section-title text-yellow-600">
                      Transliteration:
                    </div>
                    <div className="verse-details-section-content">
                      {verseDetails.english_shlok}
                    </div>
                  </div>
                  <div className="verse-details-section">
                    <div className="verse-details-section-title text-yellow-600">
                      Translation:
                    </div>
                    <div className="verse-details-section-content">
                      {verseDetails.translation}
                    </div>
                  </div>
                  <div className="verse-details-purport mt-4">
                    <h3 className="text-lg font-bold mb-2 text-yellow-600">
                      Purport:
                    </h3>
                    {Array.isArray(verseDetails.purport) ? (
                      verseDetails.purport.map((text, index) => (
                        <p key={index} className="mb-2">
                          {text}
                        </p>
                      ))
                    ) : (
                      <p>No purport available.</p>
                    )}
                  </div>
                  <div className="verse-details-audio mt-4">
                    <h3 className="text-lg font-bold mb-2 text-yellow-600">
                      Listen to the Verse:
                    </h3>
                    <audio controls src={verseDetails.audio_url}>
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
      <WhatsAppButton />
      <Accordion />
      <Newsletter />
      <Footer />
    </div>
  );
}

  









