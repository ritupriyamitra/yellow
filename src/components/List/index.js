import React from 'react';
import './index.css'
//import Images from '../../asseests/images/love.jpg';
import LoveImgSrc from '../DashBoardImage';
import Registration from '../Registration';
import CurrentDate from '../CurrentDate';
class List extends React.Component{
  render(){
    return(
      <>
      <div class="body-container">
          <section class="body-header">
          <h3 >List Page</h3>
          <hr/>
          </section>
          <section class="date">
          <CurrentDate/>
          </section>
          <article class="article-content">
            <section>
              Dating is important because it is a preliminary step to a relationship which is a preliminary step to cohabitation or marriage. Many people view marriage as a very desirable state so dating gains a lot of importance because it is the first step that leads to marriage. ... Dating is education they don't teach you in school
            </section>
            <section >
              One of the advantages of dating online is for people that are shy or nervous about meeting in person, you can take some time online to get to know one another first. But one of the downsides is that there is a little more lying and exaggerating without looking your date in the eye. Some things can be verified with further research on the person online but other things cannot.
            </section>
            <section >
              Second advantage to online dating is there are more potential matches. From the comfort of your home, you can check out various dating profiles that a dating service matches to your likes and dislikes. It makes dating more efficient! You know more about them from the beginning and this can help you to find your perfect match!
            </section>
            <section >
              Third advantage of online dating is the obvious one – getting to date from home! You don’t have to change out of your pajamas or get dressed up or even get a sitter to date. It also helps you meet people who you wouldn’t ordinarily meet. Some people work from home or they don’t get out much so this helps them to meet people. Even if you do work outside the home, if you work too much this helps you to make time to meet people.
            </section>

          </article>

        <section class="image-position">
        <LoveImgSrc/>
        </section>
        <section class= "registration">

        <Registration/>

        </section>
        <section class="video-position">
          <aside>
          <iframe width="360" height="200" src="https://www.youtube.com/embed/WKsyxZWQ_g0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </aside>
          <aside>
          <iframe width="360" height="200" src="https://www.youtube.com/embed/rtOvBOTyX00" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </aside>
        </section>


      </div>
    </>
  );
  }
}
export default List;
