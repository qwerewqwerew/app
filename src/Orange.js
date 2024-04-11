const style = { color: 'red', fontSize: '32px', backgroundColor: 'black' };
const lemo= { color: 'blue', fontSize: '32px', backgroundColor: 'yellow' , textAlign:'center'};
const Orange = () => {
	return (
		<div style={style}>
			<h3>Orange</h3>
		</div>
	);
};
const Lemon = () => {
	return <h3 style={lemo}>Lemon</h3>;
};
export { Orange, Lemon };
