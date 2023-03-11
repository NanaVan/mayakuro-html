//initial
function A0Btn() {
	document.getElementById('P0').style.display = 'none';
	document.getElementById('P1').style.display = 'block';
	document.getElementById('P1Btn').style.display = 'block';
}

//value judgement
function A1Btn() {
	if(document.getElementById('A1Input').value =='まんようしゅう'){
		document.getElementById('Q1Blank').innerHTML = 'まんようしゅう';
		document.getElementById('A1Btn').style.display = 'none';	
		document.getElementById('A1Input').style.display = 'none';	
		document.getElementById('P2').style.display = 'block';
		document.getElementById('P2Btn').style.display = 'block';
	}else{
		document.getElementById('A1Input').value = '';
		document.getElementById('A1Input').setAttribute("placeholder", 'Wrong! Try again');
	}
}
function A2Btn() {
	if(document.getElementById('A2Input').value =='やまと'){
		document.getElementById('Q2Blank').innerHTML = 'やまと';
		document.getElementById('A2Btn').style.display = 'none';	
		document.getElementById('A2Input').style.display = 'none';	
		document.getElementById('P3').style.display = 'block';
		document.getElementById('P3Btn').style.display = 'block';
	}else{
		document.getElementById('A2Input').value="";	
		document.getElementById('A2Input').setAttribute("placeholder", 'Wrong! Try again');	
	}
}
function A3Btn() {
	if(document.getElementById('A31Input').value =='クロード' && document.getElementById('A32Input').value =='ドビュッシー' ){
		document.getElementById('Q31Blank').innerHTML = 'クロード';
		document.getElementById('Q32Blank').innerHTML = 'ドビュッシー';
		document.getElementById('A3Btn').style.display = 'none';	
		document.getElementById('A3Input').style.display = 'none';	
		document.getElementById('P4').style.display = 'block';
		document.getElementById('P4Btn').style.display = 'block';
	}else{
		document.getElementById('A3Input').value="";	
		document.getElementById('A3Input').setAttribute("placeholder", 'Wrong! Try again');	
	}
}
//function A4Btn() {
//	if(document.getElementById('A1Input').value =='まんようしゅう'){
//		document.getElementById('Q1Orange').innerHTML = 'ま';
//		document.getElementById('Q1Gray').innerHTML = 'んようしゅう';
//		document.getElementById('A1Input').value="";	
//		document.getElementById('A1Input').setAttribute("placeholder", 'Correct!');	
//		document.getElementById('P2').style.display = 'block';
//	}else{
//		document.getElementById('A1Input').value="";	
//	}
//}
