


export const formatDate = (date) => {
    const hours = new Date(date).getHours();
    const minutes = new Date(date).getMinutes();
    return `${hours < 10 ? '0' + hours : hours
        }:${minutes < 10 ? '0' + minutes : minutes}`
}

export const downloadMedia = (e, originalimage) => {
   
    e.preventDefault();
    try {
        fetch(originalimage)
            .then(resp => resp.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);

                const nameSplit = originalimage.split("/");
                const duplicateName = nameSplit.pop();

                const a = document.createElement('a');
                a.style.display = "none";
                a.href = url;
                a.download = '' + duplicateName + '';

                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjURL(url);
            }).catch(error => console.log("Error while downloading image", error.message));
    } catch (error) {
        console.log("Error while downloading image", error.message);
    }
}