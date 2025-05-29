/* eslint-disable react/no-unescaped-entities */


import Service from "./Service";

const servicesData = [
  {
    icon: "/images/icon-design.svg",
    title: "Web design",
    description: "Creating clean, modern, and visually appealing website designs focused on user experience"
  },
  {
    icon: "/images/icon-dev.svg",
    title: "Web development",
    description: "Building responsive and user-friendly websites using modern tools and technologies"
  },
  {
    icon: "/images/icon-dev.svg",
    title: "Machine Learning",
    description: "Building smart models that learn from data to solve real-world problems"
  },
  {
    icon: "/images/icon-dev.svg",
    title: "Deep Learning",
    description: " Currently working on a font recognition project using the LeNet-5 convolutional neural network (CNN) model to accurately classify different font styles"
  },
  {
    icon: "/images/icon-app.svg",
    title: "Problem-Solving",
    description: "I continuously enhance my problem-solving and algorithmic thinking skills by practicing Data Structures and Algorithms (DSA)."
  },
 
];


const About = () => {
  return (
    <article className="about  active" data-page="about">

    <header>
      <h2 className="h2 article-title">About me</h2>
    </header>

    <section className="about-text">
      <p>
      I'm a final-year Computer Science Engineering student at IIIT Sri City, deeply passionate about technology and its power to solve real-world problems. My interests lie primarily in MERN stack development, where I enjoy building dynamic and responsive web applications, as well as in web design, where I focus on creating clean, user-friendly interfaces.

Beyond frontend and backend development, I am also fascinated by the fields of Artificial Intelligence (AI), Machine Learning (ML), and Deep Learning (DL). I constantly explore how these technologies can be applied to create smarter, more efficient systems.
      </p>

      <p>
      To strengthen my analytical thinking and problem-solving abilities, I solve Data Structures and Algorithms (DSA) problems on a daily basis. This not only sharpens my logical skills but also helps me write optimized and efficient code in my development work.

I am always eager to learn new tools and technologies, collaborate on innovative projects, and grow as a developer. My goal is to combine creativity, technical skill, and problem-solving to build impactful software solutions.
      </p>
    </section>

    {/* service section */}

    <section className="service">
      <h3 className="h3 service-title">What i'm doing</h3>
      <ul className="service-list">
        {servicesData.map((service, index) => (
          <Service
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </ul>
    </section>

    {/* tech stack section */}

    <section className="clients">
      <h3 className="h3 clients-title">My Tech Stack</h3>
      <ul className="clients-list has-scrollbar">
        <li className="clients-item">
          <a href="#">
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node-js logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" alt="Express logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" alt="Mongo-DB logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Pytorch_logo.png" alt="py-torch logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg"alt="Tensorflow logo"/>
          </a>
        </li>
        <li className="clients-item">
          <a href="#">
            <img src="https://keras.io/img/logo.png"alt="keras logo"/>
          </a>
        </li>
      </ul>
    </section>

  </article>
  )
}

export default About