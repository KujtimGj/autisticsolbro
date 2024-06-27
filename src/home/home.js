import Logo from "../assets/SOLBRO.png";
import "./home.scss";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { SiSolana } from "react-icons/si";
import { useState } from "react";
import twitter from "../assets/twitter_post.png";
import aut1 from "../assets/autisticbro2.png"
import aut2 from "../assets/autisticbro3.png"
import product1 from "../assets/product1.png"
import product2 from "../assets/product2.png"
import product3 from "../assets/product3.png"
import { BsArrowUpRight } from "react-icons/bs";


const Home = () => {
    const [activeItem, setActiveItem] = useState('Home');

    const handleItemClick = (item) => {
        setActiveItem(item);
    };


    const handleBuyNow = () => {
        window.location.href = "https://app.uniswap.org/swap/"
    }



    return (
        <div className="home">
            <div className="container header">
                <img src={Logo} alt="Logo" width={70} height={70} />
                {['Home', 'How to buy', 'Tokenomics', 'About', 'FAQs'].map((item, index) => (
                    <p
                        key={index}
                        className={`ulli mx-4 ${activeItem === item ? 'active' : ''}`}
                        style={{ fontSize: '19px', cursor: 'pointer' }}
                        onClick={() => handleItemClick(item)}
                    >
                        <span style={{ color: "#ed8599" }} className="mx-1"> • </span> {item}
                    </p>
                ))}
                <div className="cta-btn">
                    <div className="buy-btn mx-2" onClick={handleBuyNow}>Buy</div>
                </div>
            </div>
            <div className="home-main" style={{ color: "#363636" }}>
                <div className="hm-left">
                    <span className="header1">Autistic</span>
                    <span className="header2">Solbro</span>
                </div>
                <div className="hm-right">
                    <img src={Logo} alt="Logo" className="img-main" />
                    <div className="hmr-socials">
                        <div className="social-btn twitter " style={{ cursor: 'pointer' }}><FaXTwitter color="white" size={25} /></div>
                        <div className="social-btn telegram mx-1" style={{ cursor: 'pointer' }}><FaTelegramPlane color="white" size={25} /></div>
                        <div className="social-btn solana" style={{ cursor: 'pointer' }}><SiSolana color="white" size={25} /></div>
                    </div>
                </div>
            </div>
            <div className="how-to-buy">
                <p className="htb-h1">How to buy</p>
                <div className="htb-wrap">
                    <div className="htb-card">
                        <img src={product2} className="htb-img" style={{ borderRadius: "10px" }} />
                        <div className="htb-middle mt-1">
                            <h3>Autistic Fastbro</h3>
                            <p>The memecoin that will have the highest rise in the next 10 years. Invest now.</p>
                        </div>
                        <div className="htb-footer">
                            <div className="">
                                <p style={{ color: "white", margin: '0' }}>Best offer</p>
                                <h4 className="htbf-h4">BTC 2.30</h4>
                            </div>
                            <div className="launch-web">
                                <BsArrowUpRight color="white" size={40} />

                            </div>
                        </div>
                    </div>
                    <div className="htb-card">
                        <img src={product1} className="htb-img" style={{ borderRadius: "10px" }} />
                        <div className="htb-middle mt-1">
                            <h3>Autistic Solbro</h3>
                            <p>The memecoin that will have the highest rise in the next 10 years. Invest now.</p>
                        </div>
                        <div className="htb-footer">
                            <div className="">
                                <p style={{ color: "white", margin: '0' }}>Best offer</p>
                                <h4 className="htbf-h4">BTC 2.30</h4>
                            </div>
                            <div className="launch-web">
                                <BsArrowUpRight color="white" size={40} />

                            </div>
                        </div>
                    </div>
                    <div className="htb-card">
                        <img src={product3} className="htb-img" style={{ borderRadius: "10px" }} />
                        <div className="htb-middle mt-1">
                            <h3>Autistic Fastbro</h3>
                            <p>The memecoin that will have the highest rise in the next 10 years. Invest now.</p>
                        </div>
                        <div className="htb-footer">
                            <div className="">
                                <p style={{ color: "white", margin: '0' }}>Best offer</p>
                                <h4 className="htbf-h4">BTC 2.30</h4>
                            </div>
                            <div className="launch-web">
                                <BsArrowUpRight color="white" size={40} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="second-about">
                <div className="saw">
                    <div className="saw-top">
                        <h1 className="st-h1">What is Autistic SolBro?</h1>
                        <p className="st-p"><strong>The World of Autistic Solbro</strong> Coin In June 2024 a memecoin called Autistic Solbro enter the market as a new form of investment. <br /><br />Incorporating the appeal of a popular anime character - a Pokémon, Autistic Solbro Coin (ticker <strong>ASB</strong>), attracted a considerable amount of attention to its presence due to its unusual positioning and the focus on the members of the autistic community.</p>
                    </div>
                    <div className="saw-bottom"></div>
                </div>
            </div>
            <div className="about-us">
                <div className="container">
                    <div className="au-title">
                        <p>About</p>
                        <p>Autistic Solbro</p>
                    </div>
                    <div className="au-body">
                        <div className="au-left">
                            <img src={twitter} alt="Post" />
                        </div>
                        <div className="au-right">
                            <p><strong>The World of Autistic Solbro</strong> Coin In June 2024 a memecoin called Autistic Solbro enter the market as a new form of investment. <br /><br />Incorporating the appeal of a popular anime character - a Pokémon, Autistic Solbro Coin (ticker <strong>ASB</strong>), attracted a considerable amount of attention to its presence due to its unusual positioning and the focus on the members of the autistic community.<br /><br /> While focusing on possibilities of developing a friendly and omnisensitive environment for using ASB as a memecoin, the author of its initial post presented a rather persuasive and fun argument on why ASB could become the next big thing in this category of cryptocurrencies. The beauty of ASC is primarily rooted under nostalgia and POP, <strong>to fans of Pokémon and fascination with cryptocurrency.</strong>  <br /><br />Many people installed various applications for buying cryptocurrencies in order to invest into ASB and get involved in its expanding environment. The light-heartedness of the ₿ and the coin's mascot contributed to making the community more open to newcomers, allowing both experienced and neophyte investors to exchange their stories. As with the trend for memecoins to ideally pop up regarded Autistic Solbro Coin grew its fame, it became higher with the eye associated with decentralised enthusiasts.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tokenomics">
                <div className="container t-wrapper">
                    <h1 className="token-h1">Tokenomics</h1>
                    <div className="tokenomics-content mt-5">
                        <div className="card-1">
                            <img src={aut1} alt="Autistic Solbro 1" width={100} />
                            <h3>Solbro 1</h3>
                            <p className="mt-2"><span style={{ color: "#ed8599", fontWeight: '500    ' }}>50%</span> presale</p>
                            <p>More information</p>
                        </div>
                        <div className="card-2">
                            <img src={Logo} alt="Autistic Solbro 2" width={100} />
                            <h3>Solbro 2</h3>
                            <p className="mt-2"><span style={{ color: "#ed8599", fontWeight: '500    ' }}>20%</span> of the total supply burnt</p>
                            <p className="mt-2"><span style={{ color: "#ed8599", fontWeight: '500    ' }}>15%</span> of the total supply burnt</p>
                            <p>More information</p>
                        </div>
                        <div className="card-1">
                            <img src={aut2} alt="Autistic Solbro 1" width={100} />
                            <h3>Solbro 3</h3>
                            <p className="mt-2"><span style={{ color: "#ed8599", fontWeight: '500    ' }}>50%</span> presale</p>
                            <p>More information</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="faqs">
                <div className="faqs-img">
                    <img src={aut1} alt="Autistic Bro 2" width={270} />
                    <button className="fi-btn mt-1">
                        Buy now
                    </button>
                </div>
                <div className="our-links">
                    <h3 className="mb-3" style={{ color: '#74902d' }}>Our links</h3>
                    <p className="ol-p">Home</p>
                    <p className="ol-p mt-1">About</p>
                    <p className="ol-p mt-1">How to buy Autistic Solbro</p>
                    <p className="ol-p mt-1">Tokenomics</p>
                </div>
                <div className="our-links">
                    <h3 className="mb-3" style={{ color: '#74902d' }}>Socials</h3>
                    <p className="ol-s mt-1">Twitter</p>
                    <p className="ol-s mt-1">Telegram</p>
                    <p className="ol-s mt-1">Instagram</p>
                    <p></p>
                </div>
                <div className="our-links w40">
                    <h3 style={{ color: '#74902d' }}>Disclaimer</h3>
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br /> Obcaecati iste, fuga debitis quibusdam officiis rem!</li>
                    </ul>
                    <p style={{ fontSize: '20px', fontWeight: '600', margin: '0' }}>Contact us:</p>
                    <p style={{ fontSize: '24px', fontWeight: '600', margin: '0' }}>email@gmail.com</p>
                </div>
            </div>
        </div >
    );
}

export default Home;