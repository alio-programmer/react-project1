import React from 'react'
import vg from "../assets/2.webp";
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"
const Home = () => {
  return (
    <>
        <div className='home' id='home'>
            <main>
                <h1>Gaurav</h1>
                <p>The potato programmer</p>
            </main>
        </div>
        <div className="home2">
            <img src={vg} alt="Graphics" />
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates adipisci in repellendus minus eos possimus illo aperiam enim est, repudiandae dicta quas corrupti libero, eum error! Tempora veritatis quae omnis.</p>
            </div>
        </div>
        <div className="home3" id="about">
            <div>
            <h1>Who we are?</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cupiditate suscipit tempora, quisquam beatae quasi accusantium perspiciatis debitis laboriosam voluptate, voluptatum minus error? Officia nostrum accusantium tenetur asperiores qui accusamus vitae rem quae placeat! Non rerum quasi qui fugiat odio quia neque id laboriosam! Velit rerum soluta minus quo quidem!
            </p>
            </div>
        </div>
        <div className="home4" id="brands">
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div style={{
                            animationDelay:"0.3s",
                        }}>
                            <AiFillGoogleCircle/>
                            <p>Google</p>
                        </div>
                        <div style={{
                            animationDelay:"0.6s",
                        }}>
                            <AiFillAmazonCircle/>
                            <p>Amazon</p>
                        </div>
                        <div style={{
                            animationDelay:"0.9s",
                        }}>
                            <AiFillYoutube/>
                            <p>Youtube</p>
                        </div>
                        <div style={{
                            animationDelay:"1.2s",
                        }}>
                            <AiFillInstagram/>
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>
            </div>
    </>
  )
}

export default Home