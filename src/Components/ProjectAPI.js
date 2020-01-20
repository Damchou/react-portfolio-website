const ProjectAPI = {
  projects: [
    {
      id: 1,
      name: "Example Project 1",
      tag: "Javascript",
      path: "example-project1",
      icon: "icon",
      about: "This is About text",
      short:
        "This is a short and brief description of this project. But nothing prevents a longer one, though!",
      description:
        "This is a longer description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis rutrum erat, vel porta arcu. Vivamus at magna sit amet sem efficitur pellentesque id sagittis ipsum. Nullam at metus sed arcu suscipit rhoncus eget eget sem. Nam aliquet tempus euismod. Nullam maximus porta purus vel dapibus. Integer rutrum id turpis",
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
      path: "example-project2",
      icon: "icon",
      about: "This is About text",
      short:
        "This is a short and brief description of this project. But nothing prevents a longer one, though!",
      description:
        "This is a longer description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at mauris eget ipsum imperdiet tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis facilisis tortor id dui vehicula, placerat sodales ex tincidunt. Mauris rutrum libero mi, nec viverra urna pellentesque ac. Proin ornare nibh vitae urna finibus molestie. Cras sit amet eleifend mi, in finibus erat. Duis feugiat vitae purus in pretium. Duis elementum purus vitae nisi gravida sodales. Curabitur sollicitudin consequat nisl suscipit tristique. Proin et arcu lobortis, rhoncus ante eget, eleifend purus. Donec non faucibus nibh. Integer luctus eros nec velit malesuada.",
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
      path: "example-project3",
      icon: "icon",
      about: "This is About text",
      short:
        "This is a short and brief description of this project. But nothing prevents a longer one, though!",
      description:
        "This is a longer description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis rutrum erat, vel porta arcu. Vivamus at magna sit amet sem efficitur pellentesque id sagittis ipsum. Nullam at metus sed arcu suscipit rhoncus eget eget sem. Nam aliquet tempus euismod. Nullam maximus porta purus vel dapibus. Integer rutrum id turpis",
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
      path: "example-project4",
      icon: "icon",
      about: "This is About text",
      short:
        "This is a short and brief description of this project. But nothing prevents a longer one, though!",
      description:
        "This is a longer description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis rutrum erat, vel porta arcu. Vivamus at magna sit amet sem efficitur pellentesque id sagittis ipsum. Nullam at metus sed arcu suscipit rhoncus eget eget sem. Nam aliquet tempus euismod. Nullam maximus porta purus vel dapibus. Integer rutrum id turpis",
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
      path: "example-project5",
      icon: "icon",
      about: "This is About text",
      short:
        "This is a short and brief description of this project. But nothing prevents a longer one, though!",
      description:
        "This is a longer description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis rutrum erat, vel porta arcu. Vivamus at magna sit amet sem efficitur pellentesque id sagittis ipsum. Nullam at metus sed arcu suscipit rhoncus eget eget sem. Nam aliquet tempus euismod. Nullam maximus porta purus vel dapibus. Integer rutrum id turpis",
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
      path: "example-project6",
      icon: "icon",
      about: "This is About text",
      short:
        "This is a short and brief description of this project. But nothing prevents a longer one, though!",
      description:
        "This is a longer description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis rutrum erat, vel porta arcu. Vivamus at magna sit amet sem efficitur pellentesque id sagittis ipsum. Nullam at metus sed arcu suscipit rhoncus eget eget sem. Nam aliquet tempus euismod. Nullam maximus porta purus vel dapibus. Integer rutrum id turpis",
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
      path: "example-project7",
      icon: "icon",
      about: "This is About text.",
      short:
        "This is a short and brief description of this project. But nothing prevents a longer one, though!",
      description:
        "This is a longer description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis rutrum erat, vel porta arcu. Vivamus at magna sit amet sem efficitur pellentesque id sagittis ipsum. Nullam at metus sed arcu suscipit rhoncus eget eget sem. Nam aliquet tempus euismod. Nullam maximus porta purus vel dapibus. Integer rutrum id turpis",
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
  get: function(path) {
    const isProject = p => p.path === path;
    return this.projects.find(isProject);
  }
};

export default ProjectAPI;
