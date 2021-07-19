import React from "react";
import ReactDOM from "react-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import Fade from "react-reveal/Fade";
import ToutContent from "./components/ToutContent";
import NavBar from "./components/NavBar";
import CardCollection from "./components/CardCollection";
import ToutOverlap from "./components/ToutOverlap";
import BigTextLittleText from "./components/BigTextLittleText";
import VerticalLine from "./components/VerticalLine";
import CardSlider from "./components/CardSlider";
import Pullout from "./components/Pullout";
import CardScroll from "./components/CardScroll";
import CardScroller from "./components/CardScroller";
import PageHero from "./components/PageHero";
import HiwOverlap from "./components/HiwOverlap";
import HiwSidebySide from "./components/HiwSidebySide";
import StaffCollection from "./components/StaffCollection";
import CentreStack from "./components/CentreStack";
import NewsCards from "./components/NewsCards";
import IntroContent from "./components/IntroContent";

import "./styles.css";
import { setDefaultProps } from "react-on-visible";

function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <NavBar />

        <PageHero />

        {/* <ToutContent textDirection="toutContent w-full my-0 mb-4 mx-auto py-20 sm:py-0 flex flex-col-reverse sm:flex-row text-left sm:text-right" /> */}

        {/* <ToutContent textDirection="toutContent w-full my-0 mb-4 mx-auto py-20 sm:py-0 text-left flex flex-col-reverse sm:flex-row-reverse" /> */}

        {/* <div className="bg-green w-full">
          <ToutContent
            fullWidth={true}
            textDirection="toutContent w-full my-0 mx-auto py-20 sm:py-0 flex flex-col-reverse sm:flex-row text-left sm:text-right bg-green"
          />
        </div> */}

        <div className="bg-purple w-full">
          <ToutContent
            fullWidth={true}
            textDirection="toutContent w-full my-0 mx-auto py-20 sm:py-0 flex flex-col-reverse sm:flex-row-reverse text-left bg-purple"
          />
        </div>
        {/* 
        <ToutOverlap
          toutOverlapContent="toutContent tout-overlap mx-auto mb-0 mt-8 bg-left"
          totuOverlapText="toutCopy--overlap text-white absolute sm:relative right-0 w-11/12 ml-auto sm:w-1/2 bg-green"
        /> */}

        {/* <BigTextLittleText /> */}

        {/* <VerticalLine />   */}

        {/* <ToutOverlap
          toutOverlapContent="toutContent tout-overlap mx-auto mb-0 mt-8 bg-right "
          totuOverlapText="toutCopy--overlap bg-purple text-white absolute sm:relative right-0 mr-auto w-11/12 sm:w-1/2"
        /> */}

        <ToutOverlap
          toutOverlapContent="toutContent tout-overlap mx-auto mb-0 mt-8 bg-left "
          totuOverlapText="toutCopy--overlap text-white absolute sm:relative right-0 w-11/12 ml-auto sm:w-1/2 bg-orange"
        />

        {/* <IntroContent ICHeadingColour="green-font" />
        <IntroContent ICHeadingColour="purple-font" /> */}

        {/* <div className="flex w-full pt-40">
          <CardCollection />
        </div> */}

        {/* <CentreStack /> */}

        {/* <div className="flex w-full pt-40">
          <StaffCollection />
        </div> */}

        <div className="flex w-full pt-40">
          <NewsCards />
        </div>

        {/* <CardSlider /> */}

        {/* <Pullout pulloutBackground="bg-green" /> */}

        {/* <CardScroll /> */}

        {/* <div className="bg-purple w-full">
          <ToutContent
            fullWidth={true}
            textDirection="toutContent w-full my-0 mx-auto py-20 sm:py-0 flex flex-col-reverse sm:flex-row-reverse text-left bg-purple"
          />
        </div> */}

        {/* <CardScroller /> */}

        {/* <BigTextLittleText
          bigTextCopy="endless possibilities"
          bigTextTrigger="first-hiw-bigtext"
          littleText="Multiple ultrasound speakers."
          bigTextDesktopSize="hiw-desktop-big-text"
          bigTextMobileSize="hiw-mobile-big-text"
          containerSize="h-screen items-center flex"
          hiwLittleText="hiw-little-text"
          purpleLine={true}
          lineTrigger="first-hiw"
        />*/}

        {/* <Fade bottom>
          <div className="w-full hiw-overlap-background">
            <HiwOverlap
              fullWidth={true}
              textDirection="toutContent w-full relative items-center my-0 sm:mx-auto py-0 flex flex-col-reverse sm:flex-row-reverse text-left"
            />
          </div>
        </Fade> */}

        {/* <Fade bottom>
          <div className="w-full">
            <HiwSidebySide
              fullWidth={true}
              textDirection="toutContent w-full items-center relative my-0 mx-auto pb-0 pt-20 sm:py-0 flex flex-col-reverse sm:flex-row-reverse text-left"
            />
          </div>
        </Fade> */}

        <BigTextLittleText
          bigTextCopy="touch"
          bigTextTrigger="second-hiw-bigtext"
          littleText="Now it's wow time"
          bigTextDesktopSize="hiw-desktop-big-text"
          bigTextMobileSize="hiw-mobile-big-text"
          containerSize="h-screen items-center flex"
          hiwLittleText="hiw-little-text"
          purpleLine={true}
          lineTrigger="second-hiw"
        />
      </div>
    </ParallaxProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
