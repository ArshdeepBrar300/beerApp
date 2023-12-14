
import './App.css';
import Login from './components/Login';
// import { useEffect,useRef } from 'react';
import OrgChartWrapper from './components/orgChartWrapper';

function App() {
  // const orgChartRef = useRef(null);
  // useEffect(() => {
  //   // Initialize orgchart.js logic
  //   const orgChartInstance = new OrgChartWrapper(); // Replace OrgChart with the actual class in orgchart.js
  //   orgChartRef.current = orgChartInstance;

    
  //   return () => {
  //     orgChartInstance.destroy();
  //   };
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <OrgChartWrapper>
          <Login/>
          </OrgChartWrapper>
     
      </header>
    </div>
        
  );
}

export default App;
