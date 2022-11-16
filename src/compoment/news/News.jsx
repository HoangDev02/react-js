import React from 'react'
import './news.css'
import block from '../../img/blog-img-6-800x778.jpg'
import {faCalendarDays, faPerson, faComment} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const news = () => {
  return (
    <div className='news'>
        <div className='container '>
            <div className='header-new'>
                <h1>Our Latest News</h1>
                <h4>SEE OUR LATEST HOTEL NEWS</h4>
            </div>
            <div className='itemNew'>
                <div className='new-iteam'>
                    <div className='thumd'>
                        <img src={block} alt="" />
                    </div>
                    <div className='desc'>
                        <div className="new-title">
                            Review Hotel In India
                        </div>
                        <div className='new-meta'>
                            <div className='NewCalendardays metaNew'>
                                <FontAwesomeIcon icon={faCalendarDays} className='iconNew'></FontAwesomeIcon>
                                <span className='meta'>May 11 2022</span>
                            </div>
                            <div className='NewPerson metaNew'>
                                <FontAwesomeIcon icon={faPerson} className='iconNew'></FontAwesomeIcon>
                                <span className='meta'>Julia</span>
                            </div>
                            <div className='NewComment metaNew'>
                                <FontAwesomeIcon icon={faComment} className='iconNew'></FontAwesomeIcon>
                                <span className='meta'>Comment</span>
                            </div>
                        </div>
                        <div className='new-excerpt'>
                            <p className='newText'>
                            In his book Outliers, author Malcolm Gladwell popularized what became known as the 10,000-hour rule, by documenting the lives of successful people such as Bill Gates, Mozart and the Beatles.…   
                            </p>
                        </div>
                        <div className="new-readmore">
                            <button className='readmoreBtn'>Read More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='itemNew'>
                <div className='new-iteam'>
                    <div className='thumd'>
                        <img src={block} alt="" />
                    </div>
                    <div className='desc'>
                        <div className="new-title">
                            Review Hotel In India
                        </div>
                        <div className='new-meta'>
                            <div className='NewCalendardays metaNew'>
                                <FontAwesomeIcon icon={faCalendarDays} className='iconNew'></FontAwesomeIcon>
                                <span className='meta'>May 11 2022</span>
                            </div>
                            <div className='NewPerson metaNew'>
                                <FontAwesomeIcon icon={faPerson} className='iconNew'></FontAwesomeIcon>
                                <span className='meta'>Julia</span>
                            </div>
                            <div className='NewComment metaNew'>
                                <FontAwesomeIcon icon={faComment} className='iconNew'></FontAwesomeIcon>
                                <span className='meta'>Comment</span>
                            </div>
                        </div>
                        <div className='new-excerpt'>
                            <p className='newText'>
                            In his book Outliers, author Malcolm Gladwell popularized what became known as the 10,000-hour rule, by documenting the lives of successful people such as Bill Gates, Mozart and the Beatles.…   
                            </p>
                        </div>
                        <div className="new-readmore">
                            <button className='readmoreBtn'>Read More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='itemNew'>
                <div className='new-iteam'>
                    <div className='thumd'>
                        <img src={block} alt="" />
                    </div>
                    <div className='desc'>
                        <div className="new-title">
                            Review Hotel In India
                        </div>
                        <div className='new-meta'>
                            <div className='NewCalendardays metaNew'>
                                <FontAwesomeIcon icon={faCalendarDays} className='iconNew'></FontAwesomeIcon>
                                <span className='meta'>May 11 2022</span>
                            </div>
                            <div className='NewPerson metaNew'>
                                <FontAwesomeIcon icon={faPerson} className='iconNew'></FontAwesomeIcon>
                                <span className='meta'>Julia</span>
                            </div>
                            <div className='NewComment metaNew'>
                                <FontAwesomeIcon icon={faComment} className='iconNew'></FontAwesomeIcon>
                                <span className='meta'>Comment</span>
                            </div>
                        </div>
                        <div className='new-excerpt'>
                            <p className='newText'>
                            In his book Outliers, author Malcolm Gladwell popularized what became known as the 10,000-hour rule, by documenting the lives of successful people such as Bill Gates, Mozart and the Beatles.…   
                            </p>
                        </div>
                        <div className="new-readmore">
                            <button className='readmoreBtn'>Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default news