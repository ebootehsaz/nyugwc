import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import pic1 from '../assets/images/college_loops_logo.jpeg';
import pic2 from '../assets/images/december_event.jpeg';
import pic3 from '../assets/images/panel.jpg';
import pic4 from '../assets/images/python.jpg';
import pic5 from '../assets/images/pic01.jpg';
import pic6 from '../assets/images/tech.jpg';


// import config from 'https://raw.githubusercontent.com/ebootehsaz/nyugwc/main/config.js';
import config from '../../config';



const IndexPage = () => (
  <Layout fullMenu>
    <section id="main"/>
    <section id="banner">
      <div className="inner">

        <div class="loader">
          <h2>
            <div class="scanner">
              <span>{config.heading}</span>
            </div>
          </h2>
        </div>

          <p>{config.subHeading}</p>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major" style={{paddingTop: 2 + 'em'}}>
          <h2>
          What are College Loops?
          </h2>
          <p>
            Girls Who Code College Loops are university-level networks for college-aged women interested
            <br />
            in tech to support one another and help each other persist and succeed in the field. 
            <br />
            <br />

            College Loops build belonging and community through weekly meetings during the school year.
          </p>
        </header>
        
        <ul className="icons major">
          <li>
            <span className="icon fa-gem major style2">
              <span className="label">Lorem</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-heart major style2">
              <span className="label">Ipsum</span>
            </span>
          </li>
          <li>
            <span className="icon fa-gem major style2">
              <span className="label">Dolor</span>
            </span>
          </li>
        </ul>
      </div>
    </section>

    {/* <div id="setMaxWidth1"> */}
    <div className='smallerImages'>
    <section id="two" className="wrapper alt style2">
      <section className="spotlight" style={{paddingTop: 3 + 'em'}}>
      {/* <section className="spotlight" > */}
        <div className="image" style={{maxWidth: 400 + 'px'}}>
        {/* <div className="image" > */}
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>
          What is Girls Who Code?
            <br />
          </h2>
          <p>
          Girls Who Code is on a mission to close the gender gap in technology and to change the image of what a programmer looks like and does. Girls Who Code is an organization that values diversity, equity, and inclusion as essential to our mission.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image" style={{maxWidth: 400 + 'px'}}>
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>
          How does Girls Who Code College Loops support its members?
            <br />
          </h2>
          <p>
          College Loops provide a variety of resources and opportunities for members to develop their technical skills, such as coding workshops and guest speaker events. 
          <br />
          Additionally, members have the opportunity to connect with professionals in the tech industry through networking events and mentorship programs.
          </p>
        </div>
      </section>


      <section className="spotlight">
      <div className="image" style={{maxWidth: 400 + 'px'}}>
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>
          What types of activities do College Loops participate in?
            <br />
          </h2>
          <p>
          College Loop members participate in a variety of activities such as coding projects, hackathons, and workshops on topics such as computer science, software engineering, and web development. 
          <br />
          Additionally, members have the opportunity to attend conferences and events related to technology and entrepreneurship.
          </p>
        </div>
      </section>

      <section className="spotlight">
      <div className="image" style={{maxWidth: 400 + 'px'}}>
          <img src={pic4} alt="" />
        </div>
        <div className="content">
          <h2>
          How does Girls Who Code College Loops support the wider community?
            <br />
          </h2>
          <p>
          College Loops members have the opportunity to give back to their communities through service projects and volunteering.
          <br />
          Additionally, College Loops often partner with local organizations and companies to help promote diversity and inclusion in the tech industry.
          </p>
        </div>
      </section>

      <section className="spotlight">
      <div className="image" style={{maxWidth: 400 + 'px'}}>
          <img src={pic5} alt="" />
        </div>
        <div className="content">
          <h2>
          How can someone get involved with Girls Who Code College Loops?
            <br />
          </h2>
          <p>
          Anyone who identifies as a college-aged woman and is interested in technology can join a College Loop.
          <br />
          To find a College Loop near you, visit the Girls Who Code website and search for a Loop in your area. You can also start your own College Loop by reaching out to Girls Who Code and following their guidelines.
          </p>
        </div>
      </section>

      <section className="spotlight">
      <div className="image" style={{maxWidth: 400 + 'px'}}>
          <img src={pic6} alt="" />
        </div>
        <div className="content">
          <h2>
          What are some of the benefits of being a part of Girls Who Code College Loops?
            <br />
          </h2>
          <p>
          Members of College Loops have access to a supportive community of like-minded individuals, opportunities to develop their technical skills, and connections to professionals in the tech industry.
          <br />
          Additionally, being a part of College Loops can help to build confidence and leadership skills, as well as open up opportunities for internships and job placements.
          </p>
        </div>
      </section>


    </section>
    </div>

    <div class="centerH" style={{paddingTop: 2 + "em"}} >
    <a href="/involved">
      <button class="btn">
        <h2 style={{margin: 0}} >GET INVOLVED</h2>
      </button>
      </a>
    </div>

  </Layout>
);

export default IndexPage;
