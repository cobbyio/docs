import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Link } from "react-router-dom";


const FeaturesCard = [
  {
    title: "Troubleshoot",
    Svg: require("../../static/img/problem-stroke.svg").default,
    description: (
      <>Things are not running smoothly? Take a look here</>
    ),
    link: '/docs/troubleshooting/change-the-attribute-set-of-a-product'
  },
  {
    title: "Developers",
    Svg: require("../../static/img/developer_stroke.svg").default,
    description: (
      <>You have some Errors? Let's solve it from here </>
    ),
    link: '/developers/3rd-party-extension'
  }
]


function Feature({ Svg, title, description, links }) {
  return (
    <div className={clsx("col col--3 rounded-xl shadow-md py-8 min-h-96 bg-white")}>
      <div className="flexCenter">
        <Svg className="featureSvg" alt={title} />
        <div className="px-2 text-center">
          <h3 className="title-lg">{title}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div className="flexCenter lg:items-start px-4">
        <ul className="list-none pl-0 ">
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.link} className="text-primary">{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
function FeatureCard({ Svg, title, description, link }) {
  return (
    <div className={clsx("col col--5 rounded-xl shadow-md py-8 flexCenter h-88 bg-white")}>
      <Svg className="featureSvg" alt={title} />
      <div className="px-2 text-center">
        <h3 className="title-lg">{title}</h3>
        <p>{description}</p>
        <Link to={link} className="btns hover:text-white hover:no-underline">view all</Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  const { i18n } = useDocusaurusContext();
  const { currentLocale } = i18n;

  return (
    <section className="bg-gray-light">
      <div className="features">
        <div className="flex justify-evenly items-center flex-wrap container gap-4 lg:gap-2">
          {currentLocale === "de" &&
            FeatureListDE.map((props, idx) => <Feature key={idx} {...props} />)}

          {currentLocale === "en" &&
            FeatureListEN.map((props, idx) => <Feature key={idx} {...props} />)}
        </div>

      </div>

      <div className="features">
        <div className="flex justify-evenly items-center flex-wrap  container gap-4 lg:gap-2">
          {currentLocale === "en" &&
            FeaturesCard.map((props, idx) => <FeatureCard key={idx} {...props} />)}
        </div>
      </div>
    </section>

  );
}
