score = 80


if (score >= 80) {
    console.log('優')
} else if (score >= 70) {
    console.log('良')
} else if (score >= 60) {
    console.log('可')
} else {
    console.log('不可')
}

const day = parseInt(process.argv[2])
if (day >= 20) {
    console.log('あなたは慎重な性格です')
} else if (day >= 10) {
    console.log('あなたは軽率な性格です')
} else {
    console.log('あなたは普通の性格です')
}
