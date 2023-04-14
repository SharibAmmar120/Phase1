function abc(time) {
    return new Promise((resolve, reject) => {
        if (time <= 5000) {
            setTimeout(() => {
                resolve({ data : "Its Going to Be Early"});
            }, time);
        } else {
            setTimeout(() => {
                reject({data : "Its Going to Be Pretty Late"});
            }, time);
        }
    })
}
abc(10000)
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.error(err);
    });
    