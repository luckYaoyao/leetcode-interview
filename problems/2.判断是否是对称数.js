const tests = ['aba', 'abba', 'aatctaa', 'abca']
// const tests = ['abtttca']
const isSymmetry = (str) => {
    if (!str || !str.length) {
        return -1
    }
    let result = true
    let start = 0, end = str.length - 1
    const length = str.length
    const isOdd = length % 2 != 0
    while (start < end && result) {
        // console.log(str[start], str[end])
        if (str[start] != str[end]) {
            result = false
        }
        start++
        end--
    }
    return result
}
tests.forEach((item) => {
    console.log(item, isSymmetry(item))
})