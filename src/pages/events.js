import React from 'react';

import Layout from '../components/Layout';

import pic1 from '../assets/images/interview.jpg';
import pic2 from '../assets/images/school.jpg';
import pic3 from '../assets/images/tech.jpg';
import pic4 from '../assets/images/stress.jpg';
import pic5 from '../assets/images/pic05.jpg';
// import banner from '../assets/images/banner.jpg';
import banner from '../assets/images/barcode.jpg';



const IndexPage = () => <Layout fullMenu>
<article id="main">
    <header>
        <h2>Events</h2>
        <p>Aliquam ut ex ut interdum donec amet imperdiet eleifend</p>
    </header>
    <section className="wrapper style4">
        <div className="inner">

            <section>
                <div className="box alt">
                    <div className="row gtr-50 gtr-uniform">
                        <div className="col-4"><span className="image fit"><img src={pic1} alt="" /></span></div>
                        <div className="col-4"><span className="image fit"><img src={pic2} alt="" /></span></div>
                        <div className="col-4"><span className="image fit"><img src={pic3} alt="" /></span></div>
                        <div className="col-4"><span className="image fit"><img src={pic4} alt="" /></span></div>
                        <div className="col-4"><span className="image fit"><img src={pic2} alt="" /></span></div>
                        <div className="col-4"><span className="image fit"><img src={pic1} alt="" /></span></div>
                        <div className="col-4"><span className="image fit"><img src={pic2} alt="" /></span></div>
                        <div className="col-4"><span className="image fit"><img src={pic1} alt="" /></span></div>
                        <div className="col-4"><span className="image fit"><img src={pic3} alt="" /></span></div>
                        <div className="col-12"><span className="image fit"><img src={banner} alt="" /></span></div>
                    </div>
                </div>
            </section>

        </div>
	</section>
</article>

</Layout>;

export default IndexPage;