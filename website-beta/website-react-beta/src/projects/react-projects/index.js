import QuoteMachine from "./QuoteMachine/QuoteMachine.js";
import Markdown from "./Markdown/Markdown.js";
import JSCalc from "./JSCalc/JSCalc.js";
import DrumMachine from "./DrumMachine/DrumMachine.js";
import Clock from "./Clock/Clock.js";

export default {
  isReact: true,
  label: "React Projects",
  projects: [
    {
      title: "Markdown",
      component: Markdown,
      imageURL: "https://plot.ly/~RPlotBot/3512/count-vs-animals.png",
      listItems: [
        "This projct is a simple graph of the United States GDP over time",
        "Built using d3 to iterate over the data",
        "Used the d3 scale methods to draw the axis and scale the GDP values to usable rect heights"
      ]
    },
    {
      title: "JSCalc",
      component: JSCalc,
      imageURL:
        "http://www.sthda.com/sthda/RDoc/figure/graphs/scatter-plots-base-scatter-plot-1.png",
      listItems: [
        "This projct is a plot of Doping VS performance in profesional cycling"
      ]
    },
    {
      title: "DrumMachine",
      component: DrumMachine,
      imageURL: "https://plot.ly/~RPlotBot/3512/count-vs-animals.png",
      listItems: [
        "This projct is a simple graph of the United States GDP over time",
        "Built using d3 to iterate over the data",
        "Used the d3 scale methods to draw the axis and scale the GDP values to usable rect heights"
      ]
    },
    {
      title: "Clock",
      component: Clock,
      imageURL:
        "http://www.sthda.com/sthda/RDoc/figure/graphs/scatter-plots-base-scatter-plot-1.png",
      listItems: [
        "This projct is a plot of Doping VS performance in profesional cycling"
      ]
    },
    {
      title: "QuoteMachine",
      component: QuoteMachine,
      imageURL: "https://plot.ly/~RPlotBot/3512/count-vs-animals.png",
      listItems: [
        "This projct is a simple graph of the United States GDP over time",
        "Built using d3 to iterate over the data",
        "Used the d3 scale methods to draw the axis and scale the GDP values to usable rect heights"
      ]
    }
  ]
};
