// import "./1.css";
import { useEffect, useState } from "react";
import "./style.css";
import "/src/reset.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const imgFilePath = "1/images";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 800, min: 0 },
    items: 1,
  }
};

interface CarouselItem {
  src: string;
  name: string;
  quote: string;
}

const carouselItems: CarouselItem[] = [
  {
    src: imgFilePath + "/avatar-ali.png",
    name: "Ali Bravo",
    quote: "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused."
  },
  {
    src: imgFilePath + "/avatar-richard.png",
    name: "Richard Watts",
    quote: "Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!"
  },
  {
    src: imgFilePath + "/avatar-shanai.png",
    name: "Shanai Gough",
    quote: "Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive."
  },
  {
    src: imgFilePath + "/avatar-anisha.png",
    name: "Anisha Li",
    quote: "Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."
  },
]

function CarouselItem({src, name, quote}: CarouselItem) {
  return (
    <div className="carousel-item">
      <img src={src} alt="" />
      <h4 className="fw-bold">{name}</h4>
      <p>"{quote}"</p>
    </div>
  )
}

export default function Page1() {
  const [navOpened, setNavOpened] = useState<boolean>(false);
  const { width } = useWindowDimensions();


  return (
    <div className="page1">
      <header className={`primary-header ${navOpened ? "data-overlay" : ""}`}>
        <div className="container">
          <div className="nav-wrapper">
            {/* href='#' makes the link scroll to top! */}
            <a href="#">
              <img src={`${imgFilePath}/logo.svg`} alt="Manage" />
            </a>
            <button
              className="mobile-nav-toggle"
              aria-controls="primary-navigation"
              aria-expanded={navOpened}
              onClick={() => setNavOpened(!navOpened)}
            >
              {/* Load both icons to DOM, then show/hide when needed */}
              {
                navOpened ?
                <img
                  src={`${imgFilePath}/icon-close.svg`}
                  alt=""
                  aria-hidden="true"
                  // aria-hidden for sr to ignore
                />
                :
                <img
                  src={`${imgFilePath}/icon-hamburger.svg`}
                  alt=""
                  aria-hidden="true"
                />

              }
              
              <span className="visually-hidden">Menu</span>{" "}
              {/* span adds text for screen readers. you may come across classname sr-only, meaning 'screen-reader only' */}
            </button>
            <nav
              className={`primary-navigation ${navOpened ? "opened" : ""}`}
              aria-label="primary-navigation"
              id="primary-navigation"
            >
              <ul className="nav-list" role="list">
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Product</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Community</a>
                </li>
              </ul>
            </nav>
            <button className="button | display-sm-none display-md-inline-flex">
              Get Started
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero | text-center-sm-only padding-block-900">
          <div className="container">
            <div className="even-columns">
              <div className="flow">
                <h1 className="fs-primary-heading fw-bold">
                  Bring everyone together to build better products.
                </h1>
                <p>
                  Manage makes it simple for software teams to plan day-to-day
                  tasks while keeping the larger team goals in view.
                </p>
                <button className="button">Get Started</button>
              </div>
              <div className="hero__image">
                <img className="mx-auto" src={`${imgFilePath}/illustration-intro.svg`} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="sales-points | padding-block-900">
          <div className="container">
            <div className="even-columns">
              <div
                className="sales-points__blog | flow text-center-sm-only margin-bottom-700"
                style={{ "--flow-spacer": "1.5em" } as React.CSSProperties}
              >
                <h2 className="fs-secondary-heading fw-bold">
                  What's different about Manage?
                </h2>
                <p>
                  Manage provides all the functionality your team needs, without
                  the complexity. Our software is tailor-made for modern digital
                  product teams.
                </p>
              </div>
              <div>
                <ul className="numbered-items | flow" role="list">
                  <li>
                    <div
                      className="flow"
                      style={{ "--flow-spacer": "1em" } as React.CSSProperties}
                    >
                      <h3 className="numbered-items__title | fs-600 fw-bold">
                        Track company-wide progress
                      </h3>
                      <p className="numbered-items__body" data-width="wide">
                        See how your day-to-day tasks fit into the wider vision.
                        Go from tracking progress at the milestone level all the
                        way done to the smallest of details. Never lose sight of
                        the bigger picture again.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div
                      className="flow"
                      style={{ "--flow-spacer": "1em" } as React.CSSProperties}
                    >
                      <h3 className="numbered-items__title | fs-600 fw-bold">
                        Advanced built-in reports
                      </h3>
                      <p className="numbered-items__body" data-width="wide">
                        Set internal delivery estimates and track progress
                        toward company goals. Our customisable dashboard helps
                        you build out the reports you need to keep key
                        stakeholders informed.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div
                      className="flow"
                      style={{ "--flow-spacer": "1em" } as React.CSSProperties}
                    >
                      <h3 className="numbered-items__title | fs-600 fw-bold">
                        Everything you need in one place
                      </h3>
                      <p className="numbered-items__body" data-width="wide">
                        Stop jumping from one service to another to communicate,
                        store files, track tasks and share documents. Manage
                        offers an all-in-one team productivity solution.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="carousel | text-center padding-block-900">
          <h2 className="fs-secondary-heading fw-bold">What they've said</h2>
          <div className="carousel-container">
            <Carousel
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              className=""
              containerClass="container-with-dots"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={true}
              responsive={responsive}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              showDots={width < 800}
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              {
                carouselItems.map((carouselItem) => {
                  return <CarouselItem src={carouselItem.src} name={carouselItem.name} quote={carouselItem.quote} />
                })
              }
            </Carousel>
          </div>

          <button className="button">Get Started</button>
        </section>

        {/* the pipeline | in the className doesnt do anything, just separates components from utility classes visually */}
        {/* cta means call to action */}
        <section className="cta | margin-top-900 padding-block-900 bg-accent-400 text-neutral-100">
          <div className="container">
            <div className="even-columns vertical-align-center">
              <div>
                <p className="fs-primary-heading fw-bold">
                  Simplify how your team works today.
                </p>
              </div>
              <div className="justify-self-end-md">
                <button className="button" data-type="inverted">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="primary-footer | padding-block-700 bg-neutral-900 text-neutral-100">
        <div className="container">
          <div className="primary-footer__wrapper">
            <a className="primary-footer__logo" href="#">
              <img className="" src={`${imgFilePath}/logo-white.svg`} alt="Manage" />
            </a>

            <ul role="list" aria-label="Social links" className="social-list">
              <li>
                <a aria-label="facebook" href="#">
                  <svg className="social-icon">
                    <use
                      href={`${imgFilePath}/social-icons.svg#icon-facebook`}
                    ></use>
                  </svg>
                </a>
              </li>
              <li>
                <a aria-label="youtube" href="#">
                  <svg className="social-icon">
                    <use
                      href={`${imgFilePath}/social-icons.svg#icon-youtube`}
                    ></use>
                  </svg>
                </a>
              </li>
              <li>
                <a aria-label="twitter" href="#">
                  <svg className="social-icon">
                    <use
                      href={`${imgFilePath}/social-icons.svg#icon-twitter`}
                    ></use>
                  </svg>
                </a>
              </li>
              <li>
                <a aria-label="pinterest" href="#">
                  <svg className="social-icon">
                    <use
                      href={`${imgFilePath}/social-icons.svg#icon-pinterest`}
                    ></use>
                  </svg>
                </a>
              </li>
              <li>
                <a aria-label="instagram" href="#">
                  <svg className="social-icon">
                    <use
                      href={`${imgFilePath}/social-icons.svg#icon-instagram`}
                    ></use>
                  </svg>
                </a>
              </li>
            </ul>
            <div className="primary-footer__nav">
              <nav className="footer-nav">
                <ul
                  className="flow"
                  style={{ "--flow-spacer": "1em" } as React.CSSProperties}
                  aria-label="Footer"
                  role="list"
                >
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                  <li>
                    <a href="#">Products</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Community</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </nav>
            </div>
            {/* <div className="primary-footer-form"> */}
              <form className="primary-footer__form" action="">
                <input type="email" placeholder="Updates in your inbox..." />
                <button className="button" data-shadow="none">
                  Go
                </button>
              </form>
              <p className="primary-footer__copyright">Copyright 2020. All Rights Reserved</p>
            {/* </div> */}
          </div>
        </div>
      </footer>
    </div>
  );
}


