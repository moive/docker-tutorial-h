const { syncDB } = require("../tasks/sync-db")

describe('Test sync-DB', () => { 
  test('should run process two times', () => { 
    let times = syncDB();
    times = syncDB();
    console.log('Was called', times);

    expect(times).toBe(2)
   })
 })