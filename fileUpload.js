document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const textArea = document.getElementById('textArea');
            textArea.value = e.target.result;
        };
        reader.readAsText(file);
    }
});
