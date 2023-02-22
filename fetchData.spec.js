const fetchData = require ('./src/fetchData.js')

test('the data is John', async () => {
    const data = await fetchData();
    expect(data).toBe('John');
  });
  
 