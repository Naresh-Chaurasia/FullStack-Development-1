const subjects = [
    { id:1, name: 'x' },
    { id:2, name:'y' },
  ];
const sub = subjects.findIndex(function(sub) {
 return sub.name === 'ab';
});
console.log(sub);