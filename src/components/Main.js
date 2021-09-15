import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro To Anthony</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            My interests in Technology have always been there ever since I was a child (video games!).
            But I really got interested in my High School years wondering how the things around me worked.
            So I joined the Robotics team! I did great and got all A's but, it wasn't my gig. I became increasingly
            interested with the computer softwares that I would use to build 3d models of the robots that I want to bring to life (I also took Greentech
            classes and got Outstanding grade in it too! We used a similar 3d modeling software where one can create their 
            very own city! So cool!). I had little knowlegde on how things operated a computer. Therefore leading me to want to expand my knowlegde in it without having
            to take out my music classes and other electives. Sadly, I graduated without having the chance to get computer science classes on my transcript.
            Right out of High School I wasn't sure what I was going to do. Until my older brother reached out to me 
            about this really cool website called code cademy where I can learn to code <b>FOR FREE. </b>
             So, I gave it a shot, and fell in love with the craft instantly. I started to code for fun and do tutorials online to see what I can manage. 
            Soon enough, it started to become me coding my own projects and I decided that I Wanted to level up in life.
            Now knowing that I was set on this path I had to figure out how I was going to do this.
            I started doing extensive researching and ended up with Three options: Self Learning, College, and Coding Bootcamp.
            I tried the self learning route and it is tough because there is no guide to aid you in any direction.
            Then I considered College for a while but became dissapointed with numbers that these colleges were asking for.
            I knew I couldn't afford that, and needed to focus my attention on only coding. So I did my research for coding bootcamps
            and found Coding Temple! I immediately told my older brother about them and he was on board so much so that He offered to pay for the bootcamp in Full if I promised to pay him when I'm on my feet! I went all in 
            and went through hell and back to graduate the program (it was so much harder than I thought. Coding Bootcamps is like 4 years of college into 3 months. At least in my case it was 3months in length. Crazy!).
            I came out the other side with skills I could have only dreamt of just a few months ago! I really learned a lot about myself
            and was shocked that I was able to absorb so much so quickly then.
            I'm now actively seeking to contribute to something bigger than myself with me and my skillset to offer.



            
            
        
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
          
          </span>
          
          <iframe width="560" height="315" src="https://www.youtube.com/embed/JprOmndVx8M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         <div className="play-video">
</div>

          <p>
          Here one of my bigger projects that i'm proud of. It's a balisong tutorial site with a store(under developement).
          for everything used here is the link to my <a href='https://github.com/anthonynaut/V2-Capstone'>github</a>
          </p>
          <p>
      
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
          Ambitious, career-focused jobseeker, anxious to obtain an entry-level software engineering position to help launch career while achieving company goals.
          Enthusiastic programmer eager to contribute to team success through hard work, attention to detail and excellent organizational skills.
          Motivated to learn, grow and excel in Software engineering.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/naut_v"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/built_to_last_v2/"
                className="icon fa-instagram"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/profile.php?id=100070715876208" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/anthony-naut-a14b081b5/" className="icon fa-linkedin">
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/anthonynaut"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main

//https://coolors.co/gradients
//https://codebushi.com/gatsby-starters-and-themes/
//  