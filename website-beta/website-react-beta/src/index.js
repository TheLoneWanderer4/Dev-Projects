import React from "react";
import ReactDOM from "react-dom";
import ProjectPage from "./components/ProjectPage/ProjectPage.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

let projects = {
  label: "D3 Projects",
  projects: [
    {
      title: "Bar Chart",
      imageURL: "https://plot.ly/~RPlotBot/3512/count-vs-animals.png",
      listItems: [
        "This projct is a simple graph of the United States GDP over time",
        "Built using d3 to iterate over the data",
        "Used the d3 scale methods to draw the axis and scale the GDP values to usable rect heights"
      ],
      projectURL:
        "/home/nafal/Documents/Dev/Dev-Projects/website-beta/website-react-beta/FCC_Data_Projects/Bar-Chart/bar-chart.html"
    },
    {
      title: "Scatter Plot",
      imageURL: "https://plot.ly/~RPlotBot/3512/count-vs-animals.png",
      body:
        "This projct is a plot of Doping VS performance in profesional cycling",
      listItems: [],
      projectURL: "./FCC_Data_Projects/Bar-Chart/bar-chart.html"
    }
  ]
};

ReactDOM.render(
  <ProjectPage projectsJSON={projects} />,
  document.getElementById("root")
);
