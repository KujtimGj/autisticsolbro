import Logo from "../assets/SOLBRO.png";
import "./home.scss";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { SiSolana } from "react-icons/si";
import { useState, useRef } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import video2 from "../assets/solbroking2.mp4";
import { MdOutlineContentCopy } from "react-icons/md";
import battle from "../assets/battle.mp4";
import chart from "../assets/chart.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const Home = () => {

    const handleBuyNow = () => {
        window.location.href = ""
    }


    const [activeItem, setActiveItem] = useState('Home');

    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const tokenomicsRef = useRef(null);
    const contactRef = useRef(null);

    const handleItemClick = (item) => {
        setActiveItem(item);
        if (item === 'Home' && homeRef.current) {
            homeRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (item === 'About' && aboutRef.current) {
            aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (item === 'Tokenomics' && tokenomicsRef.current) {
            tokenomicsRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (item === 'Contact' && contactRef.current) {
            contactRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };


    const handleTwitterClick = () => {
        window.open("https://x.com/autisticsolbro", "_blank");
    };

    const handleTelegramClick = () => {
        window.open("https://t.me/ASBSOLBRO", "_blank");
    };

    const copyToClipboard = () => {
        const text = document.querySelector('.code-p').innerText;
        navigator.clipboard.writeText(text).then(() => {
            console.log('Text copied to clipboard');
            toast.success("Code copied to clipboard!");
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    };


    return (
        <div className="home">
            <div className="container header">
                <img src={Logo} alt="Logo" width={70} height={70} />
                <p
                    className={`ulli mx-4 ${activeItem === 'Home' ? 'active' : ''}`}
                    style={{ fontSize: '19px', cursor: 'pointer' }}
                    onClick={() => handleItemClick('Home')}
                >
                    <span style={{ color: "#ed8599" }} className="mx-1"> • </span> Home
                </p>
                <p
                    className={`ulli mx-4 ${activeItem === 'About' ? 'active' : ''}`}
                    style={{ fontSize: '19px', cursor: 'pointer' }}
                    onClick={() => handleItemClick('About')}
                >
                    <span style={{ color: "#ed8599" }} className="mx-1"> • </span> About
                </p>
                <p
                    className={`ulli mx-4 ${activeItem === 'Tokenomics' ? 'active' : ''}`}
                    style={{ fontSize: '19px', cursor: 'pointer' }}
                    onClick={() => handleItemClick('Tokenomics')}
                >
                    <span style={{ color: "#ed8599" }} className="mx-1"> • </span> Tokenomics
                </p>
                <p
                    className={`ulli mx-4 ${activeItem === 'Contact' ? 'active' : ''}`}
                    style={{ fontSize: '19px', cursor: 'pointer' }}
                    onClick={() => handleItemClick('Contact')}
                >
                    <span style={{ color: "#ed8599" }} className="mx-1"> • </span> Contact
                </p>
                <div className="cta-btn">
                    <div className="buy-btn mx-2" onClick={handleBuyNow}>Buy</div>
                </div>
            </div>
            <div ref={homeRef} className="home-main" style={{ color: "#363636" }}>
                <div className="hm-right">
                    <video autoPlay muted loop playsInline className="img-main" type="video/mp4">
                        <source src={video2} />
                        Your browser doesn't support this video
                    </video>
                </div>
                <div className="hm-left">
                    <span className="header1">Autistic</span>
                    <span className="header2">Solbro</span>
                    <div className="code" style={{cursor:'pointer'}}>
                        <MdOutlineContentCopy width={40} color="#74902d" className="mx-2" />
                        <p className="code-p" onClick={copyToClipboard} style={{ padding: '0px', margin: '0px' }}>0xfsaf125ui5411904489309dasiiewq0670FaF5eBB142E4</p>
                    </div>
                </div>
            </div>
            <div className="how-to-buy" ref={aboutRef}>
                <div className="htb-wrap">
                    <div className="htb-header">
                        <p className="htb-h1" style={{ padding: '0', margin: '0' }}>Autistic</p>
                        <div className="line mx-3"></div>
                        <p className="htb-h1" style={{ padding: '0', margin: '0' }}>Solbro</p>
                    </div>
                    <div className="htb-card mt-5">
                        <img src={Logo} alt="Heart" className="img-heart" />
                        <div className="htbc-body">
                            <h2 style={{ fontWeight: '900' }}>Who's SolBro?</h2>
                            <p>SolBro Coin is a unique cryptocurrency inspired by a beloved, slow-paced character known for its serene and laid-back nature. The coin aims to promote inclusivity and raise awareness about autism through its engaging and supportive community, connecting childhood friends and embracing the degen culture.</p>
                            <video type="video/mp4" className="htcb-v" autoPlay loop playsInline muted>
                                <source src={battle} />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tokenomics" ref={tokenomicsRef}>
                <div className="token-wrap">
                    <img src={chart} alt="" width={100} className="chart-img" />
                    <div className="chart-text">
                        <h1 className="cht-h1">Tokenomics</h1>
                        <div className="">
                            <h2 className="cht-h2">40% TBD</h2>
                            <h2 className="cht-h2">30% TBD</h2>
                            <h2 className="cht-h2">20% TBD</h2>
                            <h2 className="cht-h2">10% TBD</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact" ref={contactRef}>
                <div className="contact-wrap">
                    <div className="d-flex w100 htb-header">
                        <p className="cw-h1" style={{ padding: '0', margin: '0' }}>Contact</p>
                        <div className="line mx-3"></div>
                        <p className="cw-h1" style={{ padding: '0', margin: '0' }}>Solbro</p>
                    </div>
                    <div className="d-flex mt-3">
                        <FaXTwitter
                            color="#ed8599"
                            size={60}
                            target="_blank"
                            onClick={handleTwitterClick}
                            style={{ cursor: 'pointer' }}
                        />
                        <FaTelegramPlane onClick={handleTelegramClick} color="#ed8599" size={60} style={{ cursor: 'pointer' }} />
                    </div>
                    <p style={{ fontWeight: '700', marginTop: '5em', textAlign: 'center' }} >Copyright © 2024. All rights reserved.</p>
                </div>
            </div>
        </div >
    );
}

export default Home;