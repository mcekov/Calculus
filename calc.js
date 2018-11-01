function hello() {
  return [
    { weight: 1.0, range: 'range1' },
    { weight: 1.5, range: 'range2' },
    { weight: 2.0, range: 'range3' },
    { weight: 2.5, range: 'range4' },
    { weight: 3.0, range: 'range5' },
    { weight: 3.5, range: 'range6' },
    { weight: 4.0, range: 'range7' }
  ];
}

$.getScript('data/prices.js', function() {
  const prices = servePrices();

  // console.log(prices);
  // console.log(zone, weight);
});
console.log(data);
let range = getRange(weight);

let price = 0;
price = prices[zone][range];

return price;

/* function getPrice(weight) {
  let prices = {
    range1: 134.36,
    range2: 144.09,
    range3: 153.82,
    range4: 163.55,
    range5: 173.28,
    range6: 183.01,
    range7: 192.74
  };

  let range = {
    0.99: 'range1',
    1.49: 'range2',
    1.99: 'range3',
    2.49: 'range4',
    2.99: 'range5',
    3.49: 'range6',
    3.99: 'range7'
  };

  let res;

  for (let item in range) {
    if (weight <= item) {
      //console.log(item);
      res = range[item];
      break;
    }
  }

  let final;
  for (let price in prices) {
    if (res === price) {
      final = prices[price];
      break;
    }
  }

  return final;
}
 */

/* function getPrice(weight, zone) {
  let prices = {
    1: {
      range1: 134.36,
      range2: 144.09,
      range3: 153.82,
      range4: 163.55,
      range5: 173.28,
      range6: 183.01,
      range7: 192.74
    },
    2: {
      range1: 138.68,
      range2: 149.5,
      range3: 160.32,
      range4: 171.14,
      range5: 181.96,
      range6: 192.78,
      range7: 203.6
    }
  };

  let range = {
    0.99: 'range1',
    1.49: 'range2',
    1.99: 'range3',
    2.49: 'range4',
    2.99: 'range5',
    3.49: 'range6',
    3.99: 'range7'
  };

  for (let item in range) {
    if (weight <= item) {
      //console.log(item);
      rangeVal = range[item];
      break;
    }
  }

  let price = 0;
  price = prices[zone][rangeVal];

  return price;
}

function generator() {
  let result = {};

  for (let i = 1; i < 39; i++) {
    let key = `${i}.49`;
    let val = `range${i}`;

    if (i % 2 !== 0) {
      key = `${i}.49`;
      val = `range${i}`;
      result[key] = val;
    } else {
      key = `${i - 1}.99`;
      val = `range${i}`;
      result[key] = `${val}`;
    }
  }

  $('#gen').append(result);
}

generator();

let ranges = {
  1.0: 'range1',
  1.49: 'range2',
  2.0: 'range3',
  2.49: 'range4',
  3.0: 'range5',
  3.49: 'range6',
  3.99: 'range7',
  4.49: 'range8',
  4.99: 'range9',
  5.49: 'range10',
  5.99: 'range11',
  6.49: 'range12',
  6.99: 'range13',
  7.49: 'range14',
  7.99: 'range15'
};
 */

/*  data = [ 
      138.68,
      149.5,
      160.32,
      171.14,
      181.96,
      192.78,
      203.6,
      214.42,
      225.24,
      231.18,
      237.12,
      243.06,
      249.0,
      254.94,
      260.88,
      266.82,
      272.76,
      278.7,
      284.64,
      296.54,
      308.44,
      320.34,
      332.24,
      344.14,
      356.04,
      367.94,
      379.84,
      391.74,
      403.64,
      415.54,
      427.44,
      439.34,
      451.24,
      463.14,
      475.04,
      486.94,
      498.84,
      510.74,
      522.64
    ];*/

/* for (let i = 0; i < data.length; i++) {
      const element = data[i];
      console.log(element, i + 1);
    } */
