import React from 'react';

import Layout from '../components/Layout';
// import Scroll from '../components/Scroll';

import pic1 from '../assets/images/bridgette.jpg';
import pic2 from '../assets/images/shanaya.jpg';
import pic3 from '../assets/images/isha.jpg';
import pic4 from '../assets/images/dariana.jpg';
import pic5 from '../assets/images/tanmaya.jpg';
import pic6 from '../assets/images/christina.jpg';
import pic7 from '../assets/images/shivani.jpg';


const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <section className="wrapper style2">
			  <div className="inner">

          <section>
            <br/>
            <h1> The Executive Board</h1>
              <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The executive board is responsible for providing leadership and direction for a college club. Its primary responsibilities include setting and achieving goals for the club, organizing events and meetings, managing finances, representing the club to the wider college community, managing club members and making decisions on behalf of the club. Through strong organizational and leadership skills, the executive board effectively manages the club's resources and ensures that all members are aware of the club's goals and expectations. The executive board is dedicated to ensuring the success of the club and is committed to working collaboratively with other members of the executive board and club members to achieve shared objectives. With experience and skills, the executive board is able to make a positive impact on the club and help it to thrive.
              </p>


            <hr/>
            <div className="row">
            <div className="col-6 col-12-medium">
                <h4>All Positions</h4>
                <ul>
                  <li>President</li>
                  <li>Vice-President</li>
                  <li>Outreach Chair</li>
                  <li>Treasurer</li>
                  <li>Secretary</li>
                  <li>Social Media Chair</li>
                  <li>ETC</li>
                  <li>ETC</li>
                </ul>
              </div>
              <div className="col-6 col-12-medium">
                <h4>Open-Positions 2023-2024</h4>
                <ul>
                  <li>President</li>
                  <li>Vice-President</li>
                  <li>Outreach Chair</li>
                  <li>Treasurer</li>
                  <li>Secretary</li>
                  <li>Social Media Chair</li>
                  <li>ETC</li>
                  <li>ETC</li>
                </ul>
              </div>
            </div>
          </section>
          <hr/>

          <h1>Current Administration</h1>
          <h4 style={{paddingBottom: 1 + 'em'}}>2022-2023</h4>

      

      <section className="wrapper alt style2" id="addBorderRadius">
        
        <section className="spotlight" id="one">
          <div className="image">

            <img src={pic1} alt="" />
          </div>
          <div className="content">
            <h2>
              Bridgette
            </h2>
            <p>
            Hey 👋🏽 I’m Bridgette and I’m a senior 🎓studying computer science 💻at CAS. I am also one of your co-presidents for GWC at NYU and am so excited for our upcoming events this year. 
            <br />
            When I’m not doing school, I enjoy running 🏃🏽‍♀️,walking through Central Park 🌳 and visiting museums 🖼. I can’t wait to meet all of our new members! 💗
            </p>
          </div>
        </section>

        <section className="spotlight">
          <div className="image">
            <img src={pic2} alt="" />
          </div>
          <div className="content">
            <h2>
            Shanaya
            </h2>
            <p>
            Hiya! I am Shanaya, and I am one of your NYU Girls Who Code co-presidents for the upcoming school year! 😁I am a senior at Tandon majoring in computer science 💻with minors in CAMS and math.
            <br />
            I love trying out new restaurants 🍜in the city and reading 📚in the park. Looking forward to meeting all of you during our many events! 💜
            </p>
          </div>
        </section>

        <section className="spotlight">
          <div className="image">
            <img src={pic3} alt="" />
          </div>
          <div className="content">
            <h2>
            Isha
            </h2>
            <p>
            Hey!! I’m Isha and I am a sophomore studying computer science at Tandon. I am serving as the vice president of NYU’s GWC college loop this year.
            <br />
            I love animals and spending time with friends. I can’t wait to get to meet all the members and host some awesome events this semester!! :)
            </p>
          </div>
        </section>

        <section className="spotlight">
          <div className="image">
            <img src={pic4} alt="" />
          </div>
          <div className="content">
            <h2>
            Dariana
            </h2>
            <p>
            heyyy!! I’m Dariana and I’m the social media chair for GWC this school year :). I am a sophomore majoring in computer science with a minor in IDM at Tandon.
            <br />
            I loveeee everything pink, sunsets, baseball(go Yankees hehe), and visiting new places. Very excited for our events this year!! Feel free to reach out if you have any questions.
            </p>
          </div>
        </section>

        <section className="spotlight">
          <div className="image">
            <img src={pic5} alt="" />
          </div>
          <div className="content">
            <h2>
            Tanmaya
            </h2>
            <p>
            Hii! I’m Tanmaya, a grad student studying computer science at Tandon. I’ll be the Treasurer of our club this year.
            <br />
            I enjoy practicing yoga and cooking! I’m also fond of listening to music of all genres. I’m really excited to meet all current and new members this year and can’t wait to learn new things with y’all at our events! :D
            </p>
          </div>
        </section>

        <section className="spotlight">
          <div className="image">
            <img src={pic6} alt="" />
          </div>
          <div className="content">
            <h2>
            Christina
            </h2>
            <p>
            Hi everyone!! I’m Christina and I’ll be serving as the secretary of NYU’s GWC college loop this year. I’m currently a sophomore studying mechanical engineering at Tandon.
            <br />
            I love watching sports and am the biggest foodie, so let me know if you guys have any recs! I’m super excited to meet all of you at our upcoming events! 🫶
            </p>
          </div>
        </section>

        <section className="spotlight">
          <div className="image">
            <img src={pic7} alt="" />
          </div>
          <div className="content">
            <h2>
            Shivani
            </h2>
            <p>
            Hi! I am Shivani and I will be the Outreach Chair of our GWC club for this year. I am also a Masters student studying computer engineering at Tandon. 
            <br />
            I love to play uke and tennis in my free time. I am excited to be part of the eboard, looking forward to meeting y’all and collaborating with different teams and companies to help plan exciting events :)
            </p>
          </div>
        </section>

      </section>

      </div>
      </section>    
    </article>
    
  </Layout>
);

export default IndexPage;
