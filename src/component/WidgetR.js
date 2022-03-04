import './WidgetR.css'
import ProgressBar from "@ramonak/react-progress-bar";

function WidgetR() {
  return (
    <div className='widgetR'>
      <div className="heading">
        <span>Comparison</span>
        <span><button className='button'>View All</button></span>
      </div>
      <div className="progressBar">
        <h6>Italy</h6>
        <ProgressBar completed={70} customLabel=" " className="container"/>
        <h6>US</h6>
        <ProgressBar completed={55} customLabel=" " className="container"/>
        <h6>Canada</h6>
        <ProgressBar completed={65} customLabel=" " className="container"/>
      </div>
    </div>
  )
}

export default WidgetR