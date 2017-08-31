function showPermutation() {

    var permutation = {

        init: function() {

            //ECMAScript 2015 / ES6
            var args = Array.from(arguments);

            var length = args.length,
                result = [args.slice().join("")],
                c = new Array(length).fill(0),
                i = 1,
                k, p;

            while (i < length) {
                if (c[i] < i) {
                    k = i % 2 && c[i];
                    p = args[i];
                    args[i] = args[k];
                    args[k] = p;
                    ++c[i];
                    i = 1;
                    result.push(args.slice().join(""));
                } else {
                    c[i] = 0;
                    ++i;
                }
            }

            return result;
        }

    }

    return permutation.init.apply(permutation, arguments);
}

var result = showPermutation(4, 7, 2);
console.log('result', result)