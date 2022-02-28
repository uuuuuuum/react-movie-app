import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import "./scss/App.scss";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

/* 
Switch 에러
react-router-dom이 6으로 업그레이드되면서
Switch -> routes로 바뀜.(component도 element로 변경)

<Router>
  <Switch> => Routes로 변경
    <Route path="/">
      <Home /> ====> <Route path="/" element={<Home />} />
       => Route 태그 안에서 컴포넌트로 넣으면 안됨
          Route 태그의 괄호 안에 프로퍼티로 넣어야함
          element={<컴포넌트>}
    </Route>
  </Switch>
</Router>
*/

export default App;