const str1 = "abc"
JSON.parse(str1)

const str2 = "'abc'"
JSON.parse(str2)

const str3 = '"abc"'
JSON.parse(str3)

const str4 = '{"a": undefined}'
JSON.parse(str4)

const str5 = '{"a": 123}'
JSON.parse(str5)

const str6 = '{a: 123}'
JSON.parse(str6)

const str7 = '{"func":() => console.log("Hi!") }'
JSON.parse(str7)


try {
    const str3 = '"abc"'
    JSON. parse(str3)
    } catch (error) {
        console.error(error)
    }

    // JSONでは""を使う必要がある。str4,5,6,7等

