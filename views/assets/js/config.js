document.getElementById("folderName").onchange(() => {
    var sourceVal = document.getElementById('folderName').files[0].path;
    console.log(sourceVal);
});