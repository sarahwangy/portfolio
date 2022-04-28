import './style.scss'
import Team from '../../img/code2.png'


export default function About() {
    return (
        <div className='about'>

            <div className="left">
                <div className="card bg"></div>
                <div className="card">
                    <img src={Team} alt='' className='img' />
                </div>
            </div>
            <div className="right">

                <h1 className="title">About Me</h1>
                <p className="sub">I am done with my portfolio website, it's very simple, just to showcase my projects.</p>

                <p className="desc">
                    My goal is to start applying to jobs by April. I want to finish my project, make sure my other projects are in top shape to put them on the portfolio.

                    I also deleted all social media from my phone, this has helped me tremendously to focus and not compare myself to others. Social media is very toxic if you do not know how to use it. It affects your mental state. I only use Twitter on my computer just for updates, networking, and talking to my coding friends. I read LinkedIn has been a huge asset for other developers.
                    My goal is to start applying to jobs by April. I want to finish my project, make sure my other projects are in top shape to put them on the portfolio.

                </p>
            </div>



        </div>
    )
}
