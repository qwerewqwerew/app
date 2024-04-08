/* 컴포넌트란
  UI를 반환하는 함수/클래스
  클래스형 컴포넌트 16버전
  함수형 컴포넌트의 조건
  - 함수명,파일명은 대문자로 시작
  - export 로 내보내기
  - return 태그이어야함
  - 최상위 태그는 딱 한개
*/
//선언적함수의 컴포넌트 선언
import "./Mango.css";
function Mango(params) {
	return (
		<nav>
			<ul>
				<li>menu1</li>
				<li>menu2</li>
				<li>menu3</li>
				<li>menu4</li>
			</ul>
		</nav>
	);
}
export default Mango;
