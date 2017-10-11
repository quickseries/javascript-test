# Question 1

The idea behind this solution, is to take any random element *n* from the array and withdraw this element from the prior array while it's not empty.  When this array is empty, we are done, and we add the *composite* number to an array were it doesn't exists.  We add permutations to `permutations`'s array until we got the number of permutations possibilities (`n!`, were `n` is the count of possibles symbols).

# Question 2

For the second question, I used an algorithm to test each element of an array against `sm` which is set to `MAX_SAFE_INTEGER` initialy.  After each iteration, the `pivot` is set to `sm` to find the `nth` smallest number.

This is not an optimal solution.  The optimal solution is to use a *QuickSort* implementation and pick the `nth-1` element of the sorted array.  Unfortunately, providing a *QuickSort* implementation could lead to a kind of plagiarism, since it's a well known algorithm.

My implementation took 1.619ms to execute, while the QuickSort implementation took 0.146 with the same input data.

Response about `Array.sort()`: In this context, using V8 with Node, there are several algorithms used by `sort()` depending on number of elements in the array.  While the number of element is variable, we cannot make sure that's the optimal solution *performance-wise*.
