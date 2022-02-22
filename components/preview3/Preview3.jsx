import React, { useState } from 'react'
import styles from "./Preview3.module.css"
import Image from "next/image"
import "bootstrap/dist/css/bootstrap.min.css"
import Link from "next/link"
import DehazeOutlinedIcon from '@material-ui/icons/DehazeOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import DarkModeOutlinedIcon from '@material-ui/icons/NightsStayOutlined';
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';




const Preview3 = () => {
    const [mobileView, setMobileView] = useState(false)
    const [dark, setDark] = useState(false)

    return (
        <div className={dark ? styles.preview3_dark : styles.preview3}>


            <div className="container-fluid">
                <div className={styles.navbar}>
                    <h3>logo</h3>
                    <ul className={mobileView ? styles.nav_links_mobile : styles.nav_links} onClick={() => setMobileView(false)}>
                        <Link href="" ><li className={styles.nav_home}    >Home</li></Link>
                        <Link href="" ><li className={styles.nav_about}   >About</li></Link>
                        <Link href="" ><li className={styles.nav_services}>Services</li></Link>
                        <Link href="" ><li className={styles.nav_projects}>Projects</li></Link>
                        <Link href="" ><li className={styles.nav_contact} >Contact</li></Link>
                        <button onClick={() => setDark(!dark)} className={styles.nav_darkmode}>{dark ? <WbSunnyOutlinedIcon /> : <DarkModeOutlinedIcon />}</button>
                    </ul>
                    <button onClick={() => setMobileView(!mobileView)} className={styles.nav_icon}>{mobileView ? <CloseOutlinedIcon /> : <DehazeOutlinedIcon />}</button>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-flex justify-content-center flex-column">
                        <div className={dark ? styles.intro_dark : styles.intro}>
                            Hello I’m
                        </div>
                        <div className={dark ? styles.name_intro_dark : styles.name_intro}>
                            Abhijeet Chattejee
                        </div>
                        <div className={dark ? styles.intro_role_dark : styles.intro_role}>
                            Software Engineer & Web Developer
                        </div>
                        <div className={dark ? styles.intro_des_dark : styles.intro_des}>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        </div>
                        <button className={dark ? styles.intro_button_dark : styles.intro_button}><span className={dark ? styles.button_text_dark : styles.button_text}>Hire me</span></button>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-center align-items-center flex-column">
                        <div className={styles.image_first}>
                            <div className={styles.back_first}>
                                <Image src="/profile_back.png" width="400" height="500" />
                            </div>
                            <div className={styles.back_main} >
                                <Image src="/profile.png" width="350" height="350" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className={styles.second_container}></div>
            <div className="container">
                <div className={dark ? styles.second_main_heading_dark : styles.second_main_heading}>About Me</div>
                <div className={dark ? styles.second2_main_heading_dark : styles.second2_main_heading}>Why you should hire me ?</div>
                <div className="row">
                    <div className="col-lg-6 d-flex justify-content-center align-items-center flex-column">
                        <div className={styles.image_Second}>
                            <div className={styles.back_first}>
                                <Image src="/profile_back.png" width="400" height="500" />
                            </div>
                            <div className={styles.back_main} >
                                <Image src="/profile.png" width="350" height="350" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-center flex-column">

                        <div className={dark ? styles.intro_des_dark : styles.intro_des}>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                        </div>
                        <button className={dark ? styles.intro_button2_dark : styles.intro_button2}><span className={dark ? styles.button_text_dark : styles.button_text}>Download CV</span></button>
                    </div>

                </div>

            </div>
            <div className={styles.third_container}></div>
            <div className="container">
                <div className={dark ? styles.second_main_heading_dark : styles.second_main_heading}>Services</div>
                <div className={dark ? styles.second2_main_heading_dark : styles.second2_main_heading}>What I Can Offer You?</div>
                <div className="row">
                    <div className="col-lg-4 d-flex justify-content-end">
                        <div className={dark ? styles.card_1_dark : styles.card_1}>
                            <div className="">

                                <div className={styles.image_card_2}>
                                <Image src={dark ? "/blackrect.png" : "/backrect.png"} width="100" height="100" />
                                </div>
                                <div className={styles.image_card_1}>
                                    <Image src="/backcard.png" width="80" height="80" />
                                </div>
                                <div className={dark ? styles.text_3_dark : styles.text_3}>Code Optimization</div>
                                <div className={dark ? styles.text_2_3_dark : styles.text_2_3}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 d-flex justify-content-end">
                        <div className={dark ? styles.card_1_dark : styles.card_1}>
                            <div className="">

                                <div className={styles.image_card_2}>
                                <Image src={dark ? "/blackrect.png" : "/backrect.png"} width="100" height="100" />
                                </div>
                                <div className={styles.image_card_1}>
                                    <Image src="/backcard.png" width="80" height="80" />
                                </div>
                                <div className={dark ? styles.text_3_dark : styles.text_3}>Full-Stack Development</div>
                                <div className={dark ? styles.text_2_3_dark : styles.text_2_3}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 d-flex justify-content-end">
                        <div className={dark ? styles.card_1_dark : styles.card_1}>
                            <div className="">

                                <div className={styles.image_card_2}>
                                    <Image src={dark ? "/blackrect.png" : "/backrect.png"} width="100" height="100" />
                                </div>
                                <div className={styles.image_card_1}>
                                    <Image src="/backcard.png" width="80" height="80" />
                                </div>
                                <div className={dark ? styles.text_3_dark : styles.text_3}>Android Development</div>
                                <div className={dark ? styles.text_2_3_dark : styles.text_2_3}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.input_container}>
                <div className="container">
                    <div className={styles.second_main_heading}>Contact me</div>
                    <div className={styles.second2_main_heading}>have project in mind</div>
                    <div className="row">
                    <div className="col-2 d-flex justify-content-center align-items-center flex-column">
                            <div className={styles.images_form_side}>
                                <Link href="https://github.com/">
                                    <div className=""><Image src={dark ? "/linkedinwhite.png" : "/linkedin.png"} width="50px" height="50px" /></div>
                                </Link>
                            </div>
                            <div className={styles.images_form_side1}>
                                <Link href="https://github.com/">
                                    <div className=""><Image src={dark ? "/githubwhite.png" : "/github.png"} width="50px" height="50px" /></div>
                                </Link>
                            </div>
                            <div className={styles.images_form_side2}>
                                <Link href="https://github.com/">
                                    <div className=""><Image src={dark ? "/twitterwhite.png" : "/twitter.png"} width="50px" height="50px" /></div>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-5 d-flex">
                            <div className={styles.form_in}>

                                <form>
                                    <div className="">
                                        <input className={dark ? styles.input_name_dark : styles.input_name}  type="text" placeholder="Your Name" />
                                    </div>
                                    <div className="">
                                        <input className={dark ? styles.input_email_dark : styles.input_email} type="email" placeholder="Your Email" />
                                    </div>
                                    <div className="">
                                        <input className={dark ? styles.input_subject_dark : styles.input_subject} type="text" placeholder="Your Subject" />
                                    </div>
                                    <div className="">
                                        <textarea className={dark ? styles.input_Message_dark : styles.input_Message} type="text" placeholder="Your Message" />
                                    </div>
                                </form>

                            </div>
                        </div>
                        <div className="col-lg-5 d-flex justify-content-center align-items-center flex-column">
                            <Image src="/message.png" width="250px" height=" 250px" alt="message image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Preview3
