import DemoList from "./components/DemoList";
import DemoTablerow from "./components/DemoTablerox";
import DemovarInject from "./components/Demovarinject";
import FirstComponent from "./components/FirstComponent";
import MyChildrenComponent from "./components/myChildrenComponent";

function App() {
  return (
    <div className="App">

      <MyChildrenComponent backgroundColor = 'red'>
        <p>
          Ceci est mon paragraphe
        </p>
      </MyChildrenComponent>

      <MyChildrenComponent>
        <button>Click me !</button>
      </MyChildrenComponent>

      <DemovarInject/>
   
      <DemoList/>
<FirstComponent/>
<table> 
  <thead>
    <tr>
      <th>Col1</th>
      <th>Col2</th>
      <th>Col3</th>
    </tr>
  </thead>
  <tbody> 
  <tr>
    <DemoTablerow/>
  </tr>
  <tr>
    <DemoTablerow/>
  </tr>
  <tr>
    <DemoTablerow/>
  </tr>
  </tbody>
 
</table>
    </div>
  );
}

export default App;
