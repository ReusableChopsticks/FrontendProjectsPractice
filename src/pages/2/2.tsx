import { useState } from "react";
import "./styles.css";
import "/src/reset.css";

const imgFilePath = "2/images";

function Panel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <div className="panel">
      <button onClick={() => {setIsOpened(!isOpened)}}>
        <span className="work-sans-heading">{title}</span>
        {
          isOpened ?
          <img src={`${imgFilePath}/icon-minus.svg`} alt="" />
          :
          <img src={`${imgFilePath}/icon-plus.svg`} alt="" />
        }
      </button>
      {
        isOpened &&
        <p className="work-sans-body">{children}</p>
      }
    </div>
  );
}

export default function Page2() {
  return (
    <div className="page2">
      <main>
        <img
          className="background-pattern-mobile"
          src={`${imgFilePath}/background-pattern-mobile.svg`}
          alt=""
        />
        <img
          className="background-pattern-desktop"
          src={`${imgFilePath}/background-pattern-desktop.svg`}
          alt=""
        />
        <div className="container">
          <div className="heading">
            <img id="icon-star" src={`${imgFilePath}/icon-star.svg`} alt="" />
            <h1 className="work-sans-title">FAQs</h1>
          </div>
          <Panel title="What is Frontend Mentor, and how will it help me?">
            Frontend Mentor offers realistic coding challenges to help developers
            improve their frontend coding skills with projects in HTML, CSS, and
            JavaScript. It's suitable for all levels and ideal for portfolio
            building.
          </Panel>
          <Panel title="Is Frontend Mentor free?">
            Yes, Frontend Mentor offers both free and premium coding challenges,
            with the free option providing access to a range of projects suitable
            for all skill levels.
          </Panel>
          <Panel title="Can I use Frontend Mentor projects in my portfolio?">
            Yes, you can use projects completed on Frontend Mentor in your
            portfolio. It's an excellentway to showcase your skills to potential
            employers!
          </Panel>
          <Panel title="How can I get help if I'm stuck on a Frontend Mentor challenge?">
            The best place to get help is inside Frontend Mentor's Discord
            community. There's a help channel where you can ask questions and seek
            support from other community members.
          </Panel>
        </div>
      </main>

      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Erick Hadi</a>.
      </div>
    </div>
  );
}
