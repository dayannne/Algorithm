N, X = map(int,input().split())
A = [int(i) for i in input().split()]
for i in A:
    if i < X:
        print(i, end=" ")