export function saveBlobAsFile(blob, fileName) {
    const downloadLink = document.createElement("a");
    downloadLink.download = fileName;
    downloadLink.innerHTML = "Сохранить";
    if (window.webkitURL != null) {
        downloadLink.href = window.webkitURL.createObjectURL(blob);
    }
    else {
        downloadLink.href = window.URL.createObjectURL(blob);
        downloadLink.onclick = (event) => document.body.removeChild(event.target);
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
    }
    downloadLink.click();
}