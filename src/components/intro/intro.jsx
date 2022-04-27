import './style.scss'
import Photo from '../../img/photo.png'

export default function Intro() {
    return (
        <div className='intro'>


            <div className="left">
                <div className='left-wrapper'>
                    <h2 className='name-intro'>Hello, My name is </h2>
                    <h1 className='name'>Sarah </h1>
                    <div className="title">
                        <div className="title-wrapper">
                            <div className="title-item">Web Developer</div>
                            <div className="title-item">Content Creator</div>
                            <div className="title-item">Code Designer</div>
                            <div className="title-item">Writer</div>
                            <div className="title-item">Life Lover </div>

                        </div>
                    </div>
                    <div className="desc">
                        started this crazy journey on September 1st, 2021. As I write this we are in March of 2022. It's been 6 months and here is my progress so far.

                        I have to say this has been a crazy ride, I doubt myself almost every day but somehow I still manage to push through. Learning a new skill is hard enough when you have a person teaching you however when you are doing it by yourself it's another ball game.
                    </div>

                </div>


            </div>
            <div className="right">
                <div className="backg"></div>

                <img src={Photo} alt="" className="img" />


            </div>
        </div>
    )
}
