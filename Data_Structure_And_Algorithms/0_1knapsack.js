const knapSack = (values, weights, n, target) => {
  
  if(target < 0){
    return Number.MIN_SAFE_INTEGER;
  }
  
  if(n < 0 || target === 0){
    return 0;
  }
  
  let include = values[n] + knapSack(values, weights, n - 1, target - weights[n]);

  let exclude = knapSack(values, weights, n - 1, target);

  return Math.max(include, exclude);
}
