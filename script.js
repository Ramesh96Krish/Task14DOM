let Result = document.getElementById('Result')
function display(value){
    Result.value += value;
}
function Clearscreen(){
    Result.value="";
}
function backspace(){
    Result.value = Result.value.toString().slice(0,-1)
}
document.addEventListener('keydown', function(event) {
    if (!event.key.match(/[0-9]/)) {
        alert('Only numbers are allowed');
    }
});
function calculate(){
    try {
        Result.value = eval(Result.value);
    } catch (error) {
        Result.value = 'Error';
    }
}