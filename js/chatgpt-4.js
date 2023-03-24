import {Configuration, OpenAIpi} from 'openai'

const apiKey = "sk-CSCqjZqber0w"
const configuration = new Configuration({apiKey})

const completion = await openai.createChatCompletion({
    model: 'gpt-4-0314',
    messages: [{ role: 'user', content: 'Como iterar un Array en JavaScript?'}],
})

console.log(completion.data.choices[0].messages)