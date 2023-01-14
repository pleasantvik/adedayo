import classes from "./Pricing.module.css";
import { Zoom } from "react-awesome-reveal";
import bella from "../../resources/images/bella.png";
import forkify from "../../resources/images/forkify.png";
import expenseFilter from "../../resources/images/filter.png";
import task from "../../resources/images/task.png";
import pig from "../../resources/images/pig.png";
import omnifood from "../../resources/images/omnifood.png";
import { AiFillSetting } from "react-icons/ai";

export const Pricing = () => {
  const fullStack = [
    {
      price: 150,
      position: "Forkify",
      description: "A food recipe application.",
      linkto: "https://pleasantvik-forkifyjs.netlify.app/",
      delay: 500,
      image: forkify,
      tools: "HTML, CSS, JS,axios,Parcel,Express",
    },
    {
      price: 100,
      position: "Bella ",
      description: "A landing page for a food web app",
      linkto: "https://pleasantvik-bella.netlify.app/",
      delay: 0,
      image: bella,
      tools: "HTML, CSS, JS",
    },

    {
      price: 200,
      position: "Omnifood",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, numquam.",
      linkto: "http://sales/c",
      delay: 500,
      image: omnifood,
      tools: "HTML, CSS, JS",
    },
  ];
  const simpleLandingPage = [
    {
      price: 100,
      position: "Bella ",
      description: "A landing page for a food web app",
      linkto: "https://pleasantvik-bella.netlify.app/",
      delay: 500,
      image: bella,
      tools: "HTML, CSS, JS",
    },
    {
      price: 150,
      position: "Forkify",
      description: "A food recipe application.",
      linkto: "http://sales/b",
      delay: 0,
      image: forkify,
      tools: "HTML, CSS, JS",
    },
    {
      price: 200,
      position: "Omnifood",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, numquam.",
      linkto: "http://sales/c",
      delay: 500,
      image: omnifood,
      tools: "HTML, CSS, JS",
    },
  ];
  const simpleAppAndGame = [
    {
      description: "An expense filter App",
      linkto: "https://pleasantvik-expense-tracker.netlify.app/",
      delay: 500,
      image: expenseFilter,
      tools: "Reactjs",
    },
    {
      price: 150,
      position: "A simple task app",
      description: "A todo task tracking app",
      linkto: "https://pleasanttask.netlify.app/",
      delay: 0,
      image: task,
      tools: "HTML, CSS, JS",
    },
    {
      description: "Pig game",
      linkto: "https://pleasantpig.netlify.app/",
      delay: 500,
      image: pig,
      tools: "HTML, CSS, JS",
    },
  ];
  const showBox = () =>
    fullStack.map((box, i) => (
      <Zoom key={i} className={classes.pricing_item} delay={box.delay}>
        <div className={classes.pricing_inner_wrapper}>
          <div className={classes.pricing_title}>
            <img
              src={box.image}
              alt={box.image}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>

          <div className={classes.pricing_description}>{box.description}</div>
          <div className={classes.pricing_title}>{box.tools}</div>
          <div className={classes.pricing_buttons}>
            <button className={classes.link}>
              <a href={box.linkto} target="_blank" rel="noreferrer">
                View
              </a>
            </button>
          </div>
        </div>
      </Zoom>
    ));
  const landingPage = () =>
    simpleLandingPage.map((box, i) => (
      <Zoom key={i} className={classes.pricing_item} delay={box.delay}>
        <div className={classes.pricing_inner_wrapper}>
          <div className={classes.pricing_title}>
            <img
              src={box.image}
              alt={box.image}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>

          <div className={classes.pricing_description}>{box.description}</div>
          <div className={classes.pricing_title}>{box.tools}</div>
          <div className={classes.pricing_buttons}>
            <button className={classes.link}>
              <a href={box.linkto} target="_blank" rel="noreferrer">
                View
              </a>
            </button>
          </div>
        </div>
      </Zoom>
    ));
  const appAndGame = () =>
    simpleAppAndGame.map((box, i) => (
      <Zoom key={i} className={classes.pricing_item} delay={box.delay}>
        <div className={classes.pricing_inner_wrapper}>
          <div className={classes.pricing_title}>
            <img
              src={box.image}
              alt={box.image}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>

          <div className={classes.pricing_description}>{box.description}</div>
          <div className={classes.pricing_title}>{box.tools}</div>
          <div className={classes.pricing_buttons}>
            <button className={classes.link}>
              <a href={box.linkto} target="_blank" rel="noreferrer">
                View
              </a>
            </button>
          </div>
        </div>
      </Zoom>
    ));
  return (
    <div className={classes.pricing_wrapper}>
      <div className={`${classes.center_wrapper} ${classes.pricing_section}`}>
        <Zoom>
          <h2
            style={{
              marginBottom: "2rem",
              color: "#ffa800",
              fontSize: "3rem",
            }}
          >
            <AiFillSetting className={classes.me} /> My Projects
          </h2>
        </Zoom>
        <Zoom>
          <h2>
            <AiFillSetting className={classes.me} /> Full stack Category
          </h2>
        </Zoom>

        <div className={classes.pricing_wrapper}>{showBox()}</div>
      </div>
      <div className={`${classes.center_wrapper} ${classes.pricing_section}`}>
        <Zoom>
          <h2>
            <AiFillSetting className={classes.me} /> Simple Landing Pages
          </h2>
        </Zoom>

        <div className={classes.pricing_wrapper}>{appAndGame()}</div>
      </div>
      <div className={`${classes.center_wrapper} ${classes.pricing_section}`}>
        <Zoom>
          <h2>
            <AiFillSetting className={classes.me} /> Simple Apps and Games
          </h2>
        </Zoom>

        <div className={classes.pricing_wrapper}>{landingPage()}</div>
      </div>
    </div>
  );
};
