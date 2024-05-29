import "./header.css";
import SplineViewer from './../spline';


export default function Header() {
  return (
    <div className="header">
    <SplineViewer url="https://prod.spline.design/OfvkftoNK5hoKCwc/scene.splinecode" />
    <div className="headerTitles">
<div className="HeaderBox">
        <span className="headerTitleLg">BLOG</span>
        </div>
        <div className="HeaderBox">
        <span className="headerTitleSm">Where Words Create Worlds: Welcome to our Blogging Haven</span>
        </div>
      </div>
    </div>
  );
}
