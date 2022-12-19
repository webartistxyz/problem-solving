def arrangeCoins(self, n: int) -> int:
    left = 1
    right = n
    res = 0

    while left <= right:
        mid = (left + right) // 2
        sum = mid * (mid + 1) // 2

        if sum > n:
            right = mid - 1
        else:
            left = mid + 1
            res = mid

    return res