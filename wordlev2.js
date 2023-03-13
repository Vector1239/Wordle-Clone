function randomIntFromInterval(min, max) { // min and max included 
  	return Math.floor(Math.random() * (max - min + 1) + min)
}

const rndInt = randomIntFromInterval(1, 2306)
const fword=word_arr[rndInt];
console.log(fword);
function checkWord(currWord){
	var res=[-1,-1,-1,-1,-1];
	//if letter is in exact same pos
	for(var i=0;i<5;i++){
		if(currWord[i]==fword[i]){
			res[i]=10;
		}
	}
	//if letter is in diff pos
	for(var i=0;i<5;i++){
		for(var j=0;j<5;j++){
			if(currWord[i]==fword[j] && res[i]==-1){
				res[i]=5;
			}
		}
	}
	// console.log(res);
	return res;
}
function startT(curr,nextFieldID){
	current=document.getElementById(curr);
	if (current.value.length >= current.maxLength) {
		document.getElementById(nextFieldID).removeAttribute('disabled');
		document.getElementById(nextFieldID).focus(); 
		current.style.border="5px solid #49DDBF";
		document.getElementById(nextFieldID).removeAttribute('readonly');
		current.setAttribute('disabled', true);
		current.setAttribute('readonly', true);
		// document.activeElement.blur(); 
	}						
} 
function movetoNext(curr, nextFieldID,prevFieldID) { 
	current=document.getElementById(curr);
	if (current.value.length >= current.maxLength) {
		document.getElementById(nextFieldID).removeAttribute('disabled');
		document.getElementById(nextFieldID).focus(); 
		current.style.border="5px solid #49DDBF";
		document.getElementById(nextFieldID).removeAttribute('readonly');
		current.setAttribute('disabled', true);
		current.setAttribute('readonly', true);
		// document.activeElement.blur(); 
	}
	else if (event.code === 'Backspace' && current.value.length==0) {
			document.getElementById(prevFieldID).value="";
			current.style.border="0";
			document.getElementById(prevFieldID).removeAttribute('readonly');
			document.getElementById(prevFieldID).removeAttribute('disabled');
			current.setAttribute('disabled', true);
			current.setAttribute('readonly', true);
			document.getElementById(prevFieldID).focus();
		}
}
function finalT(one,two,three,curr,prevFieldID,nextFieldID,level){
	current=document.getElementById(curr);
	if (event.code === 'Backspace' && current.value.length==0) { 
			document.getElementById(prevFieldID).value=""; 
			document.getElementById(prevFieldID).removeAttribute('readonly');
			document.getElementById(prevFieldID).removeAttribute('disabled');
			current.setAttribute('disabled', true);
			current.setAttribute('readonly', true);
			document.getElementById(prevFieldID).focus();

	}
    if (event.code === "Enter" && current.value.length >= current.maxLength) {  
    //checks whether the pressed key is "Enter"
    	var currWord="";
		var ct=0;
    	currWord+=document.getElementById(one).value+document.getElementById(two).value+document.getElementById(three).value+document.getElementById(prevFieldID).value+current.value;
    	console.log(currWord);
        var ans=checkWord(currWord);
        // console.log(ans);
		current.setAttribute('disabled', true);
		current.setAttribute('readonly', true);	
		document.getElementById(nextFieldID).removeAttribute('disabled');
		document.getElementById(nextFieldID).focus(); 
		current.style.border="5px solid #49DDBF";
		document.getElementById(nextFieldID).removeAttribute('readonly');	
        for(var i=0;i<5;i++){
        	if(ans[i]==10){
				ct++;
				switch (i+1) {
				case 5:
					current.style.backgroundColor ="#00C8A0";
					break;
				case 4:
					document.getElementById(prevFieldID).style.backgroundColor="#00C8A0";
					break;
				case 3:
					document.getElementById(three).style.backgroundColor="#00C8A0";
					break;
				case 2:
					document.getElementById(two).style.backgroundColor="#00C8A0";
					break;
				case 1:
					document.getElementById(one).style.backgroundColor="#00C8A0";
					break;
				}		        		
        	}
        	else if(ans[i]==5){
				switch (i+1) {
				case 5:
					current.style.backgroundColor ="#E0745A";
					break;
				case 4:
					document.getElementById(prevFieldID).style.backgroundColor="#E0745A";
					break;
				case 3:
					document.getElementById(three).style.backgroundColor="#E0745A";
					break;
				case 2:
					document.getElementById(two).style.backgroundColor="#E0745A";
					break;
				case 1:
					document.getElementById(one).style.backgroundColor="#E0745A";
					break;
				}		        		
        	}		        		
        }
		if(ct==5){
			switch (level) {
				case 5:
					break;
				case 4:
					document.getElementById("r5-1").style.display = "none";
					document.getElementById("r5-2").style.display = "none";
					document.getElementById("r5-3").style.display = "none";
					document.getElementById("r5-4").style.display = "none";
					document.getElementById("r5-5").style.display = "none";
					break;
				case 3:
					document.getElementById("r4-1").style.display = "none";
					document.getElementById("r4-2").style.display = "none";
					document.getElementById("r4-3").style.display = "none";
					document.getElementById("r4-4").style.display = "none";
					document.getElementById("r4-5").style.display = "none";	

					document.getElementById("r5-1").style.display = "none";
					document.getElementById("r5-2").style.display = "none";
					document.getElementById("r5-3").style.display = "none";
					document.getElementById("r5-4").style.display = "none";
					document.getElementById("r5-5").style.display = "none";
					break;
				case 2:
					document.getElementById("r3-1").style.display = "none";
					document.getElementById("r3-2").style.display = "none";
					document.getElementById("r3-3").style.display = "none";
					document.getElementById("r3-4").style.display = "none";
					document.getElementById("r3-5").style.display = "none";

					document.getElementById("r4-1").style.display = "none";
					document.getElementById("r4-2").style.display = "none";
					document.getElementById("r4-3").style.display = "none";
					document.getElementById("r4-4").style.display = "none";
					document.getElementById("r4-5").style.display = "none";	

					document.getElementById("r5-1").style.display = "none";
					document.getElementById("r5-2").style.display = "none";
					document.getElementById("r5-3").style.display = "none";
					document.getElementById("r5-4").style.display = "none";
					document.getElementById("r5-5").style.display = "none";
					break;
				case 1:
					document.getElementById("r2-1").style.display = "none";
					document.getElementById("r2-2").style.display = "none";
					document.getElementById("r2-3").style.display = "none";
					document.getElementById("r2-4").style.display = "none";
					document.getElementById("r2-5").style.display = "none";

					document.getElementById("r3-1").style.display = "none";
					document.getElementById("r3-2").style.display = "none";
					document.getElementById("r3-3").style.display = "none";
					document.getElementById("r3-4").style.display = "none";
					document.getElementById("r3-5").style.display = "none";

					document.getElementById("r4-1").style.display = "none";
					document.getElementById("r4-2").style.display = "none";
					document.getElementById("r4-3").style.display = "none";
					document.getElementById("r4-4").style.display = "none";
					document.getElementById("r4-5").style.display = "none";	

					document.getElementById("r5-1").style.display = "none";
					document.getElementById("r5-2").style.display = "none";
					document.getElementById("r5-3").style.display = "none";
					document.getElementById("r5-4").style.display = "none";
					document.getElementById("r5-5").style.display = "none";							
					break;
				}
			window.alert("YOU GUESSED CORRECT");
		}
    }			
} 		
