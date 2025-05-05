import "./App.css";
import { Carousel } from "react-responsive-carousel";
import Card from "./Card";
import { useState, useEffect } from 'react';


function Caroussel() {


    const [Tinterval, setInterval] = useState(25); // Start with 0.5s

    useEffect(() => {
      // After 0.5s, switch to 3.5s interval and enable autoplay
      const timeout = setTimeout(() => {
        setInterval(3500);
      }, 50);
  
      return () => clearTimeout(timeout);
    }, []);


    const informations = [{ id: "30",
        author: "Shyamanta Baruah",
        text : "This analytics platform is a game-changer! It's easy to use, provides valuable insights, and has helped me make smart business decision. I highly recommend it.",
        image : "/profilePictures/téléchargement .jpg",
        title : "Founder",
        company : " Sisyphus Venture",
    },
    { id: "30",
        author: "Emma Carlson",
        text : "This marketing tool is a total game-changer. I highly recommend giving it a try.",
        image : "/profilePictures/téléchargement (4).jpg",
        title : "Marketing Director",
        company : "BrightWave Analytics",
    },
    { id: "30",
        author: "Sophia Nguyen",
        text : " It's simple to use, reveals key patterns, and has improved how we make decisions. I’d definitely recommend it.",
        image : "/profilePictures/téléchargement (3).jpg",
        title : " Product Manager",
        company : "InsightLoop Technologies",
    },
    { id: "30",
        author: "Lena Ramirez",
        text : "This software solution really stands out! It’s easy to navigate, offers meaningful analytics. I strongly endorse it.",
        image : "/profilePictures/téléchargement (2).jpg",
        title : "Chief Operations",
        company : "Officer at DataVista Solutions",
    }
    ]

  return (


    <Carousel className="crsl"  autoPlay={true} infiniteLoop={true} interval={Tinterval} centerSlidePercentage={50} showArrows={false} showThumbs={false} centerMode={true} showStatus={false}>
        {/* {images.map(image => <img src={image.download_url} alt={image.author} />)} */}
        {informations.map(info => <Card  text={info.text}  image={info.image}   name={info.author}  title={info.title} company={info.company} ></Card>)}
    </Carousel>
  );
}

export default Caroussel;