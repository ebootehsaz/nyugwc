import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
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
        <header className="major">
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
            <span className="icon fa-gem major style5">
              <span className="label">Lorem</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-heart major style3">
              <span className="label">Ipsum</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-code major style6">
              <span className="label">Dolor</span>
            </span>
          </li>
        </ul>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
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
        <div className="image">
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
        <div className="image">
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
        <div className="image">
          <img src={pic3} alt="" />
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
        <div className="image">
          <img src={pic3} alt="" />
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
        <div className="image">
          <img src={pic3} alt="" />
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

    

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Accumsan mus tortor nunc aliquet</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet
            eleifend
            <br />
            fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus
            ullamcorper.
          </p>
        </header>
        <ul className="features">
          <li className="icon fa-paper-plane">
            <h3>Arcu accumsan</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-laptop">
            <h3>Ac Augue Eget</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-code">
            <h3>Mus Scelerisque</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-headphones-alt">
            <h3>Mauris Imperdiet</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon fa-heart">
            <h3>Aenean Primis</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon fa-flag">
            <h3>Tortor Ut</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
        </ul>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Arcue ut vel commodo</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum endrerit imperdiet amet
            eleifend fringilla.
          </p>
        </header>
        <ul className="actions stacked">
          <li>
            <a href="/#" className="button fit primary">
              Activate
            </a>
          </li>
          <li>
            <a href="/#" className="button fit">
              Learn More
            </a>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
