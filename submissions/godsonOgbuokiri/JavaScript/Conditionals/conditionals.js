let p = 123-7;
for (let i = 1; i <= p; i++){
	if(i % 3 == 0 && i % 5 == 0) {
		document.write(" " + "Software Developer ");
	}

	 else if(i % 5 == 0) {
		document.write(" " + "Developer");
	}

	else if(i % 3 == 0 ) {
		document.write(" " + "Software");
	}

	else {
		document.write(" " +  i);
	}
}