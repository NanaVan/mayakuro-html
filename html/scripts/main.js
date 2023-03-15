//initial
function A0Btn() {
	document.getElementById('P0').style.display = 'none';
	document.getElementById('P1').style.display = 'block';
	document.getElementById('P1Btn').style.display = 'block';
	printer('P1line', 'P1print', 'P1Btn', '1');
}

//value judgement
function A1Btn() {
	if(document.getElementById('A1Input').value =='まんようしゅう'){
		document.getElementById('Q11Blank').innerHTML = 'ま';
		document.getElementById('Q12Blank').innerHTML = 'ん';
		document.getElementById('Q13Blank').innerHTML = 'ようしゅう';
		document.getElementById('P1Btn').style.display = 'none';	
		document.getElementById('P2').style.display = 'block';
		document.getElementById('P2Btn').style.display = 'block';
		printer('P2line', 'P2print', 'P2Btn', '2');
	}else{
		document.getElementById('A1Input').value = '';
		document.getElementById('A1Input').setAttribute("placeholder", '错了！再来');
	}
}
function A2Btn() {
	if(document.getElementById('A2Input').value =='やまと'){
		document.getElementById('Q21Blank').innerHTML = 'や';
		document.getElementById('Q22Blank').innerHTML = 'ま';
		document.getElementById('Q23Blank').innerHTML = 'と';
		document.getElementById('P2Btn').style.display = 'none';	
		document.getElementById('P3').style.display = 'block';
		document.getElementById('P3Btn').style.display = 'block';
		printer('P3line', 'P3print', 'P3Btn', '3');
	}else{
		document.getElementById('A2Input').value="";	
		document.getElementById('A2Input').setAttribute("placeholder", '错了！再来');	
	}
}
function A3Btn() {
	if(document.getElementById('A31Input').value =='クロード' && document.getElementById('A32Input').value =='ドビュッシー' ){
		document.getElementById('Q31Blank').innerHTML = 'クロ';
		document.getElementById('Q32Blank').innerHTML = 'ー';
		document.getElementById('Q33Blank').innerHTML = 'ド&#8226;ドビュッシー';
		document.getElementById('P3Btn').style.display = 'none';	
		document.getElementById('P4').style.display = 'block';
		document.getElementById('P4Btn').style.display = 'block';
		printer('P4line', 'P4print', 'P4Btn', '4');
	}else{
		document.getElementById('A31Input').value="";	
		document.getElementById('A32Input').value="";	
		document.getElementById('A31Input').setAttribute("placeholder", '错了！再来');	
		document.getElementById('A32Input').setAttribute("placeholder", '错了！再来');	
	}
}
function A4Btn() {
	if(document.getElementById('A4Input').value =='ファンシーポッズ'){
		document.getElementById('Q41Blank').innerHTML = 'ファンシー';
		document.getElementById('Q42Blank').innerHTML = 'ポ';
		document.getElementById('Q43Blank').innerHTML = 'ッズ';
		document.getElementById('P4Btn').style.display = 'none';	
		document.getElementById('P4hint').style.display = 'none';	
		document.getElementById('P5').style.display = 'block';
		document.getElementById('P5Btn').style.display = 'block';
		printer('P5line', 'P5print', 'P5Btn', '5');
	}else{
		document.getElementById('A4Input').value="";	
		document.getElementById('A4Input').setAttribute("placeholder", '错了！再来');	
	}
}
function A5Btn() {
	if(document.getElementById('A5Input').value =='ユー'){
		document.getElementById('Q51Blank').innerHTML = 'ユー';
		document.getElementById('P5Btn').style.display = 'none';	
		document.getElementById('P5hint').style.display = 'none';	
		document.getElementById('P6').style.display = 'block';
		document.getElementById('P6Btn').style.display = 'block';
		printer('P6line', 'P6print', 'P6Btn', '6');
	}else{
		document.getElementById('A5Input').value="";	
		document.getElementById('A5Input').setAttribute("placeholder", '错了！再来');	
	}
}
function A6Btn() {
	if((document.getElementById('A61Input').value =='まやクロ' || document.getElementById('A61Input').value =='まやくろ' || document.getElementById('A61Input').value =='真矢クロ' || document.getElementById('A61Input').value =='真矢くろ' || document.getElementById('A61Input').value =='マヤクロ' || document.getElementById('A61Input').value =='マヤくろ'  ) && document.getElementById('A62Input').value =='ファンシー' && document.getElementById('A63Input').value =='ユー'){
		document.getElementById('Q61Blank').innerHTML = '真矢クロ';
		document.getElementById('Q62Blank').innerHTML = 'の';
		document.getElementById('Q63Blank').innerHTML = 'ファンシー　ユー';
		document.getElementById('P6Btn').style.display = 'none';	
		changeStyleShadow('Orange', true);
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

// hint
function A4hint() {
	if (document.getElementById('P4hintSpan').innerHTML == '提示' ) {
		document.getElementById('P4hintSpan').innerHTML = '隐藏';
		document.getElementById('P4hint').style.display = 'block';
	} else{
		document.getElementById('P4hintSpan').innerHTML = '提示';
		document.getElementById('P4hint').style.display = 'none';
	}
	
}
function A5hint() {
	if (document.getElementById('P5hintSpan').innerHTML == '提示' ) {
		document.getElementById('P5hintSpan').innerHTML = '隐藏';
		document.getElementById('P5hint').style.display = 'block';
	} else{
		document.getElementById('P5hintSpan').innerHTML = '提示';
		document.getElementById('P5hint').style.display = 'none';
	}
}
function A6hint() {
	if (document.getElementById('P6hintSpan').innerHTML == '提示' ) {
		document.getElementById('P6hintSpan').innerHTML = '隐藏';
		changeStyleShadow('Orange', false);
	} else{
		document.getElementById('P6hintSpan').innerHTML = '提示';
		changeStyleShadow('Orange', true);
	}
}

function changeStyleShadow(className, shadowStatus) {
		const elements = document.getElementsByClassName(className)
		if (shadowStatus== true) {
			for (var i = 0; i < elements.length; i++) {
				elements[i].style.textShadow = 'none';
			}
		} else{
			for (var i = 0; i < elements.length; i++) {
				elements[i].style.textShadow = '3px 3px 1px #000, -3px -3px 1px #fff';
			}
		}
}

// Animate one paragraph with word by word
function printer(inputClassName, outputClassName, btnName, numP){
	var paragraphs = document.getElementsByClassName(inputClassName);
	var prints = document.getElementsByClassName(outputClassName);
	var t = 0
	for (var i = 0; i < paragraphs.length; i++){
		var spanItem = paragraphs[i].getElementsByTagName("span");
		if (spanItem.length != 0) {
			t = wordByWordWith(t, paragraphs[i], prints[i], numP);	
		} else if (paragraphs[i].tagName == 'IMG'){
			setTimeout(function(item){item.style.display='block'}, 120*t, prints[i]);
			t += 1;
		} else {
			t = wordByWordWithOut(t, paragraphs[i], prints[i]);
		}
	}
	setTimeout(function(item){item.style.opacity='1'}, 120*(t+1), document.getElementById(btnName));
}
// without span
function wordByWordWithOut(t0, para, print) {
	const data = para.innerHTML.split('');
	for (var i = 0; i < data.length; i++) {
		setTimeout(function(container, word){container.innerHTML += word}, 120*(t0+i), print, data[i]);
	}
	return t0+i+1
}
// with span
function wordByWordWith(t0, para, print, numP) {
	const elements = para.children;
	var k = 0;
	var spanNodeNum = 1;
	for (var i = 0; i < elements.length; i++) {
		if (elements[i].className == 'plain') {
			const data = elements[i].textContent.split('');
			for (var j = 0; j < data.length; j++) {
				setTimeout(function(container, word){container.innerHTML += word}, 120*(t0+i+j+k), print, data[j]);
			}
		}else {
			var temp = document.createElement("span");
			var node = document.createTextNode(elements[i].textContent);
			temp.appendChild(node);
			temp.setAttribute("id", 'Q' + numP + spanNodeNum + 'Blank');
			temp.setAttribute("class", elements[i].className);
			setTimeout(function(container, word){container.appendChild(word)}, 120*(t0+i+k), print, temp);
			j = 0;
			spanNodeNum += 1;
		}
		k += j;}
	return t0+i+k
}
