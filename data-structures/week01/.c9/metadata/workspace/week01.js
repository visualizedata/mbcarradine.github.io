{"filter":false,"title":"week01.js","tooltip":"/week01.js","undoManager":{"mark":93,"position":93,"stack":[[{"start":{"row":0,"column":0},"end":{"row":8,"column":2},"action":"insert","lines":["var request = require('request');","var fs = require('fs');","","request('http://visualizedata.github.io/thesis/', function (error, response, body) {","  if (!error && response.statusCode == 200) {","    fs.writeFileSync('/home/ubuntu/workspace/data/thesis.txt', body);","  }","  else {console.error('request failed')}","})"],"id":133}],[{"start":{"row":3,"column":9},"end":{"row":3,"column":47},"action":"remove","lines":["http://visualizedata.github.io/thesis/"],"id":134},{"start":{"row":3,"column":9},"end":{"row":4,"column":0},"action":"insert","lines":["http://visualizedata.github.io/datastructures/data/m01.html  ",""]}],[{"start":{"row":6,"column":50},"end":{"row":6,"column":56},"action":"remove","lines":["thesis"],"id":135},{"start":{"row":6,"column":50},"end":{"row":6,"column":51},"action":"insert","lines":["m"]}],[{"start":{"row":6,"column":51},"end":{"row":6,"column":52},"action":"insert","lines":["0"],"id":136}],[{"start":{"row":6,"column":52},"end":{"row":6,"column":53},"action":"insert","lines":["1"],"id":137}],[{"start":{"row":0,"column":0},"end":{"row":9,"column":2},"action":"remove","lines":["var request = require('request');","var fs = require('fs');","","request('http://visualizedata.github.io/datastructures/data/m01.html  ","', function (error, response, body) {","  if (!error && response.statusCode == 200) {","    fs.writeFileSync('/home/ubuntu/workspace/data/m01.txt', body);","  }","  else {console.error('request failed')}","})"],"id":138},{"start":{"row":0,"column":0},"end":{"row":8,"column":2},"action":"insert","lines":["var request = require('request');","var fs = require('fs');","","request('http://visualizedata.github.io/thesis/', function (error, response, body) {","  if (!error && response.statusCode == 200) {","    fs.writeFileSync('/home/ubuntu/workspace/data/thesis.txt', body);","  }","  else {console.error('request failed')}","})"]}],[{"start":{"row":3,"column":46},"end":{"row":3,"column":47},"action":"remove","lines":["/"],"id":139}],[{"start":{"row":3,"column":45},"end":{"row":3,"column":46},"action":"remove","lines":["s"],"id":140}],[{"start":{"row":3,"column":44},"end":{"row":3,"column":45},"action":"remove","lines":["i"],"id":141}],[{"start":{"row":3,"column":43},"end":{"row":3,"column":44},"action":"remove","lines":["s"],"id":142}],[{"start":{"row":3,"column":42},"end":{"row":3,"column":43},"action":"remove","lines":["e"],"id":143}],[{"start":{"row":3,"column":41},"end":{"row":3,"column":42},"action":"remove","lines":["h"],"id":144}],[{"start":{"row":3,"column":40},"end":{"row":3,"column":41},"action":"remove","lines":["t"],"id":145}],[{"start":{"row":3,"column":39},"end":{"row":3,"column":40},"action":"remove","lines":["/"],"id":146}],[{"start":{"row":3,"column":38},"end":{"row":3,"column":39},"action":"remove","lines":["o"],"id":147}],[{"start":{"row":3,"column":37},"end":{"row":3,"column":38},"action":"remove","lines":["i"],"id":148}],[{"start":{"row":3,"column":36},"end":{"row":3,"column":37},"action":"remove","lines":["."],"id":149}],[{"start":{"row":3,"column":35},"end":{"row":3,"column":36},"action":"remove","lines":["b"],"id":150}],[{"start":{"row":3,"column":34},"end":{"row":3,"column":35},"action":"remove","lines":["u"],"id":151}],[{"start":{"row":3,"column":33},"end":{"row":3,"column":34},"action":"remove","lines":["h"],"id":152}],[{"start":{"row":3,"column":32},"end":{"row":3,"column":33},"action":"remove","lines":["t"],"id":153}],[{"start":{"row":3,"column":31},"end":{"row":3,"column":32},"action":"remove","lines":["i"],"id":154}],[{"start":{"row":3,"column":30},"end":{"row":3,"column":31},"action":"remove","lines":["g"],"id":155}],[{"start":{"row":3,"column":29},"end":{"row":3,"column":30},"action":"remove","lines":["."],"id":156}],[{"start":{"row":3,"column":28},"end":{"row":3,"column":29},"action":"remove","lines":["a"],"id":157}],[{"start":{"row":3,"column":27},"end":{"row":3,"column":28},"action":"remove","lines":["t"],"id":158}],[{"start":{"row":3,"column":26},"end":{"row":3,"column":27},"action":"remove","lines":["a"],"id":159}],[{"start":{"row":3,"column":25},"end":{"row":3,"column":26},"action":"remove","lines":["d"],"id":160}],[{"start":{"row":3,"column":24},"end":{"row":3,"column":25},"action":"remove","lines":["e"],"id":161}],[{"start":{"row":3,"column":23},"end":{"row":3,"column":24},"action":"remove","lines":["z"],"id":162}],[{"start":{"row":3,"column":22},"end":{"row":3,"column":23},"action":"remove","lines":["i"],"id":163}],[{"start":{"row":3,"column":21},"end":{"row":3,"column":22},"action":"remove","lines":["l"],"id":164}],[{"start":{"row":3,"column":20},"end":{"row":3,"column":21},"action":"remove","lines":["a"],"id":165}],[{"start":{"row":3,"column":19},"end":{"row":3,"column":20},"action":"remove","lines":["u"],"id":166}],[{"start":{"row":3,"column":18},"end":{"row":3,"column":19},"action":"remove","lines":["s"],"id":167}],[{"start":{"row":3,"column":17},"end":{"row":3,"column":18},"action":"remove","lines":["i"],"id":168}],[{"start":{"row":3,"column":16},"end":{"row":3,"column":17},"action":"remove","lines":["v"],"id":169}],[{"start":{"row":3,"column":15},"end":{"row":3,"column":16},"action":"remove","lines":["/"],"id":170}],[{"start":{"row":3,"column":14},"end":{"row":3,"column":15},"action":"remove","lines":["/"],"id":171}],[{"start":{"row":3,"column":13},"end":{"row":3,"column":14},"action":"remove","lines":[":"],"id":172}],[{"start":{"row":3,"column":12},"end":{"row":3,"column":13},"action":"remove","lines":["p"],"id":173}],[{"start":{"row":3,"column":11},"end":{"row":3,"column":12},"action":"remove","lines":["t"],"id":174}],[{"start":{"row":3,"column":10},"end":{"row":3,"column":11},"action":"remove","lines":["t"],"id":175}],[{"start":{"row":3,"column":9},"end":{"row":3,"column":10},"action":"remove","lines":["h"],"id":176}],[{"start":{"row":3,"column":9},"end":{"row":3,"column":68},"action":"insert","lines":["http://visualizedata.github.io/datastructures/data/m01.html"],"id":177}],[{"start":{"row":5,"column":55},"end":{"row":5,"column":56},"action":"remove","lines":["s"],"id":178}],[{"start":{"row":5,"column":54},"end":{"row":5,"column":55},"action":"remove","lines":["i"],"id":179}],[{"start":{"row":5,"column":53},"end":{"row":5,"column":54},"action":"remove","lines":["s"],"id":180}],[{"start":{"row":5,"column":52},"end":{"row":5,"column":53},"action":"remove","lines":["e"],"id":181}],[{"start":{"row":5,"column":51},"end":{"row":5,"column":52},"action":"remove","lines":["h"],"id":182}],[{"start":{"row":5,"column":50},"end":{"row":5,"column":51},"action":"remove","lines":["t"],"id":183}],[{"start":{"row":5,"column":50},"end":{"row":5,"column":51},"action":"insert","lines":["m"],"id":184}],[{"start":{"row":5,"column":51},"end":{"row":5,"column":52},"action":"insert","lines":["0"],"id":185}],[{"start":{"row":5,"column":52},"end":{"row":5,"column":53},"action":"insert","lines":["1"],"id":186}],[{"start":{"row":3,"column":62},"end":{"row":3,"column":63},"action":"remove","lines":["1"],"id":187}],[{"start":{"row":3,"column":62},"end":{"row":3,"column":63},"action":"insert","lines":["2"],"id":188}],[{"start":{"row":5,"column":52},"end":{"row":5,"column":53},"action":"remove","lines":["1"],"id":189}],[{"start":{"row":5,"column":52},"end":{"row":5,"column":53},"action":"insert","lines":["2"],"id":191}],[{"start":{"row":5,"column":52},"end":{"row":5,"column":53},"action":"remove","lines":["2"],"id":192}],[{"start":{"row":5,"column":52},"end":{"row":5,"column":53},"action":"insert","lines":["3"],"id":193}],[{"start":{"row":3,"column":62},"end":{"row":3,"column":63},"action":"remove","lines":["2"],"id":194}],[{"start":{"row":3,"column":62},"end":{"row":3,"column":63},"action":"insert","lines":["3"],"id":195}],[{"start":{"row":3,"column":62},"end":{"row":3,"column":63},"action":"remove","lines":["3"],"id":196}],[{"start":{"row":3,"column":62},"end":{"row":3,"column":63},"action":"insert","lines":["4"],"id":197}],[{"start":{"row":5,"column":52},"end":{"row":5,"column":53},"action":"remove","lines":["3"],"id":198}],[{"start":{"row":5,"column":52},"end":{"row":5,"column":53},"action":"insert","lines":["4"],"id":199}],[{"start":{"row":3,"column":62},"end":{"row":3,"column":63},"action":"remove","lines":["4"],"id":200}],[{"start":{"row":3,"column":62},"end":{"row":3,"column":63},"action":"insert","lines":["5"],"id":201}],[{"start":{"row":5,"column":52},"end":{"row":5,"column":53},"action":"remove","lines":["4"],"id":202}],[{"start":{"row":5,"column":52},"end":{"row":5,"column":53},"action":"insert","lines":["5"],"id":203}],[{"start":{"row":3,"column":62},"end":{"row":3,"column":63},"action":"remove","lines":["5"],"id":204}],[{"start":{"row":3,"column":62},"end":{"row":3,"column":63},"action":"insert","lines":["6"],"id":205}],[{"start":{"row":5,"column":52},"end":{"row":5,"column":53},"action":"remove","lines":["5"],"id":206}],[{"start":{"row":5,"column":52},"end":{"row":5,"column":53},"action":"insert","lines":["6"],"id":207}],[{"start":{"row":3,"column":62},"end":{"row":3,"column":63},"action":"remove","lines":["6"],"id":208}],[{"start":{"row":3,"column":62},"end":{"row":3,"column":63},"action":"insert","lines":["7"],"id":209}],[{"start":{"row":5,"column":52},"end":{"row":5,"column":53},"action":"remove","lines":["6"],"id":210}],[{"start":{"row":5,"column":52},"end":{"row":5,"column":53},"action":"insert","lines":["7"],"id":211}],[{"start":{"row":3,"column":62},"end":{"row":3,"column":63},"action":"remove","lines":["7"],"id":212}],[{"start":{"row":3,"column":62},"end":{"row":3,"column":63},"action":"insert","lines":["8"],"id":213}],[{"start":{"row":5,"column":52},"end":{"row":5,"column":53},"action":"remove","lines":["7"],"id":214}],[{"start":{"row":5,"column":52},"end":{"row":5,"column":53},"action":"insert","lines":["8"],"id":215}],[{"start":{"row":3,"column":62},"end":{"row":3,"column":63},"action":"remove","lines":["8"],"id":216}],[{"start":{"row":3,"column":62},"end":{"row":3,"column":63},"action":"insert","lines":["9"],"id":217}],[{"start":{"row":5,"column":52},"end":{"row":5,"column":53},"action":"remove","lines":["8"],"id":218}],[{"start":{"row":5,"column":52},"end":{"row":5,"column":53},"action":"insert","lines":["9"],"id":219}],[{"start":{"row":3,"column":62},"end":{"row":3,"column":63},"action":"remove","lines":["9"],"id":220}],[{"start":{"row":3,"column":61},"end":{"row":3,"column":62},"action":"remove","lines":["0"],"id":221}],[{"start":{"row":3,"column":61},"end":{"row":3,"column":62},"action":"insert","lines":["1"],"id":222}],[{"start":{"row":3,"column":62},"end":{"row":3,"column":63},"action":"insert","lines":["0"],"id":223}],[{"start":{"row":5,"column":52},"end":{"row":5,"column":53},"action":"remove","lines":["9"],"id":224}],[{"start":{"row":5,"column":51},"end":{"row":5,"column":52},"action":"remove","lines":["0"],"id":225}],[{"start":{"row":5,"column":51},"end":{"row":5,"column":52},"action":"insert","lines":["1"],"id":226}],[{"start":{"row":5,"column":52},"end":{"row":5,"column":53},"action":"insert","lines":["0"],"id":227}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":5,"column":53},"end":{"row":5,"column":53},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1504056075610,"hash":"0f93a43241a000495502388541b7bcb2c414ff42"}