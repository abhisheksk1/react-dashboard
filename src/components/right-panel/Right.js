import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./right.css";
import Cardimg from "../../image/Cardimg.jpg";


const viewportContext = React.createContext({});

const ViewportProvider = ({ children }) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  );
};


const useViewport = () => {
    const { width, height } = React.useContext(viewportContext);
    return { width, height };
};

const MobileComponent = () => {
    return(
        <>
        This is small screen.
        </>
    )
}

const DesktopComponent = () => {
    return(
        <>
            <div class="container">
                <div class="row">
                    <div class="col-sm my-2">
                        <div class="card">
                            <img class="card-img-top" src={Cardimg} alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm my-2">
                        <div class="card">
                            <img class="card-img-top" src={Cardimg} alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm my-2">
                        <div class="card">
                            <img class="card-img-top" src={Cardimg} alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </>
    )
}

const MyComponent = () => {
    const { width } = useViewport();
    const breakpoint = 220;
  
    return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
};

export default function Right(){
    return (
        <ViewportProvider>
          <MyComponent />
        </ViewportProvider>
    );
}