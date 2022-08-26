"""
instructions are in triple quotes followed by solutions
"""

"""
You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: if there is nothing to sum, the sum is default to 0.
"""
def positive_sum(arr):
    answer = 0
    for number in arr: 
        if number > 0:
            answer += number
    return answer
x = positive_sum([1,-4,7,12])
print(x)
