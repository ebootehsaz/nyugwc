import React from 'react';
import Layout from '../components/Layout';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';
// import banner from '../assets/images/banner.jpg';
import banner from '../assets/images/arc.jpeg';


const IndexPage = () => <Layout fullMenu>
	<article>
		<header id="involved">
			<h2>Get Involved</h2>
			<p>Get notified of future events!</p>
		</header>

		<section className="wrapper style1">
			<div className="inner">
                <section>
					{/* <h4>Form</h4>
                    <form method="post" action="#">
						<div className="row gtr-uniform">

							<div className="col-6 col-12-xsmall">
								<input type="text" name="demo-name" id="demo-name" defaultValue="" placeholder="Name" />
							</div>

							<div className="col-6 col-12-xsmall">
								<input type="email" name="demo-email" id="demo-email" defaultValue="" placeholder="Email" />
							</div>
							
							<div className="col-12">
								<ul className="actions">
									<li><input type="submit" value="Send Message" className="primary" /></li>
								</ul>
							</div>
						</div>
					</form> */}

                    {/* <div align="center"><iframe src="https://docs.google.com/forms/d/e/1FAIpQLSetu3RWi2hGdqgTKFr1p7yE0aFwqmgU16Eh5ME1YW1Oz3Htkg/viewform?embedded=true" display="block" width="640" height="674" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe></div> */}
                    <div align="center" margin-left="100px">
                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdz8HgmOch9Bnm2Jm3h-48FOmzwsW3Q71MC970MlVqsa8wuFQ/viewform?embedded=true" display="block" width="110%" height="1108" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                    </div>
				</section>
            </div>
        </section>
    </article>
</Layout>;

export default IndexPage;