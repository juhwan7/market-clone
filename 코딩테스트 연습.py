def solution(array, commands):
    result = []


    answer = []
    answer2 = []
    answer.append(array[commands[0][0]-1:commands[0][1]])
    answer2 = sum(answer, [])
    answer2.sort()
    result.append(answer2[commands[0][2]-1])


    answer = []
    answer2 = []
    answer.append(array[commands[1][0]-1:commands[1][1]])
    answer2 = sum(answer, [])
    answer2.sort()
    result.append(answer2[commands[1][2]-1])

    answer = []
    answer2 = []
    answer.append(array[commands[2][0]-1:commands[2][1]])
    answer2 = sum(answer, [])
    answer2.sort()
    result.append(answer2[commands[2][2]-1])

    return result


def solution(array, commands):
    answer = []

    for i in commands:
        a= sorted(array[i[0]-1:i[1]])
        b=i[2]-1
        a=a[b]
        answer.append(a)
    return answer