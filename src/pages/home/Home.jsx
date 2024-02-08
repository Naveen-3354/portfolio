import './Home.scss'
import React, { useEffect, useState } from 'react';
import navlogo from "../../assets/navbar.png"
import hero from '../../assets/hero.png'
import about from '../../assets/about.png'



const Home = () => {
    const [drop, setDrop] = useState({})
    const [dropTrue, setDropture] = useState(true)
    const [paratag, setParatag] = useState({});
    const [img, setImg] = useState({})
    const [contant, setcontant] = useState({})

    const [name, setName] = useState({})
    const [topic, setTopic] = useState({})
    const [under1, setUnder1] = useState({})
    const [under2, setUnder2] = useState({})
    const [under3, setUnder3] = useState({})
    const [under4, setUnder4] = useState({})
    const [under5, setUnder5] = useState({})

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setcontant({
                    width: "40px",
                    borderRadius: '50%',
                    backgroundColor: '#F3EEEA',
                    padding: '0',
                    transition: 'width 0.5s, border-radius 2s,background-color 0.5s'
                })
                setParatag({
                    display: 'none',
                })
                setImg({
                    display: "block"
                })
                setDropture(true)
            }
            else {
                setcontant({
                    transition: 'width 1s, border-radius 0.2s'
                })
                setParatag({
                    opacity: 1,
                    transition: 'opacity 2s'
                })
                setImg({})
                setDrop({ display: "none" })
                setDropture(false)
            }
        };
        const handleResize = () => {
            if (window.innerWidth < 400) {
                setDropture(true)
                setImg({
                    display: "block"
                })
            }
            else {
                setDropture(false)

                setImg({})
                setDrop({ display: "none" })
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {

        const handleScroll = () => {
            console.log(window.scrollY);
            if (window.scrollY > 600) {
                setName({
                    animationName: "none"
                })
                setTopic({
                    animationName: "none"
                })
                setUnder1({ animationName: "none" })
                setUnder2({ animationName: "none" })
                setUnder3({ animationName: "none" })
                setUnder4({ animationName: "none" })
                setUnder5({ animationName: "none" })
                console.log("zdchjgdzj");
            }
            else {
                setName({
                    animationName: 'hero-name-ani',
                    animationDuration: '0.8s'
                })
                setTopic({
                    animationName: 'hero-topic-ani',
                    animationDuration: '1s'
                })
                setUnder1({ animationName: "hero-under1-ani", animationDuration: '1s' })
                setUnder2({ animationName: "hero-under2-ani", animationDuration: '1s' })
                setUnder3({ animationName: "hero-under3-ani", animationDuration: '1s' })
                setUnder4({ animationName: "hero-under4-ani", animationDuration: '1s' })
                setUnder5({ animationName: "hero-under5-ani", animationDuration: '1s' })


            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = () => {
        if (dropTrue === true) {
            setDrop({
                display: "flex"
            })
            setDropture(!dropTrue)
        }
        if (dropTrue === false) {

            setDrop({
                display: "none"
            })
            setDropture(true)
        }
    }
    const handleScroll = () => {
        const halfPagePosition = window.innerHeight * 1; // Scroll to half the page
        window.scrollTo({
            top: halfPagePosition,
            behavior: 'smooth', // Add smooth scrolling animation
        });
    };
    const handleScroll2 = () => {
        const halfPagePosition = window.innerHeight * 2; // Scroll to half the page
        window.scrollTo({
            top: halfPagePosition,
            behavior: 'smooth', // Add smooth scrolling animation
        });
    };
    return (
        <div className='home'>

            <section className="navbar">
                <div id="navbar">
                    <div className="contant" style={contant}>
                        <div className="left" style={paratag}>
                            <a href='#'>Naveen</a>
                        </div>
                        <div className="right" style={paratag}>
                            <p onClick={handleScroll}>About</p>
                            <p onClick={handleScroll2}>Learning</p>
                            <p >Projets</p>
                            <p >Contact</p>
                        </div>
                        <div className="dropdown" onClick={handleClick}>
                            <img src={navlogo} style={img} alt="" />
                            <div className="dropdown-content" style={drop} >
                                <p onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>Home</p>
                                <p onClick={handleScroll}>About</p>
                                <p onClick={handleScroll2}>Learning</p>
                                <p href="#">Projets</p>
                                <p href="#">Contact</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="hero">
                <div id='hero'>
                    <div className="content">
                        <div className="one"></div>
                        <div className="two"></div>
                        <div className="name" >
                            <h1 id='name' style={name}>Naveen</h1>
                            <p id="under1" style={under1}></p>
                            <p id='under3' style={under3}></p>
                            <h1 id='topic' style={topic}>Dev</h1>
                            <p id='under5' style={under5}></p>
                            <p id='under2' style={under2}></p>
                            <p id='under4' style={under4}></p>
                        </div>
                        <div className="three"></div>
                        <div className="four"></div>
                        <img src={hero} alt="" />
                    </div>
                </div>
            </section>

            <section className="about">
                <div id='about'>
                    <div className="left">
                        <img src={about} alt="" />
                        <span></span>
                    </div>
                    <div className="right">
                        <h2>About!</h2>
                        <p className='typing'>I am <span>Developer</span></p>
                        <p className='text'>A versatile full-stack developer with expertise in both front-end and back-end technologies. Proficient in React, Node.js, and databases like MongoDB, I excel at creating seamless and engaging web applications. My strength lies in bridging the gap between design and functionality, ensuring a holistic approach to development. Committed to continuous learning and staying updated with industry trends. Let's connect and explore how I can add value to your team!</p>
                    </div>
                </div>
            </section>

            <section className="learn">
                <div id='learn'>
                    <div className="left">
                        <div className="content">
                            <div className="heading">
                                <h1>My Learning</h1>
                            </div>
                            <div className="para">
                                <p>I have been ful stack development for past one and half years. And created a couple of works for learning and some of with my ungrown brain. You can see, what I had learn until now.</p>
                            </div>
                            <div className="skill">
                                <div className="rows">
                                    <div className="row row1">
                                        <div className="python">
                                            <h3 className style={{ animationDuration: '2s' }}>Python Python</h3>
                                        </div>
                                        <div className="python" style={{ width: "70px" }}>
                                            <h3 className style={{ animationDuration: '0.5s' }}>Java Java</h3>
                                        </div>
                                        <div className="python">
                                            <h3 className style={{ animationDuration: '1.8s' }}>JavaScript JavaScript</h3>
                                        </div>
                                        <div className="python" style={{ width: "70px" }}>
                                            <h3 className style={{ animationDuration: '3s' }}>Dart Dart</h3>
                                        </div>
                                    </div>
                                    <div className="row row2">
                                        <div className="python" style={{ width: "70px" }}>
                                            <h3 className style={{ animationDuration: '2.5s' }}>React React</h3>
                                        </div>
                                        <div className="python">
                                            <h3 className>SpringBoot SpringBoot</h3>
                                        </div>
                                        <div className="python" style={{ width: "70px" }}>
                                            <h3 className style={{ animationDuration: '1.5s' }}>Flask Flask</h3>
                                        </div>
                                        <div className="python">
                                            <h3 className style={{ animationDuration: '1.2s' }}>Flutter Flutter</h3>
                                        </div>
                                    </div>
                                    <div className="row row3">
                                        <div className="python" style={{ width: "70px" }}>
                                            <h3 className style={{ animationDuration: '0.8s' }}>Github Github</h3>
                                        </div>
                                        <div className="python">
                                            <h3 className style={{ animationDuration: '2.6s' }}>MongoDB MongoDB</h3>
                                        </div>
                                        <div className="python" style={{ width: "70px" }}>
                                            <h3 className style={{ animationDuration: '1.0s' }}>AWS AWS</h3>
                                        </div>
                                        <div className="python">
                                            <h3 className style={{ animationDuration: '2.9s' }}>Angular Angular</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="img"></div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home