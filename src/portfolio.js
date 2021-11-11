/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Olá 👋.",
  title2: "Mateus Tavares⚡",
  logo_name: "Matt.jpg( )",
  nickname: "Matt8741",
  full_name: "Mateus Tavares",
  subTitle: "Desenvolvedor Front-End e entusiasta 🔥. Sempre aprendendo.",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/Mateus8741",
  linkedin: "https://www.linkedin.com/in/mateus-tavares-2382911a0/",
  twitter: "https://twitter.com/MateusTavaresB",
  instagram: "https://www.instagram.com/m_tavares87/",
  whatsapp: "https://wa.me/88981321566",
  email: "mailto:mateus_sousa_tavares@hotmail.com?subject=Hello%20again",
};

const skills = {
  data: [
    {
      title: "Desenvolvedor Front-End",
      fileName: "FullStackImg",
      skills: [
        "⚡ Desenvolvendo interfaces interativas / Interfaces de usuário para Web applications",
        "⚡ Construindo sites responsivos usando React.Js",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        ,
        // {
        //   skillName: "GraphQL",
        //   fontAwesomeClassname: "simple-icons:graphql",
        //   style: {
        //     color: "#DE33A6",
        //   },
        // },
        // {
        //   skillName: "Visual Basic",
        //   fontAwesomeClassname: "simple-icons:dot-net",
        //   style: {
        //     color: "#029FCE",
        //   },
        // },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0865A6",
          },
        },
        {
          skillName: "Wordpress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#207297",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Hosting",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experiência trabalhando com cloud platforms",
        "⚡ Experiência em hosting e administramento de websites",
      ],
      softwareSkills: [
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Universidade Paraiso",
      subtitle: "Bacharel na UniFap",
      logo_path: "ssec.png",
      alt_name: "SSEC",
      duration: "2020 - Atualmente",
      descriptions: [
        "⚡ Atualmente estou cursando bacharelado em Sistemas de Informação.",
      ],
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "JAVASCRIPT: PROGRAMANDO A ORIENTAÇÃO A OBJETOS",
      certificate_link:
        "https://cursos.alura.com.br/certificate/39ebe65f-8a5d-4d96-a28c-4bb1c6693e0f",
      alt_name: "JAVASCRIPT",
      // color_code: "#2AAFED",
      color_code: "#FFFF00",
    },
    {
      title: "REACT: ENTENDENDO COMO A BIBLIOTECA FUNCIONA",
      certificate_link:
        "https://cursos.alura.com.br/certificate/fac335b0-a735-43c0-8940-c537d341057a",
      alt_name: "REACT",
      color_code: "#808080",
    },
    {
      title: "REACT: CICLO DE VIDA DOS COMPONENTES",
      certificate_link:
        "https://cursos.alura.com.br/certificate/31fd040f-b148-4931-9a5c-35158056fb25",
      alt_name: "REACT",
      // color_code: "#F6B808",
      color_code: "#808080",
    },
    {
      title: "TYPESCRIPT PARTE 1: EVOLUINDO SEU JAVASCRIPT",
      certificate_link:
        "https://cursos.alura.com.br/certificate/193d46c7-61a7-4fac-b350-142ed76db6c3",
      alt_name: "TYPESCRIPT",
      color_code: "#2AAFED",
    },
    {
      title: "REACT: ABSTRAINDO SEU CSS COM STYLED COMPONENTS",
      certificate_link:
        "https://cursos.alura.com.br/certificate/6833182d-6cfa-4725-b86d-5fd318893e5c",
      alt_name: "SASS",
      color_code: "#ee82ee",
    },
    // {
    //   title: "Hack20",
    //   subtitle: "Flutter International Hackathon",
    //   logo_path: "flutter.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1JTd8pVlHbP0RVQYtfa4OZgJYGfdiCwM6/view?usp=sharing",
    //   alt_name: "Flutter International Hackathon",
    //   color_code: "#2AAFED",
    // },
    // {
    //   title: "Postman Student Expert",
    //   subtitle: "Postman",
    //   logo_path: "postman.png",
    //   certificate_link:
    //     "https://badgr.com/public/assertions/h2qevHs4SlyoHErJQ0mn2g",
    //   alt_name: "Postman",
    //   // color_code: "#f36c3d",
    //   color_code: "#fffbf3",
    // },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experiencia",
  subtitle: "Estágios",
  description:
    "Já completei um estágio, porém estou em outro atualmente. Já fiz projetos por conta própria na maioria das vezes e estou procurando ativamente por estágios.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Estágios",
      experiences: [
        {
          title: "NexTi",
          company: "UniFap",
          logo_path: "logo_nexti.png",
          duration: "Feb 2020 - Atualmente",
          location: "Home Office",
          description:
            "Realizando trabalho para diversas empresas, também assumindo papel de mentoria para novos intengrantes.",
          color: "#4285F4",
        },
        {
          title: "GIR - Gestão e Tecnologia Ambiental",
          company: "GIR",
          logo_path: "gir.png",
          duration: "Nov 2021 - Atualmente",
          location: "Home Office",
          description: "Projetando e desenvolvendo o Front-End.",
          color: "#008000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projetos",
  description:
    "Projetos de cunho pessoal, cursos e ate mesmo empresas. Todos disponíveis no meu GitHub.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contato",
    profile_image_path: "matt.jpeg",
    description:
      "Você pode entrar em contato comigo através das minhas redes sociais abaixo e logo mais darei um retorno",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "Não costumo publicar nada com frequencia, mas aqui está meu Twitter.",
    link: "https://twitter.com/MateusTavaresB",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Creatus-Art-Design",
      url: "https://github.com/Mateus8741/Creatus-Art-Design",
      description: "Site para compra de edição de artes em geral",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
      ],
    },
    {
      id: "1",
      name: "CEEP",
      url: "https://github.com/Mateus8741/ALURA-CEEP",
      description: "Controle de estoques.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
