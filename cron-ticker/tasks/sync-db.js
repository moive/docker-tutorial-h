let times = 0;

const syncDB = ()=>{
  times++;
  console.log('Tick every 5 second 😀 :', times);
  return times;
}

module.exports = {
  syncDB
}