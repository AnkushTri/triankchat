


export const formatDate = (date) =>{
    const hours = new Date(date).getHours();
    const minutes=new Date(date).getMinutes();
    return `${hours < 10 ? '0' + hours : hours
}:${ minutes < 10 ? '0' + minutes : minutes }`
}