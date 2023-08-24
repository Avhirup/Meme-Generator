import logo from '../assets/troll-face.png'
import './Header.scss'
export default function Header() {
    return (
        <header>
            <div className="left">
                <img src={logo} alt="logo" />
                <h3>Meme Generator</h3>
            </div>
            <div className="right">
                <p>React Course - Project 3</p>
            </div>
        </header>
    )
}