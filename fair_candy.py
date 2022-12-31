class Solution(object):
   def fairCandySwap(self, A, B):
      diff = (sum(A) - sum(B))//2
      B=set(B)


      for i in A:
         print(diff)
         if i- diff in B:
            return [i,i-diff]
ob1 = Solution()
print(ob1.fairCandySwap([1,2], [1, 2]))