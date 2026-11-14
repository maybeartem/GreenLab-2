(function(root){
const candidate={
  pumpStart: humidity => humidity < 35,
  hold: (previous, input) => previous.fault && !input.reset,
  order: () => ['vent', 'pump']
};
if(typeof module!=='undefined')module.exports=candidate;else root.CandidatePolicy=candidate;
})(typeof window!=='undefined'?window:globalThis);
