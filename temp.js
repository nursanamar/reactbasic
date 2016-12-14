class listData extends React.component{
	render(){
		return ( 
			<li>{this.props.data}</li>
		 );
	}
}
class daftarList extends React.component{
	render(){
		var row = [];
		this.props.data.forEach((data) => {
			row.push(<listData data={data} /> );
		});
		return ( 
			<ul>
				{row}
			</ul>
		 );
	}
}
class fieldCari extends React.component{
	render(){
		return (
		<input type = "text"/>
		);
	}
}
class cariData extends React.component{
	render(){
		return ( 
			<fieldCari />
			<daftarList data={this.props.data}/>
		 );
	}
}
var data = ['apa','dimana','siapa','bagaimana','kapan'];
ReactDOM.render( 
	<cariData data = {data}/>,
	document.getElementById('target')
 );