import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useParams } from "react-router-dom";
import * as data from "./fakeData";
import { Parser } from "html-to-react";

const VideoComponent = () => {
  // const [newsinfo, setNewsInfo] = useState<any>({});
  const [socmed, setSocmed] = useState<any[]>([]);
  const [icons, setIcon] = useState<any>({});
  const [video, setvideo] = useState<any>({});

  const params: any = useParams();

  useEffect(() => {
    setvideo(data.video);
  }, []);
  return (
    <>
      {/* <HeaderComponent></HeaderComponent> */}
      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 mt-5 mt-lg-0">
              <div className="pl-0 pl-lg-4">
                <h2 className="section-title section-title-post ">Video</h2>
                {Parser().parse(video)}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <FooterComponent></FooterComponent> */}
    </>
  );
};

export default VideoComponent;
