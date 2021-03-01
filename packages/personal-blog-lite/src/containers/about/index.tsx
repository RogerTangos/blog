import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
// import Image from 'gatsby-image';
import SocialProfile from '../../components/social-profile/social-profile';
import {
    IoLogoFacebook,
    IoLogoTwitter,
    IoLogoInstagram,
    IoLogoLinkedin,
    IoLogoGithub,
} from 'react-icons/io';
import {
    AboutWrapper,
    // AboutImage,
    AboutPageTitle,
    AboutDetails,
    SocialProfiles,
} from './style';

const SocialLinks = [{
        icon: <IoLogoFacebook />,
        url: 'https://www.facebook.com/al.carter',
        tooltip: 'Facebook',
    },
    {
        icon: <IoLogoInstagram />,
        url: 'https://www.instagram.com/alrcarter/',
        tooltip: 'Instagram',
    },
    {
        icon: <IoLogoTwitter />,
        url: 'https://twitter.com/al_carter',
        tooltip: 'Twitter',
    },
    {
        icon: <IoLogoLinkedin />,
        url: 'https://linkedin.com/in/brownualcarter',
        tooltip: 'LinkedIn',
    },
    {
        icon: <IoLogoGithub />,
        url: 'https://github.com/RogerTangos/',
        tooltip: 'Github',
    },
];

interface AboutProps {}

const About: React.FunctionComponent < AboutProps > = () => {
    const Data = useStaticQuery(graphql `
    query {
      avatar: file(absolutePath: { regex: "/about.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 1770, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          author
          about
        }
      }
    }
  `);

    var articleStyle = {
        maxWidth: '800px',
    };

    return (
        <AboutWrapper>
      <AboutPageTitle>
        <h1>Data Engineering, Programming, & Environmental Activism</h1>
      </AboutPageTitle>

      <AboutDetails>
        <article style={articleStyle}>
        <p><b>I'm a programmer, data engineer, and activist. This website serves mostly as a record of my activist projects, which sometimes include programming and data engineering.</b></p>
        <p>I hope that you and others learn from it, and that it helps you take action in your own endeavors. If I can help in those endeavors, I hope that you tell me. <b>You can join this journey by <a href="https://docs.google.com/forms/d/e/1FAIpQLScL0TljzY4imco86gM8jCXA6KDA0_1OUiUSjik-gK8tg6kFig/viewform">adding your email address to the mailing list</a></b>. From there, you can email me advice, opinions and thoughts, which I do my best to respond to.</p>
        <h1>My environmental activism was first motivated by the BP Oil Deepwater Oil Spill </h1>
        <p>In 2010, in the <b>United States Gulf Coast, where I grew up</b>, BP spilled 4.9 million barrels of oil.</p>
        <p>There, cleanup workers reported <a href="https://www.thenation.com/article/archive/investigation-two-years-after-bp-spill-hidden-health-crisis-festers/">“eye, nose and throat irritation; respiratory problems; blood in urine, vomit and rectal bleeding; seizures; nausea and violent vomiting episodes that last for hours; skin irritation, burning and lesions; short-term memory loss and confusion; liver and kidney damage; central nervous system effects and nervous system dam- age; hypertension; and miscarriages”</a>. It’s no surprise, given that <a href="http://edition.cnn.com/2010/HEALTH/05/31/oil.spill.order/index.html">those unemployed fishermen and were sometimes not allowed to use respirators, and BP threatened to fire those that did.</a> Pictures of people in protective gear would have been bad press.</p>
        <p>To add insult to injury, <b>BP offered those same fishing families cheap settlements, which waived the families' rights to join class action lawsuits.</b> Often, with hungry children at home, no more livelihood on the Gulf, and no idea of what a class action lawsuit was or when it might pay them, they accepted.</p>
        <br />
        <p><b>My mother translated, interpreted, and did social work for one of the Vietnamese Gulf-coast finishing communities that BP hired to clean up.</b> Though I had moved away for college, she enjoyed sharing the stories.</p>
        <p><b>Learning about the tragedy in the Gulf led me to continue learning about fossil fuel companies, energy and the environment. I’ve since been involved in related projects like <a href="http://lostleaks.csail.mit.edu/">exposing reporting discrepancies in methane industry leak data</a>, <a href="https://xrscience.earth">communicating environmental science to activists</a>, and <a href="https://bank.green">pushing banks to adopt greener lending policies</a>.</b></p>
      </article>

        <SocialProfiles>
          <SocialProfile items={SocialLinks} />
        </SocialProfiles>
      </AboutDetails>
    </AboutWrapper>
    );
};

export default About;
