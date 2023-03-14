//initial
function A0Btn() {
	document.getElementById('P0').style.display = 'none';
	document.getElementById('P1').style.display = 'block';
	document.getElementById('P1Btn').style.display = 'block';
	printer('P1line', 'P1print', 'P1Btn', 'Q1Blank', 'OrangeToGray');
}

//value judgement
function A1Btn() {
	if(document.getElementById('A1Input').value =='まんようしゅう'){
		document.getElementById('Q1Blank').innerHTML = 'まんようしゅう';
		document.getElementById('P1Btn').style.display = 'none';	
		document.getElementById('P2').style.display = 'block';
		document.getElementById('P2Btn').style.display = 'block';
		printer('P2line', 'P2print', 'P2Btn', 'Q2Blank', 'OrangeToGray');
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
		printer('P3line', 'P3print', 'P3Btn', 'Q3Blank', 'OrangeToGray');
	}else{
		document.getElementById('A2Input').value="";	
		document.getElementById('A2Input').setAttribute("placeholder", '错了！再来');	
	}
}
function A3Btn() {
	if(document.getElementById('A31Input').value =='クロード' && document.getElementById('A32Input').value =='ドビュッシー' ){
		document.getElementById('Q3Blank').innerHTML = 'クロード&#8226;ドビュッシー';
		document.getElementById('P3Btn').style.display = 'none';	
		document.getElementById('P4').style.display = 'block';
		document.getElementById('P4Btn').style.display = 'block';
		printer('P4line', 'P4print', 'P4Btn', 'Q4Blank', 'OrangeToGray');
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
		printer('P5line', 'P5print', 'P5Btn', 'Q5Blank', 'Orange');
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
		printer('P6line', 'P6print', 'P6Btn', 'Q6Blank', 'OrangeToGrayToOrange');
	}else{
		document.getElementById('A5Input').value="";	
		document.getElementById('A5Input').setAttribute("placeholder", '错了！再来');	
	}
}
function A6Btn() {
	if((document.getElementById('A61Input').value =='まやクロ' || document.getElementById('A61Input').value =='まやくろ' || document.getElementById('A61Input').value =='真矢クロ' || document.getElementById('A61Input').value =='真矢くろ' || document.getElementById('A61Input').value =='マヤクロ' || document.getElementById('A61Input').value =='マヤくろ'  ) && document.getElementById('A62Input').value =='ファンシー' && document.getElementById('A63Input').value =='ユー'){
		document.getElementById('Q6Blank').innerHTML = '真矢クロのファンシー　ユー';
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
function A71Btn() {
	window.open("https://docs.google.com/forms/d/e/1FAIpQLSdC3XCSKdpLHPVYK7FyfqLEgzEF1oaqdvaHABCx6vic2WRG1w/viewform");
}
function A72Btn() {
	if (document.getElementById('view').innerHTML == '查看全文') {
		document.getElementById('view').innerHTML = '隐藏全文';
		document.getElementById('P1').style.display = 'block';
		document.getElementById('P2').style.display = 'block';
		document.getElementById('P3').style.display = 'block';
		document.getElementById('P4').style.display = 'block';
		document.getElementById('P5').style.display = 'block';
		document.getElementById('P6').style.display = 'block';
	} else{
		document.getElementById('view').innerHTML = '查看全文';
		document.getElementById('P1').style.display = 'none';
		document.getElementById('P2').style.display = 'none';
		document.getElementById('P3').style.display = 'none';
		document.getElementById('P4').style.display = 'none';
		document.getElementById('P5').style.display = 'none';
		document.getElementById('P6').style.display = 'none';
	}
}

// Animate one paragraph with word by word
function printer(inputClassName, outputClassName, btnName, spanID, spanClass){
	var paragraphs = document.getElementsByClassName(inputClassName);
	var prints = document.getElementsByClassName(outputClassName);
	var t = 0
	for (var i = 0; i < paragraphs.length; i++){
		var spanItem = paragraphs[i].getElementsByTagName("span");
		if (spanItem.length != 0) {
			t = wordByWordWith(t, paragraphs[i], prints[i], spanID, spanClass);	
		} else if (paragraphs[i].tagName == 'IMG'){
			setTimeout(function(item){item.style.display='block'}, 100*t, prints[i]);
			t += 1;
		} else {
			t = wordByWordWithOut(t, paragraphs[i], prints[i]);
		}
	}
	setTimeout(function(item){item.style.opacity='1'}, 100*(t+1), document.getElementById(btnName));
}
// without span
function wordByWordWithOut(t0, para, print) {
	const data = para.innerHTML.split('');
	for (var i = 0; i < data.length; i++) {
		setTimeout(function(container, word){container.innerHTML += word}, 100*(t0+i), print, data[i]);
	}
	return t0+i+1
}
// with span
function wordByWordWith(t0, para, print, spanID, spanClass) {
	const elements = para.childNodes;
	var k = 0;
	for (var i = 0; i < elements.length; i++) {
		if (i==0 || i==2) {
			const data = elements[i].textContent.split('');
			for (var j = 0; j < data.length; j++) {
				setTimeout(function(container, word){container.innerHTML += word}, 100*(t0+i+j+k), print, data[j]);
			}
		} else {
			var temp = document.createElement("span");
			var node = document.createTextNode(para.children[0].textContent);
			temp.appendChild(node);
			temp.setAttribute("id", spanID);
			temp.setAttribute("class", spanClass);
			setTimeout(function(container, word){container.appendChild(word)}, 100*(t0+i+k), print, temp);
			j=0;
		}
		k += j;}
	return t0+i+k
}
