const syncCallbacker = (arg1, arg2) => {
    if (typeof arg1 !== 'function' || typeof arg2 !== 'function') 
    throw 'syncCallbacker: error not a function';

    if (arguments.length < 2) throw 'syncCallbacker: less than 2 args';

    let result1 = arg1();
    let result2 = arg2(result1);
    
    return result2;
};



const asyncCallbacker = (argA, argB) => {
    if (typeof argA !== 'function' || typeof argB !== 'function') 
    throw 'asyncCallbacker: error not a function';

    if (arguments.length < 2) throw 'asyncCallbacker:less than 2 args';
    const passInA = ''

    const myRandomNum = 20;
    
    const done = (myRandomNum) => {
    
        argB(myRandomNum, done);
    }
    
    argA(myRandomNum, done);

};

module.exports = { syncCallbacker, asyncCallbacker };
