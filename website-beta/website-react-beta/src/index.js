import React from "react";
import ReactDOM from "react-dom";
import ProjectPage from "./components/ProjectPage/ProjectPage.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
      projectURL: "/FCC_Data_Projects/Bar-Chart/bar-chart.html"
    },
    {
      title: "Scatter Plot",
      imageURL:
        "http://www.sthda.com/sthda/RDoc/figure/graphs/scatter-plots-base-scatter-plot-1.png",
      listItems: [
        "This projct is a plot of Doping VS performance in profesional cycling"
      ],
      projectURL: "/FCC_Data_Projects/Scatter-Plot/scatter-plot.html"
    },
    {
      title: "Heat Map",
      imageURL: "https://www.iia.nl/SiteFiles/Nieuws/Sample-Heat-Map.jpg",
      body:
        "This projct is a plot of Doping VS performance in profesional cycling",
      listItems: [
        "Here is a heatmap of average global tempratures from the 1700s to today.",
        "It's organized both by month and year, with color representing temprature variance"
      ],
      projectURL: "/FCC_Data_Projects/Heat-Map/heat-map.html"
    }
  ]
};

ReactDOM.render(
  <Router>
    <ProjectPage projectsJSON={projects} />
  </Router>,
  document.getElementById("root")
);
