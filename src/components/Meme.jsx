import { useState, useEffect } from 'react';
// import memesData from '../../memesData';
import './Meme.scss'
export default function Meme() {

    let memeImgUrl;
    function getMemeImage(e) {
        e.preventDefault();
        if (allMemeImage.length > 0) {
            const memesArray = allMemeImage;
            const ranNo = Math.floor((Math.random() * memesArray.length) + 1);
            memeImgUrl = memesArray[ranNo].url;
            setMeme((prevState) => ({ ...prevState, memeImage: memeImgUrl }));
        }
        else {
            alert('Somthing went wrong, PLease refresh the page');
        }
    }

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        memeImage: "https://i.imgflip.com/1bgw.jpg"
    });

    const [allMemeImage, setAllMemeImage] = useState([]);

    function handleChange(event) {
        setMeme(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }))
    }

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImage(data.data.memes));
    }, [])

    return (
        <main>
            <form className="form">
                <div className="form-inputs">
                    <input type="text" className="form-input" placeholder="Top Text" name="topText" onChange={handleChange} value={meme.topText} />
                    <input type="text" className="form-input" placeholder="Bottom Text" name="bottomText" onChange={handleChange} value={meme.bottomText} />
                </div>
                <button className="form-btn" onClick={getMemeImage}>Get a new meme image 📷</button>
            </form>
            <div className="memeImage">
                <img src={meme.memeImage} alt="📄" className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main >
    )
}