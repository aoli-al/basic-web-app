import OpenAI from 'openai';


export default async function QueryProcessor(query: string): Promise<string> {
    const openai = new OpenAI({
        apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
        baseURL: "https://app.qusic.me/openai/v1",
    });
    const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: query +' Can you only include answers in your response.' }],
    model: "gpt-3.5-turbo",
    });
    // const { data: completion, response } = await openai.completions.create({
    //     prompt:  query +' Can you only include answers in your response.',
    //     model: 'gpt-3.5-turbo-instruct',
    //   }).withResponse();
    console.log(completion)
    // let obj = JSON.parse(completion);
    // console.log(obj)
    // console.log(completion["choices"])
    // return obj["choices"][0]["message"]["content"];
    return completion.choices[0].message.content!.toString();
}
