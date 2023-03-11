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
		document.getElementById('A1Input').setAttribute("placeholder", '错了！再来');
	}
}
function A2Btn() {
	if(document.getElementById('A2Input').value =='やまと'){
		document.getElementById('Q2Blank').innerHTML = 'やまと';
		document.getElementById('P2Btn').style.display = 'none';	
		document.getElementById('P3').style.display = 'block';
		document.getElementById('P3Btn').style.display = 'block';
	}else{
		document.getElementById('A2Input').value="";	
		document.getElementById('A2Input').setAttribute("placeholder", '错了！再来');	
	}
}
function A3Btn() {
	if(document.getElementById('A31Input').value =='クロード' && document.getElementById('A32Input').value =='ドビュッシー' ){
		document.getElementById('Q31Blank').innerHTML = 'クロード';
		document.getElementById('Q32Blank').innerHTML = 'ドビュッシー';
		document.getElementById('P3Btn').style.display = 'none';	
		document.getElementById('P4').style.display = 'block';
		document.getElementById('P4Btn').style.display = 'block';
	}else{
		document.getElementById('A31Input').value="";	
		document.getElementById('A32Input').value="";	
		document.getElementById('A31Input').setAttribute("placeholder", '错了！再来');	
		document.getElementById('A32Input').setAttribute("placeholder", '错了！再来');	
	}
}
function A4Btn() {
	if(document.getElementById('A4Input').value =='ファンシーポッズ'){
		document.getElementById('Q4Blank').innerHTML = 'ファンシーポッズ';
		document.getElementById('P4Btn').style.display = 'none';	
		document.getElementById('P5').style.display = 'block';
		document.getElementById('P5Btn').style.display = 'block';
	}else{
		document.getElementById('A4Input').value="";	
		document.getElementById('A4Input').setAttribute("placeholder", '错了！再来');	
	}
}
function A5Btn() {
	if(document.getElementById('A5Input').value =='ユー'){
		document.getElementById('Q5Blank').innerHTML = 'ユー';
		document.getElementById('P5Btn').style.display = 'none';	
		document.getElementById('P6').style.display = 'block';
		document.getElementById('P6Btn').style.display = 'block';
	}else{
		document.getElementById('A5Input').value="";	
		document.getElementById('A5Input').setAttribute("placeholder", '错了！再来');	
	}
}
function A6Btn() {
	if((document.getElementById('A61Input').value =='まやクロ' || document.getElementById('A61Input').value =='まやくろ' || document.getElementById('A61Input').value =='真矢クロ' || document.getElementById('A61Input').value =='真矢くろ' || document.getElementById('A61Input').value =='マヤクロ' || document.getElementById('A61Input').value =='マヤくろ'  ) && document.getElementById('A62Input').value =='ファンシー' && document.getElementById('A63Input').value =='ユー'){
		document.getElementById('Q6Blank').innerHTML = 'まやクロのファンシー　ユー';
		document.getElementById('P6Btn').style.display = 'none';	
		document.getElementById('P7').style.display = 'block';
		document.getElementById('P1').style.display = 'none';
		document.getElementById('P2').style.display = 'none';
		document.getElementById('P3').style.display = 'none';
		document.getElementById('P4').style.display = 'none';
		document.getElementById('P5').style.display = 'none';
		document.getElementById('P6').style.display = 'none';
	}else{
		document.getElementById('A61Input').value="";	
		document.getElementById('A62Input').value="";	
		document.getElementById('A63Input').value="";	
		document.getElementById('A62Input').setAttribute("placeholder", '错了！再来');	
	}
}
function A7Btn() {
	window.open("https://docs.google.com/forms/d/e/1FAIpQLSdC3XCSKdpLHPVYK7FyfqLEgzEF1oaqdvaHABCx6vic2WRG1w/viewform");
}
