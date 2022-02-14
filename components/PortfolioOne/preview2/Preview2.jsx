import React from 'react';
import styles from "./Preview2.module.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Link from "next/link"
import Image from 'next/image';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookOutlinedIcon from '@material-ui/icons/Facebook';
const Preview2 = () => {


  const Projects = [{
    id: 1,
    projectName: "Rest api",
    projectDes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    projectlink: "https://github.com/",
    projectImage: "https://encodedbicoding.com/wp-content/uploads/2019/08/github-logo_hub2899c31b6ca7aed8d6a218f0e752fe4_46649_1200x1200_fill_box_center_2.png"
  }, {
    id: 1,
    projectName: "Rest api",
    projectDes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    projectlink: "https://github.com/",
    projectImage: "https://encodedbicoding.com/wp-content/uploads/2019/08/github-logo_hub2899c31b6ca7aed8d6a218f0e752fe4_46649_1200x1200_fill_box_center_2.png"
  }, {
    id: 2,
    projectName: "Rest api",
    projectDes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    projectlink: "https://github.com/",
    projectImage: "https://encodedbicoding.com/wp-content/uploads/2019/08/github-logo_hub2899c31b6ca7aed8d6a218f0e752fe4_46649_1200x1200_fill_box_center_2.png"
  }, {
    id: 3,
    projectName: "Rest api",
    projectDes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    projectlink: "https://github.com/",
    projectImage: "https://encodedbicoding.com/wp-content/uploads/2019/08/github-logo_hub2899c31b6ca7aed8d6a218f0e752fe4_46649_1200x1200_fill_box_center_2.png"
  }, {
    id: 4,
    projectName: "Rest api",
    projectDes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    projectlink: "https://github.com/",
    projectImage: "https://encodedbicoding.com/wp-content/uploads/2019/08/github-logo_hub2899c31b6ca7aed8d6a218f0e752fe4_46649_1200x1200_fill_box_center_2.png"
  }, {
    id: 5,
    projectName: "Rest api",
    projectDes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    projectlink: "https://github.com/",
    projectImage: "https://encodedbicoding.com/wp-content/uploads/2019/08/github-logo_hub2899c31b6ca7aed8d6a218f0e752fe4_46649_1200x1200_fill_box_center_2.png"
  }]

  return (
    <div className={styles.main}>
      <div className="container">
        <div className={styles.navbar}>
          <div className={styles.title}>
            Johndoe
            <div className={styles.title_background}></div>
          </div>
          <div className={styles.navtitles}>

            <p className={styles.navbar_list1}><Link href="/">projects</Link></p>


            <p className={styles.navbar_list2}><Link href="/">contact</Link></p>

          </div>
        </div>
        <div className="row position-relative">

          <div className={styles.image_1}><Image src="/html2gif.gif" width="50px" height="50px" /></div>
          <div className={styles.image_2}><Image src="/github.gif" width="40px" height="40px" /></div>
          <div className={styles.image_3}><Image src="/js.gif" width="40px" height="40px" /></div>
          <div className={styles.image_4}><Image src="/python.gif" width="40px" height="40px" /></div>


          <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
            <div className={styles.textall}></div>
            <div className={styles.intro_text}>
              Hey there , <span className={styles.intro_span}>Iam JohnDoe <div className={styles.intro_color}></div></span>
            </div>
            <div className={styles.next_text}>
              <p className={styles.about_text}>Iam a <span className={`${styles.fullstack} ${styles.fullstackdev}`}>Full-Stack Developer , </span><span className={`${styles.fullstack} ${styles.software}`}>Software Developer ,
              </span><span className={`${styles.fullstack} ${styles.competitive}`}> Competitive Programmer ,</span><span className={`${styles.fullstack} ${styles.freelancer}`}> Free Lancer .</span></p>
            </div>
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
            <div className={styles.first_image}>
              <Image src="/webimage.svg" alt="webimage" width="400px" height="400px" />
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className={styles.aboutme_main}>
          <div className="row">
            <div className="col-lg-6">
              <Image src="/aboutme.svg" width="500px" height="500px" alt="about me" />
            </div>
            <div className="col-lg-6 d-flex align-items-center justify-content-center flex-column">
              <div className={styles.about_me}>
                <div className={styles.text_aboutme}>About me</div>
                <div className={styles.Background_aboutme}></div>
              </div>
              <div className={styles.paragraph_aboutme}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</div>
              <div className={styles.links_social}>
                <div className="">
                  <Link href="https://github.com/">
                    <div className={styles.linkedin}><Image src="/linkedin.png" width="50px" height="50px" alt="" /></div>
                  </Link>
                </div>
                <div className="">
                  <Link href="https://github.com/">
                    <div className={styles.github}><Image src="/github.png" width="50px" height="50px" alt="" /></div>
                  </Link>
                </div>
                <div className="">
                  <Link href="https://github.com/">
                    <div className={styles.twitter}><Image src="/twitter.png" width="60px" height="60px" alt="" /></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>


      <div className={styles.project_section}>
        <div className="container-fluid">


          <div className={styles.Projects_main}>
            Projects
            <div className={styles.Projects_underline}></div>
          </div>


          <div className={styles.Wrapper}>
            {Projects.map((project) => (
              <div className={styles.wrapper_container}>
                <div className={styles.banner_img}></div>
                <Image src={project.projectImage} width="130px" height="180px" alt='profile image' class={styles.profile_img} />
                <h1 className={styles.name}>{project.projectName}</h1>
                <p className={styles.description}>{project.projectDes}</p>
                <Link href={project.projectlink}>
                  <button className='btn'><GitHubIcon className={styles.icon_github} />Github</button>
                </Link>
              </div>
            ))}

          </div>

        </div>
      </div>
      <div className="container">
        <div className="row">
        <div className="col-lg-6">
            <Image src="/contact.svg" width="500px" height="500px" />
          </div>
          <div className="col-lg-6 d-flex align-items-center justify-content-center flex-column">

            <div className={styles.hireme}>Need some help in project ?</div>
            <div className={styles.contactme}>
              <div className={styles.contactme_text}>Contact Me</div>
              <div className={styles.background_contactme}></div>
            </div>
          </div>
         
        </div>


      </div>


      <div className='container'>
        <div className="row">
          <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center">
            <div className={styles.form_main}>
              <form>
                <div className={styles.form_firstname}>
                  <p className={styles.paragraph_first_name}>Enter Your First Name : </p>
                  <input className={styles.input_form} type="text" id="first-name" />
                </div>
                <div className={styles.form_lastname}>
                  <p className={styles.paragraph_last_name}>Enter Your Last Name : </p>
                  <input className={styles.input_form} type="text" id="last-name" />
                </div>
                <div className={styles.form_email}>
                  <p className={styles.paragraph_email}>Enter Your Email : </p>
                  <input className={styles.input_form} type="email" id="email" />
                </div>
                <div className={styles.form_phone}>
                  <p className={styles.paragraph_phone}>Enter Your Phone : </p>
                  <input className={styles.input_form} type="tel" id="phone" />
                </div>
                <div className={styles.form_message}>
                  <p className={styles.paragraph_message}>Enter Your Message : </p>
                  <textarea className={styles.input_form} id="message"></textarea>
                </div>
                <div >
                  <button className={styles.form_submit} type="submit">submit</button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6">
            <Image src="/socialmedia.gif" width="700px" height="400px" alt="" />
          </div>
        </div>
      </div>

    </div>
  )
};

export default Preview2;
