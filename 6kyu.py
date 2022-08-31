"""
Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. 
Additionally, if the number is negative, return 0 (for languages that do have them).
Note: If the number is a multiple of both 3 and 5, only count it once.
"""

def solution(number):
    if number < 0:
        return 0
    arr = []
    for x in range(3, number):
        if (x%3==0) or (x%5==0):
            arr.append(x)
            x += 1
    return sum(arr)

        
  
