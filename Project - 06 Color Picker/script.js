const colorPicker = document.getElementById('colorPicker');
const selectedColor = document.getElementById('container');
        
colorPicker.addEventListener('input',()=>{
    const selectedColorValue = colorPicker.value;
    selectedColor.style.backgroundColor = selectedColorValue;
    document.getElementById("colorName").innerHTML = selectedColorValue;
});