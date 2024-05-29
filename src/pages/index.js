import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import React from "react";
import { useState } from "react";
import Landing from "@/components/Landing";
import Audiobook from "./audiobook";
import { Accordion } from "@/components/Accordion";

export default function Home() {
  const [chapters, setChapters] = useState([]);
  const [selectedChapter, setSelectedChapter] = useState(1);
  const [selected_shlok, setSelectedShlok] = useState(1);
  const [noofslokens, setNoofslokens] = useState(47);
  const [isLoading, setIsLoading] = useState(false);
  const [range, setRange] = useState([]);
  const [shlok_data, setShlokData] = useState();

  React.useEffect(() => {
    let url = "https://bhagavadgitaapi.in/chapters/";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setChapters(data);
        //   setshow(data["results"]);
      });
  }, [selectedChapter]); // Include selectedChapter in the dependency array
  
  const handleSelectedChapter = (e) => {
    let current = e.target.value;
    setSelectedChapter(e.target.value);
    setVerses(current);
  };

  const handleSelectedShlok = (e) => {
    let c = e.target.value;
    setSelectedShlok(e.target.value);
    console.log(c);
  };

  React.useEffect(() => {
    // api call
    console.log(selectedChapter, selected_shlok);
    let url = `https://bhagavadgitaapi.in/slok/${selectedChapter}/${selected_shlok}/`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setShlokData(data))
      .catch((err) => console.log(err));
  }, [selected_shlok]);

  // set  no of slokas for given chapter 
  function setVerses(current) {
    for (let chapter of chapters) {
      if (current == chapter.chapter_number) {
        console.log(chapter.verses_count);
        setNoofslokens(chapter.verses_count);
        return chapter.verses_count;
      }
    };
  }

  React.useEffect(() => {
    console.log(noofslokens, "shlok_options");
    let range1 = Array.from({ length: noofslokens }, (_, index) => index + 1);
    setRange(range1);
  }, [noofslokens]);

  const nextShlok = () => {
    console.log(selected_shlok, noofslokens);
    if (selected_shlok < noofslokens) {
      setSelectedShlok(parseInt(selected_shlok) + 1);
    } else {
      if (selectedChapter < 18) {
        setVerses(parseInt(selectedChapter) + 1);
        setSelectedChapter(parseInt(selectedChapter) + 1);
        setSelectedShlok(1)
      }
    }
  };

  const prevShlok = () => {
    console.log(selected_shlok, "PrevShlok");
    if (selected_shlok > 1) {
      setSelectedShlok(parseInt(selected_shlok) - 1);
    } else {
      if (selectedChapter > 1) {
        setSelectedChapter(parseInt(selectedChapter) - 1);
        let c = setVerses(parseInt(selectedChapter) - 1);
        setSelectedShlok(c)
      }
    }
  };

  return (
    <div>
      <Navbar />
      <br />
      <Landing />
      <div id="shlok">
        <div className="flex md:container justify-center">
          <div className="form-control mr-4 w-full max-w-xs">
            <label className="label">
              <span className="label-text">Pick the Chapter</span>
            </label>
            <select
              value={selectedChapter}
              onChange={handleSelectedChapter}
              className="select select-bordered"
            >
              {chapters.map((chapter, index) => (
                <option value={chapter.chapter_number} key={index}>
                  {chapter.chapter_number}
                </option>
              ))}
            </select>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Pick the Shlok</span>
            </label>
            <select
              value={selected_shlok}
              onChange={handleSelectedShlok}
              className="select select-bordered"
            >
              {range.map((shlok, index) => (
                <option value={shlok} key={index}>
                  {shlok}
                </option>
              ))}
            </select>
          </div>
        </div>

        <br />

        <div className="container">
          <div className="prose text-center m-auto max-h-48 p-8 overflow-y-auto">
            <h2>{shlok_data?.slok}</h2>
            <p>{shlok_data?.chinmay?.hc}</p>
          </div>
        </div>
        <div className="flex justify-center items-center m-10 ">
          <div className="btn-group btn-group-vertical lg:btn-group-horizontal">
            <button onClick={prevShlok} className="btn btn-outline">
              PREVIOUS PAGE
            </button>

            <button onClick={nextShlok} className="btn btn-outline mr-auto">
              NEXT PAGE
            </button>
          </div>
        </div>

        <br />
        <Accordion />
        <Footer />
      </div>
    </div>
  );
}
