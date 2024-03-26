for (let i = 1; i <= 10; i++) {
    let str = "*";
    console.log(str.repeat(i));
}


for (let i = 1; i <=10; i++) {
    let pattern = '';
    for (let j = 1; j <= i; j++) {
        pattern += '*';
    }
    console.log(pattern);
}
