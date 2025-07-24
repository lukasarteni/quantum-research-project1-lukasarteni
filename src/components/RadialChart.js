import React, { useEffect, useRef } from "react";

const RadialChart = ({ data, width = 300, height = 300 }) => {
  const ref = useRef();

  useEffect(() => {
    const radius = Math.min(width, height) / 2;
    const svg = d3.select(ref.current);
    svg.selectAll("*").remove();

    const color = d3.scaleOrdinal(d3.schemeCategory10);
    const pie = d3.pie().value(d => d.value);
    const arc = d3.arc().innerRadius(0).outerRadius(radius);

    const g = svg
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    const arcs = g.selectAll("arc")
      .data(pie(data))
      .enter()
      .append("g");

    arcs.append("path")
      .attr("d", arc)
      .attr("fill", (d, i) => color(i));

    arcs.append("text")
      .attr("transform", d => `translate(${arc.centroid(d)})`)
      .attr("text-anchor", "middle")
      .attr("font-size", 12)
      .text(d => d.data.label);
  }, [data]);

  return React.createElement("svg", { ref });
};

export default RadialChart;
