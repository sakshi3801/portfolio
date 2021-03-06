import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP from "../../assets/img/skills/bootstrap-4.svg";
import L_REACT from "../../assets/img/skills/react.svg";
import L_REACT_ROUTER from "../../assets/img/skills/react-router.svg";
import L_REACT_BOOTSTRAP from "../../assets/img/skills/react-bootstrap.svg";
import L_STYLED_COMPONENTS from "../../assets/img/skills/styled-components.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import L_GIT from "../../assets/img/skills/git-icon.svg";
import L_HEROKU from "../../assets/img/skills/heroku.svg";
import L_GITHUB_PAGES from "../../assets/img/skills/github.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_CPP from "../../assets/img/skills/c++.svg";
import L_C from "../../assets/img/skills/c.svg";
import L_ORACLE from "../../assets/img/skills/oracle.svg"

export const skills = {

    frontend :[
        {
            link: "https://en.wikipedia.org/wiki/HTML5",
            imgAltText :'HTML Image',
            imgSrc :L_HTML5,
            skillName :'HTML5'
        },
        {
            link :"https://medium.com/beginners-guide-to-mobile-web-development/whats-new-in-css-3-dcd7fa6122e1",
            imgAltText :'CSS Image',
            imgSrc :L_CSS3,
            skillName :'CSS3'
        },
        {
            link: "https://www.javascript.com/",
            imgAltText: "JavaScript",
            imgSrc: L_JAVASCRIPT,
            skillName: "JavaScript",
        },
        {
            link: "https://getbootstrap.com/",
            imgAltText: "Bootstrap",
            imgSrc: L_BOOTSTRAP,
            skillName: "Bootstrap",
        },
        {
            link: "https://reactjs.org/",
            imgAltText: "React JS",
            imgSrc: L_REACT,
            skillName: "React JS",
        },
        {
            link: "https://reacttraining.com/react-router/",
            imgAltText: "React Router",
            imgSrc: L_REACT_ROUTER,
            skillName: "React Router",
          },
        {
            link: "https://react-bootstrap.github.io/",
            imgAltText: "React Bootstrap",
            imgSrc: L_REACT_BOOTSTRAP,
            skillName: "React Bootstrap",
        },
        {
            link: "https://styled-components.com/",
            imgAltText: "styled-components",
            imgSrc: L_STYLED_COMPONENTS,
            skillName: "styled-components",
        }


    ],

    hostingPlatforms :[
        {
            link: "https://pages.github.com/",
            imgAltText: "GitHub Pages",
            imgSrc: L_GITHUB_PAGES,
            skillName: "GitHub Pages",
          },

          {
            link: "https://devcenter.heroku.com/",
            imgAltText: "Heroku",
            imgSrc: L_HEROKU,
            skillName: "Heroku",
          }

    ],

    programmingLanguages :[
        
        {
            link :"https://docs.microsoft.com/en-us/cpp/c-language/?view=msvc-160",
            imgAltText :"C Language",
            imgSrc : L_C,
            skillName :"C"
        },
        {
            link :"https://docs.microsoft.com/en-us/cpp/cpp/?view=msvc-160",
            imgAltText :"C++ Language",
            imgSrc : L_CPP,
            skillName :"C++"
        },

        {
            link: "https://www.javascript.com/",
            imgAltText: "JavaScript",
            imgSrc: L_JAVASCRIPT,
            skillName: "JavaScript",
        },
    ],

    databases: [
      
      {
        link: "https://www.oracle.com/in/index.html",
        imgAltText: "Oracle",
        imgSrc: L_ORACLE,
        skillName: "Oracle",
      },
      {
        link: "https://docs.mongodb.com/",
        imgAltText: "MongoDB",
        imgSrc: L_MONGODB,
        skillName: "MongoDB",
      }
    
    ],

    versionControl: [
        {
          link: "https://git-scm.com/",
          imgAltText: "GIT",
          imgSrc: L_GIT,
          skillName: "GIT",
        },
      ],
}