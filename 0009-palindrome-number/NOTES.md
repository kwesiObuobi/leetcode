​- returned immediately if x < 0. Negative numbers can't be palindromes
- made a copy of `x` so we can manipulate `x` and still have a reference to the original `x`
- Created a loop to reduce `x` until it's less or equal to 0
- In each iteration, I'd take the last digit of `x` using `% 10` and add to `reversed_x`. I did this by multiplying `reveresed_x` by 10 to shift its digits to the left and then added the last digit of `x`
- After extracting the last digit, I removed it from `x` by dividing `x` by 10. (Integer division) .
