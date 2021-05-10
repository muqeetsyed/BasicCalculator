function setHistory(num){
    document.getElementById("history-value").innerText = num;
}

function getHistory(){
    return document.getElementById("history-value").innerText;
}

function setOutput(num){
    if(num === ''){
        document.getElementById("output-value").innerText = num;
    }else{
        document.getElementById("output-value").innerText = getFormattedValue(num);
    }
}

function getOutput(){
    return document.getElementById("output-value").innerText;
}

function getFormattedValue(value){
    if(value === "-"){
        return "";
    }
    const n = Number(value);
    return n.toLocaleString("en");
}

function reverseNumberFormat(value){
   return Number(value.replace(/,/g, ''));
}

const operators = document.getElementsByClassName('operator');
for (let i = 0; i < operators.length; i++){
    operators[i].addEventListener('click',function (){
        if(this.innerText === "C"){
            setHistory("");
            setOutput("");
        }else
            if (this.innerText === "CE") {
             const out = reverseNumberFormat(getOutput()).toString();
             if(out){
                 setOutput(out.substr(0,out.length-1));
             }
        }else{
                var history = getHistory();
                const output = reverseNumberFormat(getOutput());
                var result;
                if (output !=="") {
                    history = history + output;
                    if (this.innerText === "=") {
                        result = eval(history);
                        setOutput(result);
                        setHistory("");
                    } else {
                        setHistory(history + this.id);
                        setOutput("");
                    }
                }
            }
    });
}

const numbers = document.getElementsByClassName('number');
for (let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener('click',function (){
        const output = reverseNumberFormat(getOutput());
        if(!isNaN(output)){
            setOutput(output+this.innerText)
        }
    });
}

