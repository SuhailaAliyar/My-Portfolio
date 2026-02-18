export const resumeData = {
  hero: {
    name: "Suhaila Aliyar",
    title: "Software Developer | Java | Cloud",
    description: "Hi! I'm Suhaila, a Software Developer with 5 years of experience building web applications and microservices using Java and Spring Boot. I design and develop REST APIs, work with databases, and deploy applications on cloud platforms. I've discovered a real passion for cloud technologies and DevOps. I'm actively learning Docker, Kubernetes, CI/CD pipelines, and cloud architecture because I genuinely find this space fascinating. I love solving problems, building reliable systems, and continuously expanding my technical skills. When I'm not coding, I'm diving into cloud services and exploring AI",
    badges: ["Java 21", "Spring Boot", "Microservices", "GCP", "AWS", "Kubernetes", "Event-Driven", "CI/CD"],
    stats: [
      { number: "5+", label: "Years of Experience" },
      { number: "80k", label: "Daily Integrations" },
      { number: "40%", label: "Release Cycle Reduction" },
      { number: "30%", label: "Efficiency Improvement" }
    ]
  },

  experiences: [
    {
      period: "May 2024 – Dec 2025",
      company: "Ford Werke GmbH via Elfin Engineering & Solutions",
      location: "Cologne, Germany",
      role: "Software Developer",
      summary: "Developed a cloud-to-cloud integration platform for automotive mobility on GCP, processing over 80,000 daily vehicle integrations for electric vehicles.",
      highlights: [
        "Developed REST API microservices for the full vehicle feature lifecycle — authorization via Spring Security, connectivity opt-in, and EV feature enrollment/de-enrollment",
        "Designed event-driven architecture with Google Pub/Sub including retry and dead-letter queues — reduced failed message processing by 40%",
        "Integrated GitHub with Jenkins CI/CD; authored Groovy pipeline scripts and provisioned infrastructure via Terraform — cut release cycle by 40%",
        "Introduced TDD with JUnit 5 and Mockito; integrated SonarQube — reduced production defects by 20%",
        "Built Google Cloud Monitoring dashboards with alerts for early anomaly detection",
        "Owned production incidents end-to-end: root-cause analysis, post-mortems, cross-functional coordination"
      ],
      tags: ["Java 21", "Spring Boot", "Google Pub/Sub", "GCP", "Kubernetes", "Terraform", "Jenkins", "JUnit 5", "SonarQube", "Microservices"]
    },
    {
      period: "Oct 2022 – Oct 2023",
      company: "IBM Expert Labs",
      location: "Kochi, India",
      role: "Delivery Consultant",
      highlights: [
        "Developed a Privacy Information Management System (PIMS) on IBM Cloud using Java and Spring Boot — automated compliance workflows, improving efficiency by 30%",
        "Contributed to the Audit Module for BrightHouse Financial; performed Java code remediations during OpenPages migration from v8.1 to v8.3"
      ],
      tags: ["Java", "Spring Boot", "IBM Cloud", "OpenPages"]
    },
    {
      period: "Jul 2019 – Oct 2022",
      company: "Tata Consultancy Services (TCS)",
      location: "Kochi, India",
      role: "Software Engineer",
      highlights: [
        "Developed e-commerce applications (LabSync, Compliance Web Tool) using Java 17, Spring Boot, Angular, Kubernetes, and Docker on AWS — serving thousands of monthly users",
        "Designed and developed REST APIs for CRUD operations meeting business requirements",
        "Debugged production issues across frontend and backend; analysed slow API responses and database queries"
      ],
      tags: ["Java 17", "Spring Boot", "Angular", "Docker", "Kubernetes", "AWS", "REST APIs"]
    }
  ],

  skills: [
    {
      category: "Languages & Frameworks",
      items: ["Java 17/21", "Spring Boot", "Spring Data JPA", "Spring Security", "Spring Cloud", "TypeScript", "Angular", "React", "HTML", "CSS"]
    },
    {
      category: "Cloud & DevOps",
      items: ["GCP", "AWS", "Azure", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions", "Maven", "Gradle"]
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MySQL", "MSSQL", "MongoDB", "Redis"]
    },
    {
      category: "Messaging & Testing",
      items: ["Google Pub/Sub", "Kafka", "JUnit 5", "Mockito", "REST Assured", "Cucumber", "TDD", "SonarQube"]
    }
  ],

  projects: [
    {
      name: "Way2Home",
      period: "Oct 2024 – Mar 2025 · Hochschule Fulda",
      description: "A full-stack accommodation platform for students and landlords featuring advanced search, filtering, and priority-based ranking algorithms. Deployed on Microsoft Azure with a containerized backend.",
      tags: ["Java", "Spring Boot", "React", "MySQL", "Docker", "Azure", "REST APIs"],
      githubUrl: "https://github.com/Rashid-hussain-mohammed/Team5-GDSD"
    }
  ],

  education: [
    {
      degree: "MSc in Global Software Development",
      school: "Hochschule Fulda, Germany",
      meta: "Focus: Artificial Intelligence"
    },
    {
      degree: "B.Tech in Computer Science & Engineering",
      school: "APJ Abdul Kalam Technological University",
      meta: "2015 – 2019 · Kerala, India"
    }
  ],

  certifications: [
    { name: "GCP Associate Cloud Engineer", status: "In Progress" },
    { name: "5-Day AI Agents Intensive", provider: "with Google" }
  ],

  contact: {
    email: "suhailaka.28@gmail.com",
    phone: "+49 17687923468",
    linkedin: "https://www.linkedin.com/in/suhaila-aliyar",
    github: "https://github.com/SuhailaAliyar", 
    location: "Cologne, Germany"
  }
};
