def nextGreatestLetter(letters, target) -> str:
        left = 0
        right = len(letters) - 1
        while left <= right:
            mid = (left + right)//2
            if letters[mid] > target:
                right = mid -1
            else:
                left = mid + 1

        print(left)
        print(len(letters))
        print(left % len(letters))
        return letters[left % len(letters)]


print(nextGreatestLetter(["c","f","j", "k"], "j"))