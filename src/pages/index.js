import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import React from "react";
import { useState } from "react";

export default function Home() {
  const [chapters, setchapters] = useState([]);
  const [selectedChapter, setselectedChapter] = useState(1);
  const [selected_shlok, setselected_shlok] = useState(1);
  const [noofslokens, setnoofslokens] = useState(47);
  const [isLoading, setIsLoading] = useState(false);

  const [range, setrange] = useState([]);
  const [shlok_data, set_shlok_data] = useState();
  React.useEffect(() => {
    let url = "https://bhagavadgitaapi.in/chapters/";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setchapters(data);
        //   setshow(data["results"]);
      });
  }, []);

  const handleSelectedChapter = (e) => {
    let current = e.target.value;
    setselectedChapter(e.target.value);
    setverses(current);
  };

  const handleSelected_shlok = (e) => {
    let c = e.target.value;
    setselected_shlok(e.target.value);
    console.log(c);
  };

  React.useEffect(() => {
    // api call
    console.log(selectedChapter, selected_shlok);
    let url = `https://bhagavadgitaapi.in/slok/${selectedChapter}/${selected_shlok}/`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => set_shlok_data(data))
      .catch((err) => console.log(err));
  }, [selected_shlok]);

  // set  no of slokas for given chapter 
  function setverses(current) {
    for (let chapter of chapters){
      if (current == chapter.chapter_number) {
        console.log(chapter.verses_count);
        setnoofslokens(chapter.verses_count);
        return (chapter.verses_count);
      }
    };
  }

  const shlok_options = [];
  React.useEffect(() => {
    console.log(noofslokens, "shlok_options");
    let range1 = Array.from({ length: noofslokens }, (_, index) => index + 1);
    setrange(range1);
  }, [noofslokens]);

  const NextShlok = () => {
    console.log(selected_shlok, noofslokens);
    
    if (selected_shlok < noofslokens) {
      setselected_shlok(parseInt(selected_shlok) + 1);
    } else {
      // console.log("next chapter")
      if (selectedChapter<18){

        setverses(parseInt(selectedChapter) + 1);
        setselectedChapter(parseInt(selectedChapter) + 1);
        

        setselected_shlok(1)
      }
    }
  };
  const PrevShlok = () => {
    console.log(selected_shlok, "PrevShlok");
    if (selected_shlok > 1) {
      setselected_shlok(parseInt(selected_shlok) - 1);
    } else {
      if (selectedChapter > 1) {
        // Decrease the chapter number
        setselectedChapter(parseInt(selectedChapter) - 1);

        let c = setverses(parseInt(selectedChapter) - 1);
        setselected_shlok(c)
  
        // setselected_shlok(parseInt(setnoofslokens));

      }
    }
  };

  return (
    <div>
      <Navbar />

      <br />

    

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

        <div  className="form-control w-full max-w-xs">
          <label className="label">
            <span   className="label-text"> Pick the Shlok</span>
          </label>
          <select
            value={selected_shlok}
            onChange={handleSelected_shlok}
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
        <div className="prose text-center m-auto">
          <h2>{shlok_data?.slok}</h2>
          <p>{shlok_data?.chinmay?.hc}</p>
        </div>
      </div>
      <div className="flex justify-center items-center m-10 ">
      <div className="btn-group btn-group-vertical lg:btn-group-horizontal">
        <button onClick={PrevShlok} className="btn btn-outline">
          PREVIOUS PAGE
        </button>

        <button  onClick={NextShlok} className="btn btn-outline mr-auto">
          NEXT PAGE
        </button>
      </div>
      </div>
      
      

      <br />
      <Footer />
    </div>
  );
}
