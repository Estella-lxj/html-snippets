const outter = () => {
    let counter = 0;
    console.log('outter', counter);
    const inner = () => {
        console.log('inner', counter);
        return counter += 1;
    }
    return inner;
}

outter();
outter();
outter();

const add = outter();
add();
add();
add();
