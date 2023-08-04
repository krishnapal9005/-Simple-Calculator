
var val = "";
var back;
var btns = document.getElementsByClassName("btn");
Array.from(btns).forEach(function (button) {
    button.addEventListener('click', function (e) {
        try {
            if (e.target.innerHTML == '=') {
                val = eval(val);
                document.getElementById("inputfield").value = val;
                val = back + '=';
            }
            else if (e.target.innerHTML == 'AC') {
                val = "";
                document.getElementById("inputfield").value = val;
                document.getElementById("output").value = "";
            }
            else if (e.target.innerHTML == '&lt;-') {
                val = val.toString(val).slice(0, -1);
                document.getElementById("inputfield").value = val;
                document.getElementById("output").value = "";

            }
            else if ((e.target.innerHTML == '%' || e.target.innerHTML == '*' || e.target.innerHTML == '/' || e.target.innerHTML == '+' || e.target.innerHTML == '-' || e.target.innerHTML == '=') && val == '') {
                document.getElementById("inputfield").value = e.target.innerHTML;
                document.getElementById("output").value = "error";
            }
            else if (e.target.innerHTML == '%') {
                val = val / 100;
                document.getElementById("inputfield").value = val;
                val = back;
            }

            else {
                val = val + e.target.innerHTML;
                back = val;
                document.getElementById("inputfield").value = val;
                document.getElementById("output").value = "";
            }
        } catch {
            document.getElementById("output").value = "Error";
        }
    })
})
