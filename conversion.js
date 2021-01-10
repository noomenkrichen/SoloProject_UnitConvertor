//Converting pressure to psi
function toPSI(p,unit){
	if(unit==="psi"){
		return p;
	}
	if(unit==="bar"){
		return p*14.504;
	}
	if(unit==="atm"){
		return p*14.696;
	}
	if(unit==="Pa"){
		return p/6895;
	}
	if(unit==="mmHg"){
		return p/51.715;
	}
}

//Converting pressure to bar
function toBAR(p,unit){
	if(unit==="psi"){
		return p/14.504;
	}
	if(unit==="bar"){
		return p;
	}
	if(unit==="atm"){
		return p*14.696/14.504;
	}
	if(unit==="Pa"){
		return p/6895/14.504;
	}
	if(unit==="mmHg"){
		return p/51.715/14.504;
	}
}

//Converting pressure to atm
function toATM(p,unit){
	if(unit==="psi"){
		return p/14.696;
	}
	if(unit==="bar"){
		return p*14.504/14.696;
	}
	if(unit==="atm"){
		return p;
	}
	if(unit==="Pa"){
		return p/6895/14.696;
	}
	if(unit==="mmHg"){
		return p/51.715/14.696;
	}
}

function toPA(p,unit){
	if(unit==="psi"){
		return p*6895;
	}
	if(unit==="bar"){
		return p*14.504*6895;
	}
	if(unit==="atm"){
		return p*14.696*6895;
	}
	if(unit==="Pa"){
		return p;
	}
	if(unit==="mmHg"){
		return p*6895/51.715;
	}
}

function toMMHG(p,unit){
	if(unit==="psi"){
		return p*51.715;
	}
	if(unit==="bar"){
		return p*14.504*51.715;
	}
	if(unit==="atm"){
		return p*14.696*51.715;
	}
	if(unit==="Pa"){
		return p*51.715/6895;
	}
	if(unit==="mmHg"){
		return p;
	}
}

function convertP()
{
    if(document.conversion.outUnit.value==="psi"){
        document.conversion.outP.value = Math.round(10000*toPSI(Number.parseFloat(document.conversion.initP.value),document.conversion.initUnit.value))/10000;
    }
    if(document.conversion.outUnit.value==="bar"){
        document.conversion.outP.value = Math.round(10000*toBAR(Number.parseFloat(document.conversion.initP.value),document.conversion.initUnit.value))/10000;
    }
    if(document.conversion.outUnit.value==="atm"){
        document.conversion.outP.value = Math.round(10000*toATM(Number.parseFloat(document.conversion.initP.value),document.conversion.initUnit.value))/10000;
    }
    if(document.conversion.outUnit.value==="Pa"){
        document.conversion.outP.value = Math.round(10000*toPA(Number.parseFloat(document.conversion.initP.value),document.conversion.initUnit.value))10000;
    }
    if(document.conversion.outUnit.value==="mmHg"){
        document.conversion.outP.value = Math.round(10000*toMMHG(Number.parseFloat(document.conversion.initP.value),document.conversion.initUnit.value))10000;
    }
    document.getElementById("output").style.backgroundColor = "lightgreen";
}