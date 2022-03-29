import "./Chart.css";
import ChartBar from "./ChartBar";

export default function Chart(props) {

    let amountList = props.datapoints.map((datapoint)=>(datapoint.value))

    const maxTotal = Math.max(...amountList)
    console.log(maxTotal)

  return (
    <div>
      <div className="chart">
        {props.datapoints.map((datapoint) => (
          <ChartBar
            key={datapoint.label}
            value={datapoint.value}
            maxValue={maxTotal}
            label={datapoint.label}
          ></ChartBar>
        ))}
      </div>
    </div>
  );
}
