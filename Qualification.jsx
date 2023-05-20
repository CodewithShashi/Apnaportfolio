import React, { useState } from 'react';
import "./qualification.css";

const qualification = () => {
   
  return (
    <section className="qualification sections">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personel journey
    </span>

    <div className="qualification__container container">
        <div className="qualification__tabs">
            <div className="qualification__button qualification_active button--flex">
                <i className="uil uil-graduation-cap qualification_icon"></i>Education
            </div>

            <div className="qualification__button button--flex">
                <i className="uil uil-briefcase-alt qualification_icon"></i>{" "}Experience
            </div>
        </div>
        <div className="qualifiaction__sections">
            <div className="qualification__content qualification__content-active">
                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Bachelor of Technology (Computer Science)</h3>
                        <span className="qualification__subtitle">Kurukshetra University</span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calender-alt"></i> 2019 - Present
                        </div>
                    </div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                </div>

                <div className="qualification__data">
                    <div></div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>

                    <div>
                        <h3 className="qualification__title">Software Developer</h3>
                        <span className="qualification__subtitle">Larsen & Toubro Infotech Ltd.</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i> 2022 - 2023
                        </div>
                    </div>
                </div>

                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Higher Education 12th</h3>
                        <span className="qualification__subtitle">NIOS</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calender-alt"></i> 2017 -2019
                        </div>
                    </div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                </div>

                <div className="qualification__data">
                    <div></div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>

                    <div>
                        <h3 className="qualification__title">Web Development & Designing</h3>
                        <span className="qualification__subtitle">Oasis Infobyte</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i> 2022
                        </div>
                    </div>
                </div>
            </div>

            <div className="qualification__contents ">
                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Secondary Eduaction 10th</h3>
                        <span className="qualification__subtitle">CBSE</span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calender-alt"></i> 2016 -2017
                        </div>
                    </div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                </div>

                <div className="qualification__data">
                    <div></div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>

                    <div>
                        <h3 className="qualification__title">Web Developer</h3>
                        <span className="qualification__subtitle">College Ranker</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i> 2021-2022
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    </div>
    </section>
  )
}

export default qualification
