import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import User from "../../image/user.jpg";
import Right from '../right-panel/Right';


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
            This is small screen
        </>
    )
}

const DesktopComponent = () => {
    return(
       <>
            <input type="checkbox" id="checkbox"/>
            <header class="header">
                <h2 class="u-name">ASSIGNMENT
                    <label for="checkbox">
                        <i id="navbtn" class="fa fa-bars" aria-hidden="true"></i>
                    </label>
                </h2>
                <i class="fa fa-user" aria-hidden="true"></i>
            </header>
	        <div class="body">
		        <nav class="side-bar">
                <div class="user-p">
                    <img src={User}/>
                    <h4>Hi... Abhishek</h4>
                </div>
			    <ul>
                    <li>
                        <a href="#">
                            <i class="fa fa-desktop" aria-hidden="true"></i>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fa fa-envelope-o" aria-hidden="true"></i>
                            <span>Message</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fa fa-comment-o" aria-hidden="true"></i>
                            <span>Comment</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fa fa-info-circle" aria-hidden="true"></i>
                            <span>About</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fa fa-cog" aria-hidden="true"></i>
                            <span>Setting</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fa fa-power-off" aria-hidden="true"></i>
                            <span>Logout</span>
                        </a>
                    </li>
			    </ul>
		    </nav>
            <section class="section-1">
                <Right/>
            </section>
	    </div>
    </>
    )
}

const MyComponent = () => {
    const { width } = useViewport();
    const breakpoint = 220;
  
    return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
};

export default function Navbar(){
    return (
        <ViewportProvider>
          <MyComponent />
        </ViewportProvider>
    );
}