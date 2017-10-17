# IMPORTANT

NO PLAGIARISM WILL BE TOLERATED. We run every test through our plagiarism tool and you will be removed from the list of potential candidates if we find that you have copy pasted code from the web.

We believe that most people are honest, professional individuals, and we wish to provide candidates a familiar, and stress-free environment to do the test in.

We also believe that you should have access to the internet for this test, as in real life, you will sometimes have no choice but to refer to the internet in order to solve a complex problem.

Feel free to research ways to solve the two questions in this test, but try to be different and innovative when creating a solution. DO NOT PLARIARIZE.

# Instructions

1. Fork this repo to your work station.
2. Answer the following questions by creating a JavaScript file for each of the questions.
3. Commit and push your code to your fork.
4. Create a pull request back to the master branch of the origin repo.

# Questions

1. Create a function that takes an unlimited amount of number parameters, and returns an array of all the permutations possible. For example, `myFunction(4, 7, 2) {}` should return `[472, 427, 724, 742, 247, 274]`.

2. Create a function that can find the Nth smallest number in an array. The array can be very very big, so you are not allowed using the `Array.sort()` method. Try to build a function that would perform fast. Also, explain why using `Array.sort()` isn't a good idea when sorting large arrays.


# Answer

## Nth Smallest Number

There are several selection algorithms to find the smallest or largest number in an unsorted array. Each one has its own limitations depending on the scenario. I used binary heap data structure to find the nth smallest number. This solution is very good for smaller value of “N”. It will find the result in almost linear time with space complexity of O(N). Other solution could be to use Quick Select algorithm where it has an average result of finding the element with O(n) runtime. However, quick select is random based selection algorithm and in worst cases it might take O(n^2). Thus, I went for the solution with binary heap assuming the value of N is smaller. However, if the N is larger, I would go with quick select.

Sorting a large array could lead to issues with performance and memory. Different sorting algorithms have different complexity both for runtime and space. For example, Quicksort is most popular sorting algorithm has an average runtime of O(n^2) which is equivalent to worst case of Quick Select algorithm.

We can extend this scenario further by distributing the array into multiple large files and need to find the solution with a limited memory. For this case, sorting should be the least preferred way to find the solution, as distributed sorting heavily depends on IO operations could lead to extremely poor performance.

N = Nth value
n = Length of the array
