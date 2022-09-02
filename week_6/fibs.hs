fib :: (Eq a, Num a, Num p) => a -> p
fib 0 = 0
fib 1 = 1
fib n = fib(n-1) + fib(n-2)

factorial :: (Eq p, Num p) => p -> p
factorial 1 = 1
factorial n = n * factorial (n-1)