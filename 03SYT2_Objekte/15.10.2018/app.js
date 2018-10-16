let halloObj = function (obj) {
    obj = null;
    console.log('Ausgabe im halloObj', obj);
};
let o =  {
    name: 'Welt'
};

halloObj(o);
console.log('Ausgabe im Main', o);
