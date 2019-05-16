const ProjectAPI = {
  projects: [
    {
      id: 1,
      name: "Example Project 1",
      tag: "Javascript",
      url: "example-project1",
      icon: "example-project1-icon",
      about: "This is About text",
      description: "This is a Description text",
      img1: "img1",
      img2: "img2",
      img3: "img3",
      img4: "img4",
      video: "",
      demo: "",
      source: "https://github.com/Damchou/react-portfolio-website"
    },
    {
      id: 2,
      name: "Example Project 2",
      tag: "C#",
      url: "example-project2",
      icon: "example-project2-icon",
      about: "This is About text",
      description: "This is a Description text",
      img1: "img1",
      img2: "img2",
      img3: "img3",
      img4: "img4",
      video: "",
      demo: "",
      source: "https://github.com/Damchou/react-portfolio-website"
    },
    {
      id: 3,
      name: "Example Project 3",
      tag: "Java",
      url: "example-project3",
      icon: "example-project3-icon",
      about: "This is About text",
      description: "This is a Description text",
      img1: "img1",
      img2: "img2",
      img3: "img3",
      img4: "img4",
      video: "",
      demo: "",
      source: "https://github.com/Damchou/react-portfolio-website"
    },
    {
      id: 4,
      name: "Example Project 4",
      tag: "PHP",
      url: "example-project4",
      icon: "example-project4-icon",
      about: "This is About text",
      description: "This is a Description text",
      img1: "img1",
      img2: "img2",
      img3: "img3",
      img4: "img4",
      video: "",
      demo: "",
      source: "https://github.com/Damchou/react-portfolio-website"
    },
    {
      id: 5,
      name: "Example Project 5",
      tag: "Unity",
      url: "example-project5",
      icon: "example-project5-icon",
      about: "This is About text",
      description: "This is a Description text",
      img1: "img1",
      img2: "img2",
      img3: "img3",
      img4: "img4",
      video: "",
      demo: "",
      source: "https://github.com/Damchou/react-portfolio-website"
    },
    {
      id: 6,
      name: "Example Project 6",
      tag: "Python",
      url: "example-project6",
      icon: "example-project6-icon",
      about: "This is About text",
      description: "This is a Description text",
      img1: "img1",
      img2: "img2",
      img3: "img3",
      img4: "img4",
      video: "",
      demo: "",
      source: "https://github.com/Damchou/react-portfolio-website"
    },
    {
      id: 7,
      name: "Example Project 7",
      tag: "C++",
      url: "example-project7",
      icon: "example-project7-icon",
      about: "This is About text.",
      description: "This is a Description text.",
      img1: "img1",
      img2: "img2",
      img3: "img3",
      img4: "img4",
      video: "",
      demo: "",
      source: "https://github.com/Damchou/react-portfolio-website"
    }
  ],
  all: function() {
    return this.projects;
  },
  get: function(id) {
    const isProject = p => p.url === id;
    return this.projects.find(isProject);
  }
};

export default ProjectAPI;
