//동위에 있는 logo.svg 파일을 logo 라는 이름으로 불러옴
import logo from './logo.svg';
import dog from './img.jfif';
import './App.css';
import Mango from './Mango';
import Card from './Card';
//컴포넌트만들기
//반복되는 UI 요소(태그)를 반환하는 함수
/*
컴포넌트함수는 반드시 대문자로 시작
반환값이 UI요소여야함
*/
function Comp() {
  return <div className="text">새컴포넌트</div>
}
function App() {
  return (
		<div className="myApp">
			<Mango />
			<Card />
			<Comp />
			<Comp />
			<Comp />
			<Comp />
			<Comp />
			<Comp />
			<Comp />
			<Comp />
			<Comp />
			<Comp />
			<Comp />
			<Comp />
			<Comp />
			<Comp />
			<Comp />
			<Comp />
			<Comp />
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<img src={dog} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
